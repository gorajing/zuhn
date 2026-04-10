---
id: INS-260410-1789
domain: ai-development
topic: model-architecture
title: >-
  Transformer blocks intersperse communication with computation — tokens need
  time to 'think' between exchanges
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - transformers
  - feedforward
  - architecture-patterns
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
    Every transformer block pairs attention (tokens gather info from each other)
    with a feedforward MLP (each token thinks privately) — communication without
    computation underfits.
  standard: >-
    When Karpathy first added self-attention without a feedforward layer, the
    tokens gathered information from each other but then 'went too fast to
    calculate the logits' — they had no private computation step to process what
    they'd gathered. Adding a simple per-token MLP (linear → ReLU → linear, with
    an inner 4x dimension expansion) dropped validation loss from 2.28 to 2.24
    and was prerequisite for the later gains from residuals and layer norm.


    The pattern generalizes: attention is communication across nodes, but
    per-token transformation is computation within a node. Both are necessary
    because information exchange and information processing are different
    operations. The original paper's 4x feedforward expansion isn't arbitrary —
    it gives each token substantially more compute than the attention layer
    provides. Modern transformer architectures preserve this pattern precisely
    because stacking more communication without more per-token computation runs
    into diminishing returns.
stance: >-
  Stacking attention layers back-to-back underperforms; you must alternate
  attention (communication) with position-wise feedforward layers (per-token
  computation) because tokens need private processing time between message
  exchanges.
related:
  - INS-260325-5B28
  - INS-260410-0EFE
  - INS-260323-8D12
  - INS-260323-A5EC
  - INS-260327-1563
---
When Karpathy first added self-attention without a feedforward layer, the tokens gathered information from each other but then 'went too fast to calculate the logits' — they had no private computation step to process what they'd gathered. Adding a simple per-token MLP (linear → ReLU → linear, with an inner 4x dimension expansion) dropped validation loss from 2.28 to 2.24 and was prerequisite for the later gains from residuals and layer norm.

The pattern generalizes: attention is communication across nodes, but per-token transformation is computation within a node. Both are necessary because information exchange and information processing are different operations. The original paper's 4x feedforward expansion isn't arbitrary — it gives each token substantially more compute than the attention layer provides. Modern transformer architectures preserve this pattern precisely because stacking more communication without more per-token computation runs into diminishing returns.
