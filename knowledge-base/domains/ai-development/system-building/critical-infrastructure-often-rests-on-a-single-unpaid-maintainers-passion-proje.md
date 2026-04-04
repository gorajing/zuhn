---
id: INS-260323-E559
domain: ai-development
topic: system-building
title: >-
  Critical infrastructure often rests on a single unpaid maintainer's passion
  project
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - open-source
  - infrastructure
  - single-point-of-failure
  - supply-chain
sources:
  - type: youtube
    title: The Internet Was Weeks Away From Disaster and No One Knew
    author: Veritasium
    url: 'https://youtu.be/aoag03mSuXQ'
date_extracted: '2026-03-23'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    The XZ backdoor nearly succeeded because the entire Linux ecosystem depended
    on a compression tool maintained by one burned-out volunteer for 20 years.
  standard: >-
    Lasse Collin maintained XZ Utils for nearly 20 years without pay. The tool
    became a dependency of OpenSSH, which secures virtually every Linux server
    on the internet — including Pentagon systems, nuclear submarines, and all
    500 top supercomputers. When Lasse burned out due to mental health issues,
    the attacker Jia Tan offered to 'help,' eventually gaining full maintainer
    access.


    This is the XKCD 'Nebraska' problem made real: a single person's hobby
    project silently becomes load-bearing infrastructure for millions of
    machines. The lesson applies to any system — technical or organizational —
    where critical dependencies go unaudited. The fix is not more eyeballs
    (Linus's Law failed here) but structural investment in dependency auditing
    and maintainer support.
related:
  - INS-260403-1110
  - INS-260404-8947
  - PRI-260403-C34A
  - INS-260330-5E47
  - INS-260323-A8B5
stance: >-
  The XZ backdoor nearly succeeded because the entire Linux ecosystem depended
  on a compression tool maintained by one burned-out volunteer for 20 ye...
evidence:
  - id: INS-260330-5E47
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
  - id: INS-260330-50B3
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
  - id: INS-260330-9A60
    type: SUPPORTS
    classified_at: '2026-04-02'
  - id: INS-260330-22C0
    type: SUPPORTS
    classified_at: '2026-04-02'
---
Lasse Collin maintained XZ Utils for nearly 20 years without pay. The tool became a dependency of OpenSSH, which secures virtually every Linux server on the internet — including Pentagon systems, nuclear submarines, and all 500 top supercomputers. When Lasse burned out due to mental health issues, the attacker Jia Tan offered to 'help,' eventually gaining full maintainer access.

This is the XKCD 'Nebraska' problem made real: a single person's hobby project silently becomes load-bearing infrastructure for millions of machines. The lesson applies to any system — technical or organizational — where critical dependencies go unaudited. The fix is not more eyeballs (Linus's Law failed here) but structural investment in dependency auditing and maintainer support.
