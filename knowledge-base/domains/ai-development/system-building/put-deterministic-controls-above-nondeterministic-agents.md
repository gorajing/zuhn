---
id: INS-260626-DB00
domain: ai-development
topic: system-building
title: Put deterministic controls above nondeterministic agents
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agent-systems
  - determinism
  - guardrails
  - control-plane
sources:
  - type: blog
    title: A Deterministic Control Plane for LLM Coding Agents
    url: 'https://arxiv.org/html/2606.26924'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Use deterministic gates for hashes, permissions, state transitions, and
    blocklists instead of asking another model to police the agent.
  standard: >-
    The paper's core design claim is that a non-deterministic component is a
    weak control for another non-deterministic component. Rel(AI)Build therefore
    uses testable mechanisms such as SHA-256 checks, HMAC-stamped lockfiles,
    regex blocklists, permission-tier compilation, and phase-state transitions.


    For agent/eval/system-building work, this implies that reliable harnesses
    should separate model creativity from governance. Let the model plan and
    edit, but make install gates, tool permissions, phase advancement, and scope
    checks executable invariants with clear failure modes.
stance: >-
  The governance layer for LLM agents should use ordinary deterministic code for
  policy enforcement rather than delegating control of nondeterminism to another
  LLM.
related:
  - INS-260410-382D
  - INS-260605-8C71
  - INS-260605-07E5
  - INS-260625-2B5A
  - INS-260625-C697
  - INS-260625-A668
  - INS-260625-A5E7
  - INS-260605-BC6F
  - INS-260627-9F3F
---
The paper's core design claim is that a non-deterministic component is a weak control for another non-deterministic component. Rel(AI)Build therefore uses testable mechanisms such as SHA-256 checks, HMAC-stamped lockfiles, regex blocklists, permission-tier compilation, and phase-state transitions.

For agent/eval/system-building work, this implies that reliable harnesses should separate model creativity from governance. Let the model plan and edit, but make install gates, tool permissions, phase advancement, and scope checks executable invariants with clear failure modes.
