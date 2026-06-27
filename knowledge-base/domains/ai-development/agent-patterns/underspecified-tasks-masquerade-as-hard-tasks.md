---
id: INS-260605-09B1
domain: ai-development
topic: agent-patterns
title: Underspecified tasks masquerade as hard tasks
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - task-design
  - specification
  - evaluation
  - agentic-tasks
  - verifiable-rewards
sources:
  - type: youtube
    title: 'Task Fidelity Scaling Laws — Kobie Crawdord, Snorkel'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=YYH0DMQr30A'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Rejected tasks were often under-specified — the testable outcome wasn't
    stated up front while the back-end tests expected unrequested behavior, or
    relied on implicit dependencies never given to the model.
  standard: >-
    Asked what actually makes a task low-quality, Crawford identified
    specification mismatch as the dominant cause. A task is defined without
    clearly stating the desired testable outcome, yet the hidden tests expect
    things that were never requested — so the model 'fails' a requirement it was
    never told about. Similarly, tests sometimes assume implicit dependencies
    the task never declares; without that context, the model can't even approach
    the dependency.


    The lesson for anyone authoring verifiable tasks or benchmarks: difficulty
    and specification quality are different axes, and a poorly specified task
    counterfeits difficulty. Before concluding a model is weak, check that the
    test contract matches the stated task and that all required context is in
    the prompt. The fix is to make the testable outcome explicit up front and to
    surface every dependency — otherwise you train or benchmark against
    artifacts of your own ambiguity rather than against real capability.
stance: >-
  Most low-quality agentic tasks are not genuinely difficult — they are
  underspecified, with hidden test expectations or unstated dependencies that
  make them only appear hard.
related:
  - INS-260410-E73E
  - INS-260605-E54A
  - INS-260627-8121
  - INS-260625-13F0
  - INS-260625-ED7E
  - INS-260626-BF18
  - INS-260627-53EF
---
Asked what actually makes a task low-quality, Crawford identified specification mismatch as the dominant cause. A task is defined without clearly stating the desired testable outcome, yet the hidden tests expect things that were never requested — so the model 'fails' a requirement it was never told about. Similarly, tests sometimes assume implicit dependencies the task never declares; without that context, the model can't even approach the dependency.

The lesson for anyone authoring verifiable tasks or benchmarks: difficulty and specification quality are different axes, and a poorly specified task counterfeits difficulty. Before concluding a model is weak, check that the test contract matches the stated task and that all required context is in the prompt. The fix is to make the testable outcome explicit up front and to surface every dependency — otherwise you train or benchmark against artifacts of your own ambiguity rather than against real capability.
