---
id: INS-260410-85AD
domain: ai-development
topic: agent-patterns
title: >-
  Force agents to do end-to-end testing through real browser automation, not
  unit tests
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agents
  - verification
  - testing
  - browser-automation
  - puppeteer
sources:
  - type: blog
    title: Effective harnesses for long-running agents
    url: >-
      https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Give the agent browser automation (e.g., Puppeteer MCP) and explicitly
    prompt it to verify every feature as a human user would, end-to-end.
  standard: >-
    Anthropic's most stubborn failure mode wasn't bad code — it was Claude
    marking features 'done' after passing unit tests or curling an endpoint,
    while the actual user-facing flow was broken. Without explicit prompting to
    test like a user, the agent's verification stops short of the screen.


    The fix is two-part: provide a real browser automation tool (Puppeteer MCP
    via screenshots) and explicitly instruct the agent to use it for every
    feature. Performance improved dramatically because the agent could see what
    the user would see and catch bugs invisible from code alone. Limitations
    remain — Claude can't see browser-native alert modals through Puppeteer, so
    features that depend on those stay buggier — which suggests the rule
    generalizes: test fidelity is bounded by what the verification tool can
    perceive.
stance: >-
  Coding agents that verify only with unit tests or curl will mark broken
  features as passing; only real user-path browser testing catches the failures
  that matter.
related:
  - INS-260323-4B4D
  - INS-260321-C5AA
  - PRI-260320-097F
  - INS-260327-13B3
  - INS-260327-63B5
  - INS-260410-9EA8
  - INS-260410-38C8
  - INS-260410-CD79
  - INS-260410-9D86
  - INS-260410-315B
---
Anthropic's most stubborn failure mode wasn't bad code — it was Claude marking features 'done' after passing unit tests or curling an endpoint, while the actual user-facing flow was broken. Without explicit prompting to test like a user, the agent's verification stops short of the screen.

The fix is two-part: provide a real browser automation tool (Puppeteer MCP via screenshots) and explicitly instruct the agent to use it for every feature. Performance improved dramatically because the agent could see what the user would see and catch bugs invisible from code alone. Limitations remain — Claude can't see browser-native alert modals through Puppeteer, so features that depend on those stay buggier — which suggests the rule generalizes: test fidelity is bounded by what the verification tool can perceive.
