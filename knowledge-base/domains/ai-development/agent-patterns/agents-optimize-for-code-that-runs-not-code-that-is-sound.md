---
id: INS-260627-C87B
domain: ai-development
topic: agent-patterns
title: 'Agents optimize for code that runs, not code that is sound'
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - agent-failure-modes
  - slop
  - fail-loud
  - reinforcement-learning
  - technical-debt
sources:
  - type: youtube
    title: >-
      The Friction is Your Judgment — Armin Ronacher & Cristina Poncela Cubeiro,
      Earendil
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=_Zcw_sVF6hU'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Agents are trained to write code that runs and tests pass, so they default
    to silent-recovery patterns (read config, fall back to defaults) that create
    brittle systems a human would feel bad writing.
  standard: >-
    An agent's objective function is to write code, run the tests, and make
    progress — reinforcement learning bakes this in. The result is code that an
    experienced engineer wouldn't write: the canonical example is reading a
    config file and silently loading defaults if it's missing, which masks
    failure until you discover hours later that you wrote database records with
    the wrong data. Agents optimize toward shipping and unblocking themselves,
    so they manufacture far more failure conditions than human code normally
    would, and they build services that 'hobble along' recovering from local
    failures into globally brittle systems. The deeper driver is emotional: a
    human feels bad writing fragile code and that discomfort acts as a quality
    signal; the agent feels nothing and communicates no emotion, so it
    accumulates months of technical debt in days and eventually builds a
    codebase too large and entropic for the agent itself to dig out of. The
    defense is to make the human feel the pain the agent cannot — fail loud,
    reject silent fallbacks, and treat the absence of agent 'discomfort' as a
    missing safety signal you must supply yourself.
stance: >-
  Because agents are RL-optimized to make progress and unblock themselves, they
  generate more failure conditions and entropy than human-written code, since
  they feel no emotional cost for writing brittle code.
related:
  - INS-260327-D888
  - INS-260514-1470
  - INS-260605-02FB
  - INS-260605-997E
  - INS-260625-868D
  - INS-260626-287B
  - INS-260329-500E
  - INS-260329-D48B
  - PRI-260405-3080
---
An agent's objective function is to write code, run the tests, and make progress — reinforcement learning bakes this in. The result is code that an experienced engineer wouldn't write: the canonical example is reading a config file and silently loading defaults if it's missing, which masks failure until you discover hours later that you wrote database records with the wrong data. Agents optimize toward shipping and unblocking themselves, so they manufacture far more failure conditions than human code normally would, and they build services that 'hobble along' recovering from local failures into globally brittle systems. The deeper driver is emotional: a human feels bad writing fragile code and that discomfort acts as a quality signal; the agent feels nothing and communicates no emotion, so it accumulates months of technical debt in days and eventually builds a codebase too large and entropic for the agent itself to dig out of. The defense is to make the human feel the pain the agent cannot — fail loud, reject silent fallbacks, and treat the absence of agent 'discomfort' as a missing safety signal you must supply yourself.
