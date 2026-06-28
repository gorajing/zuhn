---
id: INS-260627-6F60
domain: ai-development
topic: productivity
title: AI token spend correlates only weakly with engineering productivity
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - ai-coding
  - productivity
  - measurement
  - developer-tools
sources:
  - type: youtube
    title: >-
      Can you prove AI ROI in Software Eng? (Stanford 120k Devs Study) – Yegor
      Denisov-Blanch, Stanford
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=JvosMkuNxF8'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Token usage per engineer correlates only ~0.20 with productivity gains, with
    a 'death valley' where the heaviest users (≈10M tokens/month) perform worse
    than moderate users.
  standard: >-
    In the Stanford data, plotting productivity lift against token usage per
    engineer per month (log scale) yields only a loose ~0.20 linear correlation,
    and a counterintuitive 'death valley' appears around the 10-million-token
    mark where the heaviest-consuming teams actually underperform teams using
    somewhat fewer tokens. The implication is that AI usage *quality* matters
    more than AI usage *volume* — pouring more tokens at a problem is not the
    lever.


    For leaders, this falsifies the intuitive procurement instinct of measuring
    AI success by consumption (seats, spend, tokens). High token burn can signal
    thrashing — re-prompting, rejecting, and rewriting outputs — rather than
    leverage. The actionable move is to instrument *how* AI is used (patterns,
    where in the workflow, acceptance vs rework) rather than treating raw usage
    as a proxy for value.
stance: >-
  How engineers use AI drives productivity gains far more than how many tokens
  they consume.
related:
  - INS-260330-7241
  - INS-260514-CEEA
  - INS-260627-E4F9
  - INS-260627-B34D
  - INS-260603-50B1
  - INS-260627-8F2A
---
In the Stanford data, plotting productivity lift against token usage per engineer per month (log scale) yields only a loose ~0.20 linear correlation, and a counterintuitive 'death valley' appears around the 10-million-token mark where the heaviest-consuming teams actually underperform teams using somewhat fewer tokens. The implication is that AI usage *quality* matters more than AI usage *volume* — pouring more tokens at a problem is not the lever.

For leaders, this falsifies the intuitive procurement instinct of measuring AI success by consumption (seats, spend, tokens). High token burn can signal thrashing — re-prompting, rejecting, and rewriting outputs — rather than leverage. The actionable move is to instrument *how* AI is used (patterns, where in the workflow, acceptance vs rework) rather than treating raw usage as a proxy for value.
