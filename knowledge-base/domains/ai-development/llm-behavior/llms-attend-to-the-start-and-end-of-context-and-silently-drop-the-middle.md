---
id: INS-260625-1432
domain: ai-development
topic: llm-behavior
title: LLMs attend to the start and end of context and silently drop the middle
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - context-window
  - lost-in-the-middle
  - attention
  - context-engineering
  - agent-failure
sources:
  - type: youtube
    title: >-
      Why More Context Makes Your Agent Dumber and What to Do About It — Nupur
      Sharma, Qodo
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=EcqMYoIV57A'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Models follow a U-shaped attention curve—keeping the first and last inputs
    and ignoring the middle—so more context does not mean more usable context.
  standard: >-
    Qodo benchmarks its multi-agent code-review system by measuring whether the
    context it supplies actually influences the result. The consistent finding:
    the initial prompt/goal stays in focus and whatever is fed last stays in
    focus, but everything in between—Jira tickets, MCP outputs, supporting
    documents—gets purged as the model tries to 'make sense by itself.' This is
    the lost-in-the-middle effect manifesting in real agent pipelines, not just
    synthetic needle-in-a-haystack tests.


    The practical consequence is that growing the context window is not a fix
    for retrieval quality. Capacity to *accept* tokens is not capacity to *use*
    them. A team that responds to bad agent output by stuffing in more context
    is often making the problem worse, because the marginal context lands in the
    dead zone the model already ignores.


    The corrective move is to treat context as a scarce, ranked resource: put
    the most decision-relevant material at the very front or very back of the
    prompt, and curate aggressively rather than relying on the model to locate
    importance inside a large dump. This reframes the whole problem from 'how
    big a window can I fill' to 'what are the few things that must be at the
    edges.'
stance: >-
  Dumping the full codebase into a large context window degrades agent results
  because the model purges everything except the opening goal and the most
  recent input.
related:
  - INS-260628-28B0
  - INS-260625-E500
  - PRI-260411-9CB1
  - INS-260625-A7C5
  - PRI-260406-0087
---
Qodo benchmarks its multi-agent code-review system by measuring whether the context it supplies actually influences the result. The consistent finding: the initial prompt/goal stays in focus and whatever is fed last stays in focus, but everything in between—Jira tickets, MCP outputs, supporting documents—gets purged as the model tries to 'make sense by itself.' This is the lost-in-the-middle effect manifesting in real agent pipelines, not just synthetic needle-in-a-haystack tests.

The practical consequence is that growing the context window is not a fix for retrieval quality. Capacity to *accept* tokens is not capacity to *use* them. A team that responds to bad agent output by stuffing in more context is often making the problem worse, because the marginal context lands in the dead zone the model already ignores.

The corrective move is to treat context as a scarce, ranked resource: put the most decision-relevant material at the very front or very back of the prompt, and curate aggressively rather than relying on the model to locate importance inside a large dump. This reframes the whole problem from 'how big a window can I fill' to 'what are the few things that must be at the edges.'
