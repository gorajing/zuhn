---
id: INS-260625-EFCC
domain: ai-development
topic: ai-business-models
title: >-
  The agent orchestration layer is hard to monetize; value sits at the sandbox
  and model layers
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - business-model
  - open-source
  - developer-tools
  - moats
  - agent-infrastructure
sources:
  - type: youtube
    title: >-
      Devin’s 80% Moment: Background Agents, 7x PRs, & End of Hand-Held Coding —
      Walden Yan & Cole Murray
    author: Latent Space
    url: 'https://www.youtube.com/watch?v=0fgJPhYcbVk'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Cole open-sourced OpenInspect rather than monetize it because the middle
    orchestration layer is easy to copy and squeezed between paid sandbox
    providers (Daytona, E2B, Modal) and paid model labs — so the winning move is
    to bundle the agent with the infrastructure underneath it.
  standard: >-
    Cole Murray deliberately declined to commercialize OpenInspect despite
    offers, reasoning that a background-agent system will become critical
    company infrastructure that clients want to fork and customize, and that
    competing 'for $20 a seat' on an easily-copied orchestration layer is a bad
    business. Money is made at the sandbox layer (Daytona, E2B, Modal) and at
    the model layer; the orchestrator sits in a gray area where it's unclear
    what you're actually selling beyond integrations. Open-sourcing it lets
    clients build on a shared foundation while he captures value through
    consulting on integration — the genuinely hard, company-specific work of
    wiring the agent into production databases, logs, and knowledge bases.


    Cognition's contrasting answer is to escape the squeeze by owning the layer
    below: they sell 'agent plus agent infra' together. By building their own VM
    infrastructure (including a block-diff file-storage format for near-instant
    VM save/restore proportional to the diff, not the disk size), they can
    deploy Devin into any environment a customer needs — VPC, on-prem, even fed
    gov cloud — without waiting for an underlying infra provider to support it.
    The strategic lesson for anyone building in this space: the orchestration
    middle is a commodity, so capture value either downward (own the
    infrastructure and bundle it) or sideways (own the integration and adoption
    work), not in the thin middle.
stance: >-
  A standalone background-agent orchestration product is a poor business because
  the defensible value accrues to the sandbox and model layers, not the middle.
related:
  - INS-260405-94A0
  - INS-260410-49D7
  - INS-260423-55A7
  - INS-260514-6576
  - INS-260323-365A
  - INS-260410-ED4D
---
Cole Murray deliberately declined to commercialize OpenInspect despite offers, reasoning that a background-agent system will become critical company infrastructure that clients want to fork and customize, and that competing 'for $20 a seat' on an easily-copied orchestration layer is a bad business. Money is made at the sandbox layer (Daytona, E2B, Modal) and at the model layer; the orchestrator sits in a gray area where it's unclear what you're actually selling beyond integrations. Open-sourcing it lets clients build on a shared foundation while he captures value through consulting on integration — the genuinely hard, company-specific work of wiring the agent into production databases, logs, and knowledge bases.

Cognition's contrasting answer is to escape the squeeze by owning the layer below: they sell 'agent plus agent infra' together. By building their own VM infrastructure (including a block-diff file-storage format for near-instant VM save/restore proportional to the diff, not the disk size), they can deploy Devin into any environment a customer needs — VPC, on-prem, even fed gov cloud — without waiting for an underlying infra provider to support it. The strategic lesson for anyone building in this space: the orchestration middle is a commodity, so capture value either downward (own the infrastructure and bundle it) or sideways (own the integration and adoption work), not in the thin middle.
