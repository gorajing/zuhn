---
id: INS-260327-0C4A
domain: ai-development
topic: ai-market-dynamics
title: Network interconnect determines AI cluster performance ceiling
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - gpu-clusters
  - networking
  - data-center-scaling
  - nvidia
sources:
  - type: youtube
    title: >-
      Nvidia CTO Michael Kagan: Scaling Beyond Moore's Law to Million-GPU
      Clusters
    author: Sequoia Capital
    url: 'https://www.youtube.com/watch?v=H9JjlTA2Il8'
date_extracted: '2026-03-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Network quality, not just GPU power, determines how many GPUs can
    effectively work together on a single AI workload.
  standard: >-
    Michael Kagan explains that at 100,000+ GPU clusters, the probability of
    everything working perfectly is zero -- something is always broken. The
    critical differentiator is network latency distribution: a narrow,
    consistent latency allows splitting jobs across thousands of GPUs, while
    high jitter forces you to limit parallelism to perhaps 10 GPUs. This is why
    Mellanox's acquisition was transformative for Nvidia -- it enabled scaling
    from single-node to datacenter-scale computing as a single unit.


    The implication is that AI infrastructure investment should weight
    networking heavily, not just GPU count. Kagan notes Nvidia's compute
    frontier now delivers order-of-magnitude performance gains yearly, but this
    only works because the networking layer can keep pace. For startups building
    on AI infrastructure, understanding that 'the data center is the computer'
    reframes capacity planning entirely.
stance: >-
  At datacenter scale, network latency variance and congestion management matter
  more than raw GPU compute for overall AI system performance.
related:
  - INS-260322-EE1B
  - INS-260323-475F
  - INS-260329-4F04
  - INS-260328-60C7
  - INS-260320-A1D3
  - INS-260330-956E
  - INS-260329-19B3
  - INS-260329-3FA6
  - INS-260329-EC78
  - INS-260330-60A5
evidence:
  - id: INS-260322-EE1B
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
  - id: INS-260323-475F
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
  - id: INS-260320-A1D3
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
  - id: INS-260330-956E
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
  - id: INS-260329-19B3
    type: CHALLENGES
    classified_at: '2026-04-02'
  - id: INS-260329-3FA6
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
  - id: INS-260329-EC78
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
  - id: INS-260330-60A5
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
---
Michael Kagan explains that at 100,000+ GPU clusters, the probability of everything working perfectly is zero -- something is always broken. The critical differentiator is network latency distribution: a narrow, consistent latency allows splitting jobs across thousands of GPUs, while high jitter forces you to limit parallelism to perhaps 10 GPUs. This is why Mellanox's acquisition was transformative for Nvidia -- it enabled scaling from single-node to datacenter-scale computing as a single unit.

The implication is that AI infrastructure investment should weight networking heavily, not just GPU count. Kagan notes Nvidia's compute frontier now delivers order-of-magnitude performance gains yearly, but this only works because the networking layer can keep pace. For startups building on AI infrastructure, understanding that 'the data center is the computer' reframes capacity planning entirely.
