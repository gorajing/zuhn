---
id: INS-260627-B244
domain: ai-development
topic: agent-patterns
title: >-
  Match the human-agent operating model to whether the task rewards determinism
  or variation
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - operating-model
  - agent-orchestration
  - workflow-design
  - legacy-modernization
  - greenfield
sources:
  - type: youtube
    title: >-
      Moving away from Agile: What's Next – Martin Harrysson & Natasha Maniar,
      McKinsey & Company
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=SZStlIhyTCY'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Legacy modernization (high context, well-defined output) suits a 'factory of
    agents' where humans give a spec and final review; greenfield/new features
    suit an 'iterative loop' where agents are co-creators generating variation
    for fast feedback.
  standard: >-
    McKinsey argues that re-wiring the PDLC is not one-size-fits-all: different
    engineering functions along the product life cycle need different operating
    models depending on how humans and agents best collaborate. For modernizing
    legacy codebases — a task needing high context of the whole codebase but
    with clearly defined outputs — the right shape is a 'factory of agents':
    humans provide an initial spec and a final review with minimal intervention
    in between. For new features in greenfield and brownfield projects, the work
    benefits from non-deterministic outputs and increased variation, so the
    right shape is an iterative loop where agents act as co-creators, surfacing
    more options to enable faster feedback. The design principle generalizes:
    deterministic, spec-able work wants a high-throughput pipeline with humans
    at the boundaries, while exploratory work wants agents amplifying variation
    inside a tight human-in-the-loop cycle. Choosing the wrong model — e.g., an
    iterative loop for a well-specified migration — wastes the AI's leverage.
stance: >-
  There is no single best human-agent workflow; the right operating model
  depends on whether the task has well-defined outputs or benefits from
  non-deterministic variation.
related:
  - INS-260327-A9D5
  - PRI-260328-9F8C
  - PRI-260328-8317
  - INS-260530-D34F
  - PRI-260328-F723
---
McKinsey argues that re-wiring the PDLC is not one-size-fits-all: different engineering functions along the product life cycle need different operating models depending on how humans and agents best collaborate. For modernizing legacy codebases — a task needing high context of the whole codebase but with clearly defined outputs — the right shape is a 'factory of agents': humans provide an initial spec and a final review with minimal intervention in between. For new features in greenfield and brownfield projects, the work benefits from non-deterministic outputs and increased variation, so the right shape is an iterative loop where agents act as co-creators, surfacing more options to enable faster feedback. The design principle generalizes: deterministic, spec-able work wants a high-throughput pipeline with humans at the boundaries, while exploratory work wants agents amplifying variation inside a tight human-in-the-loop cycle. Choosing the wrong model — e.g., an iterative loop for a well-specified migration — wastes the AI's leverage.
