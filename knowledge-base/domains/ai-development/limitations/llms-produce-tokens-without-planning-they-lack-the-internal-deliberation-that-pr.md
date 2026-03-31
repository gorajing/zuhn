---
id: INS-260323-A5EC
domain: ai-development
topic: limitations
title: >-
  LLMs produce tokens without planning -- they lack the internal deliberation
  that precedes human speech
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - llms
  - reasoning
  - planning
  - lecun
sources:
  - type: youtube
    title: >-
      Yann Lecun: Meta AI, Open Source, Limits of LLMs, AGI & the Future of AI |
      Lex Fridman Podcast #416
    author: Lex Fridman
    url: 'https://www.youtube.com/watch?v=5t1vTLU7s40'
date_extracted: '2026-03-23'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    LLMs generate one token at a time without planning the full answer first,
    unlike humans who form an abstract representation of their response before
    mapping it to language -- this is a fundamental architectural limitation.
  standard: >-
    LeCun identifies a core architectural gap: when humans speak, we plan our
    answer in an abstract representation space before producing words. As
    bilinguals, we think the same thought regardless of which language we'll
    express it in -- the thinking precedes and is independent of the language
    output. LLMs skip this step entirely, producing tokens sequentially without
    any internal deliberation or planning.


    This explains why LLMs can produce fluent text that is nevertheless
    incoherent at a reasoning level -- they're generating plausible next-tokens
    without a coherent plan for the full response. For AI builders, this
    suggests that the next architectural breakthrough won't come from scaling
    current LLMs but from systems that separate thinking/planning from language
    generation. The practical implication is to design AI systems that plan
    before they speak rather than hoping coherent reasoning emerges from
    token-by-token generation.
related:
  - PRI-260328-D893
  - PRI-260323-1CF9
  - INS-260323-8D12
  - INS-260323-197A
  - INS-260322-32E3
stance: >-
  LLMs generate one token at a time without planning the full answer first,
  unlike humans who form an abstract representation of their response befor...
---
LeCun identifies a core architectural gap: when humans speak, we plan our answer in an abstract representation space before producing words. As bilinguals, we think the same thought regardless of which language we'll express it in -- the thinking precedes and is independent of the language output. LLMs skip this step entirely, producing tokens sequentially without any internal deliberation or planning.

This explains why LLMs can produce fluent text that is nevertheless incoherent at a reasoning level -- they're generating plausible next-tokens without a coherent plan for the full response. For AI builders, this suggests that the next architectural breakthrough won't come from scaling current LLMs but from systems that separate thinking/planning from language generation. The practical implication is to design AI systems that plan before they speak rather than hoping coherent reasoning emerges from token-by-token generation.
