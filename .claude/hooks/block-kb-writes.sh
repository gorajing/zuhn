#!/bin/bash
# PreToolUse hook: blocks Write/Edit to protected knowledge-base paths.
# Claude must use JSON → scripts/extract.ts (insights) or
# JSON → scripts/create-principles.ts (principles) instead.
#
# How it works:
# - Claude Code pipes tool input JSON to stdin
# - We extract file_path and check against protected patterns
# - Exit 0 = allow, Exit 2 = block (returns stderr as feedback to Claude)

INPUT=$(cat)
FILE_PATH=$(echo "$INPUT" | python3 -c "import sys,json; print(json.load(sys.stdin).get('tool_input',{}).get('file_path',''))" 2>/dev/null)

# If we can't parse, allow (don't break other tools)
if [ -z "$FILE_PATH" ]; then
  exit 0
fi

# Block writes to insight, principle, mental-model, and tension directories
if echo "$FILE_PATH" | grep -qE 'knowledge-base/(domains|principles|mental-models|tensions)/'; then
  echo "BLOCKED: Direct writes to knowledge-base content files are not allowed." >&2
  echo "Write JSON to /tmp/zuhn-extract-*.json, then run:" >&2
  echo "  Insights:   npx tsx scripts/extract.ts --source SRC-XXXXXX-XXXX --file /tmp/zuhn-extract-*.json" >&2
  echo "  Principles: npx tsx scripts/create-principles.ts --file /tmp/zuhn-principles.json" >&2
  echo "  Tensions:   npx tsx scripts/create-tensions.ts --file /tmp/zuhn-tensions.json" >&2
  exit 2
fi

exit 0
