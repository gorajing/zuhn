---
id: INS-260330-CCA2
domain: ai-development
topic: embeddings
title: Basis choice determines what operations become natural in embedding spaces
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - embeddings
  - linear-algebra
  - vector-spaces
  - representation-learning
sources:
  - type: youtube
    title: >-
      Linear combinations, span, and basis vectors | Chapter 2, Essence of
      linear algebra
    author: 3Blue1Brown
    url: 'https://www.youtube.com/watch?v=k7RM-ot2NWY'
date_extracted: '2026-03-30'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Different basis choices make different operations trivial or impossible in
    vector spaces.
  standard: >-
    The video emphasizes that basis vectors are a choice, not a given —
    different bases make different problems easy. This maps directly to
    embedding spaces in AI: the basis learned during training determines which
    semantic relationships become simple vector arithmetic (like the famous king
    - man + woman = queen) and which remain opaque. When nomic-embed-text or any
    embedding model trains, it's implicitly choosing a basis that makes certain
    similarity judgments natural. This explains why some semantic queries work
    beautifully in vector search while others fail — the trained basis didn't
    align with that particular semantic axis. Understanding this helps diagnose
    embedding search failures: the issue may be basis alignment, not model
    quality.
stance: >-
  The choice of basis vectors in an embedding space implicitly defines which
  semantic operations are easy and which are hard
related:
  - INS-260330-D7CA
  - INS-260330-B4DA
  - INS-260330-4B84
  - INS-260330-4F49
  - INS-260330-5A2A
  - INS-260330-2689
  - INS-260330-3B6C
  - INS-260329-4109
evidence:
  - id: INS-260330-B4DA
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
  - id: INS-260330-4F49
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
  - id: INS-260330-2689
    type: SUPPORTS
    classified_at: '2026-04-02'
  - id: INS-260329-4109
    type: CHALLENGES
    classified_at: '2026-04-02'
---
The video emphasizes that basis vectors are a choice, not a given — different bases make different problems easy. This maps directly to embedding spaces in AI: the basis learned during training determines which semantic relationships become simple vector arithmetic (like the famous king - man + woman = queen) and which remain opaque. When nomic-embed-text or any embedding model trains, it's implicitly choosing a basis that makes certain similarity judgments natural. This explains why some semantic queries work beautifully in vector search while others fail — the trained basis didn't align with that particular semantic axis. Understanding this helps diagnose embedding search failures: the issue may be basis alignment, not model quality.
