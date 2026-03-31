---
id: INS-260329-8CC0
domain: ai-development
topic: system-building
title: >-
  Database horizontal scaling requires choosing between sharding and replication
  based on read/write patterns
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - databases
  - sharding
  - replication
  - scaling
  - horizontal-scaling
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
    Sharding splits data across servers for write scalability while replication
    copies data across servers for read scalability — the workload pattern
    determines which to use.
  standard: >-
    Horizontal database scaling offers two complementary strategies. Sharding
    distributes different portions of data across multiple servers — strategies
    include range-based sharding (data split by key ranges), directory-based
    sharding (lookup service routes queries), and geographical sharding (data
    split by location). Sharding primarily improves write throughput and storage
    capacity by distributing the load.


    Replication keeps full copies of data on multiple servers — master-slave
    replication (one writable master, multiple read-only replicas) handles
    read-heavy workloads, while master-master replication (multiple writable
    nodes) provides both read and write distribution at the cost of consistency
    complexity. Performance can be further improved through complementary
    techniques: in-memory caching (Redis for frequent queries), indexing (on
    frequently accessed columns), and query optimization (minimizing joins,
    using EXPLAIN plans). The CAP theorem always applies — you must explicitly
    choose which two of consistency, availability, and partition tolerance your
    database architecture prioritizes.
stance: >-
  Horizontal database scaling through sharding (distributing data portions
  across servers) and replication (copying data across servers) serve
  fundamentally different performance needs and should be chosen based on
  whether the workload is write-heavy or read-heavy
related:
  - INS-260329-818A
  - INS-260329-66BD
  - INS-260329-CF48
  - INS-260329-148D
  - INS-260329-5F96
  - INS-260329-4696
---
Horizontal database scaling offers two complementary strategies. Sharding distributes different portions of data across multiple servers — strategies include range-based sharding (data split by key ranges), directory-based sharding (lookup service routes queries), and geographical sharding (data split by location). Sharding primarily improves write throughput and storage capacity by distributing the load.

Replication keeps full copies of data on multiple servers — master-slave replication (one writable master, multiple read-only replicas) handles read-heavy workloads, while master-master replication (multiple writable nodes) provides both read and write distribution at the cost of consistency complexity. Performance can be further improved through complementary techniques: in-memory caching (Redis for frequent queries), indexing (on frequently accessed columns), and query optimization (minimizing joins, using EXPLAIN plans). The CAP theorem always applies — you must explicitly choose which two of consistency, availability, and partition tolerance your database architecture prioritizes.
