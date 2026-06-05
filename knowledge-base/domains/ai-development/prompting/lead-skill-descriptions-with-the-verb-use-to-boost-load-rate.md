---
id: INS-260605-5B0A
domain: ai-development
topic: prompting
title: Lead skill descriptions with the verb 'use' to boost load rate
actionability: immediate
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - skill-description
  - prompting
  - claude
  - discoverability
sources:
  - type: youtube
    title: >-
      Skill Issue: How We Used AI to Make Agents Actually Good at Supabase —
      Pedro Rodrigues, Supabase
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=GmAQKINjv1E'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Empirically, starting a skill's description with the verb 'use' increases
    the chance the agent recognizes and loads it; the same 'use [skill name]'
    keyword in a user prompt loads it almost 100% of the time, and a slash
    command guarantees it.
  standard: >-
    Pedro found from his own experiments that descriptions phrased with the verb
    'use' — 'use [skill] to [whole purpose]' — get loaded more reliably, at
    least on Claude, possibly because the model was trained to recognize that
    pattern. He's explicit this is an empirical observation, not documented
    behavior, which is why confidence is medium and shelf-life time-sensitive:
    skill-loading heuristics are early-stage and may shift.


    There's a reliability ladder for invocation: (1) plain prompt and pray the
    description matches — least reliable; (2) include 'use' plus the skill name
    as keywords in your prompt — loads almost 100% of the time; (3) in Claude
    Code, slash-command the skill name — guarantees the load. Because
    auto-loading is agent-controlled and non-deterministic, the engineering move
    when you can't force-invoke is to iterate on the description and test it
    against scenarios where the skill should and shouldn't fire.
stance: >-
  Phrasing a skill description as 'use [skill] to [purpose]' materially raises
  the odds Claude auto-loads it.
related:
  - INS-260320-A4BF
  - INS-260320-8DBD
  - INS-260320-F8FD
  - INS-260501-6453
  - INS-260605-C86D
  - INS-260605-6591
  - PRI-260501-1E66
  - INS-260605-117F
---
Pedro found from his own experiments that descriptions phrased with the verb 'use' — 'use [skill] to [whole purpose]' — get loaded more reliably, at least on Claude, possibly because the model was trained to recognize that pattern. He's explicit this is an empirical observation, not documented behavior, which is why confidence is medium and shelf-life time-sensitive: skill-loading heuristics are early-stage and may shift.

There's a reliability ladder for invocation: (1) plain prompt and pray the description matches — least reliable; (2) include 'use' plus the skill name as keywords in your prompt — loads almost 100% of the time; (3) in Claude Code, slash-command the skill name — guarantees the load. Because auto-loading is agent-controlled and non-deterministic, the engineering move when you can't force-invoke is to iterate on the description and test it against scenarios where the skill should and shouldn't fire.
