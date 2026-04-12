---
id: INS-260330-6B7F
domain: startups
topic: competitive-strategy
title: >-
  The 'vanilla fallacy' — building without frameworks means building a worse
  framework
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - frameworks
  - build-vs-buy
  - technical-debt
  - vanilla-js
sources:
  - type: youtube
    title: I built the same app 10 times // Which JS Framework is best?
    author: Fireship
    url: 'https://www.youtube.com/watch?v=cuHDQhDhvPE'
date_extracted: '2026-03-30'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Vanilla JS forces imperative DOM manipulation where state and UI are
    completely decoupled, and any attempt to manage that complexity at scale
    recreates framework patterns — just without the community, testing, and
    documentation.
  standard: >-
    The video demonstrates that even a simple to-do app in vanilla JS requires
    manually querying DOM elements, imperatively creating and appending nodes,
    and managing the disconnect between application state and UI. The HTML
    markup gives no indication of bound events or data flow. As Fireship puts
    it: 'what you'll end up doing is building your own shitty JavaScript
    framework.'


    This is a specific instance of a universal build-vs-buy trap: rejecting
    existing tools because they seem like unnecessary overhead, then spending
    more time recreating worse versions of those same tools. The pattern appears
    everywhere — teams that reject ORMs end up building query builders, teams
    that reject CSS frameworks end up building design systems. The anti-tool
    stance only makes sense when you truly need less than what the simplest
    available tool provides.
stance: >-
  Developers who reject frameworks to use vanilla JavaScript inevitably recreate
  framework-like abstractions poorly, making the anti-framework stance
  counterproductive for non-trivial applications.
related:
  - INS-260330-AB62
  - INS-260403-2475
  - INS-260410-BBEA
  - INS-260412-3B3D
  - PRI-260328-8516
evidence:
  - id: INS-260330-DE16
    type: SUPPORTS
  - id: INS-260330-AB62
    type: SUPPORTS
  - id: INS-260402-A693
    type: SUPPORTS
---
The video demonstrates that even a simple to-do app in vanilla JS requires manually querying DOM elements, imperatively creating and appending nodes, and managing the disconnect between application state and UI. The HTML markup gives no indication of bound events or data flow. As Fireship puts it: 'what you'll end up doing is building your own shitty JavaScript framework.'

This is a specific instance of a universal build-vs-buy trap: rejecting existing tools because they seem like unnecessary overhead, then spending more time recreating worse versions of those same tools. The pattern appears everywhere — teams that reject ORMs end up building query builders, teams that reject CSS frameworks end up building design systems. The anti-tool stance only makes sense when you truly need less than what the simplest available tool provides.
