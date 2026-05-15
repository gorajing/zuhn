---
id: INS-260514-E860
domain: ai-development
topic: applications
title: Discord bots as community-serving agents using same skills as internal tools
actionability: reference
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - discord-bot
  - community-agents
  - skills-reuse
  - ai-tinkerers
sources:
  - type: youtube
    title: How Claude Code Powers GTM Engineering & AI Agents with Hai Nghiem
    author: 'This New Way Podcast - Aydin Mirzaee '
    url: 'https://youtu.be/t6lR0PC7xxI'
date_extracted: '2026-05-14'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    OatMilk is their Discord bot serving 1500 community members. Uses the same
    skills as their internal sales tooling. Different interface, same
    primitives.
  standard: >-
    Hai Nghiem's open-source Discord bot 'OatMilk' serves 1,500 community
    members in AGI Ventures' AI Tinkerers Discord. It uses the same skills
    library that powers internal GTM tooling — answer common questions, provide
    event info, do web search for community queries. The architectural pattern:
    codified skills are interface-agnostic. Once you've defined 'how to write a
    helpful response with specific facts from our knowledge base,' that skill
    can plug into Slack bots, Discord bots, customer-support agents, or internal
    CLI tools. The leverage compounds across interfaces, not just across team
    members.


    Application: when designing AI-augmented operations, plan the interface
    layer separately from the skills layer. The same skills should serve
    internal Slack workflows, customer-facing Intercom/help-desk agents, public
    Discord bots, and CLI tooling. For Memric: same logic for the audit-delivery
    agent — the underlying skills (qualify-firm, identify-retired-principles,
    draft-section-4-of-report) can plug into the founder's Claude Code session,
    the customer-facing audit-delivery interface, and any future Slack-bot
    integrations a customer requests.
stance: >-
  When skills are codified properly, the same primitives that serve internal
  team workflows can power external community-serving agents (Discord bots,
  support agents) with minimal extra work — AGI Ventures Canada's Discord bot
  'OatMilk' uses the same skills library as their internal sales/GTM tooling,
  just behind a different interface.
related:
  - INS-260327-B561
  - INS-260409-A4F0
  - INS-260514-D155
  - INS-260501-3D0C
  - INS-260403-699A
---
Hai Nghiem's open-source Discord bot 'OatMilk' serves 1,500 community members in AGI Ventures' AI Tinkerers Discord. It uses the same skills library that powers internal GTM tooling — answer common questions, provide event info, do web search for community queries. The architectural pattern: codified skills are interface-agnostic. Once you've defined 'how to write a helpful response with specific facts from our knowledge base,' that skill can plug into Slack bots, Discord bots, customer-support agents, or internal CLI tools. The leverage compounds across interfaces, not just across team members.

Application: when designing AI-augmented operations, plan the interface layer separately from the skills layer. The same skills should serve internal Slack workflows, customer-facing Intercom/help-desk agents, public Discord bots, and CLI tooling. For Memric: same logic for the audit-delivery agent — the underlying skills (qualify-firm, identify-retired-principles, draft-section-4-of-report) can plug into the founder's Claude Code session, the customer-facing audit-delivery interface, and any future Slack-bot integrations a customer requests.
