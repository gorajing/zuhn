---
id: INS-260626-B614
domain: ai-development
topic: claude-code
title: Force the agent to draw a data-flow diagram before coding to load context
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - prompting
  - planning
  - context-loading
  - skills
  - diagramming
sources:
  - type: youtube
    title: 'Tokenmaxxing: How Top Builders Use AI To Do The Work Of 400 Engineers'
    author: Y Combinator
    url: 'https://www.youtube.com/watch?v=57lDpTwiW6g'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Make the agent map data flows, inputs/outputs, user flows, state machines,
    and error cases as ASCII diagrams before it codes — it 'boils the ocean
    better' and writes fewer bugs.
  standard: >-
    Tan found that Claude would get confused, write bugs, or produce incomplete
    work when sent straight at a task. Inserting a forced pre-step — 'before you
    start, make an ASCII diagram of all the data flows, all the inputs and
    outputs, the user flows, the error messages' (plus state machines,
    dependency graphs, processing pipelines, decision trees) — caused the model
    to load the relevant context into its working window first, after which it
    executed far more completely. This 'plan-eng-review' pattern was the seed of
    his whole G stack of skills, and he layered a more ambitious 'CEO plan'
    variant on top using meta-prompting (e.g. 'imagine Brian Chesky asking what
    the 10-star experience is' and 'what is more ambitious and delivers 10x
    value for 2x effort'). The mechanism is that diagram generation acts as an
    explicit context-loading and self-elicitation step before generation, a
    concrete instance of why planning mode and pre-work elicitation beat
    one-shot prompting. Pairs with the heuristic that agentic task quality
    reduces to a few verifiable criteria you can force the model to enumerate up
    front.
stance: >-
  Requiring an agent to produce ASCII data-flow and architecture diagrams before
  writing code makes it complete the work more reliably.
related:
  - INS-260329-1ACD
  - INS-260410-E658
  - INS-260411-BCB0
  - INS-260605-63AE
  - INS-260530-D34F
  - INS-260605-9E46
  - INS-260626-287B
---
Tan found that Claude would get confused, write bugs, or produce incomplete work when sent straight at a task. Inserting a forced pre-step — 'before you start, make an ASCII diagram of all the data flows, all the inputs and outputs, the user flows, the error messages' (plus state machines, dependency graphs, processing pipelines, decision trees) — caused the model to load the relevant context into its working window first, after which it executed far more completely. This 'plan-eng-review' pattern was the seed of his whole G stack of skills, and he layered a more ambitious 'CEO plan' variant on top using meta-prompting (e.g. 'imagine Brian Chesky asking what the 10-star experience is' and 'what is more ambitious and delivers 10x value for 2x effort'). The mechanism is that diagram generation acts as an explicit context-loading and self-elicitation step before generation, a concrete instance of why planning mode and pre-work elicitation beat one-shot prompting. Pairs with the heuristic that agentic task quality reduces to a few verifiable criteria you can force the model to enumerate up front.
