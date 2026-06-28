---
id: INS-260628-E0D2
domain: ai-development
topic: agent-patterns
title: 'In agentic coding, tool calls dominate context and user text is tiny'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agentic-coding
  - context-composition
  - tool-use
  - claude-code
  - subagents
sources:
  - type: youtube
    title: 'Context Platform Engineering to Reduce Token Anxiety — Val Bercovici, WEKA'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=NTBX-wxUhHs'
date_extracted: '2026-06-28'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    System prompt plus user text is a sliver of agentic-coding context; the bulk
    is tool use and tool responses (bash, grep, file reads), most of which is
    cacheable but often re-prefilled.
  standard: >-
    Inspecting real Claude Code traces, WEKA shows that the user's actual input
    is only a small part of an agentic conversation. The majority is tool use
    and tool responses — the agent runs a bash command, greps something, gets a
    result, then acts again. This means that for agentic coding, the cacheable
    surface area is dominated by machine-generated tool traffic, not human
    prose, and the multi-agent pattern compounds it: an orchestrator spins up
    subagents that share common context, so total context consumed grows even as
    each subagent targets a narrow slice of the problem.


    The design implication is that context and cache strategy must be treated
    structurally. Because tool output dominates and most of it is cacheable, the
    biggest wins come from keeping tool-call sequences stable and cache-friendly
    (stable ordering, append-only context, avoiding cache-invalidating edits to
    early context) rather than from trimming the user prompt. Subagents that
    endure between wake-ups preserve cache; short-lived subagents whose context
    does not endure sacrifice it for isolation. Builders should decide that
    trade-off deliberately.
stance: >-
  In agentic coding workloads, user-authored text is a small fraction of the
  context window while tool calls and tool responses dominate, making cache
  strategy a structural design concern rather than a prompt-length concern.
related:
  - INS-260605-37DA
  - INS-260625-131D
  - INS-260625-057C
  - INS-260628-7862
  - INS-260628-492E
  - INS-260627-917D
  - INS-260626-F5AE
  - INS-260605-83DA
---
Inspecting real Claude Code traces, WEKA shows that the user's actual input is only a small part of an agentic conversation. The majority is tool use and tool responses — the agent runs a bash command, greps something, gets a result, then acts again. This means that for agentic coding, the cacheable surface area is dominated by machine-generated tool traffic, not human prose, and the multi-agent pattern compounds it: an orchestrator spins up subagents that share common context, so total context consumed grows even as each subagent targets a narrow slice of the problem.

The design implication is that context and cache strategy must be treated structurally. Because tool output dominates and most of it is cacheable, the biggest wins come from keeping tool-call sequences stable and cache-friendly (stable ordering, append-only context, avoiding cache-invalidating edits to early context) rather than from trimming the user prompt. Subagents that endure between wake-ups preserve cache; short-lived subagents whose context does not endure sacrifice it for isolation. Builders should decide that trade-off deliberately.
