---
id: INS-260605-B930
domain: ai-development
topic: system-building
title: Model-native harnesses trade portability for capability unlock
actionability: reference
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - model-native-harness
  - agents-sdk
  - abstraction
  - vendor-portability
  - agent-infrastructure
sources:
  - type: blog
    title: The next evolution of the Agents SDK
    url: 'https://openai.com/index/the-next-evolution-of-the-agents-sdk/'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Use provider-native harnesses for capability, but preserve your own portable
    run contract.
  standard: >-
    OpenAI explicitly contrasts three tradeoffs: model-agnostic frameworks are
    flexible but may underuse frontier model capabilities; provider SDKs can
    align better with the model but may expose less harness visibility; managed
    APIs simplify deployment but constrain runtime and sensitive-data access.


    The practical compromise is two-layer architecture. Keep a provider-neutral
    run contract above the SDK: task manifest, workspace manifest, tool policy,
    audit log, verification gates, and outputs. Under that, allow
    provider-native execution to change. This lets the harness benefit from
    model-specific affordances without letting a vendor API become the only
    durable representation of the work.
stance: >-
  Model-native harnesses can unlock frontier-model performance that generic
  frameworks miss, but teams should isolate the durable harness contract from
  provider-specific execution details.
related:
  - INS-260619-6E08
  - INS-260605-E230
  - INS-260625-93FC
  - INS-260403-80A0
  - INS-260524-2C7C
---
OpenAI explicitly contrasts three tradeoffs: model-agnostic frameworks are flexible but may underuse frontier model capabilities; provider SDKs can align better with the model but may expose less harness visibility; managed APIs simplify deployment but constrain runtime and sensitive-data access.

The practical compromise is two-layer architecture. Keep a provider-neutral run contract above the SDK: task manifest, workspace manifest, tool policy, audit log, verification gates, and outputs. Under that, allow provider-native execution to change. This lets the harness benefit from model-specific affordances without letting a vendor API become the only durable representation of the work.
