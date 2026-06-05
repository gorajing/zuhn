---
id: INS-260514-5914
domain: ai-development
topic: system-design
title: 'Skills vs sub-agents: codified knowledge vs delegated context'
actionability: immediate
confidence: high
shelf_life: time-sensitive
status: active
tags:
  - claude-skills
  - sub-agents
  - context-engineering
  - knowledge-codification
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
    Skills = how-to knowledge loaded just-in-time. Sub-agents = task delegation
    that returns only the result. Wrong primitive = wasted context.
  standard: >-
    Hai Nghiem's clear architectural breakdown: skills are folders containing a
    text file (the SOP) and optionally script files. When invoked, Claude reads
    the skill, performs the task, and removes the skill from context — knowledge
    loaded just-in-time, garbage-collected after use. Sub-agents are a different
    primitive entirely: delegate a task to a separate agent with its own context
    window; the sub-agent generates 10K-20K tokens doing the task; only the
    final result returns to the main agent's context. Common mistake influencers
    make: setting up 'sub-agents' for personas (Tik Tok specialist, marketing
    specialist) — that's actually a skills use case, not a sub-agent one.
    Sub-agents are for context management; skills are for codifying knowledge.


    Application: when designing agent-driven workflows, decide per pattern: is
    this 'how to do X' (skill) or 'do this entire X for me without polluting my
    context' (sub-agent)? AGI Ventures Canada maintains a shared GitHub repo of
    skills (email-writer, prospect-research, document-generator) that anyone on
    the team can add to — institutional knowledge that compounds. Same logic for
    Memric: the audit-deliverable methodology should be skill-codified (template
    scripts + how-to text) so future engineers and customer-success staff
    inherit the methodology, not sub-agent-delegated (which loses the
    methodology in transit).
stance: >-
  The architectural distinction between Claude skills and sub-agents matters
  operationally — skills codify knowledge as folders+text+optional-scripts that
  the model loads just-in-time and discards after the task (preserving context
  window); sub-agents delegate entire tasks to separate context windows that
  return only final results — choosing the wrong primitive bloats your context
  or fragments your knowledge.
related:
  - INS-260327-C5D9
  - INS-260405-F26B
  - INS-260320-63D3
  - INS-260410-62E8
  - PRI-260411-9CB1
  - INS-260605-800F
  - INS-260605-4DB9
  - INS-260605-9A01
  - INS-260605-4509
---
Hai Nghiem's clear architectural breakdown: skills are folders containing a text file (the SOP) and optionally script files. When invoked, Claude reads the skill, performs the task, and removes the skill from context — knowledge loaded just-in-time, garbage-collected after use. Sub-agents are a different primitive entirely: delegate a task to a separate agent with its own context window; the sub-agent generates 10K-20K tokens doing the task; only the final result returns to the main agent's context. Common mistake influencers make: setting up 'sub-agents' for personas (Tik Tok specialist, marketing specialist) — that's actually a skills use case, not a sub-agent one. Sub-agents are for context management; skills are for codifying knowledge.

Application: when designing agent-driven workflows, decide per pattern: is this 'how to do X' (skill) or 'do this entire X for me without polluting my context' (sub-agent)? AGI Ventures Canada maintains a shared GitHub repo of skills (email-writer, prospect-research, document-generator) that anyone on the team can add to — institutional knowledge that compounds. Same logic for Memric: the audit-deliverable methodology should be skill-codified (template scripts + how-to text) so future engineers and customer-success staff inherit the methodology, not sub-agent-delegated (which loses the methodology in transit).
