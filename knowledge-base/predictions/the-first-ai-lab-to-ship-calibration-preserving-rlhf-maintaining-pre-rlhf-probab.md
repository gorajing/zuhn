---
id: PRED-260325-4A59
derived_from:
  - INS-260323-9773
  - INS-260323-584D
claim: >-
  The first AI lab to ship calibration-preserving RLHF (maintaining pre-RLHF
  probability calibration while improving helpfulness) will see 30-50%
  hallucination-rate reductions on factual tasks without sacrificing creative
  capability, arriving by end of 2027
falsifiable_metric: >-
  An AI lab ships a model with documented calibration-preserving RLHF by end of
  2027, showing 30-50% hallucination reduction on factual benchmarks with no
  statistically significant drop in creative task performance
deadline: '2027-12-31'
status: active
date_created: '2026-03-25'
tags:
  - hallucination
  - rlhf
  - calibration
  - ai-safety
---
Derived from tension T-260324-9F23. Hallucination is mathematically inherent to probabilistic generation (irreducible floor), but RLHF adds a separable problem: destroying the model's ability to signal uncertainty. The second problem is fixable.
