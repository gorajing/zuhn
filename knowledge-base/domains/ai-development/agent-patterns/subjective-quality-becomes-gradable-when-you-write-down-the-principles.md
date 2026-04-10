---
id: INS-260410-E4C4
domain: ai-development
topic: agent-patterns
title: Subjective quality becomes gradable when you write down the principles
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - evaluation
  - design
  - rubrics
  - prompting
  - frontend-design
sources:
  - type: blog
    title: Harness design for long-running application development
    url: 'https://www.anthropic.com/engineering/harness-design-long-running-apps'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    'Is this beautiful?' is unanswerable, but 'does this follow our design
    principles?' gives the model something concrete to grade against.
  standard: >-
    Aesthetics can't be reduced to a single score, but a written rubric that
    encodes principles and preferences makes grading consistent enough to drive
    iteration. In the frontend experiment, four criteria (design quality,
    originality, craft, functionality) — with deliberate weighting toward design
    and originality — pushed Claude away from the safe, generic layouts it
    defaulted to. The criteria explicitly named anti-patterns like 'purple
    gradients over white cards' to penalize AI-slop tells.


    The wording of the rubric also shaped output character in unexpected ways.
    Phrases like 'museum quality' caused visual convergence toward a particular
    aesthetic. This means the rubric is not a neutral measurement instrument —
    it's a steering tool. Writers should expect their criteria language to bleed
    into outputs and treat that as a design lever.


    Few-shot examples with detailed score breakdowns calibrated the evaluator
    and reduced score drift across iterations. The combination of explicit
    principles + few-shot calibration is what made an inherently subjective
    domain tractable for an automated feedback loop.
stance: >-
  Subjective tasks like 'is this design good' become amenable to LLM grading by
  replacing the unanswerable question with explicit principle-based criteria the
  evaluator can apply consistently.
related:
  - PRI-260407-C737
  - INS-260403-5F41
  - PRI-260406-1A55
  - INS-260403-AEF2
  - INS-260330-D006
---
Aesthetics can't be reduced to a single score, but a written rubric that encodes principles and preferences makes grading consistent enough to drive iteration. In the frontend experiment, four criteria (design quality, originality, craft, functionality) — with deliberate weighting toward design and originality — pushed Claude away from the safe, generic layouts it defaulted to. The criteria explicitly named anti-patterns like 'purple gradients over white cards' to penalize AI-slop tells.

The wording of the rubric also shaped output character in unexpected ways. Phrases like 'museum quality' caused visual convergence toward a particular aesthetic. This means the rubric is not a neutral measurement instrument — it's a steering tool. Writers should expect their criteria language to bleed into outputs and treat that as a design lever.

Few-shot examples with detailed score breakdowns calibrated the evaluator and reduced score drift across iterations. The combination of explicit principles + few-shot calibration is what made an inherently subjective domain tractable for an automated feedback loop.
