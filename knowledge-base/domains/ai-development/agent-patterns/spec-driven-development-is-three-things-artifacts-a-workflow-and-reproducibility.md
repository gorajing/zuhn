---
id: INS-260627-214C
domain: ai-development
topic: agent-patterns
title: >-
  Spec-driven development is three things: artifacts, a workflow, and
  reproducibility tooling
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - spec-driven-development
  - agentic-coding
  - sdlc
  - kiro
  - code-quality
sources:
  - type: youtube
    title: >-
      Spec-Driven Development: Agentic Coding at FAANG Scale and Quality — Al
      Harris, Amazon Kiro
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=HY_JyxAZsiE'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    A spec is simultaneously a set of versioned artifacts, a structured
    requirements-design-execution workflow, and a tooling layer (property tests,
    requirements verification) that delivers reproducible results.
  standard: >-
    Vibe coding works but offloads all the guardrails onto the operator getting
    things right in the moment; it doesn't scale to complex problems or reliably
    control the agent. Kiro's framing decomposes a 'spec' into three distinct
    layers: (1) artifacts representing the system's state at time t —
    requirements with acceptance criteria, design docs, task lists; (2) a
    structured workflow that pushes the human and agent through requirements ->
    design -> execution; and (3) a tooling layer on top that delivers
    reproducible results, with property-based testing and automated requirements
    verification as examples.


    The practical payoff is that the larger upfront investment buys accuracy and
    reproducibility, not speed. Harris frames the asymmetry directly: a
    10-second prompt that gets it wrong costs almost nothing, but an hour spent
    on a reviewed design doc is an hour you wanted to get right — so the
    structure earns its keep precisely on the high-stakes work. Teams adopting
    agents on non-trivial codebases should treat the spec as the
    natural-language control surface for the system, not throwaway scaffolding.
stance: >-
  Structured spec-driven workflows scale agentic coding to complex software
  better than vibe coding because reproducibility comes from structure, not from
  the operator getting the prompt right.
related:
  - INS-260320-4BA8
  - INS-260320-6F8E
  - INS-260403-9D8A
  - INS-260605-E706
  - INS-260626-73D4
  - INS-260626-AF37
  - PRI-260405-3080
---
Vibe coding works but offloads all the guardrails onto the operator getting things right in the moment; it doesn't scale to complex problems or reliably control the agent. Kiro's framing decomposes a 'spec' into three distinct layers: (1) artifacts representing the system's state at time t — requirements with acceptance criteria, design docs, task lists; (2) a structured workflow that pushes the human and agent through requirements -> design -> execution; and (3) a tooling layer on top that delivers reproducible results, with property-based testing and automated requirements verification as examples.

The practical payoff is that the larger upfront investment buys accuracy and reproducibility, not speed. Harris frames the asymmetry directly: a 10-second prompt that gets it wrong costs almost nothing, but an hour spent on a reviewed design doc is an hour you wanted to get right — so the structure earns its keep precisely on the high-stakes work. Teams adopting agents on non-trivial codebases should treat the spec as the natural-language control surface for the system, not throwaway scaffolding.
