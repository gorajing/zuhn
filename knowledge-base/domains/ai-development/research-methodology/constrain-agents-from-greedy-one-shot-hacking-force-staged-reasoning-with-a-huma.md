---
id: INS-260524-78D0
domain: ai-development
topic: research-methodology
title: >-
  Constrain agents from greedy one-shot 'hacking'; force staged reasoning with a
  human combining ideas
actionability: immediate
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - agentic-reasoning
  - human-in-the-loop
  - verification
  - multi-stage
sources:
  - type: audio
    title: Chapter
date_extracted: '2026-05-24'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Woosang: left alone the model 'hacks' a quick buggy answer; forcing it to
    plan, verify, and explore multi-stage — then combining its idea with the
    human's — is what solved hard problems.
  standard: >-
    Building an agent to attack hard math, Woosang found that one-shotting
    produced 'hacky' buggy solutions, so he evolved a multi-stage approach: ask
    clarifying questions, verify, align early, explore from different angles for
    creative leaps, and explicitly combine the agent's idea with the human's.
    His takeaway: the agent is powerful but not perfect, so keep a human in the
    loop. Concrete method-level support for the KB's
    human-vs-automation-boundary principles.
stance: >-
  Agentic problem-solving on hard problems works best when you prevent the model
  from rushing to a buggy one-shot answer and instead enforce ask -> verify ->
  align -> multi-stage exploration, with a human combining the agent's idea and
  their own.
related:
  - INS-260321-E59A
  - INS-260330-84F4
  - INS-260403-06E7
  - INS-260410-9A24
  - INS-260410-7292
  - INS-260409-FA5E
  - INS-260412-8E0A
  - INS-260627-277A
  - INS-260408-C572
  - PRI-260406-5CA8
---
Building an agent to attack hard math, Woosang found that one-shotting produced 'hacky' buggy solutions, so he evolved a multi-stage approach: ask clarifying questions, verify, align early, explore from different angles for creative leaps, and explicitly combine the agent's idea with the human's. His takeaway: the agent is powerful but not perfect, so keep a human in the loop. Concrete method-level support for the KB's human-vs-automation-boundary principles.
