---
id: INS-260421-CE27
domain: ai-development
topic: infrastructure
title: >-
  Graph neighbor-expansion retrieval captures safety-critical context missed by
  single-node queries
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - graph-retrieval
  - safety
  - agent-design
sources:
  - type: audio
    title: ai agents 12 ai memory meetup 2026 04 20
date_extracted: '2026-04-21'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    MemMachine demonstrated that single-node retrieval of 'suggest dessert'
    could miss a stored 'allergic to peanuts' fact; expanding to ±2 neighbor
    nodes catches the constraint.
  standard: >-
    Gauri Nagavkar (MemMachine) showed the concrete failure case: a user
    previously stored 'I'm allergic to peanuts.' Later the agent was asked to
    suggest dessert. With traditional RAG (single-node retrieval on 'dessert'),
    the peanut allergy note was not retrieved — the agent suggested peanut
    butter pie. With MemMachine's retrieval agent (expand to ±1 previous, ±2
    next neighbor nodes on the graph), the allergy constraint was retrieved
    alongside dessert context and blocked the unsafe suggestion.


    This is a general pattern, not a MemMachine-specific trick: in agent memory
    graphs, safety-critical context is often stored in nodes adjacent to the
    active query node (user preferences, allergies, prior commitments, conflict
    rules). Any retrieval design that only returns top-K nearest neighbors by
    embedding similarity will systematically miss these adjacent safety signals.
    Graph expansion is a cheap complement to semantic search for high-stakes
    domains (healthcare, legal, financial, personal safety).
stance: >-
  Expanding graph retrieval to adjacent nodes captures safety-critical context
  that single-node retrieval misses
related:
  - INS-260329-2612
  - PRI-260409-0156
  - INS-260323-8D12
  - INS-260410-AC0B
  - INS-260405-02BE
  - INS-260325-FD14
---
Gauri Nagavkar (MemMachine) showed the concrete failure case: a user previously stored 'I'm allergic to peanuts.' Later the agent was asked to suggest dessert. With traditional RAG (single-node retrieval on 'dessert'), the peanut allergy note was not retrieved — the agent suggested peanut butter pie. With MemMachine's retrieval agent (expand to ±1 previous, ±2 next neighbor nodes on the graph), the allergy constraint was retrieved alongside dessert context and blocked the unsafe suggestion.

This is a general pattern, not a MemMachine-specific trick: in agent memory graphs, safety-critical context is often stored in nodes adjacent to the active query node (user preferences, allergies, prior commitments, conflict rules). Any retrieval design that only returns top-K nearest neighbors by embedding similarity will systematically miss these adjacent safety signals. Graph expansion is a cheap complement to semantic search for high-stakes domains (healthcare, legal, financial, personal safety).
