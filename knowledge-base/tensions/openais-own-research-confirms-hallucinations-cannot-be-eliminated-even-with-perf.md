---
id: T-260324-9F23
title: >-
  OpenAI's own research confirms hallucinations cannot be eliminated even with
  perfect training data because they are inherent to probabilistic generation
  vs. Pre-RLHF models were well-calibrated on probabilities but human feedback
  training flattened this into vague probability estimates, systematically
  destroying calibration
status: resolved_with_nuance
severity: strong
type: stance
date_created: '2026-03-25'
stance_a: >-
  OpenAI's own research confirms hallucinations cannot be eliminated even with
  perfect training data because they are inherent to probabilistic generation
stance_b: >-
  Pre-RLHF models were well-calibrated on probabilities but human feedback
  training flattened this into vague probability estimates, systematically
  destroying calibration
side_a:
  - INS-260323-9773
side_b:
  - INS-260323-584D
resolution_notes: >-
  Synthesis: Both are correct, and they describe two distinct failure modes that
  compound each other. Hallucination (generating false content) is indeed
  mathematically inherent to probabilistic generation — every token sample
  carries nonzero error probability, and chain-of-thought reasoning multiplies
  these. This is the floor, not zero. But RLHF adds a second, separable problem:
  it destroys the model's ability to signal uncertainty about its own outputs.
  Pre-RLHF models were well-calibrated (80% confidence meant 80% accuracy), but
  RLHF collapsed this into the same vague hedging humans use. The result is a
  model that both hallucinates (fundamental) AND cannot tell you when it's
  hallucinating (RLHF-induced). The first problem is architectural and
  irreducible within probabilistic generation. The second is a training artifact
  that is fixable — selective RLHF that preserves calibration in domains where
  the model outperforms human judgment. Andreessen's insight that hallucination
  equals creativity completes the picture: the creative generation mechanism is
  the same one that hallucinates, so eliminating one kills the other. The
  engineering solution is not elimination but management: verification layers,
  calibrated confidence signals, and mode-switching between creative and literal.
reason: >-
  Technical tension on whether LLM hallucination is fundamental or introduced.
  One says hallucination is inherent to probabilistic generation and unfixable.
  The other says pre-RLHF models were actually well-calibrated, implying RLHF
  training introduced the calibration problem. If RLHF caused it, hallucination
  might be a training artifact that can be fixed, not a mathematical
  inevitability. Both have empirical backing from OpenAI and academic research.
---
**Side A:** "OpenAI's own research confirms hallucinations cannot be eliminated even with perfect training data because they are inherent to probabilistic generation"
**Side B:** "Pre-RLHF models were well-calibrated on probabilities but human feedback training flattened this into vague probability estimates, systematically destroying calibration"
**Reason:** Technical tension on whether LLM hallucination is fundamental or introduced. One says hallucination is inherent to probabilistic generation and unfixable. The other says pre-RLHF models were actually well-calibrated, implying RLHF training introduced the calibration problem. If RLHF caused it, hallucination might be a training artifact that can be fixed, not a mathematical inevitability. Both have empirical backing from OpenAI and academic research.
**Resolution:** Synthesis. Both are correct about distinct failure modes that compound. Hallucination (generating false content) is mathematically inherent to probabilistic generation -- every token carries nonzero error probability, and reasoning chains multiply it. This is the irreducible floor. But RLHF adds a separable second problem: it destroys the model's ability to signal uncertainty. Pre-RLHF models were well-calibrated (80% confidence = 80% accuracy); RLHF collapsed this into vague human-style hedging. The result: a model that both hallucinates (fundamental) AND cannot tell you when it's hallucinating (RLHF-induced). The first problem is architectural and irreducible. The second is a training artifact, fixable via selective RLHF that preserves calibration where models outperform human judgment. Andreessen's hallucination-is-creativity insight completes the picture: the generation mechanism that hallucinates is the same one that creates, so elimination kills both. The engineering answer is not elimination but management: verification layers, calibrated confidence signals, and mode-switching.

**Prediction:** The first AI lab to ship "calibration-preserving RLHF" (maintaining pre-RLHF probability calibration while still improving helpfulness) will see measurable hallucination-rate reductions of 30-50% on factual tasks without sacrificing creative capability, arriving by end of 2027.
