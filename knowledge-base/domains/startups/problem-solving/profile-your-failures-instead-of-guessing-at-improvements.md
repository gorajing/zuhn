---
id: INS-260402-3C79
domain: startups
topic: problem-solving
title: Profile your failures instead of guessing at improvements
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - debugging
  - optimization
  - profiling
  - empiricism
sources:
  - type: blog
    title: Better Bayesian Filtering
    url: 'https://paulgraham.com/better.html'
date_extracted: '2026-04-02'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Don't guess where your system is weak — examine the specific cases it fails
    on and fix those, just as you'd profile slow code before optimizing.
  standard: >-
    Graham explicitly draws the analogy between code profiling and filter
    improvement: 'Don't try to guess where your code is slow, because you'll
    guess wrong. Look at where your code is slow, and fix that.' Applied to spam
    filtering, this meant ignoring theoretically interesting problems (like
    spammers misspelling words) in favor of examining the actual spams that got
    through.


    This failure-driven development principle is counterintuitive because it
    feels less rigorous than systematic improvement. But it works because
    real-world failure modes rarely match theoretical predictions. Graham's four
    missed spams in a month each revealed a distinct category of weakness —
    personal ad style, CGI exploit emails, neutral-text-plus-URL — that no
    amount of theoretical analysis would have prioritized correctly. The same
    principle applies to product development, sales processes, or any system
    you're optimizing: study your actual losses, not your imagined
    vulnerabilities.
stance: >-
  In optimization problems, systematically examining actual failures produces
  better improvements than theoretically motivated enhancements.
related:
  - INS-260321-D370
  - INS-260320-DDFE
  - INS-260326-BF32
  - INS-260329-EA2B
  - INS-260330-5A13
  - INS-260330-B4F1
  - INS-260330-ABB1
  - INS-260330-201F
  - INS-260330-AB3E
  - INS-260402-4F0E
evidence:
  - id: INS-260321-D370
    relationship: RELATED
  - id: INS-260320-DDFE
    relationship: RELATED
  - id: INS-260329-EA2B
    relationship: RELATED
  - id: INS-260326-BF32
    relationship: RELATED
  - id: INS-260402-FFCB
    relationship: RELATED
  - id: INS-260330-B4F1
    relationship: RELATED
---
Graham explicitly draws the analogy between code profiling and filter improvement: 'Don't try to guess where your code is slow, because you'll guess wrong. Look at where your code is slow, and fix that.' Applied to spam filtering, this meant ignoring theoretically interesting problems (like spammers misspelling words) in favor of examining the actual spams that got through.

This failure-driven development principle is counterintuitive because it feels less rigorous than systematic improvement. But it works because real-world failure modes rarely match theoretical predictions. Graham's four missed spams in a month each revealed a distinct category of weakness — personal ad style, CGI exploit emails, neutral-text-plus-URL — that no amount of theoretical analysis would have prioritized correctly. The same principle applies to product development, sales processes, or any system you're optimizing: study your actual losses, not your imagined vulnerabilities.
