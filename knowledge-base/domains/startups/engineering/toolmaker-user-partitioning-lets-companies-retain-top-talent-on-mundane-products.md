---
id: INS-260402-C664
domain: startups
topic: engineering
title: >-
  Toolmaker-user partitioning lets companies retain top talent on mundane
  products
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - engineering-organization
  - toolmakers
  - bottom-up-programming
  - talent-retention
sources:
  - type: blog
    title: Great Hackers
    url: 'https://paulgraham.com/gh.html'
date_extracted: '2026-04-02'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Having great hackers build internal tools while less elite developers build
    applications retains top talent without exposing them to soul-crushing user
    requirements.
  standard: >-
    Graham proposes a structural solution to the tension between needing great
    hackers and having tedious product work: partition the engineering org into
    toolmakers and application builders. The toolmakers — your best hackers —
    build the internal languages, frameworks, and abstractions. The application
    developers use those tools to build customer-facing products. This keeps top
    talent insulated from the 'nasty little problems' of end-user requirements
    while their work still flows into the product. The toolmakers' users are
    only other internal developers, which is a far more satisfying audience.
    Graham argues this would have prevented many of Microsoft's security holes,
    because application developers wouldn't be doing low-level memory management
    — they'd be composing high-level abstractions. This is essentially a
    formalization of the platform team model that many modern tech companies now
    use, where the best engineers build developer infrastructure rather than
    product features directly.
stance: >-
  Splitting engineering into toolmakers and tool-users insulates top hackers
  from tedious end-user problems while capturing 99% of their productivity for
  the product.
related:
  - INS-260330-E881
  - INS-260402-46AD
  - INS-260403-1B53
  - INS-260404-BE07
  - INS-260402-AA3F
  - INS-260403-6E76
  - INS-260403-22DF
  - INS-260403-E63A
  - INS-260409-A682
evidence:
  - id: INS-260323-D2AA
    type: SUPPORTS
    classified_at: '2026-04-02'
  - id: INS-260325-854D
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
  - id: INS-260402-46AD
    type: CONTRADICTS
    classified_at: '2026-04-03'
  - id: INS-260330-E881
    type: SUPPORTS
    classified_at: '2026-04-03'
  - id: INS-260404-BE07
    type: CHALLENGES
    classified_at: '2026-04-06'
---
Graham proposes a structural solution to the tension between needing great hackers and having tedious product work: partition the engineering org into toolmakers and application builders. The toolmakers — your best hackers — build the internal languages, frameworks, and abstractions. The application developers use those tools to build customer-facing products. This keeps top talent insulated from the 'nasty little problems' of end-user requirements while their work still flows into the product. The toolmakers' users are only other internal developers, which is a far more satisfying audience. Graham argues this would have prevented many of Microsoft's security holes, because application developers wouldn't be doing low-level memory management — they'd be composing high-level abstractions. This is essentially a formalization of the platform team model that many modern tech companies now use, where the best engineers build developer infrastructure rather than product features directly.
