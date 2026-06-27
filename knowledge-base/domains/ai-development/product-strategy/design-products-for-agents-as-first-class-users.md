---
id: INS-260626-C59C
domain: ai-development
topic: product-strategy
title: Design products for agents as first-class users
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - developer-experience
  - agent-dx
  - api-design
  - product-design
  - discoverability
sources:
  - type: youtube
    title: 'Code Mode: Let the Code do the Talking - Sunil Pai, Cloudflare'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=8txf05vVVl4'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Your 'next billion users' are code-generating robots — they dream in types
    and syntax errors, so build markdown docs, actionable error messages, and
    search-based discoverability for them, not just human UIs.
  standard: >-
    Historically there was an accepted dichotomy: technical people get code and
    infinite power to interact with any system, while non-technical people get
    pre-built buttons and forms ('$7/month apps'). LLMs that generate and run
    code break this boundary — every person now has a 'buddy' that can emit code
    to interact with whatever system is exposed to it, turning 'rename these
    files by date and location' into generated, safely-executed code.


    The strategic consequence for builders: the things interacting with your
    systems are increasingly agents, even though your ultimate customers are
    still humans. The speaker frames it bluntly — your next billion users are
    'little robots that generate code for you,' and they hang out in registries,
    not pubs. They 'dream in types and syntax errors.'


    So the developer experience to optimize is the agent's: docs that are
    markdown, error messages that tell the agent what to do next,
    discoverability via search, and typed APIs. He notes UI/React programmers
    are well-positioned here precisely because they've been closest to users.
    The actionable takeaway: audit whether an agent could discover, understand,
    and correctly use your system from its docs and errors alone — that DX is
    becoming a primary product surface.
stance: >-
  Products should treat code-generating AI agents as a primary user persona,
  optimizing docs, errors, and discoverability for them.
related:
  - INS-260327-D8D1
  - INS-260330-83D5
  - INS-260403-F60C
  - INS-260409-A682
  - INS-260625-D295
  - INS-260410-56F7
  - INS-260410-8767
---
Historically there was an accepted dichotomy: technical people get code and infinite power to interact with any system, while non-technical people get pre-built buttons and forms ('$7/month apps'). LLMs that generate and run code break this boundary — every person now has a 'buddy' that can emit code to interact with whatever system is exposed to it, turning 'rename these files by date and location' into generated, safely-executed code.

The strategic consequence for builders: the things interacting with your systems are increasingly agents, even though your ultimate customers are still humans. The speaker frames it bluntly — your next billion users are 'little robots that generate code for you,' and they hang out in registries, not pubs. They 'dream in types and syntax errors.'

So the developer experience to optimize is the agent's: docs that are markdown, error messages that tell the agent what to do next, discoverability via search, and typed APIs. He notes UI/React programmers are well-positioned here precisely because they've been closest to users. The actionable takeaway: audit whether an agent could discover, understand, and correctly use your system from its docs and errors alone — that DX is becoming a primary product surface.
