---
id: INS-260410-AA40
domain: ai-development
topic: hardware
title: >-
  Deep learning won because hardware made arithmetic cheap and data movement
  expensive
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - hardware
  - deep-learning
  - matrix-multiplication
  - co-design
  - tpu
sources:
  - type: youtube
    title: 'Jeff Dean & Noam Shazeer — 25 years at Google: from PageRank to AGI'
    author: Dwarkesh Patel
    url: 'https://www.youtube.com/watch?v=v0gjI__RyCY'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Matrix multiplication (N³ compute, N² data) is the perfect shape for
    hardware where arithmetic is cheap and data movement is expensive, so deep
    learning was destined to win once TPUs filled the chip with arithmetic
    units.
  standard: >-
    Noam Shazeer argues the algorithms have been following the hardware: at this
    point arithmetic is very cheap and moving data is comparatively expensive,
    which is precisely the regime where matrix multiplication (N³ ops over N²
    bytes of communication) dominates. Larry Page reportedly framed this as
    opportunity cost — if your chip has mostly empty area with a few arithmetic
    units, you're leaving orders of magnitude of throughput on the floor.


    The TPU was a deliberate response: fill the chip with reduced-precision
    linear algebra units, and then force the algorithms, data flow, and
    precision assumptions to adapt. Noam runs the counterfactual: if memory
    lookups had become cheap instead of arithmetic, AI today would look like the
    1990s lookup-heavy approaches in reverse. The implication is that 'what AI
    is' is downstream of chip economics, not the other way around.


    Application: when evaluating a new AI architecture, first check whether it
    matches the arithmetic-to-bandwidth ratio of available hardware.
    Architectures that fight the ratio (e.g., heavy random memory access,
    fine-grained sparsity without enough batched compute) will be fighting
    physics even if they're theoretically elegant.
stance: >-
  Deep learning's dominance is a consequence of the arithmetic-to-bandwidth
  ratio in modern silicon, not an independent algorithmic discovery.
related:
  - INS-260323-8637
  - INS-260321-53E2
  - INS-260323-8DE7
  - INS-260325-5B7F
  - INS-260329-2612
  - INS-260330-F5A1
  - INS-260330-9D44
  - INS-260330-4C31
  - INS-260402-5242
  - INS-260402-613D
---
Noam Shazeer argues the algorithms have been following the hardware: at this point arithmetic is very cheap and moving data is comparatively expensive, which is precisely the regime where matrix multiplication (N³ ops over N² bytes of communication) dominates. Larry Page reportedly framed this as opportunity cost — if your chip has mostly empty area with a few arithmetic units, you're leaving orders of magnitude of throughput on the floor.

The TPU was a deliberate response: fill the chip with reduced-precision linear algebra units, and then force the algorithms, data flow, and precision assumptions to adapt. Noam runs the counterfactual: if memory lookups had become cheap instead of arithmetic, AI today would look like the 1990s lookup-heavy approaches in reverse. The implication is that 'what AI is' is downstream of chip economics, not the other way around.

Application: when evaluating a new AI architecture, first check whether it matches the arithmetic-to-bandwidth ratio of available hardware. Architectures that fight the ratio (e.g., heavy random memory access, fine-grained sparsity without enough batched compute) will be fighting physics even if they're theoretically elegant.
