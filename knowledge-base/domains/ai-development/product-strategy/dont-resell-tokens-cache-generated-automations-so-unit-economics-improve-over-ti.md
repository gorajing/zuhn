---
id: INS-260626-715B
domain: ai-development
topic: product-strategy
title: >-
  Don't resell tokens — cache generated automations so unit economics improve
  over time
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - unit-economics
  - code-generation
  - ai-business-model
  - caching
  - margins
sources:
  - type: youtube
    title: 'Rebuilding IT From the Ground Up for the AI Age: Serval''s Jake Stauch'
    author: Sequoia Capital
    url: 'https://www.youtube.com/watch?v=j7ypvRUFY7M'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Generate code once, then run the deterministic artifact on every request
    instead of regenerating with an LLM each time.
  standard: >-
    Serval's unit economics look much better than most AI companies because, in
    Stauch's words, 'we are not in the business of reselling tokens.'
    Automations are built as TypeScript; once a password-reset workflow is
    generated, every subsequent reset runs the existing code rather than
    re-invoking expensive code-gen. Over time users generate less and less new
    code because a growing library already covers the long tail, so the most
    expensive token consumption declines per request even with no explicit
    optimization.


    This decouples cost from usage in a way pure inference wrappers can't: a
    chatbot that calls an LLM on every turn has marginal cost that scales
    linearly with usage, whereas a 'compile-once, run-many' architecture
    amortizes the LLM cost across all future executions of that artifact. The
    strategic payoff is freedom — Stauch tells his team to 'spend more money,
    use the best possible product' today and optimize cost later, precisely
    because the structural margins are already strong.


    The caveat he flags: this advantage holds for request-response automation,
    but long-running background agents (investigating historical tickets,
    combing device logs, surfacing problems you didn't know you had) reintroduce
    open-ended token consumption that 'could run away pretty quickly.' So the
    principle is specifically about converting repeated LLM work into cached
    deterministic artifacts; where work is inherently exploratory and
    non-repeating, cost discipline has to come back earlier.
stance: >-
  AI application companies escape the thin-margin token-reseller trap by
  generating reusable code once and running it deterministically, so unit
  economics improve as the automation library grows.
related:
  - INS-260403-FF4E
  - INS-260625-FE3E
  - INS-260625-E1CB
  - INS-260625-B67E
  - INS-260626-158E
  - INS-260522-EB3C
  - INS-260329-7B1D
---
Serval's unit economics look much better than most AI companies because, in Stauch's words, 'we are not in the business of reselling tokens.' Automations are built as TypeScript; once a password-reset workflow is generated, every subsequent reset runs the existing code rather than re-invoking expensive code-gen. Over time users generate less and less new code because a growing library already covers the long tail, so the most expensive token consumption declines per request even with no explicit optimization.

This decouples cost from usage in a way pure inference wrappers can't: a chatbot that calls an LLM on every turn has marginal cost that scales linearly with usage, whereas a 'compile-once, run-many' architecture amortizes the LLM cost across all future executions of that artifact. The strategic payoff is freedom — Stauch tells his team to 'spend more money, use the best possible product' today and optimize cost later, precisely because the structural margins are already strong.

The caveat he flags: this advantage holds for request-response automation, but long-running background agents (investigating historical tickets, combing device logs, surfacing problems you didn't know you had) reintroduce open-ended token consumption that 'could run away pretty quickly.' So the principle is specifically about converting repeated LLM work into cached deterministic artifacts; where work is inherently exploratory and non-repeating, cost discipline has to come back earlier.
