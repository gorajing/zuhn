---
id: INS-260628-33E6
domain: ai-development
topic: agent-evals
title: >-
  Keep standing aspirational evals so the next model release becomes a same-week
  launch
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - evals
  - model-migration
  - product-strategy
  - frontier-models
  - aspirational-evals
sources:
  - type: youtube
    title: "Five hard earned lessons about Evals —\_Ankur Goyal, Braintrust"
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=a4BV0gGmXgA'
date_extracted: '2026-06-28'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Build ambitious evals for features that don't work on today's models and
    keep model-swapping a few keystrokes away, so each new release is an
    immediate go/no-go on shipping.
  standard: >-
    A new model can change everything — making a feature that was unviable
    suddenly viable. Goyal's example: a feature scoring ~10% (unusable) climbed
    as GPT-4o → GPT-4.1 → Sonnet 3.7 → Sonnet 4 improved, and when Claude 4
    Sonnet crossed the threshold, Braintrust shipped the first version two weeks
    later. They could move that fast only because a standing eval had been run
    every few months against each release, so they immediately knew the
    threshold was crossed.


    The prescription has two parts. First, deliberately author evals that are
    too ambitious for current models — aspirational targets you expect to fail
    today — so that when capability arrives you're ready to capitalize rather
    than starting research. Second, make model substitution nearly free: a
    provider-agnostic proxy (Braintrust's or any equivalent) lets you try a new
    release across providers with a few keystrokes and no code changes — they
    can test a freshly launched Gemini right after a talk. The deeper
    organizational point: engineer not just the eval but the product, team, and
    mindset to rip out and replace architecture around a new model's strengths,
    treating each release as an opportunity gate you're pre-positioned to walk
    through.
stance: >-
  Teams should maintain provider-agnostic evals for capabilities no current
  model can achieve, so a new model's release turns from a research project into
  a product launch shippable within days.
related:
  - INS-260410-09B4
  - INS-260626-F335
  - INS-260328-91A1
  - INS-260605-4D1D
  - PRI-260328-0BE1
  - INS-260328-0B99
  - INS-260628-3E32
---
A new model can change everything — making a feature that was unviable suddenly viable. Goyal's example: a feature scoring ~10% (unusable) climbed as GPT-4o → GPT-4.1 → Sonnet 3.7 → Sonnet 4 improved, and when Claude 4 Sonnet crossed the threshold, Braintrust shipped the first version two weeks later. They could move that fast only because a standing eval had been run every few months against each release, so they immediately knew the threshold was crossed.

The prescription has two parts. First, deliberately author evals that are too ambitious for current models — aspirational targets you expect to fail today — so that when capability arrives you're ready to capitalize rather than starting research. Second, make model substitution nearly free: a provider-agnostic proxy (Braintrust's or any equivalent) lets you try a new release across providers with a few keystrokes and no code changes — they can test a freshly launched Gemini right after a talk. The deeper organizational point: engineer not just the eval but the product, team, and mindset to rip out and replace architecture around a new model's strengths, treating each release as an opportunity gate you're pre-positioned to walk through.
