# Zuhn — Claude Code Instructions

## Project Overview

Zuhn is a personal knowledge operating system. It ingests content (YouTube, blogs, Reddit, PDFs, audio recordings), extracts insights via Claude-in-conversation, and stores them in a 5-level compression hierarchy with 7 automated learning mechanisms. All 14 phases are implemented.

## The Golden Rule

**Never manually write insight/principle/source files with Write/Edit tools.** All complex I/O passes through structured, Zod-validated JSON to a TypeScript script:
- Insights → write JSON → `scripts/extract.ts`
- Principles → write JSON → `scripts/create-principles.ts`
- Sources → `scripts/ingest.ts` handles automatically

## Ingestion Workflow

When the user shares a URL or file path:

```
1. npx tsx scripts/ingest.ts <url-or-path>
   → auto-detects type, fetches/transcribes, creates source .md
   → prints SRC-XXXXXX-XXXX ID + clean content

2. Read the content, extract insights as JSON, write to /tmp/zuhn-extract-SRC-XXXXXX-XXXX.json
   → Use source-specific filename to prevent cross-contamination between sources

3. npx tsx scripts/extract.ts --source SRC-XXXXXX-XXXX --file /tmp/zuhn-extract-SRC-XXXXXX-XXXX.json --post-ingest
   → batch-writes insight files, auto-deletes temp file, runs full pipeline
```

For >8-10 insights, batch the extraction (write 8, run extract, write more).

### Channel Ingestion

When the user shares a YouTube channel name or URL:
```
npm run ingest-channel -- --top N --auto-extract "<channel-url>"
```
The `--auto-extract` flag runs autoknowledge automatically after ingestion, spawning Claude agents to extract insights from each new source. No manual extraction needed.

## Behavioral Rules

- **Always extract immediately after ingesting** — when the user sends a URL or file, ingest it AND extract insights in the same turn. Never ask "want me to extract?" — just do it. One continuous flow.
- **Strip markdown code fences from JSON** before parsing — Claude's RLHF training adds ` ```json ` wrappers that break `JSON.parse()`. Always strip them.
- **Use `z.preprocess` for forgiving Zod enums** — normalize case before validation so "Medium" and "medium" both pass.
- **Every insight needs a stance** — a one-sentence directional claim that could be true or false. "AI will displace most white-collar workers" not "This discusses AI's impact on jobs."

## Compression Workflow

When `meta/flags.md` shows COMPRESS flags:

```
1. npx tsx scripts/compress.ts --topic domain/topic
   → outputs structured prompt with insights to compress

2. Identify patterns, write principles as JSON to /tmp/zuhn-principles.json

3. npx tsx scripts/create-principles.ts --file /tmp/zuhn-principles.json --post-ingest
```

## Session Persistence (Sleep/Wake)

When the user says "sleep":
1. Write session state as JSON to `/tmp/zuhn-sleep.json`
2. Run `npx tsx scripts/sleep.ts --file /tmp/zuhn-sleep.json`

When the user says "wake":
1. Run `npx tsx scripts/wake.ts` — read the morning briefing
2. Read `meta/flags.md` for learning mechanism flags
3. Open active files from the briefing

## Key Scripts

| Command | Purpose |
|---------|---------|
| `npm run ingest <url>` | Ingest any content |
| `npm run extract` | Batch-write insights from JSON |
| `npm run post-ingest` | Full pipeline (health → reindex → embed → learn → views → git) |
| `npm run search "query"` | Hybrid search |
| `npm run compress` | Compression prompts |
| `npm run health` | Validate everything |
| `npm run learn` | Run 9 learning mechanisms |
| `npm run views` | Regenerate all views |
| `npm run resurface` | Daily digest |
| `npm run archive` | Intelligent forgetting (use --dry-run first) |
| `npm run wake` / `npm run sleep` | Session persistence |
| `npx tsx scripts/decide.ts --file <json>` | Create decision records from JSON |
| `npx tsx scripts/predict.ts --file <json>` | Create prediction records from JSON |
| `npx tsx scripts/resolve.ts --id <ID> --status <STATUS> --notes <NOTES>` | Resolve a prediction or decision |
| `npx tsx scripts/split-topic.ts` | Move insights between topics |
| `npm run mcp` | Start Zuhn MCP server (registered globally via `claude mcp add`) |
| `npm run bench` | Snapshot knowledge quality metrics to benchmarks/snapshot.json |
| `npm run bench:check` | Compare against previous snapshot, fail if regressed |
| `npx tsx scripts/create-tensions.ts --file <json>` | Create tension records from Claude's judgments |
| `npx tsx scripts/backfill-stances.ts --list` | List insights missing stances for backfill |
| `npm run brief "query"` | Decision brief — relevant principles, predictions, decisions, tensions |

## Architecture Boundaries

