---
id: INS-260410-37D5
domain: ai-development
topic: agent-patterns
title: Context resets beat compaction when models exhibit context anxiety
actionability: immediate
confidence: high
shelf_life: time-sensitive
status: active
tags:
  - context-engineering
  - long-running-tasks
  - harness-design
  - compaction
sources:
  - type: blog
    title: Harness design for long-running application development
    url: 'https://www.anthropic.com/engineering/harness-design-long-running-apps'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Compaction preserves continuity but doesn't cure context anxiety; only a
    fresh agent with a handoff artifact does.
  standard: >-
    Long-running agents lose coherence as context fills, and some models exhibit
    'context anxiety' — wrapping up work prematurely as they sense their context
    limit approaching. Compaction (summarizing earlier conversation in place)
    preserves continuity but the same agent keeps believing it's near its limit,
    so the anxiety persists. Context resets clear the window entirely and start
    a fresh agent, paired with a structured handoff artifact carrying state and
    next steps.


    The tradeoff is real: resets add orchestration complexity, token overhead,
    and latency. They're worth it when the model genuinely exhibits context
    anxiety strongly enough to cap performance — Sonnet 4.5 did, so resets were
    essential. Opus 4.6 largely removed the behavior, so resets could be dropped
    from the harness entirely and the agents ran as one continuous session.


    The broader rule: context-handling techniques are model-specific scaffolding
    that goes stale. When a new model lands, retest whether you still need the
    workaround before assuming it's load-bearing.
stance: >-
  For models that wrap up work prematurely as their context fills, clean context
  resets with structured handoff artifacts work better than in-place compaction.
related:
  - PRI-260320-07A4
  - INS-260327-DC4C
  - INS-260327-F625
  - INS-260325-252D
  - PRI-260328-A65A
---
Long-running agents lose coherence as context fills, and some models exhibit 'context anxiety' — wrapping up work prematurely as they sense their context limit approaching. Compaction (summarizing earlier conversation in place) preserves continuity but the same agent keeps believing it's near its limit, so the anxiety persists. Context resets clear the window entirely and start a fresh agent, paired with a structured handoff artifact carrying state and next steps.

The tradeoff is real: resets add orchestration complexity, token overhead, and latency. They're worth it when the model genuinely exhibits context anxiety strongly enough to cap performance — Sonnet 4.5 did, so resets were essential. Opus 4.6 largely removed the behavior, so resets could be dropped from the harness entirely and the agents ran as one continuous session.

The broader rule: context-handling techniques are model-specific scaffolding that goes stale. When a new model lands, retest whether you still need the workaround before assuming it's load-bearing.
