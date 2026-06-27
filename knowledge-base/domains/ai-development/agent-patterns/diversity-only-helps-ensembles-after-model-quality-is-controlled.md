---
id: INS-260627-9121
domain: ai-development
topic: agent-patterns
title: Diversity only helps ensembles after model quality is controlled
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - model-ensembles
  - mixture-of-agents
  - routing
  - diversity
  - quality-control
sources:
  - type: blog
    title: >-
      When Does Combining Language Models Help? A Co-Failure Ceiling on Routing,
      Voting, and Mixture-of-Agents Across 67 Frontier Models
    url: 'https://arxiv.org/html/2606.27288'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Do not add weaker models for diversity unless their quality is close enough
    that their different failures can actually help.
  standard: >-
    Model diversity is not a free good. If one strong model is mixed with weaker
    models, the ensemble can be worse because it imports errors faster than it
    imports complementary strengths. The paper's supported regime is narrower:
    at matched quality, lower inter-model error correlation can help. For system
    builders, the ensemble recipe is first quality-band filtering, then
    failure-mode diversity, then cost/latency accounting.
  deep: >-
    This is especially relevant to MoA-style agent designs. More agents or more
    models should not be treated as the primitive. The primitive is a set of
    comparably capable workers with demonstrably different failure modes on the
    production eval. Without that evidence, extra agents are likely to add
    deliberation theater, token cost, and correlated or lower-quality votes.
stance: >-
  The paper finds that naive heterogeneous voting across unequal-quality models
  can be negative because weaker diverse members outvote the strong model. In
  the matched-quality regime, lower-correlation heterogeneous ensembles beat
  high-correlation Self-MoA in the tested setting, but the magnitude is modest
  and sensitive.
related:
  - INS-260402-1F41
  - INS-260410-0CFE
  - INS-260626-46B9
  - INS-260410-7292
  - INS-260403-BB23
  - INS-260412-3C64
---
Model diversity is not a free good. If one strong model is mixed with weaker models, the ensemble can be worse because it imports errors faster than it imports complementary strengths. The paper's supported regime is narrower: at matched quality, lower inter-model error correlation can help. For system builders, the ensemble recipe is first quality-band filtering, then failure-mode diversity, then cost/latency accounting.
