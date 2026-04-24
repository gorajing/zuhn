---
id: INS-260424-865F
domain: ai-development
topic: infrastructure
title: >-
  Agent-era workloads require latency-optimized network topologies, not
  bandwidth-optimized — fundamental architectural shift
actionability: reference
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - network-topology
  - latency-vs-bandwidth
  - boardfly
  - agent-infrastructure
sources:
  - type: youtube
    title: 'Next ''26: The Future of AI Infrastructure'
    author: Google Cloud
    url: 'https://youtu.be/PJQPMv8TqLA'
date_extracted: '2026-04-24'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Google Cloud lead: the default way of connecting chips together didn't
    support latency, it supported throughput — but in age of agents you care
    about the minimum time it takes to get the data through.
  standard: >-
    Network topology between AI accelerators was historically designed for
    training workloads, where throughput dominates. Throughput-optimized
    topologies move large amounts of data efficiently but with higher latency
    per individual request. Agent-era workloads invert this requirement: agents
    make many small low-latency calls, where total time-to-completion is
    dominated by network round-trips rather than data volume. Google's Boardfly
    topology, designed in collaboration with DeepMind for the agent era,
    dramatically reduces network diameter (the distance between any two chips)
    at some cost to maximum bandwidth. The implication is broader than Google's
    specific implementation: every AI infrastructure provider will need to
    confront this trade-off as agent workloads grow. Buyers should ask vendors
    about network diameter and round-trip latency between accelerators
    specifically for agent-shaped workloads, not just aggregate bandwidth specs.
    Vendors using yesterday's topologies will lose to vendors that have
    re-architected for agent latency, even if their raw chip specs look
    comparable on paper.
stance: >-
  The default network topology that connects AI accelerator chips was
  historically optimized for bandwidth (large-data throughput) appropriate for
  training; agent-era workloads require latency-optimized topologies (minimum
  time per request) which require fundamentally different chip-interconnect
  designs
related:
  - INS-260329-33AA
  - INS-260330-D483
  - INS-260330-C06E
  - INS-260330-4C31
  - INS-260405-5670
  - INS-260424-981C
  - INS-260424-ABB2
  - INS-260424-F8BB
  - PRI-260403-2024
---
Network topology between AI accelerators was historically designed for training workloads, where throughput dominates. Throughput-optimized topologies move large amounts of data efficiently but with higher latency per individual request. Agent-era workloads invert this requirement: agents make many small low-latency calls, where total time-to-completion is dominated by network round-trips rather than data volume. Google's Boardfly topology, designed in collaboration with DeepMind for the agent era, dramatically reduces network diameter (the distance between any two chips) at some cost to maximum bandwidth. The implication is broader than Google's specific implementation: every AI infrastructure provider will need to confront this trade-off as agent workloads grow. Buyers should ask vendors about network diameter and round-trip latency between accelerators specifically for agent-shaped workloads, not just aggregate bandwidth specs. Vendors using yesterday's topologies will lose to vendors that have re-architected for agent latency, even if their raw chip specs look comparable on paper.
