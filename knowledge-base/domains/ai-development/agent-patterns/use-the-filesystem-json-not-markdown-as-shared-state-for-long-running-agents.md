---
id: INS-260605-9FCF
domain: ai-development
topic: agent-patterns
title: >-
  Use the filesystem (JSON, not markdown) as shared state for long-running
  agents
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - state-management
  - persistence
  - context-window
  - json
  - handoff
sources:
  - type: youtube
    title: >-
      Anthropic Workshop: Build Agents That Run for Hours — Ash Prabaker &
      Andrew Wilson
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=mR-WAvEPRwE'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Default to a file system of state for long-running loops, and write to JSON
    rather than markdown because models overwrite markdown files but tend not to
    overwrite JSON.
  standard: >-
    For very long-running agents, Anthropic leans on the filesystem for shared
    state instead of the context window. A concrete, hard-won detail: persistent
    artifacts like the feature list are stored as featurelist.json rather than
    markdown, because models will overwrite markdown files but are far less
    likely to clobber JSON. The pattern embeds prompting throughout the loop
    instructing the agent to write learnings and state to a JSON file — a
    timestamped log of 'tried this, evaluated, found this bug, implemented this
    fix, fix worked ✓' — plus a live-updating high-level doc of the file
    structure. These two files leave 'breadcrumbs' so that another model (or a
    human in Claude Code) can grep through, pick up where the autonomous run
    left off, and keep iterating. It also decouples coherence from compaction:
    lossy summaries drift, so structured handoffs via clean files preserve state
    that a compacted context window would lose.
stance: >-
  Persisting agent state and learnings to JSON files on disk is more reliable
  for multi-hour runs than leaning on the context window.
related:
  - INS-260330-82B2
  - INS-260409-0D87
  - INS-260514-23D6
  - INS-260605-1A50
  - INS-260329-CF48
  - INS-260522-EB3C
  - INS-260322-24FB
---
For very long-running agents, Anthropic leans on the filesystem for shared state instead of the context window. A concrete, hard-won detail: persistent artifacts like the feature list are stored as featurelist.json rather than markdown, because models will overwrite markdown files but are far less likely to clobber JSON. The pattern embeds prompting throughout the loop instructing the agent to write learnings and state to a JSON file — a timestamped log of 'tried this, evaluated, found this bug, implemented this fix, fix worked ✓' — plus a live-updating high-level doc of the file structure. These two files leave 'breadcrumbs' so that another model (or a human in Claude Code) can grep through, pick up where the autonomous run left off, and keep iterating. It also decouples coherence from compaction: lossy summaries drift, so structured handoffs via clean files preserve state that a compacted context window would lose.
