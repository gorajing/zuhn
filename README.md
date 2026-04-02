# Zuhn

A personal knowledge operating system that ingests any content, extracts every actionable insight via Claude, and continuously gets smarter.

**Not a note-taking app. Not a bookmark manager. A brain.**

## What it does

You feed it content — YouTube videos, blog posts, Reddit threads, PDFs, conference recordings — and it:

1. **Ingests** any URL or audio file with one command
2. **Extracts** every discrete, actionable insight (Claude reasons, TypeScript writes files)
3. **Organizes** them into a 5-level compression hierarchy (raw sources → insights → principles → mental models)
4. **Searches** via hybrid keyword + semantic search (SQLite FTS5 + Ollama embeddings)
5. **Learns** — discovers connections, clusters topics, detects gaps, transfers principles across domains, synthesizes cross-domain parallels, flags contradictions
6. **Compresses** knowledge upward (insights → principles → mental models)
7. **Predicts** — derives testable claims from principles with falsifiable metrics and deadlines
8. **Decides** — logs decisions with the insights/principles that informed them, tracks outcomes
9. **Forgets** intelligently — archives stale and low-value insights
10. **Resurfaces** forgotten knowledge via daily digests with outcome-due alerts
11. **Visualizes** as an interactive zoomable mindmap
12. **Red-teams** its own principles — autonomously finds counter-arguments, tracks diversity gaps, and generates challenges
13. **Scouts** for evidence — monitors active predictions and fills knowledge gaps by finding relevant sources
14. **Runs autonomously** — a daemon processes inbox URLs, runs scouts, and red-teams while you sleep
15. **Self-improves** — an autonomous research loop (autoknowledge) extracts, grades, and refines its own extraction quality
16. **Scores quality** — LLM-graded Insight Quality Score (IQS) + composite Knowledge Quality (KQ) metric for epistemic CI/CD

## The 5 Levels of Knowledge

```
Level 5: MENTAL MODELS        — Transferable frameworks across domains
Level 4: PRINCIPLES           — Synthesized rules backed by evidence
Level 3: INSIGHTS             — Individual knowledge cards
Level 2: PROCESSED SOURCES    — Summarized, tagged original content
Level 1: RAW INTAKE           — Original content as received
```

Each level compresses the one below. Query cost scales logarithmically — ~800 lines of context for an expert-level answer whether you have 100 or 10,000 insights.

## Quick Start

