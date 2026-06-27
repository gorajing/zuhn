---
id: INS-260605-9F7A
domain: ai-development
topic: llm-costs
title: Vendor 'one line of code' tools hide cost and control problems at scale
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - web-search
  - token-cost
  - vendor-lock-in
  - scaling
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
    Provider-supplied tools like web search are a line of code to add but blow
    up token cost and surrender control over a core part of your UX.
  standard: >-
    Granola found that adding the labs' web search tool was trivial to wire up
    but came with two hidden costs. First, token usage and cost balloon —
    complex queries can cost ~10 pence per chat, which is infeasible across
    millions of users. Second, the provider controls quality: an overnight model
    update silently degraded their web search and they had no recourse except
    switching providers, with no visibility into what changed.


    The deeper point is that capabilities billion-dollar companies are built
    around (web search) are not actually 'just a tool call.' When a vendor
    feature sits on a critical path of your user experience, treat the
    convenient integration as a prototype, not a production dependency — you are
    renting both the cost curve and the quality, and both can move against you
    without warning.
stance: >-
  LLM-provider conveniences like a built-in web search tool look like one line
  of code but become unworkable at scale due to token cost and loss of control.
related:
  - INS-260626-A5CB
  - INS-260524-8320
  - INS-260627-4946
  - INS-260626-78E6
  - INS-260627-CECD
---
Granola found that adding the labs' web search tool was trivial to wire up but came with two hidden costs. First, token usage and cost balloon — complex queries can cost ~10 pence per chat, which is infeasible across millions of users. Second, the provider controls quality: an overnight model update silently degraded their web search and they had no recourse except switching providers, with no visibility into what changed.

The deeper point is that capabilities billion-dollar companies are built around (web search) are not actually 'just a tool call.' When a vendor feature sits on a critical path of your user experience, treat the convenient integration as a prototype, not a production dependency — you are renting both the cost curve and the quality, and both can move against you without warning.
