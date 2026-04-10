---
id: INS-260410-0A28
domain: ai-development
topic: alignment
title: Prompt injection is cross-origin data being treated as trusted instructions
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - prompt-injection
  - security
  - tool-use
  - agents
sources:
  - type: youtube
    title: '[1hr Talk] Intro to Large Language Models'
    author: Andrej Karpathy
    url: 'https://www.youtube.com/watch?v=zjkBMFhNj_g'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Prompt injection is fundamentally a trust-boundary failure: retrieved web
    pages, shared docs, and images are parsed as instructions when they should
    be treated as untrusted data.
  standard: >-
    Karpathy shows two potent injection attacks: an image with faint white text
    that hijacks ChatGPT's response, and a Google Doc that instructs Bard to
    exfiltrate a user's private data by encoding it into an image URL. Google's
    content security policy blocked the first exfiltration path, but attackers
    pivoted to Google Apps Scripts to write into an attacker-controlled Doc
    inside the trusted domain. The pattern recurs across systems.


    The root cause is architectural: tool-using LLMs concatenate instructions
    from the user with content retrieved from external sources (web pages, docs,
    shared files) into a single prompt stream, with no reliable way for the
    model to distinguish 'what the user asked' from 'what a third party wrote.'
    This is structurally identical to SQL injection or XSS — a trust boundary
    that isn't enforced mechanically gets violated by anyone who controls the
    data side.


    The implication is that 'better prompting' or training cannot fully solve
    this. Real defense requires structural separation: signed instructions,
    content-origin labeling, sandboxed tool scopes, allowlists for outbound
    URLs, and human-in-the-loop gating for sensitive actions. Products that give
    LLMs tool access without these boundaries are shipping the equivalent of a
    web app with no input sanitization.
stance: >-
  Prompt injection is the LLM-era equivalent of mixing untrusted data with
  privileged code, and will remain exploitable until tool-using LLMs enforce a
  clear separation between instructions and retrieved content.
related:
  - INS-260329-D6AA
  - INS-260323-8D12
  - INS-260327-7F32
  - INS-260409-45C3
  - INS-260402-2D7B
---
Karpathy shows two potent injection attacks: an image with faint white text that hijacks ChatGPT's response, and a Google Doc that instructs Bard to exfiltrate a user's private data by encoding it into an image URL. Google's content security policy blocked the first exfiltration path, but attackers pivoted to Google Apps Scripts to write into an attacker-controlled Doc inside the trusted domain. The pattern recurs across systems.

The root cause is architectural: tool-using LLMs concatenate instructions from the user with content retrieved from external sources (web pages, docs, shared files) into a single prompt stream, with no reliable way for the model to distinguish 'what the user asked' from 'what a third party wrote.' This is structurally identical to SQL injection or XSS — a trust boundary that isn't enforced mechanically gets violated by anyone who controls the data side.

The implication is that 'better prompting' or training cannot fully solve this. Real defense requires structural separation: signed instructions, content-origin labeling, sandboxed tool scopes, allowlists for outbound URLs, and human-in-the-loop gating for sensitive actions. Products that give LLMs tool access without these boundaries are shipping the equivalent of a web app with no input sanitization.
