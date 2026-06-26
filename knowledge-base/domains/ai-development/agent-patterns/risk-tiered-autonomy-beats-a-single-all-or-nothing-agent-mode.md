---
id: INS-260626-778F
domain: ai-development
topic: agent-patterns
title: Risk-tiered autonomy beats a single all-or-nothing agent mode
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - agent-patterns
  - human-in-the-loop
  - risk-management
  - autonomy
sources:
  - type: blog
    title: >-
      NOVA: A Verification-Aware Agent Harness for Architecture Evolution in
      Industrial Recommender Systems
    url: 'https://arxiv.org/html/2606.27243'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    NOVA's L1-L4 control separates routine covered changes from high-risk or
    underspecified changes that need Copilot-style oversight.
  standard: >-
    NOVA classifies tasks by complexity level and execution mode. Covered
    low-risk changes can run in AutoRun, while uncovered or high-risk decisions
    are routed through Copilot for human confirmation. The paper stresses that
    mode depends on skill-specification coverage, not merely on task level.


    For agent engineering, this is a practical alternative to either fully
    manual review or full autonomy. The harness should know which change
    families are covered by strong local specifications and which ones require
    human judgment because the verification surface is incomplete.
stance: >-
  Agent workflows should route tasks through different autonomy levels based on
  modification scope, risk, and available skill coverage.
related:
  - INS-260423-31A1
  - INS-260327-439A
  - INS-260403-5554
  - INS-260325-922D
  - INS-260403-D36D
---
NOVA classifies tasks by complexity level and execution mode. Covered low-risk changes can run in AutoRun, while uncovered or high-risk decisions are routed through Copilot for human confirmation. The paper stresses that mode depends on skill-specification coverage, not merely on task level.

For agent engineering, this is a practical alternative to either fully manual review or full autonomy. The harness should know which change families are covered by strong local specifications and which ones require human judgment because the verification surface is incomplete.
