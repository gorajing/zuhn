---
id: INS-260626-CD36
domain: ai-development
topic: code-review
title: >-
  AGENTS.md is becoming executable review policy, not just agent onboarding
  prose
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - github-copilot
  - agents-md
  - code-review
  - repo-policy
  - agent-instructions
sources:
  - type: blog
    title: 'Copilot code review: AGENTS.md support and UI improvements'
    author: Allison
    url: >-
      https://github.blog/changelog/2026-06-18-copilot-code-review-agents-md-support-and-ui-improvements/
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: Treat root AGENTS.md as a tested review-policy artifact.
  standard: >-
    The new primitive is that a hosted code-review agent consumes
    repository-level instructions automatically. For Zuhn/AgentRun, this means
    root guidance should be concise, enforceable, and periodically audited
    against actual repo practice. If AGENTS.md drifts, Copilot will amplify that
    drift in review comments, just as a stale CI config would.
  deep: >-
    This also changes where agent behavior is configured. Instead of each agent
    session receiving custom context, the repository itself becomes a policy
    distribution point. That is useful for consistency, but dangerous if the
    file contains ambiguous preferences, obsolete commands, or instructions
    meant only for one tool.
subtopic: repository-instructions
stance: >-
  GitHub Copilot code review reading root AGENTS.md means repository
  instructions now directly shape automated review output, so stale or overbroad
  AGENTS.md files become production review configuration.
related:
  - INS-260404-74F4
  - INS-260627-E0AE
  - INS-260514-283E
  - INS-260628-94A8
  - INS-260404-B208
---
The new primitive is that a hosted code-review agent consumes repository-level instructions automatically. For Zuhn/AgentRun, this means root guidance should be concise, enforceable, and periodically audited against actual repo practice. If AGENTS.md drifts, Copilot will amplify that drift in review comments, just as a stale CI config would.
