---
id: INS-260602-EA48
domain: ai-development
topic: agent-patterns
title: >-
  Agent loops have no built-in self-termination signal — the tool list must
  constrain them upfront
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - agent-loops
  - tool-selection
  - agent-reliability
  - non-termination
  - failure-modes
sources:
  - type: audio
    title: agent
date_extracted: '2026-06-02'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Mansi More: when an agent picks a wrong tool, gets a wrong answer, goes back
    and picks another wrong tool, 'there is no way for the agent to tell that
    hey it's breaking, stop' — so you must curate the tool list (e.g. an
    allowlist config) before the agent runs, not rely on it to self-correct.
  standard: >-
    The failure mode named here is specific and underappreciated: an agent in a
    tool-selection loop has no intrinsic stopping condition. It selects a tool,
    gets a bad result, retries with a different tool, gets another bad result,
    and repeats — with no internal signal that says 'I am thrashing, halt.'
    Unlike a human who notices they're going in circles, the agent's loop
    continues until an external limit (turn cap, timeout, budget) cuts it off.


    The prescribed fix is upstream constraint, not downstream detection: curate
    the list of tools the agent can choose from before it runs (the speaker
    references a tools-selection config file). A smaller, well-chosen tool set
    means fewer wrong branches to thrash between. This inverts the naive
    intuition that 'more tools = more capable agent' — past a point, more tools
    widen the loop's search space and make non-termination more likely.


    For anyone building agent systems (including Zuhn's own agent-execution
    layer): treat the tool registry as a reliability surface, not just a
    capability surface. Every tool you add is a branch the agent can get stuck
    choosing wrongly. The design discipline is to expose the minimum tool set
    that covers the task, plus an explicit external loop-breaker (max-retries /
    max-turns), because the agent will not break the loop on its own.
stance: >-
  Autonomous agents cannot reliably detect when they are stuck in a wrong-tool
  retry loop, so reliability must come from constraining the available tool set
  in advance rather than expecting the agent to recognize and break the loop
  itself
related:
  - INS-260403-9B5D
  - INS-260410-A1E9
  - INS-260410-CD79
  - INS-260410-095B
  - INS-260410-358E
  - INS-260605-35B4
  - INS-260605-8E69
  - INS-260626-485E
  - INS-260321-2482
  - INS-260605-3872
---
The failure mode named here is specific and underappreciated: an agent in a tool-selection loop has no intrinsic stopping condition. It selects a tool, gets a bad result, retries with a different tool, gets another bad result, and repeats — with no internal signal that says 'I am thrashing, halt.' Unlike a human who notices they're going in circles, the agent's loop continues until an external limit (turn cap, timeout, budget) cuts it off.

The prescribed fix is upstream constraint, not downstream detection: curate the list of tools the agent can choose from before it runs (the speaker references a tools-selection config file). A smaller, well-chosen tool set means fewer wrong branches to thrash between. This inverts the naive intuition that 'more tools = more capable agent' — past a point, more tools widen the loop's search space and make non-termination more likely.

For anyone building agent systems (including Zuhn's own agent-execution layer): treat the tool registry as a reliability surface, not just a capability surface. Every tool you add is a branch the agent can get stuck choosing wrongly. The design discipline is to expose the minimum tool set that covers the task, plus an explicit external loop-breaker (max-retries / max-turns), because the agent will not break the loop on its own.
