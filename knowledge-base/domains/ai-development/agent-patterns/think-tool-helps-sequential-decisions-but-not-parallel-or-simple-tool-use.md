---
id: INS-260410-6ABA
domain: ai-development
topic: agent-patterns
title: Think tool helps sequential decisions but not parallel or simple tool use
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - agents
  - tool-use
  - cost
  - architecture
  - when-not-to
sources:
  - type: blog
    title: 'The "think" tool: Enabling Claude to stop and think'
    url: 'https://www.anthropic.com/engineering/claude-think-tool'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Only add the think tool where mistakes compound across sequential decisions
    — otherwise you're paying tokens for nothing.
  standard: >-
    Anthropic is explicit about when *not* to use this pattern. The think tool
    doesn't help when the agent is making a single tool call, several parallel
    tool calls with no cross-dependencies, or just following straightforward
    instructions. In those cases it adds prompt length and output tokens with no
    performance gain — a real cost at scale.


    The situations where it shines share a structural signature: each action
    depends on previous actions, tool outputs need interpretation before next
    steps, policies or rules must be checked, and mistakes are expensive or hard
    to reverse. Customer service with compliance rules, multi-step coding fixes,
    and booking flows are archetypes.


    The deeper pattern: reasoning aids pay off in proportion to decision density
    and error cost. Cheap, reversible, parallel tasks don't need reflection;
    expensive, sequential, rule-bound ones do. Applies well beyond the think
    tool — it's a good heuristic for when to spend any extra inference budget on
    deliberation.
stance: >-
  The think tool only pays off when tool calls are sequential, stateful, and
  policy-dense; for parallel or single calls it's net overhead.
related:
  - INS-260330-00D5
  - INS-260410-376A
  - INS-260410-095B
  - INS-260410-F24A
  - INS-260410-87B5
  - INS-260330-7A80
---
Anthropic is explicit about when *not* to use this pattern. The think tool doesn't help when the agent is making a single tool call, several parallel tool calls with no cross-dependencies, or just following straightforward instructions. In those cases it adds prompt length and output tokens with no performance gain — a real cost at scale.

The situations where it shines share a structural signature: each action depends on previous actions, tool outputs need interpretation before next steps, policies or rules must be checked, and mistakes are expensive or hard to reverse. Customer service with compliance rules, multi-step coding fixes, and booking flows are archetypes.

The deeper pattern: reasoning aids pay off in proportion to decision density and error cost. Cheap, reversible, parallel tasks don't need reflection; expensive, sequential, rule-bound ones do. Applies well beyond the think tool — it's a good heuristic for when to spend any extra inference budget on deliberation.
