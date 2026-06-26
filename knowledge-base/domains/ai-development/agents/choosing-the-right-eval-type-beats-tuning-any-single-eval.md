---
id: INS-260605-72C4
domain: ai-development
topic: agents
title: Choosing the right eval type beats tuning any single eval
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - evals
  - llm-as-judge
  - faithfulness
  - agent-evaluation
  - rag
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
    A built-in correctness eval scored 0/13 on agent outputs while faithfulness
    scored 13/13 on the same outputs — the eval type, not the tuning, was the
    difference.
  standard: >-
    Voss ran Phoenix's built-in correctness evaluator against a financial
    agent's 13 reports and every single one scored zero. The cause wasn't a bad
    agent — it was that the judge (Sonnet, trained in 2025) was grading 2026
    forward-looking figures it had no knowledge of, so it marked everything
    wrong. Swapping to a faithfulness eval (does the report stick to the
    research context the agent itself gathered, and only that context?) yielded
    13/13. The lesson: a judge can only adjudicate what it can actually verify.
    Use correctness/factuality evals when the answer is checkable against the
    model's world knowledge; use faithfulness/groundedness evals when outputs
    depend on retrieved or future-looking context the judge can't independently
    confirm. 'Choosing the right eval can matter more than tuning your eval' —
    some built-in evals will be useless for your case and some will be exactly
    right, and you only learn which by reading the explanations, not the scores.
stance: >-
  For forward-looking or recent-fact agent outputs, a faithfulness eval is the
  correct instrument and a correctness eval is actively misleading, because the
  judge LLM's training cutoff makes it a bad arbiter of facts it never saw.
related:
  - INS-260410-BFCF
  - INS-260410-AA6E
  - INS-260605-C536
  - INS-260605-365A
  - INS-260625-7165
  - INS-260605-A03E
  - INS-260605-4D1D
  - PRI-260411-14DC
  - INS-260605-FCDA
  - INS-260625-BB42
---
Voss ran Phoenix's built-in correctness evaluator against a financial agent's 13 reports and every single one scored zero. The cause wasn't a bad agent — it was that the judge (Sonnet, trained in 2025) was grading 2026 forward-looking figures it had no knowledge of, so it marked everything wrong. Swapping to a faithfulness eval (does the report stick to the research context the agent itself gathered, and only that context?) yielded 13/13. The lesson: a judge can only adjudicate what it can actually verify. Use correctness/factuality evals when the answer is checkable against the model's world knowledge; use faithfulness/groundedness evals when outputs depend on retrieved or future-looking context the judge can't independently confirm. 'Choosing the right eval can matter more than tuning your eval' — some built-in evals will be useless for your case and some will be exactly right, and you only learn which by reading the explanations, not the scores.
