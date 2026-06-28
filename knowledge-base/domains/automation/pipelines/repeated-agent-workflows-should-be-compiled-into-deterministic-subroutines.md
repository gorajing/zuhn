---
id: INS-260624-5ACA
domain: automation
topic: pipelines
title: Repeated agent workflows should be compiled into deterministic subroutines
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - workflow-caching
  - agent-automation
  - compilation
  - reliability
sources:
  - type: audio
    title: Stanford Hospital at 300 Pasteur Drive
date_extracted: '2026-06-24'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Cache reusable sub-workflows as code instead of repeatedly asking the model
    to click through them.
  standard: >-
    The talk argued that web and enterprise agents often call the model at every
    click, field entry, and navigation step. Each extra model-mediated action
    adds latency, cost, and probability of failure.


    A better pattern is to detect frequently repeated sub-workflows and compile
    them into deterministic functions or scripts. This does not mean hard-coding
    every long-tail request; it means extracting reusable pieces, such as
    opening a cart after purchase intent or navigating a common enterprise
    screen, while retaining model control for novel parts and fallbacks.
stance: >-
  When an agent repeatedly performs the same multi-step UI or tool workflow,
  compiling the reusable sub-sequence into code can lower cost, latency, and
  accumulated error.
related:
  - INS-260410-0E26
  - INS-260627-F5A8
  - INS-260627-44FD
  - INS-260329-FEBA
  - INS-260605-33C0
  - INS-260626-7F55
---
The talk argued that web and enterprise agents often call the model at every click, field entry, and navigation step. Each extra model-mediated action adds latency, cost, and probability of failure.

A better pattern is to detect frequently repeated sub-workflows and compile them into deterministic functions or scripts. This does not mean hard-coding every long-tail request; it means extracting reusable pieces, such as opening a cart after purchase intent or navigating a common enterprise screen, while retaining model control for novel parts and fallbacks.
