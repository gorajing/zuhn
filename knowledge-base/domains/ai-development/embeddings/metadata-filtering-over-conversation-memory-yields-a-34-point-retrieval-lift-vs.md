---
id: INS-260409-ADD0
domain: ai-development
topic: embeddings
title: >-
  Metadata filtering over conversation memory yields a 34-point retrieval lift
  vs flat semantic search
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - retrieval
  - metadata-filtering
  - vector-search
  - benchmarks
  - chromadb
sources:
  - type: blog
    title: >-
      GitHub - milla-jovovich/mempalace: The highest-scoring AI memory system
      ever benchmarked. And it's free.
    url: 'https://github.com/milla-jovovich/mempalace'
date_extracted: '2026-04-09'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    MemPalace's wing+room metadata filtering takes 60.9% flat semantic R@10 to
    94.8% on 22k real conversation memories — a 34-point lift from trivial
    structure the maintainers honestly note is standard ChromaDB filtering.
  standard: >-
    MemPalace published the retrieval ladder explicitly: search all closets =
    60.9% R@10, search within wing = 73.1%, search wing+hall = 84.8%, search
    wing+room = 94.8%. The jump from flat semantic to structured metadata is 34
    points on 22,000 real conversation memories. The maintainers honestly
    clarified in their April 2026 correction that this is not a novel retrieval
    mechanism — it is ChromaDB's standard metadata filtering feature. The
    insight is not about the algorithm; it is about how much signal sits in
    trivially-available structure (project, topic, date) that pure semantic
    search ignores. For any KB with distinguishable domains, adding metadata
    filters is the cheapest path to a large retrieval improvement.
stance: >-
  Structured metadata filters layered on top of vector search dramatically
  outperform flat semantic search on real-world conversation memory benchmarks.
related:
  - INS-260403-1432
  - INS-260409-5CF4
  - INS-260409-EA5A
  - INS-260409-6560
  - PRI-260406-8B75
  - INS-260409-1078
  - INS-260329-818A
  - INS-260405-5BD3
  - INS-260410-656B
  - INS-260410-B501
---
MemPalace published the retrieval ladder explicitly: search all closets = 60.9% R@10, search within wing = 73.1%, search wing+hall = 84.8%, search wing+room = 94.8%. The jump from flat semantic to structured metadata is 34 points on 22,000 real conversation memories. The maintainers honestly clarified in their April 2026 correction that this is not a novel retrieval mechanism — it is ChromaDB's standard metadata filtering feature. The insight is not about the algorithm; it is about how much signal sits in trivially-available structure (project, topic, date) that pure semantic search ignores. For any KB with distinguishable domains, adding metadata filters is the cheapest path to a large retrieval improvement.
