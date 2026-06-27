---
id: INS-260627-8F78
domain: ai-development
topic: agent-evals
title: >-
  In-the-wild coding-assistant evals are invalid unless latency is balanced
  across compared models
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - human-centric-design
  - latency
  - acceptance-rate
  - in-the-wild-evals
  - experiment-design
sources:
  - type: youtube
    title: 'Coding Evals: From Code Snippets to Codebases – Naman Jain, Cursor'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=tHN44yJoeS8'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Acceptance of code completions collapses once latency exceeds ~1 second, so
    any in-the-wild model comparison must balance latency across models or it
    measures speed, not quality.
  standard: >-
    When evaluating coding assistants in real usage (Copilot Arena: two
    completions shown, user picks via tab/shift-tab; RepoChat for codebase Q&A),
    the dominant lesson is that human-centric experiment design is a validity
    requirement, not a nicety. Acceptance rate is acutely latency-sensitive —
    once a completion takes more than about a second to appear, acceptance drops
    sharply. Users reveal a strong preference for fast over
    marginally-better-but-slower.


    The consequence for eval design: if you compare two models whose serving
    latencies differ, you are measuring latency as much as quality, and the
    faster model wins for reasons unrelated to its outputs. Valid in-the-wild
    comparison therefore requires deliberately balancing latency across the
    models under test. More broadly, any eval run against real human behavior
    must model how humans actually decide — anything done 'in the wild' needs
    the human-centering component baked into the experiment, or the results are
    confounded artifacts.
stance: >-
  Real-world coding-assistant comparisons are confounded and untrustworthy
  unless latency is equalized across the models being compared.
related:
  - INS-260330-D483
  - INS-260330-C06E
  - PRI-260426-9730
  - INS-260605-DA98
  - INS-260627-B1B2
  - INS-260410-F167
  - INS-260627-37CC
---
When evaluating coding assistants in real usage (Copilot Arena: two completions shown, user picks via tab/shift-tab; RepoChat for codebase Q&A), the dominant lesson is that human-centric experiment design is a validity requirement, not a nicety. Acceptance rate is acutely latency-sensitive — once a completion takes more than about a second to appear, acceptance drops sharply. Users reveal a strong preference for fast over marginally-better-but-slower.

The consequence for eval design: if you compare two models whose serving latencies differ, you are measuring latency as much as quality, and the faster model wins for reasons unrelated to its outputs. Valid in-the-wild comparison therefore requires deliberately balancing latency across the models under test. More broadly, any eval run against real human behavior must model how humans actually decide — anything done 'in the wild' needs the human-centering component baked into the experiment, or the results are confounded artifacts.
