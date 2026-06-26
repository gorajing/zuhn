---
id: INS-260626-14E0
domain: ai-development
topic: prompting
title: >-
  Breadcrumb the agent with sequenced, withheld instructions to limit
  improvisation variance
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - prompt-sequencing
  - coding-agents
  - variance-control
  - discovery-first
  - support-burden
sources:
  - type: youtube
    title: 'LLM codegen fails and how to stop ''em — Danilo Campos, PostHog'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=juoNbJiZUi0'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Don't tell the agent the whole destination at once; lead it through
    discovery steps so 15,000 runs converge on a supportable handful of patterns
    instead of 15,000 unique ones.
  standard: >-
    An under-guided agent will find a weird path through the problem space, and
    at 15,000 integrations a month that means potentially 15,000 different ways
    PostHog gets set up — technically 'automated,' but an unmanageable support
    burden. Telling the agent exactly where to go is also counterproductive:
    like Claude Code making a goal-shaped hole through the first four tasks and
    then 'rock-polishing' the fifth, over-specification distorts effort
    allocation.


    The fix is breadcrumbing: PostHog barely tells the agent it's doing a
    PostHog integration at first. It starts with discovery — 'where are the
    files with interesting business value, anything that looks like a login or
    Stripe or churn signal?' (business logic casts a huge, reliably detectable
    shadow in code). Then 'what interesting events happen in those files — don't
    write code yet, just list them.' Only after the agent has reasoned its way
    to event names and descriptions does the real implementation begin, now
    grounded in its own discoveries. Sequencing information, rather than
    front-loading a rigid plan, is what collapses output variance to something
    supportable.
stance: >-
  Revealing the goal incrementally instead of stating the full plan upfront
  keeps an agent from finding thousands of divergent solutions to the same task.
related:
  - INS-260514-A295
  - INS-260625-447A
  - INS-260626-2170
  - INS-260403-4120
  - INS-260605-CEB5
---
An under-guided agent will find a weird path through the problem space, and at 15,000 integrations a month that means potentially 15,000 different ways PostHog gets set up — technically 'automated,' but an unmanageable support burden. Telling the agent exactly where to go is also counterproductive: like Claude Code making a goal-shaped hole through the first four tasks and then 'rock-polishing' the fifth, over-specification distorts effort allocation.

The fix is breadcrumbing: PostHog barely tells the agent it's doing a PostHog integration at first. It starts with discovery — 'where are the files with interesting business value, anything that looks like a login or Stripe or churn signal?' (business logic casts a huge, reliably detectable shadow in code). Then 'what interesting events happen in those files — don't write code yet, just list them.' Only after the agent has reasoned its way to event names and descriptions does the real implementation begin, now grounded in its own discoveries. Sequencing information, rather than front-loading a rigid plan, is what collapses output variance to something supportable.
