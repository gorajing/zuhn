---
name: tension-review
description: Review tension candidates and judge whether insight pairs are genuine tensions or false positives
allowed-tools: [Read, Write, Bash, Edit]
---

## Review Tension Candidates

The learning mechanism flags insight pairs that may hold opposing stances. Claude reviews each pair and judges whether it represents a genuine tension (real philosophical/strategic fork) or a false positive (complementary, near-duplicate, or unrelated).

### Step 1: Load Candidates

```bash
cat knowledge-base/meta/tension-candidates.json
```

Each candidate contains:

| Field | Description |
|-------|-------------|
| `pair_key` | Unique key for the pair |
| `id_a`, `id_b` | Insight IDs |
| `title_a`, `title_b` | Insight titles |
| `stance_a`, `stance_b` | One-sentence directional claims |
| `confidence_a`, `confidence_b` | Confidence levels |
| `content_distance` | Cosine distance between embeddings |

### Step 2: Read Both Insights

For each candidate pair, read both insight files to understand the full context beyond just the stances. Use `npm run search "query"` or browse `knowledge-base/domains/` to locate files.

### Step 3: Judge Each Pair

Apply these criteria:

**Genuine tension (approve):**
- Stances take opposing positions on the same topic
- Both stances are supported by evidence in their respective insights
- The disagreement represents a meaningful strategic or philosophical fork
- Resolving the tension would change how you act

**Non-tension (reject) — common false positives:**
- **Near-duplicates:** Same claim with slightly different wording
- **Complementary observations:** Both true simultaneously, different angles on the same truth
- **Unrelated pairs:** Share keywords but argue about different things entirely
- **Different scope:** One is a general principle, the other a narrow exception (not a real contradiction)

### Step 4: Write Judgments JSON

Write to `/tmp/zuhn-tensions.json`:

```json
{
  "tensions": [
    {
      "id_a": "INS-YYMMDD-XXXX",
      "id_b": "INS-YYMMDD-XXXX",
      "stance_a": "Original stance from insight A",
      "stance_b": "Original stance from insight B",
      "reason": "Why these genuinely oppose each other"
    }
  ],
  "non_tensions": [
    {
      "id_a": "INS-YYMMDD-XXXX",
      "id_b": "INS-YYMMDD-XXXX",
      "reason": "Why this is a false positive (complementary/duplicate/unrelated)"
    }
  ]
}
```

### Step 5: Create Tensions

```bash
npx tsx scripts/create-tensions.ts --file /tmp/zuhn-tensions.json
```

The script:
- Creates tension records (T-YYMMDD-XXXX) for approved pairs
- Removes all processed pairs (both approved and rejected) from `tension-candidates.json`
- Rejected pairs will not resurface

### Quality Reminders

- Read the full insights, not just the stances — context matters
- When in doubt, reject. False tensions pollute the knowledge base worse than missing real ones.
- A good tension makes you think "I genuinely don't know which side is right"
