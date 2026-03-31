---
id: T-260324-AF7F
title: >-
  Scaling laws hold across 13 orders of magnitude and won't stop, but
  inference-time scaling currently offers better ROI than making models bigger
  vs. The leap from GPT-4 to GPT-5 was subtle enough to require benchmarks —
  scaling has hit a wall
status: resolved_with_nuance
severity: strong
type: stance
date_created: '2026-03-25'
stance_a: >-
  Scaling laws hold across 13 orders of magnitude and won't stop, but
  inference-time scaling currently offers better ROI than making models bigger
stance_b: >-
  The leap from GPT-4 to GPT-5 was subtle enough to require benchmarks — scaling
  has hit a wall
side_a:
  - INS-260323-6C6F
side_b:
  - INS-260323-7EEB
resolution_notes: >-
  Synthesis: Both sides are empirically correct about different phenomena.
  Pre-training scaling laws do hold mathematically — loss decreases predictably
  with compute — but user-perceptible improvement follows an S-curve where each
  increment of loss reduction produces less noticeable capability gain. Marcus is
  right that GPT-4 to GPT-5 felt incremental to users, but Raschka/Lambert are
  right that this reflects economic ROI shifting to inference-time compute, not a
  fundamental ceiling. Jensen Huang's four-scaling-law flywheel (pre-training,
  post-training, test-time, agentic) shows the industry has already found the
  answer: scaling continues, but across multiple axes rather than the single axis
  of pre-training size. The 'wall' is a wall of diminishing user-perceptible
  returns per pre-training dollar, not a wall of capability.
reason: >-
  Raschka/Lambert argue scaling is alive — the shift to inference-time compute
  is an economic optimization, not a wall. Marcus argues diminishing returns are
  undeniable. The disagreement: is the pre-training plateau a temporary economic
  shift or a fundamental ceiling?
---
**Side A:** "Scaling laws hold across 13 orders of magnitude and won't stop, but inference-time scaling currently offers better ROI than making models bigger"
**Side B:** "The leap from GPT-4 to GPT-5 was subtle enough to require benchmarks — scaling has hit a wall"
**Reason:** Raschka/Lambert argue scaling is alive — the shift to inference-time compute is an economic optimization, not a wall. Marcus argues diminishing returns are undeniable. The disagreement: is the pre-training plateau a temporary economic shift or a fundamental ceiling?
**Resolution:** Synthesis. Pre-training scaling laws hold mathematically (loss decreases predictably with compute), but user-perceptible improvement follows an S-curve where each loss reduction increment produces less noticeable capability gain. Marcus is right that GPT-4 to GPT-5 felt incremental; Raschka/Lambert are right that this reflects economic ROI shifting to inference-time compute, not a fundamental ceiling. The industry answer is already emerging via Jensen's four-scaling-law flywheel: scaling continues across multiple axes (pre-training, post-training, test-time, agentic) rather than the single axis of model size. The "wall" is a wall of diminishing user-perceptible returns per pre-training dollar, not a wall of capability.

**Prediction:** By end of 2027, the most capable AI systems will derive more total compute from inference-time scaling and agentic orchestration combined than from pre-training alone, while pre-training budgets plateau at $5-15B per frontier run.
