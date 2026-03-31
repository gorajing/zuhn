---
name: compress
description: Compress insights into principles when COMPRESS flags are active — the core knowledge distillation workflow
allowed-tools: [Read, Write, Bash]
---

## Compress Insights into Principles

Run this when `meta/flags.md` shows COMPRESS flags, meaning a topic has enough insights to distill into higher-order principles.

### Step 1: Get the compression prompt

```bash
npx tsx scripts/compress.ts --topic domain/topic
```

This outputs all insights in the topic with their one-line summaries — the raw material for compression.

If no `--topic` is provided, it lists all topics flagged for compression.

### Step 2: Identify patterns and write principles

Read the insights and identify patterns that compress multiple insights into a single principle. Write principles as JSON to `/tmp/zuhn-principles.json`:

```json
{
  "principles": [
    {
      "domain": "ai-development",
      "title": "Descriptive principle title",
      "summary": "2-3 sentence explanation of the principle",
      "confidence": "high",
      "supporting_insights": ["INS-260320-XXXX", "INS-260321-YYYY"],
      "tags": ["tag1", "tag2"],
      "resolutions": {
        "one_line": "Single sentence principle statement",
        "standard": "Full explanation with context, evidence, and application"
      }
    }
  ]
}
```

### Compression Guidelines

- A good principle compresses 3-7 insights into one higher-order claim
- Preserve tensions — if insights contradict, don't force-merge them. Note the tension.
- Principles should be actionable: "do X because Y" not "X is interesting"
- Supporting insights should genuinely support the principle, not just be topically related
- Strip markdown code fences from JSON before writing

### Step 3: Create the principles

```bash
npx tsx scripts/create-principles.ts --file /tmp/zuhn-principles.json --post-ingest
```

This validates via Zod, writes principle files, and runs the full pipeline.
