---
id: INS-260627-8F2A
domain: ai-development
topic: productivity
title: 'Measure change in throughput, never absolute PR counts'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - productivity-measurement
  - metrics
  - pr-throughput
  - measurement-discipline
  - confounders
sources:
  - type: youtube
    title: >-
      What Data from 20m Pull Requests Reveal About AI Transformation — Nick
      Arcolano, Jellyfish
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=WqZq8L-v9pA'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Absolute PRs-per-engineer is confounded by architecture (distributed
    codebases need more PRs for the same work), so track the change in
    throughput within a team rather than comparing absolute levels across teams.
  standard: >-
    A recurring methodological point in the talk: the absolute level of PR
    throughput is not a reliable productivity metric because it's driven by
    confounders — how a team scopes work and, critically, its architecture.
    Highly distributed architectures mechanically require more PRs to accomplish
    the same work, due to migrations and cross-repo coordination overhead, so a
    high absolute PR count can signal architectural friction rather than
    productivity.


    The disciplined alternative is to measure the change in PR throughput over
    time within a single team, which holds the confounders roughly constant and
    isolates the effect of AI adoption. The same logic motivates
    scale-independent metrics like active-repos-per-engineer, which strip out
    company size.


    This generalizes beyond PRs: when evaluating any tooling intervention,
    prefer within-unit deltas over cross-unit absolute comparisons, because
    cross-sectional comparisons silently bake in structural differences
    (architecture, team scoping, domain) that have nothing to do with the
    intervention you're trying to assess.
stance: >-
  Absolute PR counts are a misleading productivity metric because they vary with
  architecture; only the change in throughput, holding architecture constant,
  measures AI's effect.
related:
  - INS-260320-2DDE
  - INS-260404-177F
  - INS-260514-7628
  - INS-260514-C1B3
  - INS-260525-77FE
  - INS-260625-89B3
  - INS-260625-E696
  - INS-260626-5053
  - INS-260626-BDAB
  - INS-260627-6F60
---
A recurring methodological point in the talk: the absolute level of PR throughput is not a reliable productivity metric because it's driven by confounders — how a team scopes work and, critically, its architecture. Highly distributed architectures mechanically require more PRs to accomplish the same work, due to migrations and cross-repo coordination overhead, so a high absolute PR count can signal architectural friction rather than productivity.

The disciplined alternative is to measure the change in PR throughput over time within a single team, which holds the confounders roughly constant and isolates the effect of AI adoption. The same logic motivates scale-independent metrics like active-repos-per-engineer, which strip out company size.

This generalizes beyond PRs: when evaluating any tooling intervention, prefer within-unit deltas over cross-unit absolute comparisons, because cross-sectional comparisons silently bake in structural differences (architecture, team scoping, domain) that have nothing to do with the intervention you're trying to assess.
