# Zuhn

**Not a note-taking app. Not a bookmark manager. A brain.**

A local-first knowledge intelligence system that turns saved content into structured insights, principles, predictions, and searchable memory. Feed it anything — YouTube, blogs, PDFs, podcasts — and it extracts every actionable insight, discovers connections across domains, and continuously gets smarter.

Built for founders, researchers, writers, and anyone who thinks for a living.

## The Core Loop

```
  INGEST            EXTRACT           LEARN              USE
  any URL      →   insights via   →  connections,    →  search, decide,
  or file          Claude + Zod      compression,       predict, act
                                     gap detection
```

Every source you feed it becomes structured knowledge. The system finds patterns you wouldn't — cross-domain transfers, contradictions, gaps. Insights compress into principles. Principles inform decisions. Decisions track outcomes. The loop closes.

## Start Fresh (5 minutes)

```bash
git clone https://github.com/gorajing/zuhn.git && cd zuhn
npm install

# Remove the example knowledge base and create your own
rm -rf knowledge-base
npx tsx scripts/init.ts

# Optional: Ollama for semantic search (recommended)
ollama pull nomic-embed-text

# Ingest your first source
npm run ingest https://youtu.be/your-video-id

# Claude extracts insights as JSON, then:
npx tsx scripts/extract.ts --source SRC-XXXXXX-XXXX --file /tmp/zuhn-extract.json --post-ingest

# Search your knowledge
npm run search "your query"
```

Three commands: **ingest → extract → search.** Everything else builds on top.

## What It Does

1. **Ingests** any URL or file — YouTube, blogs, Reddit, PDFs, audio recordings
2. **Extracts** discrete, actionable insights (Claude reasons, TypeScript validates via Zod)
3. **Learns** — 9 automated mechanisms discover connections, cluster topics, detect gaps, transfer principles across domains, flag contradictions
4. **Compresses** knowledge upward: insights → principles → mental models
5. **Searches** via hybrid keyword + semantic search (SQLite FTS5 + Ollama embeddings)
6. **Predicts & Decides** — testable claims with deadlines, decisions with outcome tracking
7. **Runs autonomously** — daemon processes inbox, extracts insights, red-teams beliefs, scouts evidence while you sleep

## The 5 Levels of Knowledge

```
Level 5: MENTAL MODELS        — Transferable frameworks across domains
Level 4: PRINCIPLES           — Synthesized rules backed by evidence
Level 3: INSIGHTS             — Individual knowledge cards
Level 2: PROCESSED SOURCES    — Summarized, tagged original content
Level 1: RAW INTAKE           — Original content as received
```

Each level compresses the one below. ~800 lines of context for an expert-level answer whether you have 100 or 10,000 insights.

## Quick Reference

```bash
# Ingestion
npm run ingest <url-or-path>       # Any content type
npm run ingest-channel <url>       # Batch YouTube channel (--top N)

# Search
npm run search "query"              # Keyword search
npm run search "query" -- --hybrid  # Keyword + semantic

# Pipeline
npm run post-ingest                 # Full pipeline: health → reindex → embed → learn → views
npm run health                      # Validate everything
npm run learn                       # Run 9 learning mechanisms

# Knowledge Management
npm run compress                    # Find topics ready for compression
npm run mindmap                     # Interactive visualization
npm run resurface                   # Daily digest of insights to review
npm run archive                     # Intelligent forgetting (--dry-run first)

# Empirical Engine
npx tsx scripts/predict.ts --file <json>   # Create testable predictions
npx tsx scripts/decide.ts --file <json>    # Log decisions with insight links
npx tsx scripts/resolve.ts --id <ID> --status <STATUS>  # Track outcomes

# Session
npm run wake                        # Morning briefing
npm run sleep                       # Save session state

# Autonomous
npm run daemon:start                # Background: inbox + scouts + red team
npm run autoknowledge               # Self-improving extraction loop

# Platform
npm run mcp                         # MCP server (11 tools, any Claude session)
npm run test                        # 300 tests across 23 files
```

## How It Learns

