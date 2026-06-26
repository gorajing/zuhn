---
id: INS-260626-B38C
domain: automation
topic: self-improving-systems
title: >-
  The highest-leverage move is automating yourself away by codifying recurring
  human-in-the-loop steps
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - flywheels
  - continual-learning
  - automation
  - context-capture
  - human-in-the-loop
sources:
  - type: youtube
    title: 'Building your own software factory — Eric Zakariasson, Cursor'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=rnDm57Py54A'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Mine your own chat transcripts for repetitive tasks and copy-paste loops,
    then codify them into skills, automations, and emergent rules — storing
    context for agents matters more than doing the work yourself.
  standard: >-
    Zakariasson's closing thesis: identify the flywheels and loops where you can
    automate yourself away by building systems. Concretely, ask an agent to scan
    your chat history for repetitive tasks, then look for every place a human
    copy-pastes between tools (Datadog logs into the codebase, Twitter feedback
    into Slack, Notion specs into markdown) and automate that handoff. Cursor's
    examples: a scheduled daily review summarizing Slack and GitHub activity; a
    'read merged PR comments' automation that captures high-signal human review
    feedback so agents learn over time; an agentic code owner that risk-assesses
    PRs and auto-approves low-risk ones while pulling in the right humans for
    high-risk ones; and 'continual learning' that extracts memories and rules
    from past transcripts automatically (solving the 'I'm too lazy to write the
    rule' gap). The framing principle is that storing context — transcripts,
    artifacts of good outputs — and keeping the tools current is more important
    than doing the work, because that context is the framework and guardrails
    the agents run on, and it lets agents learn what good and bad look like as
    standards shift.
stance: >-
  Building systems that capture context and automate recurring human steps
  compounds more than doing the underlying work directly.
related:
  - INS-260327-13B3
  - INS-260403-CCC3
  - INS-260405-2BB0
  - INS-260423-D900
  - INS-260501-2130
  - INS-260519-7744
  - INS-260605-90CF
  - INS-260605-2795
  - INS-260605-90E5
  - INS-260625-3DDC
---
Zakariasson's closing thesis: identify the flywheels and loops where you can automate yourself away by building systems. Concretely, ask an agent to scan your chat history for repetitive tasks, then look for every place a human copy-pastes between tools (Datadog logs into the codebase, Twitter feedback into Slack, Notion specs into markdown) and automate that handoff. Cursor's examples: a scheduled daily review summarizing Slack and GitHub activity; a 'read merged PR comments' automation that captures high-signal human review feedback so agents learn over time; an agentic code owner that risk-assesses PRs and auto-approves low-risk ones while pulling in the right humans for high-risk ones; and 'continual learning' that extracts memories and rules from past transcripts automatically (solving the 'I'm too lazy to write the rule' gap). The framing principle is that storing context — transcripts, artifacts of good outputs — and keeping the tools current is more important than doing the work, because that context is the framework and guardrails the agents run on, and it lets agents learn what good and bad look like as standards shift.
