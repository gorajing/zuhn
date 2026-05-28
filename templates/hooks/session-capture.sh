#!/bin/bash
# SessionEnd hook — capture the Claude Code session transcript as a Zuhn
# "session" source. MECHANICAL only (no LLM): the transcript is parsed into
# a clean conversation; insight extraction stays the separate, gated step
# (`npm run autoknowledge`), so quality is enforced by the gate, not by hand.
#
# Safe + non-blocking by design: always exits 0. Errors are LOGGED (not
# silenced) to ~/.claude/session-capture.log — a hook you can't watch fire
# is one where silent failure means the feature looks fine and never works.
#
# The Claude Code hook JSON ({ session_id, transcript_path, ... }) arrives on
# stdin and is forwarded to the script via inherited fd 0.
#
# Install: copy to .claude/hooks/, `chmod +x`, and register a SessionEnd hook
# in .claude/settings.json (see docs/session-pipeline-setup.md).
LOG="$HOME/.claude/session-capture.log"
exec >> "$LOG" 2>&1
echo "[$(date -u +"%Y-%m-%dT%H:%M:%SZ")] SessionEnd fire"
ROOT="${CLAUDE_PROJECT_DIR:-$(cd "$(dirname "$0")/../.." && pwd)}"
echo "  root: $ROOT"
cd "$ROOT" || { echo "  cd failed"; exit 0; }
npx tsx scripts/capture-session.ts
echo "  exit: $?"
exit 0
