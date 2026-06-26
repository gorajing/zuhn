---
id: INS-260605-0819
domain: ai-development
topic: system-building
title: >-
  Start with a general-purpose search tool, log behavior, then carve out
  specialized tools
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agentic-search
  - observability
  - tool-design
  - iteration
sources:
  - type: youtube
    title: 'Agentic Search for Context Engineering — Leonie Monigatti, Elastic'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=ynJyIKwjonM'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Begin general-purpose, log every tool call, and treat 4-5 tool calls per
    question as a signal the agent needs a more specialized tool for that
    pattern.
  standard: >-
    The low-floor/high-ceiling balance assumes you already know your agent's
    behavior. When you don't, Monigatti recommends starting with a
    general-purpose tool (shell or query-execution) and logging the agent's
    behavior, then specializing from evidence rather than guessing the tool
    stack upfront.


    The concrete diagnostic: if the agent routinely takes four or five tool
    calls to answer one question, that's too many — it signals the available
    tool is too hard for the model to use, and you should inspect what it's
    actually trying to do and scope a specialized tool for that pattern. She did
    exactly this with a personal OpenCloud agent that only had an exec tool:
    after three days of logged database interactions, she asked the agent itself
    what patterns it saw, and it recommended specific search tools to build. The
    loop is: general-purpose first → log → detect friction → carve out
    purpose-built interfaces.
stance: >-
  When you don't yet know your agent's query distribution, ship a
  general-purpose tool first and let observed usage tell you which specialized
  tools to build.
related:
  - INS-260410-F5EC
  - INS-260410-5D66
  - INS-260501-F826
  - INS-260514-1841
  - INS-260624-B6EA
  - INS-260605-6591
  - INS-260410-095B
  - INS-260605-D0A0
  - INS-260605-1A2D
---
The low-floor/high-ceiling balance assumes you already know your agent's behavior. When you don't, Monigatti recommends starting with a general-purpose tool (shell or query-execution) and logging the agent's behavior, then specializing from evidence rather than guessing the tool stack upfront.

The concrete diagnostic: if the agent routinely takes four or five tool calls to answer one question, that's too many — it signals the available tool is too hard for the model to use, and you should inspect what it's actually trying to do and scope a specialized tool for that pattern. She did exactly this with a personal OpenCloud agent that only had an exec tool: after three days of logged database interactions, she asked the agent itself what patterns it saw, and it recommended specific search tools to build. The loop is: general-purpose first → log → detect friction → carve out purpose-built interfaces.
