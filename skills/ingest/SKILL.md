---
name: ingest
description: Ingest any content (URL, file, PDF, audio) into the Zuhn knowledge base and immediately extract insights
allowed-tools: [Read, Write, Bash, Edit]
---

## Ingest Content into Zuhn

When the user shares a URL or file path, run the full ingest-then-extract pipeline in one continuous flow. Never ask "want me to extract?" — just do it.

### Step 1: Ingest the source

```bash
npx tsx scripts/ingest.ts <url-or-path>
```

This auto-detects the content type (YouTube, blog, Reddit, PDF, audio), fetches or transcribes it, creates a source markdown file, and prints:
- The source ID (`SRC-YYMMDD-XXXX`)
- The clean text content

### Step 2: Review existing topics

Before extracting, check the current topic ontology:

```bash
ls knowledge-base/domains/*/
```

**Heavily bias toward mapping insights into existing topics.** Only create a new topic if the concept fundamentally cannot fit any existing category. Fragmented single-insight topics poison compression, gap detection, and every learning mechanism.

### Step 3: Extract insights as JSON

Read the ingested content and extract insights. Write them as JSON to `/tmp/zuhn-extract.json`:

```json
{
  "source_summary": "2-3 sentence description of the source",
  "insights": [
    {
      "domain": "ai-development",
      "topic": "automation",
      "title": "Clear actionable title",
      "stance": "One-sentence directional claim (assertable as true or false)",
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

**Important:** Strip any markdown code fences (` ```json `) from the JSON before writing — they break `JSON.parse()`.

For >8-10 insights, batch the extraction: write 8, run extract, write more.

### Step 4: Run the extraction script

```bash
npx tsx scripts/extract.ts --source SRC-YYMMDD-XXXX --file /tmp/zuhn-extract.json --post-ingest
```

The `--post-ingest` flag triggers the full pipeline: health check → reindex → embed → learn → views → git.

### Golden Rule

**Never manually write insight files with Write/Edit tools.** All file I/O goes through Zod-validated JSON → TypeScript scripts. Claude provides semantic value; TypeScript handles file creation.
