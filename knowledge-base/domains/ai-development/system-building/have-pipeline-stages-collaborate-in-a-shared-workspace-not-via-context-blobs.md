---
id: INS-260605-9A92
domain: ai-development
topic: system-building
title: 'Have pipeline stages collaborate in a shared workspace, not via context blobs'
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - agent-architecture
  - context-management
  - deep-research
  - multi-agent
sources:
  - type: youtube
    title: >-
      How Google DeepMind Runs Agents at Scale — KP Sawhney & Ian Ballantyne,
      Google DeepMind
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=7gujZrJ9L5I'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Model each pipeline element as a collaborator in a shared workspace, the way
    humans researching together would.
  standard: >-
    DeepMind's deep research system currently passes a huge amount of context
    all the way through the pipeline — every search result blob threaded forward
    — which is expensive and consumes the context window. KP's direction is to
    instead have the parts of the pipeline collaborate in a shared file system,
    treating each element as a collaborator in a workspace, analogous to how a
    human research team works against shared documents.


    The principle: don't serialize all intermediate state through the prompt. A
    shared external store (filesystem, scratchpad) lets stages read and write
    artifacts on demand, so a later stage pulls only what it needs instead of
    inheriting the full accumulated transcript. This both cuts token cost and
    opens the door to richer output artifacts (infographics, supporting
    documents) because intermediate work products persist as files rather than
    evaporating into the conversation. This mirrors the established pattern of
    using a shared scratchpad for agent coordination.
stance: >-
  Multi-stage agent pipelines should share a filesystem workspace rather than
  passing large text blobs through each stage.
related:
  - INS-260626-4393
  - INS-260605-8F3D
  - INS-260627-5482
  - INS-260626-36F0
  - INS-260323-CD28
---
DeepMind's deep research system currently passes a huge amount of context all the way through the pipeline — every search result blob threaded forward — which is expensive and consumes the context window. KP's direction is to instead have the parts of the pipeline collaborate in a shared file system, treating each element as a collaborator in a workspace, analogous to how a human research team works against shared documents.

The principle: don't serialize all intermediate state through the prompt. A shared external store (filesystem, scratchpad) lets stages read and write artifacts on demand, so a later stage pulls only what it needs instead of inheriting the full accumulated transcript. This both cuts token cost and opens the door to richer output artifacts (infographics, supporting documents) because intermediate work products persist as files rather than evaporating into the conversation. This mirrors the established pattern of using a shared scratchpad for agent coordination.