| Mechanism | What It Does |
|-----------|-------------|
| **Connection Discovery** | Finds semantically similar insights, populates bidirectional links |
| **Link Prediction** | Common-neighbor algorithm finds connections embeddings miss |
| **Emergence Detection** | Flags topics for compression, sorted by surprise score |
| **Confidence Propagation** | Increases confidence when independent sources corroborate |
| **Semantic Clustering** | Louvain community detection discovers cross-topic clusters |
| **Gap Detection** | Finds sparse areas adjacent to dense knowledge |
| **Cross-Domain Transfer** | Finds principles that apply to other domains (zero-tag-overlap surprise) |
| **Tension Detection** | Flags contradictory insights for resolution |
| **Empirical Propagation** | Cascades confidence when predictions confirm or falsify |

All mechanisms run automatically via `npm run learn`.

## Architecture

```
knowledge-base/                    ← Source of truth (markdown + YAML frontmatter)
├── domains/{domain}/{topic}/*.md  ← Insight files (Zod-validated)
├── principles/{domain}/*.md       ← Synthesized rules from insights
├── mental-models/*.md             ← Transferable frameworks
├── tensions/*.md                  ← Tracked contradictions
├── decisions/*.md                 ← Decision records with outcomes
├── predictions/*.md               ← Testable claims with deadlines
├── sources/{type}/*.md            ← Where insights came from
├── views/mindmap.html             ← Interactive zoomable mindmap
├── meta/flags.md                  ← Learning flags (COMPRESS/DISCOVER/GAP/TRANSFER)
└── db/brain.db                    ← SQLite + FTS5 + sqlite-vec

scripts/                           ← 40+ TypeScript scripts
├── lib/learning.ts                ← 9 learning mechanisms
├── lib/vector-search.ts           ← Hybrid search (RRF ranking)
├── lib/embeddings.ts              ← Ollama embedding client
└── mcp-server.ts                  ← MCP server (11 tools)

skills/                            ← 17 portable SKILL.md files (any LLM agent)
benchmarks/                        ← Epistemic CI/CD (quality metrics + regression gates)
```

**Dual-Graph Architecture** — Fast (vector similarity, rebuilt every run) + Slow (LLM-classified semantic relationships, built async). Relationship types: `SUPPORTS` · `CONTRADICTS` · `EXTENDS` · `TRANSFERS_TO` · `REFINES` · `CHALLENGES`

## Design Philosophy

- **Local-first** — Ollama for embeddings, Whisper for transcription, SQLite for search. Zero cloud dependencies.
- **The file system is the database** — Markdown + YAML frontmatter, git-tracked, human-readable
- **Claude reasons, TypeScript validates** — No LLM in the data path. Zod schemas enforce structure.
- **Compression over accumulation** — Insights → principles → mental models
- **Empiricism over epistemology** — Predictions and decisions close the loop with real-world outcomes
- **The system learns, not just stores** — 9 automated mechanisms discover structure in knowledge

## Tech Stack

| Component | Technology |
|-----------|-----------|
| Knowledge files | Markdown + YAML frontmatter |
| Validation | Zod |
| Database | SQLite + FTS5 + sqlite-vec |
| Embeddings | Ollama (nomic-embed-text, 768 dims) |
| Transcription | Whisper (local) |
| Scripts | TypeScript (tsx) |
| Tests | Vitest (300 tests, 23 files) |
| Graph analysis | graphology + Louvain |
| Reasoning | Claude (in conversation) |

## Design Specs

<details>
<summary>Expand for detailed architecture documents</summary>

- [Dual-Graph Architecture](docs/superpowers/specs/zuhn-v2-design-spec.md) — Fast/Slow memory, typed relationships, surprise-gated compression
- [Brain Engine Architecture](docs/superpowers/specs/2026-03-19-brain-engine-design.md) — Original design document
- [Universal Ingestion Pipeline](docs/superpowers/specs/2026-03-20-universal-ingestion-design.md) — Multi-format content fetching
- [Learning Mechanisms 4-6](docs/superpowers/specs/2026-03-21-learning-mechanisms-4-6-design.md) — Clustering, gap detection, cross-domain transfer
- [Resolve Pipeline](docs/superpowers/specs/2026-03-22-resolve-pipeline-design.md) — Empirical engine with confidence cascade
- [Autonomous Metabolism](docs/superpowers/specs/2026-03-26-phase-19-autonomous-metabolism-design.md) — Daemon, inbox, red team, scouts

</details>

## License

ISC — see [LICENSE](LICENSE) for details.

---

Built by [Jin Choi](https://github.com/gorajing) + Claude.
