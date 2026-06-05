---
id: INS-260605-E7F2
domain: ai-development
topic: agent-patterns
title: Reference dynamic content from skills — never duplicate it inline
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - skills
  - documentation
  - staleness
  - skill-design
  - versioning
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
    Point skills at the live documentation reference instead of embedding
    content, because inline copies go stale the same way pretraining context
    does.
  standard: >-
    There is strong pull from both internal developers and community
    contributors to stuff a skill full of context — it feels like a fast local
    cache of the docs, immediately available to the agent. Klingen warns this
    recreates the exact failure that motivated skills in the first place: the
    embedded content goes out of date, and now you maintain two diverging
    representations of what the product is (the real docs and the skill's copy).


    The fix is to make the skill point straight to the documentation reference
    and fetch fresh. This is also why naive optimization can backfire — an
    auto-optimizer that minimizes turns will strip out the 'fetch up-to-date
    docs' steps, leaving a skill that works at install time but serves stale
    answers three months later. The discipline: dynamic content is referenced,
    not duplicated. The open problem Klingen flags is distribution — there is no
    package manager for skills, so staleness detection currently relies on
    timestamping the skill and prompting a re-fetch when it looks old.
stance: >-
  Copying documentation into a skill creates a stale local cache that drifts
  exactly like outdated pretraining data.
related:
  - PRI-260321-D74F
  - INS-260329-9CFE
  - INS-260409-60C2
  - INS-260410-F985
  - INS-260320-0127
---
There is strong pull from both internal developers and community contributors to stuff a skill full of context — it feels like a fast local cache of the docs, immediately available to the agent. Klingen warns this recreates the exact failure that motivated skills in the first place: the embedded content goes out of date, and now you maintain two diverging representations of what the product is (the real docs and the skill's copy).

The fix is to make the skill point straight to the documentation reference and fetch fresh. This is also why naive optimization can backfire — an auto-optimizer that minimizes turns will strip out the 'fetch up-to-date docs' steps, leaving a skill that works at install time but serves stale answers three months later. The discipline: dynamic content is referenced, not duplicated. The open problem Klingen flags is distribution — there is no package manager for skills, so staleness detection currently relies on timestamping the skill and prompting a re-fetch when it looks old.
