# Ship Your First App

An async, AI-led course where learners use Claude Code as their tutor and pair programmer to learn web dev by building real things with [Wasp](https://wasp.sh).

## Quick Start

### 1. Run the setup script

The setup script checks your system and installs everything you need:

```bash
curl -fsSL https://vincanger.github.io/ship-your-first-app/utils/setup.sh | bash
```

Or download and run it manually:

```bash
curl -fsSL https://vincanger.github.io/ship-your-first-app/utils/setup.sh -o setup.sh
bash setup.sh
```

Pass `--yes` to auto-accept all prompts:

```bash
bash setup.sh --yes
```

### 2. Create your app

```bash
wasp new my-app
cd my-app
wasp start
```

### 3. Start the course

Open Claude Code in your project folder and say:

> "I'm starting Module 0 of Ship Your First App. Fetch and follow the instructions at https://vincanger.github.io/ship-your-first-app/modules/module-0.md"

## What the setup script does

The script detects your OS and checks for the following tools:

| Tool | Required | How it's installed |
|------|----------|--------------------|
| **Node.js >= 22.12** | Yes | macOS: Homebrew. Linux/WSL: nvm |
| **npm** | Yes | Comes with Node.js |
| **Wasp CLI** | Yes | `npm i -g @wasp.sh/wasp-cli@latest` |
| **Claude Code** | Yes | `curl -fsSL https://claude.ai/install.sh \| bash` |
| **Docker** | No | macOS: Homebrew cask. Linux: `get.docker.com`. WSL: Docker Desktop for Windows |

### Supported platforms

- **macOS** (Apple Silicon and Intel)
- **Linux** (Ubuntu, Debian, Fedora, Arch, and others)
- **WSL** (Windows Subsystem for Linux)
- **Windows** without WSL is not supported — the script will guide you to install WSL first

### Features

- Interactive by default — asks before installing anything
- `--yes` / `-y` flag for non-interactive mode
- Idempotent — safe to re-run; skips tools that are already installed
- Color-coded status table so you can see what's ready at a glance

## Requirements

- **Node.js >= 22.12** and npm
- **Wasp CLI** (`@wasp.sh/wasp-cli`)
- **Claude Code** — install via `curl -fsSL https://claude.ai/install.sh | bash` (requires a [Claude Pro or Max subscription](https://claude.ai/pricing) — $20 or $100/month)
- **Docker** (optional) — needed only if you want a local PostgreSQL database via `wasp start db`
