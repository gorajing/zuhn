---
id: INS-260605-4DB9
domain: ai-development
topic: agent-patterns
title: Offload data-heavy work to sub-agents to keep the main conversation light
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - sub-agents
  - delegation
  - context-isolation
  - multi-agent
sources:
  - type: youtube
    title: How we solved Context Management in Agents — Sally-Ann Delucia
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=esY99nYXxR4'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Not all context belongs in the same agent — delegate searches and
    intermediate reasoning to sub-agents and pass only results back to the main
    conversation.
  standard: >-
    The Arize team realized 'not all context belongs in the same agent.' Their
    search task — querying across Arize trace data, with hundreds of spans,
    multiple queries, and lots of step-to-step intermediate reasoning — was
    overwhelming a single agent that held chat history, heavy data, and search
    all in one context.


    The fix was to split into a lightweight main agent plus sub-agents. The main
    conversation keeps only chat and light context and can delegate to
    sub-agents, where the heavy data and intermediate reasoning live. Once a
    sub-agent finishes, it passes a clean result back to the main agent, which
    can still retrieve from the memory store if it needs more. Delucia calls
    this a 'game-changer' and notes it is the pattern they keep returning to as
    context pressure grows. It is effectively context isolation: the noisy,
    data-intensive work never pollutes the main conversation.
stance: >-
  Heavy, data-intensive operations belong in sub-agents so the main conversation
  context stays small.
related:
  - INS-260405-8166
  - INS-260410-096F
  - INS-260411-5478
  - INS-260514-5914
  - INS-260605-5078
  - PRI-260328-A65A
  - INS-260322-D8C3
---
The Arize team realized 'not all context belongs in the same agent.' Their search task — querying across Arize trace data, with hundreds of spans, multiple queries, and lots of step-to-step intermediate reasoning — was overwhelming a single agent that held chat history, heavy data, and search all in one context.

The fix was to split into a lightweight main agent plus sub-agents. The main conversation keeps only chat and light context and can delegate to sub-agents, where the heavy data and intermediate reasoning live. Once a sub-agent finishes, it passes a clean result back to the main agent, which can still retrieve from the memory store if it needs more. Delucia calls this a 'game-changer' and notes it is the pattern they keep returning to as context pressure grows. It is effectively context isolation: the noisy, data-intensive work never pollutes the main conversation.
