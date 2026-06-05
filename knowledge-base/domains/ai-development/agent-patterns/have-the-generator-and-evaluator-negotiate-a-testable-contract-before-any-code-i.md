---
id: INS-260605-1E04
domain: ai-development
topic: agent-patterns
title: >-
  Have the generator and evaluator negotiate a testable contract before any code
  is written
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - contracts
  - planning
  - verification
  - definition-of-done
  - agent-coordination
sources:
  - type: youtube
    title: >-
      Anthropic Workshop: Build Agents That Run for Hours — Ash Prabaker &
      Andrew Wilson
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=mR-WAvEPRwE'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Before the generator writes a line, the two agents negotiate what 'done'
    means via files on disk, and the evaluator grades against that contract
    rather than the planner's original spec.
  standard: >-
    The 'glue' between generator and evaluator is a negotiated contract. The
    generator proposes 'I'll build X and you verify it by testing Y'; the
    evaluator pushes back ('scope is too big, those tests are too weak, you
    missed this edge case'); they iterate via markdown files on disk until both
    agree, then building starts. The evaluator then grades against that
    negotiated contract — not the high-level spec the planner one-shotted at the
    start. This bridges fuzzy user-stories into tangible, testable assertions
    without forcing the planner to over-specify upfront. Specificity is what
    makes it work: for one app the agents settled on 27 contract criteria, and
    that granularity is what made findings actionable — vague criteria yield
    vague critiques the generator just shrugs at, while granular criteria tell
    the agent exactly which line to fix. This is what the Ralph loop lacked: a
    fixed plan.md with nobody on the other side arguing with the main loop.
stance: >-
  Negotiating a concrete 'definition of done' between builder and critic before
  building beats grading against a one-shot upfront spec.
related:
  - INS-260410-AA6E
  - INS-260605-6444
  - INS-260530-D34F
  - PRI-260411-14DC
  - INS-260605-C536
---
The 'glue' between generator and evaluator is a negotiated contract. The generator proposes 'I'll build X and you verify it by testing Y'; the evaluator pushes back ('scope is too big, those tests are too weak, you missed this edge case'); they iterate via markdown files on disk until both agree, then building starts. The evaluator then grades against that negotiated contract — not the high-level spec the planner one-shotted at the start. This bridges fuzzy user-stories into tangible, testable assertions without forcing the planner to over-specify upfront. Specificity is what makes it work: for one app the agents settled on 27 contract criteria, and that granularity is what made findings actionable — vague criteria yield vague critiques the generator just shrugs at, while granular criteria tell the agent exactly which line to fix. This is what the Ralph loop lacked: a fixed plan.md with nobody on the other side arguing with the main loop.
