---
id: INS-260625-027A
domain: ai-development
topic: agent-patterns
title: Preserve the counterparty's risk signals when inserting an agent intermediary
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - intermediation
  - risk
  - abstraction-leakage
  - system-design
  - agents
sources:
  - type: youtube
    title: >-
      Building safe Payment Infrastructure for the autonomous economy — Steve
      Kaliski, Stripe
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=KLSuFPj2ld0'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Tokenizing or proxying a transaction shouldn't hide from the seller — keep
    passing the brand, last-four, and credit type their risk systems already
    depend on.
  standard: >-
    A subtle but important design constraint: shared payment tokens deliberately
    do not hide information from the seller. Even though the card is tokenized
    and scoped, Stripe still forwards the brand, last-four, and credit type so
    the seller can run their existing risk analysis exactly as before. The
    explicit goal is 'not trying to do something secret from the seller.'


    The general principle is that when you insert an intermediary or abstraction
    layer (an agent, a proxy, a tokenization service) between two parties, you
    must continue to relay the signals the downstream party built its safeguards
    around — otherwise you have silently disabled their risk controls while
    appearing to function. A proxy that starves the seller of fraud signals
    doesn't just lose convenience; it breaks the security model they were
    relying on.


    This is why the ACP design keeps the seller 'in control' and receiving risk
    data, and why relaying authoritative cart state (tax, restrictions,
    fulfillment) back through the agent to the human matters — the
    intermediation layer is a place where details get incorrectly relayed, so
    the protocol must make the true state legible to every party rather than
    letting the proxy become an information bottleneck.
stance: >-
  Inserting an agent between buyer and seller must preserve the downstream
  party's existing risk signals, or it silently breaks their safeguards.
related:
  - INS-260320-B8B0
  - INS-260323-92AD
  - INS-260403-AA09
  - INS-260605-B8AB
  - INS-260329-27DF
  - INS-260404-ED0F
---
A subtle but important design constraint: shared payment tokens deliberately do not hide information from the seller. Even though the card is tokenized and scoped, Stripe still forwards the brand, last-four, and credit type so the seller can run their existing risk analysis exactly as before. The explicit goal is 'not trying to do something secret from the seller.'

The general principle is that when you insert an intermediary or abstraction layer (an agent, a proxy, a tokenization service) between two parties, you must continue to relay the signals the downstream party built its safeguards around — otherwise you have silently disabled their risk controls while appearing to function. A proxy that starves the seller of fraud signals doesn't just lose convenience; it breaks the security model they were relying on.

This is why the ACP design keeps the seller 'in control' and receiving risk data, and why relaying authoritative cart state (tax, restrictions, fulfillment) back through the agent to the human matters — the intermediation layer is a place where details get incorrectly relayed, so the protocol must make the true state legible to every party rather than letting the proxy become an information bottleneck.
