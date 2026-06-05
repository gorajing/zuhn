---
id: INS-260605-6CBF
domain: ai-development
topic: agent-patterns
title: Distribute a single iterative agent into specialized roles for research loops
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - multi-agent
  - role-specialization
  - auto-research
  - orchestration
  - parallelism
sources:
  - type: youtube
    title: >-
      Your Coding Agent Should Do AI System Engineering — Ben Burtenshaw,
      Hugging Face
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=JomVvNDjGb8'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Decompose an autonomous research loop into a literature-scout researcher, a
    hypothesis-queuing planner, parallel implementation workers, and a
    monitoring reporter rather than running one agent that does all steps
    serially.
  standard: >-
    Burtenshaw started from Karpathy's Auto Research project, which used a
    single agent iterating in one loop — finding improvements to a nanoGPT
    training script and implementing them. What stood out to him as 'kind of
    weird' was that one agent worked in a single sequential way, and he reasoned
    'it would make sense to distribute this.'


    His redesign assigns four role types: a researcher that scouts papers (via
    HF papers / arXiv) and formulates them as hypotheses; a planner that
    maintains a queue of jobs from those hypotheses; a set of workers that pick
    up hypotheses and implement them as training-script changes; and a reporter
    that monitors all jobs and maintains a dashboard. The roles coordinate
    through a shared Git project — a main branch of train scripts, a preserved
    original, and a data structure holding scores — plus templated messages
    (current state, job list, what worked, current hyperparameters) that agents
    pass to each other.


    The pattern generalizes the single-loop autonomous agent into a pipeline
    with parallelism and division of labor. Burtenshaw notes the implementation
    is 'more just a conceptual implementation' that works in OpenCode, Codex, or
    Claude — the value is in the role decomposition, not any one framework. He
    does caution that his template-passing was overly verbose ('we maybe don't
    need this many tables') — a reminder that inter-agent communication should
    be trimmed to what's actually needed.
stance: >-
  Splitting an autonomous research agent into specialized roles (researcher,
  planner, worker, reporter) outperforms one agent doing everything
  sequentially.
related:
  - INS-260605-D6EE
  - INS-260524-5173
  - INS-260505-483B
  - INS-260409-6A6C
  - INS-260501-247C
---
Burtenshaw started from Karpathy's Auto Research project, which used a single agent iterating in one loop — finding improvements to a nanoGPT training script and implementing them. What stood out to him as 'kind of weird' was that one agent worked in a single sequential way, and he reasoned 'it would make sense to distribute this.'

His redesign assigns four role types: a researcher that scouts papers (via HF papers / arXiv) and formulates them as hypotheses; a planner that maintains a queue of jobs from those hypotheses; a set of workers that pick up hypotheses and implement them as training-script changes; and a reporter that monitors all jobs and maintains a dashboard. The roles coordinate through a shared Git project — a main branch of train scripts, a preserved original, and a data structure holding scores — plus templated messages (current state, job list, what worked, current hyperparameters) that agents pass to each other.

The pattern generalizes the single-loop autonomous agent into a pipeline with parallelism and division of labor. Burtenshaw notes the implementation is 'more just a conceptual implementation' that works in OpenCode, Codex, or Claude — the value is in the role decomposition, not any one framework. He does caution that his template-passing was overly verbose ('we maybe don't need this many tables') — a reminder that inter-agent communication should be trimmed to what's actually needed.
