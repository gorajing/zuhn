---
id: INS-260412-28C9
domain: startups
topic: engineering
title: >-
  Systems that work perfectly in testing fail from overlooked interface
  mismatches
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - systems-engineering
  - root-cause-analysis
  - integration-failures
  - interfaces
sources:
  - type: youtube
    title: Three Men Lost in Space – The Apollo 13 Disaster
    author: ColdFusion
    url: 'https://www.youtube.com/watch?v=5OLtteIwwNs'
date_extracted: '2026-04-12'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Apollo 13's explosion traced to a voltage mismatch between modified heaters
    and unmodified thermostatic switches—a classic interface failure.
  standard: >-
    The Apollo 13 explosion's root cause was an interface mismatch: when oxygen
    tank heaters were upgraded from 28V to 65V DC, the thermostatic switches
    weren't updated to match. Each component worked correctly at its original
    specification, but the interface between them was silently broken. The final
    launch-pad test then damaged the Teflon insulation, creating the short
    circuit that caused the explosion.


    This is the most common pattern in software engineering failures too.
    Individual services pass their unit tests, but the integration between them
    harbors silent mismatches—API contract changes that weren't propagated,
    timeout assumptions that differ between caller and callee, or schema
    migrations that one service applied but another didn't. The Apollo 13 lesson
    is that interface testing between independently-modified subsystems deserves
    disproportionate attention relative to component testing. The explosion
    wasn't a random failure; it was a predictable consequence of modifying one
    side of an interface without updating the other.
stance: >-
  Catastrophic system failures most often originate not from component-level
  defects but from interface mismatches between subsystems that were modified or
  integrated independently
related:
  - INS-260410-FD24
  - INS-260330-DFC8
  - INS-260330-39D4
  - INS-260330-051F
  - INS-260321-E2FC
---
The Apollo 13 explosion's root cause was an interface mismatch: when oxygen tank heaters were upgraded from 28V to 65V DC, the thermostatic switches weren't updated to match. Each component worked correctly at its original specification, but the interface between them was silently broken. The final launch-pad test then damaged the Teflon insulation, creating the short circuit that caused the explosion.

This is the most common pattern in software engineering failures too. Individual services pass their unit tests, but the integration between them harbors silent mismatches—API contract changes that weren't propagated, timeout assumptions that differ between caller and callee, or schema migrations that one service applied but another didn't. The Apollo 13 lesson is that interface testing between independently-modified subsystems deserves disproportionate attention relative to component testing. The explosion wasn't a random failure; it was a predictable consequence of modifying one side of an interface without updating the other.
