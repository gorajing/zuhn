---
id: INS-260603-23B1
domain: ai-development
topic: agent-patterns
title: 'Treat agents as employees you onboard, not APIs you call'
actionability: reference
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - multi-agent
  - agent-as-employee
  - orchestration
  - onboarding
  - agent-integration
sources:
  - type: audio
    title: From agentic AI to physical AI
date_extracted: '2026-06-03'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Frans (Amazon): integrations fail when people treat GenAI 'as an API, an
    SLA, or some piece of software' — the proper frame is to think of the agent
    as an employee you onboard, with guardrails and cultural shift; their
    multi-agent CAD example had a mechanical-engineer agent, a cost agent, and a
    functional-safety agent arbitrated by an orchestrator.
  standard: >-
    The integration anti-pattern the panelist names: treating a GenAI agent as a
    deterministic software component — an API with an SLA, a service you call
    and get a guaranteed response from. Agents aren't that; they're
    non-deterministic, context-sensitive, and require the kind of onboarding,
    guardrails, and cultural integration you'd give a new employee.


    The concrete example from Amazon's published work: a virtual team building
    hard parts, composed of specialist agents — a mechanical-engineer agent that
    actuates CAD tools, a commodity/cost agent pressuring the design's cost, a
    functional-safety agent flagging 'this cup holder doesn't pass the crash
    test.' An orchestrator agent arbitrates between them, balancing the
    end-project goal against cost, timeline, and safety standards — and can tell
    a specialist agent 'this is a better option.' When this works, the
    productivity gain is 'magic'; but it requires rethinking the flow around an
    orchestrator, not wiring APIs together.


    The management-skills corollary (from the UX panelist): interacting with
    agents requires different team skills — no longer 'A to B' command but a
    more fluid 'A to get B' where you don't fully know what you'll get out.
    Clear communication, guidance, and tolerance for volatility become core
    management skills, and teams need training to lower the barrier to entry.


    The caution (Bedrock): treating agents like people has limits today — when
    Claude says 'I won't do that again,' that correction is lost once it leaves
    the context window; real coaching that persists requires
    customization/memory that's 'a ways to go' beyond current capability. So
    'treat agents as employees' is the right mental model for integration
    design, but the persistence/memory to truly coach them isn't fully there
    yet.


    This sharpens the supervisor-orchestrator pattern (PayPal source,
    SRC-260530-84B1) with the integration framing: build for onboarding and
    orchestration, not for API calls.
stance: >-
  Multi-agent integrations fail when teams treat the agent as an
  API/SLA/software component; the integrations that work treat the agent as an
  employee you onboard — with guardrails, cultural fit, and an orchestrator that
  arbitrates between specialist agents toward a project goal
related:
  - INS-260403-E3CC
  - INS-260501-F90F
  - INS-260501-FBC6
  - INS-260625-7DC7
  - INS-260605-077D
  - INS-260627-6217
  - INS-260403-4D80
  - INS-260530-B694
---
The integration anti-pattern the panelist names: treating a GenAI agent as a deterministic software component — an API with an SLA, a service you call and get a guaranteed response from. Agents aren't that; they're non-deterministic, context-sensitive, and require the kind of onboarding, guardrails, and cultural integration you'd give a new employee.

The concrete example from Amazon's published work: a virtual team building hard parts, composed of specialist agents — a mechanical-engineer agent that actuates CAD tools, a commodity/cost agent pressuring the design's cost, a functional-safety agent flagging 'this cup holder doesn't pass the crash test.' An orchestrator agent arbitrates between them, balancing the end-project goal against cost, timeline, and safety standards — and can tell a specialist agent 'this is a better option.' When this works, the productivity gain is 'magic'; but it requires rethinking the flow around an orchestrator, not wiring APIs together.

The management-skills corollary (from the UX panelist): interacting with agents requires different team skills — no longer 'A to B' command but a more fluid 'A to get B' where you don't fully know what you'll get out. Clear communication, guidance, and tolerance for volatility become core management skills, and teams need training to lower the barrier to entry.

The caution (Bedrock): treating agents like people has limits today — when Claude says 'I won't do that again,' that correction is lost once it leaves the context window; real coaching that persists requires customization/memory that's 'a ways to go' beyond current capability. So 'treat agents as employees' is the right mental model for integration design, but the persistence/memory to truly coach them isn't fully there yet.

This sharpens the supervisor-orchestrator pattern (PayPal source, SRC-260530-84B1) with the integration framing: build for onboarding and orchestration, not for API calls.
