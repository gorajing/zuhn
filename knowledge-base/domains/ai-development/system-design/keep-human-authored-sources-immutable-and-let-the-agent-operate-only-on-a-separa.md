---
id: INS-260626-8660
domain: ai-development
topic: system-design
title: >-
  Keep human-authored sources immutable and let the agent operate only on a
  separate derivative layer
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - immutability
  - data-architecture
  - agent-memory
  - para-method
  - separation-of-concerns
sources:
  - type: youtube
    title: >-
      Turn 10,994 Notes Into Memory - Paul Iusztin, Decoding AI & Louis-François
      Bouchard, Towards AI
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=ZRM_TfEZcIo'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Treat your personal notes as an immutable snapshot the LLM never touches;
    agent-generated concepts, comparisons, and summaries live in a separate
    derivative layer that references it.
  standard: >-
    The architecture splits cleanly: a 'raw' folder holds immutable source data
    ('you don't want to touch that'), and a separate 'wiki' folder holds
    LLM-generated derivatives — comparisons, concepts, entities, and notes —
    that point back to the raw sources through references. Bouchard keeps
    personal notes in Obsidian as 'an immutable snapshot that the LLM never
    touches… I don't really want the LLM to touch my personal notes that I
    manually write.' The wiki also scopes to a specific project rather than
    sitting on top of the entire second brain.


    This separation prevents the agent from corrupting your ground-truth
    knowledge while still letting it build richly on top of it, and it preserves
    provenance — every derivative traces back to an unmodified source. It
    mirrors the database principle of separating an immutable system of record
    from mutable derived views, and is reinforced by structuring inputs with a
    method like PARA (Projects, Areas, Resources, Archive) so saved sources flow
    to a flat resource list that projects merely reference.
stance: >-
  LLMs should never mutate your hand-written notes; they should build a
  separate, referenceable derivative layer on top of an immutable snapshot.
related:
  - INS-260403-7EB2
  - INS-260626-BE0D
  - INS-260322-22B3
  - INS-260524-D5DB
  - INS-260625-0A79
  - INS-260625-4DDB
---
The architecture splits cleanly: a 'raw' folder holds immutable source data ('you don't want to touch that'), and a separate 'wiki' folder holds LLM-generated derivatives — comparisons, concepts, entities, and notes — that point back to the raw sources through references. Bouchard keeps personal notes in Obsidian as 'an immutable snapshot that the LLM never touches… I don't really want the LLM to touch my personal notes that I manually write.' The wiki also scopes to a specific project rather than sitting on top of the entire second brain.

This separation prevents the agent from corrupting your ground-truth knowledge while still letting it build richly on top of it, and it preserves provenance — every derivative traces back to an unmodified source. It mirrors the database principle of separating an immutable system of record from mutable derived views, and is reinforced by structuring inputs with a method like PARA (Projects, Areas, Resources, Archive) so saved sources flow to a flat resource list that projects merely reference.
