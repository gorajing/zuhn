---
id: INS-260627-7122
domain: ai-development
topic: software-engineering
title: >-
  Context-gathering, not code generation, is the dominant time sink in bug
  fixing
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - debugging
  - context-engineering
  - llm-tools
  - diagnosis
  - developer-productivity
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
    Automate the context-gathering phase of debugging first — it dominates the
    time and is where an LLM adds the most value.
  standard: >-
    When Zapier did discovery — dogfooding fixes, shadowing engineers, mapping
    the phases of work and time spent — their 'one big discovery' was how much
    time goes into gathering context before any fix is written: reading
    third-party API docs, crawling the internet for whether someone has already
    hit the bug, and digging through internal logs. Of all the tools they built,
    the one that became a 'support darling' was 'diagnosis,' which uses an LLM
    to gather and curate that scattered context on the engineer's behalf and
    propose a recommendation. It was valuable enough that support asked to embed
    it into their ticket-creation flow.


    The insight inverts the naive assumption that the LLM's job in software
    maintenance is to write code. The expensive, tedious, parallelizable part is
    assembling the situation: what the API changed, what the logs show, whether
    a fix already exists elsewhere. Code generation is comparatively cheap and
    increasingly commoditized (Cursor, etc.). So when scoping an AI tool for an
    engineering org, profile where the hours actually go before building — and
    expect the answer to be context assembly. A caveat surfaced in the talk: the
    diagnosis tool was so thorough it was slow, which is frustrating when run
    synchronously inside an IDE on a live ticket, so context-gathering depth
    must be traded against latency for interactive use.
stance: >-
  The highest-leverage place to apply AI in bug resolution is automating
  context-gathering, not writing the fix.
related:
  - INS-260321-AD95
  - INS-260330-FA9D
  - INS-260410-761B
  - INS-260329-03B5
  - INS-260625-A7C5
---
When Zapier did discovery — dogfooding fixes, shadowing engineers, mapping the phases of work and time spent — their 'one big discovery' was how much time goes into gathering context before any fix is written: reading third-party API docs, crawling the internet for whether someone has already hit the bug, and digging through internal logs. Of all the tools they built, the one that became a 'support darling' was 'diagnosis,' which uses an LLM to gather and curate that scattered context on the engineer's behalf and propose a recommendation. It was valuable enough that support asked to embed it into their ticket-creation flow.

The insight inverts the naive assumption that the LLM's job in software maintenance is to write code. The expensive, tedious, parallelizable part is assembling the situation: what the API changed, what the logs show, whether a fix already exists elsewhere. Code generation is comparatively cheap and increasingly commoditized (Cursor, etc.). So when scoping an AI tool for an engineering org, profile where the hours actually go before building — and expect the answer to be context assembly. A caveat surfaced in the talk: the diagnosis tool was so thorough it was slow, which is frustrating when run synchronously inside an IDE on a live ticket, so context-gathering depth must be traded against latency for interactive use.
