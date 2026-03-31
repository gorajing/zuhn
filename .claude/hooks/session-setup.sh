#!/bin/bash
# SessionStart hook: injects Zuhn environment and prints KB status.
# Runs on: startup, resume, clear, compact

ZUHN_ROOT="$(cd "$(dirname "$0")/../.." && pwd)"

# Persistent environment variables via $CLAUDE_ENV_FILE
if [ -n "$CLAUDE_ENV_FILE" ]; then
  echo "export ZUHN_ROOT=\"$ZUHN_ROOT\"" >> "$CLAUDE_ENV_FILE"
  echo "export KB_ROOT=\"$ZUHN_ROOT/knowledge-base\"" >> "$CLAUDE_ENV_FILE"
fi

# Ollama status
OLLAMA_STATUS="offline"
if curl -s --max-time 1 http://localhost:11434/api/tags > /dev/null 2>&1; then
  OLLAMA_STATUS="online"
fi

# KB stats from SQLite
INSIGHT_COUNT="?"
PRINCIPLE_COUNT="?"
DB_PATH="$ZUHN_ROOT/knowledge-base/db/brain.db"
if [ -f "$DB_PATH" ]; then
  INSIGHT_COUNT=$(sqlite3 "$DB_PATH" "SELECT COUNT(*) FROM insights WHERE status='active'" 2>/dev/null || echo "?")
fi
PRINCIPLE_COUNT=$(find "$ZUHN_ROOT/knowledge-base/principles" -name "*.md" ! -name "_index.md" 2>/dev/null | wc -l | tr -d ' ')

# Print summary
echo "Zuhn session ready."
echo "  Root: $ZUHN_ROOT"
echo "  Ollama: $OLLAMA_STATUS"
echo "  KB: $INSIGHT_COUNT insights, $PRINCIPLE_COUNT principles"

# Check learning flags
FLAGS_FILE="$ZUHN_ROOT/knowledge-base/meta/flags.md"
if [ -f "$FLAGS_FILE" ]; then
  COMPRESS_COUNT=$(grep -c "COMPRESS" "$FLAGS_FILE" 2>/dev/null || echo "0")
  if [ "$COMPRESS_COUNT" -gt "0" ]; then
    echo "  Flags: $COMPRESS_COUNT COMPRESS flags active"
  fi
fi