> **Note:** This repo contains a live knowledge base. To start your own from scratch, see [Start Fresh](#start-fresh) below.

```bash
# Install dependencies
npm install

# Set up Claude Code configuration (hooks, agents, settings)
cp -r .claude.example .claude

# Optional: Install Ollama for semantic search
# https://ollama.com/download
ollama pull nomic-embed-text

# Optional: Install Whisper for audio transcription
pipx install openai-whisper
brew install ffmpeg

# Run the pipeline (validates + indexes + embeds + learns + views)
npm run post-ingest

# Search your knowledge
npm run search "reduce AI costs"
npm run search "planning" -- --hybrid
npm run search "hooks" -- --domain ai-development

# View the mindmap
open knowledge-base/views/mindmap.html

# Health check
npm run health
```

## Start Fresh

To use Zuhn as your own knowledge OS (without the existing knowledge base):

```bash
# 1. Clone the repo
git clone https://github.com/gorajin/zuhn.git && cd zuhn

# 2. Install dependencies
npm install

# 3. Remove the existing knowledge base and initialize a blank one
rm -rf knowledge-base
npx tsx scripts/init.ts

# 4. Optional: set up Ollama for semantic search
ollama pull nomic-embed-text

# 5. Ingest your first source
npm run ingest https://youtu.be/your-video-id

# 6. Use Claude Code to extract insights (or any Claude interface)
#    Claude reads the transcript, writes JSON, then:
npx tsx scripts/extract.ts --source SRC-XXXXXX-XXXX --file /tmp/zuhn-extract.json --post-ingest
```

The init script creates the full directory structure with empty placeholder files. Domains, topics, and tags are created automatically as you extract insights.

## Ingestion — Feed the Brain

```bash
# YouTube video (auto-downloads transcript via yt-dlp)
npm run ingest https://youtu.be/CxFQykWiJqY

# Blog post (extracts article via readability)
npm run ingest https://blog.example.com/article

# Reddit thread (fetches via .json API)
npm run ingest https://reddit.com/r/ClaudeCode/comments/abc/title

# PDF document
npm run ingest https://example.com/paper.pdf

# Conference recording (transcribes via local Whisper)
npm run ingest /path/to/conference-talk.mp3

# Then Claude extracts insights as JSON, and:
npx tsx scripts/extract.ts --source SRC-XXXXXX-XXXX --file /tmp/zuhn-extract.json --post-ingest
```

Three commands: ingest → extract → post-ingest. Any content type. Fully indexed knowledge.

## All Commands

```bash
# Ingestion
npm run ingest <url-or-path>  # Universal content fetcher (YouTube/blog/Reddit/PDF/audio)
npm run ingest-channel <url>  # Batch ingest top videos from a YouTube channel (--top N, --list-only)
npm run extract               # Batch-write insights from Claude's JSON

# Compression
npm run compress              # Identify topics ready for compression
npm run create-principles     # Batch-write principles from Claude's JSON

# Empirical Engine
npx tsx scripts/decide.ts --file <json>   # Log decisions with informed-by links
npx tsx scripts/predict.ts --file <json>  # Create testable predictions from principles
npx tsx scripts/resolve.ts --id <ID> --status <STATUS> --notes <NOTES>  # Resolve a prediction or decision

# Pipeline
npm run post-ingest           # Full pipeline: health → reindex → embed → learn → views → git
npm run health                # Validate all frontmatter + referential integrity
npm run reindex               # Rebuild all indices
npm run embed                 # Generate/update Ollama embeddings
npm run learn                 # Run all 9 learning mechanisms

# Search
npm run search "query"        # Keyword search (FTS5 BM25)
npm run search "query" -- --semantic   # Vector search (cosine similarity)
npm run search "query" -- --hybrid     # Hybrid search (Reciprocal Rank Fusion)

# Views
npm run views                 # Generate all filtered views
npm run mindmap               # Generate interactive mindmap
npm run resurface             # Daily digest of insights to review

# Knowledge Management
npm run archive               # Archive stale/low-value insights (--dry-run to preview)
npm run resurrect             # Un-archive an insight (--id INS-XXXXXX-XXXX)
npx tsx scripts/split-topic.ts  # Move insights between topics (ontology maintenance)

# Session Persistence
npm run sleep                 # Save session state to meta/session.md
npm run wake                  # Morning briefing: session + flags + outcomes + autonomous activity

# Autonomous Metabolism
npm run daemon:start          # Start background daemon (inbox + scouts + red team)
npm run daemon:stop           # Stop daemon gracefully
npx tsx scripts/inbox-server.ts  # Start inbox HTTP webhook (port 7777)
npx tsx scripts/red-team.ts      # Red-team high-confidence principles
npx tsx scripts/scout-predictions.ts  # Scout evidence for active predictions
npx tsx scripts/scout-gaps.ts    # Find sources for underdeveloped topics

# Platform Tools
npm run mcp                   # Start Zuhn MCP server (read-only knowledge access)
npm run bench                 # Snapshot knowledge quality metrics
npm run bench:check           # Regression detection (fails if quality drops)

# Semantic Graph
npm run classify-edges        # Classify relationship types for high-signal pairs

# Session Pipeline
npm run extract-session       # Process queued session insights (--dry-run to preview)

# Testing
npm run test                  # Run all 300 tests
npm run test:watch            # Watch mode
```

## Architecture

```
knowledge-base/                    ← Source of truth (markdown + YAML frontmatter)
├── MASTER_INDEX.md                ← Boot file — read this first
├── domains/{domain}/{topic}/*.md  ← Insight files (Zod-validated)
├── principles/{domain}/*.md       ← Synthesized rules from insights
├── mental-models/*.md             ← Transferable frameworks
├── tensions/*.md                  ← Tracked contradictions + resolutions
├── decisions/*.md                 ← Decision records with outcome tracking
├── predictions/*.md               ← Testable claims with deadlines
├── sources/{type}/*.md            ← Where insights came from
├── archive/{reason}/*.md          ← Intelligently archived insights
├── tags/*.md                      ← Cross-reference indices
├── views/                         ← Generated views
│   ├── mindmap.html               ← Interactive zoomable mindmap
│   ├── action-list.md             ← Immediately actionable insights
│   ├── stale-board.md             ← Time-sensitive insights needing review
│   ├── source-map.md              ← Sources ranked by insight density
│   ├── gap-report.md              ← Coverage gaps in knowledge
│   └── daily-digest.md            ← Spaced resurfacing selections
├── meta/                          ← System metadata
│   ├── flags.md                   ← Learning layer flags (COMPRESS/DISCOVER/GAP/TRANSFER/SYNTHESIZE)
│   ├── session.md                 ← Persisted session state (sleep/wake)
│   ├── stats.md                   ← Knowledge base statistics
│   ├── bounties.json              ← Red team + gap bounties awaiting human review
│   ├── prediction-evidence.json   ← Scouted evidence for active predictions
│   ├── red-team-history.json      ← History of principle challenges
│   └── pending-urls.txt           ← URLs queued for ingestion
└── db/brain.db                    ← SQLite + FTS5 + sqlite-vec

skills/                            ← Portable methodology (17 SKILL.md files)
├── ingest/SKILL.md                ← Full ingest + extract workflow
├── extract/SKILL.md               ← Insight extraction format + quality checklist
├── compress/SKILL.md              ← Insight → principle compression
├── search/SKILL.md                ← Keyword / semantic / hybrid search
├── learn/SKILL.md                 ← 9 learning mechanisms + flag interpretation
├── sleep-wake/SKILL.md            ← Session persistence
├── decide/SKILL.md                ← Decision records
├── predict/SKILL.md               ← Testable predictions
├── archive/SKILL.md               ← Intelligent forgetting
└── bench/SKILL.md                 ← Epistemic CI/CD

benchmarks/                        ← Knowledge quality monitoring
├── bench.ts                       ← Snapshot 15 quality metrics
├── check.ts                       ← Regression detection (6 gated rules)
└── snapshot.json                  ← Latest quality baseline

scripts/                           ← TypeScript tooling (40+ scripts)
├── schemas/
│   ├── frontmatter.ts             ← Zod schemas for all frontmatter types
│   ├── extraction.ts              ← Zod schema for insight extraction JSON
│   ├── empirical.ts               ← Zod schemas for decisions + predictions
│   └── session.ts                 ← Zod schema for session state
├── lib/
│   ├── parse-insight.ts           ← gray-matter + Zod parser
│   ├── generate-id.ts             ← Stateless ULID-inspired IDs (with salt)
│   ├── generate-index.ts          ← Builds all hierarchical indices
│   ├── db.ts                      ← SQLite + FTS5 database manager
│   ├── search.ts                  ← FTS5 keyword search + temporal decay
│   ├── embeddings.ts              ← Ollama embedding client
│   ├── vector-search.ts           ← Semantic search + RRF hybrid ranking
│   ├── learning.ts                ← 9 learning mechanisms + link prediction + trajectory tracking
│   ├── pagerank.ts                ← Pure TS PageRank for compression seed selection
│   ├── common-neighbors.ts        ← Link prediction via normalized common-neighbor scoring
│   ├── ingest/                    ← Content type handlers
│   │   ├── detect.ts              ← URL/path type classifier
│   │   ├── slug.ts                ← Title → filesystem-safe slug
│   │   ├── youtube.ts             ← yt-dlp + json3 transcript
│   │   ├── blog.ts                ← readability + jsdom extraction
│   │   ├── reddit.ts              ← .json API + three-tier fallback
│   │   ├── pdf.ts                 ← PDF download/copy
│   │   ├── audio.ts               ← Whisper local transcription
│   │   └── transcript-clean.ts    ← json3 → clean paragraphs
│   └── extract/
│       └── write-insights.ts      ← JSON → batch insight file creation
├── ingest.ts                      ← CLI: universal URL/file ingestion
├── extract.ts                     ← CLI: JSON → batch insight files
├── compress.ts                    ← CLI: insight compression prompts
├── create-principles.ts           ← CLI: batch principle file creation
├── post-ingest.ts                 ← Pipeline orchestrator
├── reindex.ts                     ← Rebuild all indices
├── health.ts                      ← Validate all frontmatter
├── embed.ts                       ← Generate/update embeddings
├── learn.ts                       ← Run learning mechanisms
├── search.ts                      ← CLI search interface
├── mindmap.ts                     ← Generate markmap visualization
├── views.ts                       ← Generate filtered views
├── resurface.ts                   ← Spaced resurfacing digest
├── archive.ts                     ← Intelligent forgetting
├── resurrect.ts                   ← Un-archive insights
├── decide.ts                      ← Create decision records from JSON
├── predict.ts                     ← Create prediction records from JSON
├── split-topic.ts                 ← Move insights between topics
├── merge-topics.ts                ← Merge fragmented topics
├── resolve.ts                     ← Resolve predictions/decisions + trigger cascade
├── sleep.ts                       ← Save session state
├── wake.ts                        ← Morning briefing + outcomes due + autonomous activity
├── daemon.ts                      ← Background processor (state machine, fast/heavy modes)
├── inbox-server.ts                ← HTTP webhook for URL ingestion (port 7777)
├── inbox-feedback.ts              ← Process feedback on bounty results
├── red-team.ts                    ← Autonomous principle challenger
├── scout-predictions.ts           ← Evidence scout for active predictions
├── scout-gaps.ts                  ← Source scout for underdeveloped topics
├── create-tensions.ts             ← Batch-create tension records from JSON
├── backfill-stances.ts            ← Backfill missing stances on insights
├── classify-edges.ts              ← Async semantic graph builder (Slow Graph)
├── extract-session.ts             ← Process queued session insights
└── mcp-server.ts                  ← MCP server (10 tools: 6 read + 4 write)

.claude.example/                   ← Claude Code config templates (copy to .claude/ locally)
├── settings.json                  ← Hook registration + project settings
├── hooks/
│   ├── block-kb-writes.sh         ← PreToolUse: enforces Golden Rule (no direct KB writes)
│   └── session-setup.sh           ← SessionStart: injects env vars + KB status
└── agents/
    ├── insight-validator.md       ← Validates extraction JSON before extract.ts
    ├── kb-researcher.md           ← Searches KB for insights on a topic
    └── learning-auditor.md        ← Audits learning mechanism flag outputs

templates/                             ← Configuration templates (copy to local .claude/)
└── hooks/
    └── session-end-remind.sh      ← SessionEnd hook for session insight queue

.github/workflows/
└── ci.yml                         ← Tests + health check + benchmark regression + hook verification
```

## Dual-Graph Architecture

A **Fast/Slow memory system** — two complementary graph layers that separate cheap structural discovery from expensive semantic classification:

```
FAST GRAPH (related: string[])          SLOW GRAPH (evidence: TypedRelation[])
  ↑ Rebuilt every learn.ts run            ↑ Built async by classify-edges.ts
  ↑ Pure vector math, zero LLM calls     ↑ LLM micro-classifier, batched
  ↑ Finds structural neighbors            ↑ Classifies WHY they're connected
```

**Relationship taxonomy:** `SUPPORTS` · `CONTRADICTS` · `EXTENDS` · `TRANSFERS_TO` · `REFINES` · `CHALLENGES` · `PREDICTED`

```bash
# Classify high-signal pairs (tension candidates + cross-domain connections)
npm run classify-edges -- --source tensions --limit 50
npm run classify-edges -- --source cross-domain --limit 100
```

## The Learning Mechanisms

| # | Mechanism | What it Does |
|---|-----------|-------------|
| 1 | **Connection Discovery** | Finds top-5 semantically similar insights, populates `related[]` bidirectionally |
| — | **Link Prediction** | Common neighbors algorithm finds structurally plausible connections the embedding model missed |
| — | **Trajectory Tracking** | Monitors whether typed connections persist across runs (stable / increasing / decreasing) |
| 2 | **Emergence Detection** | Flags topics for compression, **sorted by surprise score** — topics with tensions/transfers compress first |
| 3 | **Confidence Propagation** | Increases confidence when independent sources corroborate (with echo chamber dampening) |
| 4 | **Semantic Clustering** | Louvain community detection on pruned KNN graph — discovers cross-topic clusters |
| 5 | **Gap Detection** | L2-normalized topic centroids find sparse areas adjacent to dense ones (sim > 0.83, 2+ shared tags) |
| 6 | **Cross-Domain Transfer** | Finds principles that apply to other domains (zero-tag-overlap surprise filter) |
| 7 | **Tension Detection** | Flags contradictory insights via opposing heuristic keywords for Claude to resolve |
| 8 | **Empirical Propagation** | Cascades confidence changes when predictions/decisions resolve — asymmetric depth, processedIds guard, empirical_state blocks consensus override |
| 9 | **Cross-Domain Synthesis** | Pairwise PRI↔PRI comparison across domains — finds structural parallels between compressed knowledge with zero tag overlap |

All mechanisms run every ingestion via `npm run learn`. Flags are written to `meta/flags.md` (COMPRESS / DISCOVER / GAP / TRANSFER / SYNTHESIZE / LINK_PREDICT).

### Additional Features

- **PageRank Seed Selection** — compression prompts sort insights by PageRank on the connections subgraph. The most load-bearing insight anchors the principle, not alphabetical by ID.
- **Principle Provenance** — every principle tracks its `lineage`: which insights supported it, their relationship types, surprise score, and the compression trigger.
- **Stale Insight Detection** — `resurface.ts` flags time-sensitive insights past their shelf-life window for revalidation.
- **Session→KB Pipeline** — explicit-intent capture via `zuhn_queue_session_insight` MCP tool. See [Session Pipeline Setup](docs/session-pipeline-setup.md).

## Design Philosophy

- **Claude is the reasoning engine** — no external LLM APIs for analysis
- **TypeScript handles the mechanical work** — fetching, cleaning, file creation, validation, vector math
- **The file system is the database** — markdown + YAML frontmatter, git-tracked, human-readable
- **The hierarchy IS the navigation** — tiered indices for logarithmic query cost
- **The system learns, not just stores** — 9 automated mechanisms discover structure in knowledge
- **Compression over accumulation** — insights compress into principles compress into mental models
- **Empiricism over epistemology** — predictions and decisions close the loop so the system learns from real-world outcomes, not just structural coherence
- **Local-first** — Ollama for embeddings, Whisper for transcription, SQLite for search. Zero cloud dependencies.

## The Empirical Engine

Most "second brain" tools stop at compression — they're beautifully organized graveyards of thought. Zuhn closes the loop:

```
         ┌──── INGEST ◄──── SEEK (bounties) ◄─────┐
         │                                          │
         ▼                                          │
      EXTRACT                                    UPDATE
         │                                     (confidence
         ▼                                      adjustment)
      COMPRESS ──► PREDICT ──► DECIDE ──► TRACK ───┘
```

- **Predictions** (PRED-) derive testable claims from principles with falsifiable metrics and hard deadlines
- **Decisions** (DEC-) log which insights/principles informed each choice, with outcome dates
- **Morning briefing** surfaces outcomes due for review — turning the knowledge base self-correcting
- **Resolve pipeline** (mechanism 8) cascades confidence when predictions confirm/falsify — asymmetric depth (success cascades deep, failure stays shallow to protect facts from flawed synthesis), empirical_state guards prevent structural consensus from overriding reality

## Autonomous Knowledge Metabolism

While you sleep, Zuhn's daemon continuously processes incoming content, stress-tests its own beliefs, and fills knowledge gaps:

```
                    ┌─────────────────────────────────────┐
                    │           DAEMON (daemon.ts)         │
                    │   State machine · Zombie protection  │
                    │   Fast mode · Heavy mode · Idle      │
                    └──────┬──────────┬──────────┬─────────┘
                           │          │          │
                    ┌──────▼──┐ ┌─────▼────┐ ┌──▼──────────┐
                    │  INBOX  │ │RED TEAM   │ │  SCOUTS     │
                    │ Ingest  │ │Challenge  │ │ Predictions │
                    │ queued  │ │principles │ │ Gap-fill    │
                    │ URLs    │ │w/ counter │ │ sources     │
                    └─────────┘ │arguments  │ └─────────────┘
                                └───────────┘
```

- **Inbox Server** (`inbox-server.ts`) — HTTP webhook on port 7777. Route URLs from Telegram, Safari, or Apple Shortcuts into the ingestion queue
- **Daemon** (`daemon.ts`) — Background processor with fast mode (ingestion only) and heavy mode (scouts + red team). Concurrency-safe, zombie-protected
- **Red Team** (`red-team.ts`) — Finds counter-arguments to high-confidence principles from web sources. Tracks geographic/domain diversity gaps. Generates bounties for human review
- **Prediction Scout** (`scout-predictions.ts`) — Searches for evidence supporting or contradicting active predictions. Updates evidence files with direction, strength, and net signal
- **Gap Scout** (`scout-gaps.ts`) — Finds high-quality sources for underdeveloped topics. Estimates insight yield per source. Generates gap bounties ranked by quality

**Morning briefing** (`npm run wake`) surfaces everything the daemon did overnight: red team challenges, prediction evidence, gap bounties, and inbox processing results. Human judgment required for resolutions.

```bash
# Start the daemon
npm run daemon:start

# Send a URL to the inbox (from any device via HTTP)
curl -X POST http://localhost:7777/ingest -H 'Content-Type: application/json' -d '{"url":"https://..."}'

# Run scouts manually
npx tsx scripts/scout-predictions.ts
npx tsx scripts/scout-gaps.ts
npx tsx scripts/red-team.ts
```

## MCP Server — Cross-Project Knowledge Access

Zuhn exposes its knowledge base as an MCP server, making it accessible from **any directory, any Claude Code session**. You can be building a completely different project and ask "what do I know about API design?" — Claude will query your knowledge base.

```bash
# Register globally (one time)
claude mcp add zuhn -s user -- npx tsx /path/to/zuhn/scripts/mcp-server.ts
```

**10 tools (6 read + 4 write):**

| Tool | Purpose |
|------|---------|
| `zuhn_search` | Hybrid keyword + semantic search (falls back to keyword if Ollama is offline) |
| `zuhn_recall` | Full entity by ID (frontmatter + body) |
| `zuhn_browse` | List insights/principles by domain/topic |
| `zuhn_flags` | Current COMPRESS/DISCOVER/GAP/TRANSFER/LINK_PREDICT flags |
| `zuhn_tensions` | Active unresolved tensions |
| `zuhn_stats` | Full knowledge base overview |
| `zuhn_queue_source` | Queue a URL or text for daemon processing |
| `zuhn_submit_insights` | Submit pre-extracted insights (Zod-validated) |
| `zuhn_flag_tension` | Flag a potential tension for human review |
| `zuhn_queue_session_insight` | Queue a session observation for later extraction |

## Autonomous Knowledge Research Loop (autoknowledge)

The knowledge-work equivalent of [Karpathy's autoresearch](https://github.com/karpathy/autoresearch). Human writes `CLAUDE.md` (direction), the system runs the loop:

```
Extract → Grade (Zod) → Learn (embed + cluster) → Compress → Analyze → Refine → Repeat
```

```bash
npm run autoknowledge                     # Process all unextracted sources
npm run autoknowledge -- --limit 20       # Process 20 at a time
npm run autoknowledge -- --channel "EO"   # Process one channel
npm run autoknowledge -- --dry-run        # Preview what would run
```

The self-improvement mechanism: each cycle measures extraction quality (insights/source, Zod pass rate, error patterns), writes refinements to `meta/autoknowledge-refinements.md`, and loads them into the next extraction prompt. Quality improves with each batch.

## Epistemic Quality Pipeline

### Insight Quality Score (IQS)
LLM-graded semantic quality (not regex — avoids Goodhart's Law):
- **Stance Defensibility** (0-3): Is this a falsifiable directional claim?
- **Actionability** (0-3): Can someone DO something with this?
- **Specificity** (0-2): Concrete details, numbers, named examples?
- **Novelty** (0-2): Embedding distance from nearest existing insight

```bash
npm run quality-score              # Score 10 random recent insights
npm run quality-score -- --sample 20  # Score 20
```

### Knowledge Quality (KQ) Metric
One number that tracks epistemic health over time:

```
KQ = f(avg_IQS, compression_ratio, synthesis_hit_rate, staleness_factor)
```

```bash
npm run bench         # Snapshot knowledge quality metrics (KQ score, compression ratio, IQS)
npm run bench:check   # Regression detection — fails if KQ drops
```

### Golden Eval Set
4 frozen, diverse source transcripts (`knowledge-base/evals/sources/`) for controlled A/B prompt testing. Prevents the uncontrolled-variable problem of testing prompts on live data.

## Portable Skills — Use Zuhn's Methodology Anywhere

17 standalone SKILL.md files that any LLM agent can follow — not just Claude Code. Each skill is self-contained with exact commands, JSON formats, quality checklists, and constraints. See [Platform Adaptation Guide](docs/platform-adaptation.md) for Cursor and Codex equivalents.

```bash
# Install into Claude Code
cp -r skills/* ~/.claude/skills/

# Or use with any LLM that reads markdown instructions
```

Skills: `ingest` · `extract` · `compress` · `search` · `learn` · `sleep-wake` · `decide` · `predict` · `archive` · `bench` · `health` · `mcp` · `resurface` · `resurrect` · `backfill` · `tension-review` · `topic-management`

## Capabilities

- 300 automated tests across 23 test files
- 45+ TypeScript scripts
- Hybrid search: keyword (FTS5 BM25) + semantic (L2-normalized 768-dim cosine) with Reciprocal Rank Fusion
- 9 learning mechanisms + autonomous research loop (autoknowledge)
- Epistemic Quality Pipeline: LLM-graded IQS + composite KQ metric + Golden Eval Set
- Self-improving extraction: measures quality, analyzes failures, refines prompts automatically
- Batch YouTube channel ingestion with Whisper fallback for caption-less videos
- Mobile ingestion: phone → Tailscale → inbox server → daemon → autoknowledge
- Claude Code hooks: PreToolUse write guard (enforces Golden Rule), SessionStart env injection
- 3 custom subagents: insight-validator, kb-researcher, learning-auditor
- GitHub Actions CI: tests + health + benchmark regression + hook verification
- Zero external API dependencies (local-first: Ollama, Whisper, SQLite)

## Tech Stack

| Component | Technology |
|-----------|-----------|
| Knowledge files | Markdown + YAML frontmatter |
| Validation | Zod |
| Database | SQLite + FTS5 + sqlite-vec |
| Embeddings | Ollama (nomic-embed-text, 768 dims) |
| Transcription | Whisper (local) |
| Scripts | TypeScript (tsx) |
| Tests | Vitest |
| Article extraction | jsdom + @mozilla/readability |
| Graph analysis | graphology + Louvain |
| Mindmap | Markmap |
| Reasoning | Claude (in conversation) |

## Design Specs

- [Dual-Graph Architecture](docs/superpowers/specs/zuhn-v2-design-spec.md) — Fast/Slow memory, typed relationships, surprise-gated compression, PageRank seeds
- [Brain Engine Architecture](docs/superpowers/specs/2026-03-19-brain-engine-design.md) — the original design document
- [Universal Ingestion Pipeline](docs/superpowers/specs/2026-03-20-universal-ingestion-design.md) — multi-format content fetching
- [Learning Mechanisms 4-6](docs/superpowers/specs/2026-03-21-learning-mechanisms-4-6-design.md) — clustering, gap detection, cross-domain transfer
- [Resolve Pipeline](docs/superpowers/specs/2026-03-22-resolve-pipeline-design.md) — empirical engine with asymmetric confidence cascade
- [Autonomous Knowledge Metabolism](docs/superpowers/specs/2026-03-26-phase-19-autonomous-metabolism-design.md) — daemon, inbox, red team, scouts, bounty system
- Ontology consolidation — merge-topics.ts, topic discipline rules
- MCP Server — cross-project knowledge access via 6 read-only tools
- Benchmark Harness — epistemic CI/CD with 15 quality metrics and regression gates
- Skill Extraction — 17 portable SKILL.md files + platform adaptation guide
- Batch Channel Ingest — `npm run ingest-channel` with yt-dlp, tracker files, resume, Whisper fallback
- Cross-Domain Principle Synthesis — pairwise principle comparison with zero-tag-overlap surprise filter
- Autonomous Research Loop — autoknowledge.ts: extract → grade → learn → compress → analyze → refine → repeat
- Epistemic Quality Pipeline — LLM-graded IQS, composite KQ metric, Golden Eval Set for A/B prompt testing
- System Health Sprint — tiered COMPRESS thresholds, dedup protection, novelty scorer fix, topic-level flag detection
- Autonomous Knowledge Engine — phone→Zuhn pipeline (Tailscale + inbox server), autoknowledge integrated into daemon + post-ingest, concurrent process lock, `--auto-extract` for channel ingestion

## License

MIT — see [LICENSE](LICENSE) for details.

---

Built by Jin Choi + Claude.
