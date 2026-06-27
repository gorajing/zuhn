---
id: INS-260605-05F4
domain: ai-development
topic: agent-patterns
title: >-
  Build multimodal apps as agents that decide what to create, not workflows that
  hardcode the pipeline
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - agents
  - multimodal
  - workflow-vs-agent
  - function-calling
  - gemini
sources:
  - type: youtube
    title: >-
      Any-to-Any: Building Native Multimodal Agents - Patrick Löber, Google
      DeepMind
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=GIRpQEfYf3U'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Let a reasoning model loop and decide which specialized generators to call
    rather than hardcoding the asset pipeline.
  standard: >-
    Löber contrasts two architectures for a NotebookLM clone: a workflow where
    the pipeline is hardcoded versus an agent where a reasoning model decides
    what to create. In the agentic version, Gemini sits as the 'brain', is given
    tool/function declarations (generate_image, generate_speech), and reasons in
    a loop about which concepts are complex enough to need a diagram and which
    sections would benefit from audio — then decides whether the generated
    assets are sufficient or more are needed.


    The practical payoff is adaptivity: instead of always producing the same
    fixed set of outputs, the agent tailors the asset mix to the input content.
    The cost is the usual agentic-loop overhead and nondeterminism. The decision
    rule: choose the agent pattern when the right set of outputs genuinely
    varies by input; keep the workflow when the pipeline is stable and
    predictability matters more than adaptivity.
stance: >-
  A reasoning model choosing which assets to generate at runtime beats a fixed
  pipeline for multimodal generation tasks.
related:
  - INS-260625-25BF
  - INS-260625-35C5
  - INS-260626-8116
  - INS-260627-2925
  - INS-260626-909D
---
Löber contrasts two architectures for a NotebookLM clone: a workflow where the pipeline is hardcoded versus an agent where a reasoning model decides what to create. In the agentic version, Gemini sits as the 'brain', is given tool/function declarations (generate_image, generate_speech), and reasons in a loop about which concepts are complex enough to need a diagram and which sections would benefit from audio — then decides whether the generated assets are sufficient or more are needed.

The practical payoff is adaptivity: instead of always producing the same fixed set of outputs, the agent tailors the asset mix to the input content. The cost is the usual agentic-loop overhead and nondeterminism. The decision rule: choose the agent pattern when the right set of outputs genuinely varies by input; keep the workflow when the pipeline is stable and predictability matters more than adaptivity.
