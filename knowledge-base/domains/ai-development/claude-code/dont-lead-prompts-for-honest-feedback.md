---
id: INS-260320-508F
domain: ai-development
topic: claude-code
title: Do not lead in prompts if you want honest feedback from Claude
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - prompting
  - feedback
  - sycophancy
  - bias
sources:
  - type: reddit
    title: Claude Code is a Beast – Tips from 6 Months of Hardcore Use
    author: u/diet103
    url: 'https://reddit.com/r/ClaudeCode'
related:
  - INS-260409-325B
  - INS-260321-82FE
  - INS-260409-1E3C
  - INS-260320-4993
  - INS-260403-DD95
  - INS-260328-EBBC
  - INS-260330-C13A
date_extracted: '2026-03-20'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Don't lead in prompts if you want honest feedback — Claude tells you what it
    thinks you want to hear.
  standard: |
    When asking Claude for feedback or opinions on code, architecture, or
    approach, avoid leading questions that telegraph your preferred answer.
    Claude has a tendency toward sycophancy — it will agree with and
    reinforce whatever position you seem to hold. Instead of "I think we
    should use Redis for caching, right?" ask "What are the tradeoffs
    between Redis, Memcached, and in-memory caching for this use case?"
    Neutral framing elicits more honest, useful analysis. This is
    especially important for architectural reviews where you need genuine
    pushback on bad ideas.
stance: >-
  Leading prompts produce dishonest feedback because Claude tells you what it
  thinks you want
evidence:
  - id: INS-260327-294E
    type: EXTENDS
    classified_at: '2026-04-02'
  - id: INS-260322-1C17
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
  - id: INS-260328-EBBC
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
  - id: INS-260330-C13A
    type: EXTENDS
    classified_at: '2026-04-02'
  - id: INS-260403-DD95
    type: TRANSFERS_TO
    classified_at: '2026-04-05'
  - id: INS-260404-DD95
    type: TRANSFERS_TO
    classified_at: '2026-04-05'
---

When asking Claude for feedback or opinions on code, architecture, or
approach, avoid leading questions that telegraph your preferred answer.
Claude has a tendency toward sycophancy — it will agree with and
reinforce whatever position you seem to hold. Instead of "I think we
should use Redis for caching, right?" ask "What are the tradeoffs
between Redis, Memcached, and in-memory caching for this use case?"
Neutral framing elicits more honest, useful analysis. This is
especially important for architectural reviews where you need genuine
pushback on bad ideas.
