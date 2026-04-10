---
id: INS-260410-B3C4
domain: ai-development
topic: infrastructure
title: Cross-platform LLM serving makes bug symptoms look like random noise
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - multi-platform
  - incident-response
  - observability
  - tpu
  - gpu
sources:
  - type: blog
    title: A postmortem of three recent issues
    url: 'https://www.anthropic.com/engineering/a-postmortem-of-three-recent-issues'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    When you serve one model across AWS Trainium, NVIDIA GPUs, and Google TPUs,
    each bug surfaces differently on each platform and masquerades as random
    variation rather than a coherent issue.
  standard: >-
    Anthropic's three bugs had very different platform footprints: the routing
    bug affected all platforms at different rates, the output corruption hit
    only first-party TPU servers, and the XLA:TPU miscompilation affected
    TPU-served requests but not Bedrock or Vertex. Users reported degradation,
    but the pattern looked like random noise because the correlation between
    'which bug am I seeing' and 'which platform served me' wasn't visible
    externally.


    This is the observability tax of hardware heterogeneity. The benefit is
    capacity and geographic reach; the cost is that single-cause incidents
    present as multi-cause noise, and operators can't rely on 'all users
    affected' or 'no users affected' as a signal. You need per-platform,
    per-model-version quality telemetry as a first-class signal, not an
    afterthought.


    The operational lesson: if you serve across multiple hardware stacks, invest
    in evaluations that run continuously on each stack in production and report
    deltas between them. A 2% quality gap between TPU and GPU serving is a
    five-alarm fire, but you only see it if you're looking.
stance: >-
  Serving the same model across multiple hardware platforms creates confusing,
  contradictory incident reports that obscure single root causes.
related:
  - INS-260325-D25C
  - INS-260329-5EE7
  - INS-260329-D2CA
  - INS-260410-09B4
  - INS-260410-E73E
  - PRI-260323-1CF9
  - PRI-260403-5FC4
  - INS-260329-F84E
---
Anthropic's three bugs had very different platform footprints: the routing bug affected all platforms at different rates, the output corruption hit only first-party TPU servers, and the XLA:TPU miscompilation affected TPU-served requests but not Bedrock or Vertex. Users reported degradation, but the pattern looked like random noise because the correlation between 'which bug am I seeing' and 'which platform served me' wasn't visible externally.

This is the observability tax of hardware heterogeneity. The benefit is capacity and geographic reach; the cost is that single-cause incidents present as multi-cause noise, and operators can't rely on 'all users affected' or 'no users affected' as a signal. You need per-platform, per-model-version quality telemetry as a first-class signal, not an afterthought.

The operational lesson: if you serve across multiple hardware stacks, invest in evaluations that run continuously on each stack in production and report deltas between them. A 2% quality gap between TPU and GPU serving is a five-alarm fire, but you only see it if you're looking.
