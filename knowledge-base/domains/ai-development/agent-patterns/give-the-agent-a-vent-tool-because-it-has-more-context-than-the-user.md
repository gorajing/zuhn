---
id: INS-260605-C726
domain: ai-development
topic: agent-patterns
title: Give the agent a vent tool because it has more context than the user
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agent-tools
  - feedback-loops
  - developer-experience
  - observability
sources:
  - type: youtube
    title: 'How Lovable self-improves every hour — Benjamin Verbeek, Lovable'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=KA5kPbdkK2E'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Hand the agent a 'send feedback' tool for tooling/docs/platform failures,
    routed straight to the builders' Slack.
  standard: >-
    Lovable gave their coding agent an explicit vent tool: use it when 'tooling,
    docs, or platform behavior is so poor it degrades your work' — missing
    tools, mismatched schemas, conflicting docs, broken platform behavior.
    Feedback lands directly in the team's Slack. The insight is an asymmetry of
    context: a non-technical user who gets stuck usually can't diagnose why, but
    the agent has been working the problem for several turns and often knows
    exactly what failed.


    This surfaced bugs the team couldn't otherwise see — a copy tool silently
    failing on filenames with spaces (then non-breaking spaces from screenshot
    pastes) generated 20 complaints in the first hour, exposing a defect their
    own monitoring missed. A bonus property: agent complaints are highly
    relatable to engineers, who already carry implicit context on how to fix a
    'this workflow is annoying' report. Treating the agent as a privileged
    observability source inverts the usual flow where humans instrument the
    agent.
stance: >-
  The agent, not the user, should report product friction, because it holds the
  technical context the non-technical user lacks.
related:
  - INS-260605-35B4
  - INS-260605-EA4B
  - INS-260530-D34F
  - INS-260410-E27A
  - INS-260605-6444
---
Lovable gave their coding agent an explicit vent tool: use it when 'tooling, docs, or platform behavior is so poor it degrades your work' — missing tools, mismatched schemas, conflicting docs, broken platform behavior. Feedback lands directly in the team's Slack. The insight is an asymmetry of context: a non-technical user who gets stuck usually can't diagnose why, but the agent has been working the problem for several turns and often knows exactly what failed.

This surfaced bugs the team couldn't otherwise see — a copy tool silently failing on filenames with spaces (then non-breaking spaces from screenshot pastes) generated 20 complaints in the first hour, exposing a defect their own monitoring missed. A bonus property: agent complaints are highly relatable to engineers, who already carry implicit context on how to fix a 'this workflow is annoying' report. Treating the agent as a privileged observability source inverts the usual flow where humans instrument the agent.
