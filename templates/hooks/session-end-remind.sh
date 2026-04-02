#!/bin/bash
# Phase 8: SessionEnd hook — reminds about queued session insights.
# Safe: only reads /tmp/zuhn-session-queue.jsonl, never scrapes other directories.
QUEUE="/tmp/zuhn-session-queue.jsonl"
if [ -f "$QUEUE" ] && [ -s "$QUEUE" ]; then
  COUNT=$(wc -l < "$QUEUE" | tr -d ' ')
  echo "Zuhn: $COUNT insight(s) queued this session. Run 'npm run extract-session' to capture."
fi
exit 0
