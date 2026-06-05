---
id: INS-260605-27CC
domain: ai-development
topic: agent-patterns
title: Agents in a loop produce slop only when you let them design
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - agent-loops
  - ralph-loop
  - code-review
  - ai-slop
  - guardrails
sources:
  - type: youtube
    title: 'Scaling Agents on Kubernetes with acpx and ACP — Onur Solmaz, OpenClaw'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=VaS2h-dY1-4'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Loop agents on mechanical, verifiable tasks (find shallow bugs, superficial
    refactors); escalate anything requiring fundamental design judgment to a
    human.
  standard: >-
    The common objection to 'just run an agent in a loop' is that it generates
    slop. Solmaz argues this is a category error: the loop is fine as long as
    you constrain what it does. Pointing a looping agent at uncovering shallow,
    easily-fixed bugs is productive; pointing it at design decisions is where
    slop is born. His ACP-X workflow encodes this directly — it does superficial
    refactors autonomously but relays anything needing a fundamental refactor
    back to the human.


    The operational rule is to split agent work by verifiability. Tasks with a
    clear right answer (does the bug reproduce, does CI pass, is this a
    mechanical conflict resolution) can be looped safely because the loop has a
    checkable termination condition. Tasks requiring taste, architecture, or
    tradeoff judgment lack that condition, so a loop just accumulates
    plausible-looking but ungrounded output. The design boundary, not the loop
    itself, is the slop-vs-value dividing line.
stance: >-
  Running an agent in a loop is safe for uncovering shallow bugs but produces
  slop the moment you ask it to design something.
related:
  - INS-260322-CCAA
  - INS-260330-83D5
  - INS-260402-876A
  - INS-260405-6A0C
  - INS-260405-CC9D
  - INS-260403-4A16
  - INS-260410-E977
  - INS-260410-3601
  - INS-260410-9F17
  - INS-260410-BDFF
---
The common objection to 'just run an agent in a loop' is that it generates slop. Solmaz argues this is a category error: the loop is fine as long as you constrain what it does. Pointing a looping agent at uncovering shallow, easily-fixed bugs is productive; pointing it at design decisions is where slop is born. His ACP-X workflow encodes this directly — it does superficial refactors autonomously but relays anything needing a fundamental refactor back to the human.

The operational rule is to split agent work by verifiability. Tasks with a clear right answer (does the bug reproduce, does CI pass, is this a mechanical conflict resolution) can be looped safely because the loop has a checkable termination condition. Tasks requiring taste, architecture, or tradeoff judgment lack that condition, so a loop just accumulates plausible-looking but ungrounded output. The design boundary, not the loop itself, is the slop-vs-value dividing line.
