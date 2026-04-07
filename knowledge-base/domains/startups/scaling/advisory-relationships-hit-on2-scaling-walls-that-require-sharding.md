---
id: INS-260403-DD41
domain: startups
topic: scaling
title: Advisory relationships hit O(n²) scaling walls that require sharding
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - scaling
  - organizational-design
  - sharding
  - complexity
  - relationships
sources:
  - type: blog
    title: What I've Learned from Users
    url: 'https://paulgraham.com/users.html'
date_extracted: '2026-04-03'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    YC broke at 80 startups because partner-startup relationships were O(n²) —
    sharding into dedicated groups fixed it instantly.
  standard: >-
    When YC grew from 60 to 80 startups per batch (only 33% more), the system
    broke because every partner needed to know every startup — an O(n²)
    relationship graph. The fix was the classic computer science solution:
    sharding into smaller dedicated groups. This is a powerful organizational
    pattern that applies far beyond accelerators.


    The broader lesson is that organizations relying on everyone-knows-everyone
    dynamics will hit sudden, non-linear breaking points. The failure mode is
    subtle — it feels fine right up until it doesn't, because the pain grows
    quadratically while the headcount grows linearly. The solution is always
    some form of partitioning: dedicated teams, pods, or shards where deep
    knowledge of a smaller group replaces shallow knowledge of a large one. This
    is why the transition from 'startup' to 'company' so often feels
    discontinuous rather than gradual.
stance: >-
  Organizations that maintain all-to-all relationship graphs will hit sudden
  breaking points as they scale, and the fix is always partitioning into
  dedicated subgroups.
related:
  - INS-260325-93A9
  - PRI-260407-7C1A
  - PRI-260406-F8BD
  - PRI-260328-3BEF
  - INS-260327-A927
---
When YC grew from 60 to 80 startups per batch (only 33% more), the system broke because every partner needed to know every startup — an O(n²) relationship graph. The fix was the classic computer science solution: sharding into smaller dedicated groups. This is a powerful organizational pattern that applies far beyond accelerators.

The broader lesson is that organizations relying on everyone-knows-everyone dynamics will hit sudden, non-linear breaking points. The failure mode is subtle — it feels fine right up until it doesn't, because the pain grows quadratically while the headcount grows linearly. The solution is always some form of partitioning: dedicated teams, pods, or shards where deep knowledge of a smaller group replaces shallow knowledge of a large one. This is why the transition from 'startup' to 'company' so often feels discontinuous rather than gradual.
