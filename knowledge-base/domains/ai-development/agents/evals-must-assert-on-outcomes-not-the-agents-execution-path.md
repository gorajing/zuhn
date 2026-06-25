---
id: INS-260605-8E69
domain: ai-development
topic: agents
title: 'Evals must assert on outcomes, not the agent''s execution path'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - evals
  - agent-evaluation
  - regression-testing
  - model-migration
  - test-design
sources:
  - type: youtube
    title: >-
      Ship Real Agents: Hands-On Evals for Agentic Applications — Laurie Voss,
      Arize
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=Xfl50508LZM'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Don't test 'it called tool A then B then decided C' — test only whether it
    reached the right answer, or your evals shatter on every model upgrade.
  standard: >-
    Agents are non-deterministic in their path: the same query may trigger one
    web search or five, and a model upgrade often makes the agent solve the same
    task in fewer, cleverer steps. An eval that hardcodes the expected toolchain
    or step count will flag these improvements as regressions. Voss's rule: 'the
    path the agent took matters less than where it ended up.' Check the produced
    artifact (did it mention the ticker? is it valid JSON? under the token
    limit? contains the required recommendation?), and be flexible in parsing
    equivalent-but-different correct answers ('2 hours' = '120 minutes'). The
    one exception is when behavior itself is the requirement (e.g., 'verify
    identity before issuing a refund'), in which case you should also test the
    negative case — that the behavior does NOT fire when it shouldn't — so the
    agent can't cheat by always doing it.
stance: >-
  Prescriptive evals that check the sequence of steps an agent took will break
  precisely when the agent gets smarter and finds a better path.
related:
  - INS-260327-B17E
  - INS-260402-AD42
  - INS-260403-5C1D
  - INS-260410-14E5
  - INS-260423-8403
  - INS-260602-EA48
  - INS-260605-0312
  - INS-260605-FE67
  - INS-260605-D0A0
  - INS-260410-AB4A
---
Agents are non-deterministic in their path: the same query may trigger one web search or five, and a model upgrade often makes the agent solve the same task in fewer, cleverer steps. An eval that hardcodes the expected toolchain or step count will flag these improvements as regressions. Voss's rule: 'the path the agent took matters less than where it ended up.' Check the produced artifact (did it mention the ticker? is it valid JSON? under the token limit? contains the required recommendation?), and be flexible in parsing equivalent-but-different correct answers ('2 hours' = '120 minutes'). The one exception is when behavior itself is the requirement (e.g., 'verify identity before issuing a refund'), in which case you should also test the negative case — that the behavior does NOT fire when it shouldn't — so the agent can't cheat by always doing it.
