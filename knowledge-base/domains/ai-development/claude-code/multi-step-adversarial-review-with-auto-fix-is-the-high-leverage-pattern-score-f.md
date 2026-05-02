---
id: INS-260501-AE73
domain: ai-development
topic: claude-code
title: >-
  Multi-step adversarial review with auto-fix is the high-leverage pattern —
  score, find issues, autofix, re-score
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - adversarial-review
  - auto-fix
  - quality-pattern
  - skill-design
sources:
  - type: youtube
    title: How to Make Claude Code Your AI Engineering Team
    author: Y Combinator
    url: 'https://youtu.be/wkv2ifxPpF8'
date_extracted: '2026-05-01'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Adversarial review: score the doc, find issues, attempt auto-fix, re-score.
    6→8/10 in two rounds without human intervention.
  standard: >-
    Tan demonstrates the pattern: GStack runs adversarial review on a design
    doc, finds 16 issues across categories (no failure handling, no privacy
    section, 2FA handoff with no proposed solution), attempts to auto-fix what
    it can, and re-scores. The doc went from 6/10 to 8/10 with three remaining
    issues for the human to address. This is dramatically better than 'human
    reviews and asks for fixes' because most issues are fixable algorithmically
    once identified — the bottleneck is identification, not fixing.


    The meta-pattern: any time you have a structured artifact (code, doc, plan),
    you can decompose review into (1) inventory the missing/wrong parts, (2)
    attempt auto-fix on the fixable ones, (3) surface the unfixable ones for
    human attention. This applies to design docs, code reviews, security
    reviews, marketing copy, even Zuhn's principle compression workflow. For
    Zuhn specifically: the existing post-ingest pipeline (health → reindex →
    embed → learn → views → git) is structurally similar but missing the
    explicit score-find-fix-rescore loop. Adding adversarial review as a skill
    that runs against insight files would catch the kind of stance-quality
    issues the validation script can only flag, not fix.
stance: >-
  The most valuable skill pattern for any non-trivial AI work is adversarial
  review that runs multiple passes, scores the artifact, finds specific issues,
  attempts to auto-fix, and re-scores — making it a force-multiplier on quality
  without requiring human intervention at every step.
related:
  - INS-260320-1B10
  - INS-260403-E09E
  - INS-260329-64B8
  - INS-260330-00D5
  - INS-260409-171C
---
Tan demonstrates the pattern: GStack runs adversarial review on a design doc, finds 16 issues across categories (no failure handling, no privacy section, 2FA handoff with no proposed solution), attempts to auto-fix what it can, and re-scores. The doc went from 6/10 to 8/10 with three remaining issues for the human to address. This is dramatically better than 'human reviews and asks for fixes' because most issues are fixable algorithmically once identified — the bottleneck is identification, not fixing.

The meta-pattern: any time you have a structured artifact (code, doc, plan), you can decompose review into (1) inventory the missing/wrong parts, (2) attempt auto-fix on the fixable ones, (3) surface the unfixable ones for human attention. This applies to design docs, code reviews, security reviews, marketing copy, even Zuhn's principle compression workflow. For Zuhn specifically: the existing post-ingest pipeline (health → reindex → embed → learn → views → git) is structurally similar but missing the explicit score-find-fix-rescore loop. Adding adversarial review as a skill that runs against insight files would catch the kind of stance-quality issues the validation script can only flag, not fix.
