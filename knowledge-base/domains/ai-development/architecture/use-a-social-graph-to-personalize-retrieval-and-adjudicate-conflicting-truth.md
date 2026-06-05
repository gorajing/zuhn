---
id: INS-260605-B176
domain: ai-development
topic: architecture
title: Use a social graph to personalize retrieval and adjudicate conflicting truth
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - social-graph
  - context-engineering
  - conflict-resolution
  - personalization
  - permissions
sources:
  - type: youtube
    title: 'Stop babysitting your agents... — Brandon Waselnuk, Unblocked'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=BiG2ssibKGc'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    The same question means different things from different people, and when
    main-branch code conflicts with a CTO's Slack message, a social graph lets
    the system pivot on identity and weigh the CTO as the authority.
  standard: >-
    Unblocked treats a social graph as a core component rather than a nicety. It
    serves two jobs. First, personalization: at a 20,000-person org, 'how do I
    do the Zendesk integration' resolves differently depending on which
    codebases you work in, your PR history, and who you collaborate with, so the
    system pivots on your identity to retrieve relevant context. Second,
    conflict resolution — a problem they initially underestimated ('it can't be
    that bad'… 'it's that bad'). When source code in main says one thing but a
    Slack thread shows the CTO saying it was implemented wrong, the system must
    pick a winner; the social graph supplies the authority signal (the CTO is
    probably right) so it can hand the agent the adjudicated truth plus the
    source. The graph also enforces permissions: identity-scoped retrieval means
    private chats surface only to their owner. Naively merging all sources
    without an identity-and-authority layer produces an agent that picks
    arbitrarily and leaks across permission boundaries.
stance: >-
  A context system should be built on a social graph because who is asking and
  who said what is the pivot for both relevant retrieval and resolving conflicts
  between sources.
related:
  - INS-260410-1D9B
  - PRI-260406-B9C9
  - PRI-260406-6762
  - INS-260330-0371
  - INS-260409-7632
  - INS-260330-059C
---
Unblocked treats a social graph as a core component rather than a nicety. It serves two jobs. First, personalization: at a 20,000-person org, 'how do I do the Zendesk integration' resolves differently depending on which codebases you work in, your PR history, and who you collaborate with, so the system pivots on your identity to retrieve relevant context. Second, conflict resolution — a problem they initially underestimated ('it can't be that bad'… 'it's that bad'). When source code in main says one thing but a Slack thread shows the CTO saying it was implemented wrong, the system must pick a winner; the social graph supplies the authority signal (the CTO is probably right) so it can hand the agent the adjudicated truth plus the source. The graph also enforces permissions: identity-scoped retrieval means private chats surface only to their owner. Naively merging all sources without an identity-and-authority layer produces an agent that picks arbitrarily and leaks across permission boundaries.
