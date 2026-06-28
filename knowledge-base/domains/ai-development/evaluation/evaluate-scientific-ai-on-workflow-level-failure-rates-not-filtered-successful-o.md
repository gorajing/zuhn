---
id: INS-260628-9010
domain: ai-development
topic: evaluation
title: >-
  Evaluate scientific AI on workflow-level failure rates, not filtered
  successful outputs
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - evaluation
  - ai-for-science
  - workflow-reliability
  - benchmarks
sources:
  - type: blog
    title: >-
      AdsMind: A Physics-Grounded Multi-Agent System for Self-Correcting
      Discovery of Adsorption Configurations on Heterogeneous Catalyst Surfaces
    url: 'https://arxiv.org/html/2606.19152'
date_extracted: '2026-06-28'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    AdsMind reports success while counting dissociation, rearrangement, and
    missing molecular products as failures instead of filtering them away.
  standard: >-
    The paper treats adsorption-search reliability as a workflow property: if
    relaxation produces dissociation, rearrangement, or no valid molecular
    product, the run counts as unsuccessful. That choice makes the reported 100%
    AA20 and 98.8% OCD-GMAE62 success rates more meaningful than a metric
    computed only over surviving clean cases.


    For agent and eval design, the transferable rule is to keep failure modes
    inside the benchmark boundary. Filtering away malformed attempts creates
    inflated capability claims and hides the exact edge cases where automation
    most needs guardrails.
stance: >-
  AI-for-science evaluations should count natural chemical failures and invalid
  outcomes in the denominator because those failures determine real workflow
  reliability.
related:
  - INS-260330-033A
  - INS-260404-ABCB
  - INS-260410-C5A4
  - INS-260412-8FB0
  - INS-260412-B854
  - INS-260412-BBF8
  - INS-260514-CA00
  - INS-260524-0DC3
  - INS-260325-5023
  - INS-260330-6AB7
---
The paper treats adsorption-search reliability as a workflow property: if relaxation produces dissociation, rearrangement, or no valid molecular product, the run counts as unsuccessful. That choice makes the reported 100% AA20 and 98.8% OCD-GMAE62 success rates more meaningful than a metric computed only over surviving clean cases.

For agent and eval design, the transferable rule is to keep failure modes inside the benchmark boundary. Filtering away malformed attempts creates inflated capability claims and hides the exact edge cases where automation most needs guardrails.
