---
id: INS-260625-7CD5
domain: ai-development
topic: productivity
title: >-
  Human attention, not agent capacity, is now the binding constraint on
  AI-assisted work
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - attention
  - burnout
  - agent-orchestration
  - developer-workflow
  - scaling-limits
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
    Agents scale infinitely but human attention degrades under load, so
    attention is the bottleneck to design around.
  standard: >-
    Proser observed that even though agents let him close entire bug-fix loops
    autonomously (Claude Code reading Slack/Linear via MCP, fixing the bug, and
    verifying its own work), he was 'completely fried by 11am' — and Simon
    Willison reported the same after running four parallel agents. The tools are
    'nuclear' while the nervous system is 'ancient.' The practical reframe:
    agents can loop infinitely against verification criteria you give them, but
    humans still own judgment, taste, and knowing when something is actually
    solved. Because output now scales much faster than attention, naively
    scaling your workload linearly with agent capacity produces 'burnout turbo.'
    The correct unit of capacity planning is not how many agents you can spawn
    but how much high-quality attention you can sustain across an 8-hour day and
    the next one. This inverts the historical assumption that tooling was the
    scarce resource.
stance: >-
  As agents scale infinitely, developer throughput is capped by finite human
  attention rather than tool capability, so output should be planned against
  attention budget, not agent count.
related:
  - INS-260404-FD88
  - INS-260405-18F3
  - PRI-260411-9CB1
  - INS-260514-4424
  - INS-260325-1D95
  - INS-260603-2F7E
  - INS-260605-A803
---
Proser observed that even though agents let him close entire bug-fix loops autonomously (Claude Code reading Slack/Linear via MCP, fixing the bug, and verifying its own work), he was 'completely fried by 11am' — and Simon Willison reported the same after running four parallel agents. The tools are 'nuclear' while the nervous system is 'ancient.' The practical reframe: agents can loop infinitely against verification criteria you give them, but humans still own judgment, taste, and knowing when something is actually solved. Because output now scales much faster than attention, naively scaling your workload linearly with agent capacity produces 'burnout turbo.' The correct unit of capacity planning is not how many agents you can spawn but how much high-quality attention you can sustain across an 8-hour day and the next one. This inverts the historical assumption that tooling was the scarce resource.
