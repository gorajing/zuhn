---
id: INS-260627-805E
domain: ai-development
topic: claude-code
title: >-
  Rules files structurally cannot capture taste — preferences must be learned
  from edits
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - rules-files
  - context-engineering
  - implicit-feedback
  - agent-memory
sources:
  - type: youtube
    title: >-
      Developing Taste in Coding Agents: Applied Meta Neuro-Symbolic RL — Ahmad
      Awais, CommandCode
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=kWOQS3XPZ10'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    You cannot write enough rules to encode your taste — agents should learn it
    from watching you edit their output, not from ever-growing config files.
  standard: >-
    Awais's analogy is that rules files are like a justice system: written rules
    are never enough, which is why we still need judges and juries to resolve
    specific situations. Likewise, a developer's preferences are conditional and
    contextual ('Next.js vs Next.js with a different routing convention create
    the same API route file, but I want them handled differently in this project
    versus that one') — encoding all of it explicitly means you spend your time
    writing rules instead of writing code.


    The proposed alternative is learning from implicit feedback: the agent
    watches you go in and fix its generated code, and infers the underlying
    choice. The example given is switching CLI libraries — 'this guy used to use
    meow, then two months ago switched to commander' — which the system picks up
    and updates automatically without being told.


    This is a direct challenge to the now-standard practice of maintaining large
    CLAUDE.md/agents.md files. The claim isn't that rules are useless, but that
    they hit a ceiling: anything tacit, conditional, or evolving is better
    captured by observing behavior than by asking the developer to articulate
    it. Confidence is medium because this is a vendor's framing of an unshipped,
    unpublished approach, but the underlying tension — explicit rules vs.
    learned preference — is real and recurring.
stance: >-
  Hand-written rules files (CLAUDE.md, agents.md) will always be insufficient
  because taste is tacit; agents should infer preferences from observing how you
  edit their code instead of demanding you enumerate them.
related:
  - INS-260605-5BAD
  - INS-260625-D510
  - INS-260626-0CFF
  - INS-260626-8308
  - INS-260627-8DF1
  - INS-260627-20C1
  - PRI-260328-AC85
  - INS-260530-E697
---
Awais's analogy is that rules files are like a justice system: written rules are never enough, which is why we still need judges and juries to resolve specific situations. Likewise, a developer's preferences are conditional and contextual ('Next.js vs Next.js with a different routing convention create the same API route file, but I want them handled differently in this project versus that one') — encoding all of it explicitly means you spend your time writing rules instead of writing code.

The proposed alternative is learning from implicit feedback: the agent watches you go in and fix its generated code, and infers the underlying choice. The example given is switching CLI libraries — 'this guy used to use meow, then two months ago switched to commander' — which the system picks up and updates automatically without being told.

This is a direct challenge to the now-standard practice of maintaining large CLAUDE.md/agents.md files. The claim isn't that rules are useless, but that they hit a ceiling: anything tacit, conditional, or evolving is better captured by observing behavior than by asking the developer to articulate it. Confidence is medium because this is a vendor's framing of an unshipped, unpublished approach, but the underlying tension — explicit rules vs. learned preference — is real and recurring.
