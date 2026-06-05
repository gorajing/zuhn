---
id: INS-260605-F700
domain: ai-development
topic: agent-patterns
title: Replace hardcoded model routing with an automated complexity-detection layer
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - model-routing
  - orchestration
  - task-complexity
  - automation-layer
  - agent-patterns
sources:
  - type: youtube
    title: >-
      Scaling the Next Paradigm of Heterogeneous Intelligence — Adrian
      Bertagnoli, Callosum
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=WRBNDpUhsJQ'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Start with bespoke rules to prove value, then build an automation layer that
    classifies task complexity and auto-selects the optimal model and chip.
  standard: >-
    Asked how the system decides which task runs on the faster, cheaper model —
    whether zoom-routing is hardcoded — Bertagnoli explained the progression:
    they initially made bespoke decisions, hand-mapping simple subtasks to
    simple models. That manual approach proves the routing concept but doesn't
    scale across many task types. They then built an automation layer that
    detects task complexity and automatically predicts the best-suited model and
    hardware.


    This mirrors a general engineering pattern: hardcode the routing first to
    validate that heterogeneous mapping delivers cost and speed wins, then
    replace the rules with a learned or heuristic complexity classifier once the
    payoff is proven. The routing decision spans both software (which model) and
    hardware (which chip), so the automation layer must reason about
    computational demand, not just semantic task type. For teams building
    multi-agent systems, this suggests treating the router itself as a
    first-class, evolving component rather than a static config of if-then
    rules.
stance: >-
  Mapping subtasks to models should evolve from bespoke hardcoded rules to an
  automation layer that detects task complexity and predicts the best-suited
  model and hardware.
related:
  - INS-260329-ED44
  - INS-260329-E839
  - INS-260403-648C
  - PRI-260328-D401
  - PRI-260320-233B
---
Asked how the system decides which task runs on the faster, cheaper model — whether zoom-routing is hardcoded — Bertagnoli explained the progression: they initially made bespoke decisions, hand-mapping simple subtasks to simple models. That manual approach proves the routing concept but doesn't scale across many task types. They then built an automation layer that detects task complexity and automatically predicts the best-suited model and hardware.

This mirrors a general engineering pattern: hardcode the routing first to validate that heterogeneous mapping delivers cost and speed wins, then replace the rules with a learned or heuristic complexity classifier once the payoff is proven. The routing decision spans both software (which model) and hardware (which chip), so the automation layer must reason about computational demand, not just semantic task type. For teams building multi-agent systems, this suggests treating the router itself as a first-class, evolving component rather than a static config of if-then rules.
