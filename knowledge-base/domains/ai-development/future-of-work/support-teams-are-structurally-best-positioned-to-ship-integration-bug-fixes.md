---
id: INS-260627-1297
domain: ai-development
topic: future-of-work
title: Support teams are structurally best-positioned to ship integration bug fixes
actionability: inspiration
confidence: medium
shelf_life: evergreen
status: active
tags:
  - support-engineering
  - talent-pipeline
  - debugging
  - org-design
  - role-evolution
sources:
  - type: youtube
    title: 'Your Support Team Should Ship Code – Lisa Orr, Zapier'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=RmJ4rTLV_x4'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Empower support to ship fixes with AI codegen — they hold three structural
    advantages engineers lack, and it doubles as an engineering pipeline.
  standard: >-
    Orr's central thesis is that support has 'three superpowers' for fixing
    customer-reported bugs that an engineering backlog destroys. First,
    proximity to customer pain: support is closest to the context that matters
    for diagnosing the real problem. Second, freshness: they troubleshoot in
    real time, while logs are still available and context isn't stale — the same
    ticket dropped into an engineering backlog months later may have lost log
    access entirely. Third, validation: because they know the specific
    customer's need, they can judge whether a fix actually addresses it, whereas
    an engineer's plausible solution might change behavior in a way that's fine
    in general but wrong for the customer who reported it.


    Given AI codegen, this argues for inverting the default routing of customer
    bugs away from engineering. At Zapier the results were concrete: Scout
    generates 40% of the support team's app fixes, and per-person fix velocity
    went from effectively zero (occasional unofficial fixes) to three-to-four
    shipped fixes per week, while engineering stayed focused on more complex
    work. A second-order benefit: several support members who took part became
    engineers, making the program a structured talent pipeline. The pattern
    travels to any org where a non-engineering team sits closest to fresh
    problem context — give them an orchestrated codegen agent and a review gate
    rather than triaging everything into an engineering queue.
stance: >-
  Support staff, not backlogged engineers, are the optimal first-line code
  contributors for customer-reported bugs — and codegen makes that a viable
  talent pipeline.
related:
  - INS-260404-D6F7
  - INS-260627-B395
  - INS-260514-7628
  - INS-260603-50B1
  - INS-260619-4ADA
---
Orr's central thesis is that support has 'three superpowers' for fixing customer-reported bugs that an engineering backlog destroys. First, proximity to customer pain: support is closest to the context that matters for diagnosing the real problem. Second, freshness: they troubleshoot in real time, while logs are still available and context isn't stale — the same ticket dropped into an engineering backlog months later may have lost log access entirely. Third, validation: because they know the specific customer's need, they can judge whether a fix actually addresses it, whereas an engineer's plausible solution might change behavior in a way that's fine in general but wrong for the customer who reported it.

Given AI codegen, this argues for inverting the default routing of customer bugs away from engineering. At Zapier the results were concrete: Scout generates 40% of the support team's app fixes, and per-person fix velocity went from effectively zero (occasional unofficial fixes) to three-to-four shipped fixes per week, while engineering stayed focused on more complex work. A second-order benefit: several support members who took part became engineers, making the program a structured talent pipeline. The pattern travels to any org where a non-engineering team sits closest to fresh problem context — give them an orchestrated codegen agent and a review gate rather than triaging everything into an engineering queue.
