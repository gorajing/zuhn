---
id: INS-260605-9719
domain: ai-development
topic: agent-patterns
title: Close the feedback loop with a human-in-the-loop autonomous coding agent
actionability: immediate
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - claude-code
  - human-in-the-loop
  - feedback-loops
  - autonomous-agents
  - mcp
sources:
  - type: youtube
    title: 'Building a Chess Coach — Anant Dole and Asbjorn Steinskog, Take Take Take'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=FlzpEGHNVKQ'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    User 'report bad commentary' taps post to Slack and into a live Claude Code
    channel that fixes the issue and asks the engineer to approve from their
    phone.
  standard: >-
    When a user marks chess commentary as bad in the app, the report posts to
    Slack and is injected as an event into a continuously running Claude Code
    session via Channel (an MCP server that pushes events into a live session).
    Claude Code then runs a custom 'commentary triage' skill outlining how to
    investigate the position, uses scripts to regenerate commentary, can modify
    the prompt or create new detectors, verifies its own work, and asks
    clarifying questions back to Slack. The engineer can be on a bus, answer the
    agent's question, tell it to submit a PR, review it on GitHub mobile, and
    merge.


    This is a concrete instance of an emerging pattern the speakers call now
    'very common and very powerful': the feedback loop from end-user complaint
    to merged fix is mediated by an autonomous agent, with the human acting as
    approver rather than implementer. The keys that make it work are the triage
    skill (encoding the investigation process), self-verification, and a
    low-friction approval surface. Notably in their live demo the agent
    investigated and concluded 'there's nothing wrong' — a reminder that the
    human's judgment and the agent's own verification both guard against acting
    on false-positive reports.
stance: >-
  Routing real user complaints into a running Claude Code session that
  investigates, edits detectors and prompts, self-verifies, and opens a PR lets
  a small team iterate on AI quality from their phone.
related:
  - INS-260403-22EE
  - INS-260501-AE73
  - INS-260626-A084
  - INS-260530-D34F
  - INS-260410-E27A
  - INS-260626-485E
---
When a user marks chess commentary as bad in the app, the report posts to Slack and is injected as an event into a continuously running Claude Code session via Channel (an MCP server that pushes events into a live session). Claude Code then runs a custom 'commentary triage' skill outlining how to investigate the position, uses scripts to regenerate commentary, can modify the prompt or create new detectors, verifies its own work, and asks clarifying questions back to Slack. The engineer can be on a bus, answer the agent's question, tell it to submit a PR, review it on GitHub mobile, and merge.

This is a concrete instance of an emerging pattern the speakers call now 'very common and very powerful': the feedback loop from end-user complaint to merged fix is mediated by an autonomous agent, with the human acting as approver rather than implementer. The keys that make it work are the triage skill (encoding the investigation process), self-verification, and a low-friction approval surface. Notably in their live demo the agent investigated and concluded 'there's nothing wrong' — a reminder that the human's judgment and the agent's own verification both guard against acting on false-positive reports.
