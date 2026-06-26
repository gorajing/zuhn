---
id: INS-260626-E56B
domain: ai-development
topic: agents
title: >-
  Agent capability marketplaces create governance pressure around popularity
  signals
actionability: reference
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - cursor
  - marketplaces
  - governance
  - plugins
sources:
  - type: blog
    title: Customize Cursor · Cursor
    url: 'https://cursor.com/changelog/customize'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Popularity should help discover capabilities, not substitute for provenance
    and permission review.
  standard: >-
    Team-level leaderboards are useful because repeated agent setup should not
    be reinvented by every user. The constraint is that extension popularity is
    not safety. Zuhn's registry should treat popularity or prior-use counts as a
    ranking feature only after capability provenance, permission surface, and
    maintenance status are captured.
  deep: >-
    The failure mode is a local version of supply-chain drift: a popular MCP or
    skill becomes a default dependency without anyone remembering what it can
    access. AgentRun can counter that by tying capability use to explicit
    source, scope, and permission metadata.
subtopic: marketplaces
stance: >-
  Cursor's team marketplace leaderboard makes plugin, skill, and MCP adoption
  visible inside a team. This helps standardize useful setups, but it also risks
  popularity-driven installation unless the marketplace is paired with policy,
  provenance, and threat review.
related:
  - INS-260403-63E6
  - INS-260404-D45D
  - INS-260501-01A5
  - INS-260501-06B1
  - INS-260519-08E0
  - INS-260327-24D2
  - INS-260320-A4BF
  - INS-260626-7C7B
---
Team-level leaderboards are useful because repeated agent setup should not be reinvented by every user. The constraint is that extension popularity is not safety. Zuhn's registry should treat popularity or prior-use counts as a ranking feature only after capability provenance, permission surface, and maintenance status are captured.
