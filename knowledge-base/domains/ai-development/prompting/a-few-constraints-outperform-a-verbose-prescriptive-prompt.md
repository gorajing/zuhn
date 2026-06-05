---
id: INS-260605-705B
domain: ai-development
topic: prompting
title: A few constraints outperform a verbose prescriptive prompt
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - skills
  - constraints
  - prompt-design
  - failure-modes
sources:
  - type: youtube
    title: 'Full Walkthrough: Writing & Using Skills — Nick Nisi and Zack Proser'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=pFsfax19yOM'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Codify what the agent must never do, not every step it should take, and let
    it reason at runtime.
  standard: >-
    The presenters name over-prescription as a common skill-design failure mode:
    writing a markdown 'novel' that dictates exactly how to do a task degrades
    performance, while three sharp constraints ('never be vague', 'every cited
    finding must have a line number and git commit reference') reliably improve
    it. Zack found through evals that over-specifying how Claude should handle
    Next.js dropped accuracy ~30% because the model was already good at Next.js
    and the prescription fought its instincts. The mechanism is that constraints
    bound the solution space without removing the model's freedom to apply its
    own competence; prescriptions substitute the author's fixed procedure for
    the model's adaptive reasoning. The practical rule: express requirements as
    guardrails ('we use these conventions', 'we never do X') and let the LLM
    make the runtime determination, becoming more assertive only on the specific
    outputs you genuinely need in an exact form.
stance: >-
  Giving an agent skill a handful of hard constraints produces better output
  than prescribing the full procedure in detail.
related:
  - INS-260321-2482
  - INS-260605-F828
  - INS-260320-9D89
  - INS-260605-5D5E
  - INS-260605-6722
  - INS-260605-AE67
---
The presenters name over-prescription as a common skill-design failure mode: writing a markdown 'novel' that dictates exactly how to do a task degrades performance, while three sharp constraints ('never be vague', 'every cited finding must have a line number and git commit reference') reliably improve it. Zack found through evals that over-specifying how Claude should handle Next.js dropped accuracy ~30% because the model was already good at Next.js and the prescription fought its instincts. The mechanism is that constraints bound the solution space without removing the model's freedom to apply its own competence; prescriptions substitute the author's fixed procedure for the model's adaptive reasoning. The practical rule: express requirements as guardrails ('we use these conventions', 'we never do X') and let the LLM make the runtime determination, becoming more assertive only on the specific outputs you genuinely need in an exact form.
