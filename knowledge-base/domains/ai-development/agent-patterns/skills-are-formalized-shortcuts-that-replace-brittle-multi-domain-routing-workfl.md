---
id: INS-260605-90E5
domain: ai-development
topic: agent-patterns
title: >-
  Skills are formalized shortcuts that replace brittle multi-domain routing
  workflows
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - skills
  - agent-architecture
  - workflows
  - routing
  - progressive-disclosure
sources:
  - type: youtube
    title: >-
      Skill issue: Lessons from skilling up coding agents to use Langfuse - Marc
      Klingen, Clickhouse
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=vNCY9kXXyDQ'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    A skill replaces the hand-built router-and-specialist-workflow stack by
    letting a single agent progressively acquire the context to solve
    cross-domain requests.
  standard: >-
    Historically, reliability came from workflows: a router classifies the
    request and hands it to a narrow specialist agent loaded with the right
    context (e.g. a password-reset agent). This breaks the moment a user wants
    two things at once — reset password AND change email — because the router
    has no branch for the combination. Skills resolve this by giving a general
    agent a formalized manual it can read on demand, progressively disclosing
    the context needed for whichever combination of sub-tasks shows up.


    The tradeoff Klingen frames is reliability (workflows) versus capability
    (autonomous agents). Skills sit between: they recover much of the workflow's
    reliability — a written procedure the agent follows — without
    pre-enumerating every routing path. Not every application needs a frontier
    coding agent; the skill is the cheaper, more reliable formalization for the
    cases that would otherwise demand a hand-built workflow tree.
stance: >-
  Skills let one agent progressively pull the context it needs for multi-domain
  tasks, making the old router-to-specialist-workflow pattern obsolete.
related:
  - PRI-260320-D5B7
  - INS-260514-4436
  - INS-260522-213D
  - INS-260605-B6BC
  - INS-260627-E34D
  - PRI-260328-A65A
  - INS-260627-F4F9
  - INS-260626-E45C
  - INS-260627-FDB3
---
Historically, reliability came from workflows: a router classifies the request and hands it to a narrow specialist agent loaded with the right context (e.g. a password-reset agent). This breaks the moment a user wants two things at once — reset password AND change email — because the router has no branch for the combination. Skills resolve this by giving a general agent a formalized manual it can read on demand, progressively disclosing the context needed for whichever combination of sub-tasks shows up.

The tradeoff Klingen frames is reliability (workflows) versus capability (autonomous agents). Skills sit between: they recover much of the workflow's reliability — a written procedure the agent follows — without pre-enumerating every routing path. Not every application needs a frontier coding agent; the skill is the cheaper, more reliable formalization for the cases that would otherwise demand a hand-built workflow tree.
