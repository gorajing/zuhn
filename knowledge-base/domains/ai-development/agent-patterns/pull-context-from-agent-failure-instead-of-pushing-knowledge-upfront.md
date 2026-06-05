---
id: INS-260605-800F
domain: ai-development
topic: agent-patterns
title: Pull context from agent failure instead of pushing knowledge upfront
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - context-management
  - rag
  - onboarding
  - institutional-knowledge
sources:
  - type: youtube
    title: >-
      Demand-Driven Context: A Methodology for Coherent Knowledge Bases Through
      Agent Failure
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=_QAVExf_1uw'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Onboard agents like new hires — assign a task first and let them pull the
    knowledge they're missing, rather than graduating them on all documentation
    before any work.
  standard: >-
    The default enterprise approach is a 'push' strategy: build RAG pipelines,
    MCP servers, and knowledge graphs over Confluence/Jira/SharePoint, then dump
    everything onto the agent. This caps out around 40% factual accuracy and
    forces humans into a perpetual data-entry role filling gaps. The
    demand-driven alternative is a 'pull' strategy modeled on human onboarding —
    you don't make a new joiner graduate on all docs before assigning work; you
    give them a task and they ask questions, fill gaps, and document as they go.
    Applied to agents: assign a real work item (an incident, a Jira ticket), let
    the agent attempt it and fail, and have it emit a checklist of exactly what
    knowledge it needs. The human fills only those specific gaps. Over many
    cycles the agent's effective institutional knowledge climbs (the speaker
    measured confidence rising from ~1.4 to ~4.4 across 14 incidents), and the
    knowledge base is curated as a byproduct rather than as upfront busywork.
stance: >-
  Letting agents fail tasks and demand the knowledge they lack beats pre-loading
  all institutional context into retrieval layers.
related:
  - INS-260320-63D3
  - INS-260403-BACA
  - INS-260501-4C5E
  - INS-260514-5914
  - INS-260530-E697
  - INS-260605-AD25
  - INS-260605-E642
  - INS-260326-7B2A
---
The default enterprise approach is a 'push' strategy: build RAG pipelines, MCP servers, and knowledge graphs over Confluence/Jira/SharePoint, then dump everything onto the agent. This caps out around 40% factual accuracy and forces humans into a perpetual data-entry role filling gaps. The demand-driven alternative is a 'pull' strategy modeled on human onboarding — you don't make a new joiner graduate on all docs before assigning work; you give them a task and they ask questions, fill gaps, and document as they go. Applied to agents: assign a real work item (an incident, a Jira ticket), let the agent attempt it and fail, and have it emit a checklist of exactly what knowledge it needs. The human fills only those specific gaps. Over many cycles the agent's effective institutional knowledge climbs (the speaker measured confidence rising from ~1.4 to ~4.4 across 14 incidents), and the knowledge base is curated as a byproduct rather than as upfront busywork.
