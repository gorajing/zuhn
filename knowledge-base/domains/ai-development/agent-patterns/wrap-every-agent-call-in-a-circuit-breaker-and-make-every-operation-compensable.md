---
id: INS-260627-E7AE
domain: ai-development
topic: agent-patterns
title: >-
  Wrap every agent call in a circuit breaker and make every operation
  compensable
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - multi-agent
  - failure-recovery
  - circuit-breaker
  - saga-pattern
  - compensation
  - reliability
sources:
  - type: youtube
    title: >-
      From Chaos to Choreography: Multi-Agent Orchestration Patterns That
      Actually Work — Sandipan Bhaumik
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=2czYyrTzILg'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Circuit breakers (open after N consecutive failures, fail fast, half-open to
    retest, close on success) stop one flaky agent from cascading failures
    across the workflow; the saga/compensation pattern gives every agent an
    execute and a reversible compensate method so a mid-workflow failure walks
    backward and rolls the system to its initial state.
  standard: >-
    Agents will fail — the LLM times out, the API rate-limits you, the agent
    crashes mid-workflow. You design for it with two distributed-systems
    patterns. The circuit breaker wraps each agent call: track failure count and
    state; if an agent fails repeatedly (say five in a row) the circuit opens
    and subsequent calls fail fast instead of waiting on timeouts and bombarding
    a downed dependency. After a timeout (e.g. 60s) the circuit goes half-open
    and tests one request — success closes it and normal operation resumes,
    failure reopens it and resets the timer. This prevents cascading failure:
    one agent going down doesn't crash the workflow; you gracefully degrade —
    skip the agent with reduced functionality, use cached results, or alert a
    human. The author calls circuit breakers the single most important
    failure-recovery pattern for multi-agent systems and says every agent call
    should be wrapped in one (enforced at the serving layer via model serving /
    AI Gateway, with every open↔closed transition logged in MLflow to spot
    agents flaking out).


    The compensation (saga) pattern handles partial failures. Every agent
    exposes two methods: execute (does the work) and compensate (reverses it) —
    the contract is that every operation must be reversible. The orchestrator
    tracks which agents ran successfully in order; if Agent C fails, it walks
    backward through the list, calling compensate on B (e.g. delete the draft
    recommendation), then A (e.g. clear the cached research), returning the
    system to its initial state. No partial transactions, no stuck workflows.
    It's unsexy infrastructure — you get no applause for a circuit breaker — but
    it's how production systems avoid failing at 2 a.m., and it's a hard
    requirement in domains like financial services.
stance: >-
  Production multi-agent systems must wrap every agent call in a circuit breaker
  and pair every execute step with a compensate step, because agents will
  inevitably time out, rate-limit, and crash mid-workflow.
related:
  - INS-260327-0D0B
  - INS-260329-66BD
  - INS-260329-9010
  - INS-260329-C689
  - INS-260403-77F4
  - INS-260625-FC2D
  - INS-260625-6127
  - INS-260626-E0A7
  - INS-260626-8F3D
  - INS-260627-E496
---
Agents will fail — the LLM times out, the API rate-limits you, the agent crashes mid-workflow. You design for it with two distributed-systems patterns. The circuit breaker wraps each agent call: track failure count and state; if an agent fails repeatedly (say five in a row) the circuit opens and subsequent calls fail fast instead of waiting on timeouts and bombarding a downed dependency. After a timeout (e.g. 60s) the circuit goes half-open and tests one request — success closes it and normal operation resumes, failure reopens it and resets the timer. This prevents cascading failure: one agent going down doesn't crash the workflow; you gracefully degrade — skip the agent with reduced functionality, use cached results, or alert a human. The author calls circuit breakers the single most important failure-recovery pattern for multi-agent systems and says every agent call should be wrapped in one (enforced at the serving layer via model serving / AI Gateway, with every open↔closed transition logged in MLflow to spot agents flaking out).

The compensation (saga) pattern handles partial failures. Every agent exposes two methods: execute (does the work) and compensate (reverses it) — the contract is that every operation must be reversible. The orchestrator tracks which agents ran successfully in order; if Agent C fails, it walks backward through the list, calling compensate on B (e.g. delete the draft recommendation), then A (e.g. clear the cached research), returning the system to its initial state. No partial transactions, no stuck workflows. It's unsexy infrastructure — you get no applause for a circuit breaker — but it's how production systems avoid failing at 2 a.m., and it's a hard requirement in domains like financial services.
