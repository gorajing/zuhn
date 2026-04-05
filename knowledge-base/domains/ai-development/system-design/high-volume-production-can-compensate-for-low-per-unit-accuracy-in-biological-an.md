---
id: INS-260405-C497
domain: ai-development
topic: system-design
title: >-
  High volume production can compensate for low per-unit accuracy in biological
  and computational systems
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - scale
  - accuracy-tradeoffs
  - redundancy
  - fault-tolerance
  - system-design
sources:
  - type: youtube
    title: 'Oh, wait, actually the best Wordle opener is not “crane”…'
    author: 3Blue1Brown
    url: 'https://www.youtube.com/watch?v=fRed0Xmc2Wg'
date_extracted: '2026-04-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    RuBisCo is wrong about half the time in oxygen-rich conditions, yet plants
    compensate by making it the most abundant protein on Earth — roughly 40
    billion tons — making photosynthesis viable despite terrible per-reaction
    accuracy.
  standard: >-
    Evolution's solution to RuBisCo's poor discrimination between CO2 and O2 was
    not to engineer a better enzyme — it was to produce incomprehensible amounts
    of the flawed one. The metabolic overhead is enormous (entire pathways exist
    to clean up RuBisCo's mistakes), but the system still produces net positive
    output because volume overwhelms the error rate.


    This tradeoff appears repeatedly in designed systems. Early internet routing
    protocols forwarded many invalid packets and relied on end-to-end checksums
    to catch errors rather than building flawless routers. MapReduce assumes
    hardware will fail and runs redundant tasks, tolerating individual failures.
    LLM inference at scale uses sampling and temperature — deliberately
    introducing stochasticity — and compensates through ensemble methods, retry
    logic, and user feedback loops rather than pursuing per-token perfection.


    The design implication is that the optimal error rate for a system is rarely
    zero, and that cheap imprecise operations at high volume often dominate
    expensive precise operations at low volume. When evaluating AI systems, the
    question 'how often is it wrong?' is less useful than 'how does output
    quality scale with volume, and what is the cost of the error-cleanup path?'
stance: >-
  A low-accuracy process running at massive scale can outperform a high-accuracy
  process running at low volume, which implies that scale is often a valid
  substitute for precision.
related:
  - INS-260330-7B09
  - INS-260330-AB3C
  - INS-260330-0B4A
  - INS-260405-8B89
  - INS-260330-4EC0
  - INS-260405-95AE
  - INS-260330-43CA
---
Evolution's solution to RuBisCo's poor discrimination between CO2 and O2 was not to engineer a better enzyme — it was to produce incomprehensible amounts of the flawed one. The metabolic overhead is enormous (entire pathways exist to clean up RuBisCo's mistakes), but the system still produces net positive output because volume overwhelms the error rate.

This tradeoff appears repeatedly in designed systems. Early internet routing protocols forwarded many invalid packets and relied on end-to-end checksums to catch errors rather than building flawless routers. MapReduce assumes hardware will fail and runs redundant tasks, tolerating individual failures. LLM inference at scale uses sampling and temperature — deliberately introducing stochasticity — and compensates through ensemble methods, retry logic, and user feedback loops rather than pursuing per-token perfection.

The design implication is that the optimal error rate for a system is rarely zero, and that cheap imprecise operations at high volume often dominate expensive precise operations at low volume. When evaluating AI systems, the question 'how often is it wrong?' is less useful than 'how does output quality scale with volume, and what is the cost of the error-cleanup path?'
