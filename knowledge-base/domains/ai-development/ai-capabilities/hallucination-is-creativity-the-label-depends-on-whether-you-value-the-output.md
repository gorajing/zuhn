---
id: INS-260323-C10D
domain: ai-development
topic: ai-capabilities
title: >-
  Hallucination is creativity — the label depends on whether you value the
  output
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - hallucination
  - creativity
  - legal-ai
  - andreessen
sources:
  - type: youtube
    title: >-
      Marc Andreessen: Future of the Internet, Technology, and AI | Lex Fridman
      Podcast #386
    author: Lex Fridman
    url: 'https://www.youtube.com/watch?v=-hxeDjAxvJ8'
date_extracted: '2026-03-23'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    LLM hallucination and creativity are the same mechanism — engineers call it
    hallucination when it produces errors, and creativity when it generates
    novel useful ideas.
  standard: >-
    Andreessen shares a revealing anecdote: his firm assumed law firms would
    want maximally truthful LLMs to avoid fake citations. Instead, the law firm
    wanted creative mode for generating novel legal arguments and case theories
    — they'd cross-check citations manually. The insight is that hallucination
    and creativity are the same underlying capability; the label depends on
    context.


    This reframing is practically important: rather than trying to eliminate
    hallucination entirely (which may be impossible without killing creativity),
    the better approach is building systems with multiple modes — creative
    exploration paired with literal verification. The legal use case suggests a
    general architecture: creative LLM for hypothesis generation, literal LLM
    for fact-checking, human in the loop for judgment calls.
related:
  - INS-260330-2B3F
  - INS-260325-ADF3
  - INS-260323-9773
  - PRI-260323-1CF9
  - INS-260323-1930
  - INS-260322-38D8
  - INS-260323-369C
  - INS-260323-FCC1
  - INS-260327-7214
  - INS-260327-6EFB
stance: LLM hallucination and creativity are the same mechanism
evidence:
  - id: INS-260330-2B3F
    type: EXTENDS
    classified_at: '2026-04-02'
  - id: INS-260323-1930
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
  - id: INS-260322-38D8
    type: SUPPORTS
    classified_at: '2026-04-02'
  - id: INS-260323-369C
    type: CHALLENGES
    classified_at: '2026-04-02'
  - id: INS-260323-FCC1
    type: EXTENDS
    classified_at: '2026-04-02'
  - id: INS-260327-6EFB
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
---
Andreessen shares a revealing anecdote: his firm assumed law firms would want maximally truthful LLMs to avoid fake citations. Instead, the law firm wanted creative mode for generating novel legal arguments and case theories — they'd cross-check citations manually. The insight is that hallucination and creativity are the same underlying capability; the label depends on context.

This reframing is practically important: rather than trying to eliminate hallucination entirely (which may be impossible without killing creativity), the better approach is building systems with multiple modes — creative exploration paired with literal verification. The legal use case suggests a general architecture: creative LLM for hypothesis generation, literal LLM for fact-checking, human in the loop for judgment calls.
