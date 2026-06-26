---
id: INS-260605-402B
domain: ai-development
topic: limitations
title: >-
  Benchmark pass rates measure functional correctness but hide security and
  maintainability debt
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - code-quality
  - evaluation
  - benchmarks
  - tech-debt
  - security
sources:
  - type: youtube
    title: 'Can LLMs generate Enterprise Quality Code? — Prasenjit Sarkar, Sonar'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=NuePCNMpWGc'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    An 80%+ SWE-bench pass rate says nothing about the security, complexity, or
    tech debt of the code an LLM produces.
  standard: >-
    Every LLM vendor advertises 82-84% pass rates from HumanEval, MBPP, and
    SWE-bench, but these measure only functional correctness on test cases.
    Sonar's analysis of 4,444 Java assignments across 53+ models found that
    high-scoring models simultaneously emit hundreds of bugs and security issues
    per million lines of code — Claude Sonnet 4.6 produced ~300 security issues
    per million LOC despite a strong pass rate.


    The practical consequence: choosing a model on benchmark accuracy alone
    optimizes for the wrong axis. Enterprise readiness is a multi-dimensional
    measure — issue density, cyclomatic and cognitive complexity, security
    findings, and maintainability all need to be on the dashboard. When
    evaluating coding models for production use, demand metrics beyond pass
    rate, ideally normalized per-LOC so a verbose model can't hide its defects
    in volume.
stance: >-
  LLM coding leaderboard pass rates systematically overstate enterprise
  readiness because they ignore security, complexity, and maintainability.
related:
  - INS-260410-E3BB
  - INS-260514-D3CB
  - INS-260625-E696
  - PRI-260406-3EF8
  - INS-260323-EA36
  - INS-260626-33BE
---
Every LLM vendor advertises 82-84% pass rates from HumanEval, MBPP, and SWE-bench, but these measure only functional correctness on test cases. Sonar's analysis of 4,444 Java assignments across 53+ models found that high-scoring models simultaneously emit hundreds of bugs and security issues per million lines of code — Claude Sonnet 4.6 produced ~300 security issues per million LOC despite a strong pass rate.

The practical consequence: choosing a model on benchmark accuracy alone optimizes for the wrong axis. Enterprise readiness is a multi-dimensional measure — issue density, cyclomatic and cognitive complexity, security findings, and maintainability all need to be on the dashboard. When evaluating coding models for production use, demand metrics beyond pass rate, ideally normalized per-LOC so a verbose model can't hide its defects in volume.
