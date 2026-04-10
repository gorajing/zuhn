---
id: INS-260410-F5EC
domain: ai-development
topic: agents
title: 'Evaluate tools with realistic multi-step tasks, not sandbox prompts'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - evaluation
  - tool-testing
  - benchmarks
  - real-world-tasks
sources:
  - type: blog
    title: Writing effective tools for AI agents—using AI agents
    url: 'https://www.anthropic.com/engineering/writing-tools-for-agents'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Generate dozens of evaluation tasks grounded in real data sources that
    require chained, multi-step tool calls rather than single-shot lookups.
  standard: >-
    Weak evaluation tasks like 'Search the payment logs for customer_id=9182'
    test mechanics but miss the actual use case. Strong tasks look like
    'Customer reported triple-charges — find all relevant log entries and
    determine if other customers were affected' — which forces agents to plan,
    chain calls, and synthesize.


    Each task needs a verifiable outcome, but avoid overly strict verifiers that
    reject correct answers on formatting. Use Claude as a judge for open-ended
    responses, simple string comparison where possible. Optionally specify which
    tools you expect to be called, but don't overfit — multiple valid paths
    often exist.


    Run evaluations programmatically with direct API calls in simple agentic
    loops. Collect more than accuracy: runtime, tool call counts, token
    consumption, and errors all reveal optimization opportunities.
stance: >-
  Tool evaluations must use complex real-world tasks requiring multiple chained
  tool calls, because simplistic prompts fail to stress-test agent behavior.
related:
  - INS-260410-5D66
  - INS-260410-01BC
  - INS-260410-4EB9
  - INS-260403-EE38
  - PRI-260406-F21A
---
Weak evaluation tasks like 'Search the payment logs for customer_id=9182' test mechanics but miss the actual use case. Strong tasks look like 'Customer reported triple-charges — find all relevant log entries and determine if other customers were affected' — which forces agents to plan, chain calls, and synthesize.

Each task needs a verifiable outcome, but avoid overly strict verifiers that reject correct answers on formatting. Use Claude as a judge for open-ended responses, simple string comparison where possible. Optionally specify which tools you expect to be called, but don't overfit — multiple valid paths often exist.

Run evaluations programmatically with direct API calls in simple agentic loops. Collect more than accuracy: runtime, tool call counts, token consumption, and errors all reveal optimization opportunities.
