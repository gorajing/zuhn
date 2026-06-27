---
id: INS-260627-8674
domain: ai-development
topic: software-engineering
title: You must earn understanding by hand before AI can safely change tangled code
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - manual-migration
  - seed-example
  - legacy-code
  - no-silver-bullet
  - hidden-constraints
  - understanding
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
    The authorization refactor only became automatable after the team did one
    migration entirely by hand — reading code, breaking things, surfacing hidden
    invariants — then fed that pull request to the agent as a seed.
  standard: >-
    Nations is explicit that the three-phase approach 'is not magic — it only
    works because we did this one migration by hand.' The manual migration (no
    AI, just reading code, understanding dependencies, and making changes to see
    what broke) was painful but crucial: it revealed hidden constraints, which
    invariants had to hold, and which services would break if auth changed —
    things no amount of automated code analysis would surface.


    That real pull request then became the seed for the research process: the AI
    could see what a clean migration looks like, and the team interrogated each
    slightly-different entity (some encrypted, some not) through many iterations
    before a plan could work in (maybe) one shot — still validating, still
    adjusting, still discovering edge cases. The principle echoes Brooks
    directly: there is no silver bullet, no better prompt or model that replaces
    the work of understanding your system deeply enough to change it safely.
    Understanding must be earned before it can be encoded into a repeatable
    process.
stance: >-
  On deeply coupled legacy systems, doing one migration manually first is a
  prerequisite for AI success — no prompt, model, or spec substitutes for that
  earned understanding.
related:
  - INS-260626-35A9
  - INS-260530-D34F
  - INS-260605-3AB7
  - INS-260410-1ED3
  - INS-260323-4B4D
---
Nations is explicit that the three-phase approach 'is not magic — it only works because we did this one migration by hand.' The manual migration (no AI, just reading code, understanding dependencies, and making changes to see what broke) was painful but crucial: it revealed hidden constraints, which invariants had to hold, and which services would break if auth changed — things no amount of automated code analysis would surface.

That real pull request then became the seed for the research process: the AI could see what a clean migration looks like, and the team interrogated each slightly-different entity (some encrypted, some not) through many iterations before a plan could work in (maybe) one shot — still validating, still adjusting, still discovering edge cases. The principle echoes Brooks directly: there is no silver bullet, no better prompt or model that replaces the work of understanding your system deeply enough to change it safely. Understanding must be earned before it can be encoded into a repeatable process.
