# Cardano AI Skills

> AI skills for the Cardano blockchain

[![npm](https://img.shields.io/npm/v/@indigoprotocol/cardano-skills)](https://www.npmjs.com/package/@indigoprotocol/cardano-skills)
[![cardano-wallet](https://img.shields.io/npm/v/@indigoprotocol/cardano-wallet?label=cardano-wallet)](https://www.npmjs.com/package/@indigoprotocol/cardano-wallet)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/IndigoProtocol/cardano-ai)

[Agent Skills](https://agentskills.io/home) for the [Cardano MCP Server](https://github.com/IndigoProtocol/cardano-mcp) -- wallet balances, ADAHandles, staking, and transaction submission for AI agents.

Built on the open [Agent Skills](https://agentskills.io/home) standard -- a portable skill format recognized by OpenAI Codex, Gemini CLI, GitHub Copilot, Cursor, VS Code, OpenClaw, and 20+ other platforms.

---

## Install Skills

### Quick Install (all skills)

```bash
npx @indigoprotocol/cardano-skills --all
```

### Interactive Install

```bash
npx @indigoprotocol/cardano-skills
```

```
 ██████╗ █████╗ ██████╗ ██████╗  █████╗ ███╗   ██╗ ██████╗
██╔════╝██╔══██╗██╔══██╗██╔══██╗██╔══██╗████╗  ██║██╔═══██╗
██║     ███████║██████╔╝██║  ██║███████║██╔██╗ ██║██║   ██║
██║     ██╔══██║██╔══██╗██║  ██║██╔══██║██║╚██╗██║██║   ██║
╚██████╗██║  ██║██║  ██║██████╔╝██║  ██║██║ ╚████║╚██████╔╝
 ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝

  Cardano AI  — Wallet skills for AI agents

  Found 4 skills

  Select skills to install (space to toggle)
    □ cardano-balances
    □ cardano-identity
    □ cardano-staking
    □ cardano-transactions
```

### Browse Available Skills

```bash
npx @indigoprotocol/cardano-skills --list
```

### Install a Specific Skill

```bash
npx @indigoprotocol/cardano-skills --skill cardano-balances
```

### Install to a Specific Agent

```bash
npx @indigoprotocol/cardano-skills --agent claude-code
npx @indigoprotocol/cardano-skills --agent cursor
```

### Install Globally (user-level)

```bash
npx @indigoprotocol/cardano-skills --global
```

### Alternative: Standard Skills CLI

```bash
npx skills add IndigoProtocol/cardano-ai
```

### Alternative: ClawHub (OpenClaw)

```bash
clawhub install cardano-balances
clawhub install cardano-identity
clawhub install cardano-staking
clawhub install cardano-transactions
```

### Manual MCP Configuration

Add the Cardano MCP server to your agent config:

**Claude Code** (`~/.claude/claude_desktop_config.json`):
```json
{
  "mcpServers": {
    "cardano": {
      "command": "npx",
      "args": ["@indigoprotocol/cardano-mcp"]
    }
  }
}
```

**Cursor** (`.cursor/mcp.json`):
```json
{
  "mcpServers": {
    "cardano": {
      "command": "npx",
      "args": ["@indigoprotocol/cardano-mcp"]
    }
  }
}
```

---

## Skills

| Skill | Description | Tools |
|-------|-------------|-------|
| **cardano-balances** | Wallet balances, addresses, and UTxOs | get_balances, get_addresses, get_utxos |
| **cardano-identity** | ADAHandle resolution and lookup | get_adahandles |
| **cardano-staking** | Stake delegation and rewards | get_stake_delegation |
| **cardano-transactions** | Transaction submission with safety model | submit_transaction |

---

## Prerequisites

```bash
npm install -g @indigoprotocol/cardano-mcp
```

The Cardano MCP server requires a seed phrase for wallet connection. See the [cardano-mcp docs](https://github.com/IndigoProtocol/cardano-mcp) for setup.

---

## Components

```
Cardano AI Ecosystem
├── Cardano MCP (Tools)      -> github.com/IndigoProtocol/cardano-mcp
└── Cardano AI (Skills)      -> this repo
    ├── .claude-plugin/       -> plugin discovery manifest
    └── packages/
        ├── cardano-skills/   -> npx installer CLI
        └── plugins/
            └── cardano-wallet/  -> wallet skills package
                └── skills/
                    ├── cardano-balances/
                    ├── cardano-identity/
                    ├── cardano-staking/
                    └── cardano-transactions/
```

---

## What are Agent Skills?

[Agent Skills](https://agentskills.io/home) is an open standard for portable AI agent capabilities. Skills are `SKILL.md` files that any compatible agent can read and execute.

These skills are built for the Cardano blockchain, but the format works with any platform that supports the Agent Skills standard.

---

## Links

- **Cardano MCP Server:** https://github.com/IndigoProtocol/cardano-mcp
- **npm (MCP):** https://www.npmjs.com/package/@indigoprotocol/cardano-mcp
- **Agent Skills Standard:** https://agentskills.io/home

## License

MIT
