---
id: INS-260329-8F98
domain: ai-development
topic: system-building
title: >-
  API versioning through URL paths prevents breaking existing clients during
  evolution
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - api-design
  - versioning
  - backward-compatibility
  - rest
  - graphql
sources:
  - type: youtube
    title: System Design Concepts Course and Interview Prep
    author: freeCodeCamp.org
    url: 'https://youtube.com/watch?v=F2FmTdLtb_4'
date_extracted: '2026-03-29'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Always version APIs explicitly (e.g., /v1/products, /v2/products) rather
    than modifying existing endpoints, so old clients continue working while new
    clients get new features.
  standard: >-
    API evolution requires maintaining backward compatibility — changes should
    never break existing clients. For REST APIs, the standard approach is
    URL-based versioning (e.g., /api/v1/products continues serving old clients
    while /api/v2/products serves new ones). For GraphQL, backward compatibility
    is achieved by adding new fields without removing old ones, since clients
    explicitly request only the fields they need.


    Beyond versioning, production APIs need rate limiting (preventing DoS
    attacks and protecting against single users overwhelming the system), CORS
    settings (controlling which domains can access the API), and idempotent GET
    requests (calling the same GET endpoint multiple times always returns the
    same result and never mutates data). The choice between REST (simple, widely
    supported, risk of over/under-fetching), GraphQL (precise queries, strongly
    typed, complex queries can impact server performance), and gRPC (Protocol
    Buffers, HTTP/2, efficient for microservices but less human-readable) should
    match the use case.
stance: >-
  Backward-compatible API evolution through explicit versioning (v1/v2 paths for
  REST, additive field changes for GraphQL) is more reliable than in-place
  modifications that risk breaking existing consumers
related:
  - INS-260325-58F5
  - INS-260327-0B69
  - INS-260327-F4DD
  - INS-260327-24A5
  - PRI-260403-5FC4
  - INS-260325-FDF5
  - INS-260322-5678
  - INS-260404-AF08
  - INS-260410-A18B
evidence:
  - id: INS-260329-0320
    type: SUPPORTS
    classified_at: '2026-04-02'
  - id: INS-260325-58F5
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
  - id: INS-260323-0539
    type: CHALLENGES
    classified_at: '2026-04-02'
  - id: INS-260327-0B69
    type: CONTRADICTS
    classified_at: '2026-04-02'
  - id: INS-260327-24A5
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
  - id: INS-260330-A25A
    type: CHALLENGES
    classified_at: '2026-04-02'
  - id: INS-260404-226F
    type: TRANSFERS_TO
    classified_at: '2026-04-05'
  - id: INS-260404-AF08
    type: CHALLENGES
    classified_at: '2026-04-05'
---
API evolution requires maintaining backward compatibility — changes should never break existing clients. For REST APIs, the standard approach is URL-based versioning (e.g., /api/v1/products continues serving old clients while /api/v2/products serves new ones). For GraphQL, backward compatibility is achieved by adding new fields without removing old ones, since clients explicitly request only the fields they need.

Beyond versioning, production APIs need rate limiting (preventing DoS attacks and protecting against single users overwhelming the system), CORS settings (controlling which domains can access the API), and idempotent GET requests (calling the same GET endpoint multiple times always returns the same result and never mutates data). The choice between REST (simple, widely supported, risk of over/under-fetching), GraphQL (precise queries, strongly typed, complex queries can impact server performance), and gRPC (Protocol Buffers, HTTP/2, efficient for microservices but less human-readable) should match the use case.
