---
id: INS-260627-3410
domain: ai-development
topic: architecture
title: 'Retrieve verified assets before generating, to earn trust by never fabricating'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - rag
  - trust
  - hallucination
  - architecture
  - retrieval-first
sources:
  - type: youtube
    title: >-
      Small Bets, Big Impact Building GenBI at a Fortune 100 – Asaf Bord,
      Northwestern Mutual
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=LU9KgcZDRfY'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Start by routing to certified reports, not generating SQL — you deliver the
    same trusted asset, just faster.
  standard: >-
    Rather than open with the hard, hallucination-prone task of generating SQL,
    Northwestern Mutual's first agent simply retrieved existing certified
    reports and dashboards. This was justified by a discovery from the BI teams:
    ~80% of their work was just sending people to the right report and
    explaining how to use it. By delivering an already-verified asset faster and
    more interactively — explicitly 'we're not going to make up information' —
    the architecture builds inherent trust and aligns expectations upfront. Even
    the later SQL agent uses a retrieved report as a near-perfect few-shot seed
    rather than building queries from scratch. Retrieval-before-generation both
    de-risks accuracy and front-loads value: the rag agent alone automated ~80%
    of the 20% of a 10-person BI team's capacity spent on report-routing
    (roughly two full-time people).
stance: >-
  Architecting an AI system to deliver already-verified existing assets before
  it generates anything new builds inherent trust and captures most of the value
  at a fraction of the risk.
related:
  - INS-260624-A338
  - PRI-260406-B314
  - INS-260329-50D5
  - INS-260327-B357
  - PRI-260322-8FD4
---
Rather than open with the hard, hallucination-prone task of generating SQL, Northwestern Mutual's first agent simply retrieved existing certified reports and dashboards. This was justified by a discovery from the BI teams: ~80% of their work was just sending people to the right report and explaining how to use it. By delivering an already-verified asset faster and more interactively — explicitly 'we're not going to make up information' — the architecture builds inherent trust and aligns expectations upfront. Even the later SQL agent uses a retrieved report as a near-perfect few-shot seed rather than building queries from scratch. Retrieval-before-generation both de-risks accuracy and front-loads value: the rag agent alone automated ~80% of the 20% of a 10-person BI team's capacity spent on report-routing (roughly two full-time people).
