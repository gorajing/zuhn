---
id: INS-260323-3F39
domain: ai-development
topic: llm-training
title: >-
  Transformer architecture is fundamentally unchanged since GPT-2 -- all gains
  come from training recipes
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - transformers
  - architecture
  - gpt-2
  - scaling
  - moe
sources:
  - type: youtube
    title: >-
      State of AI in 2026: LLMs, Coding, Scaling Laws, China, Agents, GPUs, AGI
      | Lex Fridman Podcast #490
    author: Lex Fridman
    url: 'https://youtu.be/EV7WhVT270Q'
date_extracted: '2026-03-23'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Modern frontier models are essentially GPT-2 with minor tweaks; the real
    advances are in training methodology, data curation, and post-training.
  standard: >-
    Sebastian Raschka demonstrates that you can build any modern frontier model
    (gpt-oss-120b, OLMo 3, Gemini 3) by starting with GPT-2 and applying
    incremental changes: swapping Multi-Head Attention for Group Query
    Attention, adding Mixture of Experts layers, changing LayerNorm to RMSNorm,
    switching activation functions. None of these are fundamental redesigns. The
    architecture lineage is continuous. Where the actual capability gains happen
    is in: (1) training data curation and synthetic data generation, (2)
    post-training with RLHF/RLVR, (3) inference-time compute scaling, and (4)
    systems engineering that enables faster iteration (FP8/FP4 quantization,
    distributed training). This is a profound insight for practitioners:
    understanding the base architecture deeply (as in Raschka's 'Build an LLM
    from Scratch') gives you transferable knowledge across all frontier models.
related:
  - INS-260404-8EFB
  - INS-260405-82F3
  - INS-260403-1EFF
  - INS-260408-C572
  - INS-260408-F20F
stance: >-
  Modern frontier models are essentially GPT-2 with minor tweaks; the real
  advances are in training methodology, data curation, and post-training.
---
Sebastian Raschka demonstrates that you can build any modern frontier model (gpt-oss-120b, OLMo 3, Gemini 3) by starting with GPT-2 and applying incremental changes: swapping Multi-Head Attention for Group Query Attention, adding Mixture of Experts layers, changing LayerNorm to RMSNorm, switching activation functions. None of these are fundamental redesigns. The architecture lineage is continuous. Where the actual capability gains happen is in: (1) training data curation and synthetic data generation, (2) post-training with RLHF/RLVR, (3) inference-time compute scaling, and (4) systems engineering that enables faster iteration (FP8/FP4 quantization, distributed training). This is a profound insight for practitioners: understanding the base architecture deeply (as in Raschka's 'Build an LLM from Scratch') gives you transferable knowledge across all frontier models.
