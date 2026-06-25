---
id: INS-260625-9721
domain: automation
topic: self-improving-systems
title: >-
  Mine your own agent conversation logs to discover the skills and tools you're
  missing
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - self-improvement
  - conversation-logs
  - skills
  - scheduled-jobs
  - feedback-loop
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
    Treat your saved session transcripts as gold and run scheduled passes that
    find where you struggled, then build the missing skills.
  standard: >-
    Because Claude Code saves all conversations locally as JSONL, Proser runs a
    scheduled pass (end of day or week) where an agent reviews his own
    transcripts hunting for patterns of struggle: places that burned excessive
    thinking tokens, or required many back-and-forth rounds to eliminate
    ambiguity. The prompt asks 'what's the delta if you had this skill, MCP
    server, or tool — how could we tighten that loop so it doesn't happen next
    week?' This turns ordinary daily work into a compounding self-improvement
    loop, since Claude Code now has a built-in skill that can build, evaluate,
    and improve its own skills from natural language. A practical caveat raised
    in Q&A: raw JSONL is verbose and not built for AI consumption, so a cleaner
    pattern is using session-end hooks to extract the key moments (especially
    struggle and churn) into a separate markdown/Obsidian store, then run the
    analysis over that distilled log. The non-obvious move is that the
    bottleneck-reducing improvements come from your own friction data, not from
    generic best-practice advice.
stance: >-
  Periodically having an agent analyze your saved conversation history for
  friction and churn reveals the missing skills, MCP servers, and tools that
  would tighten future loops.
related:
  - INS-260322-C6CE
  - INS-260329-E86C
  - INS-260320-F8FD
  - INS-260605-749D
  - INS-260605-6722
---
Because Claude Code saves all conversations locally as JSONL, Proser runs a scheduled pass (end of day or week) where an agent reviews his own transcripts hunting for patterns of struggle: places that burned excessive thinking tokens, or required many back-and-forth rounds to eliminate ambiguity. The prompt asks 'what's the delta if you had this skill, MCP server, or tool — how could we tighten that loop so it doesn't happen next week?' This turns ordinary daily work into a compounding self-improvement loop, since Claude Code now has a built-in skill that can build, evaluate, and improve its own skills from natural language. A practical caveat raised in Q&A: raw JSONL is verbose and not built for AI consumption, so a cleaner pattern is using session-end hooks to extract the key moments (especially struggle and churn) into a separate markdown/Obsidian store, then run the analysis over that distilled log. The non-obvious move is that the bottleneck-reducing improvements come from your own friction data, not from generic best-practice advice.
