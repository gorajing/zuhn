---
id: INS-260628-23B0
domain: ai-development
topic: architecture
title: 'In KAG systems, graph taxonomy caps answer quality more than the choice of LLM'
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - knowledge-graphs
  - taxonomy
  - model-agnostic
  - architecture
  - system-design
sources:
  - type: youtube
    title: >-
      Wisdom-Driven Knowledge Augmented Generation at Scale - Chin Keong Lam,
      Patho AI
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=9AQOvT8LnMI'
date_extracted: '2026-06-28'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Once the graph structure is right, the system keeps improving and swapping
    models matters less, so invest in taxonomy design before model selection.
  standard: >-
    Lam's wisdom agent can drive any model — OpenAI, Anthropic, or an on-prem
    model — and he explicitly argues the right final decision 'come[s]...
    basically depend[ing] on all the taxonomy, the graph structure.' The model
    is a swappable backend; the durable asset is the structured representation
    of the domain.


    The operational implication is sequencing: spend the design effort on
    getting the taxonomy correct because 'if your taxonomy is correct, you will
    continue to improve and reach.' This reframes a common instinct — teams
    reach for the newest model when answers are poor, but in a graph-augmented
    system the leverage is in the schema. A correct taxonomy is also what makes
    the system model-agnostic, protecting you from vendor lock-in and letting
    you downgrade to cheaper or on-prem models without quality loss.
stance: >-
  Final answer quality in a knowledge-augmented system is bounded by the
  correctness of the graph taxonomy, not by which frontier model you swap in.
related:
  - INS-260627-FC86
  - INS-260625-9B0C
  - INS-260408-C572
  - INS-260625-43B3
  - INS-260624-4205
---
Lam's wisdom agent can drive any model — OpenAI, Anthropic, or an on-prem model — and he explicitly argues the right final decision 'come[s]... basically depend[ing] on all the taxonomy, the graph structure.' The model is a swappable backend; the durable asset is the structured representation of the domain.

The operational implication is sequencing: spend the design effort on getting the taxonomy correct because 'if your taxonomy is correct, you will continue to improve and reach.' This reframes a common instinct — teams reach for the newest model when answers are poor, but in a graph-augmented system the leverage is in the schema. A correct taxonomy is also what makes the system model-agnostic, protecting you from vendor lock-in and letting you downgrade to cheaper or on-prem models without quality loss.
