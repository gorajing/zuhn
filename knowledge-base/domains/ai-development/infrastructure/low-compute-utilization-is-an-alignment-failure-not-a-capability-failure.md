---
id: INS-260625-6E01
domain: ai-development
topic: infrastructure
title: 'Low compute utilization is an alignment failure, not a capability failure'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - compute-utilization
  - organizational-alignment
  - infrastructure
  - scaling
sources:
  - type: youtube
    title: 'Why AI Labs With Unlimited GPUs Still Fail — Anjney Midha, AMP'
    author: Latent Space
    url: 'https://www.youtube.com/watch?v=h5dlIPM0X18'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Cluster utilization collapses because every degree of separation between the
    people funding compute and the people running it compounds misalignment at
    scale.
  standard: >-
    Midha frames the puzzle of cash-rich, compute-rich labs that still can't
    ship as a leadership and alignment question rather than an engineering one.
    The benchmark exists and is achievable: Google treats 95% node allocation as
    the floor (anything lower is 'an outage') and best-in-class MFU runs 60-70%.
    Most single-tenant clusters fall far short. The mechanism is the 'radian
    metaphor' — two lines off by a few degrees at the origin diverge enormously
    at scale. The more handoffs between capital, deployment, operations, and
    output measurement, the more the small initial misalignments compound. The
    practical fix is mundane and borrowed from the semiconductor industry: do
    iterative bring-ups instead of scaling fast, because forced rapid scaling
    makes wastage compound before anyone can correct it. The lesson is that AI
    scaling raises the premium on infrastructure common sense rather than
    excusing its absence — the margin of error is lower and the cost of waste is
    higher.
stance: >-
  AI labs waste compute because of organizational distance between capital and
  cluster operators, not because the technical problem is hard.
related:
  - PRI-260406-7128
  - PRI-260323-00C6
  - PRI-260412-52DA
  - PRI-260405-F20C
  - INS-260404-5684
  - INS-260627-6065
---
Midha frames the puzzle of cash-rich, compute-rich labs that still can't ship as a leadership and alignment question rather than an engineering one. The benchmark exists and is achievable: Google treats 95% node allocation as the floor (anything lower is 'an outage') and best-in-class MFU runs 60-70%. Most single-tenant clusters fall far short. The mechanism is the 'radian metaphor' — two lines off by a few degrees at the origin diverge enormously at scale. The more handoffs between capital, deployment, operations, and output measurement, the more the small initial misalignments compound. The practical fix is mundane and borrowed from the semiconductor industry: do iterative bring-ups instead of scaling fast, because forced rapid scaling makes wastage compound before anyone can correct it. The lesson is that AI scaling raises the premium on infrastructure common sense rather than excusing its absence — the margin of error is lower and the cost of waste is higher.
