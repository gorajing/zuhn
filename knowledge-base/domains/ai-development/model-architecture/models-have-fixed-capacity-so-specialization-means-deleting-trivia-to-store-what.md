---
id: INS-260627-B9FA
domain: ai-development
topic: model-architecture
title: >-
  Models have fixed capacity, so specialization means deleting trivia to store
  what you care about
actionability: inspiration
confidence: medium
shelf_life: evergreen
status: active
tags:
  - model-capacity
  - specialization
  - catastrophic-forgetting
  - neural-file-system
  - knowledge-injection
sources:
  - type: youtube
    title: 'Jack Morris: Stuffing Context is not Memory, Updating Weights is'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=Jty4s9-Jb78'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    A model has finite information capacity (~3.6 bits/param), so knowing the
    capital of the smallest province in Tajikistan is wasted space — specialize
    by deleting trivia, not by adding everything.
  standard: >-
    Morris cites a measurement that language models store roughly 3.6 bits per
    parameter — a 1B-parameter model holds only a few gigabytes of information.
    Because capacity is fixed, models fit the training distribution and discard
    everything else. He frames the trivia an LLM happens to know (the capital of
    Tajikistan's smallest province, with no web search) as a liability rather
    than an asset for a system meant to answer detailed questions about your
    company's documents: that capacity could have been spent on what you
    actually care about.


    The aspiration he calls a 'neural file system' is the ability to locate and
    delete specific knowledge and replace it with target knowledge — though he's
    candid that nobody fully knows how to do this yet (catastrophic forgetting
    remains unsolved). This connects to the Karpathy 'reasoning engine' debate:
    rather than a tiny model that knows nothing but uses tools well, Morris
    advocates for specialized models that are genuinely good at your domain and
    deliberately bad at everything else, because a model that knows nothing is
    actually hard to build. The strategic takeaway for anyone fine-tuning: think
    in terms of a capacity budget — specialization is a deliberate trade of
    breadth for depth, not free addition.
stance: >-
  LLMs store a fixed amount of information (~3.6 bits per parameter), so the
  right goal is not a model that knows everything but a specialized model that
  forgets irrelevant facts to make room for your domain.
related:
  - INS-260626-D8AE
  - INS-260625-DD6B
  - INS-260626-4D5F
  - INS-260626-742C
  - INS-260626-BCC7
---
Morris cites a measurement that language models store roughly 3.6 bits per parameter — a 1B-parameter model holds only a few gigabytes of information. Because capacity is fixed, models fit the training distribution and discard everything else. He frames the trivia an LLM happens to know (the capital of Tajikistan's smallest province, with no web search) as a liability rather than an asset for a system meant to answer detailed questions about your company's documents: that capacity could have been spent on what you actually care about.

The aspiration he calls a 'neural file system' is the ability to locate and delete specific knowledge and replace it with target knowledge — though he's candid that nobody fully knows how to do this yet (catastrophic forgetting remains unsolved). This connects to the Karpathy 'reasoning engine' debate: rather than a tiny model that knows nothing but uses tools well, Morris advocates for specialized models that are genuinely good at your domain and deliberately bad at everything else, because a model that knows nothing is actually hard to build. The strategic takeaway for anyone fine-tuning: think in terms of a capacity budget — specialization is a deliberate trade of breadth for depth, not free addition.
