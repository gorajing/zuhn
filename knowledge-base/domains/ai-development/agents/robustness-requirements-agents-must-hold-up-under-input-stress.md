---
id: INS-260605-169D
domain: ai-development
topic: agents
title: 'Robustness requirements: agents must hold up under input stress'
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - robustness
  - agent-testing
  - edge-cases
  - perturbation
sources:
  - type: youtube
    title: >-
      Spec-Driven Testing for Agents With A Brain the Size of A Planet — Steven
      Willmott, SafeIntelligence
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=UQKg0td-Bf4'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Treat robustness like a vision model's tolerance to fog or camera shake:
    specify how many typos or rephrasings the agent can absorb before it breaks.
  standard: >-
    Willmott carries a discipline from formal verification of vision models into
    agents. For a vision model you ask: can it detect the runway at sunset, in
    fog, with camera shake — and how much degradation before it fails? The
    analogous question for a customer-facing agent: do typos disrupt it, how
    many, how does it behave under rephrasing, how stable are results under
    small changes to the input.


    This reframes evals from a pass/fail on a fixed test set to a measurement of
    the *envelope* around each test point. A spec should state the robustness
    requirement explicitly, and the testing system should generate perturbed
    variants (typos, rephrasings, reformulations) to probe the edges of that
    envelope rather than assuming clean inputs.
stance: >-
  Passing the test set is not enough; an agent spec must define how much input
  perturbation it tolerates.
related:
  - INS-260627-8B75
  - INS-260625-DA23
  - INS-260627-DE41
  - INS-260411-7232
  - INS-260505-5A06
---
Willmott carries a discipline from formal verification of vision models into agents. For a vision model you ask: can it detect the runway at sunset, in fog, with camera shake — and how much degradation before it fails? The analogous question for a customer-facing agent: do typos disrupt it, how many, how does it behave under rephrasing, how stable are results under small changes to the input.

This reframes evals from a pass/fail on a fixed test set to a measurement of the *envelope* around each test point. A spec should state the robustness requirement explicitly, and the testing system should generate perturbed variants (typos, rephrasings, reformulations) to probe the edges of that envelope rather than assuming clean inputs.
