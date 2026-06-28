---
id: INS-260625-3162
domain: ai-development
topic: agent-evals
title: 'LLM-judge reliability should be measured by defect recall, not agreement alone'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - llm-as-judge
  - agent-evals
  - production-verification
  - false-negatives
  - quality-gates
sources:
  - type: blog
    title: LLM-as-Judge Blind Spots in Production Multi-Turn Transaction Agents
    url: 'https://arxiv.org/html/2606.10315v1'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    For production agents, the key judge metric is missed defects, not
    judge-human agreement.
  standard: >-
    The transaction-agent study shows a deployed judge catching only 2 of 9
    human-confirmed systematic patterns in one batch and flagging zero
    operational failures in another batch where human review found 23 distinct
    defects. The point is not merely that the judge disagreed with humans; it
    failed to surface defects that should have affected release confidence.


    AgentRun verification should therefore report judge sensitivity against a
    human or deterministic gold set when judges are used as gates. Agreement,
    correlation, or rubric pass rates are insufficient unless paired with
    false-negative audits that answer the shipping question: what real failure
    classes can this gate miss?
stance: >-
  Production judge evals should report how many real defects the judge catches,
  because human-agreement metrics can look acceptable while false negatives
  dominate operational risk.
related:
  - INS-260519-224B
  - INS-260605-D3C7
  - INS-260625-722D
  - INS-260628-337C
  - INS-260605-EC51
---
The transaction-agent study shows a deployed judge catching only 2 of 9 human-confirmed systematic patterns in one batch and flagging zero operational failures in another batch where human review found 23 distinct defects. The point is not merely that the judge disagreed with humans; it failed to surface defects that should have affected release confidence.

AgentRun verification should therefore report judge sensitivity against a human or deterministic gold set when judges are used as gates. Agreement, correlation, or rubric pass rates are insufficient unless paired with false-negative audits that answer the shipping question: what real failure classes can this gate miss?
