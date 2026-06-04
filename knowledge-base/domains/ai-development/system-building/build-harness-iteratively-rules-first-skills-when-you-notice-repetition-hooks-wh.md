---
id: INS-260514-EE1D
domain: ai-development
topic: system-building
title: >-
  Build harness iteratively — rules first, skills when you notice repetition,
  hooks when stakes rise
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - iterative-harness-building
  - yagni-for-harnesses
  - incremental-addition
  - manu-codex
sources:
  - type: youtube
    title: Codex 마스터 클래스 라이브 | 하네스 설계부터 서비스 배포까지 (라이브 마지막에는 작은 이벤트도 준비했습니다)
    author: 개발동생
    url: 'https://www.youtube.com/live/F5pr-hfyuEE'
date_extracted: '2026-05-14'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Harness order: rules first → skills when you repeat yourself → MCP when you
    need external systems → hooks when stakes rise → sub-agents when contexts
    conflict. Don't design the whole thing upfront. Add components when friction
    surfaces.
  standard: >-
    Manu's recommended build sequence: 'Rather than trying to make it perfect
    from the start, it would be better to build it by adding the necessary
    components one by one. Step 1: define the agent's rules. Skills you can
    utilize when you have prompts that you are repeatedly writing, or when you
    want to establish a workflow as a skill. If you want to connect external
    tools, you can use MCP. For verification, approval delegation, or
    automation, utilize hooks or sub-agents together.' The sequence has
    structural justification: (1) Rules (agent.md) are the only universal
    component — every agent session reads them. Investing here pays back on
    every interaction. (2) Skills payback only when you'd otherwise write the
    same prompt multiple times. Premature skills (one-time prompts dressed up as
    skills) add maintenance cost without payback. (3) MCP only matters when
    external systems are actually involved. Building MCPs for systems you don't
    yet use is wasted effort. (4) Hooks only matter at the moment stakes rise
    enough that judgment-based control becomes risky. Adding hooks for
    everything from day one creates a fragile harness that breaks during normal
    exploration. (5) Sub-agents only matter when context conflicts emerge (the
    main session needs to know something while a sub-task needs a different
    context). Premature sub-agents fragment workflows unnecessarily. The general
    principle is YAGNI for harnesses: each component costs maintenance attention
    forever. Add only when current friction justifies it. The corollary: the
    same incremental order applies to any complex tooling investment. Start with
    the simplest viable workflow, add complexity only when current friction
    makes the cost worthwhile. The trap is the opposite pattern: 'while we're
    setting this up, let's get everything in place' — produces harnesses that
    look impressive but have unused components consuming attention without
    producing value. Manu adds the meta-lesson: 'I felt that frameworks like
    Superpowers or G-Stack are a bit excessive in this environment.' Rather than
    installing a complete framework, extract the specific patterns you need and
    incorporate them into your own simpler harness. Frameworks are general; your
    environment is specific. Adapt-and-extract beats install-wholesale.
stance: >-
  Don't try to design a complete harness upfront — start with the agent's rules
  (agent.md, the only mandatory layer), add skills when you notice yourself
  repeating prompts, add MCP when you need external systems, add hooks when
  stakes rise enough that judgment-based control becomes risky, add sub-agents
  when context conflicts emerge; this incremental order matches how friction
  actually appears in practice.
related:
  - INS-260329-7B2D
  - PRI-260406-1AC6
  - INS-260322-C935
  - INS-260329-18C9
  - PRI-260406-874A
  - INS-260325-6FA7
---
Manu's recommended build sequence: 'Rather than trying to make it perfect from the start, it would be better to build it by adding the necessary components one by one. Step 1: define the agent's rules. Skills you can utilize when you have prompts that you are repeatedly writing, or when you want to establish a workflow as a skill. If you want to connect external tools, you can use MCP. For verification, approval delegation, or automation, utilize hooks or sub-agents together.' The sequence has structural justification: (1) Rules (agent.md) are the only universal component — every agent session reads them. Investing here pays back on every interaction. (2) Skills payback only when you'd otherwise write the same prompt multiple times. Premature skills (one-time prompts dressed up as skills) add maintenance cost without payback. (3) MCP only matters when external systems are actually involved. Building MCPs for systems you don't yet use is wasted effort. (4) Hooks only matter at the moment stakes rise enough that judgment-based control becomes risky. Adding hooks for everything from day one creates a fragile harness that breaks during normal exploration. (5) Sub-agents only matter when context conflicts emerge (the main session needs to know something while a sub-task needs a different context). Premature sub-agents fragment workflows unnecessarily. The general principle is YAGNI for harnesses: each component costs maintenance attention forever. Add only when current friction justifies it. The corollary: the same incremental order applies to any complex tooling investment. Start with the simplest viable workflow, add complexity only when current friction makes the cost worthwhile. The trap is the opposite pattern: 'while we're setting this up, let's get everything in place' — produces harnesses that look impressive but have unused components consuming attention without producing value. Manu adds the meta-lesson: 'I felt that frameworks like Superpowers or G-Stack are a bit excessive in this environment.' Rather than installing a complete framework, extract the specific patterns you need and incorporate them into your own simpler harness. Frameworks are general; your environment is specific. Adapt-and-extract beats install-wholesale.
