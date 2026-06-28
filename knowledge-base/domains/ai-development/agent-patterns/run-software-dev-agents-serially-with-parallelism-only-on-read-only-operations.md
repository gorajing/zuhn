---
id: INS-260605-2D70
domain: ai-development
topic: agent-patterns
title: Run software-dev agents serially with parallelism only on read-only operations
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - multi-agent
  - parallelism
  - concurrency
  - error-rate
  - orchestration
sources:
  - type: youtube
    title: 'The Multi-Agent Architecture That Actually Ships — Luke Alvoeiro, Factory'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=ow1we5PzK-o'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Default to one worker/validator at a time and parallelize only read-only
    work like code search, API research, and code review.
  standard: >-
    The intuitive design for multi-agent systems is mass parallelism—10 agents
    for 10x throughput. Factory tried this and found it fails for software
    development: agents step on each other's changes, duplicate work, and make
    inconsistent architectural decisions, so coordination overhead eats the
    speed gains while burning tokens. Missions instead runs features
    serially—only one worker or validator active at any moment—and parallelizes
    only read-only operations (searching the codebase, researching APIs, running
    multiple code-review agents). This 'serial execution with targeted internal
    parallelization' looks slower on paper, but the error rate drops
    dramatically, and on multi-day tasks that correctness compounds. The general
    principle: parallelize work that doesn't mutate shared state, serialize work
    that does. Concurrency is cheap where there's no write contention and
    ruinous where there is.
stance: >-
  For software tasks, serial agent execution beats parallel because coordination
  overhead and conflicts erase the throughput gains.
related:
  - INS-260323-2E51
  - INS-260627-F578
  - INS-260627-765B
  - INS-260603-73D5
  - INS-260320-1B10
  - INS-260628-0167
---
The intuitive design for multi-agent systems is mass parallelism—10 agents for 10x throughput. Factory tried this and found it fails for software development: agents step on each other's changes, duplicate work, and make inconsistent architectural decisions, so coordination overhead eats the speed gains while burning tokens. Missions instead runs features serially—only one worker or validator active at any moment—and parallelizes only read-only operations (searching the codebase, researching APIs, running multiple code-review agents). This 'serial execution with targeted internal parallelization' looks slower on paper, but the error rate drops dramatically, and on multi-day tasks that correctness compounds. The general principle: parallelize work that doesn't mutate shared state, serialize work that does. Concurrency is cheap where there's no write contention and ruinous where there is.
