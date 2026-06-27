---
id: INS-260627-F1AF
domain: ai-development
topic: agent-patterns
title: Reinsert friction as deliberate human judgment at high-stakes boundaries
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - friction
  - human-in-the-loop
  - database-migrations
  - review-tooling
  - judgment
sources:
  - type: youtube
    title: >-
      The Friction is Your Judgment — Armin Ronacher & Cristina Poncela Cubeiro,
      Earendil
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=_Zcw_sVF6hU'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Friction is what lets you steer — so build tooling that routes mechanical
    bugs back to the agent automatically but forces a human judgment call on
    high-stakes changes like DB migrations and permission changes.
  standard: >-
    Engineering teams reflexively try to remove all friction from shipping, but
    friction is also the mechanism that makes you stop and ask 'do I need this
    reliability, this criticality, am I staffed to run it?' — the same purpose
    SLOs serve. Without friction there is no steering. The practical pattern is
    a review tool that separates two classes of feedback: mechanical issues
    (bare-catch violations, lint failures) get routed back to the agent to fix
    automatically, while a distinct channel of human callouts flags changes
    where the human's brain must reactivate. Database migrations should never
    merge without a human judgment call because the safety depends on locks and
    production data size; permission changes demand human attention because
    they're often under-documented. These are areas where 'if we miss it, we
    regret it' — and you will miss it, but the machines can at least surface it
    so you get the jolt to kick into gear. Speed is genuinely addictive and
    productive, but relying on it where you shouldn't is devious; find the spots
    where the speed feels wrong and deliberately put your judgment back in.
stance: >-
  The right response to agent speed is not to remove all friction but to
  deliberately reinsert it at specific high-stakes boundaries where human
  judgment is non-negotiable.
related:
  - INS-260605-8A88
  - INS-260605-C726
  - INS-260605-BBCF
  - INS-260605-0E19
  - INS-260530-D34F
  - INS-260605-27CC
  - INS-260626-6F6E
  - INS-260410-1030
  - INS-260627-4446
---
Engineering teams reflexively try to remove all friction from shipping, but friction is also the mechanism that makes you stop and ask 'do I need this reliability, this criticality, am I staffed to run it?' — the same purpose SLOs serve. Without friction there is no steering. The practical pattern is a review tool that separates two classes of feedback: mechanical issues (bare-catch violations, lint failures) get routed back to the agent to fix automatically, while a distinct channel of human callouts flags changes where the human's brain must reactivate. Database migrations should never merge without a human judgment call because the safety depends on locks and production data size; permission changes demand human attention because they're often under-documented. These are areas where 'if we miss it, we regret it' — and you will miss it, but the machines can at least surface it so you get the jolt to kick into gear. Speed is genuinely addictive and productive, but relying on it where you shouldn't is devious; find the spots where the speed feels wrong and deliberately put your judgment back in.
