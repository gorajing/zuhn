---
id: INS-260626-F6DA
domain: ai-development
topic: agent-evals
title: >-
  Self-verifying systems are the precondition for delegating code without
  reading it
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - verification
  - self-testing
  - trust
  - computer-use
  - e2e-tests
  - playwright
sources:
  - type: youtube
    title: 'Building your own software factory — Eric Zakariasson, Cursor'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=rnDm57Py54A'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    If you trust the tests, you can trust the output without looking at the code
    — so the highest-leverage investment is building systems agents can use to
    verify their own work.
  standard: >-
    Zakariasson argues the area teams underinvest in is verifiable systems: how
    can the agent verify its own work via unit, integration, or UI tests? This
    is the lever that lets a manager move 'way less code, looking at less code'
    without losing confidence. Verification is harder for UI than backend —
    backends have clear contracts and boundaries, while web UIs require actually
    clicking around in the DOM to confirm a button has a loading spinner.
    Cursor's answers include agents writing their own Playwright end-to-end
    tests, automated code review (Bugbot), and cloud agents that control the
    computer to record a video of themselves testing the change. An audience
    member reframed it sharply: instead of using AI for velocity, use AI to
    improve the tests and make the codebase 'completely AI ready' — because once
    a human trusts the tests, they trust the output even without reading the
    code. The longer you want agents to run autonomously, the more
    non-negotiable self-verification becomes.
stance: >-
  Investing in agent self-verification (tests, UI clicking, computer use) is
  what unlocks trusting agent output without reviewing the code.
related:
  - INS-260329-DC86
  - INS-260330-D5CD
  - INS-260403-5C1D
  - INS-260403-2DF9
  - INS-260402-3866
  - INS-260410-DABE
  - INS-260605-824F
  - INS-260605-3AFB
  - INS-260625-B6E8
  - INS-260626-E636
---
Zakariasson argues the area teams underinvest in is verifiable systems: how can the agent verify its own work via unit, integration, or UI tests? This is the lever that lets a manager move 'way less code, looking at less code' without losing confidence. Verification is harder for UI than backend — backends have clear contracts and boundaries, while web UIs require actually clicking around in the DOM to confirm a button has a loading spinner. Cursor's answers include agents writing their own Playwright end-to-end tests, automated code review (Bugbot), and cloud agents that control the computer to record a video of themselves testing the change. An audience member reframed it sharply: instead of using AI for velocity, use AI to improve the tests and make the codebase 'completely AI ready' — because once a human trusts the tests, they trust the output even without reading the code. The longer you want agents to run autonomously, the more non-negotiable self-verification becomes.
