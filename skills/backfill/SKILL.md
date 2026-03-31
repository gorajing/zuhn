---
name: backfill
description: Backfill missing stances on existing insights to power tension detection
allowed-tools: [Read, Write, Bash, Edit]
---

## Backfill Missing Stances

Every insight must have a stance -- a one-sentence directional claim that can be asserted as true or false. Stances power the tension detection system. This skill backfills insights that were created before stances were required.

### Step 1: List Insights Missing Stances

```bash
npx tsx scripts/backfill-stances.ts --list
```

This prints all insights without a `stance` field in their YAML frontmatter.

### Step 2: Read Each Insight

For each insight missing a stance, read the full file to understand its claim, context, and evidence. You need to understand what the insight actually argues to write a good stance.

### Step 3: Write Stances

A stance is a one-sentence directional claim that could be true or false.

**Good stances:**
- "AI will displace most white-collar workers within a decade"
- "Compound interest dominates all other investment strategies for retail investors"
- "Remote teams outperform co-located teams when given proper tooling"

**Bad stances (do NOT write these):**
- "This discusses AI's impact on jobs" (descriptive, not directional)
- "There are pros and cons to remote work" (fence-sitting, not falsifiable)
- "Interesting thoughts on investing" (vague, says nothing)

A good stance makes someone want to argue for or against it.

### Step 4: Write JSON

Write to `/tmp/zuhn-stances.json`:

```json
{
  "stances": [
    {
      "id": "INS-YYMMDD-XXXX",
      "stance": "One-sentence directional claim assertable as true or false"
    }
  ]
}
```

### Step 5: Dry Run First

```bash
npx tsx scripts/backfill-stances.ts --file /tmp/zuhn-stances.json --dry-run
```

Review the output to confirm stances will be written to the correct insights.

### Step 6: Execute

```bash
npx tsx scripts/backfill-stances.ts --file /tmp/zuhn-stances.json
```

### Golden Rule

**Never use Write or Edit tools to modify insight files directly.** All insight file I/O goes through the TypeScript scripts with Zod validation. This prevents formatting errors, missing YAML keys, and tool-call timeouts.

### When to Backfill

- After `npm run learn` flags insights with missing stances
- Before running tension detection on a topic
- When benchmark coverage metrics show low stance coverage
- Process in batches of ~20 to keep JSON manageable
