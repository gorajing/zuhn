---
id: INS-260626-739E
domain: ai-development
topic: economics
title: 'Planning and reviewing are the new bottleneck, not doing the work'
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - agents
  - verification
  - economics-of-production
  - bottleneck
  - review
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
    When agents can do the work cheaply, the scarce, expensive activities become
    specifying it up front and reviewing it afterward.
  standard: >-
    Lauritzen describes 'new economics of production': six to twelve months ago,
    completing end-to-end work meant focusing on actually doing the work,
    because doing was the hard part. Now doing is extremely cheap, so the
    bottleneck moves to the bookends — gathering non-functional requirements and
    specs before, and reviewing output after. He notes that reviewing large
    agent-produced PRs 'really sucks' and is 'extremely painful', and that one
    tempting-but-risky shortcut is having agents review their own work with no
    human involved.


    The implication for anyone building agentic systems is that investment
    should follow the bottleneck. Tooling, UX, and human attention should
    concentrate on making specification and review efficient, not on squeezing
    more speed out of execution. A system that produces a 30-minute contract but
    forces a human to re-read the entire document to find which clauses changed
    has optimized the cheap step and ignored the expensive one.
stance: >-
  As AI makes execution cheap, the binding constraint on end-to-end work shifts
  from doing to planning and verifying.
related:
  - INS-260330-0F23
  - INS-260605-ED35
  - INS-260605-B4B9
  - INS-260605-F828
  - INS-260403-0350
  - PRI-260328-8317
---
Lauritzen describes 'new economics of production': six to twelve months ago, completing end-to-end work meant focusing on actually doing the work, because doing was the hard part. Now doing is extremely cheap, so the bottleneck moves to the bookends — gathering non-functional requirements and specs before, and reviewing output after. He notes that reviewing large agent-produced PRs 'really sucks' and is 'extremely painful', and that one tempting-but-risky shortcut is having agents review their own work with no human involved.

The implication for anyone building agentic systems is that investment should follow the bottleneck. Tooling, UX, and human attention should concentrate on making specification and review efficient, not on squeezing more speed out of execution. A system that produces a 30-minute contract but forces a human to re-read the entire document to find which clauses changed has optimized the cheap step and ignored the expensive one.
