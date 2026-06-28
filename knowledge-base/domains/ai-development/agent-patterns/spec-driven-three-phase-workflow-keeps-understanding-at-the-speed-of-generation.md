---
id: INS-260627-C3CE
domain: ai-development
topic: agent-patterns
title: >-
  Spec-driven three-phase workflow keeps understanding at the speed of
  generation
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - spec-driven-development
  - context-engineering
  - research-plan-implement
  - human-checkpoint
  - workflow
  - context-compression
sources:
  - type: youtube
    title: 'The Infinite Software Crisis – Jake Nations, Netflix'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=eIoohUmYpGI'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Compress a 5M-token codebase into a 2,000-word spec via three validated
    phases — research, plan, implement — so review happens in minutes and the
    implementation phase becomes mechanical.
  standard: >-
    Nations calls this context compression (also context engineering or
    spec-driven development): Phase 1 research feeds everything relevant
    (architecture diagrams, docs, Slack threads) to the agent to map components
    and dependencies, iterating and correcting until it produces one research
    document — 'here's what exists, here's what connects, here's what your
    change will affect.' The human checkpoint here is the highest-leverage
    moment in the whole process: validate the analysis against reality, catch
    errors before they become disasters. Phase 2 planning produces a detailed
    implementation plan with real function signatures, type definitions, and
    data flow — 'paint by numbers' a junior could execute line by line — which
    is where the architectural decisions and service boundaries get made and can
    be reviewed in minutes. Phase 3 implementation is deliberately simple
    because a clean spec keeps context focused, replacing 50 messages of
    evolutionary code with three validated outputs and no dead code from
    abandoned approaches.


    The deeper principle: thinking and planning become the majority of the work,
    and AI accelerates the mechanical parts while the synthesis and judgment
    stay with the human. The payoff is reviewability — you verify the output
    conforms to your plan rather than reverse-engineering what got invented.
stance: >-
  Front-loading research and planning into reviewable artifacts — not better
  prompts or models — is what keeps human comprehension from falling behind AI's
  generation speed.
related:
  - INS-260410-2F8D
  - INS-260605-6A32
  - INS-260605-C223
  - PRI-260406-9780
  - PRI-260405-3080
---
Nations calls this context compression (also context engineering or spec-driven development): Phase 1 research feeds everything relevant (architecture diagrams, docs, Slack threads) to the agent to map components and dependencies, iterating and correcting until it produces one research document — 'here's what exists, here's what connects, here's what your change will affect.' The human checkpoint here is the highest-leverage moment in the whole process: validate the analysis against reality, catch errors before they become disasters. Phase 2 planning produces a detailed implementation plan with real function signatures, type definitions, and data flow — 'paint by numbers' a junior could execute line by line — which is where the architectural decisions and service boundaries get made and can be reviewed in minutes. Phase 3 implementation is deliberately simple because a clean spec keeps context focused, replacing 50 messages of evolutionary code with three validated outputs and no dead code from abandoned approaches.

The deeper principle: thinking and planning become the majority of the work, and AI accelerates the mechanical parts while the synthesis and judgment stay with the human. The payoff is reviewability — you verify the output conforms to your plan rather than reverse-engineering what got invented.
