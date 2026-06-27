---
id: INS-260627-25FC
domain: ai-development
topic: system-building
title: Authorize side effects by replaying their concrete traces before execution
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - verification
  - side-effects
  - simulation
  - agent-safety
  - system-design
sources:
  - type: blog
    title: >-
      A hardware-safety-gated system for LLM-written native ARTIQ control code
      on a trapped-ion platform
    url: 'https://arxiv.org/html/2606.27231'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    The paper's strongest engineering move is to simulate the proposed script
    and check the resulting hardware-operation trace before live execution.
  standard: >-
    The safety-filter runs agent-written ARTIQ scripts in dax.sim and checks
    each generated device operation against operator-defined bounds before
    issuing an execution token. This shifts validation from reviewing prose or
    source code to verifying the concrete sequence of operations the system
    would perform.


    The same pattern generalizes beyond lab hardware: agents that touch
    production systems should route changes through dry-run plans, database
    transactions, infrastructure previews, policy simulators, or typed effect
    logs before real execution. The gate should ask 'what exact effects will
    happen, and are they within declared bounds?' rather than 'does the plan
    sound safe?'
stance: >-
  For high-stakes agent side effects, trace replay against bounded resource
  models is a stronger gate than prompt review or post-hoc log inspection.
related:
  - INS-260627-B1A4
  - PRI-260403-5B3D
  - INS-260501-0662
  - INS-260626-AE04
  - INS-260627-765B
---
The safety-filter runs agent-written ARTIQ scripts in dax.sim and checks each generated device operation against operator-defined bounds before issuing an execution token. This shifts validation from reviewing prose or source code to verifying the concrete sequence of operations the system would perform.

The same pattern generalizes beyond lab hardware: agents that touch production systems should route changes through dry-run plans, database transactions, infrastructure previews, policy simulators, or typed effect logs before real execution. The gate should ask 'what exact effects will happen, and are they within declared bounds?' rather than 'does the plan sound safe?'
