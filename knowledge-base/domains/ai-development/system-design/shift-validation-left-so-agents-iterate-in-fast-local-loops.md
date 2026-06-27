---
id: INS-260627-F3B6
domain: ai-development
topic: system-design
title: Shift validation left so agents iterate in fast local loops
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - shift-left
  - local-first
  - fast-feedback
  - developer-productivity
  - validation
sources:
  - type: youtube
    title: "Platforms for Humans and Machines: Engineering for the Age of Agents —\_Juan Herreros Elorza"
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=cCRO3ChaYhM'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Don't make an agent push to version control and wait minutes for a workflow
    to fail — validate up front locally by calling the same APIs or wrappers, so
    the agent's iteration loop stays tight.
  standard: >-
    The talk notes that an agent is typically local to the developer's machine —
    the models run elsewhere, but the work the agent does happens locally. The
    design implication is 'shift left': if something is going to fail, it should
    fail as soon as possible, ideally before anything leaves the machine. The
    concrete anti-pattern is forcing the agent to commit and push to version
    control only to have a CI workflow fail several minutes later on something
    that could have been caught instantly.


    This matters more for agents than for humans because of the loop dynamic. An
    agent given a clear target will iterate until it succeeds, and each
    iteration's cost is dominated by feedback latency. A multi-minute remote
    pipeline turns each attempt into a long, expensive cycle; a local validation
    that runs in seconds lets the agent burn through attempts and converge
    quickly. Combined with local-first execution, fast local validation is what
    makes the iterate-until-correct pattern actually productive.


    The mechanism is to expose the same validation logic the platform runs
    remotely as something callable locally — directly via the platform's APIs or
    through a thin wrapper around them. This is the same 'API underneath
    everything' principle applied to the verification path: the agent should be
    able to check its work without a network round trip to a CI system.
stance: >-
  Failures should surface as early and as locally as possible because agents run
  on the local machine and iterate fastest against immediate feedback rather
  than slow remote pipelines.
related:
  - INS-260329-8F98
  - INS-260410-1ED3
  - INS-260605-683B
  - INS-260605-34B0
  - INS-260625-78C1
  - INS-260626-0CFF
  - INS-260605-25B2
  - INS-260410-F910
---
The talk notes that an agent is typically local to the developer's machine — the models run elsewhere, but the work the agent does happens locally. The design implication is 'shift left': if something is going to fail, it should fail as soon as possible, ideally before anything leaves the machine. The concrete anti-pattern is forcing the agent to commit and push to version control only to have a CI workflow fail several minutes later on something that could have been caught instantly.

This matters more for agents than for humans because of the loop dynamic. An agent given a clear target will iterate until it succeeds, and each iteration's cost is dominated by feedback latency. A multi-minute remote pipeline turns each attempt into a long, expensive cycle; a local validation that runs in seconds lets the agent burn through attempts and converge quickly. Combined with local-first execution, fast local validation is what makes the iterate-until-correct pattern actually productive.

The mechanism is to expose the same validation logic the platform runs remotely as something callable locally — directly via the platform's APIs or through a thin wrapper around them. This is the same 'API underneath everything' principle applied to the verification path: the agent should be able to check its work without a network round trip to a CI system.
