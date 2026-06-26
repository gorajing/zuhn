---
id: INS-260625-15FB
domain: startups
topic: scaling
title: Disaggregate heterogeneous infra to escape the giant-cluster bottleneck
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - infrastructure
  - distributed-systems
  - cost-optimization
  - heterogeneity
  - scaling
sources:
  - type: youtube
    title: >-
      How Cursor Trained Composer on Fireworks: Distributed Infrastructure for
      High-Performance RL
    author: Sequoia Capital
    url: 'https://www.youtube.com/watch?v=UDTr9yUnLUI'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Keep training on one tight cluster but globally distribute the inference
    half of RL across smaller, cheaper, heterogeneous clusters—even borrowing
    idle production GPUs off-peak.
  standard: >-
    Very large contiguous clusters are hard to find—finding a 2x-larger cluster
    is dramatically harder than finding the current size. Cursor's escape is to
    exploit the heterogeneity of RL: training needs a single
    high-speed-interconnect cluster working in lockstep, but the inference
    component (running rollouts) does not need wide interconnect and can run on
    smaller groups of GPUs, different hardware generations, in different
    regions. Composer 2 trained across four clusters worldwide, and Cursor even
    repurposed its own production inference GPUs during off-peak hours to speed
    up training. The enabling trick: because RL changes only a small, regular
    subset of the 1TB model's weights each step, they ship a compressed delta
    (~20x smaller) losslessly across the world in under a minute, pausing
    inference only ~30 seconds to swap weights.


    The general lesson, stated by the participants as going against conventional
    RL wisdom: by leveraging where different components actually need different
    infrastructure, you can disaggregate, dodge the scarce-resource bottleneck,
    and arbitrage cheaper hardware in cheaper regions. The pattern recurs
    everywhere—identify which parts of your system are tightly coupled versus
    loosely coupled, and refuse to pay tight-coupling prices for loosely-coupled
    work.
stance: >-
  Separating tightly-coupled training from loosely-coupled inference and
  distributing it across heterogeneous clusters beats hunting for one giant
  contiguous cluster on both cost and availability.
related:
  - INS-260410-069C
  - INS-260424-0554
  - INS-260423-6172
  - INS-260626-F160
  - INS-260405-567D
  - INS-260605-6B24
---
Very large contiguous clusters are hard to find—finding a 2x-larger cluster is dramatically harder than finding the current size. Cursor's escape is to exploit the heterogeneity of RL: training needs a single high-speed-interconnect cluster working in lockstep, but the inference component (running rollouts) does not need wide interconnect and can run on smaller groups of GPUs, different hardware generations, in different regions. Composer 2 trained across four clusters worldwide, and Cursor even repurposed its own production inference GPUs during off-peak hours to speed up training. The enabling trick: because RL changes only a small, regular subset of the 1TB model's weights each step, they ship a compressed delta (~20x smaller) losslessly across the world in under a minute, pausing inference only ~30 seconds to swap weights.

The general lesson, stated by the participants as going against conventional RL wisdom: by leveraging where different components actually need different infrastructure, you can disaggregate, dodge the scarce-resource bottleneck, and arbitrage cheaper hardware in cheaper regions. The pattern recurs everywhere—identify which parts of your system are tightly coupled versus loosely coupled, and refuse to pay tight-coupling prices for loosely-coupled work.
