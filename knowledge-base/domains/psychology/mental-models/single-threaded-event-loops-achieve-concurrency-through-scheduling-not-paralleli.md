---
id: INS-260330-A260
domain: psychology
topic: mental-models
title: >-
  Single-threaded event loops achieve concurrency through scheduling, not
  parallelism
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - concurrency
  - event-loop
  - mental-models
  - system-design
sources:
  - type: youtube
    title: 100+ JavaScript Concepts you Need to Know
    author: Fireship
    url: 'https://www.youtube.com/watch?v=lkIFF4maKMU'
date_extracted: '2026-03-30'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    JavaScript handles concurrency on a single thread by using an event loop to
    schedule callbacks, proving parallelism isn't required for concurrent I/O.
  standard: >-
    The intuitive assumption is that handling multiple simultaneous operations
    requires multiple threads running in parallel. JavaScript's event loop
    disproves this: asynchronous operations (network requests, timers, file
    reads) are offloaded to a separate thread pool, but their callbacks are
    queued and executed one at a time on the main thread. This yields
    concurrency without parallelism.


    This model turns out to be simpler and less error-prone for I/O-bound work
    than shared-memory multithreading, because there's no concurrent mutation
    and no need for locks. The trade-off is that CPU-intensive computation
    blocks the single thread. The broader insight is that the right scheduling
    abstraction can make hard problems (concurrent state management) trivially
    safe, at the cost of a different class of limitations. This same pattern
    appears in cooperative multitasking, database connection pooling, and async
    runtimes like Tokio in Rust.
stance: >-
  JavaScript's single-threaded event loop demonstrates that concurrency does not
  require parallelism — a scheduling mechanism that interleaves tasks on one
  thread can handle thousands of concurrent operations more reliably than
  multi-threaded approaches for I/O-bound work.
related:
  - INS-260320-D3D5
  - INS-260329-CF48
  - INS-260329-71DE
  - INS-260330-3EFC
  - PRI-260328-A65A
  - INS-260323-2E51
evidence:
  - id: INS-260323-2E51
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
  - id: INS-260330-3EFC
    type: SUPPORTS
    classified_at: '2026-04-02'
  - id: INS-260329-C991
    type: CHALLENGES
    classified_at: '2026-04-02'
  - id: INS-260329-CF48
    type: EXTENDS
    classified_at: '2026-04-02'
  - id: INS-260329-71DE
    type: CHALLENGES
    classified_at: '2026-04-02'
  - id: INS-260320-D3D5
    type: SUPPORTS
    classified_at: '2026-04-02'
---
The intuitive assumption is that handling multiple simultaneous operations requires multiple threads running in parallel. JavaScript's event loop disproves this: asynchronous operations (network requests, timers, file reads) are offloaded to a separate thread pool, but their callbacks are queued and executed one at a time on the main thread. This yields concurrency without parallelism.

This model turns out to be simpler and less error-prone for I/O-bound work than shared-memory multithreading, because there's no concurrent mutation and no need for locks. The trade-off is that CPU-intensive computation blocks the single thread. The broader insight is that the right scheduling abstraction can make hard problems (concurrent state management) trivially safe, at the cost of a different class of limitations. This same pattern appears in cooperative multitasking, database connection pooling, and async runtimes like Tokio in Rust.
