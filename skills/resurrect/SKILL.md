---
name: resurrect
description: Restore archived insights back to the active knowledge base
allowed-tools: [Read, Bash]
---

## Resurrect Archived Insights

The archive system moves stale, low-value, or superseded insights out of the active knowledge base. Resurrection brings them back when they become relevant again.

### Archive Structure

Archived insights live in subdirectories under `archive/`:

| Directory | Why insights land here |
|-----------|----------------------|
| `archive/stale/` | Time-sensitive insights past their shelf life |
| `archive/superseded/` | Insights replaced by a higher-quality principle or updated insight |
| `archive/low-value/` | Low-confidence insights with no access history |

### Step 1: Find the Insight

If you know the ID:

```bash
npx tsx scripts/resurrect.ts --id INS-YYMMDD-XXXX
```

If you need to search for it, browse the archive directories:

```bash
ls archive/stale/
ls archive/superseded/
ls archive/low-value/
```

Or search by keyword across all archives:

```bash
grep -rl "search term" archive/
```

### Step 2: Review Before Resurrecting

Read the archived insight to confirm it should return to the active knowledge base:

```bash
cat archive/<subdirectory>/<filename>.md
```

Consider:
- Has the context changed, making this insight relevant again?
- Was it archived by mistake during a batch archive?
- Does a newer insight already cover this claim better? (If yes, don't resurrect.)

### Step 3: Resurrect

```bash
npx tsx scripts/resurrect.ts --id INS-YYMMDD-XXXX
```

The script:
- Searches all archive subdirectories (stale/, superseded/, low-value/)
- Reads the YAML frontmatter to find the matching ID
- Moves the file back to its original `domain/topic` directory in the knowledge base

### Step 4: Reindex

After resurrection, run the full pipeline to reindex the restored insight:

```bash
npm run post-ingest
```

This ensures the insight is re-embedded, included in learning mechanisms, and visible in views.

### When to Resurrect

- A previously time-sensitive insight becomes relevant again (e.g., market conditions shift back)
- You realize a superseded insight actually captured a nuance the replacement missed
- Benchmark metrics show a gap where the archived insight would help
- During tension review, a candidate references an archived insight
