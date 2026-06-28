---
id: INS-260626-B09B
domain: automation
topic: pipelines
title: >-
  Low-friction automation should operate in the background until it has a reason
  to interrupt
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - workflow
  - automation
  - alerts
  - clinical-ai
  - human-computer-interaction
sources:
  - type: blog
    title: >-
      AI support tool improved clinician decisions in real-world primary care
      trial
    url: 'https://www.eurekalert.org/news-releases/1133583'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    AI Consult's background EMR integration and color-coded alerts show a
    practical pattern for minimizing AI workflow tax.
  standard: >-
    AI Consult did not ask clinicians to leave the clinical workflow and consult
    a separate chatbot. It analyzed information entered into the medical record,
    produced guideline-aligned suggestions, and flagged potential concerns with
    a green, yellow, or red alert structure while staying invisible to patients.


    The transferable automation pattern is event-driven assistance: watch the
    user's existing work surface, infer when intervention is warranted, and make
    escalation legible. This reduces adoption friction and preserves the core
    human interaction. The remaining constraint is that alert design must avoid
    fatigue, over-reliance, and responsibility diffusion.
stance: >-
  Professional workflow automation is more acceptable when it passively monitors
  existing work and escalates only context-specific concerns instead of forcing
  a separate AI task loop.
related:
  - INS-260403-D16C
  - INS-260628-6420
  - INS-260402-B36F
  - INS-260605-3B06
  - PRI-260323-49F8
---
AI Consult did not ask clinicians to leave the clinical workflow and consult a separate chatbot. It analyzed information entered into the medical record, produced guideline-aligned suggestions, and flagged potential concerns with a green, yellow, or red alert structure while staying invisible to patients.

The transferable automation pattern is event-driven assistance: watch the user's existing work surface, infer when intervention is warranted, and make escalation legible. This reduces adoption friction and preserves the core human interaction. The remaining constraint is that alert design must avoid fatigue, over-reliance, and responsibility diffusion.
