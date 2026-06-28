---
id: INS-260625-E3A2
domain: ai-development
topic: agent-evals
title: >-
  Outcome-correct agents can still be unreliable if the trajectory is
  undisciplined
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - agent-evals
  - coding-agents
  - process-discipline
  - trajectory-evaluation
  - verification
sources:
  - type: blog
    title: Benchmarking Engineering Process Discipline in Autonomous AI Coding Agents
    url: 'https://arxiv.org/html/2606.22678v1'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Passing the final test is not enough if the agent got there through a
    non-repeatable process.
  standard: >-
    RigorBench formalizes a gap in coding-agent benchmarks: most score whether
    code passes tests or resolves an issue, but not whether the agent planned,
    verified, recovered, abstained, or preserved codebase health along the way.
    The same green result can come from a targeted hypothesis plus regression
    test or from random patch churn that happens to satisfy a weak oracle.


    For AgentRun, this means verification gates should not only record pass/fail
    outcomes. They should also preserve process evidence: the plan, edits, test
    invocations, recovery path, and whether the agent had to thrash. A passed
    run with weak process evidence should be treated as a lower-confidence pass
    than a run that converged through a traceable hypothesis and targeted
    verification.
stance: >-
  Agent evaluation should score the run trajectory as a first-class artifact,
  because final success can hide brittle trial-and-error behavior that will not
  generalize in production.
related:
  - INS-260501-3502
  - INS-260410-A27C
  - INS-260627-1443
  - INS-260605-C436
  - INS-260410-3601
---
RigorBench formalizes a gap in coding-agent benchmarks: most score whether code passes tests or resolves an issue, but not whether the agent planned, verified, recovered, abstained, or preserved codebase health along the way. The same green result can come from a targeted hypothesis plus regression test or from random patch churn that happens to satisfy a weak oracle.

For AgentRun, this means verification gates should not only record pass/fail outcomes. They should also preserve process evidence: the plan, edits, test invocations, recovery path, and whether the agent had to thrash. A passed run with weak process evidence should be treated as a lower-confidence pass than a run that converged through a traceable hypothesis and targeted verification.
