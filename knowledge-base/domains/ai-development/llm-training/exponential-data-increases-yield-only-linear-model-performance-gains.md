---
id: INS-260403-1F1B
domain: ai-development
topic: llm-training
title: Exponential data increases yield only linear model performance gains
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - scaling-laws
  - diminishing-returns
  - training-data
  - model-convergence
sources:
  - type: blog
    title: 'Quick Essay: Large Language Models, How to Train Them, and xAI’s Grok'
    author:
      - '@type': Person
        name: Chamath Palihapitiya
        url: 'https://substack.com/@chamath'
        description: 'CEO @SocialCapital, Bestie @theallinpod'
        identifier: 'user:97776398'
        image:
          '@type': ImageObject
          contentUrl: >-
            https://substackcdn.com/image/fetch/$s_!PGqd!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F3b307cf2-75a9-4926-b469-de95691aa726_2289x2289.jpeg
          thumbnailUrl: >-
            https://substackcdn.com/image/fetch/$s_!PGqd!,w_128,h_128,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F3b307cf2-75a9-4926-b469-de95691aa726_2289x2289.jpeg
    url: 'https://chamath.substack.com/p/large-language-models-how-to-train'
date_extracted: '2026-04-03'
last_accessed: null
access_count: 0
indexed: false
embedded: false
resolutions:
  one_line: >-
    More training data produces diminishing performance improvements, forcing
    differentiation through data quality and architecture innovation.
  standard: >-
    As language models are trained on exponentially more data, the resulting
    performance improvements are only linear. This means that once all
    competitors have access to roughly the same volume of internet-scraped text,
    models converge toward similar capability levels on that axis alone.


    This dynamic shifts the competitive frontier away from raw data volume
    toward two alternative moats: proprietary high-quality data sources (like
    X's real-time tweet stream) and architectural innovations that extract more
    capability per parameter. It explains why newer models like Grok can compete
    with much larger models using fewer parameters — architecture and data
    quality matter more than sheer scale once you pass the data sufficiency
    threshold.
stance: >-
  Scaling training data alone hits diminishing returns, making data quality and
  architecture the primary differentiators between frontier models
---
As language models are trained on exponentially more data, the resulting performance improvements are only linear. This means that once all competitors have access to roughly the same volume of internet-scraped text, models converge toward similar capability levels on that axis alone.

This dynamic shifts the competitive frontier away from raw data volume toward two alternative moats: proprietary high-quality data sources (like X's real-time tweet stream) and architectural innovations that extract more capability per parameter. It explains why newer models like Grok can compete with much larger models using fewer parameters — architecture and data quality matter more than sheer scale once you pass the data sufficiency threshold.
