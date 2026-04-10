---
id: INS-260410-F3D8
domain: ai-development
topic: ai-business-models
title: >-
  The per-user SaaS unit is being replaced by per-agent infrastructure
  provisioning
actionability: inspiration
confidence: medium
shelf_life: evergreen
status: active
tags:
  - agents
  - saas
  - business-models
  - windows-365
  - per-agent
sources:
  - type: youtube
    title: Satya Nadella – How Microsoft thinks about AGI
    author: Dwarkesh Patel
    url: 'https://www.youtube.com/watch?v=8-boBsWcr5A'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Microsoft is seeing strong demand for Windows 365 instances provisioned for
    autonomous agents that need their own machine — the per-seat business is
    becoming per-user-plus-per-agent.
  standard: >-
    Nadella reframes the existential question for SaaS companies — 'what happens
    to per-user pricing in an agentic world?' — by pointing out that autonomous
    agents themselves need everything a human knowledge worker needs: a computer
    to use, an identity, storage, security policy, observability of what they
    did when, and e-discovery for audit. Office and Windows aren't just end-user
    tools; they're the substrate that bootstraps an agent. Microsoft is already
    seeing agent-builders provision Windows 365 VMs to give their agents a real
    machine.


    The deeper claim is that the underlying infrastructure (databases, storage,
    identity, audit) becomes more important, not less, in a fully autonomous
    world — because agent-to-agent workflows generate more artifacts, more
    transactions, and more audit surface than human workflows. The 'efficient
    frontier' of pure agent-to-agent collaboration still needs storage with
    e-discovery and identity systems that span multiple model providers under
    one auth context.


    For anyone building SaaS or developer tools: the right unit-economics
    question is no longer 'what's our ARPU?' but 'what's our per-agent
    infrastructure footprint and how does that scale faster than per-user?' The
    early signal Nadella points to is that agent counts will grow faster than
    user counts, and the infrastructure layer captures that fan-out independent
    of which model or scaffolding wins.
stance: >-
  AI agents need their own provisioned computer, identity, storage,
  observability, and security perimeter — turning end-user productivity tools
  into infrastructure businesses billed per agent rather than per seat.
related:
  - INS-260323-282F
  - INS-260322-2E33
  - INS-260327-B561
  - INS-260330-AB67
  - PRI-260406-C422
  - PRI-260328-8317
  - INS-260404-8CA8
---
Nadella reframes the existential question for SaaS companies — 'what happens to per-user pricing in an agentic world?' — by pointing out that autonomous agents themselves need everything a human knowledge worker needs: a computer to use, an identity, storage, security policy, observability of what they did when, and e-discovery for audit. Office and Windows aren't just end-user tools; they're the substrate that bootstraps an agent. Microsoft is already seeing agent-builders provision Windows 365 VMs to give their agents a real machine.

The deeper claim is that the underlying infrastructure (databases, storage, identity, audit) becomes more important, not less, in a fully autonomous world — because agent-to-agent workflows generate more artifacts, more transactions, and more audit surface than human workflows. The 'efficient frontier' of pure agent-to-agent collaboration still needs storage with e-discovery and identity systems that span multiple model providers under one auth context.

For anyone building SaaS or developer tools: the right unit-economics question is no longer 'what's our ARPU?' but 'what's our per-agent infrastructure footprint and how does that scale faster than per-user?' The early signal Nadella points to is that agent counts will grow faster than user counts, and the infrastructure layer captures that fan-out independent of which model or scaffolding wins.
