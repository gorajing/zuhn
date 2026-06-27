---
id: INS-260627-93C4
domain: ai-development
topic: agent-patterns
title: >-
  Context is the agent's biggest enemy — keep the main loop short via sub-agents
  and disk-as-memory
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - context-management
  - sub-agents
  - compaction
  - sandbox-memory
  - to-do-lists
sources:
  - type: youtube
    title: 'How Claude Code Works - Jared Zoneraich, PromptLayer'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=RFKCzGlAU6Q'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    A full context makes the model 'stupider,' so fork work into sub-agents that
    feed back only results and instruct the agent to save state as markdown
    files for long-term memory.
  standard: >-
    Zoneraich names context as 'the boogeyman we're running from all the time' —
    the longer and fuller the context window, the worse the model performs.
    Nearly every architectural feature in Claude Code is a response to this
    single constraint. Sub-agents (the task tool) are the headline answer: each
    fork gets its own isolated context, does heavy work like reading a whole
    file, and feeds back only the distilled results to the main loop, preventing
    clutter. The async H2A buffer decouples I/O from reasoning so the terminal's
    raw output isn't dumped wholesale into the model, and the context compressor
    drops the middle while summarizing head and tail when capacity (~92%) is
    reached.


    The most actionable tactic is disk-as-memory: because a sandbox lets the
    agent persist files, you can instruct it to save markdown files as long-term
    storage, keeping the live context short, fast, and smart. Zoneraich does
    exactly this with his deep-research skills, always instructing the agent to
    write markdown. He predicts every ChatGPT and Claude session will ship with
    a sandbox precisely because durable external memory is so much better than
    stuffing everything into context. The design lesson for anyone building
    agents: treat context as a scarce resource to be defended, and reach for
    sub-agent isolation and external file storage before you reach for a bigger
    window.
stance: >-
  Agent quality degrades as context fills, so the winning architecture keeps the
  main loop's context short by delegating to sub-agents that return only results
  and persisting long-term state to files.
related:
  - INS-260605-9FCF
  - INS-260605-295D
  - INS-260625-3768
  - PRI-260320-07A4
  - INS-260625-E1AA
  - INS-260626-7681
---
Zoneraich names context as 'the boogeyman we're running from all the time' — the longer and fuller the context window, the worse the model performs. Nearly every architectural feature in Claude Code is a response to this single constraint. Sub-agents (the task tool) are the headline answer: each fork gets its own isolated context, does heavy work like reading a whole file, and feeds back only the distilled results to the main loop, preventing clutter. The async H2A buffer decouples I/O from reasoning so the terminal's raw output isn't dumped wholesale into the model, and the context compressor drops the middle while summarizing head and tail when capacity (~92%) is reached.

The most actionable tactic is disk-as-memory: because a sandbox lets the agent persist files, you can instruct it to save markdown files as long-term storage, keeping the live context short, fast, and smart. Zoneraich does exactly this with his deep-research skills, always instructing the agent to write markdown. He predicts every ChatGPT and Claude session will ship with a sandbox precisely because durable external memory is so much better than stuffing everything into context. The design lesson for anyone building agents: treat context as a scarce resource to be defended, and reach for sub-agent isolation and external file storage before you reach for a bigger window.
