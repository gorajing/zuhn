---
id: INS-260626-A05F
domain: ai-development
topic: agent-patterns
title: 'Bind an agent''s permission scope to its role, not grant it uniformly'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agent-design
  - least-privilege
  - sandboxing
  - sub-agents
  - security
sources:
  - type: youtube
    title: OpenAI Codex Masterclass  — Vaibhav Srivastav & Katia Gil Guzman
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=MhHEGMFCEB0'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Set each sub-agent's sandbox mode from its job: read-only for reviewers and
    vulnerability scanners, write access only for doc/bug-report writers that
    must execute.
  standard: >-
    Codex lets every sub-agent persona declare its own model, reasoning effort,
    and sandbox mode (read-only vs. write). The presenter is emphatic that this
    is not a knob to tune casually: 'for a review agent, you would almost always
    100% want to use the review agent in read-only mode — you would never want
    your review agent to execute anything,' and the same for cybersecurity
    vulnerability agents. Write access is reserved for agents whose job
    inherently requires side effects, like a docs writer or bug-report
    generator.


    The deeper principle is to make invalid states unrepresentable at the agent
    layer: an agent that has no reason to mutate the repo should be structurally
    incapable of doing so, rather than relying on it to behave. A reviewer with
    execute rights is a latent incident — one prompt-injection or bad inference
    away from running something. Scoping permission to role converts a runtime
    trust problem into a design-time constraint, the same move as
    least-privilege in conventional systems but applied to the autonomy budget
    of each agent. When composing fleets of specialized sub-agents, the
    permission grant is part of the persona definition, not an afterthought.
stance: >-
  A coding agent's sandbox permissions should be fixed by its role — review and
  security agents must be read-only by construction and never able to execute.
related:
  - INS-260605-41AE
  - INS-260625-DA23
  - INS-260625-52B6
  - INS-260626-8080
  - INS-260627-8C56
  - INS-260627-A999
---
Codex lets every sub-agent persona declare its own model, reasoning effort, and sandbox mode (read-only vs. write). The presenter is emphatic that this is not a knob to tune casually: 'for a review agent, you would almost always 100% want to use the review agent in read-only mode — you would never want your review agent to execute anything,' and the same for cybersecurity vulnerability agents. Write access is reserved for agents whose job inherently requires side effects, like a docs writer or bug-report generator.

The deeper principle is to make invalid states unrepresentable at the agent layer: an agent that has no reason to mutate the repo should be structurally incapable of doing so, rather than relying on it to behave. A reviewer with execute rights is a latent incident — one prompt-injection or bad inference away from running something. Scoping permission to role converts a runtime trust problem into a design-time constraint, the same move as least-privilege in conventional systems but applied to the autonomy budget of each agent. When composing fleets of specialized sub-agents, the permission grant is part of the persona definition, not an afterthought.
