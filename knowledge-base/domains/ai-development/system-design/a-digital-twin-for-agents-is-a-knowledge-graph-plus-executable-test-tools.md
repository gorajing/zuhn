---
id: INS-260628-4BA2
domain: ai-development
topic: system-design
title: A digital twin for agents is a knowledge graph plus executable test tools
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - digital-twin
  - knowledge-graph
  - agents
  - simulation
  - tooling
  - testing
sources:
  - type: youtube
    title: >-
      Multi Agent AI and Network Knowledge Graphs for Change — Ola Mabadeje,
      Cisco
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=m0dxZ-NDKHo'
date_extracted: '2026-06-28'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Cisco defines its digital twin as a knowledge graph (state) plus a set of
    tools like Batfish or RouteNet (execution), so agents can run real tests
    against a snapshot before changes hit production.
  standard: >-
    It's tempting to think a digital twin is just a faithful data model of the
    real system. Cisco's working definition is sharper and more useful: a
    digital twin is the knowledge graph that represents current state *plus* a
    set of tools that can execute tests against that state. In their
    change-management flow, the execution agent takes a snapshot of the live
    network from the knowledge graph, combines it with a proposed config change
    pulled from a GitHub PR, and runs each test case one at a time inside the
    twin using network-engineering tools (Batfish, RouteNet).


    The distinction matters for anyone building agent environments:
    representation without execution can answer 'what is the state?' but not
    'what happens if I do X?' — and the second question is the entire point of
    pre-production validation. The pattern is state-snapshot + change-candidate
    + executable-simulation, which lets agents verify risky changes safely
    before they touch production. When designing a sandbox or twin for agents to
    act in, budget for the tool layer that makes the representation runnable,
    not just queryable.
stance: >-
  An agent-usable digital twin must combine a state representation with tools
  that execute tests against it, not just model the data.
related:
  - INS-260403-30BF
  - INS-260505-B98F
  - INS-260514-7B11
  - INS-260626-8660
  - INS-260627-5F5A
  - INS-260628-CBB0
  - INS-260628-4E8F
  - INS-260628-5BC9
  - INS-260628-ECEB
---
It's tempting to think a digital twin is just a faithful data model of the real system. Cisco's working definition is sharper and more useful: a digital twin is the knowledge graph that represents current state *plus* a set of tools that can execute tests against that state. In their change-management flow, the execution agent takes a snapshot of the live network from the knowledge graph, combines it with a proposed config change pulled from a GitHub PR, and runs each test case one at a time inside the twin using network-engineering tools (Batfish, RouteNet).

The distinction matters for anyone building agent environments: representation without execution can answer 'what is the state?' but not 'what happens if I do X?' — and the second question is the entire point of pre-production validation. The pattern is state-snapshot + change-candidate + executable-simulation, which lets agents verify risky changes safely before they touch production. When designing a sandbox or twin for agents to act in, budget for the tool layer that makes the representation runnable, not just queryable.
