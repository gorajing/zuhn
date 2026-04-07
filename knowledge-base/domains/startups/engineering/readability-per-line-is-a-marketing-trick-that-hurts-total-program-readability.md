---
id: INS-260403-410A
domain: startups
topic: engineering
title: Readability per line is a marketing trick that hurts total program readability
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - readability
  - programming-languages
  - developer-experience
  - tradeoffs
sources:
  - type: blog
    title: Succinctness is Power
    url: 'https://paulgraham.com/power.html'
date_extracted: '2026-04-03'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Easy-to-read individual lines multiplied by many more lines produces worse
    total readability than dense-but-fewer lines.
  standard: >-
    Graham draws an analogy to installment plans: advertising low monthly
    payments obscures a higher total cost. Similarly, languages that optimize
    for readability-per-line (like Basic or Python) make each line approachable,
    but the total reading effort (effort-per-line × number-of-lines) is higher
    because programs are longer. Math notation makes the same tradeoff — a
    single page of math takes 30 minutes to read, but expressing those ideas in
    prose would fill a book.


    This challenges the common assumption that 'readable' languages are better
    for teams. If total comprehension effort matters more than per-line
    approachability, then succinct languages with steeper learning curves may
    produce more maintainable codebases once the team is proficient. The
    readability-per-line advantage is real but front-loaded — it helps newcomers
    at the cost of everyone who maintains the code long-term.
stance: >-
  Optimizing for readability of individual lines — like installment payments —
  obscures the true cost of reading an entire verbose program.
related:
  - INS-260330-B91E
  - PRI-260406-ABAA
  - INS-260403-EA2C
  - INS-260330-2F74
  - PRI-260406-FA5B
evidence:
  - id: INS-260403-A6B1
    type: CHALLENGES
    classified_at: '2026-04-06'
  - id: INS-260325-C523
    type: TRANSFERS_TO
    classified_at: '2026-04-06'
  - id: INS-260330-B91E
    type: TRANSFERS_TO
    classified_at: '2026-04-06'
---
Graham draws an analogy to installment plans: advertising low monthly payments obscures a higher total cost. Similarly, languages that optimize for readability-per-line (like Basic or Python) make each line approachable, but the total reading effort (effort-per-line × number-of-lines) is higher because programs are longer. Math notation makes the same tradeoff — a single page of math takes 30 minutes to read, but expressing those ideas in prose would fill a book.

This challenges the common assumption that 'readable' languages are better for teams. If total comprehension effort matters more than per-line approachability, then succinct languages with steeper learning curves may produce more maintainable codebases once the team is proficient. The readability-per-line advantage is real but front-loaded — it helps newcomers at the cost of everyone who maintains the code long-term.
