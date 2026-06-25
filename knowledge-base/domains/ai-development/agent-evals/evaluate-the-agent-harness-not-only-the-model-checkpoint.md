---
id: INS-260625-1920
domain: ai-development
topic: agent-evals
title: 'Evaluate the agent harness, not only the model checkpoint'
actionability: reference
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - agent-evals
  - harnesses
  - model-comparison
  - scaffolding
sources:
  - type: blog
    title: >-
      Power Systems Agent Benchmark: Executable Evaluation of AI Agents in
      Electric Power Engineering
    url: 'https://arxiv.org/abs/2606.20950'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: Model identity is not enough; the harness is part of the measured system.
  standard: >-
    The paper's public-split grid tested OpenCode and Aider driving the same
    four models and found every model scored lower under Aider, with a gap as
    large as 0.34 for GLM-4.6. The authors frame this as evidence that the same
    model becomes a different agent under different scaffolding.


    For agent engineering, eval records should include model, harness, version,
    prompt, tool surface, retry policy, and environment. Treating a model score
    as portable across scaffolds hides the system layer where much of agent
    performance and failure behavior actually lives.
stance: >-
  The same model can behave like a materially different agent under different
  scaffolding, so eval reports should name and compare the harness as a
  first-class variable.
related:
  - INS-260625-9096
  - INS-260605-4856
  - INS-260619-6E08
  - INS-260410-9DB0
  - INS-260514-4FDC
---
The paper's public-split grid tested OpenCode and Aider driving the same four models and found every model scored lower under Aider, with a gap as large as 0.34 for GLM-4.6. The authors frame this as evidence that the same model becomes a different agent under different scaffolding.

For agent engineering, eval records should include model, harness, version, prompt, tool surface, retry policy, and environment. Treating a model score as portable across scaffolds hides the system layer where much of agent performance and failure behavior actually lives.
