---
id: INS-260628-2043
domain: ai-development
topic: agent-evals
title: >-
  Benchmark agents on a real harness with fully open traces, not isolated
  problems
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - agent-evals
  - benchmarks
  - agentic-coding
  - evaluation
  - transparency
sources:
  - type: youtube
    title: >-
      Z.ai GLM 4.6: What We Learned From 100 Million Open Source Downloads —
      Yuxuan Zhang, Z.ai
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=m6MF1OR_9kM'
date_extracted: '2026-06-28'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Build agent benchmarks on top of a real agent harness (e.g., Claude Code)
    across realistic end-to-end tasks and open-source the full trajectories so
    the scores are auditable.
  standard: >-
    Beyond public benchmarks, Z.ai built its own CC-Bench to test 'agent-style
    coding in the real world, not just isolated problems.' They constructed an
    agentic coding test platform on top of Claude Code, with v1.1 adding 22 hard
    coding tasks for 74 total spanning front-end development, internal tooling,
    data analysis, and algorithm implementation. For every model they record the
    full agent trajectory—the query, the planning steps, tool calls, code edits,
    and execution—and open-source the entire benchmark.


    Two design choices matter for anyone evaluating agents. First, evaluating on
    a real harness over realistic, multi-step tasks captures planning, tool use,
    and execution behavior that isolated problem sets miss—it measures the agent
    loop, not just the model's single-shot answer. Second, publishing the full
    trajectories (not just aggregate win rates) makes the benchmark auditable
    and reproducible, letting others inspect where and how a model succeeds or
    fails. The combination—realistic harness plus open traces—is a stronger eval
    discipline than headline scores on synthetic problems.
stance: >-
  Agentic capability should be measured on a real agent harness over end-to-end
  tasks with fully open traces, not on isolated standalone problems.
related:
  - INS-260410-E977
  - INS-260410-F167
  - INS-260501-D701
  - INS-260605-E516
  - INS-260625-C69F
  - INS-260625-26F5
  - INS-260627-8D79
  - INS-260627-AF4E
---
Beyond public benchmarks, Z.ai built its own CC-Bench to test 'agent-style coding in the real world, not just isolated problems.' They constructed an agentic coding test platform on top of Claude Code, with v1.1 adding 22 hard coding tasks for 74 total spanning front-end development, internal tooling, data analysis, and algorithm implementation. For every model they record the full agent trajectory—the query, the planning steps, tool calls, code edits, and execution—and open-source the entire benchmark.

Two design choices matter for anyone evaluating agents. First, evaluating on a real harness over realistic, multi-step tasks captures planning, tool use, and execution behavior that isolated problem sets miss—it measures the agent loop, not just the model's single-shot answer. Second, publishing the full trajectories (not just aggregate win rates) makes the benchmark auditable and reproducible, letting others inspect where and how a model succeeds or fails. The combination—realistic harness plus open traces—is a stronger eval discipline than headline scores on synthetic problems.
