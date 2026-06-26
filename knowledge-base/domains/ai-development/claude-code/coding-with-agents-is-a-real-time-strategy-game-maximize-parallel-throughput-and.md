---
id: INS-260625-E696
domain: ai-development
topic: claude-code
title: >-
  Coding with agents is a real-time-strategy game: maximize parallel throughput
  and your own APM, not single-threaded correctness
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - agentic-coding
  - orchestration
  - developer-productivity
  - parallelization
  - git-worktrees
sources:
  - type: youtube
    title: >-
      Self-Play for LLMs, AI for Biology, Formal Verification, and More | YC
      Paper Club
    author: Y Combinator
    url: 'https://www.youtube.com/watch?v=3rWSvrFahIY'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Channel AI treats coding as an RTS: an orchestrator plus many parallel
    workers in git worktrees, 'low premium on agent time, high premium on
    yours,' macro-by-default, satisficing, and tool-calls-per-minute as an APM
    metric — yielding 3.5x PRs per engineer and another +60%.
  standard: >-
    Lukens Orthwein reframes agentic programming away from the chess model
    (linear, predict-the-future, design robust systems single-threaded) toward
    real-time strategy: you must keep economy, production, and units all busy
    simultaneously while constantly course-correcting with high map visibility.
    Concrete practices: an orchestrator agent (Claude or Codex) that minimizes
    keystrokes from 'idea' to 'work started' because you can course-correct
    later — like clicking a unit across the map and coming back; many parallel
    workers in separate git worktrees so they compile without stepping on each
    other; running everything from cloud instances in
    'dangerously-skip-permissions' mode, because giving feedback at every step
    kills throughput; and instructing workers to put a low premium on their own
    time and tokens and a high premium on yours — push all the way to a PR
    before asking for feedback, even if wasteful per-token.


    The governing maxims: 'macro by default, micro when it counts' (you win by
    doing enough things, not by perfecting one); satisficing (good-enough beats
    perfect, since mistakes are cheap to fix later); aggressively document in
    linked, wiki-style markdown files because code is an expensive source of
    truth for agents to parse while context is cheap to write down; and maintain
    high visibility and auditability with RTS-style cues — he maps agent
    sessions to color-coded Warcraft/Starcraft units with their actual sound
    effects and built an 'APM tracker' that counts tool-calls-per-minute as a
    productivity rubric. The reported result: adopting LLMs gave 3.5x PRs per
    engineer per month, and rolling out this RTS workflow across the whole team
    added a further ~60%. The actionable takeaway is to optimize for parallel
    agent throughput and your own decision velocity, and to treat idle Claude
    tokens like an unused economy in an RTS — a waste.
stance: >-
  The highest-leverage software engineering skill in the agentic era is
  RTS-style macro management — running many agents in parallel and maximizing
  your actions-per-minute — not the linear, predict-everything craftsmanship
  that defined pre-agent programming.
related:
  - INS-260322-4757
  - INS-260323-B029
  - INS-260323-DC99
  - INS-260330-7C24
  - INS-260330-202A
  - INS-260403-7DF4
  - INS-260403-13AF
  - INS-260403-EDA1
  - INS-260403-F835
  - INS-260330-5747
---
Lukens Orthwein reframes agentic programming away from the chess model (linear, predict-the-future, design robust systems single-threaded) toward real-time strategy: you must keep economy, production, and units all busy simultaneously while constantly course-correcting with high map visibility. Concrete practices: an orchestrator agent (Claude or Codex) that minimizes keystrokes from 'idea' to 'work started' because you can course-correct later — like clicking a unit across the map and coming back; many parallel workers in separate git worktrees so they compile without stepping on each other; running everything from cloud instances in 'dangerously-skip-permissions' mode, because giving feedback at every step kills throughput; and instructing workers to put a low premium on their own time and tokens and a high premium on yours — push all the way to a PR before asking for feedback, even if wasteful per-token.

The governing maxims: 'macro by default, micro when it counts' (you win by doing enough things, not by perfecting one); satisficing (good-enough beats perfect, since mistakes are cheap to fix later); aggressively document in linked, wiki-style markdown files because code is an expensive source of truth for agents to parse while context is cheap to write down; and maintain high visibility and auditability with RTS-style cues — he maps agent sessions to color-coded Warcraft/Starcraft units with their actual sound effects and built an 'APM tracker' that counts tool-calls-per-minute as a productivity rubric. The reported result: adopting LLMs gave 3.5x PRs per engineer per month, and rolling out this RTS workflow across the whole team added a further ~60%. The actionable takeaway is to optimize for parallel agent throughput and your own decision velocity, and to treat idle Claude tokens like an unused economy in an RTS — a waste.
