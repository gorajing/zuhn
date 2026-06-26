---
id: INS-260626-E000
domain: ai-development
topic: agents
title: Mobile approval flows need pairing identity as part of the audit trail
actionability: immediate
confidence: high
shelf_life: time-sensitive
status: active
tags:
  - codex
  - permissions
  - mobile-approval
  - audit
sources:
  - type: paste
    title: openai codex remote ga june 25 2026
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Remote approvals should carry device-pairing and host identity, not just an
    approval boolean.
  standard: >-
    The Codex Remote update makes remote steering and approval normal across
    ChatGPT plans. Because the phone can approve actions for a Mac or Windows
    host, the approval boundary is now a relationship between a mobile device
    and a host. AgentRun should preserve that relationship when available,
    especially for actions involving shell access, infrastructure creation, or
    credentials.
  deep: >-
    The failure mode is ambiguous accountability: an agent action can be
    initiated from mobile, executed on a host, and affect cloud infrastructure.
    Without paired-device and host metadata, later review cannot tell whether a
    sensitive action was approved in-context, remotely, or through a stale
    pairing.
subtopic: permissions
stance: >-
  Codex Remote's authenticated one-to-one QR pairing shows that remote approvals
  are becoming a first-class control plane. Audit logs that say only 'approved
  by user' are underspecified; they need device pairing, host identity, and
  whether the approval came from the same execution environment or a remote
  controller.
related:
  - INS-260410-E233
  - INS-260329-92E9
  - INS-260411-27AA
  - INS-260626-AE0C
  - INS-260403-23AA
---
The Codex Remote update makes remote steering and approval normal across ChatGPT plans. Because the phone can approve actions for a Mac or Windows host, the approval boundary is now a relationship between a mobile device and a host. AgentRun should preserve that relationship when available, especially for actions involving shell access, infrastructure creation, or credentials.
