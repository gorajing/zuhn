---
id: INS-260627-D456
domain: ai-development
topic: agent-patterns
title: 'Skills load on demand via their description, not by being always in context'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - progressive-disclosure
  - context-engineering
  - agent-skills
  - tool-design
sources:
  - type: youtube
    title: "AI Didn’t Kill the Web, It Moved in! —\_Olivier Leplus (AWS) & Yohan Lasorsa (Microsoft)"
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=XZ0boOjtbNo'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    A skill's description field is the load trigger: agents pull a skill into
    context only when its description signals relevance, keeping the context
    window lean as the capability library grows.
  standard: >-
    The speakers emphasize that the description in a skill.md is 'the important
    part' because skills are not always loaded into the agent—they are pulled in
    depending on what's needed for the current task. The description exists to
    tell the agent when the skill is useful and when it needs to fetch the
    skill's full instructions (commands, examples) into context. This is
    progressive disclosure applied to agent tooling: the agent sees a cheap
    index of capabilities and only pays the context cost of the full
    instructions when a task actually warrants it.


    This is the architectural pattern that lets a skills library scale without
    bloating every request. It mirrors how MCP exposes tool names and
    definitions so an agent knows when to call them. The design lesson
    generalizes beyond skills: when building any agent capability surface,
    optimize the short description for retrieval/triggering accuracy first,
    because that metadata—not the full body—is what the agent reasons over when
    deciding whether to engage. A precise, scope-bounding description is doing
    the real work; the body is just the payload it unlocks.
stance: >-
  Capabilities should be exposed to agents as named, described units that get
  pulled into context only when their description matches the current task,
  rather than loaded upfront.
related:
  - INS-260320-8DBD
  - INS-260320-DCA0
  - INS-260501-6453
  - INS-260605-6591
  - INS-260605-117F
  - INS-260605-C86D
  - INS-260605-5B0A
  - INS-260605-2032
  - INS-260627-050C
  - INS-260627-A19B
---
The speakers emphasize that the description in a skill.md is 'the important part' because skills are not always loaded into the agent—they are pulled in depending on what's needed for the current task. The description exists to tell the agent when the skill is useful and when it needs to fetch the skill's full instructions (commands, examples) into context. This is progressive disclosure applied to agent tooling: the agent sees a cheap index of capabilities and only pays the context cost of the full instructions when a task actually warrants it.

This is the architectural pattern that lets a skills library scale without bloating every request. It mirrors how MCP exposes tool names and definitions so an agent knows when to call them. The design lesson generalizes beyond skills: when building any agent capability surface, optimize the short description for retrieval/triggering accuracy first, because that metadata—not the full body—is what the agent reasons over when deciding whether to engage. A precise, scope-bounding description is doing the real work; the body is just the payload it unlocks.
