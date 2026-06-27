---
id: INS-260627-8B75
domain: ai-development
topic: agent-evals
title: >-
  A task's verifiability and reversibility predict how good an agent on it can
  be
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agent-evals
  - verification
  - reversibility
  - task-selection
  - determinism
  - hooks
sources:
  - type: youtube
    title: 'Claude Agent SDK [Full Workshop] — Thariq Shihipar, Anthropic'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=TqC1qOfiVcQ'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Before building an agent, ask whether its work can be verified and undone —
    strong verification and reversible state are what make agents general and
    safe.
  standard: >-
    The agent loop is gather context, take action, verify — and the verification
    step is the single best predictor of how general and reliable an agent can
    be. Coding is the canonical good case: you can lint, compile, and execute to
    verify, and git makes the work atomically reversible. Deep research is
    harder because verification is weak (citing sources is only a partial
    check). Computer use is the bad case: it operates on an irreversible state
    machine, so a mistake compounds — order Pepsi instead of Coke and you cannot
    just click Coke; you must navigate to the cart and remove it. So two
    intuitions govern agent suitability: how verifiable is the work, and how
    reversible is the state. When state is irreversible, the engineering move is
    to make it reversible — store checkpoints the user (or even the model) can
    roll back to.


    Crucially, prefer deterministic, rule-based verification over LLM
    self-verification, and insert it everywhere, not just at the end. Examples:
    null-pointer or compile checks, column-count limits, and Claude Code
    throwing an error when the agent tries to write a file it has not yet read
    ('try reading it first'). The model listens to error feedback and
    self-corrects, so throwing structured errors mid-loop steers it cheaply.
    Hooks fire as deterministic events to run these checks or inject context.
    Only once deterministic checks are exhausted should you reach for an LLM
    verifier — and then run it as a fresh, adversarial sub-agent context (not a
    fork) to avoid context pollution, prompting it to critique the output
    harshly. As models' reasoning improves, LLM verification improves too, but
    deterministic rules remain the strongest starting point.
stance: >-
  Tasks with strong (ideally deterministic) verification and reversible state
  are the best candidates for reliable, general agents.
related:
  - INS-260330-74A0
  - INS-260402-876A
  - INS-260409-6833
  - INS-260410-382D
  - INS-260605-55A6
  - INS-260605-AD25
  - INS-260605-B610
  - INS-260605-02FB
  - INS-260605-34B0
  - INS-260605-237C
---
The agent loop is gather context, take action, verify — and the verification step is the single best predictor of how general and reliable an agent can be. Coding is the canonical good case: you can lint, compile, and execute to verify, and git makes the work atomically reversible. Deep research is harder because verification is weak (citing sources is only a partial check). Computer use is the bad case: it operates on an irreversible state machine, so a mistake compounds — order Pepsi instead of Coke and you cannot just click Coke; you must navigate to the cart and remove it. So two intuitions govern agent suitability: how verifiable is the work, and how reversible is the state. When state is irreversible, the engineering move is to make it reversible — store checkpoints the user (or even the model) can roll back to.

Crucially, prefer deterministic, rule-based verification over LLM self-verification, and insert it everywhere, not just at the end. Examples: null-pointer or compile checks, column-count limits, and Claude Code throwing an error when the agent tries to write a file it has not yet read ('try reading it first'). The model listens to error feedback and self-corrects, so throwing structured errors mid-loop steers it cheaply. Hooks fire as deterministic events to run these checks or inject context. Only once deterministic checks are exhausted should you reach for an LLM verifier — and then run it as a fresh, adversarial sub-agent context (not a fork) to avoid context pollution, prompting it to critique the output harshly. As models' reasoning improves, LLM verification improves too, but deterministic rules remain the strongest starting point.
