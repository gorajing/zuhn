---
id: INS-260330-C658
domain: startups
topic: scaling
title: >-
  Only plan for the next order of magnitude — solving for a million users when
  you have ten creates premature complexity that kills speed
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - scaling
  - technical-debt
  - speed
  - order-of-magnitude
  - premature-optimization
  - teespring
sources:
  - type: youtube
    title: 'Lecture 8 - How to Get Started, Doing Things that Don''t Scale, Press'
    author: YC Root Access
    url: 'https://www.youtube.com/watch?v=oQOC-qy-GDY'
date_extracted: '2026-03-30'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Focus only on reaching the next 10x milestone — at 10 users plan for 100, at
    100 plan for 1000 — because necessity at breaking points forces better
    solutions than premature planning.
  standard: >-
    Walker Williams describes a concrete example: enterprise customers needed
    features that would take a month to build properly. Instead, his CTO
    duplicated the entire codebase and database to build a separate product in
    3-4 days — ugly, unsustainable, but fast. They learned which features
    mattered, then integrated them into the core product. The broader principle
    is that at each order of magnitude (10→100→1000→10k), different problems
    emerge that you cannot predict from the previous stage. Teespring's site
    crashed every single night for months, with the entire team sleeping with
    phones under their pillows to restart servers. This was worth it because
    speed to product-market fit matters more than clean architecture. The
    breaking points themselves reveal what needs to be built — premature
    planning wastes time solving problems that may never materialize.
stance: >-
  Startups should only architect solutions for 10x their current scale, not
  1000x, because necessity at each breaking point will force the right solution
  and premature scaling wastes the speed advantage that is a startup's primary
  weapon.
related:
  - INS-260323-81F5
  - INS-260322-AAEA
  - INS-260327-6E33
  - INS-260327-DD5C
  - INS-260327-3918
  - INS-260330-CBEF
  - INS-260330-49A4
  - PRI-260328-BE2D
  - INS-260330-C84C
  - INS-260402-40D7
evidence:
  - id: INS-260327-3918
    type: CONTRADICTS
    classified_at: '2026-04-02'
  - id: INS-260402-40D7
    type: TRANSFERS_TO
    classified_at: '2026-04-03'
---
Walker Williams describes a concrete example: enterprise customers needed features that would take a month to build properly. Instead, his CTO duplicated the entire codebase and database to build a separate product in 3-4 days — ugly, unsustainable, but fast. They learned which features mattered, then integrated them into the core product. The broader principle is that at each order of magnitude (10→100→1000→10k), different problems emerge that you cannot predict from the previous stage. Teespring's site crashed every single night for months, with the entire team sleeping with phones under their pillows to restart servers. This was worth it because speed to product-market fit matters more than clean architecture. The breaking points themselves reveal what needs to be built — premature planning wastes time solving problems that may never materialize.
