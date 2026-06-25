---
id: INS-260605-DB29
domain: ai-development
topic: agent-patterns
title: 'Reliability comes from the harness, not from harder prompting'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - harness
  - reliability
  - prompt-engineering
  - agents
  - non-determinism
sources:
  - type: youtube
    title: 'Harnesses in AI: A Deep Dive — Tejas Kumar, IBM'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=C_GG5g38vLU'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    The instinct to 'prompt it harder' when an agent fails is usually wrong;
    reliability is engineered structurally through the harness surrounding the
    model.
  standard: >-
    The common reflex when an agent doesn't do what it's supposed to is to
    rewrite the system prompt or 'prompt it harder.' Kumar argues this is
    usually the wrong move: the rented model is a non-deterministic black box (a
    provider could silently serve Sonnet when you asked for Opus and you'd never
    know), so there are too many uncontrollable variables to fix with words
    alone. The harness — the tool registry, context management, guardrails,
    agent loop, and verification step wrapped around the model — is what ties
    the black box to a stable environment you actually control. In the demo he
    never touches the prompt once; he only adds harness components, and the
    outcome changes from hallucinated failure to reliable success. The lesson:
    treat reliability as a structural engineering problem solved
    deterministically outside the model, not a linguistic one solved inside it.
stance: >-
  When an agent misbehaves, the fix is building a harness around it, not
  engineering a better prompt.
related:
  - INS-260321-2482
  - INS-260410-9DB0
  - PRI-260426-890F
  - INS-260605-726C
  - INS-260625-0021
---
The common reflex when an agent doesn't do what it's supposed to is to rewrite the system prompt or 'prompt it harder.' Kumar argues this is usually the wrong move: the rented model is a non-deterministic black box (a provider could silently serve Sonnet when you asked for Opus and you'd never know), so there are too many uncontrollable variables to fix with words alone. The harness — the tool registry, context management, guardrails, agent loop, and verification step wrapped around the model — is what ties the black box to a stable environment you actually control. In the demo he never touches the prompt once; he only adds harness components, and the outcome changes from hallucinated failure to reliable success. The lesson: treat reliability as a structural engineering problem solved deterministically outside the model, not a linguistic one solved inside it.
