---
id: INS-260626-621D
domain: ai-development
topic: claude-code
title: >-
  Auto-learn coding preferences into transparent, in-repo skill files filtered
  by what the model already knows
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - skills
  - agent-memory
  - context-engineering
  - taste
  - personalization
sources:
  - type: youtube
    title: >-
      ⚡️Making DeepSeek v4 outperform Opus 4.7 with Taste — @AhmadAwais ,
      CommandCode.ai
    author: Latent Space
    url: 'https://www.youtube.com/watch?v=-rIAVuaRjOg'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Store learned micro-preferences as transparent per-repo markdown the user
    reviews in every PR, and drop anything the LLM already knows (a
    KL-divergence filter) so the skill file stays small and current.
  standard: >-
    CommandCode's 'Taste' learns a developer's micro-preferences automatically —
    preferring pnpm but npm for local CLI linking, Vitest over other test
    runners, a specific PR workflow (fetch main, rebase, branch, PR, return to
    main) — by observing accepts, edits, and rejects, especially at
    merge-to-main. Crucially these are not the grandiose rules humans write when
    they sit down to author a config; they're small, repeated patterns that
    compound (one user built a second Android app far faster because the skill
    carried over). A 70+ developer study showed measurable drops in how often
    users had to edit or re-steer the LLM.


    Two design choices matter. First, transparency over a hidden model: early on
    they hid the learnings to produce a 'wow' demo, but discovered taste files
    cannot be machine-merged across branches/engineers — deciding what to keep
    is an irreducibly human endeavor. So Taste lives as plain markdown in your
    git repo, reviewed in every PR, which also guarantees it's never stale (a
    common failure mode of hand-written AGENTS.md/CLAUDE.md that was wrong the
    day it was written).


    Second, a KL-divergence-style filter: if the model already knows something,
    it must not enter the skill file — that's useless context. This keeps the
    learned 'taste of building CLIs' tiny (one small file summarizing 70+ CLIs
    built). The portable lesson for anyone building agent memory: mine behavior
    signals automatically, store learnings transparently in the user's own repo
    for review, scope them to micro-decisions, and aggressively exclude what the
    base model already knows.
stance: >-
  Agent memory should be auto-mined from accepts/edits/rejects and stored as
  reviewable markdown in the git repo, excluding anything the model already
  knows so context stays minimal and never stale.
related:
  - INS-260605-C223
  - INS-260626-A08F
  - PRI-260406-598F
  - INS-260605-A557
  - INS-260625-DF0F
---
CommandCode's 'Taste' learns a developer's micro-preferences automatically — preferring pnpm but npm for local CLI linking, Vitest over other test runners, a specific PR workflow (fetch main, rebase, branch, PR, return to main) — by observing accepts, edits, and rejects, especially at merge-to-main. Crucially these are not the grandiose rules humans write when they sit down to author a config; they're small, repeated patterns that compound (one user built a second Android app far faster because the skill carried over). A 70+ developer study showed measurable drops in how often users had to edit or re-steer the LLM.

Two design choices matter. First, transparency over a hidden model: early on they hid the learnings to produce a 'wow' demo, but discovered taste files cannot be machine-merged across branches/engineers — deciding what to keep is an irreducibly human endeavor. So Taste lives as plain markdown in your git repo, reviewed in every PR, which also guarantees it's never stale (a common failure mode of hand-written AGENTS.md/CLAUDE.md that was wrong the day it was written).

Second, a KL-divergence-style filter: if the model already knows something, it must not enter the skill file — that's useless context. This keeps the learned 'taste of building CLIs' tiny (one small file summarizing 70+ CLIs built). The portable lesson for anyone building agent memory: mine behavior signals automatically, store learnings transparently in the user's own repo for review, scope them to micro-decisions, and aggressively exclude what the base model already knows.
