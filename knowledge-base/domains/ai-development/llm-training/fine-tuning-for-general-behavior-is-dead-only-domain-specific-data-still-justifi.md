---
id: INS-260625-B5AD
domain: ai-development
topic: llm-training
title: >-
  Fine-tuning for general behavior is dead; only domain-specific data still
  justifies it
actionability: immediate
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - fine-tuning
  - prompting
  - domain-adaptation
  - base-models
  - developer-trends
sources:
  - type: youtube
    title: "⚡️ Google's Open AI Strategy —\_Omar Sanseviero, Google DeepMind"
    author: Latent Space
    url: 'https://www.youtube.com/watch?v=Hxlayqs-IAs'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Partners increasingly find base models 'work too well out of the box' for
    general tasks, so fine-tuning excitement has shifted from behavior-shaping
    to injecting domain data the model lacks.
  standard: >-
    The 2023–2024 fine-tuning communities have cooled markedly. Sanseviero
    reports that among ~50–60 Gemma 4 launch partners, several arrived planning
    to fine-tune the 27B model for a vision task, then discovered the base model
    already handled it well enough that they abandoned the fine-tune. The
    capability ceiling for general conversational behavior is now high enough
    that prompting covers most of what fine-tuning used to do.


    The surviving use case is narrow and specific: domains with proprietary or
    rare data the base model never trained on — finance, healthcare, niche
    document types. Google's own Med Gemma is exactly this pattern: Gemma 3 plus
    additional training on medical datasets. The dividing line is whether you're
    trying to change *how the model behaves* (prompt it) versus *what
    specialized data it knows* (fine-tune it).


    Actionable rule: before reaching for a fine-tune, try prompting and confirm
    the base model genuinely fails the task. Spend the fine-tuning budget only
    when the gap is specialized knowledge or data distribution the model has
    never seen — not tone, format, or general instruction-following. This is
    marked time-sensitive because it tracks the current base-model frontier and
    could shift as the line between prompting and tuning continues to move.
stance: >-
  Fine-tuning to change a model's general conversational behavior has become
  unnecessary as base models improved — it now pays off only for domain-specific
  data the model never saw, like finance or healthcare.
related:
  - INS-260322-3616
  - INS-260409-3230
  - INS-260625-3768
  - INS-260605-33FA
  - INS-260625-0DD6
  - INS-260326-2410
---
The 2023–2024 fine-tuning communities have cooled markedly. Sanseviero reports that among ~50–60 Gemma 4 launch partners, several arrived planning to fine-tune the 27B model for a vision task, then discovered the base model already handled it well enough that they abandoned the fine-tune. The capability ceiling for general conversational behavior is now high enough that prompting covers most of what fine-tuning used to do.

The surviving use case is narrow and specific: domains with proprietary or rare data the base model never trained on — finance, healthcare, niche document types. Google's own Med Gemma is exactly this pattern: Gemma 3 plus additional training on medical datasets. The dividing line is whether you're trying to change *how the model behaves* (prompt it) versus *what specialized data it knows* (fine-tune it).

Actionable rule: before reaching for a fine-tune, try prompting and confirm the base model genuinely fails the task. Spend the fine-tuning budget only when the gap is specialized knowledge or data distribution the model has never seen — not tone, format, or general instruction-following. This is marked time-sensitive because it tracks the current base-model frontier and could shift as the line between prompting and tuning continues to move.
