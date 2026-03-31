---
id: T-260324-9EC6
title: >-
  Math and formal reasoning are domains where RL-based AI training works
  especially well, making AI-driven proofs plausible vs. LLMs match statistical
  patterns from human-generated text (wide, shallow), while formal computational
  systems build deep chains of logic (narrow, deep)
status: resolved_with_nuance
severity: moderate
type: stance
date_created: '2026-03-25'
stance_a: >-
  Math and formal reasoning are domains where RL-based AI training works
  especially well, making AI-driven proofs plausible
stance_b: >-
  LLMs match statistical patterns from human-generated text (wide, shallow),
  while formal computational systems build deep chains of logic (narrow, deep)
side_a:
  - INS-260322-32E3
side_b:
  - INS-260323-B309
resolution_notes: >-
  Synthesis: Both are correct, and together they reveal the mechanism. Wolfram's
  wide-shallow vs narrow-deep distinction accurately describes the base LLM
  architecture. But RL with verifiable rewards changes the game by providing an
  external narrow-deep verification signal that the wide-shallow system can
  optimize against. The LLM does not itself become a formal reasoning engine —
  it remains a pattern matcher — but RL training on domains with ground-truth
  verifiers (proofs, code compilation, math) teaches it to generate outputs that
  satisfy deep-logic constraints. The system is still 'wide and shallow'
  internally, but its outputs converge on 'narrow and deep' correctness because
  the reward signal is narrow-and-deep. This is why math and code are 'unusually
  easy' — not because LLMs truly reason, but because these domains provide the
  verification scaffolding that compensates for the architecture's shallowness.
  Domains without verifiable rewards (philosophy, strategy, ethics) remain stuck
  in the shallow-pattern regime.
reason: >-
  Does RL on verifiable domains transcend the shallow-pattern limitation, or
  does it remain statistical correlation dressed up as reasoning? The
  capabilities are real but the mechanism is disputed.
---
**Side A:** "Math and formal reasoning are domains where RL-based AI training works especially well, making AI-driven proofs plausible"
**Side B:** "LLMs match statistical patterns from human-generated text (wide, shallow), while formal computational systems build deep chains of logic (narrow, deep)"
**Reason:** Does RL on verifiable domains transcend the shallow-pattern limitation, or does it remain statistical correlation dressed up as reasoning? The capabilities are real but the mechanism is disputed.
**Resolution:** Synthesis. Both sides are correct, and together they reveal the mechanism. Wolfram's wide-shallow vs. narrow-deep distinction accurately describes the base LLM architecture. But RL with verifiable rewards changes the equation: it provides an external narrow-deep verification signal that the wide-shallow system optimizes against. The LLM remains a pattern matcher internally, but its outputs converge on formal correctness because the reward signal itself embodies deep logic. This is precisely why math and code are "unusually easy" for AI — not because LLMs truly reason, but because these domains provide verification scaffolding that compensates for architectural shallowness. Domains without verifiable rewards (philosophy, strategy, ethics) remain stuck in the shallow-pattern regime.

**Prediction:** AI will solve a major open math problem (e.g., a Millennium Prize problem) before it can reliably produce novel philosophical arguments that experts rate as genuinely insightful — because verifiable-reward domains will continue to advance faster than unverifiable ones.
