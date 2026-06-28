---
id: INS-260628-1175
domain: ai-development
topic: agent-evals
title: 'Scale judge-time compute to beat frontier models as judges, cheaply'
actionability: reference
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - inference-time-scaling
  - agents-as-judges
  - scalable-oversight
  - reward-modeling
  - rl-tuning
sources:
  - type: youtube
    title: 'Fuzzing in the GenAI Era — Leonard Tang, Haize Labs'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=OMGPvW8TBHc'
date_extracted: '2026-06-28'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    A GPT-4o-mini self-verified debate ensemble beat o1/o3-mini on expert QA
    grading at under a third the cost and latency.
  standard: >-
    The same inference-time-compute scaling that boosts reasoning models can be
    redirected to the judging stage — 'scaling judge-time compute.' There are
    two poles. The structured pole uses off-the-shelf models with strong
    inductive priors, wired into agent architectures borrowed from the
    scalable-oversight subfield of AI safety: weaker models debating each other
    about a stronger model's output, self-verification (an LLM critiquing its
    own reasoning), and ensembling. Haize's 'verdict' library, running a
    GPT-4o-mini backbone in a self-verified debate ensemble, reportedly beat o1,
    o3-mini, and Sonnet on expert-domain QA verification at less than a third of
    the cost and latency.


    The other pole trains judges from scratch with RL (e.g., GRPO / DeepSeek's
    SPCT, where the model proposes instance-specific rubric criteria then
    critiques against them). A 1.7B RL-tuned reward model (J1-micro) reached
    ~80.7% on RewardBench, matching Claude 3 Opus and GPT-4o-mini. The takeaway:
    careful architecture and targeted compute on small models can outperform a
    single large judge — buy accuracy with structure and judge-time compute, not
    model size. Specific benchmark numbers are time-sensitive, but the
    architectural lesson is durable.
stance: >-
  Stacking a cheap model into structured agent-as-judge architectures beats
  single frontier reasoning models on subjective grading at a fraction of the
  cost and latency.
related:
  - INS-260603-11DB
  - INS-260605-8789
  - INS-260627-CFAC
  - INS-260625-FC64
  - PRI-260321-14D8
---
The same inference-time-compute scaling that boosts reasoning models can be redirected to the judging stage — 'scaling judge-time compute.' There are two poles. The structured pole uses off-the-shelf models with strong inductive priors, wired into agent architectures borrowed from the scalable-oversight subfield of AI safety: weaker models debating each other about a stronger model's output, self-verification (an LLM critiquing its own reasoning), and ensembling. Haize's 'verdict' library, running a GPT-4o-mini backbone in a self-verified debate ensemble, reportedly beat o1, o3-mini, and Sonnet on expert-domain QA verification at less than a third of the cost and latency.

The other pole trains judges from scratch with RL (e.g., GRPO / DeepSeek's SPCT, where the model proposes instance-specific rubric criteria then critiques against them). A 1.7B RL-tuned reward model (J1-micro) reached ~80.7% on RewardBench, matching Claude 3 Opus and GPT-4o-mini. The takeaway: careful architecture and targeted compute on small models can outperform a single large judge — buy accuracy with structure and judge-time compute, not model size. Specific benchmark numbers are time-sensitive, but the architectural lesson is durable.
