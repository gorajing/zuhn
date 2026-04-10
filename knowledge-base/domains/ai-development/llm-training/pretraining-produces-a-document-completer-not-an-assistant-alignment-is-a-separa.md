---
id: INS-260410-F985
domain: ai-development
topic: llm-training
title: >-
  Pretraining produces a document completer, not an assistant — alignment is a
  separate multi-stage process
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - rlhf
  - pretraining
  - fine-tuning
  - chatgpt
  - alignment
sources:
  - type: youtube
    title: 'Let''s build GPT: from scratch, in code, spelled out.'
    author: Andrej Karpathy
    url: 'https://www.youtube.com/watch?v=kCc8FmEb1nY'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    A pretrained GPT just completes internet-shaped documents; turning it into
    ChatGPT requires SFT on Q&A examples, a learned reward model, and PPO
    fine-tuning — none of which scale alone provides.
  standard: >-
    Karpathy draws an explicit line between what the lecture builds (nanoGPT
    pretraining — a decoder-only Transformer that completes sequences) and what
    ChatGPT adds on top. A freshly pretrained model given a question will often
    respond with more questions, ignore the prompt, or start a news article —
    whatever a similar document on the internet would look like. It is 'totally
    unaligned'.


    The three-stage alignment pipeline OpenAI uses: (1) supervised fine-tuning
    on thousands of human-written Q&A examples shifts the model's output
    distribution toward the assistant format; (2) human raters rank multiple
    model responses and that preference data trains a separate reward model; (3)
    PPO (a policy gradient RL algorithm) fine-tunes the base model to maximize
    predicted reward. Each stage is small relative to pretraining but
    architecturally and procedurally distinct. The practical implication: if
    you're trying to build something assistant-shaped on top of an open base
    model, you're not tweaking pretraining — you're rebuilding the alignment
    pipeline, and most of that data is not publicly available.
stance: >-
  The gap between a pretrained base model and a useful assistant is entirely
  bridged by fine-tuning (SFT + reward modeling + PPO), not by scale alone.
related:
  - INS-260323-1BF7
  - INS-260320-922A
  - INS-260329-8986
  - INS-260327-79E8
  - INS-260409-60C2
  - INS-260404-CE26
  - INS-260408-C572
  - INS-260410-684D
---
Karpathy draws an explicit line between what the lecture builds (nanoGPT pretraining — a decoder-only Transformer that completes sequences) and what ChatGPT adds on top. A freshly pretrained model given a question will often respond with more questions, ignore the prompt, or start a news article — whatever a similar document on the internet would look like. It is 'totally unaligned'.

The three-stage alignment pipeline OpenAI uses: (1) supervised fine-tuning on thousands of human-written Q&A examples shifts the model's output distribution toward the assistant format; (2) human raters rank multiple model responses and that preference data trains a separate reward model; (3) PPO (a policy gradient RL algorithm) fine-tunes the base model to maximize predicted reward. Each stage is small relative to pretraining but architecturally and procedurally distinct. The practical implication: if you're trying to build something assistant-shaped on top of an open base model, you're not tweaking pretraining — you're rebuilding the alignment pipeline, and most of that data is not publicly available.
