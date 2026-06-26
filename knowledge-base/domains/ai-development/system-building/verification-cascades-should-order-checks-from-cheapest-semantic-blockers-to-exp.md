---
id: INS-260626-B7EB
domain: ai-development
topic: system-building
title: >-
  Verification cascades should order checks from cheapest semantic blockers to
  expensive live validation
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - system-building
  - verification
  - agent-harnesses
  - cost-control
sources:
  - type: blog
    title: >-
      NOVA: A Verification-Aware Agent Harness for Architecture Evolution in
      Industrial Recommender Systems
    url: 'https://arxiv.org/html/2606.27243'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    NOVA's cascade checks architecture semantics, local executability, offline
    metrics, and only then online impact.
  standard: >-
    NOVA uses a progressive verification cascade: structure-semantic checking
    catches domain-invalid candidates before training, local executability tests
    catch implementation errors, offline evaluation measures AUC against the
    production baseline, and online A/B tests validate business impact. Each
    stage shrinks the candidate set before the next, more expensive gate.


    The system-building lesson is to design agent harnesses as cost-aware
    funnels. Put deterministic or cheap domain-contract checks before slow model
    training, provider calls, human review, or deployment experiments, and
    reserve live validation for candidates that have survived the cheaper
    failure modes.
stance: >-
  Production agent systems should stage verification so cheap semantic and
  executability gates filter candidates before costly offline training or online
  tests.
related:
  - INS-260626-9155
  - INS-260522-2CE8
  - PRI-260411-78CD
  - PRI-260323-1CF9
  - INS-260605-86BE
---
NOVA uses a progressive verification cascade: structure-semantic checking catches domain-invalid candidates before training, local executability tests catch implementation errors, offline evaluation measures AUC against the production baseline, and online A/B tests validate business impact. Each stage shrinks the candidate set before the next, more expensive gate.

The system-building lesson is to design agent harnesses as cost-aware funnels. Put deterministic or cheap domain-contract checks before slow model training, provider calls, human review, or deployment experiments, and reserve live validation for candidates that have survived the cheaper failure modes.
