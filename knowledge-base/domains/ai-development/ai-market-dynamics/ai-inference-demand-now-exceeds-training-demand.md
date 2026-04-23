---
id: INS-260327-991D
domain: ai-development
topic: ai-market-dynamics
title: AI inference demand now exceeds training demand
actionability: reference
confidence: high
shelf_life: time-sensitive
status: active
tags:
  - inference
  - training
  - compute-demand
  - generative-ai
sources:
  - type: youtube
    title: >-
      Nvidia CTO Michael Kagan: Scaling Beyond Moore's Law to Million-GPU
      Clusters
    author: Sequoia Capital
    url: 'https://www.youtube.com/watch?v=H9JjlTA2Il8'
date_extracted: '2026-03-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    The shift from perceptual AI to generative AI and reasoning has made
    inference as compute-intensive as training.
  standard: >-
    Kagan traces the evolution: perceptual AI (image classification) was a
    single forward pass. Generative AI requires recursive token-by-token
    generation, each requiring a full model pass. Reasoning adds another
    multiplier -- the model explores multiple solution paths. Combined with the
    fact that you train once but infer billions of times (ChatGPT's billion
    users pounding the same model), inference compute demand has matched or
    exceeded training.


    Nvidia is responding by building GPU SKUs optimized for prefill vs. decode
    phases, while maintaining programmability so workloads can shift between
    them. This has significant implications for AI infrastructure companies and
    startups building inference-heavy products -- the economics of serving AI
    applications will increasingly be dominated by inference costs, not training
    costs.
stance: >-
  Generative AI's recursive token generation and reasoning loops have made
  inference compute demand equal to or greater than training demand.
related:
  - INS-260325-E62D
  - INS-260323-7A11
  - INS-260405-567D
  - INS-260423-6172
  - INS-260409-17E9
  - INS-260405-A22F
  - INS-260403-C709
---
Kagan traces the evolution: perceptual AI (image classification) was a single forward pass. Generative AI requires recursive token-by-token generation, each requiring a full model pass. Reasoning adds another multiplier -- the model explores multiple solution paths. Combined with the fact that you train once but infer billions of times (ChatGPT's billion users pounding the same model), inference compute demand has matched or exceeded training.

Nvidia is responding by building GPU SKUs optimized for prefill vs. decode phases, while maintaining programmability so workloads can shift between them. This has significant implications for AI infrastructure companies and startups building inference-heavy products -- the economics of serving AI applications will increasingly be dominated by inference costs, not training costs.
