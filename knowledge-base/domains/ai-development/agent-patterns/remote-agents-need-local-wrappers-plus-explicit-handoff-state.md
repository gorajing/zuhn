---
id: INS-260626-8A80
domain: ai-development
topic: agent-patterns
title: Remote agents need local wrappers plus explicit handoff state
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - google-adk
  - a2a
  - remote-agents
  - handoff
  - agentrun
sources:
  - type: blog
    title: >-
      Build Cross-Language Multi-Agent Team with Google’s Agent Development Kit
      and A2A- Google Developers Blog
    url: >-
      https://developers.googleblog.com/en/build-cross-language-multi-agent-team-with-google-agent-development-kit-and-a2a/
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    AgentRun should trace remote subagent handoffs as state transitions, not
    opaque tool calls.
  standard: >-
    The A2A duplicate risk is real because Zuhn already knows about Agent Cards.
    The new operational detail worth preserving is the wrapper-plus-state
    pattern: a Python orchestrator can treat a Go A2A service as a local
    subagent, while the workflow stores checkpoints like INGESTED, EXTRACTED,
    COMPLIANCE_PENDING, MANUAL_REVIEW, and APPROVED. For AgentRun, remote child
    work should record the agent card URL, protocol, task id, state transition,
    timeout policy, and fallback path.
  deep: >-
    This pattern separates cognitive work from deterministic policy enforcement.
    The LLM extraction agent can operate in Python, while a deterministic Go
    validator remains independently testable and auditable. The important
    constraint is that resilience comes from explicit state and manual-review
    transitions; without those, the remote subagent is just another brittle
    network dependency.
subtopic: remote-subagents
stance: >-
  Google ADK's RemoteA2aAgent pattern shows that the useful abstraction is not
  just agent discovery; it is making a remote service feel like a local subagent
  while preserving handoff state and failure routing.
related:
  - INS-260626-14AE
  - INS-260605-A2AD
  - INS-260627-AB66
  - INS-260605-3588
  - INS-260625-019F
---
The A2A duplicate risk is real because Zuhn already knows about Agent Cards. The new operational detail worth preserving is the wrapper-plus-state pattern: a Python orchestrator can treat a Go A2A service as a local subagent, while the workflow stores checkpoints like INGESTED, EXTRACTED, COMPLIANCE_PENDING, MANUAL_REVIEW, and APPROVED. For AgentRun, remote child work should record the agent card URL, protocol, task id, state transition, timeout policy, and fallback path.
