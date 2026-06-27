---
id: INS-260605-117F
domain: ai-development
topic: claude-code
title: 'A skill description is an LLM routing rule, not human documentation'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - skills
  - routing
  - skill-description
  - context-engineering
sources:
  - type: youtube
    title: 'Full Walkthrough: Writing & Using Skills — Nick Nisi and Zack Proser'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=pFsfax19yOM'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Write descriptions to tell the model exactly when to invoke the skill,
    packing in the acronyms and triggers it should match on.
  standard: >-
    The single most important part of a skill is its description, because that
    is what the model reads to decide whether the skill is relevant to the
    current task. When multiple overlapping skills exist (several image-gen
    skills, competing UX skills across a 60-engineer org), the description is
    where you disambiguate: 'on my personal blog I ship pixel art, so use this
    skill on that domain; at work we only fetch from S3, so use that one there.'
    For public/shared skills WorkOS deliberately stuffs descriptions with all
    the acronyms and terms they expect to trigger a load. A practical
    verification hack: ask the model directly 'when would you load this skill
    given this description?' as a test run, since the models are now capable
    enough to critique their own routing. This reframes skill authoring as
    writing for an automated dispatcher, not a teammate.
stance: >-
  The description field of a skill should be optimized for the model's runtime
  routing decision rather than for human readers.
related:
  - INS-260410-1B17
  - INS-260410-5D71
  - INS-260501-6453
  - INS-260625-3EE6
  - INS-260605-D659
  - INS-260626-475E
  - INS-260605-2032
  - INS-260605-C86D
  - INS-260605-F512
  - INS-260626-6CAE
---
The single most important part of a skill is its description, because that is what the model reads to decide whether the skill is relevant to the current task. When multiple overlapping skills exist (several image-gen skills, competing UX skills across a 60-engineer org), the description is where you disambiguate: 'on my personal blog I ship pixel art, so use this skill on that domain; at work we only fetch from S3, so use that one there.' For public/shared skills WorkOS deliberately stuffs descriptions with all the acronyms and terms they expect to trigger a load. A practical verification hack: ask the model directly 'when would you load this skill given this description?' as a test run, since the models are now capable enough to critique their own routing. This reframes skill authoring as writing for an automated dispatcher, not a teammate.
