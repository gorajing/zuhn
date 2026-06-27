---
id: INS-260627-0719
domain: ai-development
topic: agent-patterns
title: >-
  Asymmetric error cost makes read-only the right default for high-stakes
  personal AI
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - asymmetric-risk
  - read-only-ai
  - blast-radius
  - agent-design
  - safety
sources:
  - type: youtube
    title: >-
      Cognitive Exhaust Fumes, or: Read-Only AI Is Underrated — Šimon Podhajský,
      Head of AI, Waypoint
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=u0TOSBbAw7c'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    A wrong read is ignored; a wrong write can nuke your relationships, career,
    or reputation — so the asymmetry favors observation.
  standard: >-
    The case for read-only rests on error asymmetry. The downside of a read-only
    mistake is zero — you simply ignore a bad suggestion. The downside of a
    write/action mistake is unbounded, and personal AI operates in a high-stakes
    environment touching relationships, career, and reputation. Podhajský would
    rather miss out on automated emails than have a single misfire 'nuke my
    life.'


    This is a concrete decision rule for agent design: before granting write or
    action permissions, ask what the worst-case blast radius of a single wrong
    action is, and whether the upside is worth carrying that tail risk. When the
    downside is bounded and reversible (a draft you review), write access can be
    justified; when it is unbounded and irreversible (a sent message, a
    scheduled commitment, a deleted record), the human should remain the
    actuator. The pattern generalizes well beyond personal AI to any agent
    operating in an environment where mistakes are costly and hard to undo.
stance: >-
  In high-stakes personal domains, AI should default to read-only because a read
  error costs nothing while a write error is unbounded.
related:
  - INS-260329-5BB0
  - INS-260403-1A96
  - INS-260403-A6B1
  - INS-260405-F7FA
  - INS-260627-1B54
  - INS-260330-5BC4
  - INS-260605-FD3D
---
The case for read-only rests on error asymmetry. The downside of a read-only mistake is zero — you simply ignore a bad suggestion. The downside of a write/action mistake is unbounded, and personal AI operates in a high-stakes environment touching relationships, career, and reputation. Podhajský would rather miss out on automated emails than have a single misfire 'nuke my life.'

This is a concrete decision rule for agent design: before granting write or action permissions, ask what the worst-case blast radius of a single wrong action is, and whether the upside is worth carrying that tail risk. When the downside is bounded and reversible (a draft you review), write access can be justified; when it is unbounded and irreversible (a sent message, a scheduled commitment, a deleted record), the human should remain the actuator. The pattern generalizes well beyond personal AI to any agent operating in an environment where mistakes are costly and hard to undo.
