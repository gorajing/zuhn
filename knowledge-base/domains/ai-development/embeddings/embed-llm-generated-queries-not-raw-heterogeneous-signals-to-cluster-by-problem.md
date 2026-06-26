---
id: INS-260625-06B3
domain: ai-development
topic: embeddings
title: >-
  Embed LLM-generated queries, not raw heterogeneous signals, to cluster by
  problem
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - embeddings
  - clustering
  - retrieval
  - data-pipelines
sources:
  - type: youtube
    title: >-
      Self Driving Products: Product Signals to Pull Requests — Joshua Snyder,
      PostHog
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=zMiSRliEzv4'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    When clustering mixed-format data, embed LLM-generated descriptions of each
    item rather than the raw item, or you'll group by format instead of meaning.
  standard: >-
    PostHog's first attempt at grouping noisy product signals — errors, Slack
    messages, session replays — was to embed each signal and cluster in
    embedding space. It failed badly: off-the-shelf embedding models latch onto
    structural similarity, so every error sat near every other error, every
    Slack message near every other Slack message, and a stack trace about
    checkout never linked to the customer Slack message saying 'checkout is
    broken.' The data formed clusters by source type, not by underlying problem.


    The fix was to stop matching the signals themselves. Instead, they ask an
    LLM 'what is this signal about?', have it generate a few natural-language
    queries, and embed and match those queries. Because the queries are uniform
    prose describing the problem, the embedding space now organizes by semantics
    rather than by document structure, and a checkout error groups with the
    checkout complaint.


    The transferable rule: whenever you cluster or retrieve across data of
    differing formats (logs vs. tickets vs. transcripts), normalize the
    representation through an LLM into a common descriptive form before
    embedding. Raw embeddings encode form as strongly as meaning, and form
    dominates when formats differ.
stance: >-
  Off-the-shelf embedding models cluster heterogeneous signals by structural
  form rather than shared problem, so you must match on LLM-generated queries
  instead of the raw content.
related:
  - INS-260321-141B
  - INS-260329-34C0
  - INS-260403-49E1
  - INS-260403-3AC7
  - INS-260409-BE39
  - INS-260423-C506
  - INS-260605-C0BF
  - INS-260605-1C4E
  - INS-260605-9362
  - INS-260625-0758
---
PostHog's first attempt at grouping noisy product signals — errors, Slack messages, session replays — was to embed each signal and cluster in embedding space. It failed badly: off-the-shelf embedding models latch onto structural similarity, so every error sat near every other error, every Slack message near every other Slack message, and a stack trace about checkout never linked to the customer Slack message saying 'checkout is broken.' The data formed clusters by source type, not by underlying problem.

The fix was to stop matching the signals themselves. Instead, they ask an LLM 'what is this signal about?', have it generate a few natural-language queries, and embed and match those queries. Because the queries are uniform prose describing the problem, the embedding space now organizes by semantics rather than by document structure, and a checkout error groups with the checkout complaint.

The transferable rule: whenever you cluster or retrieve across data of differing formats (logs vs. tickets vs. transcripts), normalize the representation through an LLM into a common descriptive form before embedding. Raw embeddings encode form as strongly as meaning, and form dominates when formats differ.
