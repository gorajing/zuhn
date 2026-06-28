---
id: INS-260628-08FB
domain: ai-development
topic: software-engineering
title: >-
  Research → Plan → Implement: frequent intentional compaction beats iterative
  re-steering
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - rpi
  - research-plan-implement
  - workflow-design
  - brownfield
  - compaction
  - spec-driven-development
sources:
  - type: youtube
    title: "No Vibes Allowed: Solving Hard Problems in Complex Codebases –\_Dex Horthy, HumanLayer"
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=rmvDxxNubIg'
date_extracted: '2026-06-28'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Break AI coding into research (compress truth from the code), plan (compress
    intent into explicit steps with file names and code snippets), and implement
    — staying in the smart zone at every phase.
  standard: >-
    The naive workflow is to ask an agent for something, tell it why it's wrong,
    and re-steer until you run out of context or give up. Horthy's alternative
    is 'frequent intentional compaction' structured as three phases. Research
    understands how the system actually works and finds the right files — often
    by launching sub-agents that take vertical slices through the codebase and
    build a snapshot that is true to the current code (the code is the source of
    truth, so this 'compresses truth' rather than trusting stale docs). Planning
    compresses intent: it outlines exact steps, includes file names, line
    snippets, and real code snippets, and is explicit about how each change gets
    tested. Implementation just runs the plan while keeping context low — a good
    plan is one 'the dumbest model in the world is probably not going to screw
    up.'


    The results he cites are concrete: a one-shot PR fix to a 300k-line Rust
    codebase that the target CTO accepted for the next release, and 35,000 lines
    shipped to BAML in a 7-hour session (estimated at 1-2 weeks of manual work).
    But there are limits — removing Hadoop dependencies from Parquet Java failed
    and forced a return to the whiteboard, reinforcing that the method amplifies
    thinking rather than replacing it.


    Importantly, RPI is not 'spec-driven development,' a phrase Horthy considers
    broken by semantic diffusion (Martin Fowler's 2006 observation that good
    terms get diluted to mean a hundred things). The durable substance is
    compaction and staying in the smart zone; the acronym is incidental, and
    effort should scale to problem difficulty — a button color change needs no
    plan, a medium cross-repo feature needs one research pass and one plan.
stance: >-
  Structuring AI coding work as discrete research, plan, and implement phases —
  each compacted to a file — outperforms re-prompting a single long conversation
  in complex codebases.
related:
  - INS-260323-8555
  - INS-260505-A9BC
  - INS-260605-997E
  - INS-260626-105D
  - INS-260628-9705
  - INS-260321-D3BE
  - PRI-260328-B4BD
  - INS-260410-8767
  - INS-260524-63C9
  - INS-260329-04FA
---
The naive workflow is to ask an agent for something, tell it why it's wrong, and re-steer until you run out of context or give up. Horthy's alternative is 'frequent intentional compaction' structured as three phases. Research understands how the system actually works and finds the right files — often by launching sub-agents that take vertical slices through the codebase and build a snapshot that is true to the current code (the code is the source of truth, so this 'compresses truth' rather than trusting stale docs). Planning compresses intent: it outlines exact steps, includes file names, line snippets, and real code snippets, and is explicit about how each change gets tested. Implementation just runs the plan while keeping context low — a good plan is one 'the dumbest model in the world is probably not going to screw up.'

The results he cites are concrete: a one-shot PR fix to a 300k-line Rust codebase that the target CTO accepted for the next release, and 35,000 lines shipped to BAML in a 7-hour session (estimated at 1-2 weeks of manual work). But there are limits — removing Hadoop dependencies from Parquet Java failed and forced a return to the whiteboard, reinforcing that the method amplifies thinking rather than replacing it.

Importantly, RPI is not 'spec-driven development,' a phrase Horthy considers broken by semantic diffusion (Martin Fowler's 2006 observation that good terms get diluted to mean a hundred things). The durable substance is compaction and staying in the smart zone; the acronym is incidental, and effort should scale to problem difficulty — a button color change needs no plan, a medium cross-repo feature needs one research pass and one plan.
