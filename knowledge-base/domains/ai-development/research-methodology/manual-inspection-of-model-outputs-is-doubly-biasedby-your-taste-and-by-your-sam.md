---
id: INS-260605-8168
domain: ai-development
topic: research-methodology
title: >-
  Manual inspection of model outputs is doubly biased—by your taste and by your
  sample
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - human-evaluation
  - bias
  - sampling
  - benchmarking
  - image-generation
sources:
  - type: youtube
    title: >-
      20 days of compute vs 7 hours: rethinking what state-of-the-art means —
      Bertrand Charpentier, Pruna
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=hqHC6Z_lXyo'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Manual 'vibe' inspection compounds two biases—your individual preference and
    the specific handful of prompts you tried—so it must be scaled across many
    people and samples.
  standard: >-
    When Charpentier polls a room on which of three generated images they
    prefer, votes split and some people even change their minds on the next
    example. This demonstrates that picking a model by personally eyeballing a
    few outputs is biased twice over: once by your own aesthetic preference
    (which differs from the population's), and once by the small, specific set
    of prompts you happened to test.


    Manual inspection is fine for getting an intuitive feel but is never
    sufficient for a selection decision. The fix is to scale human evaluation
    properly—ask many people, average over many samples, and keep the evaluation
    conditions close to the final production use case. Treat single-person
    spot-checks as hypothesis generation, not evidence.
stance: >-
  Eyeballing a few generations is an unreliable evaluation method because it is
  biased by both personal preference and tiny sample selection.
related:
  - INS-260327-671E
  - INS-260322-D1AB
  - INS-260329-2EB1
  - INS-260323-E0B5
  - INS-260412-347D
---
When Charpentier polls a room on which of three generated images they prefer, votes split and some people even change their minds on the next example. This demonstrates that picking a model by personally eyeballing a few outputs is biased twice over: once by your own aesthetic preference (which differs from the population's), and once by the small, specific set of prompts you happened to test.

Manual inspection is fine for getting an intuitive feel but is never sufficient for a selection decision. The fix is to scale human evaluation properly—ask many people, average over many samples, and keep the evaluation conditions close to the final production use case. Treat single-person spot-checks as hypothesis generation, not evidence.
