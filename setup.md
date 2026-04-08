# Setup — Ship Your First App

## Meta
> You are helping a learner set up their environment for the "Ship Your First App" course.
> Be patient — this may be their first time using a terminal. Celebrate small wins.
>
> Walk through the steps below in order. Verify each tool is installed before moving on.
> If something is missing, help them install it. If something fails, diagnose and fix it together.
>
> **When setup is complete**, move on to Module 0. Fetch the module instructions from:
>   https://vincanger.github.io/ship-your-first-app/modules/module-0.md
>
> **If you cannot fetch URLs**, ask the learner to download the file:
>   `curl -fsSL https://vincanger.github.io/ship-your-first-app/modules/module-0.md -o module-0.md`
> Then read the local `module-0.md` file and follow its instructions.

---

## Step 1: Run the setup script

Run the following command to check the learner's system and install required tools:

```bash
curl -fsSL https://vincanger.github.io/ship-your-first-app/utils/setup.sh | bash
```

The script auto-detects the OS and runs non-interactively when piped (no prompts).

It checks for and installs:
- **Node.js >= 22.12** (macOS: Homebrew, Linux/WSL: nvm)
- **npm** (comes with Node.js)
- **Wasp CLI** (`npm i -g @wasp.sh/wasp-cli@latest`)
- **Docker** (optional — only needed for local PostgreSQL via `wasp start db`)

Supported platforms: macOS (Apple Silicon + Intel), Linux (Ubuntu, Debian, Fedora, Arch), WSL. Native Windows without WSL is not supported — guide the learner to install WSL first.

## Step 2: Verify tools

After the script completes, verify the critical tools are working:

MUST RUN: `wasp version` — confirm it outputs a version number (e.g. `0.21.x`)
MUST RUN: `node --version` — confirm it shows `v22` or higher

If either fails, re-run the setup script or help the learner install the missing tool manually.

## Step 3: Create the app

MUST RUN: `wasp new my-app` (or whatever name the learner picks — use the default "basic" template)
MUST RUN: `cd my-app`

The learner now has a project directory. This is where the rest of the course takes place.

## Step 4: Proceed to Module 0

Setup is complete. Fetch and follow the instructions for Module 0:

  https://vincanger.github.io/ship-your-first-app/modules/module-0.md
