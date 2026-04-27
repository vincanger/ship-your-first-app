import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Resvg } from '@resvg/resvg-js';
import wawoff from 'wawoff2';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const svgPath = resolve(root, 'public/assets/og-image.svg');
const pngPath = resolve(root, 'public/assets/og-image.png');
const woff2Dir = resolve(root, 'node_modules/@fontsource/jetbrains-mono/files');
const ttfCacheDir = resolve(root, 'node_modules/.cache/og-fonts');

const weights = [400, 700, 800];

mkdirSync(ttfCacheDir, { recursive: true });

for (const weight of weights) {
  const ttfPath = resolve(ttfCacheDir, `jetbrains-mono-${weight}.ttf`);
  if (existsSync(ttfPath)) continue;
  const woff2 = readFileSync(resolve(woff2Dir, `jetbrains-mono-latin-${weight}-normal.woff2`));
  const ttf = await wawoff.decompress(woff2);
  writeFileSync(ttfPath, Buffer.from(ttf));
}

const svg = readFileSync(svgPath, 'utf8');

const resvg = new Resvg(svg, {
  fitTo: { mode: 'width', value: 1200 },
  font: {
    fontDirs: [ttfCacheDir],
    defaultFontFamily: 'JetBrains Mono',
    loadSystemFonts: false,
  },
});

const png = resvg.render().asPng();
writeFileSync(pngPath, png);
console.log(`✓ wrote ${pngPath} (${(png.length / 1024).toFixed(1)} KB)`);
