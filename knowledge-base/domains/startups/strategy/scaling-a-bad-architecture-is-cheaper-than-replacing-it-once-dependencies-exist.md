---
id: INS-260404-9229
domain: startups
topic: strategy
title: >-
  Scaling a bad architecture is cheaper than replacing it once dependencies
  exist
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - technical-debt
  - scaling
  - architecture
  - workarounds
sources:
  - type: youtube
    title: 'Oh, wait, actually the best Wordle opener is not “crane”…'
    author: 3Blue1Brown
    url: 'https://www.youtube.com/watch?v=fRed0Xmc2Wg'
date_extracted: '2026-04-04'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    When redesign costs exceed the cost of brute-forcing volume, systems evolve
    to produce massive quantities of a flawed component rather than fix the flaw
    — plants maintain 40 billion tons of RuBisCo rather than evolve a better
    enzyme.
  standard: >-
    Plants produce an estimated 40 billion tons of RuBisCo at any given time —
    making it the most abundant protein on Earth — purely to compensate for its
    ~50% error rate. They also evolved entire secondary pathways
    (photorespiration, glycine recycling) just to clean up RuBisCo's mistakes.
    This is cheaper, evolutionarily, than replacing the enzyme.


    This maps directly to how companies handle technical debt. Once a flawed
    component sits at the center of enough dependencies, the rational move is to
    throw resources at scaling it (more servers, more engineers, more
    workarounds) rather than attempt a clean rewrite. The calculus is real:
    rewrites carry execution risk and require coordinating changes across every
    dependent system simultaneously. The insight for founders is to recognize
    when you've crossed the threshold from 'we should fix this' to 'we should
    scale around this' — and to plan your workaround infrastructure deliberately
    rather than letting it grow ad hoc.
stance: >-
  Organizations rationally choose to scale around known deficiencies rather than
  re-architect when the dependency graph is deep enough, making volume a
  permanent substitute for efficiency.
related:
  - INS-260330-B7B1
  - PRI-260403-40D7
  - INS-260404-3608
  - INS-260403-532D
  - INS-260404-EC33
  - INS-260330-68C8
  - INS-260404-47F5
---
Plants produce an estimated 40 billion tons of RuBisCo at any given time — making it the most abundant protein on Earth — purely to compensate for its ~50% error rate. They also evolved entire secondary pathways (photorespiration, glycine recycling) just to clean up RuBisCo's mistakes. This is cheaper, evolutionarily, than replacing the enzyme.

This maps directly to how companies handle technical debt. Once a flawed component sits at the center of enough dependencies, the rational move is to throw resources at scaling it (more servers, more engineers, more workarounds) rather than attempt a clean rewrite. The calculus is real: rewrites carry execution risk and require coordinating changes across every dependent system simultaneously. The insight for founders is to recognize when you've crossed the threshold from 'we should fix this' to 'we should scale around this' — and to plan your workaround infrastructure deliberately rather than letting it grow ad hoc.
