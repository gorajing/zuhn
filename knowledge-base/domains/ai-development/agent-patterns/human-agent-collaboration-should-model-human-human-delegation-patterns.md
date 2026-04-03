---
id: INS-260327-7F56
domain: ai-development
topic: agent-patterns
title: Human-agent collaboration should model human-human delegation patterns
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - human-agent-interaction
  - collaborative-agents
  - delegation-patterns
sources:
  - type: youtube
    title: 'OpenAI Just Released ChatGPT Agent, Its Most Powerful Agent Yet'
    author: Sequoia Capital
    url: 'https://www.youtube.com/watch?v=YNWWu0aZ5pY'
date_extracted: '2026-03-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    ChatGPT Agent was designed to mirror Slack-style human delegation: both
    parties can initiate communication, the agent asks clarifying questions, and
    users can interrupt with corrections mid-task.
  standard: >-
    The OpenAI team deliberately modeled ChatGPT Agent's interaction pattern on
    human-to-human delegation: you give instructions, they ask clarifying
    questions, start working, occasionally check back for approvals on
    destructive actions, and you can interrupt to redirect or add forgotten
    requirements. Both the human and agent can initiate communication at any
    time.


    This is a significant departure from previous agent designs where
    interaction was either fully autonomous (agent runs to completion) or fully
    synchronous (human approves each step). The collaborative model enables
    multi-hour tasks while keeping humans in the loop for course corrections.
    The team sees this as 'the most basic version' of what collaborative agent
    interaction could be, with future improvements including memory,
    personalization, and agents initiating tasks without being asked.
stance: >-
  The best agent interaction model mirrors how you would delegate tasks to a
  competent human on Slack: giving initial instructions, accepting clarifying
  questions, providing mid-task corrections, and requesting status updates.
related:
  - INS-260320-63D3
  - INS-260322-DAFB
  - INS-260327-91C7
  - INS-260327-13B3
  - PRI-260328-F0E4
  - INS-260329-0A55
  - INS-260330-1F41
  - INS-260327-C1A4
  - INS-260329-C33B
  - INS-260329-C996
evidence:
  - id: INS-260322-DAFB
    type: EXTENDS
    classified_at: '2026-04-02'
  - id: INS-260329-0A55
    type: CHALLENGES
    classified_at: '2026-04-02'
  - id: INS-260330-1F41
    type: CONTRADICTS
    classified_at: '2026-04-02'
  - id: INS-260329-C996
    type: SUPPORTS
    classified_at: '2026-04-02'
  - id: INS-260403-E1AD
    type: TRANSFERS_TO
    classified_at: '2026-04-03'
---
The OpenAI team deliberately modeled ChatGPT Agent's interaction pattern on human-to-human delegation: you give instructions, they ask clarifying questions, start working, occasionally check back for approvals on destructive actions, and you can interrupt to redirect or add forgotten requirements. Both the human and agent can initiate communication at any time.

This is a significant departure from previous agent designs where interaction was either fully autonomous (agent runs to completion) or fully synchronous (human approves each step). The collaborative model enables multi-hour tasks while keeping humans in the loop for course corrections. The team sees this as 'the most basic version' of what collaborative agent interaction could be, with future improvements including memory, personalization, and agents initiating tasks without being asked.
