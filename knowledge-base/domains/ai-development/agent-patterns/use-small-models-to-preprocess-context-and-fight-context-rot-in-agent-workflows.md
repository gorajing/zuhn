---
id: INS-260605-295D
domain: ai-development
topic: agent-patterns
title: >-
  Use small models to preprocess context and fight context rot in agent
  workflows
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - context-management
  - context-rot
  - small-models
  - tool-calling
  - agents
sources:
  - type: youtube
    title: >-
      The Small Model Infrastructure Nobody Built (So We Did) — Filip Makraduli,
      Superlinked
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=qdh_x-uRs9g'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Quality degrades as context grows, so use small models (NER, rerankers,
    classifiers) to preprocess and filter data before it enters the agent's
    context window.
  standard: >-
    Context rot — the documented effect (per Chroma's research) where output
    quality degrades as context length increases — means simply stuffing more
    data into an agent is self-defeating. The fix is to put cheap, specialized
    small models upstream of the agent: named-entity-recognition models to build
    ontologies and knowledge graphs (the Karpathy approach), classification
    models for taxonomy, or rerankers as tools. 


    A common objection is 'why not just use code and grepping?' The answer is
    that preprocessing and grepping are complementary, not competing: a file
    system built over data that has already been cleaned, classified, and
    structured by small models produces better grep results than one built over
    raw input. 


    Superlinked validated this in production with an e-commerce
    taxonomy-classification use case where small models acted as tools the agent
    could call to retrieve and traverse data, reducing token load and making the
    surrounding agent workflow more effective.
stance: >-
  Pre-processing data with small models before it reaches the agent is a more
  effective defense against context rot than feeding raw data and relying on
  grep.
related:
  - INS-260325-252D
  - INS-260410-761B
  - INS-260605-E06C
  - INS-260627-CECD
  - INS-260627-F9B1
  - INS-260405-3B54
  - INS-260605-B95C
  - INS-260625-D943
  - INS-260626-FFE2
  - INS-260627-266C
---
Context rot — the documented effect (per Chroma's research) where output quality degrades as context length increases — means simply stuffing more data into an agent is self-defeating. The fix is to put cheap, specialized small models upstream of the agent: named-entity-recognition models to build ontologies and knowledge graphs (the Karpathy approach), classification models for taxonomy, or rerankers as tools. 

A common objection is 'why not just use code and grepping?' The answer is that preprocessing and grepping are complementary, not competing: a file system built over data that has already been cleaned, classified, and structured by small models produces better grep results than one built over raw input. 

Superlinked validated this in production with an e-commerce taxonomy-classification use case where small models acted as tools the agent could call to retrieve and traverse data, reducing token load and making the surrounding agent workflow more effective.
