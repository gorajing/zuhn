---
id: INS-260514-026B
domain: ai-development
topic: infrastructure
title: >-
  Production-grade agentic RPA has 'we can never go down' stakes — fundamentally
  different from consumer AI
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - production-ai
  - reliability-stakes
  - agentic-rpa
  - consumer-vs-enterprise-ai
  - on-call
sources:
  - type: youtube
    title: '진짜 합리적인 의사결정법은 따로 있습니다 | Sola, Jessica Wu'
    author: EO Korea
    url: 'https://youtu.be/L-IVgl72Wmo'
date_extracted: '2026-05-14'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Agentic RPA running real ops has 'we can never go down' stakes — every
    minute means real customers' billing is late, shipments don't ship.
    Architecturally and operationally different from consumer AI.
  standard: >-
    Jessica Wu on what Sola learned about reliability: 'One thing we realized
    when we built Sola is we can never go down. That actually means that a real
    business out there who has hundreds or thousands of employees, their billing
    is going to be late that day. We've done a lot to maintain that. It's a
    little bit different from a consumer tool or something AI that's generating
    copy or finding sales leads. If those tools go down, it's a big deal and it
    disrupts people's work, but it's not the end of the world. The nature of our
    business when we go down is sort of the end of the world.' The structural
    difference: consumer AI failures are annoyances (try the prompt again,
    refresh the page). Agentic-RPA failures are real-world operational stoppages
    (invoices that legally need to go out today don't go out, shipments don't
    ship, patient data isn't entered into systems that compliance requires). The
    implications cascade through every part of the company: (1) Architecture:
    redundancy at every layer, no single points of failure, graceful degradation
    when components fail. (2) On-call: actual 24/7 coverage, real runbooks, fast
    escalation. (3) Customer relationships: weekly calls with design partners,
    willingness to deploy on Christmas Day if that's what the customer needs
    (Sola did this). (4) Founding team culture: 'a million weekends and a
    million different holidays in the office.' The corollary for AI builders: as
    agents move into production operations, the reliability bar shifts from
    'usually right' to 'never down.' Companies underpricing this shift will get
    blamed for outages that consumer AI peers would shrug off. The mental model:
    treat agentic-RPA infrastructure the way a payment-processor or
    hospital-systems team treats their infrastructure, not the way a chatbot
    startup treats their service.
stance: >-
  When AI agents are deployed in production operations (invoicing, accounts
  payable, shipment generation, patient data entry) the reliability bar is
  fundamentally different from consumer-AI applications — 'we can never go down'
  is literal, because every minute of downtime means real customers' billing is
  late, shipments don't ship, patient data isn't entered; this changes
  architecture, on-call, and customer-relationship economics in ways consumer AI
  doesn't.
related:
  - INS-260327-BEB1
  - INS-260403-3656
  - INS-260405-5C48
  - INS-260501-2243
  - INS-260403-3099
---
Jessica Wu on what Sola learned about reliability: 'One thing we realized when we built Sola is we can never go down. That actually means that a real business out there who has hundreds or thousands of employees, their billing is going to be late that day. We've done a lot to maintain that. It's a little bit different from a consumer tool or something AI that's generating copy or finding sales leads. If those tools go down, it's a big deal and it disrupts people's work, but it's not the end of the world. The nature of our business when we go down is sort of the end of the world.' The structural difference: consumer AI failures are annoyances (try the prompt again, refresh the page). Agentic-RPA failures are real-world operational stoppages (invoices that legally need to go out today don't go out, shipments don't ship, patient data isn't entered into systems that compliance requires). The implications cascade through every part of the company: (1) Architecture: redundancy at every layer, no single points of failure, graceful degradation when components fail. (2) On-call: actual 24/7 coverage, real runbooks, fast escalation. (3) Customer relationships: weekly calls with design partners, willingness to deploy on Christmas Day if that's what the customer needs (Sola did this). (4) Founding team culture: 'a million weekends and a million different holidays in the office.' The corollary for AI builders: as agents move into production operations, the reliability bar shifts from 'usually right' to 'never down.' Companies underpricing this shift will get blamed for outages that consumer AI peers would shrug off. The mental model: treat agentic-RPA infrastructure the way a payment-processor or hospital-systems team treats their infrastructure, not the way a chatbot startup treats their service.
