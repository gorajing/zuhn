---
id: INS-260413-EB61
domain: ai-development
topic: alignment
title: Frontier labs report capability benchmarks but suppress safety benchmarks
actionability: reference
confidence: high
shelf_life: time-sensitive
status: active
tags:
  - safety-benchmarks
  - disclosure-asymmetry
  - ai-index-2026
  - strongreject
  - makemepay
sources:
  - type: pdf
    title: ai_index_report_2026
date_extracted: '2026-04-13'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Looking at GPT-5.2, Gemini 3, DeepSeek-V3.2, Llama 4 Maverick, Grok 4.1,
    Claude Opus 4.5, and Mistral 3 Large: nearly all report MMLU/GPQA/AIME but
    almost none report safety benchmarks (BBQ, HarmBench, Cybench, StrongREJECT,
    WMDP, MakeMePay).
  standard: >-
    The AI Index 2026 Chapter 3 publishes a table showing which responsible AI
    benchmarks each major foundation model reports. The asymmetry is stark: for
    general capability benchmarks (MMLU, MMLU-Pro, GPQA, GPQA-Diamond, AIME
    2025, SWE-bench Verified, MMMU, ARC-AGI-2, FrontierMath, HLE), reporting is
    near-complete across GPT-5.2, Gemini 3, DeepSeek-V3.2, Llama 4 Maverick,
    Grok 4.1, Claude Opus 4.5, and Mistral 3 Large. For responsible AI
    benchmarks (BBQ, HarmBench, Cybench, SimpleQA, Toxic WildChat, StrongREJECT,
    WMDP, MakeMePay, MakeMeSay), the table is mostly empty. Only GPT-5.2 reports
    StrongREJECT. Only Claude Opus 4.5 reports BBQ, Cybench, and SimpleQA. No
    lab reports HarmBench, Toxic WildChat, or the manipulation benchmarks
    (MakeMePay, MakeMeSay). This is not a technical measurement gap — these
    benchmarks exist and are computed — it is a disclosure choice. The
    implication is that safety claims from frontier labs are unaudited even when
    audit infrastructure exists, so any governance framework that relies on
    self-reporting of RAI benchmarks has no effective measurement.
stance: >-
  Frontier AI safety is functionally unverifiable — every major lab reports
  capability benchmarks (MMLU, SWE-bench, GPQA) but safety benchmark reporting
  is systematically suppressed, with only Claude Opus 4.5 reporting on 3+ safety
  measures and most models reporting zero.
related:
  - INS-260403-5F69
  - INS-260410-0DA5
  - INS-260410-4EB9
  - INS-260327-FC68
  - INS-260403-EA93
  - INS-260321-E8CB
---
The AI Index 2026 Chapter 3 publishes a table showing which responsible AI benchmarks each major foundation model reports. The asymmetry is stark: for general capability benchmarks (MMLU, MMLU-Pro, GPQA, GPQA-Diamond, AIME 2025, SWE-bench Verified, MMMU, ARC-AGI-2, FrontierMath, HLE), reporting is near-complete across GPT-5.2, Gemini 3, DeepSeek-V3.2, Llama 4 Maverick, Grok 4.1, Claude Opus 4.5, and Mistral 3 Large. For responsible AI benchmarks (BBQ, HarmBench, Cybench, SimpleQA, Toxic WildChat, StrongREJECT, WMDP, MakeMePay, MakeMeSay), the table is mostly empty. Only GPT-5.2 reports StrongREJECT. Only Claude Opus 4.5 reports BBQ, Cybench, and SimpleQA. No lab reports HarmBench, Toxic WildChat, or the manipulation benchmarks (MakeMePay, MakeMeSay). This is not a technical measurement gap — these benchmarks exist and are computed — it is a disclosure choice. The implication is that safety claims from frontier labs are unaudited even when audit infrastructure exists, so any governance framework that relies on self-reporting of RAI benchmarks has no effective measurement.