- **TypeScript** handles: file I/O, YAML parsing, vector math, clustering, graph traversal, validation
- **Claude** handles: semantic reasoning, insight extraction, compression, tension resolution
- **Ollama** handles: embedding generation (isolated in `embed.ts` only)
- **Whisper** handles: audio transcription (isolated in `audio.ts` only)
- **Never** call Ollama or Whisper from `learn.ts` — it must be pure local math on the SQLite DB

### Hard-Won Technical Constraints

These rules exist because we learned the hard way. Do not deviate:

- **L2-normalize all embedding centroids** before cosine similarity — critical math, skipping this produces garbage cluster assignments
- **Use Louvain community detection, NOT DBSCAN** — DBSCAN suffers from curse of dimensionality in 768-dim embedding space. Louvain on a pruned KNN graph works reliably.
- **Edge pruning threshold: cosine distance < 0.70** (similarity > 0.30) — calibrated to nomic-embed-text distribution where nearest neighbors typically have distance 0.65-0.85. This creates ~1.4 edges per node, enough for Louvain to find community structure.
- **Zero tag overlap for cross-domain transfer** — the surprise filter requires zero shared tags between a principle and a candidate insight for transfer detection. If tags overlap, it's not a surprising cross-domain connection.
- **All complex file I/O through Zod-validated JSON** — Claude writes JSON, TypeScript validates and writes files. Never let Claude Write/Edit insight or principle files directly. This prevents formatting hallucinations, missing YAML keys, and tool-call timeouts.

## Extraction JSON Format

When extracting insights, output this structure:

```json
{
  "source_summary": "2-3 sentence description of the source",
  "insights": [
    {
      "domain": "ai-development",
      "topic": "automation",
      "title": "Clear actionable title",
      "stance": "One-sentence directional claim assertable as true or false",
      "actionability": "immediate",
      "confidence": "medium",
      "shelf_life": "evergreen",
      "tags": ["tag1", "tag2"],
      "resolutions": {
        "one_line": "Single sentence summary",
        "standard": "2-3 paragraph explanation with context and application"
      }
    }
  ]
}
```

## Topic Discipline

**Before creating extraction JSON, you MUST review the existing topic ontology.** Heavily bias toward mapping new insights into existing topics. Only invent a new topic if the concept fundamentally cannot fit into any established category. Run `ls knowledge-base/domains/*/` to see the current structure. Fragmented single-insight topics poison compression, gap detection, and every learning mechanism.

## ID System

All IDs are stateless (timestamp + hash, no counters):
- Insights: `INS-YYMMDD-XXXX`
- Principles: `PRI-YYMMDD-XXXX`
- Mental Models: `MM-YYMMDD-XXXX`
- Sources: `SRC-YYMMDD-XXXX`
- Tensions: `T-YYMMDD-XXXX`

## File Structure

- Knowledge base: `knowledge-base/` (source of truth, markdown + YAML)
- Scripts: `scripts/` (40+ TypeScript scripts)
- Skills: `skills/` (17 portable SKILL.md files — each a standalone workflow)
- Schemas: `scripts/schemas/` (Zod validation)
- Benchmarks: `benchmarks/` (epistemic CI/CD — quality metrics and regression detection)
- MCP server: `scripts/mcp-server.ts` (12 tools — 7 read + 5 write — knowledge access from any directory)
- Claude Code config: `.claude/` (hooks, agents, project settings)
  - `.claude/hooks/block-kb-writes.sh` — PreToolUse guard enforcing the Golden Rule
  - `.claude/hooks/session-setup.sh` — SessionStart env + KB status injection
  - `.claude/agents/` — 3 subagents (insight-validator, kb-researcher, learning-auditor)
- Tests: alongside source files (`*.test.ts`), also `tests/fixtures/`
- CI: `.github/workflows/ci.yml` (tests + health + bench:check + hook verification)
- Roadmap: `docs/roadmap.md`
- Specs: `docs/superpowers/specs/`

## Tech Stack

TypeScript (tsx), Zod, SQLite (better-sqlite3 + FTS5 + sqlite-vec), Ollama (nomic-embed-text), Whisper (local), graphology (Louvain), jsdom + @mozilla/readability, gray-matter, Vitest, Markmap.

## Testing

Run `npm run test` (Vitest). 294 tests across 22 files. Tests live alongside source files.

## Learning Mechanism Flags

After `npm run learn`, check `meta/flags.md` for:
- **COMPRESS** — topic needs insight → principle compression
- **DISCOVER** — cross-topic cluster found by Louvain
- **GAP** — sparse topic adjacent to dense one
- **TRANSFER** — principle may apply to another domain
- **TENSION CANDIDATES** — pairs in `meta/tension-candidates.json` awaiting Claude review. Ask "review tension candidates" to evaluate.

## Existing Domains

ai-development, automation, health, investing, music-production, pets, psychology, startups, video-production
