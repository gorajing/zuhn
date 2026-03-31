---
name: learn
description: Run the 9 automated learning mechanisms that discover connections, gaps, tensions, and transfer opportunities
allowed-tools: [Bash, Read]
---

## Run Learning Mechanisms

```bash
npm run learn
```

This runs 8 mechanisms in sequence — all pure local math on the SQLite DB (no LLM calls):

1. **Connection Discovery** — finds top-5 similar insights per insight via vector cosine similarity, updates `related` fields
2. **Emergence Detection** — flags topics where insights >= 5 AND ratio > 5:1 → COMPRESS flags
3. **Confidence Propagation** — when 2 insights from different sources have similarity > 0.85, both get confidence boost
4. **Cluster Discovery** — Louvain community detection on pruned KNN graph, flags communities spanning 2+ topics
5. **Gap Detection** — finds pairs of semantically similar topics with >3:1 insight count ratio
6. **Transfer Detection** — finds principles that may apply to other domains (zero tag overlap = surprise heuristic)
7. **Tension Detection** — finds highly similar insights with opposing keywords, creates tension files
8. **Empirical Propagation** — cascades resolved predictions/decisions into confidence adjustments

### After Running

Check the output flags:

```bash
cat knowledge-base/meta/flags.md
```

| Flag | What to do |
|------|-----------|
| **COMPRESS** | Run `/compress` for that topic |
| **DISCOVER** | Review the cross-topic cluster — potential mental model |
| **GAP** | Consider ingesting content to fill the sparse topic |
| **TRANSFER** | Review whether the principle applies to the target domain |

### Technical Constraints

- Never call Ollama from learn.ts — it must be pure local math
- L2-normalize all centroids before cosine similarity
- Use Louvain, NOT DBSCAN (curse of dimensionality in 768-dim)
- Edge pruning: cosine similarity > 0.75
- Zero tag overlap required for cross-domain transfer detection
