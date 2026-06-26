---
id: INS-260514-2995
domain: automation
topic: pipelines
title: >-
  Schedule heavy local-AI indexing for 1-5am — avoids daytime RAM contention and
  overheating
actionability: immediate
confidence: high
shelf_life: time-sensitive
status: active
tags:
  - local-llm-ops
  - scheduling
  - overheating
  - ram-contention
  - nightly-indexing
sources:
  - type: youtube
    title: M5 프로맥스 128G로 구축한 나만의 LLM Wiki 전격 대공개!
    author: 배움의 달인 (AI·자동화)
    url: 'https://youtu.be/YCirjfAurng'
date_extracted: '2026-05-14'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Schedule local-AI indexing for 1-5am — 70GB+ RAM stacks can't share daytime
    resources without overheating, but unattended overnight processing keeps the
    wiki fresh and the laptop usable.
  standard: >-
    Practical operational pattern from Kim Moon-jeong's M5 setup: her 3-model
    stack (Qwen + Nemotron + BGE-M3) consumes ~71GB of 128GB RAM when active.
    Running it during the day creates two problems: (1) The remaining ~57GB
    shared between everything else (Chrome with 80 tabs, Obsidian, code editor,
    video conferencing) is insufficient — RAM contention causes swap thrashing
    and system slowdowns. (2) Sustained 70GB+ memory use plus inference compute
    pushes the M5 Pro Max into thermal throttling within minutes, degrading both
    inference speed and laptop responsiveness. Her solution: schedule the local
    LLM to wake at 1am and sleep at 5am via macOS scheduled tasks. During the
    4-hour window, the indexer processes all notes created during the previous
    day, updates the wiki, and shuts down before morning use. The architectural
    pattern: any AI workload that consumes >50% of your machine's resources
    should be scheduled offline (overnight) rather than synchronous. This is the
    same logic as overnight batch ETL in traditional data engineering — heavy
    work runs when the human is asleep. For builders extending this: combine
    scheduled indexing with file-watcher triggers (process new files immediately
    if they arrive during business hours, batch-process the queue at 1am) for
    the best of both. The implication for Apple Silicon Mac users: 128GB makes
    serious local AI feasible, but only with thoughtful scheduling — naive
    'always on' deployment will overheat and contend with normal work.
stance: >-
  Local LLM workloads that need 70GB+ RAM (3-model stacks running concurrently)
  cannot run alongside daytime work on a 128GB Mac without overheating and RAM
  contention — the correct architectural pattern is to schedule indexing in the
  early-morning hours (1am start, 5am stop), letting overnight indexing process
  newly-created notes while you sleep and freeing daytime RAM for actual work.
related:
  - INS-260514-D023
  - INS-260409-0EEE
  - INS-260514-1277
  - INS-260626-1012
  - INS-260409-5C6B
---
Practical operational pattern from Kim Moon-jeong's M5 setup: her 3-model stack (Qwen + Nemotron + BGE-M3) consumes ~71GB of 128GB RAM when active. Running it during the day creates two problems: (1) The remaining ~57GB shared between everything else (Chrome with 80 tabs, Obsidian, code editor, video conferencing) is insufficient — RAM contention causes swap thrashing and system slowdowns. (2) Sustained 70GB+ memory use plus inference compute pushes the M5 Pro Max into thermal throttling within minutes, degrading both inference speed and laptop responsiveness. Her solution: schedule the local LLM to wake at 1am and sleep at 5am via macOS scheduled tasks. During the 4-hour window, the indexer processes all notes created during the previous day, updates the wiki, and shuts down before morning use. The architectural pattern: any AI workload that consumes >50% of your machine's resources should be scheduled offline (overnight) rather than synchronous. This is the same logic as overnight batch ETL in traditional data engineering — heavy work runs when the human is asleep. For builders extending this: combine scheduled indexing with file-watcher triggers (process new files immediately if they arrive during business hours, batch-process the queue at 1am) for the best of both. The implication for Apple Silicon Mac users: 128GB makes serious local AI feasible, but only with thoughtful scheduling — naive 'always on' deployment will overheat and contend with normal work.
