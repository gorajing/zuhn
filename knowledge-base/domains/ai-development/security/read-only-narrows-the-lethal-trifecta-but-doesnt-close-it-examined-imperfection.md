---
id: INS-260627-5A21
domain: ai-development
topic: security
title: >-
  Read-only narrows the lethal trifecta but doesn't close it; examined
  imperfection beats blind trust
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - lethal-trifecta
  - mosaic-effect
  - exfiltration
  - threat-modeling
  - security-posture
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
    The worst security posture is the one you haven't examined — read-only
    shrinks the attack surface but the same cross-referencing that makes it
    useful makes it a devastating target.
  standard: >-
    Podhajský refuses to overclaim security. He invokes the 'mosaic effect': the
    cross-referencing that makes the system valuable also makes it a devastating
    target, because many small pieces assembled together paint a complete
    picture. He maps the design against Simon Willison's lethal trifecta —
    private data, untrusted content, and external communication. Read-only
    removes the natural exfiltration channels, but it does not fully break the
    trifecta: shell access still grants the ability to communicate externally,
    and data is still sent to a third-party API over a mostly-open network.


    The takeaway is a posture, not a guarantee: 'I'm not claiming the system is
    secure. I'm claiming I've thought about where it isn't, and I've decided
    which risks I'm willing to carry.' Knowing precisely where your defenses
    fail and consciously accepting those residual risks is strictly better than
    assuming you're safe. The worst security posture is the unexamined one —
    naming your unbroken trifecta leg is a feature of mature threat modeling,
    not an admission of failure.
stance: >-
  Read-only access removes the natural exfiltration channel but shell access
  keeps the lethal trifecta's external-communication leg open, so the honest
  security claim is 'examined, not secure.'
related:
  - INS-260404-A850
  - INS-260605-19B4
  - INS-260627-962C
  - INS-260410-3043
  - INS-260628-2CF1
---
Podhajský refuses to overclaim security. He invokes the 'mosaic effect': the cross-referencing that makes the system valuable also makes it a devastating target, because many small pieces assembled together paint a complete picture. He maps the design against Simon Willison's lethal trifecta — private data, untrusted content, and external communication. Read-only removes the natural exfiltration channels, but it does not fully break the trifecta: shell access still grants the ability to communicate externally, and data is still sent to a third-party API over a mostly-open network.

The takeaway is a posture, not a guarantee: 'I'm not claiming the system is secure. I'm claiming I've thought about where it isn't, and I've decided which risks I'm willing to carry.' Knowing precisely where your defenses fail and consciously accepting those residual risks is strictly better than assuming you're safe. The worst security posture is the unexamined one — naming your unbroken trifecta leg is a feature of mature threat modeling, not an admission of failure.
