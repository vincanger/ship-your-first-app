# Setup — Ship Your First App

## Meta
> You are helping a learner set up their environment for the "Ship Your First App" course.
> Be patient — this may be their first time using a terminal. Celebrate small wins.
>
> Follow the steps below **in order**. Do not skip steps. Do not move to the next step
> until the current one succeeds.
>
> **Who runs what:**
> - `AGENT RUN:` — YOU (the agent) execute this command.
> - `LEARNER MUST RUN:` — Tell the learner to run this command themselves. Give them
>   the exact command to copy-paste.
> - `MUST DO:` — YOU (the agent) perform this action.

---

## Step 1: Run the setup script

AGENT RUN:
```bash
curl -fsSL https://vincanger.github.io/ship-your-first-app/utils/setup.sh | bash
```

This script auto-detects the OS and installs:
- Node.js >= 22.12
- npm
- Wasp CLI

Tell the learner: "I'm running a setup script that will install the tools we need. This may take a minute or two."

If the script fails, read the error output and help the learner troubleshoot. Common issues:
- **macOS without Homebrew**: The script will try to install Homebrew first. If that fails, tell the learner to install Homebrew manually: https://brew.sh
- **Linux without nvm**: The script installs nvm automatically. If it fails, check internet connectivity.
- **Windows without WSL**: This course requires WSL. Tell the learner: "We need Windows Subsystem for Linux. Let's install it first." Then help them run `wsl --install` in PowerShell as admin.

---

## Step 2: Verify tools are installed

AGENT RUN: `wasp version`
- **Expected**: A version number like `0.21.x`
- **If it fails**: Run `npm i -g @wasp.sh/wasp-cli@latest` and try again.

AGENT RUN: `node --version`
- **Expected**: `v22.x.x` or higher
- **If it fails**: Re-run the setup script from Step 1.

Tell the learner: "Everything looks good — your tools are installed!"

If either check still fails after retrying, help the learner install the missing tool manually before continuing.

---

## Step 3: Done — move to Module 0

Setup is complete.

MUST DO: Fetch the Module 0 instructions and follow them:
  https://vincanger.github.io/ship-your-first-app/modules/module-0.md

If you cannot fetch URLs, ask the learner to download the file:
```bash
curl -fsSL https://vincanger.github.io/ship-your-first-app/modules/module-0.md -o module-0.md
```
Then read the local `module-0.md` file and follow its instructions.
