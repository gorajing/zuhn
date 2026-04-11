---
id: INS-260410-E3FB
domain: startups
topic: organizational-design
title: Replace internal communication with hardened APIs to scale
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - amazon
  - service-oriented-architecture
  - scaling
  - bezos-mandate
sources:
  - type: youtube
    title: Amazon Web Services
    author: Acquired
    url: 'https://www.youtube.com/watch?v=APvj15_YCqk'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Bezos mandated all teams expose data only via service interfaces, with
    firing as the penalty, because process and coordination collapse under
    Metcalfe's law as org size grows.
  standard: >-
    When Amazon hit a complexity wall around 2002, the obvious response most
    companies choose is more coordination: program managers, better processes,
    tighter communication loops. Microsoft invented the PM role for exactly this
    reason. Bezos and Jassy made the opposite bet — remove communication
    entirely. Teams had to expose all data and functionality through hardened
    service interfaces, and no direct reads, shared memory, or backdoors were
    allowed. The penalty for non-compliance was termination.


    The deeper insight is that coordination overhead grows N-squared with
    headcount (Metcalfe's law applied to humans), so any scaling strategy built
    on 'better communication' eventually collapses. APIs impose documentation
    discipline, create hard contracts, and let each team operate as an
    independent startup. This is the cultural counterpart to service-oriented
    architecture: both reject the monolith, one in code and one in people.


    Apply this when an organization is grinding to a halt from interdependencies
    and coordination cost. Don't hire more PMs — cut the communication channels
    and force contracts instead.
stance: >-
  At scale, eliminating direct inter-team communication in favor of strict API
  contracts outperforms investing in better coordination processes.
related:
  - INS-260330-D031
  - INS-260405-8080
  - INS-260403-DB38
  - INS-260409-96B0
  - INS-260330-687B
---
When Amazon hit a complexity wall around 2002, the obvious response most companies choose is more coordination: program managers, better processes, tighter communication loops. Microsoft invented the PM role for exactly this reason. Bezos and Jassy made the opposite bet — remove communication entirely. Teams had to expose all data and functionality through hardened service interfaces, and no direct reads, shared memory, or backdoors were allowed. The penalty for non-compliance was termination.

The deeper insight is that coordination overhead grows N-squared with headcount (Metcalfe's law applied to humans), so any scaling strategy built on 'better communication' eventually collapses. APIs impose documentation discipline, create hard contracts, and let each team operate as an independent startup. This is the cultural counterpart to service-oriented architecture: both reject the monolith, one in code and one in people.

Apply this when an organization is grinding to a halt from interdependencies and coordination cost. Don't hire more PMs — cut the communication channels and force contracts instead.
