---
id: INS-260625-A5E7
domain: ai-development
topic: agent-patterns
title: >-
  Give agents verification criteria and self-verification tools so they return a
  closed loop
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - verification
  - agent-autonomy
  - testing-gates
  - hooks
  - constitutional-ai
sources:
  - type: youtube
    title: 'Your Attention Is the Bottleneck, Not Your Agents — Zack Proser, WorkOS'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=so9l_MwS2yg'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Speed requires safety: agents must verify their own work against explicit
    criteria using progressively stronger gates.
  standard: >-
    Proser's key workflow change was telling the agent 'fix this, verify your
    own work, and don't stop until you've done that' — so he returned to a
    completed, self-checked loop instead of a half-broken state needing
    follow-up. He frames verification as tiered gates: Gate 1 is the minimal
    lint/build/unit-test pass (enforced via hooks every time); Gate 2 requires
    the agent to drive a browser and confirm it didn't break a flow like login
    (e.g. Claude Code's --chrome flag); Gate 3 approaches Anthropic's
    constitutional-AI model, where a second agent checks the work against a
    constitution and feeds back required corrections. The principle 'speed
    requires safety' means the faster and more autonomously you let agents run,
    the more rigorous the self-verification must be — otherwise you trade your
    attention savings for a quality liability you can't supervise at scale.
    Concrete starting point: add even one verification gate the agent can run
    unattended.
stance: >-
  Autonomous agents only safely scale when you hand them explicit verification
  criteria and the tools to check their own work, escalating through tiered
  gates as risk rises.
related:
  - INS-260402-876A
  - INS-260403-834C
  - INS-260605-55A6
  - INS-260605-3285
  - INS-260605-07E5
  - INS-260605-80DC
  - INS-260624-9A4B
  - INS-260627-8B75
  - INS-260603-6B3D
  - INS-260627-F457
---
Proser's key workflow change was telling the agent 'fix this, verify your own work, and don't stop until you've done that' — so he returned to a completed, self-checked loop instead of a half-broken state needing follow-up. He frames verification as tiered gates: Gate 1 is the minimal lint/build/unit-test pass (enforced via hooks every time); Gate 2 requires the agent to drive a browser and confirm it didn't break a flow like login (e.g. Claude Code's --chrome flag); Gate 3 approaches Anthropic's constitutional-AI model, where a second agent checks the work against a constitution and feeds back required corrections. The principle 'speed requires safety' means the faster and more autonomously you let agents run, the more rigorous the self-verification must be — otherwise you trade your attention savings for a quality liability you can't supervise at scale. Concrete starting point: add even one verification gate the agent can run unattended.
