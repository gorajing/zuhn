---
id: INS-260605-E831
domain: ai-development
topic: infrastructure
title: >-
  Variable-length flash attention eliminates the compute wasted on padding
  tokens
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - flash-attention
  - batching
  - padding
  - inference-efficiency
  - throughput
sources:
  - type: youtube
    title: >-
      The Small Model Infrastructure Nobody Built (So We Did) — Filip Makraduli,
      Superlinked
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=qdh_x-uRs9g'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    When batched requests have uneven token counts and are all padded to the
    maximum length, the model burns compute on empty padding tokens —
    variable-length flash attention avoids padding so no compute is wasted.
  standard: >-
    Token-based batching groups requests of differing lengths. The naive
    implementation pads every request in the batch up to the longest sequence so
    the tensors are rectangular — but that means a short request padded to a
    long request's length spends compute processing empty tokens, scaling waste
    with the variance in request lengths. 


    Variable-length flash attention handles ragged batches without padding to a
    common maximum, so the engine only does work proportional to real tokens.
    Superlinked calls this a key differentiator in their approach. 


    This is a concrete instance of a general inference-efficiency principle: the
    cost of serving is driven not just by total useful tokens but by structural
    waste in how work is batched and padded. Eliminating that waste — rather
    than adding hardware — is often the higher-leverage optimization.
stance: >-
  Token-based batching that pads all requests to the longest sequence wastes
  compute on empty tokens; variable-length flash attention recovers it.
related:
  - INS-260321-A5D4
  - INS-260320-9FD5
  - INS-260329-818A
  - INS-260410-CDE6
  - INS-260410-699C
  - INS-260410-8243
  - INS-260605-2531
  - INS-260605-048B
  - PRI-260411-9CB1
  - INS-260625-78EC
---
Token-based batching groups requests of differing lengths. The naive implementation pads every request in the batch up to the longest sequence so the tensors are rectangular — but that means a short request padded to a long request's length spends compute processing empty tokens, scaling waste with the variance in request lengths. 

Variable-length flash attention handles ragged batches without padding to a common maximum, so the engine only does work proportional to real tokens. Superlinked calls this a key differentiator in their approach. 

This is a concrete instance of a general inference-efficiency principle: the cost of serving is driven not just by total useful tokens but by structural waste in how work is batched and padded. Eliminating that waste — rather than adding hardware — is often the higher-leverage optimization.
