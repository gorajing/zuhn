---
id: INS-260605-B5A2
domain: ai-development
topic: agent-patterns
title: >-
  A persistent file system turns tool-stuffed agents into reliable
  task-completers
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agents
  - context-engineering
  - file-system
  - scratchpad
  - planning
sources:
  - type: youtube
    title: 'Give Your Agent a Computer — Nico Albanese, Vercel'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=wflNENRSUb4'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    An agent that writes its objective and plan to a plan file and checks items
    off as it works stays on-task and stops hallucinating, where the same agent
    with 5-10 tools and no file system did not.
  standard: >-
    Vercel's internal 'D0' agent had access to Salesforce, the admin panel, and
    the full backend, but would call a handful of tools and return a
    partly-hallucinated answer. The fix was not better tools but a file system:
    instructions told it to write an initial plan file with the objective at the
    top, then 'follow this plan to a T, check things off as you go,' and to
    collect research in a directory. Two things changed. First, the agent
    stopped losing its objective in an ever-growing context window, because it
    kept re-reading and reminding itself of the goal at each step. Second, you
    get a durable artifact at the end showing exactly what work was done. The
    mechanism is that the file system holds state that survives context churn,
    so the original objective never gets buried or thrown away. Vercel now backs
    nearly every internal agent (GTM, data, customer support) with this pattern;
    the support agent cut tickets ~90%.
stance: >-
  Giving an agent a scratchpad file system to externalize its plan and research
  outperforms loading it with many tools.
related:
  - INS-260625-3B6D
  - INS-260524-D5DB
  - INS-260327-DC4C
  - INS-260605-9276
  - INS-260625-447A
  - INS-260605-C122
---
Vercel's internal 'D0' agent had access to Salesforce, the admin panel, and the full backend, but would call a handful of tools and return a partly-hallucinated answer. The fix was not better tools but a file system: instructions told it to write an initial plan file with the objective at the top, then 'follow this plan to a T, check things off as you go,' and to collect research in a directory. Two things changed. First, the agent stopped losing its objective in an ever-growing context window, because it kept re-reading and reminding itself of the goal at each step. Second, you get a durable artifact at the end showing exactly what work was done. The mechanism is that the file system holds state that survives context churn, so the original objective never gets buried or thrown away. Vercel now backs nearly every internal agent (GTM, data, customer support) with this pattern; the support agent cut tickets ~90%.
