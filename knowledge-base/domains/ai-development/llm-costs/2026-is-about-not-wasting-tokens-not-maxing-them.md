---
id: INS-260605-6F98
domain: ai-development
topic: llm-costs
title: '2026 is about not wasting tokens, not maxing them'
actionability: reference
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - token-efficiency
  - token-maxing
  - ralph-loop
  - cost-discipline
  - human-in-the-loop
sources:
  - type: youtube
    title: >-
      Dark Factory: OpenClaw Ships Faster Than You Can Read the Diff — Vincent
      Koc, OpenClaw
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=pmoDeA3RBZY'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Move from undirected 'Ralph looping' that burns 8-9 hours of tokens hoping
    something happens to opinionated loops with reward mechanisms and a human
    watching.
  standard: >-
    Koc contrasts 'Ralph looping' — handing an agent a task and burning tokens
    for 8-9 hours while hoping for a result — with a more 'opinionated' approach
    he jokingly calls bot looping, asking what the reward mechanism should be
    beyond just spending tokens. His closing thesis: '2025 was about token
    maxing, 2026 is about not wasting them.' Once you're running 60-70 agents
    the constraint stops being tokens and becomes raw compute plus the human's
    finite brain space to supervise. The practical implication is to add
    structure to autonomous loops — evals, dedup, signals about what's worth
    working on — so tokens buy directed progress rather than undirected churn,
    with the engineer kept 'in the loop' rather than fully delegating. Tagged
    time-sensitive because it's an explicit year-over-year prediction about
    where the frontier is heading.
stance: >-
  Once raw token throughput is cheap and abundant, competitive advantage shifts
  from burning more tokens to spending them efficiently with a human in the
  loop.
related:
  - INS-260321-EE05
  - INS-260330-3EFC
  - INS-260410-8E1C
  - INS-260410-E1D9
  - INS-260330-0102
  - INS-260626-C51E
  - INS-260605-D1F0
---
Koc contrasts 'Ralph looping' — handing an agent a task and burning tokens for 8-9 hours while hoping for a result — with a more 'opinionated' approach he jokingly calls bot looping, asking what the reward mechanism should be beyond just spending tokens. His closing thesis: '2025 was about token maxing, 2026 is about not wasting them.' Once you're running 60-70 agents the constraint stops being tokens and becomes raw compute plus the human's finite brain space to supervise. The practical implication is to add structure to autonomous loops — evals, dedup, signals about what's worth working on — so tokens buy directed progress rather than undirected churn, with the engineer kept 'in the loop' rather than fully delegating. Tagged time-sensitive because it's an explicit year-over-year prediction about where the frontier is heading.
