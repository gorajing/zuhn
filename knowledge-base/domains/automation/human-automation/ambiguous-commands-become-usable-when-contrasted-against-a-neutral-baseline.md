---
id: INS-260627-53EF
domain: automation
topic: human-automation
title: Ambiguous commands become usable when contrasted against a neutral baseline
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - human-automation
  - preference-learning
  - baselines
  - ambiguity
  - robotics
sources:
  - type: blog
    title: >-
      Masked IRL: LLM-Guided Reward Disambiguation from Demonstrations and
      Language
    url: 'https://arxiv.org/html/2511.14565'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Masked IRL clarifies underspecified commands by asking what the
    demonstration changed relative to a shortest-path trajectory.
  standard: >-
    For commands like 'stay away' or 'table,' the LLM receives both the human
    demonstration and a shortest-path reference trajectory. The difference
    between them helps identify the missing referent or relation. This is a
    strong general pattern: ambiguous human feedback is easier to interpret when
    paired with a counterfactual baseline. The system asks what behavior was
    intentionally different, rather than reading the utterance in isolation.
  deep: >-
    In workflow agents, the equivalent is comparing a user's correction or
    example against a default policy. The delta reveals preferences more
    reliably than the artifact alone. Preference learning should therefore store
    default-vs-demonstrated contrasts, not just final examples.
subtopic: preference-learning
stance: >-
  A vague command plus a demonstration is more informative when the system
  compares the demonstration to a neutral reference trajectory.
related:
  - INS-260605-09B1
  - INS-260327-35C7
  - INS-260405-7196
  - INS-260405-7C86
  - INS-260605-062F
---
For commands like 'stay away' or 'table,' the LLM receives both the human demonstration and a shortest-path reference trajectory. The difference between them helps identify the missing referent or relation. This is a strong general pattern: ambiguous human feedback is easier to interpret when paired with a counterfactual baseline. The system asks what behavior was intentionally different, rather than reading the utterance in isolation.
