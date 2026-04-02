---
id: INS-260329-5DB9
domain: ai-development
topic: system-building
title: CAP theorem forces explicit trade-off decisions in distributed systems
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - distributed-systems
  - cap-theorem
  - trade-offs
  - system-design
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
    The CAP theorem proves distributed systems can only guarantee two of three
    properties: consistency, availability, and partition tolerance.
  standard: >-
    The CAP theorem (Brewer's theorem) establishes that any distributed system
    must sacrifice one of three properties: consistency (all nodes see the same
    data simultaneously), availability (system always responds to requests), or
    partition tolerance (system continues functioning despite network
    disruptions). This isn't a limitation to work around — it's a fundamental
    constraint that should drive design decisions upfront.


    For example, banking systems prioritize consistency and partition tolerance
    (CP), accepting temporary unavailability during network partitions to ensure
    financial accuracy. Conversely, a social media feed might prioritize
    availability and partition tolerance (AP), accepting eventual consistency
    where different users briefly see different data. The key insight is that
    making this trade-off explicitly at design time prevents discovering it
    accidentally in production.
stance: >-
  Every distributed system design decision is fundamentally a trade-off between
  consistency, availability, and partition tolerance — you cannot optimize for
  all three simultaneously
related:
  - INS-260325-ED75
  - INS-260329-572E
  - INS-260329-422F
  - INS-260329-50D5
  - INS-260329-148D
  - INS-260323-3F30
  - INS-260330-09BB
  - INS-260329-3CB6
evidence:
  - id: INS-260329-572E
    type: REFINES
    classified_at: '2026-04-02'
  - id: INS-260329-422F
    type: EXTENDS
    classified_at: '2026-04-02'
  - id: INS-260329-50D5
    type: EXTENDS
    classified_at: '2026-04-02'
  - id: INS-260330-09BB
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
  - id: INS-260329-3CB6
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
---
The CAP theorem (Brewer's theorem) establishes that any distributed system must sacrifice one of three properties: consistency (all nodes see the same data simultaneously), availability (system always responds to requests), or partition tolerance (system continues functioning despite network disruptions). This isn't a limitation to work around — it's a fundamental constraint that should drive design decisions upfront.

For example, banking systems prioritize consistency and partition tolerance (CP), accepting temporary unavailability during network partitions to ensure financial accuracy. Conversely, a social media feed might prioritize availability and partition tolerance (AP), accepting eventual consistency where different users briefly see different data. The key insight is that making this trade-off explicitly at design time prevents discovering it accidentally in production.
