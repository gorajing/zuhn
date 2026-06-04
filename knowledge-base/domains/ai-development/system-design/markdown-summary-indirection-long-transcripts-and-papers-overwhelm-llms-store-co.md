---
id: INS-260514-23D6
domain: ai-development
topic: system-design
title: >-
  Markdown-summary indirection: long transcripts and papers overwhelm LLMs —
  store concise summaries in your DB, not raw content
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - context-management
  - knowledge-bases
  - markdown-summaries
  - rag-design
  - indirection
sources:
  - type: youtube
    title: >-
      AI Agents vs Skills vs Automations: What Every Bench Scientist Needs to
      Know
    author: The Biotech Career Coach
    url: 'https://youtu.be/fHr44hzbVxY'
date_extracted: '2026-05-14'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Don't index raw long-form documents in your LLM-backed knowledge base —
    write a concise markdown summary per item and index THOSE. 100 hour-long
    transcripts overwhelm the LLM; 100 markdown summaries don't.
  standard: >-
    Karina's design pattern (shared in the conversation) for her coaching
    knowledge base: after every coaching session she has Claude generate a
    markdown synopsis of the actual substance of the conversation, and that
    synopsis (not the raw transcript) goes into her database. When the LLM
    queries the DB, it sees a small dense summary, not an hour-long transcript.
    The pattern generalizes: 500 hours of raw coaching transcripts × 60 minutes
    each = an unworkable amount of context. 500 markdown summaries × 1 page each
    = a queryable knowledge base. The same pattern applies to literature review:
    don't try to RAG over hundreds of full papers; have an upstream pass that
    writes a 1-page markdown summary per paper (what's the question, what's the
    method, what's the key finding, what's the limitation), index those, and use
    the raw paper only when the user drills into a specific summary. Why this
    works: LLMs degrade quickly with context size (lost-in-the-middle, attention
    dilution), and most of the information density in a long document is
    repetition or formality. A well-constructed summary preserves the dense
    signal and drops the noise. The architectural lesson: when designing an
    LLM-backed knowledge base, the input transformation pipeline (what gets
    indexed) is more important than the retrieval mechanism. Build summaries on
    ingest, not at query time.
stance: >-
  When building a personal knowledge tool on top of long-form content (coaching
  transcripts, scientific papers), don't index the raw documents — write a
  concise markdown summary per item and index those; LLMs can't reason
  effectively over a hundred hour-long transcripts directly, but they can reason
  brilliantly over a hundred 1-page markdown summaries.
related:
  - INS-260329-3FF4
  - INS-260403-3705
  - INS-260409-D6D8
  - INS-260410-2F8D
  - INS-260329-63DD
  - INS-260320-47FA
  - PRI-260409-9D7B
---
Karina's design pattern (shared in the conversation) for her coaching knowledge base: after every coaching session she has Claude generate a markdown synopsis of the actual substance of the conversation, and that synopsis (not the raw transcript) goes into her database. When the LLM queries the DB, it sees a small dense summary, not an hour-long transcript. The pattern generalizes: 500 hours of raw coaching transcripts × 60 minutes each = an unworkable amount of context. 500 markdown summaries × 1 page each = a queryable knowledge base. The same pattern applies to literature review: don't try to RAG over hundreds of full papers; have an upstream pass that writes a 1-page markdown summary per paper (what's the question, what's the method, what's the key finding, what's the limitation), index those, and use the raw paper only when the user drills into a specific summary. Why this works: LLMs degrade quickly with context size (lost-in-the-middle, attention dilution), and most of the information density in a long document is repetition or formality. A well-constructed summary preserves the dense signal and drops the noise. The architectural lesson: when designing an LLM-backed knowledge base, the input transformation pipeline (what gets indexed) is more important than the retrieval mechanism. Build summaries on ingest, not at query time.
