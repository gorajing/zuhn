---
id: INS-260628-EBB4
domain: ai-development
topic: agent-patterns
title: Simple scaffolds beat complex agent frameworks
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agent-design
  - simplicity
  - scaffolding
  - swe-bench
sources:
  - type: youtube
    title: Designing AI-Intensive Applications - swyx
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=IHkyFhU6JEY'
date_extracted: '2026-06-28'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    The consistent lesson from frontier labs is to stop over-complicating agents
    — the SOTA results come from very simple scaffolds.
  standard: >-
    swyx names this as 'the consistent lesson that we hear' across the field: do
    not over-complicate things. He cites Anthropic on the Latent Space podcast,
    Eric Suns beating SWE-bench with 'a very simple scaffold,' Greg Brockman's
    deep research work, and AMP code as convergent evidence. The recurring
    pattern is that adding orchestration layers, elaborate control flow, and
    heavy frameworks tends to underperform a lean loop around a capable model.


    The practical implication is to treat scaffold complexity as a cost to be
    minimized rather than a feature to accumulate. When an agent underperforms,
    the reflex to add more planning steps, more tools, more guardrails often
    makes it worse and harder to debug; stripping the scaffold back to the
    simplest thing that could work is usually the higher-leverage move. As
    models get more capable, the optimal scaffold gets thinner over time, so
    complexity added today is also depreciating.


    This is a falsifiable bet: it predicts that across competitive benchmarks,
    winning entries trend toward minimal harnesses rather than maximal ones. It
    contradicts the framework-maximalist view that agent quality scales with
    orchestration sophistication.
stance: >-
  The teams winning on hard agent benchmarks do so with deliberately minimal
  scaffolds, not elaborate orchestration frameworks.
related:
  - INS-260404-83C6
  - INS-260626-E494
  - INS-260627-0D20
  - INS-260625-407C
  - INS-260625-9BEB
  - INS-260405-82F3
---
swyx names this as 'the consistent lesson that we hear' across the field: do not over-complicate things. He cites Anthropic on the Latent Space podcast, Eric Suns beating SWE-bench with 'a very simple scaffold,' Greg Brockman's deep research work, and AMP code as convergent evidence. The recurring pattern is that adding orchestration layers, elaborate control flow, and heavy frameworks tends to underperform a lean loop around a capable model.

The practical implication is to treat scaffold complexity as a cost to be minimized rather than a feature to accumulate. When an agent underperforms, the reflex to add more planning steps, more tools, more guardrails often makes it worse and harder to debug; stripping the scaffold back to the simplest thing that could work is usually the higher-leverage move. As models get more capable, the optimal scaffold gets thinner over time, so complexity added today is also depreciating.

This is a falsifiable bet: it predicts that across competitive benchmarks, winning entries trend toward minimal harnesses rather than maximal ones. It contradicts the framework-maximalist view that agent quality scales with orchestration sophistication.
