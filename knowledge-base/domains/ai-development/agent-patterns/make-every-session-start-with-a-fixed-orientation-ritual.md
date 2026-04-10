---
id: INS-260410-BBC1
domain: ai-development
topic: agent-patterns
title: Make every session start with a fixed orientation ritual
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agents
  - session-handoff
  - prompting
  - rituals
sources:
  - type: blog
    title: Effective harnesses for long-running agents
    url: >-
      https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Prompt every session to run the same opening sequence: pwd, read progress
    file, read feature list, check git log, run init.sh, run a basic end-to-end
    smoke test, then pick a feature.
  standard: >-
    Because every new context window starts blank, the agent will burn tokens
    reinventing how to orient itself unless you prescribe the steps. Anthropic
    standardizes the opening: print working directory, read claude-progress.txt
    and feature_list.json, scan recent git commits, run init.sh to start the dev
    server, and run a baseline smoke test before touching any new feature.


    The smoke test matters because if the previous session left a bug, starting
    a new feature on top of it makes things worse. Catching breakage immediately
    and fixing it before adding new code is the rule. This is essentially
    imposing a checklist culture on the agent — the same discipline a human
    engineer follows when picking up someone else's branch — and it converts an
    open-ended 'figure out where you are' problem into a deterministic boot
    sequence.
stance: >-
  Each fresh-context agent session should begin with a scripted orientation
  sequence rather than letting the model improvise context recovery.
related:
  - INS-260410-2C51
  - INS-260410-53C2
  - INS-260329-03B5
  - INS-260329-917B
  - INS-260320-4ED6
---
Because every new context window starts blank, the agent will burn tokens reinventing how to orient itself unless you prescribe the steps. Anthropic standardizes the opening: print working directory, read claude-progress.txt and feature_list.json, scan recent git commits, run init.sh to start the dev server, and run a baseline smoke test before touching any new feature.

The smoke test matters because if the previous session left a bug, starting a new feature on top of it makes things worse. Catching breakage immediately and fixing it before adding new code is the rule. This is essentially imposing a checklist culture on the agent — the same discipline a human engineer follows when picking up someone else's branch — and it converts an open-ended 'figure out where you are' problem into a deterministic boot sequence.
