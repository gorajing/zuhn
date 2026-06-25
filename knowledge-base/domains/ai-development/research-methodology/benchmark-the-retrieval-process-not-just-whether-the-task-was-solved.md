---
id: INS-260605-80D0
domain: ai-development
topic: research-methodology
title: 'Benchmark the retrieval process, not just whether the task was solved'
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - research-methodology
  - benchmarking
  - evaluation
  - context-engineering
  - agent-evaluation
sources:
  - type: youtube
    title: >-
      Benchmarking semantic code retrieval on Claude Code — Kuba Rogut,
      Turbopuffer
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=zKk7sDMGDEQ'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    ContextBench scores whether an agent located the human-labeled golden files,
    lines, and symbols during its trajectory, not just whether it ultimately
    solved the problem.
  standard: >-
    Cursor's ContextBench rests on the thesis that how an agent reaches a
    solution matters, not only the end result. Rather than pass/fail on task
    completion, it uses a human-labeled dataset specifying which files, lines,
    and symbols an agent should have consulted to complete a task well, then
    measures precision (what fraction of files read were golden) and recall
    (what fraction of golden files were found). This surfaced that default
    Claude Code is highly exploratory — wasting roughly one in three file reads
    — while windowed grep and semantic search lifted file precision to ~87%.


    Process-level evaluation is more diagnostic because outcome-only metrics
    hide why an approach works or fails. Precision-vs-recall tradeoffs revealed
    that Claude Code wins file recall by reading everything but tanks line
    recall by reading the wrong things. For anyone tuning retrieval or context
    strategies, instrument the trajectory — measure the quality of what the
    agent looked at, since that is the lever you can actually move.
stance: >-
  Evaluating coding agents on whether they found the right files, lines, and
  symbols is more diagnostic than only scoring final task success.
related:
  - INS-260605-93B8
  - INS-260605-7843
  - INS-260625-7592
  - INS-260625-D938
  - INS-260605-B5A2
---
Cursor's ContextBench rests on the thesis that how an agent reaches a solution matters, not only the end result. Rather than pass/fail on task completion, it uses a human-labeled dataset specifying which files, lines, and symbols an agent should have consulted to complete a task well, then measures precision (what fraction of files read were golden) and recall (what fraction of golden files were found). This surfaced that default Claude Code is highly exploratory — wasting roughly one in three file reads — while windowed grep and semantic search lifted file precision to ~87%.

Process-level evaluation is more diagnostic because outcome-only metrics hide why an approach works or fails. Precision-vs-recall tradeoffs revealed that Claude Code wins file recall by reading everything but tanks line recall by reading the wrong things. For anyone tuning retrieval or context strategies, instrument the trajectory — measure the quality of what the agent looked at, since that is the lever you can actually move.
