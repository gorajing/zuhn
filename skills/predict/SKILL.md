---
name: predict
description: Create structured predictions that test the knowledge base against reality
allowed-tools: [Read, Write, Bash]
---

## Record a Prediction

When the user makes or discusses a testable prediction:

1. Write the prediction as JSON to `/tmp/zuhn-predict.json`:

```json
{
  "predictions": [
    {
      "title": "Specific, testable claim",
      "domain": "relevant-domain",
      "prediction": "Exact statement of what will happen",
      "confidence": "low|medium|high|very_high",
      "timeframe": "By when this should be verifiable",
      "derived_from": ["INS-YYMMDD-XXXX", "PRI-YYMMDD-XXXX"],
      "falsification_criteria": "What would prove this wrong"
    }
  ]
}
```

2. Run:

```bash
npx tsx scripts/predict.ts --file /tmp/zuhn-predict.json
```

### Resolving a Prediction

When evidence arrives:

```bash
npx tsx scripts/resolve.ts --id PRED-YYMMDD-XXXX --status confirmed|falsified|partial --notes "Evidence and reasoning"
```

- **Confirmed:** Boosts confidence of derived-from insights/principles
- **Falsified:** Reduces confidence and creates an empirical tension
- **Partial:** Moderate adjustment based on degree of match
