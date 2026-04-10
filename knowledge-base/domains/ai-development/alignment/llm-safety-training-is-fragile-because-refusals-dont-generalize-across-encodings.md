---
id: INS-260410-FBAA
domain: ai-development
topic: alignment
title: >-
  LLM safety training is fragile because refusals don't generalize across
  encodings
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - jailbreaks
  - safety
  - rlhf
  - adversarial
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
    Jailbreaks work because refusal training generalizes over surface form
    (English, plain text) rather than semantic intent, so any new encoding —
    base64, roleplay, adversarial suffixes, noise patterns in images — opens a
    gap.
  standard: >-
    Karpathy walks through a catalog of jailbreak classes — grandma roleplay,
    base64 encoding, optimized universal suffixes, adversarial noise on input
    images — and draws a unifying lesson: safety fine-tuning is a shallow
    behavior layer that learned to refuse specific surface patterns rather than
    the underlying harmful intent. Models fluent in base64 refuse harmful
    English queries but comply with the same queries encoded in base64, because
    nearly all refusal training data was in English.


    The general principle is that every new modality and encoding the model
    becomes fluent in (languages, base64, vision, audio, tool outputs) creates a
    new attack surface that refusal training hasn't covered. Patching one
    surface by adding refusal examples invites adversaries to find another.
    Optimization-based attacks like universal adversarial suffixes make this
    worse: defenders can add any specific suffix to their training set, but the
    attacker simply reruns the optimization for a new one.


    This implies that behavioral safety via fine-tuning has structural limits.
    Defense-in-depth requires orthogonal mechanisms — content classifiers,
    output filters, sandboxing, tool permission models — rather than relying on
    the model itself to judge what it should refuse. It also predicts that any
    new multimodal capability will ship with new jailbreak classes until
    systematically red-teamed.
stance: >-
  LLM safety fine-tuning learns to refuse in the language of the refusal data,
  not the semantics, leaving the model vulnerable to any encoding not
  well-represented in training.
related:
  - INS-260403-9774
  - INS-260404-3D14
  - INS-260409-667F
  - PRI-260405-0676
  - INS-260403-141E
---
Karpathy walks through a catalog of jailbreak classes — grandma roleplay, base64 encoding, optimized universal suffixes, adversarial noise on input images — and draws a unifying lesson: safety fine-tuning is a shallow behavior layer that learned to refuse specific surface patterns rather than the underlying harmful intent. Models fluent in base64 refuse harmful English queries but comply with the same queries encoded in base64, because nearly all refusal training data was in English.

The general principle is that every new modality and encoding the model becomes fluent in (languages, base64, vision, audio, tool outputs) creates a new attack surface that refusal training hasn't covered. Patching one surface by adding refusal examples invites adversaries to find another. Optimization-based attacks like universal adversarial suffixes make this worse: defenders can add any specific suffix to their training set, but the attacker simply reruns the optimization for a new one.

This implies that behavioral safety via fine-tuning has structural limits. Defense-in-depth requires orthogonal mechanisms — content classifiers, output filters, sandboxing, tool permission models — rather than relying on the model itself to judge what it should refuse. It also predicts that any new multimodal capability will ship with new jailbreak classes until systematically red-teamed.
