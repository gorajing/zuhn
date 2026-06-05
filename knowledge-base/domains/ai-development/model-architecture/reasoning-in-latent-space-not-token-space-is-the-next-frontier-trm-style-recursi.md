---
id: INS-260501-22BF
domain: ai-development
topic: model-architecture
title: >-
  Reasoning in latent space (not token space) is the next frontier — TRM-style
  recursion inside an LLM's embeddings
actionability: inspiration
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - latent-space-reasoning
  - hybrid-architecture
  - lcm
  - future-architecture
sources:
  - type: youtube
    title: Recursion Is The Next Scaling Law In AI
    author: Y Combinator
    url: 'https://youtu.be/DGtUUMNYLcc'
date_extracted: '2026-05-01'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Big LLM finds the latent space, tiny TRM reasons inside it — skip the
    round-trip through tokens.
  standard: >-
    Chollet's prediction for where this research goes: today's LLMs are great at
    finding 'amazing embedding representation spaces' — but reasoning happens in
    token space (chain-of-thought), which means every reasoning step requires
    generating tokens, decoding, re-encoding. The opportunity is to do recursive
    reasoning directly in the latent embedding space using TRM-style tiny
    modules trained to reason within that space.


    Google's recursion-language-model work hints in this direction. The
    architectural shape: a frontier LLM provides the embedding-space substrate
    (mapping from text or pixels into rich semantic representations), then a
    tiny recursive reasoner (millions, not trillions, of parameters) operates
    inside that space iteratively until a fixed point or solution is found, with
    output decoded back to token space only at the end. This bypasses the
    token-space round-trip cost of every chain-of-thought step. For builders
    watching the architecture frontier: this is the kind of hybrid that could
    collapse the inference cost of reasoning by 10-100x once it works. The
    current bottleneck is generality — TRM-style models are task-specific
    (trained on Sudoku can't do ARC), so the path to general reasoning involves
    making the latent reasoner general-purpose.
stance: >-
  The biggest opportunity is composing trillion-parameter LLMs (which produce
  excellent embedding representations) with TRM-style tiny recursive reasoners
  operating directly in that latent space — bypassing the token-space round-trip
  that current chain-of-thought requires.
related:
  - INS-260605-91A9
  - INS-260323-8D12
  - INS-260410-2F8D
  - INS-260327-A44E
  - INS-260409-1078
---
Chollet's prediction for where this research goes: today's LLMs are great at finding 'amazing embedding representation spaces' — but reasoning happens in token space (chain-of-thought), which means every reasoning step requires generating tokens, decoding, re-encoding. The opportunity is to do recursive reasoning directly in the latent embedding space using TRM-style tiny modules trained to reason within that space.

Google's recursion-language-model work hints in this direction. The architectural shape: a frontier LLM provides the embedding-space substrate (mapping from text or pixels into rich semantic representations), then a tiny recursive reasoner (millions, not trillions, of parameters) operates inside that space iteratively until a fixed point or solution is found, with output decoded back to token space only at the end. This bypasses the token-space round-trip cost of every chain-of-thought step. For builders watching the architecture frontier: this is the kind of hybrid that could collapse the inference cost of reasoning by 10-100x once it works. The current bottleneck is generality — TRM-style models are task-specific (trained on Sudoku can't do ARC), so the path to general reasoning involves making the latent reasoner general-purpose.
