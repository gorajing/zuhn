---
id: INS-260605-D3EB
domain: ai-development
topic: llm-training
title: Fine-tune sub-billion-param models on synthetic data instead of prompting them
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - fine-tuning
  - synthetic-data
  - function-calling
  - on-device
  - tiny-llm
sources:
  - type: youtube
    title: >-
      From 46% to 90%: Fine-Tuning Tiny LLMs for On-Device Agents — Cormac
      Brick, Google
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=-TiET_K-E_g'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Function Gemma (270M) went from 46% to over 90% function-calling accuracy on
    8 of 10 app intents by fine-tuning on synthetic data rather than describing
    functions in a system prompt.
  standard: >-
    With large models or AI Core-backed devices, you expose available functions
    through a system prompt and the model figures out the call. That approach
    collapses at the tiny end. Brick's team took Function Gemma out of the box
    at ~46% success on app-intent tasks (add calendar, add email), then ran it
    through a fine-tuning flow: use a stronger model (Gemini Flash) to
    synthetically generate a task-specific dataset, fine-tune the small model on
    it, and accuracy jumped to over 90% for 8 of 10 functions.


    The operational lesson is that the prompting-vs-fine-tuning tradeoff inverts
    as model size shrinks. Prompting is cheap and flexible but assumes enough
    latent capability to follow instructions in-context; sub-billion-param
    models lack that headroom. Synthetic-data fine-tuning is more work but bakes
    the narrow behavior directly into the weights, which is what makes shipping
    robust function calling in a small on-device model feasible at scale.
stance: >-
  For tiny on-device models, fine-tuning on synthetically generated task data
  beats system-prompt instruction and is the only path to reliable function
  calling.
related:
  - INS-260410-8243
  - INS-260514-A02E
  - INS-260329-560D
  - INS-260325-175B
  - INS-260412-6FB6
  - INS-260321-6437
  - INS-260413-AD37
---
With large models or AI Core-backed devices, you expose available functions through a system prompt and the model figures out the call. That approach collapses at the tiny end. Brick's team took Function Gemma out of the box at ~46% success on app-intent tasks (add calendar, add email), then ran it through a fine-tuning flow: use a stronger model (Gemini Flash) to synthetically generate a task-specific dataset, fine-tune the small model on it, and accuracy jumped to over 90% for 8 of 10 functions.

The operational lesson is that the prompting-vs-fine-tuning tradeoff inverts as model size shrinks. Prompting is cheap and flexible but assumes enough latent capability to follow instructions in-context; sub-billion-param models lack that headroom. Synthetic-data fine-tuning is more work but bakes the narrow behavior directly into the weights, which is what makes shipping robust function calling in a small on-device model feasible at scale.
