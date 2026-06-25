---
id: INS-260605-2A69
domain: ai-development
topic: agent-patterns
title: Turn agent errors into self-healing recovery playbooks
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - error-handling
  - resilience
  - tool-design
  - self-healing
sources:
  - type: youtube
    title: >-
      Building Agent Interfaces: Lessons from Chrome DevTools (MCP) for Agents —
      Michael Hablich, Google
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=_B4Pv9ttFgY'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Efficiency is useless if the agent gets stuck — design error messages so the
    agent can fix itself.
  standard: >-
    Hablich treats error recovery as a spectrum and a token-cost problem: every
    error forces the agent to retry and re-reason, which is expensive. The
    cheapest intervention is writing useful error messages — obvious in
    principle, neglected in practice. They added one sentence to a navigation
    error ('history entry to navigate was not found') and it was enough for the
    agent to self-heal, removing the human from the loop.


    Beyond messages, the recovery spectrum includes proactive detours — steering
    the agent against its own training priors (e.g. routing performance work to
    their trace tool instead of the Lighthouse audit the model was biased
    toward) — and diagnostic playbooks delivered as skills (a 'troubleshooting'
    skill that helps both human and agent fix MCP setup problems). Each
    mechanism increases the resilience of the overall agent harness.


    The unifying goal is self-healing: an agent that can diagnose and fix its
    own failures from the information the interface gives it, rather than
    escalating to a human. Error text is no longer a log line for a developer —
    it's an instruction the agent will act on.
stance: >-
  Error messages for agents should be written to enable the agent to self-heal
  without a human, because every error the agent can't recover from burns retry
  tokens.
related:
  - INS-260321-2482
  - INS-260320-9D89
  - INS-260602-EA48
  - INS-260605-5D14
  - INS-260605-610E
  - INS-260605-35B4
  - INS-260605-5D5E
  - INS-260625-814D
  - INS-260605-6722
  - INS-260605-6DE5
---
Hablich treats error recovery as a spectrum and a token-cost problem: every error forces the agent to retry and re-reason, which is expensive. The cheapest intervention is writing useful error messages — obvious in principle, neglected in practice. They added one sentence to a navigation error ('history entry to navigate was not found') and it was enough for the agent to self-heal, removing the human from the loop.

Beyond messages, the recovery spectrum includes proactive detours — steering the agent against its own training priors (e.g. routing performance work to their trace tool instead of the Lighthouse audit the model was biased toward) — and diagnostic playbooks delivered as skills (a 'troubleshooting' skill that helps both human and agent fix MCP setup problems). Each mechanism increases the resilience of the overall agent harness.

The unifying goal is self-healing: an agent that can diagnose and fix its own failures from the information the interface gives it, rather than escalating to a human. Error text is no longer a log line for a developer — it's an instruction the agent will act on.
