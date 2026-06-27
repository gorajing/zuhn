---
id: INS-260625-057C
domain: ai-development
topic: architecture
title: Treat the prompt as an externalized variable manipulated symbolically
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - context-engineering
  - rlm
  - repl
  - long-context
  - symbolic-manipulation
sources:
  - type: youtube
    title: 'Recursive Coding Agents - Raymond Weitekamp, OpenProse'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=3hXJI2q0Jz8'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    In a Recursive Language Model the context itself is the object of
    computation — the prompt is a variable in a REPL, not text read into the
    window.
  standard: >-
    The defining move of an RLM is that 'the context itself is the object of
    computation.' Rather than reading a large corpus into the context window,
    the agent treats the full prompt as a variable — a file or many files — and
    operates on it symbolically through a read-evaluate-print loop (Python in
    the original paper, but it can be bash over a Linux filesystem, as in
    OpenProse's Unix RLM). The agent pokes around symbolically and dispatches
    sub-agents to manipulate slices of the prompt, then works back up to a final
    answer.


    This is a marriage of tool-calling and reasoning: code execution *is* the
    reasoning. The payoff is scale — RLMs can process inputs many orders of
    magnitude larger than their context window (tens of millions of tokens),
    because no single model instance ever has to hold the whole thing. For
    practitioners drowning in long-context limits, the lesson is to stop trying
    to stuff everything into the window and instead build an executable
    environment where the model navigates an externalized prompt
    programmatically.
stance: >-
  Externalizing the full prompt as a variable explored symbolically through a
  REPL beats loading everything into the context window.
related:
  - INS-260409-533A
  - INS-260627-21D0
  - INS-260321-82FE
  - INS-260501-C59A
  - PRI-260406-1AC6
  - INS-260329-8DC5
---
The defining move of an RLM is that 'the context itself is the object of computation.' Rather than reading a large corpus into the context window, the agent treats the full prompt as a variable — a file or many files — and operates on it symbolically through a read-evaluate-print loop (Python in the original paper, but it can be bash over a Linux filesystem, as in OpenProse's Unix RLM). The agent pokes around symbolically and dispatches sub-agents to manipulate slices of the prompt, then works back up to a final answer.

This is a marriage of tool-calling and reasoning: code execution *is* the reasoning. The payoff is scale — RLMs can process inputs many orders of magnitude larger than their context window (tens of millions of tokens), because no single model instance ever has to hold the whole thing. For practitioners drowning in long-context limits, the lesson is to stop trying to stuff everything into the window and instead build an executable environment where the model navigates an externalized prompt programmatically.
