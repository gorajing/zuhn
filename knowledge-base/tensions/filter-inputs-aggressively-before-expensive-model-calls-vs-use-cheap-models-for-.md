---
id: T-260321-BD6F
title: >-
  Filter inputs aggressively before expensive model calls vs. Use cheap models
  for categorization before expensive ones
status: resolved_with_nuance
side_a:
  - INS-260320-92CC
side_b:
  - INS-260320-0511
---

**Side A:** "Filter aggressively before hitting expensive models — filtering by upvotes/comments removes 80% of inputs, saving ~$5/week."
**Side B:** "Use cheap models (gpt-5-nano) for categorization/relevance scoring before expensive models — removes 70-90% of irrelevant inputs."
**Resolution:** These are not competing strategies but sequential layers in a single cost-optimization pipeline. Side A (heuristic filtering by engagement metrics) is the first gate: zero-cost, removes 80% of obviously low-value inputs before any model is invoked. Side B (cheap model categorization) is the second gate: near-zero cost, applies semantic understanding to the remaining 20% and removes another 70-90% of those. The combined pipeline is: raw inputs -> heuristic filter -> cheap model categorization -> expensive model. This stacked approach yields the documented 30x cost reduction. There is no real tension here -- this is a false dichotomy created by framing complementary techniques as alternatives.
