---
id: INS-260403-D7EF
domain: ai-development
topic: alignment
title: >-
  State-aligned AI models embed political censorship as a core architectural
  feature not a removable layer
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - censorship
  - alignment
  - china
  - geopolitics
  - ai-safety
  - deepseek
sources:
  - type: blog
    title: 'DeepSeek R1: The AI Disruption No One Saw Coming'
    author:
      - '@type': Person
        name: Ruben Dominguez
        url: 'https://substack.com/@rubendominguez'
        description: 'Investing, building, writing '
        identifier: 'user:95342670'
        image:
          '@type': ImageObject
          contentUrl: >-
            https://substackcdn.com/image/fetch/$s_!mcL6!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F3403a50f-4e67-40d2-aa6f-a8d845f19c1c_480x480.png
          thumbnailUrl: >-
            https://substackcdn.com/image/fetch/$s_!mcL6!,w_128,h_128,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F3403a50f-4e67-40d2-aa6f-a8d845f19c1c_480x480.png
    url: 'https://www.thevccorner.com/p/deepseek-r1-the-ai-disruption-no'
date_extracted: '2026-04-03'
last_accessed: null
access_count: 0
indexed: false
embedded: false
resolutions:
  one_line: >-
    DeepSeek R1's built-in censorship on politically sensitive topics
    demonstrates that state alignment creates structural bias that persists
    despite jailbreak attempts.
  standard: >-
    DeepSeek R1 actively suppresses information contradicting Chinese government
    positions on Taiwan, Hong Kong, Tibet, and other politically sensitive
    topics. While researchers found that internet slang and indirect phrasing
    can bypass some censorship filters, the underlying training bias remains
    baked into the model's weights.


    This reveals an important truth about AI alignment more broadly: alignment
    is not a filter on top of a neutral model — it shapes the model's
    fundamental understanding of the world. When a government mandates what an
    AI can and cannot say during training, the resulting model doesn't just
    refuse certain queries; it genuinely 'believes' the censored worldview. This
    has implications beyond China: any entity that controls AI training data and
    RLHF processes controls what that AI treats as truth. For organizations
    evaluating AI tools, the question isn't just 'how capable is this model' but
    'whose values did it absorb during training.'
stance: >-
  Government-mandated AI censorship is baked into training data and RLHF
  alignment, making it a fundamental model property that jailbreaks can only
  partially and temporarily circumvent.
---
DeepSeek R1 actively suppresses information contradicting Chinese government positions on Taiwan, Hong Kong, Tibet, and other politically sensitive topics. While researchers found that internet slang and indirect phrasing can bypass some censorship filters, the underlying training bias remains baked into the model's weights.

This reveals an important truth about AI alignment more broadly: alignment is not a filter on top of a neutral model — it shapes the model's fundamental understanding of the world. When a government mandates what an AI can and cannot say during training, the resulting model doesn't just refuse certain queries; it genuinely 'believes' the censored worldview. This has implications beyond China: any entity that controls AI training data and RLHF processes controls what that AI treats as truth. For organizations evaluating AI tools, the question isn't just 'how capable is this model' but 'whose values did it absorb during training.'
