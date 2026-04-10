---
id: INS-260410-25AC
domain: ai-development
topic: system-building
title: Keep upstream specs high-level so downstream errors don't cascade
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - planning
  - agent-design
  - specs
  - cascading-errors
  - agent-patterns
sources:
  - type: blog
    title: Harness design for long-running application development
    url: 'https://www.anthropic.com/engineering/harness-design-long-running-apps'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Constrain planner agents to deliverables and high-level design — granular
    technical decisions made upfront propagate errors into the implementation.
  standard: >-
    In the three-agent harness, the planner expanded a 1-4 sentence prompt into
    a full product spec but was deliberately prompted to be ambitious about
    scope while staying focused on product context and high-level technical
    design rather than detailed implementation. The reasoning: if the planner
    specifies granular technical details upfront and gets them wrong, those
    errors cascade into the downstream generator's work with no way to recover.


    The better division of labor is: planner sets the destination (what to
    build, why, what success looks like), generator figures out the path (how to
    build it). A 'sprint contract' negotiation between generator and evaluator
    then bridges the gap between user stories and testable implementation — the
    generator proposes what it'll build and how success will be verified, and
    the evaluator reviews that proposal before any code is written.


    This is a specific instance of a broader pattern: in pipelines where later
    stages depend on earlier ones, push uncertainty as late as possible. Don't
    lock in decisions upstream that you don't yet have the information to make
    correctly.
stance: >-
  Planner agents should specify deliverables and product context but stay out of
  granular technical implementation, because spec errors at the top cascade into
  everything downstream.
related:
  - INS-260410-0575
  - PRI-260328-B4BD
  - PRI-260407-D1AD
  - INS-260327-BF89
  - PRI-260328-F723
  - INS-260327-77E7
---
In the three-agent harness, the planner expanded a 1-4 sentence prompt into a full product spec but was deliberately prompted to be ambitious about scope while staying focused on product context and high-level technical design rather than detailed implementation. The reasoning: if the planner specifies granular technical details upfront and gets them wrong, those errors cascade into the downstream generator's work with no way to recover.

The better division of labor is: planner sets the destination (what to build, why, what success looks like), generator figures out the path (how to build it). A 'sprint contract' negotiation between generator and evaluator then bridges the gap between user stories and testable implementation — the generator proposes what it'll build and how success will be verified, and the evaluator reviews that proposal before any code is written.

This is a specific instance of a broader pattern: in pipelines where later stages depend on earlier ones, push uncertainty as late as possible. Don't lock in decisions upstream that you don't yet have the information to make correctly.
