---
id: INS-260410-3A08
domain: ai-development
topic: llm-training
title: >-
  Fine-tuning trades quantity for quality to convert a document generator into
  an assistant
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - fine-tuning
  - alignment
  - rlhf
  - assistant-behavior
sources:
  - type: youtube
    title: '[1hr Talk] Intro to Large Language Models'
    author: Andrej Karpathy
    url: 'https://www.youtube.com/watch?v=zjkBMFhNj_g'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Pretraining gives a base model all its knowledge; a cheap fine-tuning stage
    on ~100k curated Q&A pairs reshapes it into a helpful assistant without
    adding knowledge.
  standard: >-
    Karpathy divides LLM production into two stages with radically different
    economics. Pretraining costs millions, runs for months on thousands of GPUs,
    and optimizes next-token prediction over terabytes of low-quality web text —
    this is where knowledge enters the weights. Fine-tuning uses the same
    next-token objective but swaps in ~100k hand-written high-quality
    conversations, takes roughly a day, and can be iterated weekly.


    The surprising empirical finding is that this tiny quality-focused dataset
    is enough to convert a document continuation engine into something that
    answers questions in the form of a helpful assistant — while still retaining
    all the pretraining knowledge. Alignment in this frame is primarily a
    formatting shift, not a knowledge transfer. This explains why assistant
    fine-tuning is iterative (fix misbehaviors → add correct examples → retrain
    weekly) while pretraining happens annually or less.


    The asymmetry has strategic implications: a company that releases only the
    base model (as Meta did with Llama 2) effectively gives away the expensive
    part while letting others customize cheaply. It also implies that most 'AI
    capability' disagreements between labs are actually fine-tuning
    disagreements, since the underlying pretraining substrate is increasingly
    commoditized.
stance: >-
  The assistant behavior of modern LLMs comes almost entirely from a small
  high-quality fine-tuning stage, not from pretraining.
related:
  - INS-260330-4AD5
  - PRI-260320-6847
  - INS-260404-CE26
  - INS-260322-3616
  - INS-260409-C158
---
Karpathy divides LLM production into two stages with radically different economics. Pretraining costs millions, runs for months on thousands of GPUs, and optimizes next-token prediction over terabytes of low-quality web text — this is where knowledge enters the weights. Fine-tuning uses the same next-token objective but swaps in ~100k hand-written high-quality conversations, takes roughly a day, and can be iterated weekly.

The surprising empirical finding is that this tiny quality-focused dataset is enough to convert a document continuation engine into something that answers questions in the form of a helpful assistant — while still retaining all the pretraining knowledge. Alignment in this frame is primarily a formatting shift, not a knowledge transfer. This explains why assistant fine-tuning is iterative (fix misbehaviors → add correct examples → retrain weekly) while pretraining happens annually or less.

The asymmetry has strategic implications: a company that releases only the base model (as Meta did with Llama 2) effectively gives away the expensive part while letting others customize cheaply. It also implies that most 'AI capability' disagreements between labs are actually fine-tuning disagreements, since the underlying pretraining substrate is increasingly commoditized.
