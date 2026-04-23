---
id: INS-260410-B0D6
domain: ai-development
topic: agent-patterns
title: Harness assumptions about model limitations go stale as models improve
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - harness-design
  - model-evolution
  - technical-debt
  - context-management
sources:
  - type: blog
    title: 'Scaling Managed Agents: Decoupling the brain from the hands'
    url: 'https://www.anthropic.com/engineering/managed-agents'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Every harness workaround encodes an assumption about what the model can't
    do; those assumptions decay fast and need to be re-tested on each model
    upgrade.
  standard: >-
    Anthropic addressed Sonnet 4.5's 'context anxiety' (wrapping up prematurely
    as the context window filled) by adding context resets to the harness. When
    they tested the same harness on Opus 4.5, the behavior was gone — the resets
    had become dead weight. This generalizes: harnesses encode assumptions about
    what the model can't do on its own, and each model improvement can silently
    invalidate those assumptions.


    The operational implication is that harness code should be audited against
    every model upgrade, with specific attention to scaffolds built to
    compensate for known weaknesses. Dead-weight scaffolds aren't neutral — they
    consume tokens, add latency, and can actively constrain a smarter model that
    no longer needs the guardrail.


    The deeper implication shapes architecture: if harness logic has a short
    half-life, the stable layer of an agent system should be the interfaces
    (session, sandbox, tool call), not the harness itself. Design so that the
    harness is the disposable part.
stance: >-
  Workarounds baked into agent harnesses for current model weaknesses become
  dead weight — and sometimes active liabilities — once the next model fixes the
  underlying behavior.
related:
  - INS-260410-09B4
  - INS-260410-9DB0
  - INS-260423-85B3
  - PRI-260403-5FC4
  - INS-260410-E73E
  - INS-260403-EAFC
---
Anthropic addressed Sonnet 4.5's 'context anxiety' (wrapping up prematurely as the context window filled) by adding context resets to the harness. When they tested the same harness on Opus 4.5, the behavior was gone — the resets had become dead weight. This generalizes: harnesses encode assumptions about what the model can't do on its own, and each model improvement can silently invalidate those assumptions.

The operational implication is that harness code should be audited against every model upgrade, with specific attention to scaffolds built to compensate for known weaknesses. Dead-weight scaffolds aren't neutral — they consume tokens, add latency, and can actively constrain a smarter model that no longer needs the guardrail.

The deeper implication shapes architecture: if harness logic has a short half-life, the stable layer of an agent system should be the interfaces (session, sandbox, tool call), not the harness itself. Design so that the harness is the disposable part.
