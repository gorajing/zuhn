---
id: INS-260625-23CF
domain: ai-development
topic: agent-patterns
title: Agent-facing tools should maximize handles — the inverse of human UX
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - cli
  - agent-ux
  - tool-design
  - telemetry
  - developer-tools
  - interface-design
sources:
  - type: youtube
    title: >-
      The Agent-Native Cloud: 3M Users, 100K Signups/Wk, Data Centers, & Death
      PRs — Jake Cooper, Railway
    author: Latent Space
    url: 'https://www.youtube.com/watch?v=LzCUYNP5UTI'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    A CLI with 40 arguments and 600 flags overwhelms a human but delights an
    agent — so agent interfaces should maximize handles, and telemetry on where
    agents deviate from the happy path should drive which handles you add.
  standard: >-
    Cooper inverts a deep UX intuition: things that were prohibitively annoying
    to humans — a CLI with 40 arguments and 600 flags — are not annoying to
    agents but excellent, because each flag is another handle the agent can grab
    to query information and close its loop. So when designing for agents, you
    want as many handles as possible: ways to get information, pull dynamic
    state, and act, so the agent can iterate to completion as fast as possible.
    The CLI becomes the ideal agent surface precisely because a single command
    maps cleanly to a single intent (deploy, get logs), giving the model a
    reliable 'handhold.'


    The second half is a measurable feedback loop: instrument the interface with
    telemetry to find exactly where agents get stuck or deviate from the happy
    path. Cooper's example — 12% of users deviating because of a missing
    capability, add one argument, deviation drops to 2% — turns interface design
    into a data-driven loop-closing exercise rather than taste. The actionable
    principle for anyone shipping agent tools: stop optimizing for human
    minimalism, expose every dimension of control as an explicit handle, and let
    deviation telemetry tell you which handle to add next. The same logic
    generalizes from the CLI to every surface (dashboard, canvas): each becomes
    a user journey whose only job is to remove whatever blocks the iteration
    loop from closing quickly.
stance: >-
  Tools exposed to agents should expose the maximum number of flags, arguments,
  and queryable handles, the exact opposite of the minimalism good human UX
  demands.
related:
  - INS-260410-9D86
  - PRI-260411-64C7
  - INS-260405-A992
  - INS-260519-20E0
  - INS-260327-C1A4
  - INS-260627-F9F3
---
Cooper inverts a deep UX intuition: things that were prohibitively annoying to humans — a CLI with 40 arguments and 600 flags — are not annoying to agents but excellent, because each flag is another handle the agent can grab to query information and close its loop. So when designing for agents, you want as many handles as possible: ways to get information, pull dynamic state, and act, so the agent can iterate to completion as fast as possible. The CLI becomes the ideal agent surface precisely because a single command maps cleanly to a single intent (deploy, get logs), giving the model a reliable 'handhold.'

The second half is a measurable feedback loop: instrument the interface with telemetry to find exactly where agents get stuck or deviate from the happy path. Cooper's example — 12% of users deviating because of a missing capability, add one argument, deviation drops to 2% — turns interface design into a data-driven loop-closing exercise rather than taste. The actionable principle for anyone shipping agent tools: stop optimizing for human minimalism, expose every dimension of control as an explicit handle, and let deviation telemetry tell you which handle to add next. The same logic generalizes from the CLI to every surface (dashboard, canvas): each becomes a user journey whose only job is to remove whatever blocks the iteration loop from closing quickly.
