---
id: INS-260625-BAE7
domain: ai-development
topic: system-building
title: >-
  Encode an org's tribal query knowledge once so the agent retires the
  bottleneck
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - institutional-knowledge
  - internal-tools
  - self-serve
  - onboarding
  - data-access
sources:
  - type: youtube
    title: >-
      Why Can't Anyone Answer Questions About the Business? — Garrett Galow,
      WorkOS
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=iUWwcG-C8OU'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    The four-joins-deep customer query every new hire must copy-paste gets told
    to Studio once, and it then performs it correctly forever — eliminating the
    data-team dashboard bottleneck.
  standard: >-
    WorkOS has a customer entity that's 'four joins deep because of reasons,'
    and historically every new employee had to learn and copy-paste the same
    join block. 'We tell Studio about it once, right? It knows how to do that
    every time.' The agent becomes the canonical home for operational knowledge
    that was previously tribal, undocumented, and re-acquired by each person.
    The downstream organizational effect is the elimination of a bottleneck:
    instead of a platform or data team building and perpetually modifying rigid
    dashboards, support and go-to-market teams self-serve — answering one-off
    questions directly and promoting recurring ones into shared widgets. Rigid
    hand-built dashboards always lag the next question someone asks; an agent
    that holds the join rules and can compose new queries closes that gap. The
    actionable move when adopting agents internally: inventory the recurring
    'only so-and-so knows how to query that' knowledge and encode it into
    context first, because that is exactly the knowledge models cannot infer and
    humans most expensively re-learn.
stance: >-
  Operational tribal knowledge that every employee currently re-learns should be
  encoded once into an agent's context, turning the agent into the
  organization's durable query repository.
related:
  - INS-260327-1599
  - INS-260409-8408
  - INS-260603-6FE3
  - INS-260501-10A0
  - INS-260522-C5C2
---
WorkOS has a customer entity that's 'four joins deep because of reasons,' and historically every new employee had to learn and copy-paste the same join block. 'We tell Studio about it once, right? It knows how to do that every time.' The agent becomes the canonical home for operational knowledge that was previously tribal, undocumented, and re-acquired by each person. The downstream organizational effect is the elimination of a bottleneck: instead of a platform or data team building and perpetually modifying rigid dashboards, support and go-to-market teams self-serve — answering one-off questions directly and promoting recurring ones into shared widgets. Rigid hand-built dashboards always lag the next question someone asks; an agent that holds the join rules and can compose new queries closes that gap. The actionable move when adopting agents internally: inventory the recurring 'only so-and-so knows how to query that' knowledge and encode it into context first, because that is exactly the knowledge models cannot infer and humans most expensively re-learn.
