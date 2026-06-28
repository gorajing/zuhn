---
id: INS-260627-D2EF
domain: ai-development
topic: agent-patterns
title: Write-and-run code is the most general agent primitive
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - code-execution
  - sandboxing
  - agent-harness
  - autonomy
sources:
  - type: youtube
    title: 'Katelyn Lesse – Evolving Claude APIs for Agents, Anthropic'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=aqW68Is_Kj4'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    If a model can both write code and run that same code in a secure sandbox,
    it can accomplish nearly anything — which sidesteps the question of how
    opinionated or heavy the harness should be.
  standard: >-
    Lesse argues that the ongoing discourse about agent harnesses — heavy vs.
    light, opinionated vs. minimal, how much scaffolding — partly dissolves once
    you give the model code-write plus code-execution. Claude already writes
    code; pairing that with the ability to run it in a secure sandbox lets it
    iterate toward professional outputs autonomously, like running an animation
    to check whether it's actually 'more sparkly.' Anthropic exposes this as a
    code execution tool in the API where the platform handles containers and
    security on its servers.


    The directional bet is that the future of agents is a model working
    autonomously inside a sandbox, not an elaborate task-specific harness
    encoding every step. For builders, this suggests investing in giving the
    model a real execution environment and runway rather than over-engineering
    deterministic scaffolding around it. The harness should provide the computer
    and the guardrails; the model provides the generality.
stance: >-
  Giving a model the ability to write code and execute it in a sandbox makes it
  maximally general, displacing debates over how heavy an agent harness should
  be.
related:
  - INS-260410-9DB0
  - INS-260605-1C30
  - INS-260626-5671
  - INS-260627-9BC5
  - INS-260627-4CF5
  - PRI-260426-890F
  - INS-260605-1066
---
Lesse argues that the ongoing discourse about agent harnesses — heavy vs. light, opinionated vs. minimal, how much scaffolding — partly dissolves once you give the model code-write plus code-execution. Claude already writes code; pairing that with the ability to run it in a secure sandbox lets it iterate toward professional outputs autonomously, like running an animation to check whether it's actually 'more sparkly.' Anthropic exposes this as a code execution tool in the API where the platform handles containers and security on its servers.

The directional bet is that the future of agents is a model working autonomously inside a sandbox, not an elaborate task-specific harness encoding every step. For builders, this suggests investing in giving the model a real execution environment and runway rather than over-engineering deterministic scaffolding around it. The harness should provide the computer and the guardrails; the model provides the generality.
