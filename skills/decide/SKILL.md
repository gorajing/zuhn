---
name: decide
description: Create structured decision records that link to insights and principles, feeding the empirical engine
allowed-tools: [Read, Write, Bash]
---

## Record a Decision

When the user makes or discusses a decision worth tracking:

1. Write the decision as JSON to `/tmp/zuhn-decide.json`:

```json
{
  "decisions": [
    {
      "title": "Clear description of the decision",
      "domain": "relevant-domain",
      "chosen_option": "What was decided",
      "alternatives": ["Option B", "Option C"],
      "reasoning": "Why this option was chosen",
      "derived_from": ["INS-YYMMDD-XXXX", "PRI-YYMMDD-XXXX"],
      "expected_outcome": "What we expect to happen",
      "review_date": "YYYY-MM-DD"
    }
  ]
}
```

2. Run:

```bash
npx tsx scripts/decide.ts --file /tmp/zuhn-decide.json
```

### Resolving a Decision

When the outcome is known:

```bash
npx tsx scripts/resolve.ts --id DEC-YYMMDD-XXXX --status success|failure|partial --notes "What actually happened"
```

Resolution cascades confidence changes to the derived-from insights and principles via the empirical propagation mechanism.
