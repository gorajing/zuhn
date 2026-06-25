---
id: INS-260625-91CA
domain: ai-development
topic: product-strategy
title: Accessibility and performance work is most of the way to an agent-ready site
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - accessibility
  - web-foundations
  - agent-ready-web
  - semantic-html
  - core-web-vitals
sources:
  - type: youtube
    title: >-
      The agent-ready web: Simplify user actions with WebMCP — Tara Agyemang,
      Google
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=ghJmWQCIHRM'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Fix web foundations (semantic HTML, accessibility, performance) first; that
    work doubles as agent-readiness and should precede adopting WebMCP.
  standard: >-
    The instinct when 'AI agents need to use my site' is to reach for a new
    agent protocol, but Agyemang argues the highest-leverage move comes first
    and for free: a site that is accessible to humans is accessible to agents by
    default. The same semantic HTML, robust accessibility standards, fast Core
    Web Vitals, and clean user-flow design that help screen-reader users also
    give an agent the structure it needs to navigate. This reframes
    accessibility spend as dual-purpose infrastructure rather than a compliance
    cost.


    The sequencing matters: only after foundations are solid does layering
    WebMCP on top make sense. Teams that skip straight to an agent protocol
    while their underlying HTML is a tangle of unlabeled divs are optimizing the
    wrong layer. The practical decision rule is to audit accessibility and
    performance first, ship those fixes, and treat agent-specific tooling as the
    final increment for flows that remain too complex for an agent to traverse
    unaided.
stance: >-
  Investing in semantic HTML, accessibility, and page performance makes a site
  agent-ready by default, before any agent-specific protocol.
related:
  - INS-260330-DF31
  - INS-260403-2115
  - INS-260330-C2C4
  - INS-260409-A3EC
  - PRI-260406-1F5E
  - INS-260404-8E0D
  - INS-260327-6CB7
  - INS-260403-A9CC
---
The instinct when 'AI agents need to use my site' is to reach for a new agent protocol, but Agyemang argues the highest-leverage move comes first and for free: a site that is accessible to humans is accessible to agents by default. The same semantic HTML, robust accessibility standards, fast Core Web Vitals, and clean user-flow design that help screen-reader users also give an agent the structure it needs to navigate. This reframes accessibility spend as dual-purpose infrastructure rather than a compliance cost.

The sequencing matters: only after foundations are solid does layering WebMCP on top make sense. Teams that skip straight to an agent protocol while their underlying HTML is a tangle of unlabeled divs are optimizing the wrong layer. The practical decision rule is to audit accessibility and performance first, ship those fixes, and treat agent-specific tooling as the final increment for flows that remain too complex for an agent to traverse unaided.
