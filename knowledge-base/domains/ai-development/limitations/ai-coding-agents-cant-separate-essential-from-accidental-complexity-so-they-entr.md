---
id: INS-260627-0A85
domain: ai-development
topic: limitations
title: >-
  AI coding agents can't separate essential from accidental complexity, so they
  entrench technical debt
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - essential-complexity
  - accidental-complexity
  - fred-brooks
  - technical-debt
  - refactoring
  - legacy-code
sources:
  - type: youtube
    title: 'The Infinite Software Crisis – Jake Nations, Netflix'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=eIoohUmYpGI'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    When an agent analyzes a codebase, technical debt doesn't register as debt —
    it's just another pattern to preserve, so AI adds layers on top of tangled
    accidental complexity instead of untangling it.
  standard: >-
    Brooks split system complexity into essential (the fundamental difficulty of
    the problem: users must pay, orders must be fulfilled) and accidental
    (everything added to make the code work: workarounds, defensive code, dated
    abstractions). In a real codebase these are tangled together, and separating
    them requires context, history, and experience.


    The generated output makes no such distinction: 'the authentication check on
    line 47, that's a pattern; that weird gRPC code acting like GraphQL from
    2019, that's also a pattern.' Nations' Netflix example — refactoring an old
    authorization layer with permission checks woven through business logic and
    auth calls scattered across hundreds of files — shows the failure mode
    concretely: the agent gets a few files in, hits a dependency it can't
    untangle, and either spirals out or faithfully recreates the old broken
    logic in the new system. The lesson is that the more entangled the
    accidental complexity, the less AI helps — humans must do the
    essential-vs-accidental separation up front because only they carry the
    history that disambiguates the two.
stance: >-
  Code generation treats every existing pattern as a requirement to preserve, so
  AI deepens accidental complexity in tangled codebases rather than removing it.
related:
  - INS-260323-1477
  - INS-260329-6A26
  - INS-260404-D60F
  - INS-260514-E481
  - INS-260605-5013
  - INS-260627-0C43
  - INS-260605-BA6A
  - INS-260627-11C1
  - INS-260626-690F
  - INS-260530-D34F
---
Brooks split system complexity into essential (the fundamental difficulty of the problem: users must pay, orders must be fulfilled) and accidental (everything added to make the code work: workarounds, defensive code, dated abstractions). In a real codebase these are tangled together, and separating them requires context, history, and experience.

The generated output makes no such distinction: 'the authentication check on line 47, that's a pattern; that weird gRPC code acting like GraphQL from 2019, that's also a pattern.' Nations' Netflix example — refactoring an old authorization layer with permission checks woven through business logic and auth calls scattered across hundreds of files — shows the failure mode concretely: the agent gets a few files in, hits a dependency it can't untangle, and either spirals out or faithfully recreates the old broken logic in the new system. The lesson is that the more entangled the accidental complexity, the less AI helps — humans must do the essential-vs-accidental separation up front because only they carry the history that disambiguates the two.
