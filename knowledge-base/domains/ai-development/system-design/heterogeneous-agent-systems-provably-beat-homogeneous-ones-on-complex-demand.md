---
id: INS-260605-5878
domain: ai-development
topic: system-design
title: Heterogeneous agent systems provably beat homogeneous ones on complex demand
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - production-function
  - specialization
  - multi-agent
  - skill-distribution
  - optimization
sources:
  - type: youtube
    title: >-
      Scaling the Next Paradigm of Heterogeneous Intelligence — Adrian
      Bertagnoli, Callosum
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=WRBNDpUhsJQ'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    A 'production function' framing shows heterogeneous skill distributions meet
    complex demand that neither narrow specialists nor broad generalists can
    satisfy efficiently.
  standard: >-
    Real-world problems are complex, multi-step, and open-ended; they decompose
    into sub-problems requiring vastly different types of intelligence. Scaling
    a single type of intelligence to cover all of them is inefficient. Callosum
    formalizes this as a 'production function' over a skill space: heterogeneous
    agents communicating (e.g., in a ring topology) collectively supply a skill
    distribution that can match demand shapes a homogeneous system cannot.


    A homogeneous approach either scales one narrow peak (good for demand A,
    useless for demand B) or fields only generalists — a broad-but-short
    'cylinder' of skill that never rises high enough to meet any specific peak
    in the demand function. The claim is that this pattern recurs across
    neuroscience, economics, and ecology, and that under any reasonable amount
    of constraints heterogeneous systems outperform homogeneous ones. For system
    designers, this is an argument to deliberately compose teams of
    differently-sized, differently-architected models rather than defaulting to
    one frontier model everywhere.
stance: >-
  Under any reasonable constraints, a mix of specialized agents outperforms
  either a single specialist or a fleet of generalists at meeting real-world
  skill demand.
related:
  - INS-260330-B28C
  - INS-260330-16B1
  - INS-260402-C4FF
  - PRI-260406-32FE
  - PRI-260328-F0B4
---
Real-world problems are complex, multi-step, and open-ended; they decompose into sub-problems requiring vastly different types of intelligence. Scaling a single type of intelligence to cover all of them is inefficient. Callosum formalizes this as a 'production function' over a skill space: heterogeneous agents communicating (e.g., in a ring topology) collectively supply a skill distribution that can match demand shapes a homogeneous system cannot.

A homogeneous approach either scales one narrow peak (good for demand A, useless for demand B) or fields only generalists — a broad-but-short 'cylinder' of skill that never rises high enough to meet any specific peak in the demand function. The claim is that this pattern recurs across neuroscience, economics, and ecology, and that under any reasonable amount of constraints heterogeneous systems outperform homogeneous ones. For system designers, this is an argument to deliberately compose teams of differently-sized, differently-architected models rather than defaulting to one frontier model everywhere.
