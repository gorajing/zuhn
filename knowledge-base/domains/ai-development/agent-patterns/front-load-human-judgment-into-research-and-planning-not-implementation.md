---
id: INS-260627-BBCE
domain: ai-development
topic: agent-patterns
title: 'Front-load human judgment into research and planning, not implementation'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - research-plan-implement
  - agent-patterns
  - planning
  - workflow
  - leverage
sources:
  - type: youtube
    title: 'Agentic Engineering: Working With AI, Not Just Using It — Brendan O''Leary'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=BEKc4P87XKo'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Spend your scarce human thinking on research and planning; by the time you
    implement, all the hard decisions should already be made.
  standard: >-
    The dominant beginner mistake is jumping straight to 'help me implement
    feature X' — and LLMs happily oblige by emitting walls of code built on
    wrong assumptions, which wastes more time than it saves and fuels the
    anti-AI backlash. O'Leary's antidote is the research-plan-implement loop.
    First, a research-only mode (Kilo's 'ask' mode, which can read but not
    write) builds shared understanding: how the system works today, which files
    are involved, what paradigms to mirror, what edge cases exist — output is a
    research document the human reads and agrees with. Then a planning phase
    produces an explicit, step-by-step plan file with verification/test commands
    and crisp in-scope/out-of-scope boundaries. Only then does implementation
    happen, ideally in a fresh low-context session that can use a smaller,
    cheaper model because the thinking is already done.


    The justification, quoting Dex Horthy: 'a bad line of research can
    potentially be hundreds of lines of bad code,' and 'AI can't replace
    thinking — it can only amplify the thinking you've done, or the lack of
    thinking you haven't.' The leverage insight is that planning/research is
    where human time pays off most; by implementation, the hard reasoning should
    be finished. Pair this with frequent commits and treating local Git as your
    own first PR review of the agent's work before exposing it to colleagues.
stance: >-
  The highest-leverage human time in agentic coding is the research and planning
  phases, because a bad line of research can produce hundreds of lines of bad
  code.
related:
  - INS-260330-2B45
  - PRI-260406-0E02
  - INS-260409-3FC6
  - INS-260403-10CE
  - INS-260330-DB4B
---
The dominant beginner mistake is jumping straight to 'help me implement feature X' — and LLMs happily oblige by emitting walls of code built on wrong assumptions, which wastes more time than it saves and fuels the anti-AI backlash. O'Leary's antidote is the research-plan-implement loop. First, a research-only mode (Kilo's 'ask' mode, which can read but not write) builds shared understanding: how the system works today, which files are involved, what paradigms to mirror, what edge cases exist — output is a research document the human reads and agrees with. Then a planning phase produces an explicit, step-by-step plan file with verification/test commands and crisp in-scope/out-of-scope boundaries. Only then does implementation happen, ideally in a fresh low-context session that can use a smaller, cheaper model because the thinking is already done.

The justification, quoting Dex Horthy: 'a bad line of research can potentially be hundreds of lines of bad code,' and 'AI can't replace thinking — it can only amplify the thinking you've done, or the lack of thinking you haven't.' The leverage insight is that planning/research is where human time pays off most; by implementation, the hard reasoning should be finished. Pair this with frequent commits and treating local Git as your own first PR review of the agent's work before exposing it to colleagues.
