---
id: INS-260605-CF2E
domain: ai-development
topic: system-building
title: 'Fix context before retrieval, not during live operations'
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - context-engineering
  - scoping
  - automation
  - knowledge-base
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
    Run a scanner over archived tickets to repair context as a one-time scoped
    pass, rather than making humans answer agent questions live during every
    operation.
  standard: >-
    The speaker started by fixing context operationally — assign a work item,
    the agent fails, then fill context in real time — and found it intolerably
    slow and patience-draining; nobody will sit with an agent per incident. The
    better move is to fix context before retrieval: scope down to the smallest
    team (its Jira tickets, incidents, and Confluence pages), then run an
    automated context-gap scanner across that team's archived work items to
    produce a prioritized Kanban board of what's missing, classified
    critical/high/medium and tagged clean/stale/incomplete/missing/tribal. A
    good domain expert can then repair 60-80% of the documentation in a couple
    of weeks. Two enabling facts make this practical: per-domain context
    averages ~96K tokens, which fits a single context window (often
    outperforming graph RAG at that scale), and the scan is cheap enough to run
    repeatedly. Critically, scope is the binding constraint — at enterprise or
    even full-domain scale no single person holds the expertise, so the approach
    only works drilled down to a small team where one expert can actually fill
    the gaps.
stance: >-
  Batch-scanning past work items to repair a knowledge base upfront beats fixing
  gaps in real time as agents hit them operationally.
related:
  - INS-260605-CEB5
  - INS-260605-A2AD
  - INS-260605-159E
  - INS-260524-D5DB
  - INS-260501-3502
  - INS-260410-85AD
---
The speaker started by fixing context operationally — assign a work item, the agent fails, then fill context in real time — and found it intolerably slow and patience-draining; nobody will sit with an agent per incident. The better move is to fix context before retrieval: scope down to the smallest team (its Jira tickets, incidents, and Confluence pages), then run an automated context-gap scanner across that team's archived work items to produce a prioritized Kanban board of what's missing, classified critical/high/medium and tagged clean/stale/incomplete/missing/tribal. A good domain expert can then repair 60-80% of the documentation in a couple of weeks. Two enabling facts make this practical: per-domain context averages ~96K tokens, which fits a single context window (often outperforming graph RAG at that scale), and the scan is cheap enough to run repeatedly. Critically, scope is the binding constraint — at enterprise or even full-domain scale no single person holds the expertise, so the approach only works drilled down to a small team where one expert can actually fill the gaps.
