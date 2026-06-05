---
id: INS-260514-33FB
domain: ai-development
topic: agent-patterns
title: >-
  Purpose-built specialized agents per channel × intent type beat one general
  agent
actionability: reference
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - agent-architecture
  - specialization
  - outbound-personalization
  - orchestration
sources:
  - type: youtube
    title: >-
      $100M in Pipeline in 3 Months to Automating the Entire GTM Stack With AI
      Agents
    author: 'GTM AI Academy '
    url: 'https://youtu.be/3Jg9tFjs2AQ'
date_extracted: '2026-05-14'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Build a fleet of narrow purpose-built agents (one per channel × intent type)
    rather than one general agent — specialization improves output quality and
    per-client modifications stay isolated.
  standard: >-
    GTMFI's agent architecture (Scott showed live in the demo): separate
    purpose-built agents for each (channel, intent-source) pair.
    email-copy-for-on-site-intent gets its own agent.
    email-copy-for-off-site-intent gets its own agent.
    linkedin-copy-for-on-site-intent gets its own agent. WhatsApp, SMS, and
    cold-call-transcript generation each get their own agents. Each agent is
    reproducible across client workspaces, but during onboarding the agent's
    prompt absorbs client-specific modifications (company summary, ICP,
    personas, use cases). The orchestrator decides which agent to invoke based
    on the intent signal type and chosen channel — agents themselves don't make
    routing decisions. This pattern is structurally similar to OpenAI's
    harness-engineering approach (Lopopolo's reviewer-agents-per-persona) and
    Hai Nghiem's skills-vs-subagents distinction at Claude Code: narrow
    specialized agents with clear input/output contracts compose better than one
    general agent trying to do everything. The non-obvious cost: each new
    channel × intent combination requires its own agent + prompt, so the matrix
    grows multiplicatively — but it's a one-time setup that pays off forever in
    output quality and maintainability.
stance: >-
  For multi-channel personalized outbound, the right architecture is a fleet of
  narrow purpose-built agents (email-on-site-intent, email-off-site-intent,
  LinkedIn-on-site, LinkedIn-off-site, WhatsApp, SMS, cold-call-transcript)
  rather than one general agent — each agent gets a specialized prompt and
  reproducible per-client modifications, and routing decisions are made by the
  orchestrator, not the agent.
related:
  - INS-260410-BDFF
  - INS-260411-F590
  - INS-260514-EA9E
  - INS-260605-C2A3
  - INS-260501-91C2
  - INS-260603-1BC0
  - PRI-260405-AF79
  - INS-260605-82BD
---
GTMFI's agent architecture (Scott showed live in the demo): separate purpose-built agents for each (channel, intent-source) pair. email-copy-for-on-site-intent gets its own agent. email-copy-for-off-site-intent gets its own agent. linkedin-copy-for-on-site-intent gets its own agent. WhatsApp, SMS, and cold-call-transcript generation each get their own agents. Each agent is reproducible across client workspaces, but during onboarding the agent's prompt absorbs client-specific modifications (company summary, ICP, personas, use cases). The orchestrator decides which agent to invoke based on the intent signal type and chosen channel — agents themselves don't make routing decisions. This pattern is structurally similar to OpenAI's harness-engineering approach (Lopopolo's reviewer-agents-per-persona) and Hai Nghiem's skills-vs-subagents distinction at Claude Code: narrow specialized agents with clear input/output contracts compose better than one general agent trying to do everything. The non-obvious cost: each new channel × intent combination requires its own agent + prompt, so the matrix grows multiplicatively — but it's a one-time setup that pays off forever in output quality and maintainability.
