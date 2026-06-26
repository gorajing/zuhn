---
id: INS-260626-F335
domain: ai-development
topic: agent-evals
title: >-
  Shipping an agent is the start of the work — pair automated evals in CI with
  user feedback
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - evals
  - ci
  - feedback
  - observability
  - iteration
sources:
  - type: youtube
    title: >-
      Agents in Production: How OpenGov Built and Scaled OG Assist - Gabe De
      Mesa, OpenGov
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=4uFVSLgD2Q4'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    OpenGov treats shipping as the start: thumbs up/down user signal plus
    automated evals in CI that check real completions hit the right tools drive
    fast iteration.
  standard: >-
    OpenGov's eval philosophy is captured in their quote 'Shipping is the start,
    not the finish.' They combine two loops: a lightweight in-product
    thumbs-up/thumbs-down mechanism that captures user signal on every response,
    and automated evals that run in CI against real completions — testing
    whether a prompt hit the expected tools and did what it was supposed to do.
    Together these drive their accuracy improvements and let them 'iterate so
    fast.' They tie this to observability with 'You can't scale what you can't
    see,' getting tracing and span profiling out of the box.


    The principle is that agents are not done at deploy — they are entered into
    a continuous improvement loop. Automated evals in CI turn agent quality into
    a regression-tested property (the same discipline as unit tests for
    deterministic code), while user thumbs feedback supplies the ground-truth
    signal that synthetic evals miss. The two are complementary: CI evals catch
    known failure modes before they ship, user feedback surfaces unknown ones
    after. Without both, an agent silently rots as prompts, tools, and models
    change underneath it.
stance: >-
  Production agent quality requires automated evals running in CI against real
  completions plus continuous user feedback, because shipping is the start of
  the work, not the finish.
related:
  - INS-260327-A98E
  - INS-260403-0CA8
  - INS-260403-A70D
  - PRI-260328-2014
  - PRI-260406-901E
  - INS-260625-99B0
  - INS-260403-EC09
---
OpenGov's eval philosophy is captured in their quote 'Shipping is the start, not the finish.' They combine two loops: a lightweight in-product thumbs-up/thumbs-down mechanism that captures user signal on every response, and automated evals that run in CI against real completions — testing whether a prompt hit the expected tools and did what it was supposed to do. Together these drive their accuracy improvements and let them 'iterate so fast.' They tie this to observability with 'You can't scale what you can't see,' getting tracing and span profiling out of the box.

The principle is that agents are not done at deploy — they are entered into a continuous improvement loop. Automated evals in CI turn agent quality into a regression-tested property (the same discipline as unit tests for deterministic code), while user thumbs feedback supplies the ground-truth signal that synthetic evals miss. The two are complementary: CI evals catch known failure modes before they ship, user feedback surfaces unknown ones after. Without both, an agent silently rots as prompts, tools, and models change underneath it.
