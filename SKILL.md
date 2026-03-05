---
name: Cardano MCP
skill_id: cardano-mcp
version: 1.0.0
author: Indigo Protocol
license: MIT
tags: [cardano, mcp, wallet, blockchain]
requires: [node>=18]
---

# Cardano MCP

This skill exposes a **Cardano Model Context Protocol (MCP) server** that allows an AI agent to interact with a connected **Cardano wallet**.

It provides tools for:

- retrieving wallet addresses
- inspecting UTxOs
- viewing balances and native assets
- retrieving ADAHandles
- checking staking delegation and rewards
- optionally signing and submitting transactions

---

# When to use this skill

Use this skill when the user asks about:

- their Cardano wallet
- wallet balances or assets
- UTxOs
- ADAHandles
- staking delegation or rewards
- submitting a Cardano transaction

Do **not** use this skill for:

- blockchain analytics unrelated to the wallet
- price data
- historical chain analysis

---

# Safety & security model

The tool **submit_transaction** is dangerous and must be used carefully.

Before calling `submit_transaction`:

1. Summarize the transaction in plain English.
2. Ask the user to confirm the action.
3. Only proceed if the user explicitly confirms.

Never submit a transaction automatically.

---

# Data interpretation rules

Balances are returned in **lovelace**.

Conversion: 1 ADA = 1,000,000 lovelace


Always convert lovelace to ADA when presenting balances to the user.

Native assets are identified by:

- `policyId`
- `nameHex`

These together uniquely identify an asset.

---

# Tools provided

### Wallet inspection

- **get_addresses**  
  Returns all Cardano addresses controlled by the connected wallet.

- **get_utxos**  
  Returns all UTxOs belonging to the wallet.

- **get_balances**  
  Returns all assets in the wallet.

### Identity

- **get_adahandles**  
  Returns all ADAHandles owned by the wallet.

### Staking

- **get_stake_delegation**  
  Returns the stake pool ID and available staking rewards.

### Transactions

- **submit_transaction**  
  Signs and submits a Cardano transaction CBOR using the connected wallet.

This tool should only be called after explicit user confirmation.

---

# Prerequisites

- Node.js 18+
- A running Cardano MCP server reachable at `MCP_URL`

Example:
http://localhost:8000/mcp

---

# Install (local)

```bash
git clone https://github.com/IndigoProtocol/cardano-mcp
cd cardano-mcp
cp .env.example .env
