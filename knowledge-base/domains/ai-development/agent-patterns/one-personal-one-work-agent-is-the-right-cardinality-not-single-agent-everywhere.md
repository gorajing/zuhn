---
id: INS-260501-91C2
domain: ai-development
topic: agent-patterns
title: >-
  One personal + one work agent is the right cardinality — not
  single-agent-everywhere or sub-agent-per-task
actionability: reference
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - agent-cardinality
  - personal-vs-work
  - agent-architecture
sources:
  - type: youtube
    title: 'Hermes Agent: The New OpenClaw?'
    author: Greg Isenberg
    url: 'https://youtu.be/Qn2c_U-cWQs'
date_extracted: '2026-05-01'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Two agents — personal + work — is the right shape. One is too limited;
    sub-agent-per-task is over-engineering today.
  standard: >-
    Imran's recommendation after running 4 personal agents: the optimal
    cardinality is two — one personal, one work — because most Fortune 500
    companies won't allow personal-agent stuff on work computers, but you still
    want the productivity gains in both contexts. Sub-agents per specific
    workflow (Gmail triage, expense reports, etc.) sound right but are
    over-engineering today; cron jobs within a single agent work just as well
    and don't add per-sub-agent management overhead.


    The practical UX corollary: he uses Obsidian as the daily dashboard for his
    Hermes agent, with markdown files for home (this week's important things),
    today's todos, upcoming travel, day-job context, personal context — all
    auto-organized by the agent every morning. The agent built that Obsidian
    structure after ~20 days of usage by learning his patterns. For builders of
    personal-agent products: don't push users toward elaborate sub-agent
    topologies. Ship one solid agent per personal/professional split. For Zuhn
    specifically: this maps to the existing structure (one Zuhn knowledge base,
    one Zuun memory layer for code work) — the right cardinality is task-scoped,
    not workflow-scoped.
stance: >-
  The sweet spot for personal-agent deployment is two agents (personal + work)
  sharing memory within scope but isolated across scope, rather than one
  universal agent (privacy/work-environment conflicts) or a fleet of sub-agents
  per workflow (over-engineering for current capability).
related:
  - INS-260321-C5AA
  - INS-260327-73CB
  - INS-260330-AB67
  - INS-260405-8166
  - INS-260403-4120
  - INS-260409-B2B5
  - INS-260410-D92A
  - INS-260410-096F
  - INS-260411-F590
  - INS-260423-FF53
---
Imran's recommendation after running 4 personal agents: the optimal cardinality is two — one personal, one work — because most Fortune 500 companies won't allow personal-agent stuff on work computers, but you still want the productivity gains in both contexts. Sub-agents per specific workflow (Gmail triage, expense reports, etc.) sound right but are over-engineering today; cron jobs within a single agent work just as well and don't add per-sub-agent management overhead.

The practical UX corollary: he uses Obsidian as the daily dashboard for his Hermes agent, with markdown files for home (this week's important things), today's todos, upcoming travel, day-job context, personal context — all auto-organized by the agent every morning. The agent built that Obsidian structure after ~20 days of usage by learning his patterns. For builders of personal-agent products: don't push users toward elaborate sub-agent topologies. Ship one solid agent per personal/professional split. For Zuhn specifically: this maps to the existing structure (one Zuhn knowledge base, one Zuun memory layer for code work) — the right cardinality is task-scoped, not workflow-scoped.
