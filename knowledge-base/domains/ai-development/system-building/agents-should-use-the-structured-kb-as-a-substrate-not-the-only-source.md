---
id: INS-260409-A3EC
domain: ai-development
topic: system-building
title: 'Agents should use the structured KB as a substrate, not the only source'
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - augmentation
  - web-search
  - kb-limits
  - hybrid-retrieval
  - agent-design
sources:
  - type: youtube
    title: 'Karpathy의 Obsidian RAG와 Claude Code 조합, 정말 치트키입니다'
    author: Tech Bridge
    url: 'https://youtu.be/k9r2pIYYV9k'
date_extracted: '2026-04-09'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    The KB is a curated prior; agents should still fetch fresh web content to
    supplement it.
  standard: >-
    The video demonstrates Claude Code creating a new wiki topic by starting
    from the RAW folder content and then performing fresh web searches to fill
    gaps. This is the right composition: the vault encodes what the human has
    already decided matters (the curation signal), and live web search covers
    the long tail the human hasn't seen yet. A KB-only agent is blind to recent
    developments; a web-only agent ignores the human's hard-won prioritization.
    The two together give the agent both memory and reach.
stance: >-
  A coding agent attached to a curated markdown KB should still be allowed to
  fetch fresh web content on demand, because the human-curated vault reflects
  what the human already thought important, not the full space of relevant
  information.
related:
  - INS-260322-D8C3
  - INS-260410-F910
  - INS-260328-9C16
  - INS-260405-F26B
  - INS-260410-71B9
---
The video demonstrates Claude Code creating a new wiki topic by starting from the RAW folder content and then performing fresh web searches to fill gaps. This is the right composition: the vault encodes what the human has already decided matters (the curation signal), and live web search covers the long tail the human hasn't seen yet. A KB-only agent is blind to recent developments; a web-only agent ignores the human's hard-won prioritization. The two together give the agent both memory and reach.
