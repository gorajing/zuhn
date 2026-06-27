---
id: INS-260605-B610
domain: ai-development
topic: agents
title: Gate agent autonomy on reversibility-without-embarrassment
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - ralph-loops
  - agent-autonomy
  - permissions
  - guardrails
  - human-in-the-loop
sources:
  - type: youtube
    title: 'Ralph Loops: Build Dumb AI Loops That Ship — Chris Parsons, Cherrypick'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=2TLXsxkz0zI'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Let agents fully execute reversible work and hand back anything irreversible
    — Parsons' rule is 'is this reversible without embarrassment to me?'
  standard: >-
    Parsons runs agent loops that draft 15-16 email replies overnight, build
    slide decks, and do client prep, but his governing rule is a single
    question: 'is this reversible without embarrassment to me?' If no, the agent
    must stop, make a note in the project file, and hand it back for review. So
    it drafts emails but never sends them; it produces slide decks (reversible,
    no embarrassment) on its own; it never posts to LinkedIn or sends messages.
    This reframes the permission question away from capability ('can the AI do
    it?') toward consequence ('what happens if it's wrong and seen?'). It pairs
    with a hard carve-out for security and irreversible operations — he still
    reads diffs and won't let AI touch production database migrations or
    customer data unsupervised, because those aren't
    reversible-without-embarrassment regardless of how good the model is.
stance: >-
  The right boundary for autonomous agent action is whether the action is
  reversible without embarrassment, not whether the AI is technically capable of
  it.
related:
  - INS-260627-8B75
  - INS-260625-679B
  - INS-260627-1319
  - INS-260605-29BD
  - INS-260530-D34F
---
Parsons runs agent loops that draft 15-16 email replies overnight, build slide decks, and do client prep, but his governing rule is a single question: 'is this reversible without embarrassment to me?' If no, the agent must stop, make a note in the project file, and hand it back for review. So it drafts emails but never sends them; it produces slide decks (reversible, no embarrassment) on its own; it never posts to LinkedIn or sends messages. This reframes the permission question away from capability ('can the AI do it?') toward consequence ('what happens if it's wrong and seen?'). It pairs with a hard carve-out for security and irreversible operations — he still reads diffs and won't let AI touch production database migrations or customer data unsupervised, because those aren't reversible-without-embarrassment regardless of how good the model is.
