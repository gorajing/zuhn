---
id: INS-260627-3F9B
domain: ai-development
topic: research-methodology
title: Vanity engineering metrics disguise negative-ROI AI adoption
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - metrics
  - goodharts-law
  - ai-roi
  - measurement
sources:
  - type: youtube
    title: >-
      Can you prove AI ROI in Software Eng? (Stanford 120k Devs Study) – Yegor
      Denisov-Blanch, Stanford
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=JvosMkuNxF8'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    A case-study team saw PRs rise 14% after AI adoption while code quality fell
    9%, rework rose 2.5×, and effective output stayed flat — measuring PR counts
    alone would have falsely declared a win.
  standard: >-
    A 350-person org adopted AI and saw pull requests increase 14% — which,
    measured naively, reads as a productivity win worth millions that easily
    offsets AI licenses. But deeper measurement told the opposite story:
    maintainability (code quality) dropped ~9% and became more erratic, rework
    increased 2.5×, and 'effective output' (a productivity proxy net of
    rework/refactoring) didn't meaningfully change. The actual ROI may be
    negative.


    The lesson is that PR counts, lines of code, and even DORA are not
    productivity metrics for AI evaluation — more PRs doesn't mean better. The
    proposed alternative is a *primary* metric (engineering output, via the ML
    expert-panel model) paired with *guardrail* metrics (rework/refactoring,
    quality/tech/risk, people/devops) that you keep healthy but deliberately do
    *not* maximize. Crucially, the conclusion isn't to abandon AI but to use
    honest measurement to find what the team is doing wrong and fix it.
stance: >-
  Measuring AI ROI by PR counts or lines of code systematically overstates its
  value and hides quality regressions.
related:
  - INS-260323-4E12
  - INS-260330-AB62
  - INS-260501-6A56
  - INS-260514-F565
  - INS-260625-8FC6
  - INS-260626-6AF4
  - INS-260627-110A
  - INS-260627-0D0C
  - INS-260627-68CA
  - INS-260627-8DBA
---
A 350-person org adopted AI and saw pull requests increase 14% — which, measured naively, reads as a productivity win worth millions that easily offsets AI licenses. But deeper measurement told the opposite story: maintainability (code quality) dropped ~9% and became more erratic, rework increased 2.5×, and 'effective output' (a productivity proxy net of rework/refactoring) didn't meaningfully change. The actual ROI may be negative.

The lesson is that PR counts, lines of code, and even DORA are not productivity metrics for AI evaluation — more PRs doesn't mean better. The proposed alternative is a *primary* metric (engineering output, via the ML expert-panel model) paired with *guardrail* metrics (rework/refactoring, quality/tech/risk, people/devops) that you keep healthy but deliberately do *not* maximize. Crucially, the conclusion isn't to abandon AI but to use honest measurement to find what the team is doing wrong and fix it.
