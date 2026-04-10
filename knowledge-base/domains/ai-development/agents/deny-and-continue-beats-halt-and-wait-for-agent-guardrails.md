---
id: INS-260410-14E5
domain: ai-development
topic: agents
title: Deny-and-continue beats halt-and-wait for agent guardrails
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agent-loops
  - ux
  - error-handling
  - false-positives
sources:
  - type: blog
    title: 'Claude Code auto mode: a safer way to skip permissions'
    url: 'https://www.anthropic.com/engineering/claude-code-auto-mode'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Return denials as tool results so false positives cost a single retry
    instead of killing the session.
  standard: >-
    Auto Mode returns classifier denials to the agent as tool-result errors with
    an instruction to find a safer path in good faith, rather than halting the
    session. Only after 3 consecutive or 20 total denials does it escalate to
    the human. This design makes 0.4% FPR survivable: a false positive costs one
    retry, not a dead session, which matters enormously for long-running
    autonomous tasks where any interrupt is expensive.


    The lesson generalizes to any agent guardrail: hard stops punish both the
    agent and the user on every false positive. Soft denials with recovery treat
    the guardrail as feedback, let the agent route around the block, and only
    escalate when the pattern suggests something pathological (repeated attempts
    at the same forbidden path). Budget the escalation thresholds so a
    compromised or stuck agent can't grind indefinitely.
stance: >-
  When a safety classifier blocks an action, the agent should receive the denial
  as a tool result and retry a safer path rather than halting for human input.
related:
  - INS-260402-8A7A
  - INS-260403-5137
  - PRI-260407-2E0F
  - INS-260329-92E9
  - INS-260403-BA81
---
Auto Mode returns classifier denials to the agent as tool-result errors with an instruction to find a safer path in good faith, rather than halting the session. Only after 3 consecutive or 20 total denials does it escalate to the human. This design makes 0.4% FPR survivable: a false positive costs one retry, not a dead session, which matters enormously for long-running autonomous tasks where any interrupt is expensive.

The lesson generalizes to any agent guardrail: hard stops punish both the agent and the user on every false positive. Soft denials with recovery treat the guardrail as feedback, let the agent route around the block, and only escalate when the pattern suggests something pathological (repeated attempts at the same forbidden path). Budget the escalation thresholds so a compromised or stuck agent can't grind indefinitely.
