---
id: INS-260627-68CA
domain: ai-development
topic: productivity
title: AI coding productivity gains collapse the moment you leave greenfield
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - greenfield
  - legacy-code
  - developer-productivity
  - measurement
  - enterprise-ai
sources:
  - type: youtube
    title: >-
      What We Learned Deploying AI within Bloomberg’s Engineering Organization –
      Lei Zhang, Bloomberg
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=Q81AzlA-VE8'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Bloomberg's surveys showed AI sped up proof-of-concepts, test scaffolding,
    and throwaway scripts, but the productivity gains dropped quickly once
    developers moved beyond greenfield into existing code.
  standard: >-
    When Bloomberg measured the impact of AI coding tools across its engineering
    org, the wins were obvious and immediate for greenfield work: faster
    proofs-of-concept, quickly rolled-out tests, and lots of one-time-use
    scripts. But the measured productivity gains dropped 'pretty quickly' the
    moment developers went beyond greenfield and into existing systems. This
    matters because system complexity scales at least polynomially (arguably
    exponentially) with lines of code, so the bulk of real engineering value
    lives in exactly the mature-codebase regime where naive AI assistance
    underperforms.


    The practical takeaway is to distrust headline productivity numbers that are
    dominated by greenfield and disposable-script use cases — they don't
    generalize to the maintenance and evolution work that consumes most senior
    engineering time. Organizations that want durable returns should stop
    chasing generic 'AI for coding' and instead target the specific,
    lower-glamour categories of work (migrations, patching, refactoring) where
    AI can make a real dent on an existing asset base.
stance: >-
  AI coding tools deliver large measurable productivity gains on greenfield work
  but those gains drop off sharply on mature, complex codebases.
related:
  - INS-260322-4757
  - INS-260321-9824
  - INS-260402-E470
  - INS-260403-EE38
  - INS-260405-DC20
  - INS-260403-F0DC
  - INS-260403-19C9
  - INS-260403-7DF4
  - INS-260405-7C86
  - INS-260405-2021
---
When Bloomberg measured the impact of AI coding tools across its engineering org, the wins were obvious and immediate for greenfield work: faster proofs-of-concept, quickly rolled-out tests, and lots of one-time-use scripts. But the measured productivity gains dropped 'pretty quickly' the moment developers went beyond greenfield and into existing systems. This matters because system complexity scales at least polynomially (arguably exponentially) with lines of code, so the bulk of real engineering value lives in exactly the mature-codebase regime where naive AI assistance underperforms.

The practical takeaway is to distrust headline productivity numbers that are dominated by greenfield and disposable-script use cases — they don't generalize to the maintenance and evolution work that consumes most senior engineering time. Organizations that want durable returns should stop chasing generic 'AI for coding' and instead target the specific, lower-glamour categories of work (migrations, patching, refactoring) where AI can make a real dent on an existing asset base.
