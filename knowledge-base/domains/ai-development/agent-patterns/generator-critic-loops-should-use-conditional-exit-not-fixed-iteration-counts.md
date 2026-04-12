---
id: INS-260411-8034
domain: ai-development
topic: agent-patterns
title: Generator-critic loops should use conditional exit not fixed iteration counts
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - generator-critic
  - loop-agent
  - exit-conditions
  - quality-gates
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
    Use condition-based exit (exit on 'PASS') rather than fixed iteration counts
    for generator-critic loops to balance quality with efficiency.
  standard: >-
    Google distinguishes two loop patterns: generator-critic (binary pass/fail
    on correctness) and iterative refinement (qualitative improvement over
    cycles). Both use ADK's LoopAgent, but the exit mechanisms differ
    critically.


    For correctness checks (SQL validation, compliance review), the critic
    outputs 'PASS' or specific error details, and the loop exits on the pass
    condition. For refinement, agents can signal escalate=True via EventActions
    when quality threshold is met, even before max_iterations. The anti-pattern
    is fixed iteration counts alone — they either waste compute on
    already-correct outputs or stop before the output is ready. The
    condition_key + exit_condition approach makes loops self-terminating.
stance: >-
  Quality-gated agent loops that exit on a pass condition outperform
  fixed-iteration loops because they avoid both premature stopping and wasteful
  extra cycles.
related:
  - INS-260409-E080
  - INS-260322-24FB
  - INS-260329-D48B
  - INS-260329-DAD1
  - INS-260403-E09E
---
Google distinguishes two loop patterns: generator-critic (binary pass/fail on correctness) and iterative refinement (qualitative improvement over cycles). Both use ADK's LoopAgent, but the exit mechanisms differ critically.

For correctness checks (SQL validation, compliance review), the critic outputs 'PASS' or specific error details, and the loop exits on the pass condition. For refinement, agents can signal escalate=True via EventActions when quality threshold is met, even before max_iterations. The anti-pattern is fixed iteration counts alone — they either waste compute on already-correct outputs or stop before the output is ready. The condition_key + exit_condition approach makes loops self-terminating.
