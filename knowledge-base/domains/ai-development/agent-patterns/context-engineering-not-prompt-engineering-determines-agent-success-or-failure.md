---
id: INS-260605-2284
domain: ai-development
topic: agent-patterns
title: >-
  Context engineering, not prompt engineering, determines agent success or
  failure
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - context-engineering
  - prompt-engineering
  - agent-reliability
  - model-inputs
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
    The hard problem in agents has shifted from writing good prompts to
    strategically choosing what the model sees.
  standard: >-
    Delucia's central claim is that 'agents don't fail because of prompts, they
    fail because of context.' Early agent work fixated on prompt wording, but
    the Arize team found that what made Alex succeed or fail was the data it was
    shown — not how the instruction was phrased. Context engineering is the
    discipline of strategically choosing what the model sees, not merely fitting
    under a token limit.


    The practical implication is to stop treating the context window as a bucket
    to stuff full and start treating it as a curation problem: what is the
    minimal, most-relevant data the agent needs for this step? She frames the
    best context strategy as one that lets an agent 'remember what it needs to
    and forget what it doesn't.' Bad context produces bad answers, and bad
    answers kill product adoption — which is why she insists context management
    is a product and UX problem, not just an engineering one.
stance: 'Agents fail because of bad context selection, not bad prompts.'
related:
  - INS-260628-492E
  - INS-260326-2410
  - INS-260605-20DD
  - INS-260403-5F41
  - INS-260624-A121
---
Delucia's central claim is that 'agents don't fail because of prompts, they fail because of context.' Early agent work fixated on prompt wording, but the Arize team found that what made Alex succeed or fail was the data it was shown — not how the instruction was phrased. Context engineering is the discipline of strategically choosing what the model sees, not merely fitting under a token limit.

The practical implication is to stop treating the context window as a bucket to stuff full and start treating it as a curation problem: what is the minimal, most-relevant data the agent needs for this step? She frames the best context strategy as one that lets an agent 'remember what it needs to and forget what it doesn't.' Bad context produces bad answers, and bad answers kill product adoption — which is why she insists context management is a product and UX problem, not just an engineering one.
