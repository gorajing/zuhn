---
id: INS-260627-CEC6
domain: ai-development
topic: tooling
title: 'Embed AI iteration controls inside the shipping product, not in dev-only tools'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - ai-product-development
  - internal-tools
  - iteration-speed
  - prompt-engineering
  - dogfooding
sources:
  - type: youtube
    title: >-
      From Arc to Dia: Lessons learned building AI Browsers – Samir Mody, The
      Browser Company of New York
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=o4scJaQgnFA'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Moving prompt/context/model controls out of dev-only builds and into the
    live product 10x'd iteration speed and let anyone—CEO to newest hire—build
    AI features with real personal context.
  standard: >-
    The Browser Company started with a rudimentary prompt editor available only
    in dev builds. This crippled iteration in three ways: only engineers could
    access it, the loop was slow, and—most damaging for an AI product—it carried
    none of the user's real personal context. For AI products, context is
    precisely what determines whether a feature feels good, so testing without
    it gives a false signal.


    The fix was to build every lever (prompts, tools, context, models, every
    parameter) into the product the team uses daily. This produced two
    compounding effects. First, a claimed 10x increase in the speed of ideating,
    iterating, and refining. Second, it widened the set of people who could
    build—PMs, designers, customer service, strategy and ops could all create or
    refine an AI feature with their full context, not just engineers.


    The practical takeaway: for AI products, the iteration environment must be
    the real product with real context, and it must be accessible to
    non-engineers. A dev-only sandbox optimizes for engineering convenience at
    the cost of the exact signal—contextual quality—that makes or breaks the
    product.
stance: >-
  AI product teams should build prompt, context, and model controls directly
  into the live product rather than maintaining separate engineer-only dev
  tooling.
related:
  - INS-260329-8DC5
  - INS-260501-6453
  - INS-260605-8AFF
  - INS-260626-FC7A
  - INS-260605-287A
  - INS-260514-AC43
  - INS-260603-DFA6
  - INS-260625-0DD6
---
The Browser Company started with a rudimentary prompt editor available only in dev builds. This crippled iteration in three ways: only engineers could access it, the loop was slow, and—most damaging for an AI product—it carried none of the user's real personal context. For AI products, context is precisely what determines whether a feature feels good, so testing without it gives a false signal.

The fix was to build every lever (prompts, tools, context, models, every parameter) into the product the team uses daily. This produced two compounding effects. First, a claimed 10x increase in the speed of ideating, iterating, and refining. Second, it widened the set of people who could build—PMs, designers, customer service, strategy and ops could all create or refine an AI feature with their full context, not just engineers.

The practical takeaway: for AI products, the iteration environment must be the real product with real context, and it must be accessible to non-engineers. A dev-only sandbox optimizes for engineering convenience at the cost of the exact signal—contextual quality—that makes or breaks the product.
