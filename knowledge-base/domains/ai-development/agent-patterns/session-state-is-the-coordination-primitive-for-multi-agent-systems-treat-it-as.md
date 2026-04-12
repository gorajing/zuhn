---
id: INS-260411-D060
domain: ai-development
topic: agent-patterns
title: >-
  Session state is the coordination primitive for multi-agent systems — treat it
  as a shared whiteboard
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - state-management
  - session-state
  - coordination
  - output-key
  - adk
sources:
  - type: blog
    title: Developer’s guide to multi-agent patterns in ADK- Google Developers Blog
    url: >-
      https://developers.googleblog.com/developers-guide-to-multi-agent-patterns-in-adk/
date_extracted: '2026-04-11'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Use session.state with descriptive output_key names as the shared whiteboard
    for agent coordination — it's simpler and more debuggable than message
    passing.
  standard: >-
    Across all 8 patterns, Google's ADK uses session.state as the universal
    coordination mechanism. Agents write results to named keys
    (output_key='raw_text', 'structured_data', 'security_report') and downstream
    agents read from those keys. This is a shared-whiteboard model — every agent
    can see the full state.


    The advantage over message passing is debuggability: you can inspect the
    state at any point to see exactly what each agent produced. The pro-tip 'use
    descriptive keys' matters because in complex composite patterns with nested
    loops and parallel branches, ambiguous key names like 'result' or 'output'
    become impossible to trace. This whiteboard approach is simpler than
    Anthropic's event-log model but trades off auditability for ease of
    implementation.
stance: >-
  Shared session state with descriptive keys is the most effective coordination
  mechanism for multi-agent workflows, superior to message passing or direct
  agent-to-agent communication.
related:
  - INS-260329-0EAC
  - INS-260411-52C8
  - INS-260327-FE24
  - INS-260329-4D03
  - INS-260410-1ED3
---
Across all 8 patterns, Google's ADK uses session.state as the universal coordination mechanism. Agents write results to named keys (output_key='raw_text', 'structured_data', 'security_report') and downstream agents read from those keys. This is a shared-whiteboard model — every agent can see the full state.

The advantage over message passing is debuggability: you can inspect the state at any point to see exactly what each agent produced. The pro-tip 'use descriptive keys' matters because in complex composite patterns with nested loops and parallel branches, ambiguous key names like 'result' or 'output' become impossible to trace. This whiteboard approach is simpler than Anthropic's event-log model but trades off auditability for ease of implementation.
