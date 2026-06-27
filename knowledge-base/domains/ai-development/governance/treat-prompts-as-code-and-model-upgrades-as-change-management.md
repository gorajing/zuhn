---
id: INS-260625-B4AC
domain: ai-development
topic: governance
title: Treat prompts as code and model upgrades as change management
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - governance
  - prompt-engineering
  - change-management
  - model-evaluation
  - production-ai
sources:
  - type: youtube
    title: >-
      The Production AI Playbook: Deploying Agents at Enterprise Scale —
      Sandipan Bhaumik, Databricks
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=ObTPqBGsEbA'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Version prompts with disciplined commit messages that record what failure
    each change addresses, and gate model upgrades behind re-running your own
    eval dataset rather than trusting public benchmarks.
  standard: >-
    Bhaumik's governance pillar (distinct from data governance, which he treats
    as a given) covers the AI-specific operational risks: audit trails of every
    action and request, pre-validation of PII (their testing layer caught 47 PII
    breaches), and two change-management disciplines that teams routinely
    under-invest in. The first is prompt versioning treated as change
    management: a prompt change cannot be a throwaway git commit. Because
    prompts are behavior, each version needs documented rationale — what failure
    triggered the change, what it is meant to correct — so that when you later
    inspect the version history you can trace *why* each change was made. He
    frames this as 'treating prompt as code.'


    The second is model change management. When providers upgrade models, you
    cannot assume the new version is better for your use case, and you cannot
    rely on public benchmark leaderboards — those say little about your
    enterprise data and context. The discipline is to run candidate models
    against your own evaluation dataset before adopting them, and, from a risk
    standpoint, to retain the flexibility to switch models rather than
    hard-coupling to a single provider. This closes the loop with the model-last
    principle: the eval dataset that let you choose the model initially is the
    same instrument that governs every subsequent upgrade.


    The claim is directional and immediately actionable: it asserts that
    informal prompt/model handling is a production liability and prescribes
    specific governance (documented prompt versioning, eval-gated model
    upgrades, provider optionality). It connects to a broader operational
    artifact Bhaumik recommends — a production incident playbook (detect via
    eval dashboard, diagnose via tracing, contain via prompt rollback /
    fault-tolerance patterns, fix and add the case to the living eval suite,
    integrated with the org's ITSM alerting) — making governance the connective
    tissue that turns the other four pillars into a maintainable production
    system.
stance: >-
  Prompt edits and provider model upgrades must pass through formal, documented
  change management with re-evaluation, not ad-hoc git commits or blind trust in
  vendor benchmarks.
related:
  - INS-260605-DCE5
  - INS-260605-A3F4
  - INS-260626-1673
  - INS-260626-60C2
  - INS-260530-C385
  - INS-260626-67E8
  - INS-260625-F62D
  - INS-260626-1D80
---
Bhaumik's governance pillar (distinct from data governance, which he treats as a given) covers the AI-specific operational risks: audit trails of every action and request, pre-validation of PII (their testing layer caught 47 PII breaches), and two change-management disciplines that teams routinely under-invest in. The first is prompt versioning treated as change management: a prompt change cannot be a throwaway git commit. Because prompts are behavior, each version needs documented rationale — what failure triggered the change, what it is meant to correct — so that when you later inspect the version history you can trace *why* each change was made. He frames this as 'treating prompt as code.'

The second is model change management. When providers upgrade models, you cannot assume the new version is better for your use case, and you cannot rely on public benchmark leaderboards — those say little about your enterprise data and context. The discipline is to run candidate models against your own evaluation dataset before adopting them, and, from a risk standpoint, to retain the flexibility to switch models rather than hard-coupling to a single provider. This closes the loop with the model-last principle: the eval dataset that let you choose the model initially is the same instrument that governs every subsequent upgrade.

The claim is directional and immediately actionable: it asserts that informal prompt/model handling is a production liability and prescribes specific governance (documented prompt versioning, eval-gated model upgrades, provider optionality). It connects to a broader operational artifact Bhaumik recommends — a production incident playbook (detect via eval dashboard, diagnose via tracing, contain via prompt rollback / fault-tolerance patterns, fix and add the case to the living eval suite, integrated with the org's ITSM alerting) — making governance the connective tissue that turns the other four pillars into a maintainable production system.
