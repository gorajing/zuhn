---
id: INS-260327-91C7
domain: ai-development
topic: claude-code
title: >-
  CPS framework (Context-Problem-Solution) creates cumulative shared
  understanding for AI-assisted development
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - cps-framework
  - documentation
  - shared-context
  - enterprise-workflow
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
    The CPS (Context-Problem-Solution) framework ensures all meeting logs
    converge into a single document that accumulates shared context, enabling
    both humans and AI models to stay aligned across iterative development.
  standard: >-
    Inspired by Palantir's internal MUD sessions, DIO adopted the CPS framework
    where every problem and solution is preceded by explicit context
    synchronization. As meetings generate new requirements and solutions, the
    context section continuously grows, creating a cumulative knowledge base.


    The power of CPS is that it enables newcomers (human or AI) to quickly
    understand the full background before encountering problems and solutions.
    Meeting logs feed into a single CPS document that grows throughout the
    project lifecycle. This is particularly powerful for AI-assisted development
    because it provides the structured context that models need to produce
    consistent, informed outputs. The framework operates at a higher level than
    PRDs -- it's a thought organization system that ensures everyone (including
    AI models) shares the same reality before making decisions.
stance: >-
  A Context-Problem-Solution documentation framework that accumulates context
  across meetings provides the essential shared understanding layer that enables
  both human teams and AI models to produce aligned outputs.
related:
  - INS-260321-C513
  - INS-260327-7F56
  - INS-260403-1C10
  - INS-260327-D9D6
  - INS-260327-C69F
  - INS-260329-0EAC
  - INS-260403-066E
  - INS-260403-3A34
evidence:
  - id: INS-260323-CD28
    type: SUPPORTS
    classified_at: '2026-04-02'
  - id: INS-260321-C513
    type: CHALLENGES
    classified_at: '2026-04-02'
---
Inspired by Palantir's internal MUD sessions, DIO adopted the CPS framework where every problem and solution is preceded by explicit context synchronization. As meetings generate new requirements and solutions, the context section continuously grows, creating a cumulative knowledge base.

The power of CPS is that it enables newcomers (human or AI) to quickly understand the full background before encountering problems and solutions. Meeting logs feed into a single CPS document that grows throughout the project lifecycle. This is particularly powerful for AI-assisted development because it provides the structured context that models need to produce consistent, informed outputs. The framework operates at a higher level than PRDs -- it's a thought organization system that ensures everyone (including AI models) shares the same reality before making decisions.
