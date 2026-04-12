---
id: INS-260411-5478
domain: ai-development
topic: agent-patterns
title: Wrap sub-agent hierarchies as tools to enable recursive task decomposition
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - hierarchical-agents
  - agent-tool
  - task-decomposition
  - delegation
  - adk
sources:
  - type: blog
    title: Developer’s guide to multi-agent patterns in ADK- Google Developers Blog
    url: >-
      https://developers.googleblog.com/developers-guide-to-multi-agent-patterns-in-adk/
date_extracted: '2026-04-11'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Use AgentTool to wrap a sub-agent hierarchy as a callable function, letting
    parent agents delegate without managing internals.
  standard: >-
    Google's hierarchical decomposition pattern addresses tasks too large for a
    single agent's context window. A ReportWriter agent doesn't research — it
    delegates to a ResearchAssistant (which itself manages WebSearch and
    Summarizer sub-agents) via AgentTool wrapping.


    The key design insight is that AgentTool collapses an entire multi-agent
    workflow into what looks like a single function call to the parent. This
    creates clean abstraction boundaries — the parent doesn't need to know
    whether the research was done by one agent or ten. This mirrors how
    Anthropic's own multi-agent research system delegates to parallel search
    agents, but Google's ADK makes the wrapping explicit via the AgentTool
    primitive.
stance: >-
  Treating an entire agent workflow as a single callable tool via AgentTool
  enables hierarchical decomposition where high-level agents delegate sub-tasks
  without managing implementation details.
related:
  - INS-260403-24AE
  - INS-260411-6106
  - INS-260327-7F56
  - INS-260327-C1A4
  - INS-260322-DAFB
  - PRI-260328-F0E4
---
Google's hierarchical decomposition pattern addresses tasks too large for a single agent's context window. A ReportWriter agent doesn't research — it delegates to a ResearchAssistant (which itself manages WebSearch and Summarizer sub-agents) via AgentTool wrapping.

The key design insight is that AgentTool collapses an entire multi-agent workflow into what looks like a single function call to the parent. This creates clean abstraction boundaries — the parent doesn't need to know whether the research was done by one agent or ten. This mirrors how Anthropic's own multi-agent research system delegates to parallel search agents, but Google's ADK makes the wrapping explicit via the AgentTool primitive.
