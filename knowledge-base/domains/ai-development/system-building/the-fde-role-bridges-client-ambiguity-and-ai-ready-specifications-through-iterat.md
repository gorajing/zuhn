---
id: INS-260327-D9D6
domain: ai-development
topic: system-building
title: >-
  The FDE role bridges client ambiguity and AI-ready specifications through
  iterative decomposition
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - forward-deployment-engineer
  - requirements-engineering
  - client-communication
  - enterprise-ai
sources:
  - type: youtube
    title: 상위 1% AI 네이티브들은 프롬프트 안쓰고 '하네스 깎기'에 수백시간 투자합니다. (DIO FDE 김지운님)
    author: 빌더 조쉬 Builder Josh
    url: 'https://youtu.be/A8PMyC7W_vg'
date_extracted: '2026-03-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    The FDE role translates vague client requirements into AI-ready
    specifications through iterative meetings, structured documentation, and
    progressive decomposition from ambiguity to precision.
  standard: >-
    DIO's workflow demonstrates a critical enterprise pattern: clients say 'I
    need an ordering app' but through iterative meetings, the FDE discovers they
    actually need four apps (customer, driver, restaurant, admin). The meeting
    cadence (twice daily, morning and afternoon) with structured documentation
    outputs ensures nothing is lost.


    The documentation flow is deliberate: meeting logs capture everything (no
    blocking divergent ideas), CPS documents converge the context and solutions,
    PRD documents specify the plan, and design documents define the
    architecture. Documents are delivered twice -- once at initial spec
    expansion, once after project completion via reverse engineering. This
    creates a living specification that AI models can consume to produce
    consistent outputs, rather than relying on ad-hoc prompting.
stance: >-
  A Forward Deployment Engineer who iteratively decomposes vague client
  requirements into structured specifications through regular meetings creates
  the essential translation layer between human intent and AI-executable work.
related:
  - INS-260329-83AA
  - INS-260330-FE9E
  - INS-260330-2306
  - PRI-260403-FBA8
  - PRI-260328-EE04
  - INS-260329-7673
  - INS-260330-B711
evidence:
  - id: INS-260322-DAFB
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
  - id: INS-260330-FE9E
    type: SUPPORTS
    classified_at: '2026-04-02'
  - id: INS-260330-2306
    type: SUPPORTS
    classified_at: '2026-04-02'
  - id: INS-260330-B711
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
---
DIO's workflow demonstrates a critical enterprise pattern: clients say 'I need an ordering app' but through iterative meetings, the FDE discovers they actually need four apps (customer, driver, restaurant, admin). The meeting cadence (twice daily, morning and afternoon) with structured documentation outputs ensures nothing is lost.

The documentation flow is deliberate: meeting logs capture everything (no blocking divergent ideas), CPS documents converge the context and solutions, PRD documents specify the plan, and design documents define the architecture. Documents are delivered twice -- once at initial spec expansion, once after project completion via reverse engineering. This creates a living specification that AI models can consume to produce consistent outputs, rather than relying on ad-hoc prompting.
