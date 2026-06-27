---
id: INS-260625-D842
domain: ai-development
topic: agent-evals
title: >-
  A judge note is useless if its defect category is not wired to the release
  gate
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - llm-as-judge
  - quality-gates
  - agent-reliability
  - production-verification
  - routing
sources:
  - type: blog
    title: LLM-as-Judge Blind Spots in Production Multi-Turn Transaction Agents
    url: 'https://arxiv.org/html/2606.10315v1'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: Detection does not count unless it changes the gate outcome.
  standard: >-
    The paper's strongest mechanism is a routing failure: judge notes often
    described confirm-gate or cart-state defects, but the rubric had only
    intent, brand-voice, and personalization axes, and the operational gate was
    wired to hangs and hard assertions rather than quality dimensions. Defects
    were visible in notes yet did not become blockers.


    AgentRun should separate observation, classification, and gate effect. A
    verification artifact should state not only 'the judge noticed X' but also
    which gate consumed X, what severity it assigned, and whether the run status
    changed. Otherwise the system accumulates diagnostic prose while continuing
    to ship the same failure mode.
stance: >-
  Evaluation systems must route detected behavioral defects into blocking gate
  states, because free-text judge observations do not protect production unless
  they affect the decision path.
related:
  - INS-260330-F140
  - INS-260625-2B5A
  - INS-260626-1045
  - INS-260327-C4AD
  - INS-260627-35B1
---
The paper's strongest mechanism is a routing failure: judge notes often described confirm-gate or cart-state defects, but the rubric had only intent, brand-voice, and personalization axes, and the operational gate was wired to hangs and hard assertions rather than quality dimensions. Defects were visible in notes yet did not become blockers.

AgentRun should separate observation, classification, and gate effect. A verification artifact should state not only 'the judge noticed X' but also which gate consumed X, what severity it assigned, and whether the run status changed. Otherwise the system accumulates diagnostic prose while continuing to ship the same failure mode.
