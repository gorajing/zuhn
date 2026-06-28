---
id: INS-260626-B04D
domain: ai-development
topic: evals
title: 'Agent evals should score the path, not just the final answer'
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - hugging-face
  - agent-evals
  - process-metrics
  - transformers
  - developer-experience
sources:
  - type: blog
    title: Is it agentic enough? Benchmarking open models on your own tooling
    author: Lysandre
    url: 'https://huggingface.co/blog/is-it-agentic-enough'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    AgentRun evals should include effort metrics, detours, and environment
    revisions.
  standard: >-
    The primitive change is an eval harness that treats the agent's trajectory
    as the object of measurement. A library revision can be better for agents
    even if final success is unchanged, because it reduces retries, bypasses,
    tool misuse, and custom reimplementation. For Zuhn/AgentRun, this supports
    storing process metrics such as commands run, files touched, failed
    attempts, tool detours, wall time, model id, library revision, and hardware
    substrate.
  deep: >-
    This is especially relevant for agent-facing software design. APIs, docs,
    and error messages are now part of the agent environment. A benchmark that
    only asks whether the final code worked will miss whether the agent found
    the blessed path or burned expensive inference rediscovering what the
    library should have made obvious.
subtopic: agentic-process-metrics
stance: >-
  Hugging Face's agentic benchmark argues that library and model evaluation
  should measure how much work the agent needed to succeed, because final-answer
  pass rates hide API friction, stale docs, and expensive detours.
related:
  - INS-260626-1673
  - INS-260626-32B6
  - INS-260625-D1F9
  - INS-260628-8FE6
  - INS-260625-8A55
  - INS-260628-BDB0
  - INS-260625-0E60
  - INS-260627-47A6
---
The primitive change is an eval harness that treats the agent's trajectory as the object of measurement. A library revision can be better for agents even if final success is unchanged, because it reduces retries, bypasses, tool misuse, and custom reimplementation. For Zuhn/AgentRun, this supports storing process metrics such as commands run, files touched, failed attempts, tool detours, wall time, model id, library revision, and hardware substrate.
