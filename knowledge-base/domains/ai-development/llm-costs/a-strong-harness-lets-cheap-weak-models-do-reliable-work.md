---
id: INS-260605-8F42
domain: ai-development
topic: llm-costs
title: 'A strong harness lets cheap, weak models do reliable work'
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - harness
  - cost-optimization
  - small-models
  - reliability
  - open-models
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
    The economic payoff of harness engineering is doing more with less — running
    cheap or free models like GPT-OSS or Qwen reliably instead of renting
    expensive frontier inference.
  standard: >-
    Kumar deliberately uses GPT-3.5 Turbo — a 2023-era 'really bad model' — and
    gets it to reliably complete a computer-use task purely by wrapping it in a
    harness. He generalizes this into the business case for harnesses: because
    we 'pay rent' for compute, inference, and tokens, and because models are
    non-deterministic black boxes, the way to do more with less is to invest in
    the harness and then run a cheap model (Qwen, something smaller, or free
    GPT-OSS) inside it. The harness absorbs the reliability burden that you'd
    otherwise pay a frontier model to provide. He cites IBM's open-source
    OpenRAG as a production example: 'a hell of a harness' that delivers
    enterprise-grade security and reliable RAG over siloed internal data (teams
    calls, PDFs, invoices) for very large companies. The strategic implication
    is that harness quality, not raw model quality, becomes the lever for
    cost-effective, reliable deployment.
stance: >-
  A well-built harness makes small or outdated models reliable enough to replace
  expensive frontier models for many tasks.
related:
  - INS-260409-0846
  - INS-260625-93FC
  - PRI-260426-890F
  - INS-260603-DFA6
  - INS-260514-AE82
---
Kumar deliberately uses GPT-3.5 Turbo — a 2023-era 'really bad model' — and gets it to reliably complete a computer-use task purely by wrapping it in a harness. He generalizes this into the business case for harnesses: because we 'pay rent' for compute, inference, and tokens, and because models are non-deterministic black boxes, the way to do more with less is to invest in the harness and then run a cheap model (Qwen, something smaller, or free GPT-OSS) inside it. The harness absorbs the reliability burden that you'd otherwise pay a frontier model to provide. He cites IBM's open-source OpenRAG as a production example: 'a hell of a harness' that delivers enterprise-grade security and reliable RAG over siloed internal data (teams calls, PDFs, invoices) for very large companies. The strategic implication is that harness quality, not raw model quality, becomes the lever for cost-effective, reliable deployment.
