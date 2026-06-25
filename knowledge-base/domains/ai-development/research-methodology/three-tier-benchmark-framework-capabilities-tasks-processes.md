---
id: INS-260514-3974
domain: ai-development
topic: research-methodology
title: 'Three-tier benchmark framework: capabilities, tasks, processes'
actionability: reference
confidence: high
shelf_life: time-sensitive
status: active
tags:
  - benchmarks
  - evaluation
  - bixbench
  - comp-biobench
  - process-benchmarks
  - trust-building
sources:
  - type: youtube
    title: 'Episode: 41 - Sonia Timberlake on Agentic AI for Biotech Coders'
    author: Bio ITWorld
    url: 'https://youtu.be/YxdWMzJK2j0'
date_extracted: '2026-05-14'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    AI benchmarks are organized in three tiers — capabilities (cheap, narrow),
    tasks (expensive, end-to-end PhD-month problems), and processes (multi-team
    coordinated outputs) — and the third tier is the frontier that doesn't yet
    exist.
  standard: >-
    Sonia's mental model for what 'trusting AI output' actually means:
    benchmarks at three distinct levels. (1) Capability benchmarks measure
    narrow skills — Chart QA / chart understanding, multimodal vision, code
    generation in a specific language. These are cheap to curate but limited in
    inferential value because they don't compose. (2) Task benchmarks measure
    end-to-end completion of bounded problems — Bixbench (Future House, 2025)
    and Comp Biobench (Genentech, 2026) curate problems that take a PhD
    scientist a month to solve manually, with human-verified ground-truth
    solutions and figures. These are expensive but high-value because they
    capture the real workflow. The benchmarks are public goods that suffer from
    typical public-goods underinvestment, but having an industry leader like
    Genentech contribute back is laudable. (3) Process benchmarks would measure
    coordinated multi-team outputs — e.g., 'generate a preIND document with
    sourced data from 10 teams, each curated through their own QA process, that
    I trust enough to submit to the FDA.' This tier doesn't exist yet because
    curating ground truth is impossibly expensive, but it's where the field is
    heading. Implication for builders: pick the right tier for what you're
    measuring. Capability benchmarks tell you if a model knows a skill; task
    benchmarks tell you if it can complete a real job; process benchmarks would
    tell you if you can trust it inside an organizational workflow.
stance: >-
  AI benchmarks should be hierarchically organized into three tiers — capability
  benchmarks (Chart QA, single-modal tests), task benchmarks (Bixbench, Comp
  Biobench — full PhD-month problems with curated ground truth), and process
  benchmarks (multi-team coordinated outputs like FDA preIND submissions) — and
  the last tier doesn't yet exist, marking the frontier of where AI for
  knowledge workers will mature next.
related:
  - INS-260327-6AA0
  - INS-260327-40DA
  - INS-260409-C717
  - INS-260411-D67E
  - INS-260413-EB61
  - INS-260403-1EFF
  - PRI-260413-A957
  - INS-260605-3E7F
  - INS-260514-5AEF
---
Sonia's mental model for what 'trusting AI output' actually means: benchmarks at three distinct levels. (1) Capability benchmarks measure narrow skills — Chart QA / chart understanding, multimodal vision, code generation in a specific language. These are cheap to curate but limited in inferential value because they don't compose. (2) Task benchmarks measure end-to-end completion of bounded problems — Bixbench (Future House, 2025) and Comp Biobench (Genentech, 2026) curate problems that take a PhD scientist a month to solve manually, with human-verified ground-truth solutions and figures. These are expensive but high-value because they capture the real workflow. The benchmarks are public goods that suffer from typical public-goods underinvestment, but having an industry leader like Genentech contribute back is laudable. (3) Process benchmarks would measure coordinated multi-team outputs — e.g., 'generate a preIND document with sourced data from 10 teams, each curated through their own QA process, that I trust enough to submit to the FDA.' This tier doesn't exist yet because curating ground truth is impossibly expensive, but it's where the field is heading. Implication for builders: pick the right tier for what you're measuring. Capability benchmarks tell you if a model knows a skill; task benchmarks tell you if it can complete a real job; process benchmarks would tell you if you can trust it inside an organizational workflow.
