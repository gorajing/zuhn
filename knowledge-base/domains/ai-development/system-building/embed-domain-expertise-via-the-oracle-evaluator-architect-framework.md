---
id: INS-260605-BFBE
domain: ai-development
topic: system-building
title: Embed domain expertise via the oracle-evaluator-architect framework
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - vertical-ai
  - domain-expertise
  - evals
  - ai-quality
  - org-design
sources:
  - type: youtube
    title: 'How to Leverage Domain Expertise — Chris Lovejoy, Notius Labs'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=kfSDc2eVLo4'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    An oracle directly tweaks the product, an evaluator defines and measures
    quality, an architect builds a self-improving system.
  standard: >-
    Building an AI product reduces to two loops: assess how it's doing, then
    improve it. In the oracle model, the domain expert does both — reviewing
    outputs and traces, then tweaking prompts, docs, or tools directly. In the
    evaluator model, the expert defines objective metrics (user north-stars,
    human review panels, LLM-as-judge) and feeds findings to engineers. In the
    architect model, the expert designs a system that improves itself with
    minimal human-in-the-loop. The selection rule is a decision tree: if you
    can't measure quality objectively (taste-driven), use an oracle and ask
    whether one person suffices or you need a decentralized set. If you can
    measure it, ask whether manual engineering iteration is fast enough — if
    yes, an evaluator is enough; if not, you need an architect. The roles are a
    progression, not a menu — most startups should start with an oracle.
stance: >-
  Every AI product needs a domain expert occupying one of three roles — oracle,
  evaluator, or architect — chosen by whether quality is measurable and how fast
  manual iteration can keep up.
related:
  - PRI-260411-14DC
  - INS-260530-C385
  - INS-260326-163A
  - INS-260605-6444
  - PRI-260406-3EF8
---
Building an AI product reduces to two loops: assess how it's doing, then improve it. In the oracle model, the domain expert does both — reviewing outputs and traces, then tweaking prompts, docs, or tools directly. In the evaluator model, the expert defines objective metrics (user north-stars, human review panels, LLM-as-judge) and feeds findings to engineers. In the architect model, the expert designs a system that improves itself with minimal human-in-the-loop. The selection rule is a decision tree: if you can't measure quality objectively (taste-driven), use an oracle and ask whether one person suffices or you need a decentralized set. If you can measure it, ask whether manual engineering iteration is fast enough — if yes, an evaluator is enough; if not, you need an architect. The roles are a progression, not a menu — most startups should start with an oracle.
