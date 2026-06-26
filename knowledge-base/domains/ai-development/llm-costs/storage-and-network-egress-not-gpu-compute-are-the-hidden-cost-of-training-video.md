---
id: INS-260625-3D32
domain: ai-development
topic: llm-costs
title: >-
  Storage and network egress, not GPU compute, are the hidden cost of training
  video models
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - video-models
  - storage
  - egress
  - infrastructure
  - io-bound
  - training-cost
sources:
  - type: youtube
    title: >-
      Inside xAI: Building Grok Imagine in 3 Months, Videogen vs World Models,
      and Video Agents— Ethan He
    author: Latent Space
    url: 'https://www.youtube.com/watch?v=jPtQlILfkhA'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    A billion videos is tens of petabytes once you store both raw clips and
    their VAE features, costing millions per month in storage and egress before
    any GPU spend — making video training heavily IO-bound.
  standard: >-
    He does the back-of-envelope: a billion videos at ~5MB each is ~5 petabytes
    of raw storage, and you must also store the continuous VAE-compressed
    features, which are comparable in size — so tens of petabytes total. On S3
    standard that's ~$100k/month per 5PB, plus egress (AWS charges for egress,
    not ingress; ~$230k for 5PB at one tier), and every training run pulls the
    dataset at least once. All-in, just storing and moving the data runs to a
    few million dollars per month before GPU cost. Meanwhile the GPU side is
    comparable to a medium-to-large language model (open video models like LTX
    are ~19B dense; Cosmos trained on tens of trillions of tokens).


    The practical implication: video-model training is far more IO-bound than
    standard LLM training, so data loading, caching, and IO optimization become
    first-class engineering problems (Cosmos invested heavily to avoid being
    IO-bound). It also complicates the build-vs-rent calculus — GPU rental is
    efficient, but storage and egress are not what GPU-data-center builders
    optimize for, so storage and compute live in different places with their own
    constraints. A useful reference correction to GPU-hours-times-GPU-cost
    mental math, which systematically understates total cost.
stance: >-
  Training large video models is bottlenecked as much by petabyte-scale storage
  and network egress as by GPU compute.
related:
  - INS-260323-22E8
  - INS-260619-0770
  - INS-260329-31A2
  - INS-260501-0C6C
  - INS-260505-7B61
---
He does the back-of-envelope: a billion videos at ~5MB each is ~5 petabytes of raw storage, and you must also store the continuous VAE-compressed features, which are comparable in size — so tens of petabytes total. On S3 standard that's ~$100k/month per 5PB, plus egress (AWS charges for egress, not ingress; ~$230k for 5PB at one tier), and every training run pulls the dataset at least once. All-in, just storing and moving the data runs to a few million dollars per month before GPU cost. Meanwhile the GPU side is comparable to a medium-to-large language model (open video models like LTX are ~19B dense; Cosmos trained on tens of trillions of tokens).

The practical implication: video-model training is far more IO-bound than standard LLM training, so data loading, caching, and IO optimization become first-class engineering problems (Cosmos invested heavily to avoid being IO-bound). It also complicates the build-vs-rent calculus — GPU rental is efficient, but storage and egress are not what GPU-data-center builders optimize for, so storage and compute live in different places with their own constraints. A useful reference correction to GPU-hours-times-GPU-cost mental math, which systematically understates total cost.
