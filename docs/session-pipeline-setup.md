# Session→KB Pipeline Setup (Phase 8)

The Session→KB Pipeline captures insights from Claude Code sessions into Zuhn's knowledge base using explicit intent only — no passive scraping.

## Components

1. **`zuhn_queue_session_insight` MCP tool** — Claude calls this during a session to queue observations worth preserving. Writes to `/tmp/zuhn-session-queue.jsonl`.

2. **`session-end-remind.sh` hook** — Fires on session end. Reminds about queued insights if the queue is non-empty.

3. **`extract-session.ts` script** — Processes the queue through the standard extract pipeline. Run manually: `npm run extract-session`.

## Setup Instructions

### 1. Copy the hook template

```bash
cp templates/hooks/session-end-remind.sh .claude/hooks/session-end-remind.sh
chmod +x .claude/hooks/session-end-remind.sh
```

### 2. Register the Stop hook in `.claude/settings.json`

Add this entry to your `hooks` object:

```json
"Stop": [
  {
    "matcher": "",
    "hooks": [
      {
        "type": "command",
        "command": "bash \"$CLAUDE_PROJECT_DIR/.claude/hooks/session-end-remind.sh\""
      }
    ]
  }
]
```

### 3. Verify the MCP server has the tool

The `zuhn_queue_session_insight` tool is registered in `scripts/mcp-server.ts` and available via `npm run mcp`.

## Usage

During any Claude Code session working with Zuhn:

1. Claude identifies a significant conclusion → calls `zuhn_queue_session_insight`
2. At session end, the hook reminds about queued insights
3. When ready: `npm run extract-session` (or `--dry-run` to preview)

## Design Constraints

- **Explicit intent only** — the hook only reads `/tmp/`, never scrapes other directories
- **No auto-extraction** — `extract-session` must be run manually
- **`.claude/` files are local** — never commit personal `.claude/` config to the public repo
