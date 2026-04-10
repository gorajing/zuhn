---
id: INS-260410-E73E
domain: ai-development
topic: agents
title: >-
  Benchmark scores on agents are contaminated by grading infrastructure, not
  just model capability
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - evaluation
  - swe-bench
  - benchmarks
  - grading
  - infrastructure
sources:
  - type: blog
    title: Claude SWE-Bench Performance
    url: 'https://www.anthropic.com/engineering/swe-bench-sonnet'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Anthropic found environment setup issues, double-applied patches, and hidden
    tests the model couldn't see all caused failures that weren't really about
    model skill.
  standard: >-
    The post explicitly flags that while inspecting failed SWE-bench tasks, the
    team found cases where the model behaved correctly but environment setup was
    broken, or install patches were applied twice. Hidden tests caused another
    class of failure: the model often 'thinks' it has succeeded because it
    solved the stated problem, but the graded unit tests exercise a different
    abstraction level, or an edge case the issue didn't describe.


    This has two implications. First, when you report or consume agent benchmark
    numbers, a meaningful portion of the gap between the score and 100% is
    infrastructure noise, not model incapability — so the true headroom is
    smaller than raw scores suggest. Second, if you're building evals for your
    own agents, expect to spend significant time on the grading harness itself,
    not just the model prompts. Without that investment, you'll be optimizing
    your agent against noise.


    Corollary for eval design: show the model enough context about what success
    looks like, and be suspicious of any eval where the model is confidently
    wrong — that's usually a harness bug, not a model failure.
stance: >-
  A meaningful share of agent benchmark failures come from environment setup
  bugs, patch application errors, and hidden-test ambiguity — not model
  incapability.
related:
  - INS-260323-01F9
  - INS-260402-3C79
  - INS-260410-FD24
  - INS-260410-F08E
  - PRI-260407-69A9
  - INS-260410-B3C4
  - INS-260410-B0D6
  - INS-260410-A1CA
---
The post explicitly flags that while inspecting failed SWE-bench tasks, the team found cases where the model behaved correctly but environment setup was broken, or install patches were applied twice. Hidden tests caused another class of failure: the model often 'thinks' it has succeeded because it solved the stated problem, but the graded unit tests exercise a different abstraction level, or an edge case the issue didn't describe.

This has two implications. First, when you report or consume agent benchmark numbers, a meaningful portion of the gap between the score and 100% is infrastructure noise, not model incapability — so the true headroom is smaller than raw scores suggest. Second, if you're building evals for your own agents, expect to spend significant time on the grading harness itself, not just the model prompts. Without that investment, you'll be optimizing your agent against noise.

Corollary for eval design: show the model enough context about what success looks like, and be suspicious of any eval where the model is confidently wrong — that's usually a harness bug, not a model failure.
