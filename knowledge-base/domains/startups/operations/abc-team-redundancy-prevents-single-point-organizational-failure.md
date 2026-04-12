---
id: INS-260412-2754
domain: startups
topic: operations
title: ABC team redundancy prevents single-point organizational failure
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - redundancy
  - resilience
  - disaster-recovery
  - organizational-design
sources:
  - type: youtube
    title: How the US Government Will Survive Doomsday
    author: Wendover Productions
    url: 'https://www.youtube.com/watch?v=j48Z3W35FI0'
date_extracted: '2026-04-12'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    The US government's COGCON system splits every agency into three independent
    teams (A, B, C) at separate sites, each ready to assume full operations if
    the team above it falls.
  standard: >-
    The US Continuity of Government plan requires every federal agency to
    maintain three separate teams at three separate facilities. Team A operates
    from near headquarters, Team B from Mount Weather, and Team C from an
    undisclosed location. Each team can independently run the full agency. This
    cascading failover model is directly applicable to startups and tech
    companies: critical functions (deployment, customer support, billing) should
    have at least two independent teams or runbooks that can take over if the
    primary team is unreachable. The key design principle is that each layer
    must be fully autonomous — not dependent on handoff from the layer above —
    because in a real crisis, handoffs fail silently.
stance: >-
  Organizations that split critical functions into three geographically
  separated teams with cascading failover will survive disruptions that destroy
  any single location
related:
  - INS-260330-F8A2
  - INS-260403-DB38
  - INS-260404-63B0
  - INS-260327-999C
  - INS-260327-2043
---
The US Continuity of Government plan requires every federal agency to maintain three separate teams at three separate facilities. Team A operates from near headquarters, Team B from Mount Weather, and Team C from an undisclosed location. Each team can independently run the full agency. This cascading failover model is directly applicable to startups and tech companies: critical functions (deployment, customer support, billing) should have at least two independent teams or runbooks that can take over if the primary team is unreachable. The key design principle is that each layer must be fully autonomous — not dependent on handoff from the layer above — because in a real crisis, handoffs fail silently.
