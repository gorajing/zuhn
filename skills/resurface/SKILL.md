---
name: resurface
description: Daily digest — spaced resurfacing of forgotten and low-confidence knowledge
allowed-tools: [Bash]
---

## Daily Knowledge Resurfacing

### Run the Digest

```bash
npm run resurface
```

This selects 5-10 insights for review based on a weighted priority formula and outputs them to both stdout and `knowledge-base/views/daily-digest.md`.

### Priority Formula

Each insight is scored by combining three weighted signals:

- **Age score:** Days since the insight was last accessed. Older (forgotten) insights score higher.
- **Confidence score:** Lower-confidence insights are prioritized for review, since revisiting them may either strengthen or retire them.
- **Access frequency:** Insights that have been retrieved or referenced fewer times are surfaced more often, preventing well-known knowledge from dominating.

The formula produces a single priority score per insight. The top 5-10 are selected for the daily digest.

### Output

The digest is written to:

```
knowledge-base/views/daily-digest.md
```

Each entry includes the insight ID, title, stance, domain/topic, confidence level, and days since last access. The same content is printed to stdout for immediate review.

### When to Use

- **Start of session:** Run `npm run resurface` to review forgotten knowledge before beginning work.
- **Periodic review:** Use on a daily or weekly cadence to keep the full knowledge base active in memory.
- **Before compression:** Resurfacing low-confidence insights can reveal candidates for archiving or merging before a compression pass.

### Relationship to Other Workflows

- Resurfaced insights with persistently low confidence may be candidates for `npm run archive`.
- Insights that spark new connections during review can be fed into `npm run learn` to trigger cross-domain transfer detection.
- The daily digest view is regenerated each run (not appended), so it always reflects current priority scores.
