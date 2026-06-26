---
id: INS-260625-4027
domain: ai-development
topic: limitations
title: Small models close the capability gap before the knowledge gap
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - small-models
  - on-device
  - knowledge-vs-capability
  - information-theory
  - agentic
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
    Gemma 4 matches ~18-month-old SOTA on agentic capability (function calling,
    instruction-following) but Gemini stays far ahead on factual knowledge — a
    gap set by information theory, not training effort.
  standard: >-
    There are two distinct things small models can lack, and they don't close at
    the same rate. Capability — agentic behavior, function calling,
    system-instruction following, conversation — is now reachable on a model you
    can run on your own hardware; Gemma 4 matches state-of-the-art from roughly
    18 months prior on these. Knowledge — facts about the world, niche
    information like who led a given country in a given year — is far harder,
    and Gemini remains substantially better than Gemma here.


    The reason is information-theoretic, not a matter of more training: using a
    model as a database means its factual capacity is bounded by its parameter
    count. You cannot compress arbitrary world knowledge into 30B parameters;
    superposition (storing information in overlapping weights) buys some
    headroom but doesn't remove the ceiling. Capability is a skill that
    compresses well; knowledge is storage that doesn't.


    This reframes the on-device roadmap: expect powerful local agents that plan,
    call tools, and reason within 1–2 years, while factuality-critical and
    long-horizon flagship work stays with large server-side models. It also
    implies that retrieval and tool use — not bigger small models — are the
    right fix for the knowledge gap, since you're better off letting a small
    capable model query an external store than trying to memorize the world into
    its weights.
stance: >-
  Small on-device models reach near-frontier agentic capability long before they
  match large models on world knowledge, because storing facts is
  information-theoretically bounded by parameter count.
related:
  - PRI-260407-ED1C
  - INS-260323-4D8D
  - INS-260409-17E9
  - INS-260409-005E
  - INS-260514-6530
---
There are two distinct things small models can lack, and they don't close at the same rate. Capability — agentic behavior, function calling, system-instruction following, conversation — is now reachable on a model you can run on your own hardware; Gemma 4 matches state-of-the-art from roughly 18 months prior on these. Knowledge — facts about the world, niche information like who led a given country in a given year — is far harder, and Gemini remains substantially better than Gemma here.

The reason is information-theoretic, not a matter of more training: using a model as a database means its factual capacity is bounded by its parameter count. You cannot compress arbitrary world knowledge into 30B parameters; superposition (storing information in overlapping weights) buys some headroom but doesn't remove the ceiling. Capability is a skill that compresses well; knowledge is storage that doesn't.

This reframes the on-device roadmap: expect powerful local agents that plan, call tools, and reason within 1–2 years, while factuality-critical and long-horizon flagship work stays with large server-side models. It also implies that retrieval and tool use — not bigger small models — are the right fix for the knowledge gap, since you're better off letting a small capable model query an external store than trying to memorize the world into its weights.
