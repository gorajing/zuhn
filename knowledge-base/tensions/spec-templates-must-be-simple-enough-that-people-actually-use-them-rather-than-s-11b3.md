---
id: T-260324-11B3
title: >-
  Spec templates must be simple enough that people actually use them rather than
  skip them vs. Detailed spec design before coding prevents bugs and eliminates
  scope creep
status: resolved_with_nuance
severity: moderate
type: stance
date_created: '2026-03-25'
stance_a: >-
  Spec templates must be simple enough that people actually use them rather than
  skip them
stance_b: Detailed spec design before coding prevents bugs and eliminates scope creep
side_a:
  - INS-260320-4BA8
side_b:
  - INS-260320-4B31
reason: >-
  Simple templates get adopted but miss edge cases. Detailed specs catch bugs
  but get skipped. The deeper question: can any spec process be both thorough
  and actually followed?
---
**Side A:** "Spec templates must be simple enough that people actually use them rather than skip them"
**Side B:** "Detailed spec design before coding prevents bugs and eliminates scope creep"
**Reason:** Simple templates get adopted but miss edge cases. Detailed specs catch bugs but get skipped. The deeper question: can any spec process be both thorough and actually followed?
**Resolution:** The tension dissolves when you separate the spec artifact from the spec process. Side A is correct that template complexity kills adoption -- teams skip heavy templates. Side B is correct that rigorous upfront design prevents bugs and scope creep. The synthesis is layered specs: a simple mandatory template (Side A) for every task that takes 5 minutes to fill out, with optional depth sections that expand only when the task warrants it. Automation handles skeleton creation so there is zero friction to start. The Zuhn build validates this -- hours of upfront spec design prevented bugs, but the template itself was not burdensome because it was generated. The key insight: the spec discipline matters more than the spec format. A simple spec that is always done beats a detailed spec that is sometimes skipped.

**Prediction:** Teams that adopt automated, minimal spec templates (under 10 fields) with optional expansion sections will achieve 80%+ adoption rates, versus under 30% for teams using comprehensive templates.
