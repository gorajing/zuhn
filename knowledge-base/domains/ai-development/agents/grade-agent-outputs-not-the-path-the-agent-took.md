---
id: INS-260410-5D66
domain: ai-development
topic: agents
title: 'Grade agent outputs, not the path the agent took'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - evals
  - grader-design
  - agents
  - brittleness
sources:
  - type: blog
    title: Demystifying evals for AI agents
    url: 'https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Grading tool-call sequences creates brittle evals that punish creativity;
    grade the outcome and the transcript holistically instead.
  standard: >-
    A tempting instinct when building agent evals is to assert that the agent
    followed a specific sequence of steps — call tool A, then tool B, then
    return. Anthropic found this produces overly brittle tests because frontier
    models regularly discover valid approaches the eval designers never
    anticipated. Opus 4.5 once solved a τ2-bench flight-booking problem by
    exploiting a loophole in the stated policy — technically 'failing' the eval
    as written, but actually producing a better outcome for the user.


    The alternative is to grade what the agent produced: end-state checks on the
    environment (did the refund actually get processed, does the test suite now
    pass), LLM rubrics for open-ended quality, and transcript metrics (turns,
    tokens, tool calls) as tracked signals rather than hard assertions. Partial
    credit matters too — a support agent that identifies the problem and
    verifies identity but fails to process the refund is meaningfully better
    than one that fails immediately, and the eval should represent that
    continuum.
stance: >-
  Agent evaluations should grade the produced outcome rather than enforce a
  specific sequence of tool calls or reasoning steps.
related:
  - INS-260410-F5EC
  - PRI-260403-2376
  - PRI-260405-49C0
  - PRI-260406-A5F0
  - PRI-260328-7A4D
  - INS-260321-4178
---
A tempting instinct when building agent evals is to assert that the agent followed a specific sequence of steps — call tool A, then tool B, then return. Anthropic found this produces overly brittle tests because frontier models regularly discover valid approaches the eval designers never anticipated. Opus 4.5 once solved a τ2-bench flight-booking problem by exploiting a loophole in the stated policy — technically 'failing' the eval as written, but actually producing a better outcome for the user.

The alternative is to grade what the agent produced: end-state checks on the environment (did the refund actually get processed, does the test suite now pass), LLM rubrics for open-ended quality, and transcript metrics (turns, tokens, tool calls) as tracked signals rather than hard assertions. Partial credit matters too — a support agent that identifies the problem and verifies identity but fails to process the refund is meaningfully better than one that fails immediately, and the eval should represent that continuum.
