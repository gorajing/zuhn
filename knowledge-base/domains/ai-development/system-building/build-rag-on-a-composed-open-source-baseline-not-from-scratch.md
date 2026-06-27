---
id: INS-260627-E71B
domain: ai-development
topic: system-building
title: 'Build RAG on a composed open-source baseline, not from scratch'
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - rag
  - open-source
  - composition
  - baseline
  - extensibility
sources:
  - type: youtube
    title: "OpenRAG: An open-source stack for RAG —\_Phil Nash"
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=4TxOBhDRRCM'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Combine specialized open-source projects—document processing, search
    indexing, visual orchestration—into a high-quality starting baseline rather
    than reinventing each layer.
  standard: >-
    Although every RAG system ends up different, they share core components:
    ingestion/parsing, embedding, indexing, and retrieval orchestration. The
    leverage move is to start from a high-quality baseline assembled from
    mature, specialized open-source projects rather than hand-rolling each
    layer. OpenRAG demonstrates this by composing Docling (document processing),
    OpenSearch (hybrid vector + keyword search with filtering), and LangFlow
    (drag-and-drop visual orchestration of flows and agents)—each best-in-class
    at its job.


    The design principle is 'opinionated but extensible': make good default
    decisions where they don't differentiate the product (so teams aren't
    paralyzed by choice), while leaving every layer swappable where
    customization actually matters (embedding provider, chunk size, OCR on/off,
    guardrails). This is the build-vs-compose tradeoff: composition gets you a
    working, customizable system fast and lets you inherit improvements as each
    component evolves, at the price of integrating others' abstractions. For
    most teams, a composed baseline beats a bespoke pipeline because the hard,
    generic plumbing is already solved.
stance: >-
  The fastest path to a production RAG system is composing best-of-breed
  open-source components into an opinionated but extensible baseline.
related:
  - INS-260625-EFCC
  - INS-260410-49D7
  - INS-260410-ED4D
  - PRI-260328-5464
  - INS-260605-0C13
---
Although every RAG system ends up different, they share core components: ingestion/parsing, embedding, indexing, and retrieval orchestration. The leverage move is to start from a high-quality baseline assembled from mature, specialized open-source projects rather than hand-rolling each layer. OpenRAG demonstrates this by composing Docling (document processing), OpenSearch (hybrid vector + keyword search with filtering), and LangFlow (drag-and-drop visual orchestration of flows and agents)—each best-in-class at its job.

The design principle is 'opinionated but extensible': make good default decisions where they don't differentiate the product (so teams aren't paralyzed by choice), while leaving every layer swappable where customization actually matters (embedding provider, chunk size, OCR on/off, guardrails). This is the build-vs-compose tradeoff: composition gets you a working, customizable system fast and lets you inherit improvements as each component evolves, at the price of integrating others' abstractions. For most teams, a composed baseline beats a bespoke pipeline because the hard, generic plumbing is already solved.
