---
id: INS-260323-B309
domain: ai-development
topic: limitations
title: LLMs are wide-and-shallow while formal computation is narrow-and-deep
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - llms
  - computation
  - wolfram
  - architecture-tradeoffs
sources:
  - type: youtube
    title: >-
      Stephen Wolfram: ChatGPT and the Nature of Truth, Reality & Computation |
      Lex Fridman Podcast #376
    author: Lex Fridman
    url: 'https://www.youtube.com/watch?v=PdE-waSx-d8'
date_extracted: '2026-03-23'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    LLMs match statistical patterns from human-generated text (wide, shallow),
    while formal computational systems like Wolfram Alpha build deep chains of
    logical inference from structured knowledge (narrow, deep).
  standard: >-
    Wolfram frames LLMs as systems that forage from what humans have already
    written, producing outputs that are 'like what's been said on the web.' This
    is fundamentally different from computation that can derive new results
    through deep logical chains. LLMs perform shallow computation on vast
    training data; formal systems perform deep computation on carefully
    structured knowledge.


    The practical architecture insight is that the most powerful AI systems will
    combine both: LLMs for natural language understanding and broad context,
    formal systems for reliable multi-step reasoning. This is exactly what the
    ChatGPT-Wolfram Alpha integration demonstrates. For system builders, this
    means the question isn't 'which approach wins' but 'how do you route each
    task to the right computational substrate.'
related:
  - INS-260325-E62D
  - INS-260325-05EC
  - INS-260330-B5D2
  - INS-260402-3FD8
  - INS-260329-19B3
  - INS-260329-71AB
  - PRI-260328-D893
  - INS-260325-C6BB
  - INS-260326-E0CB
  - INS-260327-991D
stance: >-
  LLMs match statistical patterns from human-generated text (wide, shallow),
  while formal computational systems like Wolfram Alpha build deep chains ...
evidence:
  - id: INS-260329-19B3
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
  - id: INS-260329-71AB
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
  - id: INS-260325-C6BB
    type: SUPPORTS
    classified_at: '2026-04-02'
---
Wolfram frames LLMs as systems that forage from what humans have already written, producing outputs that are 'like what's been said on the web.' This is fundamentally different from computation that can derive new results through deep logical chains. LLMs perform shallow computation on vast training data; formal systems perform deep computation on carefully structured knowledge.

The practical architecture insight is that the most powerful AI systems will combine both: LLMs for natural language understanding and broad context, formal systems for reliable multi-step reasoning. This is exactly what the ChatGPT-Wolfram Alpha integration demonstrates. For system builders, this means the question isn't 'which approach wins' but 'how do you route each task to the right computational substrate.'
