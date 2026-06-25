---
id: INS-260605-C122
domain: ai-development
topic: product-strategy
title: Keep users in their existing tools and let agents produce editable drafts
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - human-in-the-loop
  - ux
  - drafts
  - product-design
sources:
  - type: youtube
    title: >-
      A Piece of Pi: Embedding The OpenClaw Coding Agent In Your Product —
      Matthias Luebken, Tavon
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=vAIDdLKB6-w'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Surface agent output as a draft inside the tool the user already lives in,
    so the heavy agent machinery stays invisible.
  standard: >-
    In the sales pipeline demo, an email arrives, the LLM decides whether it's
    relevant, associates it to a case session, and the agents do many tool calls
    under the hood to produce a draft reply. The design principle Luebken
    emphasizes: 'let users stay in email, let them stay in the inbox and
    drafts.' The dashboard is just an admin interface — the user's real workflow
    never leaves their inbox, and they receive a freely editable draft.


    This keeps the human in the loop as the final editor while hiding the
    multi-agent complexity. The product value is delivered as a draft the user
    reviews and sends, not as an autonomous action, which lowers trust barriers
    and fits naturally into existing habits rather than demanding a new
    interface.
stance: >-
  Agent products win adoption by leaving users inside familiar interfaces and
  delivering reviewable drafts rather than autonomous actions.
related:
  - INS-260605-9A01
  - INS-260605-B5A2
  - INS-260530-D34F
  - INS-260625-CBC7
  - INS-260605-E693
---
In the sales pipeline demo, an email arrives, the LLM decides whether it's relevant, associates it to a case session, and the agents do many tool calls under the hood to produce a draft reply. The design principle Luebken emphasizes: 'let users stay in email, let them stay in the inbox and drafts.' The dashboard is just an admin interface — the user's real workflow never leaves their inbox, and they receive a freely editable draft.

This keeps the human in the loop as the final editor while hiding the multi-agent complexity. The product value is delivered as a draft the user reviews and sends, not as an autonomous action, which lowers trust barriers and fits naturally into existing habits rather than demanding a new interface.
