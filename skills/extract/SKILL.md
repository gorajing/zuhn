---
name: extract
description: Extract insights from already-ingested content into Zod-validated JSON and batch-write to the knowledge base
allowed-tools: [Read, Write, Bash]
---

## Extract Insights

Use this skill when content has already been ingested (source file exists) and you need to extract insights from it.

### Input

You need:
- The source ID (`SRC-YYMMDD-XXXX`) from a previous ingest
- The clean text content to extract from

### Extraction Format

Write insights as JSON to `/tmp/zuhn-extract.json`:

```json
{
  "source_summary": "2-3 sentence description",
  "insights": [
    {
      "domain": "existing-domain",
      "topic": "existing-topic",
      "title": "Clear actionable title",
      "actionability": "immediate|reference|inspiration",
      "stance": "One-sentence directional claim (assertable as true or false)",
      "confidence": "pending|low|medium|high|very_high",
      "shelf_life": "evergreen|time-sensitive",
      "tags": ["tag1", "tag2"],
      "resolutions": {
        "one_line": "Single sentence",
        "standard": "2-3 paragraphs with context and application"
      }
    }
  ]
}
```

### Stance Requirement

**Every insight MUST have a stance** — a one-sentence directional claim that could be true or false. Stances power tension detection across the knowledge base.

- **Good:** "AI will displace most white-collar workers within a decade"
- **Bad:** "This discusses AI's impact on jobs"

### Enum Handling

Use case-insensitive enum values. The extraction schema uses `z.preprocess` to normalize case, so "Medium" and "medium" both pass validation. Don't worry about exact casing in your JSON.

### Quality Checklist

- [ ] Checked existing topics with `ls knowledge-base/domains/*/`
- [ ] Each insight has a distinct, non-overlapping claim
- [ ] Every insight has a **stance** (directional claim, not description)
- [ ] Titles are actionable, not vague ("X beats Y by Z" not "thoughts on X")
- [ ] Confidence reflects source quality and claim strength
- [ ] Tags are specific enough to enable cross-domain transfer detection
- [ ] Stripped markdown code fences from JSON before writing

### Run

```bash
npx tsx scripts/extract.ts --source SRC-YYMMDD-XXXX --file /tmp/zuhn-extract.json --post-ingest
```

For >8-10 insights, batch: write first 8, run extract, write remaining, run extract again.
