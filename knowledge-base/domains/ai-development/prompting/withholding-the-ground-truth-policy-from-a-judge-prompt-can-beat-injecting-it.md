---
id: INS-260627-335A
domain: ai-development
topic: prompting
title: Withholding the ground-truth policy from a judge prompt can beat injecting it
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - prompt-optimization
  - gepa
  - local-minima
  - llm-as-judge
  - counterintuitive
sources:
  - type: youtube
    title: "Judge the Judge: Building LLM Evaluators That Actually Work with GEPA —\_Mahmoud Mabrouk, Agenta AI"
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=X4dEHRzBLmc'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Two seed-prompt families were tried — one with the agent's full policy
    copy-pasted in, one without — and the policy-free seed optimized better,
    because starting with the complete policy locks you into a local minimum you
    can't improve on.
  standard: >-
    Counterintuitively, the seed judge that did NOT include the agent's own
    policy text outperformed the one that pasted the policy in. The hypothesis:
    if the judge starts with the complete ground-truth policy, the prompt
    optimizer (GEPA) has no room to explore — it's already stuck in a local
    minimum and can't fine-tune its way out. Without the policy baked in, but
    with access to annotations that implicitly describe the policy, the
    optimizer can explore the prompt space far more effectively and learn a
    better representation.


    This generalizes a non-obvious principle for prompt optimization:
    over-specifying the seed can hurt, because optimization needs
    gradient/exploration room. Related seed-design lessons from the same work:
    the initial judge should default to assuming compliance and only flip to
    non-compliant given a specific reason (an unbiased judge with no rules
    should pass everything) — a poorly-chosen seed produces a near-random judge
    that the optimizer can never rescue. Treat the seed prompt as a critical,
    deliberately-engineered hyperparameter, not a throwaway starting point.
    (Single-case evidence on a noisy dataset, hence medium confidence.)
stance: >-
  Letting a judge discover the evaluation policy from annotations outperforms
  pasting the full ground-truth policy into its prompt, because the injected
  policy traps the optimizer in a local minimum it can't escape.
related:
  - INS-260404-40F2
  - PRI-260407-E7CD
  - INS-260403-8D8D
  - INS-260605-93B8
  - INS-260403-79F3
---
Counterintuitively, the seed judge that did NOT include the agent's own policy text outperformed the one that pasted the policy in. The hypothesis: if the judge starts with the complete ground-truth policy, the prompt optimizer (GEPA) has no room to explore — it's already stuck in a local minimum and can't fine-tune its way out. Without the policy baked in, but with access to annotations that implicitly describe the policy, the optimizer can explore the prompt space far more effectively and learn a better representation.

This generalizes a non-obvious principle for prompt optimization: over-specifying the seed can hurt, because optimization needs gradient/exploration room. Related seed-design lessons from the same work: the initial judge should default to assuming compliance and only flip to non-compliant given a specific reason (an unbiased judge with no rules should pass everything) — a poorly-chosen seed produces a near-random judge that the optimizer can never rescue. Treat the seed prompt as a critical, deliberately-engineered hyperparameter, not a throwaway starting point. (Single-case evidence on a noisy dataset, hence medium confidence.)
