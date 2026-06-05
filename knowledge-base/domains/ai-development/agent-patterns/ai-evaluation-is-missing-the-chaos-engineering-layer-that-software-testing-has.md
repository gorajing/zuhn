---
id: INS-260605-F5F7
domain: ai-development
topic: agent-patterns
title: AI evaluation is missing the chaos-engineering layer that software testing has
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - evals
  - chaos-engineering
  - observability
  - failure-modes
  - testing
sources:
  - type: youtube
    title: >-
      Malleable Evals: Why Are We Evaluating Adaptive Systems with Static Tests?
      — Vincent Koc, OpenClaw
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=4VhbYlfC7Gs'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    The honest gap in AI evaluation is the absence of a chaos-engineering
    equivalent that actively stresses the system to find where it breaks.
  standard: >-
    Software engineering does not stop at unit tests and CI/CD; it adds chaos
    engineering — deliberately breaking things and stretching the system to
    discover where it fails — plus continuous observability. AI evaluation, by
    contrast, hyper-fixates on static benchmarks and offline test cycles, then
    accumulates ever-larger datasets to try to explain agent behavior, right up
    until something goes wrong (which it inevitably will).


    The missing question is 'what comes next, and how do we find where we can
    stretch this thing?' Teams should import the chaos-engineering posture into
    AI: probe for the unexpected, instrument production heavily, and treat the
    discovery of new failure modes as a first-class part of evaluation rather
    than assuming a fixed test suite captured the risk surface.
stance: >-
  AI eval stops at static offline benchmarks and lacks the chaos-engineering and
  observability layer that mature software engineering uses to discover failure
  modes.
related:
  - INS-260409-BF3F
  - PRI-260412-96C1
  - PRI-260323-9D46
  - INS-260330-1F25
  - INS-260605-4FE3
---
Software engineering does not stop at unit tests and CI/CD; it adds chaos engineering — deliberately breaking things and stretching the system to discover where it fails — plus continuous observability. AI evaluation, by contrast, hyper-fixates on static benchmarks and offline test cycles, then accumulates ever-larger datasets to try to explain agent behavior, right up until something goes wrong (which it inevitably will).

The missing question is 'what comes next, and how do we find where we can stretch this thing?' Teams should import the chaos-engineering posture into AI: probe for the unexpected, instrument production heavily, and treat the discovery of new failure modes as a first-class part of evaluation rather than assuming a fixed test suite captured the risk surface.
