---
id: INS-260605-CE25
domain: ai-development
topic: agent-patterns
title: >-
  AI inverts TDD's cost structure: red and green go fast, refactor becomes the
  human bottleneck
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - tdd
  - agentic-coding
  - workflow
  - refactoring
sources:
  - type: youtube
    title: >-
      Beyond Code Coverage: Functionality Testing with Playwright MCP — Marlene
      Mhangami, Microsoft
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=FWEInOtngmM'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Agents make TDD's red and green phases nearly free, so the developer's time
    and attention should move to the refactor phase.
  standard: >-
    TDD was historically rejected by fast-moving teams as too slow, because
    writing failing tests and then code to pass them consumed developer time up
    front. Coding agents collapse that cost: an agent can generate the failing
    behavioral tests (red) and the passing implementation (green) quickly. The
    bottleneck — and the place human effort should now grow — is the refactor
    phase, where developers review the agent's generated code and make it follow
    best practices. This is a workflow reallocation, not just a speedup: the
    developer's comparative advantage moves from authoring to reviewing and
    shaping, which also addresses the entropy risk of accepting agent output
    unrefined.
stance: >-
  With coding agents the slow part of TDD shifts from writing tests and passing
  code to the refactor phase, where human judgment should now concentrate.
related:
  - INS-260329-03B5
  - INS-260627-D190
  - INS-260412-8B95
  - INS-260628-8649
  - PRI-260406-9780
---
TDD was historically rejected by fast-moving teams as too slow, because writing failing tests and then code to pass them consumed developer time up front. Coding agents collapse that cost: an agent can generate the failing behavioral tests (red) and the passing implementation (green) quickly. The bottleneck — and the place human effort should now grow — is the refactor phase, where developers review the agent's generated code and make it follow best practices. This is a workflow reallocation, not just a speedup: the developer's comparative advantage moves from authoring to reviewing and shaping, which also addresses the entropy risk of accepting agent output unrefined.
