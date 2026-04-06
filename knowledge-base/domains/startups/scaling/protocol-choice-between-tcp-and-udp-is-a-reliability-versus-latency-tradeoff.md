---
id: INS-260329-50D5
domain: startups
topic: scaling
title: Protocol choice between TCP and UDP is a reliability-versus-latency tradeoff
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - networking
  - tcp
  - udp
  - protocols
  - latency
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
    TCP guarantees delivery order and completeness (essential for transactions);
    UDP sacrifices those guarantees for speed (essential for real-time
    communication).
  standard: >-
    TCP and UDP represent a fundamental reliability-versus-latency tradeoff at
    the transport layer. TCP establishes connections via a three-way handshake,
    tracks packet ordering with sequence numbers, and guarantees complete
    delivery — making it essential for financial transactions, file transfers,
    and web browsing where every byte matters. UDP skips connection
    establishment, doesn't guarantee delivery or ordering, and doesn't
    retransmit lost packets — making it faster but lossy. This makes UDP ideal
    for video calls, live streaming, and gaming where a dropped frame matters
    less than a delayed one. The key insight is matching the protocol to the
    application's tolerance: if losing data is worse than being slow, use TCP;
    if being slow is worse than losing data, use UDP. Many modern applications
    use both — TCP for control channels and UDP for data streams.
stance: >-
  Using TCP for latency-sensitive real-time applications wastes performance on
  guarantees the use case doesn't need, while using UDP for transactional data
  risks silent corruption.
related:
  - INS-260327-FFA7
  - INS-260329-572E
  - INS-260329-4B07
  - INS-260405-7838
  - INS-260330-E6B7
  - INS-260403-9020
  - INS-260329-1DE0
  - INS-260329-C7B8
  - INS-260330-6AC1
evidence:
  - id: INS-260329-5DB9
    type: EXTENDS
    classified_at: '2026-04-02'
  - id: INS-260329-C7B8
    type: SUPPORTS
    classified_at: '2026-04-02'
  - id: INS-260330-6AC1
    type: CHALLENGES
    classified_at: '2026-04-03'
---
TCP and UDP represent a fundamental reliability-versus-latency tradeoff at the transport layer. TCP establishes connections via a three-way handshake, tracks packet ordering with sequence numbers, and guarantees complete delivery — making it essential for financial transactions, file transfers, and web browsing where every byte matters. UDP skips connection establishment, doesn't guarantee delivery or ordering, and doesn't retransmit lost packets — making it faster but lossy. This makes UDP ideal for video calls, live streaming, and gaming where a dropped frame matters less than a delayed one. The key insight is matching the protocol to the application's tolerance: if losing data is worse than being slow, use TCP; if being slow is worse than losing data, use UDP. Many modern applications use both — TCP for control channels and UDP for data streams.
