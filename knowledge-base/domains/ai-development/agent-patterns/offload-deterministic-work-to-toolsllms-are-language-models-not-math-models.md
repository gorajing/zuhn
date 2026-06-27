---
id: INS-260627-36B1
domain: ai-development
topic: agent-patterns
title: 'Offload deterministic work to tools—LLMs are language models, not math models'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agents
  - tool-use
  - reliability
  - calculator
  - determinism
sources:
  - type: youtube
    title: "OpenRAG: An open-source stack for RAG —\_Phil Nash"
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=4TxOBhDRRCM'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Give agents a calculator instead of asking them to compute—models are good
    at language, not deterministic arithmetic, so route exact computation to
    tools.
  standard: >-
    In the OpenRAG agent, a calculator is included as a standard tool with the
    explicit reasoning that 'agents and models shouldn't be doing
    arithmetic—they're language models, not math models.' This captures a
    general agent-design principle: a probabilistic next-token predictor will
    sometimes get deterministic computation wrong, and there is no reason to
    gamble on it when a deterministic tool returns the exact answer every time.


    The broader pattern is to identify any subtask that has a correct,
    computable answer—arithmetic, date math, unit conversion, lookups,
    structured queries—and hand it to a purpose-built tool rather than letting
    the model approximate it. This both improves reliability and frees the model
    to do what it's actually good at: understanding intent, orchestrating, and
    synthesizing language. When designing an agent's tool set, ask of every
    capability 'is this deterministic?'—if yes, it belongs in a tool, not in the
    model's head.
stance: >-
  Agents should never be trusted to do arithmetic or other deterministic
  computation; give them a tool and let the tool be correct.
related:
  - INS-260410-A27C
  - INS-260625-A668
  - INS-260626-2F2E
  - INS-260514-791A
  - INS-260626-C88F
---
In the OpenRAG agent, a calculator is included as a standard tool with the explicit reasoning that 'agents and models shouldn't be doing arithmetic—they're language models, not math models.' This captures a general agent-design principle: a probabilistic next-token predictor will sometimes get deterministic computation wrong, and there is no reason to gamble on it when a deterministic tool returns the exact answer every time.

The broader pattern is to identify any subtask that has a correct, computable answer—arithmetic, date math, unit conversion, lookups, structured queries—and hand it to a purpose-built tool rather than letting the model approximate it. This both improves reliability and frees the model to do what it's actually good at: understanding intent, orchestrating, and synthesizing language. When designing an agent's tool set, ask of every capability 'is this deterministic?'—if yes, it belongs in a tool, not in the model's head.
