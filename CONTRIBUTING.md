# Contributing to Zuhn

Zuhn is a personal knowledge operating system. Contributions to the engine (scripts, skills, benchmarks) are welcome. The knowledge base itself is private.

## Getting Started

```bash
# Clone and install
git clone https://github.com/gorajin/zuhn.git && cd zuhn
npm install

# Start fresh (removes the existing knowledge base)
rm -rf knowledge-base
npx tsx scripts/init.ts

# Optional: Ollama for semantic search
ollama pull nomic-embed-text

# Optional: Whisper for audio transcription
pipx install openai-whisper
brew install ffmpeg
```

## Project Structure

```
zuhn/
├── skills/              # Portable instruction sets (SKILL.md files)
├── scripts/             # TypeScript engine (40+ scripts)
│   ├── lib/             # Shared libraries (db, search, learning, embeddings)
│   └── schemas/         # Zod validation schemas
├── benchmarks/          # Epistemic CI/CD (quality metrics)
├── knowledge-base/      # Private — not included in public repo
├── docs/                # Architecture docs and roadmap
├── CLAUDE.md            # Claude Code instructions
└── CONTRIBUTING.md      # This file
```

## Development

```bash
# Run all tests
npm test

# Watch mode
npm run test:watch

# Health check (validates all frontmatter + referential integrity)
npm run health

# Full pipeline
npm run post-ingest
```

## Adding a Skill

Skills are the primary contribution type. Each skill is a standalone SKILL.md file that any LLM agent can follow.

### Skill Structure

```
skills/
└── your-skill/
    └── SKILL.md
```

### SKILL.md Format

```yaml
---
name: your-skill
description: One-line description of what this skill does
allowed-tools: [Read, Write, Bash, Edit]
---

## Title

Instructions that any LLM agent can follow to accomplish the task.
Include: steps, commands, JSON formats, quality checklists, and constraints.
```

### Skill Guidelines

1. **Self-contained** — A skill should work without reading CLAUDE.md
2. **Tool-agnostic** — Write for any LLM, not just Claude Code
3. **Include commands** — Show exact bash commands to run
4. **Include formats** — Show JSON schemas for any structured input
5. **Include constraints** — Document what NOT to do (the hard-won rules)
6. **Test it** — Install locally and verify: `cp -r skills/your-skill ~/.claude/skills/`

## Modifying Scripts

### Architecture Rules

- TypeScript handles file I/O, validation, vector math, graph traversal
- LLMs handle semantic reasoning only (extraction, compression, tension resolution)
- Ollama is isolated in `embed.ts` — never call it from `learn.ts`
- All file writes go through Zod-validated JSON → TypeScript scripts
- L2-normalize centroids before cosine similarity
- Louvain for clustering, NOT DBSCAN

### Testing

```bash
npm run test        # 294 tests via Vitest
npm run bench       # Knowledge quality snapshot
npm run bench:check # Regression detection
```

### Pull Request Checklist

- [ ] Tests pass (`npm run test`)
- [ ] Health check passes (`npm run health`)
- [ ] Benchmark doesn't regress (`npm run bench:check`)
- [ ] New scripts added to `package.json`
- [ ] CLAUDE.md updated if workflow changed
- [ ] Skill files updated if relevant

## Code of Conduct

Be respectful. Attack ideas, not people. This is a knowledge system — apply the same intellectual rigor to contributions that Zuhn applies to knowledge.
