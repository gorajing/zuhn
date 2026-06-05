---
id: INS-260605-7FEA
domain: ai-development
topic: agent-patterns
title: >-
  Put the right model in each role and stay model-agnostic to avoid weakest-link
  constraints
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - model-selection
  - multi-agent
  - model-agnostic
  - specialization
  - orchestration
sources:
  - type: youtube
    title: 'The Multi-Agent Architecture That Actually Ships — Luke Alvoeiro, Factory'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=ow1we5PzK-o'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Match models to roles—careful reasoning for planning, fast fluency for
    implementation, precise instruction-following for validation—and avoid
    locking into one provider.
  standard: >-
    Missions assumes you use the right model in each seat: planning rewards
    slow, careful reasoning; implementation rewards fast code fluency and
    creativity; validation rewards precise instruction-following. No single
    model or provider is best at all three. Factory calls the skill of choosing
    models 'droid whispering'—mentally modeling how different LLMs fail and how
    those failures compound over a multi-day run, then deliberately placing each
    model. Validation can even use a different provider entirely so it isn't
    biased by the same training data—a structural advantage of model-agnostic
    design. The cost of provider lock-in is that 'you're only as strong as your
    weakest link': you inherit that family's weakest capability. As models
    specialize, the ability to seat the right model in the right role
    compounds—and conversely, strong structure (validation contracts, milestone
    checkpoints) lets even open-weight, sub-frontier models run successfully.
stance: >-
  No single model is best at planning, implementation, and validation, so a
  model-agnostic architecture that assigns models per role is a compounding
  advantage.
related:
  - INS-260605-DC65
  - INS-260605-D777
  - INS-260603-D44B
  - INS-260423-85B3
  - INS-260408-C572
  - INS-260605-DC7C
---
Missions assumes you use the right model in each seat: planning rewards slow, careful reasoning; implementation rewards fast code fluency and creativity; validation rewards precise instruction-following. No single model or provider is best at all three. Factory calls the skill of choosing models 'droid whispering'—mentally modeling how different LLMs fail and how those failures compound over a multi-day run, then deliberately placing each model. Validation can even use a different provider entirely so it isn't biased by the same training data—a structural advantage of model-agnostic design. The cost of provider lock-in is that 'you're only as strong as your weakest link': you inherit that family's weakest capability. As models specialize, the ability to seat the right model in the right role compounds—and conversely, strong structure (validation contracts, milestone checkpoints) lets even open-weight, sub-frontier models run successfully.
