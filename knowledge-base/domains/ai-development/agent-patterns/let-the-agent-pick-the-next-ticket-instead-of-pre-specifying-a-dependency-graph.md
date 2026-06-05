---
id: INS-260605-0AD6
domain: ai-development
topic: agent-patterns
title: >-
  Let the agent pick the next ticket instead of pre-specifying a dependency
  graph
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - ralph-loops
  - orchestration
  - agentic-workflows
  - waterfall
  - task-decomposition
sources:
  - type: youtube
    title: 'Ralph Loops: Build Dumb AI Loops That Ship — Chris Parsons, Cherrypick'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=2TLXsxkz0zI'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Don't pre-specify task dependencies for an agent loop — give it a flat
    backlog and ask it to pick the next most important item, recomputing
    dependencies on the fly.
  standard: >-
    Parsons' first attempt at scaling Ralph loops failed badly: he had Claude
    break a project into tickets, sub-tickets, and a full dependency graph, then
    fired six or seven parallel agents at it. The agents couldn't tell what was
    done, contended over shared tickets, and duplicated work — he had
    effectively recreated 1990s waterfall, handing a fully-specified up-front
    plan to the development team. The fix was to abandon the graph entirely and
    run a simple loop: 'pick the next most important ticket.' The AI is
    perfectly capable of looking at all the tickets, inferring dependencies from
    what has just been done, and choosing the next action — it just can't manage
    that process reliably in parallel. The general principle: resist the urge to
    over-orchestrate. Encode the work as a flat list and let the agent's
    per-iteration judgment do the sequencing.
stance: >-
  Telling an AI to 'pick the next most important ticket' from a flat backlog
  outperforms handing it a pre-computed dependency graph of tasks.
related:
  - INS-260411-BCB0
  - INS-260501-247C
  - INS-260405-3B54
  - INS-260409-0DB0
  - INS-260410-1030
  - INS-260524-2C7C
---
Parsons' first attempt at scaling Ralph loops failed badly: he had Claude break a project into tickets, sub-tickets, and a full dependency graph, then fired six or seven parallel agents at it. The agents couldn't tell what was done, contended over shared tickets, and duplicated work — he had effectively recreated 1990s waterfall, handing a fully-specified up-front plan to the development team. The fix was to abandon the graph entirely and run a simple loop: 'pick the next most important ticket.' The AI is perfectly capable of looking at all the tickets, inferring dependencies from what has just been done, and choosing the next action — it just can't manage that process reliably in parallel. The general principle: resist the urge to over-orchestrate. Encode the work as a flat list and let the agent's per-iteration judgment do the sequencing.
