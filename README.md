# Ship Your First App

An async, AI-led course where learners use an AI coding agent as their tutor and pair programmer to learn web development by building real apps with [Wasp](https://wasp.sh).

## Start the course

Point any AI coding agent at the course entry point:

```
https://wasp-lang.github.io/ship-your-first-app/llms.txt
```

Or paste this prompt into your agent:

> I'm starting the "Ship Your First App" course. Fetch the following URL and follow the instructions: https://wasp-lang.github.io/ship-your-first-app/llms.txt

If your agent can't fetch URLs, download the file and point it at the local copy:

```bash
curl -fsSL https://wasp-lang.github.io/ship-your-first-app/llms.txt -o llms.txt
```

**Works with:** Claude Code, Codex, Copilot, Open Code, and any agent that can read files and run terminal commands.

## Course structure

| Document | Description |
|----------|-------------|
| [Setup](setup.md) | Environment setup and tool installation |
| [Module 0](modules/module-0.md) | Setup & First Vibe — create your first app |
| Module 1 (coming soon) | Data & The Database |
| Module 2 (coming soon) | Making It Look Good |
| Module 3 (coming soon) | How It All Connects |

## How it works

1. The learner runs a setup script that installs Node.js, Wasp CLI, and verifies their environment
2. They create a new Wasp app and open their AI coding agent in the project folder
3. The agent fetches module instructions and acts as a tutor and pair programmer
4. The learner directs what to build in plain language; the agent handles the code
5. Progress is tracked via JSON files the agent writes to the project

## Links

- [Course landing page for humans](https://wasp-lang.github.io/ship-your-first-app/)
- [Wasp](https://wasp.sh)
- [Wasp Discord](https://discord.gg/rzdnErX)
