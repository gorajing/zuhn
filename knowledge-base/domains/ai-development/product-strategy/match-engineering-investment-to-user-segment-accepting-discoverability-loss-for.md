---
id: INS-260626-4A96
domain: ai-development
topic: product-strategy
title: >-
  Match engineering investment to user segment, accepting discoverability loss
  for low-traffic power features
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - product-strategy
  - maintenance-cost
  - discoverability
  - power-users
  - feature-investment
sources:
  - type: youtube
    title: 'Replacing 12K LoC with a 200 LoC Skill — David Gomes, Cursor'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=WE_Gnowy3uw'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Cursor accepted that the skill-based worktree feature is harder to discover
    because it serves power users, and minimizing maintenance on an advanced
    feature mattered more than surfacing it in the UI.
  standard: >-
    Worktrees are explicitly not a feature used by most of Cursor's users — only
    power users who love parallelizing grids of agents. Gomes frames the whole
    refactor through that lens: it is not the kind of feature worth spending
    lots of maintenance time on, so collapsing it to markdown is selfishly worth
    it even at some cost to capability. The skill version removed the UI
    dropdown that previously advertised the local/cloud/worktree choice, so
    users must now know to type /worktree. Discoverability got worse, and Cursor
    says it is fine with that for an advanced feature.


    The underlying principle is to right-size engineering and UX investment to
    where a feature sits in your usage distribution. High-traffic core features
    justify heavy code, dedicated UI, and discoverability work; advanced
    long-tail features are better served by lightweight implementations that
    minimize ongoing burden, even if that means hiding them behind commands the
    target users already know to look for. The risk is real — the talk notes
    mixed forum feedback from users who preferred the old way — so this is a
    deliberate bet that the served segment values capability over surfacing, not
    a universal rule.
stance: >-
  For advanced low-usage features, minimizing maintenance cost justifies hiding
  them behind slash commands despite worse discoverability.
related:
  - INS-260626-2E1F
  - INS-260626-E45C
  - INS-260329-9115
  - INS-260530-A86A
  - INS-260628-4E8F
---
Worktrees are explicitly not a feature used by most of Cursor's users — only power users who love parallelizing grids of agents. Gomes frames the whole refactor through that lens: it is not the kind of feature worth spending lots of maintenance time on, so collapsing it to markdown is selfishly worth it even at some cost to capability. The skill version removed the UI dropdown that previously advertised the local/cloud/worktree choice, so users must now know to type /worktree. Discoverability got worse, and Cursor says it is fine with that for an advanced feature.

The underlying principle is to right-size engineering and UX investment to where a feature sits in your usage distribution. High-traffic core features justify heavy code, dedicated UI, and discoverability work; advanced long-tail features are better served by lightweight implementations that minimize ongoing burden, even if that means hiding them behind commands the target users already know to look for. The risk is real — the talk notes mixed forum feedback from users who preferred the old way — so this is a deliberate bet that the served segment values capability over surfacing, not a universal rule.
