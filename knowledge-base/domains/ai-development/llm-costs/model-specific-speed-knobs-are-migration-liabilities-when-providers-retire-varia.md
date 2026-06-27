---
id: INS-260626-01AD
domain: ai-development
topic: llm-costs
title: >-
  Model-specific speed knobs are migration liabilities when providers retire
  variants
actionability: immediate
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - anthropic
  - fast-mode
  - model-migration
  - latency
  - provider-constraints
sources:
  - type: paste
    title: Anthropic API release notes relevant to weekly platform changelog
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Do not hard-code provider speed knobs without a capability check and
    migration path.
  standard: >-
    The removal date for Opus 4.7 fast mode turns a latency optimization into a
    future hard error. Agent routing code should store the provider, model id,
    speed or effort setting, and planned fallback. For Zuhn/AgentRun, the
    important adaptation is to record speed-mode usage in traces and avoid
    treating 'fast' as a stable abstract option across model versions.
  deep: >-
    This also weakens benchmark comparability: a run that used `speed: fast` on
    one Opus version may not map to another Opus version even if the marketing
    family name is similar. Reproducible agent evaluations need a capability
    snapshot, not just a model display name.
subtopic: rate-limits
stance: >-
  Anthropic's deprecation of Claude Opus 4.7 fast mode shows that speed and
  effort parameters should be modeled as provider-version capabilities, because
  the same model family can reject yesterday's valid latency setting.
related:
  - INS-260403-B617
  - INS-260626-3F6D
  - INS-260323-D2AA
  - INS-260625-E810
  - INS-260329-3AE5
---
The removal date for Opus 4.7 fast mode turns a latency optimization into a future hard error. Agent routing code should store the provider, model id, speed or effort setting, and planned fallback. For Zuhn/AgentRun, the important adaptation is to record speed-mode usage in traces and avoid treating 'fast' as a stable abstract option across model versions.
