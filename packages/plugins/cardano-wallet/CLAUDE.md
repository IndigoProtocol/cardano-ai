# Cardano Wallet Skills

Agent instructions for Cardano wallet operations via the Cardano MCP server.

## MCP Server

All tools require the `@indigoprotocol/cardano-mcp` server. Start it with:

```bash
npx @indigoprotocol/cardano-mcp
```

## Available Tools (6)

### Wallet Inspection (3 tools)

| Tool | Description |
|------|-------------|
| `get_addresses` | Retrieve Cardano addresses for the connected wallet |
| `get_utxos` | Retrieve all UTxOs for the connected wallet |
| `get_balances` | Retrieve all balances and native assets |

### Identity (1 tool)

| Tool | Description |
|------|-------------|
| `get_adahandles` | Retrieve all ADAHandles for the connected wallet |

### Staking (1 tool)

| Tool | Description |
|------|-------------|
| `get_stake_delegation` | Retrieve staked pool ID and available ADA rewards |

### Transactions (1 tool)

| Tool | Description |
|------|-------------|
| `submit_transaction` | Sign and submit a Cardano transaction CBOR |

## Skills

- `skills/cardano-balances/SKILL.md` — Wallet balances, addresses, and UTxOs
- `skills/cardano-identity/SKILL.md` — ADAHandle resolution
- `skills/cardano-staking/SKILL.md` — Stake delegation and rewards
- `skills/cardano-transactions/SKILL.md` — Transaction submission

## Important Notes

- Balances are in **lovelace** (1 ADA = 1,000,000 lovelace). Always convert for display.
- Native assets use `policyId` + `nameHex` as unique identifiers.
- `submit_transaction` is dangerous — always confirm with the user before calling.
