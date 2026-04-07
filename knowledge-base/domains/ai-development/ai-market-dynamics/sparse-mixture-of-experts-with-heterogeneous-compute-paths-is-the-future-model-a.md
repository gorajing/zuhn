---
id: INS-260327-EE5B
domain: ai-development
topic: ai-market-dynamics
title: >-
  Sparse mixture-of-experts with heterogeneous compute paths is the future model
  architecture
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - mixture-of-experts
  - model-architecture
  - compute-efficiency
  - sparsity
sources:
  - type: youtube
    title: Google's Jeff Dean on the Coming Transformations in AI
    author: Sequoia Capital
    url: 'https://www.youtube.com/watch?v=dq8MhTFCs80'
date_extracted: '2026-03-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Dean envisions models with heterogeneous expert sizes, dynamic parameter
    expansion/compaction, and 100-1000x variation in compute per path, mimicking
    biological brain efficiency.
  standard: >-
    Dean argues current MoE approaches are 'incredibly regular' and don't fully
    explore the design space. He envisions models where some paths through the
    model are 100-1000x more expensive than others, experts have different sizes
    and structures, the model can dynamically extend with new parameters, and a
    'background garbage collectiony thing' runs distillation to compact
    underused regions and reallocate memory.


    This draws from the biological analogy that our 20-watt brains achieve
    efficiency by not activating Shakespeare poetry processing when avoiding a
    garbage truck. Dean's early work on MoE with 2,048 experts showed 10-100x
    efficiency gains per training flop. The challenge is that 'what we're doing
    today is incredibly effective,' making it hard to justify a complete
    architectural shift. For AI infrastructure investors, this signals that
    next-generation efficiency gains will come from architectural innovations,
    not just scaling existing designs.
stance: >-
  Future AI models will have dramatically different compute paths -- some
  100-1000x more expensive than others -- with dynamic expansion and compaction
  of model parameters.
related:
  - INS-260325-5656
  - INS-260323-8519
  - INS-260321-3967
  - INS-260322-54F3
  - PRI-260407-7FB7
  - INS-260327-C962
evidence:
  - id: INS-260322-54F3
    type: CONTRADICTS
    classified_at: '2026-04-02'
  - id: INS-260330-3E3C
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
---
Dean argues current MoE approaches are 'incredibly regular' and don't fully explore the design space. He envisions models where some paths through the model are 100-1000x more expensive than others, experts have different sizes and structures, the model can dynamically extend with new parameters, and a 'background garbage collectiony thing' runs distillation to compact underused regions and reallocate memory.

This draws from the biological analogy that our 20-watt brains achieve efficiency by not activating Shakespeare poetry processing when avoiding a garbage truck. Dean's early work on MoE with 2,048 experts showed 10-100x efficiency gains per training flop. The challenge is that 'what we're doing today is incredibly effective,' making it hard to justify a complete architectural shift. For AI infrastructure investors, this signals that next-generation efficiency gains will come from architectural innovations, not just scaling existing designs.
