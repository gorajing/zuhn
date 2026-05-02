---
id: INS-260501-4B6F
domain: ai-development
topic: infrastructure
title: >-
  AI compute demand is structurally unlimited — the right answer to 'how much
  should we buy' is 'all of it'
actionability: reference
confidence: high
shelf_life: time-sensitive
status: active
tags:
  - compute-demand
  - infrastructure
  - capacity-planning
  - openai
sources:
  - type: youtube
    title: 'OpenAI''s Greg Brockman: Why Human Attention Is the New BottleneckOpenAI''s'
    author: Sequoia Capital
    url: 'https://youtu.be/bBS93A0BeNI'
date_extracted: '2026-05-01'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Greg Brockman on launch day: my team asked how much compute should we buy, I
    said all of it. They said no seriously how much. I said no matter how fast
    we ramp, we won't keep up with demand. That's been true ever since.
  standard: >-
    The standard capacity-planning frame treats demand as estimable from prior
    trend and assumes a stabilization point. Brockman names the operational
    truth at OpenAI: demand for intelligence is structurally unlimited at every
    price point delivered so far, and the compute ramp has never caught up. Matt
    Garman (AWS) corroborates from the supply side that GPU compute availability
    in 2026 'rounds to zero.' The implication for capacity-planning at
    AI-dependent companies: provision aggressively at every level of the stack
    you control. For AI infrastructure investors: bottleneck shifts upstream
    (energy, cooling, fab capacity) rather than away. For builders dependent on
    third-party APIs: every provider is supply-constrained, so your capacity is
    at their discretion — multi-provider sourcing is risk management, not
    optimization. The deeper signal: any narrative that AI compute spend will
    moderate in 2026-2027 contradicts the operator-level information from the
    largest buyer of compute. Plan accordingly.
stance: >-
  AI compute demand is not transitional growth that will stabilize but
  structural growth driven by unlimited demand for intelligence; capacity
  planning that assumes a near-term plateau systematically under-provisions and
  concedes capability to faster-moving competitors
related:
  - INS-260409-9D44
  - INS-260410-BC76
  - INS-260410-C63C
  - INS-260410-28E0
  - INS-260403-5CAD
  - INS-260323-B4D2
  - INS-260326-C305
---
The standard capacity-planning frame treats demand as estimable from prior trend and assumes a stabilization point. Brockman names the operational truth at OpenAI: demand for intelligence is structurally unlimited at every price point delivered so far, and the compute ramp has never caught up. Matt Garman (AWS) corroborates from the supply side that GPU compute availability in 2026 'rounds to zero.' The implication for capacity-planning at AI-dependent companies: provision aggressively at every level of the stack you control. For AI infrastructure investors: bottleneck shifts upstream (energy, cooling, fab capacity) rather than away. For builders dependent on third-party APIs: every provider is supply-constrained, so your capacity is at their discretion — multi-provider sourcing is risk management, not optimization. The deeper signal: any narrative that AI compute spend will moderate in 2026-2027 contradicts the operator-level information from the largest buyer of compute. Plan accordingly.
