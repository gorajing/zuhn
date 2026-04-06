---
id: INS-260404-BA3D
domain: startups
topic: competitive-strategy
title: Deliberate misdirection buys time against better-resourced competitors
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - competitive-intelligence
  - misdirection
  - technical-moats
  - viaweb
sources:
  - type: blog
    title: 'Snapshot: Viaweb, June 1998'
    url: 'https://paulgraham.com/vw.html'
date_extracted: '2026-04-04'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Viaweb put cgi-bin in their URLs specifically to fool competitors into
    thinking they used a different technology stack.
  standard: >-
    Viaweb deliberately inserted 'cgi-bin' into their dynamic URLs to mislead
    competitors about how their software worked. This wasn't a technical
    decision — it was a strategic one. In an era where competitors would
    reverse-engineer your approach by examining your public-facing site, feeding
    them false signals about your architecture could waste months of their R&D
    effort.


    This tactic reflects a broader competitive principle: information asymmetry
    is itself a moat. When you're a small team competing against larger players,
    every month they spend pursuing the wrong technical approach is a month you
    spend building the right one. The cost of misdirection is nearly zero (a URL
    rewrite), while the cost to the competitor of pursuing the wrong
    architecture is enormous. Modern equivalents might include obfuscating API
    patterns or deliberately using misleading framework identifiers in HTTP
    headers.
stance: >-
  Early-stage startups can extend their technical lead by actively misleading
  competitors about their architecture, buying months of runway that matter more
  than any feature sprint.
related:
  - INS-260403-B557
  - INS-260403-9DBA
  - INS-260403-3A9D
  - INS-260323-C90C
  - INS-260402-45FA
evidence:
  - id: INS-260403-9DBA
    type: CHALLENGES
    classified_at: '2026-04-06'
---
Viaweb deliberately inserted 'cgi-bin' into their dynamic URLs to mislead competitors about how their software worked. This wasn't a technical decision — it was a strategic one. In an era where competitors would reverse-engineer your approach by examining your public-facing site, feeding them false signals about your architecture could waste months of their R&D effort.

This tactic reflects a broader competitive principle: information asymmetry is itself a moat. When you're a small team competing against larger players, every month they spend pursuing the wrong technical approach is a month you spend building the right one. The cost of misdirection is nearly zero (a URL rewrite), while the cost to the competitor of pursuing the wrong architecture is enormous. Modern equivalents might include obfuscating API patterns or deliberately using misleading framework identifiers in HTTP headers.
