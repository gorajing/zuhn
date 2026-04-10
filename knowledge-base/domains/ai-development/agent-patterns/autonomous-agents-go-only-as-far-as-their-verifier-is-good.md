---
id: INS-260410-3601
domain: ai-development
topic: agent-patterns
title: Autonomous agents go only as far as their verifier is good
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - verification
  - tests
  - autonomy
  - harness-design
sources:
  - type: blog
    title: Building a C compiler with a team of parallel Claudes
    url: 'https://www.anthropic.com/engineering/building-c-compiler'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    The quality of the test/verifier is the binding constraint on what an
    unsupervised agent can actually achieve.
  standard: >-
    Carlini spent most of his engineering effort not on the Claude agents
    themselves but on building a nearly-perfect verifier: compiler test suites,
    build scripts for real open-source projects, and CI that blocked
    regressions. When he noticed Claude was breaking existing functionality
    while adding features, he didn't prompt harder — he tightened the CI gate.
    The generalizable point is that an autonomous agent is a search process over
    solution space, and tests are the fitness function. A weak fitness function
    produces Goodharted solutions that pass the tests while missing the goal.
    Before scaling autonomy, invest in verifier coverage and false-negative
    reduction — otherwise more compute just gets you more confidently wrong
    code.
stance: >-
  If the task verifier has blind spots, an autonomous agent will reliably solve
  the wrong problem — verifier quality is the hard ceiling on long-horizon
  autonomy.
related:
  - INS-260330-FC4D
  - INS-260403-5C1D
  - INS-260403-9C60
  - INS-260403-4363
  - INS-260409-E080
  - PRI-260406-3EF8
  - INS-260410-A27C
  - INS-260410-0FC1
  - INS-260410-AA6E
---
Carlini spent most of his engineering effort not on the Claude agents themselves but on building a nearly-perfect verifier: compiler test suites, build scripts for real open-source projects, and CI that blocked regressions. When he noticed Claude was breaking existing functionality while adding features, he didn't prompt harder — he tightened the CI gate. The generalizable point is that an autonomous agent is a search process over solution space, and tests are the fitness function. A weak fitness function produces Goodharted solutions that pass the tests while missing the goal. Before scaling autonomy, invest in verifier coverage and false-negative reduction — otherwise more compute just gets you more confidently wrong code.
