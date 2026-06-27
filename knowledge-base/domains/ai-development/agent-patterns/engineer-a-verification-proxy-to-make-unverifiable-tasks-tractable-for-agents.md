---
id: INS-260626-D7AE
domain: ai-development
topic: agent-patterns
title: Engineer a verification proxy to make unverifiable tasks tractable for agents
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - verification
  - guardrails
  - task-decomposition
  - trust
  - test-driven-development
sources:
  - type: youtube
    title: 'Agents need more than a chat - Jacob Lauritzen, CTO Legora'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=XNtkiQJ49Ps'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Move a task down the verifiability spectrum with golden examples,
    decomposition, and guardrails so agents can run effectively against a
    stand-in for truth.
  standard: >-
    Since true verification is often unavailable, the move is to construct a
    proxy and pull the task into the solvable-and-verifiable region. Lauritzen
    gives concrete patterns: (1) Proxy verification — compare the agent's output
    against known-good 'golden' artifacts (e.g. is this new contract similar to
    our previous contracts that we know work?) instead of needing a judge's
    ruling. (2) Decomposition — split one unverifiable task into verifiable
    sub-tasks and leave only the genuinely judgment-bound pieces (risk profile,
    precedent selection, negotiation stance) to a human, while letting the agent
    own easy-to-verify pieces like formatting and definition-linting. (3)
    Guardrails — increase trust by constraining the action space: it can only
    edit these three files, read from this directory, search these websites. (4)
    Bringing a coding task down via browser access and test-driven development
    so it becomes verifiable.


    The unifying idea: trust is not a property you hope for, it is something you
    manufacture by engineering verifiability into the task. Claude Code's
    permission spectrum illustrates the tradeoff — low trust means it asks
    before every action (useless), high trust means YOLO mode (hope it doesn't
    delete prod).
stance: >-
  You can raise agent trust on hard-to-verify tasks by manufacturing a
  verification proxy rather than waiting for ground truth.
related:
  - INS-260626-54A5
  - INS-260605-27CC
  - INS-260625-A5E7
  - INS-260625-8E60
  - INS-260410-E977
---
Since true verification is often unavailable, the move is to construct a proxy and pull the task into the solvable-and-verifiable region. Lauritzen gives concrete patterns: (1) Proxy verification — compare the agent's output against known-good 'golden' artifacts (e.g. is this new contract similar to our previous contracts that we know work?) instead of needing a judge's ruling. (2) Decomposition — split one unverifiable task into verifiable sub-tasks and leave only the genuinely judgment-bound pieces (risk profile, precedent selection, negotiation stance) to a human, while letting the agent own easy-to-verify pieces like formatting and definition-linting. (3) Guardrails — increase trust by constraining the action space: it can only edit these three files, read from this directory, search these websites. (4) Bringing a coding task down via browser access and test-driven development so it becomes verifiable.

The unifying idea: trust is not a property you hope for, it is something you manufacture by engineering verifiability into the task. Claude Code's permission spectrum illustrates the tradeoff — low trust means it asks before every action (useless), high trust means YOLO mode (hope it doesn't delete prod).
