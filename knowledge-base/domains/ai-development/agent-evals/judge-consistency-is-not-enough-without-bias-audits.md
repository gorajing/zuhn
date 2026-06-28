---
id: INS-260625-206A
domain: ai-development
topic: agent-evals
title: Judge consistency is not enough without bias audits
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - llm-judges
  - eval-reliability
  - bias-audits
  - agent-evals
sources:
  - type: blog
    title: >-
      Reliability without Validity: A Systematic, Large-Scale Evaluation of
      LLM-as-a-Judge Models Across Agreement, Consistency, and Bias
    url: 'https://arxiv.org/abs/2606.19544'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: A repeatable judge can still be repeatably biased.
  standard: >-
    The paper's consistency-bias paradox is directly relevant to agent
    verification: some judges can produce stable results while still favoring a
    position or presentation format. That means repeatability is a necessary
    diagnostic, not a sufficient validation protocol.


    AgentRun gates that rely on LLM judgment should record which bias checks
    were run: swapped order, blinded labels, rubric sensitivity, and
    disagreement handling. Without those checks, the gate should be advisory
    rather than a hard reliability floor.
stance: >-
  LLM judge gates should not be treated as validated merely because they are
  repeatable, because high test-retest reliability can coexist with severe
  positional or presentation bias.
related:
  - INS-260625-722D
  - INS-260605-EC51
  - INS-260628-337C
  - INS-260404-5365
  - PRI-260405-ADEA
---
The paper's consistency-bias paradox is directly relevant to agent verification: some judges can produce stable results while still favoring a position or presentation format. That means repeatability is a necessary diagnostic, not a sufficient validation protocol.

AgentRun gates that rely on LLM judgment should record which bias checks were run: swapped order, blinded labels, rubric sensitivity, and disagreement handling. Without those checks, the gate should be advisory rather than a hard reliability floor.
