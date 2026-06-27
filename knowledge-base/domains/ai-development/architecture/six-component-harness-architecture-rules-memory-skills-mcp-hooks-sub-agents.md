---
id: INS-260514-4FDC
domain: ai-development
topic: architecture
title: >-
  Six-component harness architecture: rules + memory + skills + MCP + hooks +
  sub-agents
actionability: reference
confidence: high
shelf_life: time-sensitive
status: active
tags:
  - harness-architecture
  - codex
  - agent-design
  - three-layer-control
  - manu-codex
sources:
  - type: youtube
    title: Codex 마스터 클래스 라이브 | 하네스 설계부터 서비스 배포까지 (라이브 마지막에는 작은 이벤트도 준비했습니다)
    author: 개발동생
    url: 'https://www.youtube.com/live/F5pr-hfyuEE'
date_extracted: '2026-05-14'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Codex harness = 6 components in 3 layers: STANDARDS (agent.md + memory),
    PROCEDURES (skills + MCP), EXECUTION (hooks + sub-agents). Each layer
    answers a distinct question — confusing them produces broken harnesses.
  standard: >-
    Manu's three-layer mental model for harness engineering: (1) STANDARDS layer
    = agent.md (rule files that agents always read first) + memory (saved
    preferences/lessons from prior sessions). This sets the WHAT — what should
    always be true? What conventions apply? What did we learn from previous
    mistakes? (2) PROCEDURES layer = skills (packaged repetitive procedures with
    front-matter, references, scripts, optional sub-agents) + MCP (Model Context
    Protocol — connects external tools like Slack, Gmail, GitHub, Notion). This
    sets the HOW — how do we do this specific task? How do we reach external
    systems? (3) EXECUTION layer = hooks (programmatic enforcement at runtime
    events like session-start, before-tool-use, turn-finished) + sub-agents
    (specialized parallel contexts). This sets the GUARANTEE — what MUST be true
    regardless of what the agent might choose? What needs separate context? Each
    layer answers a structurally different question. The failure mode of
    treating the harness as one undifferentiated bag of stuff: people put
    behavioral rules in skills (wrong layer — should be in agent.md or hooks),
    put hard guarantees in agent.md (wrong layer — agent.md is judgment-based,
    not enforced), and put parallelization needs in skills (wrong layer — should
    be sub-agents). Two configuration paths in Codex: ~/.codex/ for environment
    settings (auth, status, history, logs, memory, hooks, execution state) and
    ~/.agent/ for shared global skills. The corollary for any agent framework
    (Claude Code, Codex, Cursor, Pi.dev): same six-component pattern emerges in
    all of them under different names. Lopopolo's persona reviewers =
    sub-agents. Pi.dev extensions = skills + hooks combined. Hai Nghiem's skills
    vs sub-agents distinction = same as Codex's. When evaluating a new agent
    framework, map its abstractions to these six components — anything missing
    is a structural gap; anything redundant suggests the framework will have
    confused users.
stance: >-
  A complete coding-agent harness has exactly six components that map to three
  layers of control: rules (agent.md) and memory establish STANDARDS, skills and
  MCP control PROCEDURES, hooks and sub-agents control EXECUTION — failure to
  distinguish between these layers produces harnesses that are simultaneously
  over-engineered in some places and missing critical controls elsewhere.
related:
  - INS-260410-EE37
  - PRI-260426-890F
  - INS-260626-4639
  - INS-260626-5B28
  - INS-260605-C33F
  - INS-260524-2C7C
  - INS-260514-283E
  - INS-260605-8C71
  - INS-260605-D818
  - INS-260619-B1A8
---
Manu's three-layer mental model for harness engineering: (1) STANDARDS layer = agent.md (rule files that agents always read first) + memory (saved preferences/lessons from prior sessions). This sets the WHAT — what should always be true? What conventions apply? What did we learn from previous mistakes? (2) PROCEDURES layer = skills (packaged repetitive procedures with front-matter, references, scripts, optional sub-agents) + MCP (Model Context Protocol — connects external tools like Slack, Gmail, GitHub, Notion). This sets the HOW — how do we do this specific task? How do we reach external systems? (3) EXECUTION layer = hooks (programmatic enforcement at runtime events like session-start, before-tool-use, turn-finished) + sub-agents (specialized parallel contexts). This sets the GUARANTEE — what MUST be true regardless of what the agent might choose? What needs separate context? Each layer answers a structurally different question. The failure mode of treating the harness as one undifferentiated bag of stuff: people put behavioral rules in skills (wrong layer — should be in agent.md or hooks), put hard guarantees in agent.md (wrong layer — agent.md is judgment-based, not enforced), and put parallelization needs in skills (wrong layer — should be sub-agents). Two configuration paths in Codex: ~/.codex/ for environment settings (auth, status, history, logs, memory, hooks, execution state) and ~/.agent/ for shared global skills. The corollary for any agent framework (Claude Code, Codex, Cursor, Pi.dev): same six-component pattern emerges in all of them under different names. Lopopolo's persona reviewers = sub-agents. Pi.dev extensions = skills + hooks combined. Hai Nghiem's skills vs sub-agents distinction = same as Codex's. When evaluating a new agent framework, map its abstractions to these six components — anything missing is a structural gap; anything redundant suggests the framework will have confused users.
