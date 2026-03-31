---
name: archive
description: Intelligent forgetting — archive stale, low-value, or superseded insights
allowed-tools: [Bash]
---

## Intelligent Forgetting

### Dry Run First (always)

```bash
npx tsx scripts/archive.ts --dry-run
```

This shows what would be archived without making changes. Review the candidates before proceeding.

### Archive Criteria

The archive script evaluates insights based on:
- **Shelf life:** Time-sensitive insights past their expiry
- **Access count:** Insights never accessed or retrieved
- **Confidence:** Low-confidence insights with no supporting evidence
- **Status:** Insights marked as `outdated` or `superseded`

### Execute

```bash
npx tsx scripts/archive.ts
```

Archived insights are moved, not deleted — they can be resurrected:

```bash
npx tsx scripts/resurrect.ts --id INS-YYMMDD-XXXX
```

### When to Archive

- After a major ingestion batch (prevents bloat)
- When benchmark staleness rate is climbing
- Before compression (remove noise first, compress signal)
