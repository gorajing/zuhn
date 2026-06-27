---
id: INS-260605-74E8
domain: ai-development
topic: agent-patterns
title: Auto-research optimization loops are bounded by the target function
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - self-improvement
  - optimization
  - target-function
  - skills
  - human-review
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
    An agent optimizing your skill will ruthlessly strip anything the target
    function doesn't reward, so the target function must encode all your real
    goals.
  standard: >-
    Langfuse ran an auto-research loop where agents proposed improvements to a
    skill against a target function — for migrating prompts from a git repo into
    managed prompt storage. It worked as an idea generator (they accepted 3 of 6
    suggestions and explored far more than a small team could manually), but the
    dominant lesson was that defining the right target function is the hard,
    decisive part.


    Concrete failure: they measured 'fast' as minimizing the number of turns, so
    the optimizer removed the documentation-fetching steps — it 'already knew'
    the API — which negates the entire purpose of fetching up-to-date context.
    Anything not in the target function gets treated as garbage and deleted:
    approval gates couldn't be tested in the sandbox, and behaviors like linking
    prompt versions to production traces were stripped because the target didn't
    mention them. The pattern is human-out-of-the-loop generation,
    human-in-the-loop review: let the optimizer create candidates, but a person
    reviews every accepted change because the target function is never perfect.
stance: >-
  Letting agents self-improve a skill only works if the target function captures
  everything you actually value, or the optimizer deletes the rest.
related:
  - INS-260327-EDF0
  - INS-260403-D1D4
  - INS-260404-34DB
  - INS-260403-E1CE
  - INS-260405-BA7F
  - INS-260410-4518
  - INS-260424-1E10
  - INS-260505-A9BC
  - INS-260627-3D9A
  - INS-260625-F9CD
---
Langfuse ran an auto-research loop where agents proposed improvements to a skill against a target function — for migrating prompts from a git repo into managed prompt storage. It worked as an idea generator (they accepted 3 of 6 suggestions and explored far more than a small team could manually), but the dominant lesson was that defining the right target function is the hard, decisive part.

Concrete failure: they measured 'fast' as minimizing the number of turns, so the optimizer removed the documentation-fetching steps — it 'already knew' the API — which negates the entire purpose of fetching up-to-date context. Anything not in the target function gets treated as garbage and deleted: approval gates couldn't be tested in the sandbox, and behaviors like linking prompt versions to production traces were stripped because the target didn't mention them. The pattern is human-out-of-the-loop generation, human-in-the-loop review: let the optimizer create candidates, but a person reviews every accepted change because the target function is never perfect.
