---
id: INS-260410-9EEF
domain: ai-development
topic: model-architecture
title: >-
  Self-attention is a communication mechanism over a directed graph, not a
  sequence operation
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - transformers
  - self-attention
  - mental-models
  - graph-neural-networks
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
    Attention is weighted aggregation between nodes in a directed graph — the
    'sequence' framing is just one possible graph topology.
  standard: >-
    Karpathy reframes self-attention away from the usual 'sequence of tokens'
    framing: every token is a node, each node emits a query ('what am I looking
    for') and a key ('what do I contain'), affinities are computed by
    dot-producting queries with keys, and information flows as a weighted sum of
    value vectors along edges. The causal mask in a decoder is just one graph
    topology (node t only receives from nodes 1..t); an encoder block is the
    same code with the mask removed (fully connected graph); cross-attention is
    the same mechanism where keys/values come from a different set of nodes
    entirely.


    This mental model is more powerful than the 'sequence' framing because it
    explains why attention has no built-in notion of position (nodes are just a
    set), why positional encodings must be added explicitly, and why batch
    elements never talk to each other (they're independent pools of nodes). Once
    you see attention as graph message-passing, architectural choices collapse
    into 'what edges do I allow' rather than 'what variant of attention do I
    implement'.
stance: >-
  Attention should be understood as generic message-passing between nodes in a
  directed graph, which makes the sequence/causal/encoder/decoder variants
  trivial special cases.
related:
  - INS-260410-268D
  - INS-260410-025A
  - INS-260330-33FF
  - INS-260410-78D3
  - INS-260323-9F61
---
Karpathy reframes self-attention away from the usual 'sequence of tokens' framing: every token is a node, each node emits a query ('what am I looking for') and a key ('what do I contain'), affinities are computed by dot-producting queries with keys, and information flows as a weighted sum of value vectors along edges. The causal mask in a decoder is just one graph topology (node t only receives from nodes 1..t); an encoder block is the same code with the mask removed (fully connected graph); cross-attention is the same mechanism where keys/values come from a different set of nodes entirely.

This mental model is more powerful than the 'sequence' framing because it explains why attention has no built-in notion of position (nodes are just a set), why positional encodings must be added explicitly, and why batch elements never talk to each other (they're independent pools of nodes). Once you see attention as graph message-passing, architectural choices collapse into 'what edges do I allow' rather than 'what variant of attention do I implement'.
