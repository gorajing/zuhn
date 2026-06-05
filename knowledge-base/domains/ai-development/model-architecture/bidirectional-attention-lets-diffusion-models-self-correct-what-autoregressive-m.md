---
id: INS-260605-015B
domain: ai-development
topic: model-architecture
title: >-
  Bidirectional attention lets diffusion models self-correct what autoregressive
  models lock in
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - bidirectional-attention
  - self-correction
  - text-diffusion
  - reasoning
  - causal-attention
sources:
  - type: youtube
    title: 'Text Diffusion — Brendon Dillon, Google DeepMind'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=r305-aQTaU0'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Because diffusion attends to future tokens, it can revise an answer it
    guessed early once its reasoning finishes — autoregressive causal attention
    cannot.
  standard: >-
    On a Google IO arithmetic demo (answer: 39), Gemini Diffusion guessed '60'
    after one forward pass, '49' after two, then — having completed the
    reasoning chain — went back and corrected the answer to '39' by the third.
    Crucially, much larger autoregressive models failed the same prompt: GPT-4o
    committed to '40,' and Gemini 2.5 Flash said '42' and then baked that error
    into its subsequent reasoning rather than fixing it.


    This is a structural, not scale, distinction. Autoregressive models have
    causal attention — they can only condition on the past — so a premature
    commitment propagates forward and often gets rationalized. Diffusion
    operates on the whole canvas with bidirectional attention, so a
    later-resolved fact can flow back and overwrite an earlier mistake. You can
    'fix' the autoregressive failure with explicit reasoning/thinking modes, but
    that just relocates the problem rather than removing it. The takeaway for
    architecture selection: self-correction is a free property of the generation
    mechanism in diffusion, whereas in autoregressive systems it must be bolted
    on via scaffolding.
stance: >-
  Autoregressive generation has a structural flaw — committing to early tokens
  before the reasoning completes — that diffusion's bidirectional attention
  structurally avoids.
related:
  - INS-260323-A5EC
  - INS-260403-F8CB
  - INS-260410-85F5
  - INS-260327-6E57
  - INS-260403-141E
  - PRI-260406-0E02
  - INS-260501-C4AA
---
On a Google IO arithmetic demo (answer: 39), Gemini Diffusion guessed '60' after one forward pass, '49' after two, then — having completed the reasoning chain — went back and corrected the answer to '39' by the third. Crucially, much larger autoregressive models failed the same prompt: GPT-4o committed to '40,' and Gemini 2.5 Flash said '42' and then baked that error into its subsequent reasoning rather than fixing it.

This is a structural, not scale, distinction. Autoregressive models have causal attention — they can only condition on the past — so a premature commitment propagates forward and often gets rationalized. Diffusion operates on the whole canvas with bidirectional attention, so a later-resolved fact can flow back and overwrite an earlier mistake. You can 'fix' the autoregressive failure with explicit reasoning/thinking modes, but that just relocates the problem rather than removing it. The takeaway for architecture selection: self-correction is a free property of the generation mechanism in diffusion, whereas in autoregressive systems it must be bolted on via scaffolding.
