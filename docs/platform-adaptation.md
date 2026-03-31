# Platform Adaptation Guide

Zuhn's 17 skills are written for Claude Code but work with any AI coding assistant. This doc maps the concepts.

## Tool Equivalents

| Claude Code | Cursor (Composer) | Codex (CLI) | OpenClaw | What it does |
|-------------|-------------------|-------------|----------|--------------|
| `Read` | File read (automatic) | `cat` / file read | File read (via Claude Code CLI) | Read file contents |
| `Write` | File write (automatic) | `cat >` / file write | File write (via CLI) | Create new files |
| `Edit` | File edit (automatic) | `sed` / file edit | File edit (via CLI) | Modify existing files |
| `Bash` | Terminal command | Shell command | Shell command (via CLI) | Run shell commands |
| `Grep` | Search (automatic) | `grep` / `rg` | Search (via CLI) | Search file contents |
| `Glob` | File search (automatic) | `find` / `ls` | File search (via CLI) | Find files by pattern |

## Using Skills in Cursor

1. Copy the skill's SKILL.md content into Cursor's system prompt or `.cursorrules`
2. Replace `allowed-tools` frontmatter with Cursor equivalents (Cursor handles this automatically)
3. The step-by-step instructions work as-is — Cursor will map `npx tsx scripts/...` to terminal commands

### Composer setup
Add to `.cursorrules` at project root:
```
When the user asks to ingest content, follow the workflow in skills/ingest/SKILL.md.
When the user asks to compress, follow skills/compress/SKILL.md.
```

## Using Skills in Codex

1. Skills work directly — Codex executes bash commands natively
2. Add CLAUDE.md content to your Codex system prompt or `AGENTS.md`
3. The `allowed-tools` frontmatter is Claude Code-specific — Codex ignores it

### Setup
```bash
# Codex reads AGENTS.md automatically
cp CLAUDE.md AGENTS.md
```

## Using Skills in OpenClaw

OpenClaw is built on Claude Code CLI, so Zuhn works natively — same tools, same runtime. The difference is the interaction model: messaging-based (WhatsApp/Telegram) instead of terminal-based.

### Setup

1. Add CLAUDE.md content to the agent's `soul.md` (OpenClaw's system prompt equivalent)
2. Skills are loaded from the `skills/` directory — point the agent at the repo root
3. All `npx tsx scripts/*.ts` commands work as-is through the CLI backend

### Invocation patterns

Instead of slash commands, use natural language via the messaging interface:

| Claude Code | OpenClaw (messaging) |
|-------------|---------------------|
| `/ingest https://youtu.be/abc` | "ingest this: https://youtu.be/abc" |
| `/compress psychology/perception` | "compress psychology/perception" |
| `/search "scaling laws"` | "search for scaling laws" |
| `npm run wake` | "wake up" / "morning briefing" |
| `npm run sleep` | "sleep" / "save session" |

### Multi-agent advantage

OpenClaw's multi-agent architecture (builder + orchestrator + executors) maps naturally to Zuhn's parallel workflows:
- **Builder agent**: Runs scripts, manages files, executes the pipeline
- **Orchestrator**: Coordinates ingestion → extraction → post-ingest flow
- **Executor agents**: Can process tension candidates, compression, or search in parallel

This is analogous to Claude Code's sub-agent dispatch but with OpenClaw's native agent role separation.

### WhatsApp/messaging workflow

```
User: [sends YouTube URL]
Agent: Ingesting... extracted 12 insights from "AI Market Dynamics"
       Running post-ingest pipeline...
       Done. 2 new COMPRESS flags, 1 TENSION candidate.
       Want me to compress or review tensions?
```

The conversational interface means the agent can prompt for extraction decisions naturally — no JSON file juggling needed if the agent handles it internally.

## Key Differences

| Concept | Claude Code | Cursor | Codex | OpenClaw |
|---------|-------------|--------|-------|----------|
| Project instructions | `CLAUDE.md` | `.cursorrules` | `AGENTS.md` | `soul.md` |
| Persistent memory | `~/.claude/memory/` | Not built-in | Not built-in | Agent state (per soul.md) |
| Skill invocation | `/skill-name` slash command | Natural language | Natural language | Natural language (messaging) |
| Sub-agents | `Agent` tool | Not available | Not available | Native multi-agent (builder/orchestrator/executor) |
| Task tracking | `TodoWrite` tool | Not available | Not available | Conversational (agent manages internally) |

## What Works Everywhere

- All `npx tsx scripts/*.ts` commands — these are plain TypeScript, not Claude Code-specific
- The extraction JSON format — write JSON, run script
- The knowledge-base file structure — standard markdown + YAML frontmatter
- The Zod validation pipeline — catches errors regardless of which AI wrote the JSON
- The post-ingest pipeline — fully automated, no AI involvement needed

## What's Claude Code-Specific

- Slash commands (`/ingest`, `/compress`) — other platforms use natural language
- Sub-agent dispatch for parallel work — falls back to sequential in other platforms
- Memory persistence across sessions — other platforms need manual context loading
- Hook-based skill injection — other platforms need manual skill reference
