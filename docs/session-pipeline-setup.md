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

---

## Automatic capture (SessionEnd hook)

Phase 8 above is *explicit-intent* capture (Claude manually queues insights). The
**session-capture hook** adds *automatic* capture — it records the whole session
at exit, so nothing has to be queued by hand. This is safe now because the
**quality gate exists**: the gate (not manual intent) is the filter that keeps
junk out, so capture can be automatic while quality stays enforced.

### How it works

1. `capture-session.ts` runs on `SessionEnd`. It reads the session transcript,
   strips noise (tool output, `thinking`, subagent sidechains, framework
   injections) down to user prompts + assistant prose, and writes one `session`
   source to `sources/session/`. **No LLM, no extraction** — just capture.
2. `npm run autoknowledge` (manual or scheduled) extracts stanced insights from
   those sources — point it at a stricter gate so the noisier session input
   clears a higher bar:
   `ZUHN_GATE_BLOCKING_CHECKS=stance_present,stance_directional npm run autoknowledge`
3. The gate admits only sharp, novel session-insights; dedup prevents re-capture.

### Setup

```bash
cp templates/hooks/session-capture.sh .claude/hooks/session-capture.sh
chmod +x .claude/hooks/session-capture.sh
```

Register a `SessionEnd` hook in `.claude/settings.json`:

```json
"SessionEnd": [
  {
    "matcher": "",
    "hooks": [
      { "type": "command", "command": "bash \"$CLAUDE_PROJECT_DIR/.claude/hooks/session-capture.sh\"" }
    ]
  }
]
```

### Design note — supersedes Phase 8's constraint *for capture only*

- **Capture is automated; extraction is not.** The hook only *captures* (writes a
  source); insight extraction stays the deliberate, gated `autoknowledge` step —
  so Phase 8's "no auto-extraction" still holds.
- **The gate replaces manual intent as the quality filter.** Phase 8 required
  explicit intent because there was no automatic quality control; the gate now
  provides it, so passive transcript capture is safe.
