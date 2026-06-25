---
id: INS-260605-780C
domain: ai-development
topic: system-design
title: Use parallel per-entity agents plus clustering to explain why a metric moved
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - analysis-pipelines
  - subagents
  - clustering
  - backtesting
  - resumability
sources:
  - type: youtube
    title: 'Fighting AI with AI — Lawrence Jones, Incident'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=L2r6vLlLgs8'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Fan out ~25 subagents to analyze each backtest case in parallel, then
    cluster the failures into cohorts so the aggregate metric becomes an
    actionable 'why.'
  standard: >-
    Backtests give incident.io a rolled-up figure like '86% accurate RCA,' but
    that number says nothing about why it rose or fell — leaving you stuck if
    you want to improve the system for a specific customer. Their solution
    downloads all investigations into a file system fed to a Claude Code
    analysis pipeline driven by structured markdown playbooks for repeatable,
    reliable runs.


    The pipeline has three design principles Jones says generalize well. First,
    leverage subagents for parallel per-entity analysis — start ~25 agents that
    each independently analyze one investigation. Second, store each agent's
    analysis in files within the download, building incremental results so the
    run can start and resume. Third, combine the analysis with the code base
    powering the system, so when the pipeline identifies a failure pattern it
    can locate the responsible code and propose a fix, which you then validate
    via the eval red-green cycle. A second clustering stage groups failures into
    cohorts ('same types of failure, how we go wrong in different ways'),
    turning raw per-case findings into a report that explains why the system
    performs well or badly on an account and what to change.
stance: >-
  A rolled-up accuracy number is useless for improvement unless a parallelized
  agent pipeline clusters failures to explain why it moved.
related:
  - INS-260605-7843
  - INS-260410-AF66
  - INS-260330-A3B7
  - INS-260625-0A08
  - INS-260329-D8F2
---
Backtests give incident.io a rolled-up figure like '86% accurate RCA,' but that number says nothing about why it rose or fell — leaving you stuck if you want to improve the system for a specific customer. Their solution downloads all investigations into a file system fed to a Claude Code analysis pipeline driven by structured markdown playbooks for repeatable, reliable runs.

The pipeline has three design principles Jones says generalize well. First, leverage subagents for parallel per-entity analysis — start ~25 agents that each independently analyze one investigation. Second, store each agent's analysis in files within the download, building incremental results so the run can start and resume. Third, combine the analysis with the code base powering the system, so when the pipeline identifies a failure pattern it can locate the responsible code and propose a fix, which you then validate via the eval red-green cycle. A second clustering stage groups failures into cohorts ('same types of failure, how we go wrong in different ways'), turning raw per-case findings into a report that explains why the system performs well or badly on an account and what to change.
