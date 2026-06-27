---
id: INS-260627-6E58
domain: ai-development
topic: tooling
title: Generate Playwright code instead of using generic browser-use tools
actionability: immediate
confidence: high
shelf_life: time-sensitive
status: active
tags:
  - browser-automation
  - playwright
  - tool-design
  - verification
  - cost-optimization
sources:
  - type: youtube
    title: 'The 3 Pillars of Autonomy – Michele Catasta, Replit'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=MLhAA9yguwM'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Replit writes Playwright code directly rather than calling generic
    click/fill browser tools — a superset of expressiveness that's ~10x cheaper
    and faster than computer use and doubles as a regression suite.
  standard: >-
    Browser-testing agents typically expose a fixed set of generic tools (new
    tab, click, fill form). Catasta's Tesla-analogy critique: that finite tool
    cardinality covers ~99% of interactions but always misses a long tail of
    idiosyncratic interactions that are hard to map to discrete tool calls.
    Replit's approach is to have the LLM write Playwright code directly. LLMs
    are 'amazing' at writing Playwright; the generated code is a superset of
    what fixed tools can express; and — uniquely — every test written is
    reusable, so the act of testing simultaneously builds a regression suite the
    agent can rerun indefinitely. 


    The verification stack is layered cheap-to-expensive: static analysis (LSPs)
    → code execution/debugging → unit tests (only functional correctness) → API
    testing (only endpoints) → browser testing for full web-app behavior. Within
    browser testing, 'computer use' (screenshot-driven, 1:1 with the UI) is
    expensive and slow; 'browser use' (DOM via abstractions) is the middle
    ground; generated Playwright is the most efficient — roughly an order of
    magnitude cheaper and faster than computer use, with screenshot-based
    computer use kept only as a fallback when programmatic interaction fails.
    (Time-sensitive: specific tool/library leadership shifts quickly.)
stance: >-
  Having agents write Playwright code beats exposing generic browser tools
  because it is more expressive, cheaper, and produces a reusable regression
  suite.
related:
  - INS-260329-9745
  - INS-260330-202A
  - INS-260625-E10F
  - INS-260403-7D7A
  - INS-260323-C984
  - INS-260329-500E
  - INS-260625-E696
---
Browser-testing agents typically expose a fixed set of generic tools (new tab, click, fill form). Catasta's Tesla-analogy critique: that finite tool cardinality covers ~99% of interactions but always misses a long tail of idiosyncratic interactions that are hard to map to discrete tool calls. Replit's approach is to have the LLM write Playwright code directly. LLMs are 'amazing' at writing Playwright; the generated code is a superset of what fixed tools can express; and — uniquely — every test written is reusable, so the act of testing simultaneously builds a regression suite the agent can rerun indefinitely. 

The verification stack is layered cheap-to-expensive: static analysis (LSPs) → code execution/debugging → unit tests (only functional correctness) → API testing (only endpoints) → browser testing for full web-app behavior. Within browser testing, 'computer use' (screenshot-driven, 1:1 with the UI) is expensive and slow; 'browser use' (DOM via abstractions) is the middle ground; generated Playwright is the most efficient — roughly an order of magnitude cheaper and faster than computer use, with screenshot-based computer use kept only as a fallback when programmatic interaction fails. (Time-sensitive: specific tool/library leadership shifts quickly.)
