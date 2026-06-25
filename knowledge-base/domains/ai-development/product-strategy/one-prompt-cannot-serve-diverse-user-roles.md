---
id: INS-260605-DC7C
domain: ai-development
topic: product-strategy
title: One prompt cannot serve diverse user roles
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - personalization
  - prompt-design
  - user-roles
  - output-design
sources:
  - type: youtube
    title: 'Feedback Loops are All You Need — Mehedi Hassan, Granola'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=ON5LIT0M4do'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Different roles need structurally different outputs, so segment prompts by
    role instead of chasing one prompt that serves everyone.
  standard: >-
    Granola's meeting summary is good for a generic user but wrong for
    specialists: sales wants a deal focus, engineering wants action items,
    blockers, or Linear tickets, and HR wants something else entirely. Hassan's
    claim is blunt — 'one prompt can't generally serve everyone.' A generic
    chatbot in production immediately surfaces these mismatches: wrong tone,
    wrong follow-up email style, wrong coaching.


    The takeaway is to resist the seductive simplicity of a single system prompt
    and instead model the distinct output shapes your user segments need. This
    connects to the broader feedback-loop thesis: you discover these
    role-specific requirements by observing real failures in production, then
    specializing, not by writing one cleverer prompt up front.
stance: >-
  A single generic prompt cannot satisfy users in different roles because each
  role wants a structurally different output.
related:
  - INS-260321-82FE
  - INS-260403-18CA
  - INS-260403-9B18
  - PRI-260406-1AC6
  - INS-260403-F400
  - INS-260403-2D89
  - INS-260605-7FEA
  - INS-260625-131D
---
Granola's meeting summary is good for a generic user but wrong for specialists: sales wants a deal focus, engineering wants action items, blockers, or Linear tickets, and HR wants something else entirely. Hassan's claim is blunt — 'one prompt can't generally serve everyone.' A generic chatbot in production immediately surfaces these mismatches: wrong tone, wrong follow-up email style, wrong coaching.

The takeaway is to resist the seductive simplicity of a single system prompt and instead model the distinct output shapes your user segments need. This connects to the broader feedback-loop thesis: you discover these role-specific requirements by observing real failures in production, then specializing, not by writing one cleverer prompt up front.
