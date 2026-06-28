---
id: INS-260627-24EB
domain: ai-development
topic: agent-patterns
title: >-
  Perceived agent speed comes from parallel tools and search-before-edit, not
  raw token rate
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - parallel-tool-calling
  - agent-behavior
  - tool-use
  - latency
  - emergent-behavior
sources:
  - type: youtube
    title: "Building Cursor Composer –\_Lee Robinson, Cursor"
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=fL1iJHtl51Q'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    RL taught Composer to call tools in parallel (read 10 files at once instead
    of one-by-one) and to search/read before editing rather than over-editing —
    behavioral changes that make the agent feel much faster and act more
    effectively, independent of token throughput.
  standard: >-
    Cursor optimized two distinct things: raw token generation speed AND the
    end-to-end experience of getting a helpful result. The second mattered more
    behaviorally. RL let them shape agent properties that token speed alone
    couldn't touch. The clearest example is parallel tool calling — instead of
    reading files one at a time, the model reads ten in parallel, which makes
    the whole interaction feel dramatically faster even at the same per-token
    rate.


    The second emergent behavior was discipline. Early in training the model
    made too many edits, sometimes unnecessarily. As training progressed it
    'surprisingly' got better at searching and reading files first — finding the
    right thing before editing — which improved both speed and correctness. This
    is the opposite of the naive expectation that more capable agents act faster
    by doing more; here the improvement came from doing less, but in the right
    order.


    For anyone building or evaluating agents, this separates two levers that are
    easy to conflate: model latency (tokens/sec) versus agent latency
    (time-to-useful-result). Parallelism in tool calls and a search-before-act
    policy attack the second lever directly. And notably, these behaviors were
    learned via RL rather than hand-coded into a scaffold — suggesting that for
    agent efficiency, shaping the policy can outperform engineering the harness.
stance: >-
  An agent's end-to-end speed and quality improve more from parallel tool
  calling and learned search-before-edit discipline than from raw token
  generation speed.
related:
  - INS-260321-18D0
  - INS-260323-2E51
  - INS-260403-9B5D
  - INS-260410-AB4A
  - INS-260605-158D
  - INS-260605-3163
  - INS-260605-CE19
  - INS-260626-BC79
---
Cursor optimized two distinct things: raw token generation speed AND the end-to-end experience of getting a helpful result. The second mattered more behaviorally. RL let them shape agent properties that token speed alone couldn't touch. The clearest example is parallel tool calling — instead of reading files one at a time, the model reads ten in parallel, which makes the whole interaction feel dramatically faster even at the same per-token rate.

The second emergent behavior was discipline. Early in training the model made too many edits, sometimes unnecessarily. As training progressed it 'surprisingly' got better at searching and reading files first — finding the right thing before editing — which improved both speed and correctness. This is the opposite of the naive expectation that more capable agents act faster by doing more; here the improvement came from doing less, but in the right order.

For anyone building or evaluating agents, this separates two levers that are easy to conflate: model latency (tokens/sec) versus agent latency (time-to-useful-result). Parallelism in tool calls and a search-before-act policy attack the second lever directly. And notably, these behaviors were learned via RL rather than hand-coded into a scaffold — suggesting that for agent efficiency, shaping the policy can outperform engineering the harness.
