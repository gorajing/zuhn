---
name: bench
description: Epistemic CI/CD — snapshot knowledge quality metrics and detect regressions
allowed-tools: [Bash, Read]
---

## Benchmark the Knowledge Base

### Take a Snapshot

```bash
npm run bench
```

Measures and saves to `benchmarks/snapshot.json`:

| Metric | What it tells you |
|--------|-------------------|
| Embedding coverage | % of insights with vector embeddings |
| Index coverage | % of disk files indexed in SQLite |
| Mean confidence | Average confidence (0-4 scale) |
| Compression ratio | Principles / insights per domain |
| Tension resolution rate | Resolved / total tensions |
| Staleness rate | % of time-sensitive insights past 60 days |
| Mean related links | Average connections per insight |
| COMPRESS/DISCOVER/GAP/TRANSFER flags | Learning mechanism outputs |

### Check for Regressions

```bash
npm run bench:check
```

Compares current state against the previous snapshot. Fails (exit 1) if:
- Embedding coverage drops >5%
- Index coverage drops >5%
- Mean confidence drops >0.3 points
- Compression ratio drops >2%
- Connected insights drop >10%
- Mean related links drop >0.5

### When to Run

- After every major ingestion batch
- After compression sessions
- Before and after running `npm run archive`
- Weekly as a health check
