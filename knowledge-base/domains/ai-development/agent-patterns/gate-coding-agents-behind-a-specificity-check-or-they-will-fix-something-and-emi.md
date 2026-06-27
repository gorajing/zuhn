---
id: INS-260625-814D
domain: ai-development
topic: agent-patterns
title: >-
  Gate coding agents behind a specificity check or they will 'fix something' and
  emit noise
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agents
  - coding-agents
  - guardrails
  - reliability
sources:
  - type: youtube
    title: >-
      Self Driving Products: Product Signals to Pull Requests — Joshua Snyder,
      PostHog
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=zMiSRliEzv4'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Before invoking a coding agent, verify the problem is specific enough to act
    on — otherwise the agent will 'fix' something arbitrary and produce noisy
    PRs.
  standard: >-
    PostHog found that if you throw a generic report like 'onboarding is broken'
    at the Claude Agent SDK, it will not refuse or ask for clarification — it
    will confidently attempt a fix, producing a PR that doesn't address anything
    meaningful. The agent's bias toward action becomes a liability when the
    input is underspecified.


    Their pipeline therefore inserts an explicit actionability step that
    classifies a report as not-actionable (keep gathering evidence and return it
    to the pool), needs-human-input (a product decision the agent can't
    responsibly make, routed to a morning inbox), or immediately-actionable
    (write the fix). Source type predicts actionability: Sentry-style errors
    carry precise stack traces a coding agent handles well, while Slack and
    session-replay signals yield generic problems with many possible solutions
    and are far harder to action automatically.


    The principle generalizes to any autonomous agent loop: the agent's
    willingness to act means the gating decision — is this input specific enough
    to deserve an agent at all — must live outside the agent, upstream of
    invocation. Without that gate, eagerness compounds into volume, and volume
    of low-quality output erodes trust in the whole system.
stance: >-
  A coding agent handed a vague problem will always try to fix something, so a
  specificity/actionability gate before invocation is what separates useful
  automation from a flood of meaningless PRs.
related:
  - INS-260325-D540
  - INS-260410-545A
  - INS-260605-6444
  - INS-260605-25B2
  - INS-260605-C627
  - INS-260605-77EB
  - INS-260530-D34F
  - INS-260625-D295
  - INS-260625-14F9
  - INS-260625-3866
---
PostHog found that if you throw a generic report like 'onboarding is broken' at the Claude Agent SDK, it will not refuse or ask for clarification — it will confidently attempt a fix, producing a PR that doesn't address anything meaningful. The agent's bias toward action becomes a liability when the input is underspecified.

Their pipeline therefore inserts an explicit actionability step that classifies a report as not-actionable (keep gathering evidence and return it to the pool), needs-human-input (a product decision the agent can't responsibly make, routed to a morning inbox), or immediately-actionable (write the fix). Source type predicts actionability: Sentry-style errors carry precise stack traces a coding agent handles well, while Slack and session-replay signals yield generic problems with many possible solutions and are far harder to action automatically.

The principle generalizes to any autonomous agent loop: the agent's willingness to act means the gating decision — is this input specific enough to deserve an agent at all — must live outside the agent, upstream of invocation. Without that gate, eagerness compounds into volume, and volume of low-quality output erodes trust in the whole system.
