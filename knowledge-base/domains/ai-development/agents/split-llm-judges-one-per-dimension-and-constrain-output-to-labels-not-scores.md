---
id: INS-260605-0DB3
domain: ai-development
topic: agents
title: 'Split LLM judges one-per-dimension and constrain output to labels, not scores'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - llm-as-judge
  - rubric-design
  - evals
  - prompt-engineering
  - calibration
sources:
  - type: youtube
    title: >-
      Ship Real Agents: Hands-On Evals for Agentic Applications — Laurie Voss,
      Arize
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=Xfl50508LZM'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    One judge per dimension, output a single binary label after reasoning out
    loud — never a 1-10 score, because nobody (human or LLM) can define the
    difference between a 6 and a 7.
  standard: >-
    Voss names two anti-patterns. The 'god evaluator' tries to grade accuracy,
    tone, completeness, policy, and formatting in one prompt; when it fails you
    can't tell which dimension failed and you can't calibrate it. Fix: one LLM
    judge per dimension. The second anti-pattern is asking for a rating
    (percentage or 1-10) — these don't work because the criteria for each
    gradation are undefined, so the judge just adds noise; use binary (yes/no),
    or ternary (incorrect/partial/correct) only if genuinely needed. The
    highest-leverage and most-skipped rubric ingredient is *labeled examples*:
    LLMs follow a demonstrated pattern far better than a list of instructions,
    and each example should map to a failure mode actually observed in your
    traces. Round out the rubric with an explicit judge role,
    specific-and-observable criteria (not vague words like 'good' or 'helpful'),
    clearly delimited data (XML tags for Claude), chain-of-thought before the
    label, and a constrained one-word output. Treat eval prompts like code:
    version them, because single-word wording changes swing results.
stance: >-
  A single 'god evaluator' grading many dimensions at once is uncalibratable,
  and numeric 1-10 ratings inject noise — binary labels with chain-of-thought
  are the reliable design.
related:
  - INS-260329-5BB0
  - INS-260605-8789
  - INS-260605-EC51
  - INS-260625-3162
  - PRI-260406-FA5B
  - INS-260412-AB42
---
Voss names two anti-patterns. The 'god evaluator' tries to grade accuracy, tone, completeness, policy, and formatting in one prompt; when it fails you can't tell which dimension failed and you can't calibrate it. Fix: one LLM judge per dimension. The second anti-pattern is asking for a rating (percentage or 1-10) — these don't work because the criteria for each gradation are undefined, so the judge just adds noise; use binary (yes/no), or ternary (incorrect/partial/correct) only if genuinely needed. The highest-leverage and most-skipped rubric ingredient is *labeled examples*: LLMs follow a demonstrated pattern far better than a list of instructions, and each example should map to a failure mode actually observed in your traces. Round out the rubric with an explicit judge role, specific-and-observable criteria (not vague words like 'good' or 'helpful'), clearly delimited data (XML tags for Claude), chain-of-thought before the label, and a constrained one-word output. Treat eval prompts like code: version them, because single-word wording changes swing results.
