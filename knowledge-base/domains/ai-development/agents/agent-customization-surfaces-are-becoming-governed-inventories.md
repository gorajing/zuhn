---
id: INS-260626-6F8E
domain: ai-development
topic: agents
title: Agent customization surfaces are becoming governed inventories
actionability: immediate
confidence: high
shelf_life: time-sensitive
status: active
tags:
  - cursor
  - skills
  - mcp
  - governance
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
    Agent traces should record the scope that supplied each active capability:
    user, team, workspace, or run-local.
  standard: >-
    Cursor is collapsing several extension mechanisms into one management
    surface. That is a practical signal that agent configuration is now an
    operational asset, not incidental dotfiles. For Zuhn, a run record should
    distinguish capabilities inherited from global user config, team policy,
    workspace config, and one-off run setup, because those scopes have different
    review and reproducibility properties.
  deep: >-
    The immediate adaptation is small: when AgentRun records tools or skills
    used, include origin_scope and source_ref. Otherwise a future replay may
    fail because a capability came from a team marketplace, private plugin repo,
    or workspace-local hook that is invisible from the code diff.
subtopic: configuration-governance
stance: >-
  Cursor's unified Customize surface treats plugins, skills, MCPs, subagents,
  rules, commands, and hooks as one governed inventory with user, team, and
  workspace scope. AgentRun should mirror this distinction because an agent's
  behavior depends on which layer supplied each capability.
related:
  - INS-260605-A2AD
  - INS-260626-14AE
  - INS-260625-019F
  - INS-260605-C0BF
  - INS-260327-9D50
---
Cursor is collapsing several extension mechanisms into one management surface. That is a practical signal that agent configuration is now an operational asset, not incidental dotfiles. For Zuhn, a run record should distinguish capabilities inherited from global user config, team policy, workspace config, and one-off run setup, because those scopes have different review and reproducibility properties.
