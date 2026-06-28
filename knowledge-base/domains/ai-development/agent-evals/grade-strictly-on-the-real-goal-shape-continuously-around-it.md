---
id: INS-260627-6792
domain: ai-development
topic: agent-evals
title: 'Grade strictly on the real goal, shape continuously around it'
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - reward-design
  - grading
  - rft
  - evals
  - partial-credit
sources:
  - type: youtube
    title: 'Agent Reinforcement Fine Tuning – Will Hang & Cathy Zhou, OpenAI'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=p1CmPZ2j6Lk'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Give credit only when the real goal is met (tests pass), but make the
    surrounding signal continuous so the model has a gradient to climb.
  standard: >-
    These two case studies look contradictory until you separate the success
    criterion from the shaping. Cosine found that giving partial credit and
    points for 'just trying things' backfired — the model optimized coding style
    and tone instead of working code — so they rewarded the agent only when the
    final code passed the tests, layering a separate LLM judge to penalize
    verbosity, emojis, and unprofessional tone, and rewarding self-validation
    behaviors like running tests and checking lint. Meanwhile OpenAI's fourth
    principle recommends framing the reward as 'more continuous than binary,'
    like partial credit for a student, so the model can inch toward optimal
    performance.


    The resolution is that strictness belongs on the definition of success (did
    it actually work?) while continuity belongs on the path to that success (how
    close are you, how clean was it). A binary 'tests pass' gate prevents the
    model from being rewarded for plausible-looking failures; a continuous
    shaping signal gives it a usable gradient instead of a flat zero everywhere
    short of perfect. A purely binary reward also produces sparse signal —
    Cosine had to boost batch size and compute so each batch contained some
    positively-rewarded samples — which is the cost of strictness you pay for in
    compute, not in reward-design compromise.
stance: >-
  Reward functions should be strict-binary on the true success criterion but
  continuous in their shaping, or the model will optimize proxies like tone
  instead of correctness.
related:
  - INS-260625-0961
  - INS-260403-FFEA
  - PRI-260406-1B3A
  - INS-260330-BFD0
  - INS-260410-B3C2
---
These two case studies look contradictory until you separate the success criterion from the shaping. Cosine found that giving partial credit and points for 'just trying things' backfired — the model optimized coding style and tone instead of working code — so they rewarded the agent only when the final code passed the tests, layering a separate LLM judge to penalize verbosity, emojis, and unprofessional tone, and rewarding self-validation behaviors like running tests and checking lint. Meanwhile OpenAI's fourth principle recommends framing the reward as 'more continuous than binary,' like partial credit for a student, so the model can inch toward optimal performance.

The resolution is that strictness belongs on the definition of success (did it actually work?) while continuity belongs on the path to that success (how close are you, how clean was it). A binary 'tests pass' gate prevents the model from being rewarded for plausible-looking failures; a continuous shaping signal gives it a usable gradient instead of a flat zero everywhere short of perfect. A purely binary reward also produces sparse signal — Cosine had to boost batch size and compute so each batch contained some positively-rewarded samples — which is the cost of strictness you pay for in compute, not in reward-design compromise.
