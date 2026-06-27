---
id: INS-260627-9D3D
domain: ai-development
topic: human-ai-relationship
title: >-
  Write important code by hand because the friction is what builds your mental
  model of the system
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - learning
  - friction
  - code-review
  - discipline
  - scoping-agent-tasks
sources:
  - type: youtube
    title: Building pi in a World of Slop — Mario Zechner
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=RjfbvDXpFls'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    If you do anything important, write it by hand — the friction is what builds
    the understanding of the system in your head, and that understanding is
    exactly what agents can't give you.
  standard: >-
    Zechner's prescription inverts the productivity framing of AI coding. The
    goal is not to maximize generated tokens but to preserve the human's
    understanding of the system. For non-critical or boring work, 'five slop
    ahead' — let the agent rip. But for critical code, read every line; and for
    anything important, write it by hand. You can use an agent to help, but
    don't let it make the decisions, because all the decisions it makes are
    learned from the internet's garbage. The friction of writing it yourself is
    not waste — it 'builds the understanding of the system in your head,' and it
    is also where you learn new things.


    He pairs this with a definition of good agent tasks, which is the
    constructive flip side of the slop critique. Agents are excellent when you
    can (a) scope the task so the agent is guaranteed to find everything it
    needs — which means modularizing your codebase; (b) give it a function to
    evaluate how well it did, enabling hill-climbing and auto-research; or (c)
    hand it anything non-mission-critical, boring, a reproduction case for a
    user issue, or use it as a rubber duck. After the agent runs, the human
    evaluates ('most of it isn't reasonable'), takes what's good, and finalizes.


    The meta-skill he elevates above all others is learning to say no: 'fewer
    features, but the ones that matter.' Cap the amount of generated code you
    have to review, build because you've thought about what and why rather than
    because the agent can, and recognize that all of this — discipline, agency,
    judgment about what's critical — still requires humans. The throughline with
    the rest of the talk: control of your tools, your context, and your critical
    code is what keeps you able to fix things when they break.
stance: >-
  For critical work you should write the code by hand and read every line,
  because the friction of doing so is the mechanism that builds understanding
  and where learning happens.
related:
  - INS-260330-C33B
  - INS-260403-03BD
  - INS-260404-DF95
  - INS-260605-2793
  - INS-260605-2D9B
  - INS-260605-CE19
  - PRI-260405-9A14
---
Zechner's prescription inverts the productivity framing of AI coding. The goal is not to maximize generated tokens but to preserve the human's understanding of the system. For non-critical or boring work, 'five slop ahead' — let the agent rip. But for critical code, read every line; and for anything important, write it by hand. You can use an agent to help, but don't let it make the decisions, because all the decisions it makes are learned from the internet's garbage. The friction of writing it yourself is not waste — it 'builds the understanding of the system in your head,' and it is also where you learn new things.

He pairs this with a definition of good agent tasks, which is the constructive flip side of the slop critique. Agents are excellent when you can (a) scope the task so the agent is guaranteed to find everything it needs — which means modularizing your codebase; (b) give it a function to evaluate how well it did, enabling hill-climbing and auto-research; or (c) hand it anything non-mission-critical, boring, a reproduction case for a user issue, or use it as a rubber duck. After the agent runs, the human evaluates ('most of it isn't reasonable'), takes what's good, and finalizes.

The meta-skill he elevates above all others is learning to say no: 'fewer features, but the ones that matter.' Cap the amount of generated code you have to review, build because you've thought about what and why rather than because the agent can, and recognize that all of this — discipline, agency, judgment about what's critical — still requires humans. The throughline with the rest of the talk: control of your tools, your context, and your critical code is what keeps you able to fix things when they break.
