---
id: INS-260627-2B13
domain: automation
topic: self-improving-systems
title: Harvest recurring agent corrections into reusable skills so feedback compounds
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - self-improving-systems
  - skills
  - feedback-loops
  - organizational-learning
  - agent-management
sources:
  - type: youtube
    title: "Paperclip: Open Source Human Control Plane for AI Labor —\_Dotta Bippa"
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=h403btjldDQ'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    If you keep telling agents 'cuts should be 2 seconds not 6,' that pattern is
    a signal to fork a generic skill into an org-specific one that bakes in your
    preferences.
  standard: >-
    The demo describes reviewing 'the list of feedback that we've given our
    agents' across multiple video tasks and noticing repeated corrections —
    e.g., always shortening cuts from 6 seconds to 2. Rather than re-giving that
    note forever, they distill it: alongside a generic Remotion skill they
    maintain a Paperclip-specific skill encoding their branding, pacing choices,
    and preferences. Repeated feedback is treated as training data for a durable
    asset.


    The principle is that an organization's accumulated corrections are its most
    underused learning signal. Each one-off correction is a leak; capturing the
    recurring ones into a versioned skill turns ephemeral guidance into
    compounding capability. The presenter notes this is partly manual today and
    is exactly the 'organizational learning' they intend to automate — the
    system should detect repeated feedback and propose skill updates.


    The actionable move for any agent operator: instrument and periodically
    review the corrections you give, look for patterns, and promote them into
    skills or instruction files. This is the difference between a system that
    needs the same babysitting every day and one that gets measurably better the
    longer you use it — the same compounding logic behind any self-improving
    pipeline.
stance: >-
  Corrections you find yourself repeating to agents should be distilled into a
  reusable, context-specific skill rather than re-issued conversation by
  conversation.
related:
  - INS-260626-9732
  - INS-260410-1030
  - INS-260625-447A
  - INS-260605-6DE5
  - INS-260605-74E8
---
The demo describes reviewing 'the list of feedback that we've given our agents' across multiple video tasks and noticing repeated corrections — e.g., always shortening cuts from 6 seconds to 2. Rather than re-giving that note forever, they distill it: alongside a generic Remotion skill they maintain a Paperclip-specific skill encoding their branding, pacing choices, and preferences. Repeated feedback is treated as training data for a durable asset.

The principle is that an organization's accumulated corrections are its most underused learning signal. Each one-off correction is a leak; capturing the recurring ones into a versioned skill turns ephemeral guidance into compounding capability. The presenter notes this is partly manual today and is exactly the 'organizational learning' they intend to automate — the system should detect repeated feedback and propose skill updates.

The actionable move for any agent operator: instrument and periodically review the corrections you give, look for patterns, and promote them into skills or instruction files. This is the difference between a system that needs the same babysitting every day and one that gets measurably better the longer you use it — the same compounding logic behind any self-improving pipeline.
