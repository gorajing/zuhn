---
id: INS-260329-72E0
domain: ai-development
topic: system-building
title: >-
  Exception handling as a design philosophy: catch specific errors, not generic
  ones
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - error-handling
  - robustness
  - defensive-programming
  - exception-design
sources:
  - type: youtube
    title: C# Tutorial - Full Course for Beginners
    author: freeCodeCamp.org
    url: 'https://www.youtube.com/watch?v=GhQdlIFylQ8'
date_extracted: '2026-03-29'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Specific exception catches force explicit failure mode enumeration,
    producing more robust error handling than generic catch-alls.
  standard: >-
    The tutorial demonstrates a critical principle by showing the progression
    from no error handling (program crashes) → generic catch (all errors handled
    identically) → specific typed catches (DivideByZeroException vs
    FormatException handled differently). This progression illustrates that
    robust systems require enumerating known failure modes and handling each
    appropriately.


    This principle transfers directly to AI system building: when building
    pipelines that call LLMs, parse JSON, or hit external APIs, catching
    specific failure types (rate limit, malformed response, timeout, content
    filter) enables targeted recovery strategies — retry for rate limits,
    reformat for parse errors, fallback for content filters. A generic try/catch
    hides the failure taxonomy and makes debugging nearly impossible.
stance: >-
  Catching specific exception types rather than generic catch-all blocks
  produces more robust systems because it forces developers to enumerate and
  handle each failure mode explicitly.
related:
  - INS-260329-3FC9
  - INS-260329-D8F2
  - INS-260329-35F2
  - INS-260329-3441
  - INS-260329-4D24
---
The tutorial demonstrates a critical principle by showing the progression from no error handling (program crashes) → generic catch (all errors handled identically) → specific typed catches (DivideByZeroException vs FormatException handled differently). This progression illustrates that robust systems require enumerating known failure modes and handling each appropriately.

This principle transfers directly to AI system building: when building pipelines that call LLMs, parse JSON, or hit external APIs, catching specific failure types (rate limit, malformed response, timeout, content filter) enables targeted recovery strategies — retry for rate limits, reformat for parse errors, fallback for content filters. A generic try/catch hides the failure taxonomy and makes debugging nearly impossible.
