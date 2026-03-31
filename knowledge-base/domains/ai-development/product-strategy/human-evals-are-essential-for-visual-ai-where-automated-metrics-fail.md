---
id: INS-260327-66AC
domain: ai-development
topic: product-strategy
title: Human evals are essential for visual AI where automated metrics fail
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - human-evals
  - image-generation
  - quality-assessment
  - visual-ai
sources:
  - type: youtube
    title: How Google’s Nano Banana Achieved Breakthrough Character Consistency
    author: Sequoia Capital
    url: 'https://www.youtube.com/watch?v=5uutda-R0EY'
date_extracted: '2026-03-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Face consistency can only be evaluated by people who know the face; Google
    built internal evals using team members' own faces because strangers cannot
    judge whether a generated image actually looks like someone.
  standard: >-
    The Nano Banana team discovered that character consistency evaluation is
    fundamentally personal: you can only judge whether an AI-generated version
    of someone looks right if you actually know that person's face. They built
    eval sets using team members' and executives' own faces because strangers
    would accept approximations that the subject would immediately reject.


    This extends to a broader principle: visual AI quality has irreducibly
    subjective dimensions (aesthetic quality, emotional resonance, identity
    preservation) that quantitative benchmarks cannot capture. A 10% improvement
    on an automated metric doesn't convey the qualitative leap of 'this actually
    looks like me for the first time.' Google invested in dedicated human eval
    tooling, internal artist testing, and community testing as foundational
    infrastructure rather than nice-to-haves.
stance: >-
  For image generation and visual AI, human evaluation is a foundational
  requirement that cannot be replaced by automated metrics because aesthetic
  quality, face consistency, and emotional impact are inherently subjective and
  can only be judged by the people who know the subject.
related:
  - INS-260323-5609
  - INS-260330-725C
  - INS-260322-AB55
  - INS-260330-3CD9
  - INS-260330-47FB
  - INS-260327-671E
---
The Nano Banana team discovered that character consistency evaluation is fundamentally personal: you can only judge whether an AI-generated version of someone looks right if you actually know that person's face. They built eval sets using team members' and executives' own faces because strangers would accept approximations that the subject would immediately reject.

This extends to a broader principle: visual AI quality has irreducibly subjective dimensions (aesthetic quality, emotional resonance, identity preservation) that quantitative benchmarks cannot capture. A 10% improvement on an automated metric doesn't convey the qualitative leap of 'this actually looks like me for the first time.' Google invested in dedicated human eval tooling, internal artist testing, and community testing as foundational infrastructure rather than nice-to-haves.
