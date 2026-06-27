---
id: INS-260501-D6B8
domain: startups
topic: hiring
title: >-
  Hiring for agentic engineering should test 'build a system + 10 agents try to
  break it' not whiteboard puzzles
actionability: immediate
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - hiring
  - agentic-engineering
  - interview-design
  - evaluation
sources:
  - type: youtube
    title: 'Andrej Karpathy: From Vibe Coding to Agentic Engineering'
    author: Sequoia Capital
    url: 'https://youtu.be/96jN2OCOfLs'
date_extracted: '2026-05-01'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Hire by giving a real project to build; then run 10 attacker agents at it;
    can the candidate's system survive?
  standard: >-
    Karpathy's reframe of technical interviews: most hiring processes haven't
    been refactored for agentic engineering capability. The right shape is
    'build me a non-trivial project (e.g. a Twitter clone for agents), make it
    secure, then I'm going to run 10 Codex 5.4-X-high agents to try to break it
    — and they should fail.' This tests three things at once: (1) ability to use
    the tooling at depth, (2) judgment about spec, security, and abstractions,
    and (3) robustness against adversarial agents.


    The operational takeaway for any hiring manager building AI-native teams:
    stop using puzzles. They measure the wrong dimension. The new bottleneck is
    whether a candidate can orchestrate agents to produce systems that hold up
    under pressure — which means the interview itself needs to involve agents on
    both sides. This is also a useful lens for self-assessment: if you can't
    survive a Codex-driven attack on your own work, you're not yet at the
    agentic-engineering ceiling.
stance: >-
  Legacy hiring (puzzles, leetcode) is the wrong shape for evaluating the new
  bottleneck, which is multi-agent orchestration, spec ownership, and
  adversarial robustness under tooling.
related:
  - INS-260627-AEC2
  - INS-260605-4688
  - INS-260327-E0B0
  - INS-260327-63B5
  - INS-260605-25B2
---
Karpathy's reframe of technical interviews: most hiring processes haven't been refactored for agentic engineering capability. The right shape is 'build me a non-trivial project (e.g. a Twitter clone for agents), make it secure, then I'm going to run 10 Codex 5.4-X-high agents to try to break it — and they should fail.' This tests three things at once: (1) ability to use the tooling at depth, (2) judgment about spec, security, and abstractions, and (3) robustness against adversarial agents.

The operational takeaway for any hiring manager building AI-native teams: stop using puzzles. They measure the wrong dimension. The new bottleneck is whether a candidate can orchestrate agents to produce systems that hold up under pressure — which means the interview itself needs to involve agents on both sides. This is also a useful lens for self-assessment: if you can't survive a Codex-driven attack on your own work, you're not yet at the agentic-engineering ceiling.
