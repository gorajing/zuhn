---
id: INS-260605-21A5
domain: ai-development
topic: agent-patterns
title: 'Orchestrate models by strength: smart planner, fast executor'
actionability: immediate
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - orchestration
  - model-selection
  - sub-agents
  - skills
  - planning
sources:
  - type: youtube
    title: 'Fast Models Need Slow Developers — Sarah Chieng, Cerebras'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=TeGsFFNqRLA'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Use a large model (e.g. GPT-5.x) for planning and long-horizon reasoning,
    then spawn fast models (e.g. Codex Spark) as executors to run the plan's
    steps.
  standard: >-
    Speed adds a third axis to model selection alongside intelligence and cost.
    Chieng's mental model: reserve the slow, expensive, intelligent model for
    what genuinely needs it — generating the plan, the long-horizon reasoning —
    and delegate the mechanical execution of each plan step to fast, cheap
    executor agents. A large model writes the plan and spawns sub-agents; the
    fast model executes the checklist one item at a time.


    A powerful variant is capturing successful sessions as reusable skills: have
    the intelligent model do a hard task once, capture that trajectory as a
    verifiable, repeatable skill, then have a small fast agent replay it again
    and again in the background. This converts expensive one-off intelligence
    into cheap repeatable throughput. The 'time-sensitive' tag reflects that
    specific model names will date quickly, but the planner/executor
    decomposition is the durable pattern.
stance: >-
  The optimal multi-agent setup pairs a large intelligent model for planning
  with a fast cheap model for execution rather than using one model for
  everything.
related:
  - INS-260403-1B15
  - PRI-260406-4EBD
  - INS-260404-420F
  - INS-260605-6C0C
  - INS-260505-A413
---
Speed adds a third axis to model selection alongside intelligence and cost. Chieng's mental model: reserve the slow, expensive, intelligent model for what genuinely needs it — generating the plan, the long-horizon reasoning — and delegate the mechanical execution of each plan step to fast, cheap executor agents. A large model writes the plan and spawns sub-agents; the fast model executes the checklist one item at a time.

A powerful variant is capturing successful sessions as reusable skills: have the intelligent model do a hard task once, capture that trajectory as a verifiable, repeatable skill, then have a small fast agent replay it again and again in the background. This converts expensive one-off intelligence into cheap repeatable throughput. The 'time-sensitive' tag reflects that specific model names will date quickly, but the planner/executor decomposition is the durable pattern.
