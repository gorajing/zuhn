---
id: INS-260326-9402
domain: ai-development
topic: agent-patterns
title: Four agentic design patterns form the foundation of practical AI agent systems
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agentic-workflows
  - design-patterns
  - reflection
  - multi-agent
sources:
  - type: youtube
    title: >-
      Andrew Ng Explores The Rise Of AI Agents And Agentic Reasoning | BUILD
      2024 Keynote
    author: Snowflake Inc.
    url: 'https://www.youtube.com/watch?v=KrRD7r7y7NY'
date_extracted: '2026-03-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Andrew Ng identifies four core agentic design patterns — reflection, tool
    use, planning, and multi-agent collaboration — that when combined enable AI
    systems to iteratively solve problems far beyond zero-shot capability.
  standard: >-
    Ng breaks down agentic AI into four composable design patterns. Reflection
    involves prompting an LLM to critique its own output, then feeding that
    criticism back to improve results — like having a coder agent generate code,
    then a critic agent review it. Tool use lets models make function calls to
    search the web, execute code, or interact with external systems. Planning
    enables an LLM to decompose complex requests into sequences of actions.
    Multi-agent collaboration assigns different specialized roles to the same or
    different models, having them interact.


    What makes these patterns powerful is their composability. A single workflow
    might use reflection to iteratively improve output, tool use to ground it in
    real data, planning to orchestrate complex multi-step tasks, and multi-agent
    collaboration to bring specialized perspectives. Ng notes that these
    patterns seem mysterious until you read the code — they're surprisingly
    simple implementations that produce dramatically better results.
stance: >-
  Reflection, tool use, planning, and multi-agent collaboration are the four
  essential design patterns that enable agentic AI workflows to dramatically
  outperform zero-shot prompting.
related:
  - INS-260320-7914
  - INS-260325-5F3B
  - INS-260329-075C
  - INS-260327-BF89
  - PRI-260328-A65A
  - PRI-260328-1ED1
  - INS-260327-5EEA
---
Ng breaks down agentic AI into four composable design patterns. Reflection involves prompting an LLM to critique its own output, then feeding that criticism back to improve results — like having a coder agent generate code, then a critic agent review it. Tool use lets models make function calls to search the web, execute code, or interact with external systems. Planning enables an LLM to decompose complex requests into sequences of actions. Multi-agent collaboration assigns different specialized roles to the same or different models, having them interact.

What makes these patterns powerful is their composability. A single workflow might use reflection to iteratively improve output, tool use to ground it in real data, planning to orchestrate complex multi-step tasks, and multi-agent collaboration to bring specialized perspectives. Ng notes that these patterns seem mysterious until you read the code — they're surprisingly simple implementations that produce dramatically better results.
