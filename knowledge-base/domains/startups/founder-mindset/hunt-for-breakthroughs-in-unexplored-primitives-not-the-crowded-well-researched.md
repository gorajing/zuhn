---
id: INS-260626-1BB0
domain: startups
topic: founder-mindset
title: >-
  Hunt for breakthroughs in unexplored primitives, not the crowded
  well-researched space
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - contrarian
  - differentiation
  - research-strategy
  - gpu-systems
  - first-principles
sources:
  - type: youtube
    title: >-
      Why Data Is the Real AI Bottleneck: Flapping Airplanes' Ben and Asher
      Spector
    author: Sequoia Capital
    url: 'https://www.youtube.com/watch?v=ZBpY7MEra9w'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    The set of things GPUs can do efficiently is larger than the set frameworks
    like PyTorch can express, and the well-researched 'gray circle' inside that
    is crowded — so new capabilities are found by looking where existing tools
    can't reach.
  standard: >-
    Flappy's methodology is a transferable founder heuristic: to find genuinely
    new capabilities, deliberately look where existing abstractions can't go.
    The Spectors describe three nested sets — what a GPU can physically do
    efficiently, the smaller set that current frameworks like PyTorch can
    express efficiently, and the even smaller, heavily-researched region inside
    that where the community already knows which algorithms work. Almost all
    research crowds into that innermost 'gray circle.'


    Their bet is to operate in the gap between what the hardware can do and what
    the frameworks express — exploiting primitives (like fine-grainedness, or
    small-batch deeply-pipelined Hogwild-style training loops) that GPUs support
    but PyTorch makes asymptotically inefficient. They built their own VM that
    takes over the whole GPU rather than accept the framework's single-threaded
    programming model.


    The generalizable principle: history shows much of ML progress over decades
    came not from new chips but from new primitives for squeezing more out of
    existing hardware. For founders this is a search strategy — competitive edge
    tends to live in the space that mainstream tooling abstracts away, because
    everyone optimizing inside the well-trodden region is fighting over the same
    known moves. Co-optimizing the layer below (systems) with the layer above
    (algorithms) is where the asymmetric returns are.
stance: >-
  Differentiated capability comes from working in the gap between what hardware
  can do and what current frameworks can express.
related:
  - INS-260329-E4F6
  - INS-260403-EE38
  - INS-260330-0CAD
  - INS-260403-B89E
  - PRI-260411-9CB1
  - INS-260402-9676
  - INS-260326-2410
  - INS-260627-B2C4
---
Flappy's methodology is a transferable founder heuristic: to find genuinely new capabilities, deliberately look where existing abstractions can't go. The Spectors describe three nested sets — what a GPU can physically do efficiently, the smaller set that current frameworks like PyTorch can express efficiently, and the even smaller, heavily-researched region inside that where the community already knows which algorithms work. Almost all research crowds into that innermost 'gray circle.'

Their bet is to operate in the gap between what the hardware can do and what the frameworks express — exploiting primitives (like fine-grainedness, or small-batch deeply-pipelined Hogwild-style training loops) that GPUs support but PyTorch makes asymptotically inefficient. They built their own VM that takes over the whole GPU rather than accept the framework's single-threaded programming model.

The generalizable principle: history shows much of ML progress over decades came not from new chips but from new primitives for squeezing more out of existing hardware. For founders this is a search strategy — competitive edge tends to live in the space that mainstream tooling abstracts away, because everyone optimizing inside the well-trodden region is fighting over the same known moves. Co-optimizing the layer below (systems) with the layer above (algorithms) is where the asymmetric returns are.
