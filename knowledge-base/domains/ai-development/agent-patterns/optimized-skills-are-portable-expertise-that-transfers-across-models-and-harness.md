---
id: INS-260625-8C41
domain: ai-development
topic: agent-patterns
title: >-
  Optimized skills are portable expertise that transfers across models and
  harnesses
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - transferability
  - agent-skills
  - portability
  - model-independence
  - strategy
sources:
  - type: youtube
    title: Microsoft Found Gradient Descent for AI Agent Skills
    author: AI Papers Academy
    url: 'https://www.youtube.com/watch?v=iSPwNmsa7kA'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Skills optimized for one model or harness (e.g. Codex) still beat the
    no-skill baseline when transferred to another (e.g. Claude Code), though
    direct optimization remains strongest.
  standard: >-
    SkillOpt tests three kinds of transfer. A skill optimized for GPT-5.4 still
    outperforms the no-skill baseline on its mini and nano variants, though a
    portion of the gain is lost. Skills optimized inside Codex transfer to
    Claude Code and vice versa, again beating baseline in most cases. And skills
    optimized for one benchmark carry consistent (if smaller) gains to related
    benchmarks. Direct optimization for the exact model and harness always wins,
    but a large share of the improvement survives transfer.


    Strategically, this means the optimized skill is an asset with its own
    half-life, partly independent of the model it was trained against.
    Procedural expertise accumulated as skills does not have to be thrown away
    on every model upgrade or harness switch — it can be ported and then
    re-optimized cheaply from a strong starting point. The caveat is that
    transfer is real but not consistent: some cases preserve most of the gain,
    others much less, so portability should be measured per case, not assumed.
stance: >-
  A well-optimized agent skill captures portable knowledge that retains much of
  its value when moved to a different model or agent framework, decoupling
  accumulated expertise from any single foundation model.
related:
  - INS-260404-8D91
  - INS-260514-9281
  - INS-260605-B1FC
  - INS-260605-564D
  - INS-260625-B5A8
  - INS-260625-D790
  - INS-260404-CE26
  - INS-260626-4E80
  - INS-260625-9096
  - INS-260626-E990
---
SkillOpt tests three kinds of transfer. A skill optimized for GPT-5.4 still outperforms the no-skill baseline on its mini and nano variants, though a portion of the gain is lost. Skills optimized inside Codex transfer to Claude Code and vice versa, again beating baseline in most cases. And skills optimized for one benchmark carry consistent (if smaller) gains to related benchmarks. Direct optimization for the exact model and harness always wins, but a large share of the improvement survives transfer.

Strategically, this means the optimized skill is an asset with its own half-life, partly independent of the model it was trained against. Procedural expertise accumulated as skills does not have to be thrown away on every model upgrade or harness switch — it can be ported and then re-optimized cheaply from a strong starting point. The caveat is that transfer is real but not consistent: some cases preserve most of the gain, others much less, so portability should be measured per case, not assumed.
