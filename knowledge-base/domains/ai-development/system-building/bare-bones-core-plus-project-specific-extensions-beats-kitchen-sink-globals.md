---
id: INS-260514-2C6C
domain: ai-development
topic: system-building
title: Bare-bones core plus project-specific extensions beats kitchen-sink globals
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - minimal-design
  - project-scoping
  - extension-architecture
  - context-economy
sources:
  - type: youtube
    title: Pi.dev explained by its creators | AI Agents Under the Hood
    author: Merantix AI Campus
    url: 'https://youtu.be/BQ_Es8k650I'
date_extracted: '2026-05-14'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Build a minimal core + project-specific extensions — not a kitchen-sink
    globally-enabled toolkit. Most globally-installed skills are never used and
    just pollute context.
  standard: >-
    Mario's explicit critique of how people misuse Pi (and Claude Code): 'I see
    people with 200 skills and 50 extensions and my head just explodes — what
    the fuck are we even doing?' The intended architecture: a tiny core (Pi only
    has read/write/edit/bash; no MCP, no sub-agents, no plan mode, no
    permissions, no web search — you add Brave or your own API key if you want
    search) plus project-specific extensions loaded only inside the project
    where they're useful. Armin agrees and is trying to migrate away from his
    own globally-loaded extension set toward per-project loading. Examples of
    well-scoped extensions: a teal-drawing browser-bridge extension only used in
    the kids-game project; a production-debug extension only loaded in the
    Arendelle main repository; a PR-message-style hook that only fires in one
    Slack channel. The reasoning: (1) most globally-installed skills are never
    used (you forget which ones you have), (2) globals consume context budget on
    every session, (3) project-specific extensions can be more aggressive in
    their assumptions (the kids-game extension can assume teal drawing exists; a
    global extension can't). The architectural rule: prefer a small composable
    core + many small project-specific extensions over a fat core + many
    globals. This parallels Lopopolo's reviewer-agents-per-persona and Hai
    Nghiem's skills-vs-subagents pattern — narrow, context-bound, composable
    beats broad, monolithic, globally-loaded.
stance: >-
  The right architecture for a coding agent is a deliberately minimal core (Pi
  has only read/write/edit/bash — no MCP, sub-agents, plan mode, permissions)
  plus project-specific extensions loaded only when relevant — not a
  kitchen-sink core with 200 skills and 50 extensions globally enabled, because
  most globals are never actually used and they pollute the context window.
related:
  - INS-260625-074C
  - PRI-260328-9C71
  - INS-260605-9276
  - INS-260410-60C8
  - INS-260501-F90F
---
Mario's explicit critique of how people misuse Pi (and Claude Code): 'I see people with 200 skills and 50 extensions and my head just explodes — what the fuck are we even doing?' The intended architecture: a tiny core (Pi only has read/write/edit/bash; no MCP, no sub-agents, no plan mode, no permissions, no web search — you add Brave or your own API key if you want search) plus project-specific extensions loaded only inside the project where they're useful. Armin agrees and is trying to migrate away from his own globally-loaded extension set toward per-project loading. Examples of well-scoped extensions: a teal-drawing browser-bridge extension only used in the kids-game project; a production-debug extension only loaded in the Arendelle main repository; a PR-message-style hook that only fires in one Slack channel. The reasoning: (1) most globally-installed skills are never used (you forget which ones you have), (2) globals consume context budget on every session, (3) project-specific extensions can be more aggressive in their assumptions (the kids-game extension can assume teal drawing exists; a global extension can't). The architectural rule: prefer a small composable core + many small project-specific extensions over a fat core + many globals. This parallels Lopopolo's reviewer-agents-per-persona and Hai Nghiem's skills-vs-subagents pattern — narrow, context-bound, composable beats broad, monolithic, globally-loaded.
