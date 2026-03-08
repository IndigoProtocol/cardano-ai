#!/usr/bin/env bash
set -eo pipefail

# Publish all Cardano AI skills to Smithery
# Usage: SMITHERY_API_KEY=smry_... ./scripts/publish-smithery.sh

if [ -z "${SMITHERY_API_KEY:-}" ]; then
  SETTINGS="$HOME/Library/Application Support/smithery/settings.json"
  if [ -f "$SETTINGS" ]; then
    API_KEY=$(python3 -c "import sys,json; print(json.load(sys.stdin).get('apiKey',''))" < "$SETTINGS" 2>/dev/null || true)
    if [ -n "$API_KEY" ]; then
      SMITHERY_API_KEY="$API_KEY"
    fi
  fi
  if [ -z "${SMITHERY_API_KEY:-}" ]; then
    echo "Error: SMITHERY_API_KEY not set and not found in smithery settings."
    echo "Run: npx smithery auth login"
    exit 1
  fi
fi

BASE="https://api.smithery.ai/skills/indigoprotocol"
REPO="https://github.com/IndigoProtocol/cardano-ai/tree/main"

SLUGS=(
  cardano-balances
  cardano-identity
  cardano-staking
  cardano-transactions
)

PATHS=(
  packages/plugins/cardano-wallet/skills/cardano-balances
  packages/plugins/cardano-wallet/skills/cardano-identity
  packages/plugins/cardano-wallet/skills/cardano-staking
  packages/plugins/cardano-wallet/skills/cardano-transactions
)

echo "Publishing ${#SLUGS[@]} skills to Smithery..."
echo ""

FAILED=0
for i in "${!SLUGS[@]}"; do
  slug="${SLUGS[$i]}"
  path="${PATHS[$i]}"
  printf "  %-24s " "$slug"
  RESPONSE=$(curl -s -w "\n%{http_code}" -X PUT "$BASE/$slug" \
    -H "Authorization: Bearer $SMITHERY_API_KEY" \
    -H "Content-Type: application/json" \
    -d "{\"gitUrl\": \"$REPO/$path\"}")
  HTTP_CODE=$(echo "$RESPONSE" | tail -1)
  BODY=$(echo "$RESPONSE" | sed '$d')
  if [ "$HTTP_CODE" = "200" ] || [ "$HTTP_CODE" = "201" ]; then
    echo "OK ($HTTP_CODE)"
  else
    echo "FAILED ($HTTP_CODE)"
    echo "    $BODY"
    FAILED=$((FAILED + 1))
  fi
done

echo ""
if [ "$FAILED" -eq 0 ]; then
  echo "All skills published successfully!"
  echo "View at: https://smithery.ai/skills?q=indigoprotocol"
else
  echo "$FAILED skill(s) failed to publish."
  exit 1
fi
