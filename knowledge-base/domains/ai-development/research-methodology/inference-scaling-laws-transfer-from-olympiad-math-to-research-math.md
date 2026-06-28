---
id: INS-260505-864E
domain: ai-development
topic: research-methodology
title: Inference-scaling laws transfer from Olympiad math to research math
actionability: reference
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - inference-scaling
  - math-ai
  - scaling-laws
  - transfer
sources:
  - type: audio
    title: Carina Hong
date_extracted: '2026-05-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Same scaling law that took models from Olympiad silver to gold also applies
    to research-grade problems — just with much longer proof traces.
  standard: >-
    Carina Hong: research math problems often have proof loads scaling with
    problem difficulty — Olympiad problems might need 5x what undergraduate
    problems need; research problems might need 500x or more. The empirical
    observation is that the same inference-time-compute scaling laws that
    improved Olympiad performance transfer to research-level math. You can scale
    inference compute and continue to extract more accurate proof generation.
    Numina's deep-reasoning agent (LeanOS-style) demonstrated this with
    researcher-prompted problems — the level 0-2 inference scaling shows the
    same pattern at the research level as at the Olympiad level.


    Application: for math AI specifically, capability projections should not
    assume diminishing returns at research-difficulty problems. The scaling laws
    appear to extrapolate. This is more aggressive than other AI domains (e.g.,
    language) where research-level tasks often hit different bottlenecks than
    competitive tasks.
stance: >-
  The inference-time compute scaling laws that drove AI's Olympiad math
  performance also apply at the research-math level — same architecture, same
  training paradigm, just longer reasoning traces, scales to research problems.
related:
  - INS-260323-6C6F
  - PRI-260323-8E89
  - INS-260327-95D3
  - INS-260403-EEDF
  - INS-260410-022B
  - INS-260628-405C
---
Carina Hong: research math problems often have proof loads scaling with problem difficulty — Olympiad problems might need 5x what undergraduate problems need; research problems might need 500x or more. The empirical observation is that the same inference-time-compute scaling laws that improved Olympiad performance transfer to research-level math. You can scale inference compute and continue to extract more accurate proof generation. Numina's deep-reasoning agent (LeanOS-style) demonstrated this with researcher-prompted problems — the level 0-2 inference scaling shows the same pattern at the research level as at the Olympiad level.

Application: for math AI specifically, capability projections should not assume diminishing returns at research-difficulty problems. The scaling laws appear to extrapolate. This is more aggressive than other AI domains (e.g., language) where research-level tasks often hit different bottlenecks than competitive tasks.
