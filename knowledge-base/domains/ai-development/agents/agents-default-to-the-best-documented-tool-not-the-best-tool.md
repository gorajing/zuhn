---
id: INS-260626-0E82
domain: ai-development
topic: agents
title: 'Agents default to the best-documented tool, not the best tool'
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - agent-behavior
  - tool-selection
  - defaults
  - lock-in
  - market-entry
sources:
  - type: youtube
    title: The AI Agent Economy Is Here
    author: Y Combinator
    url: 'https://www.youtube.com/watch?v=Q8wVMdwhlh4'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Claude Code chose deprecated Whisper V1 over Grok (200x faster, 10x cheaper)
    simply because Whisper had more examples and clearer docs.
  standard: >-
    Gary's transcription pipeline ran an hour to process an hour of video
    because Claude Code reached for Whisper V1 — a years-old, near-deprecated
    model — instead of a Grok transcription model that was 200x faster and 10x
    cheaper. The reason wasn't capability: Grok's documentation was hard to
    parse while Whisper had far more examples online. Agents reasonably infer
    that the most-documented option is the best one, so they perpetuate outdated
    defaults.


    This cuts two ways and is the actionable nuance. For incumbents, abundant
    existing examples create a self-reinforcing moat — agents keep choosing what
    other agents already chose. For challengers, the fact that agents pick on
    docs rather than merit means a genuinely better product with superior,
    agent-parsable documentation can break in and displace a technically
    inferior default. The panel framed the still-immature state of agent
    tool-selection as good news: 'it means things haven't progressed to a point
    where you can't break in and create something better.'
stance: >-
  Agents select tools by documentation abundance and example density rather than
  by actual quality, creating both incumbent lock-in and an opening for
  newcomers.
related:
  - INS-260605-158D
  - INS-260320-EF3A
  - INS-260423-3F3B
  - INS-260329-9115
  - INS-260403-52C4
---
Gary's transcription pipeline ran an hour to process an hour of video because Claude Code reached for Whisper V1 — a years-old, near-deprecated model — instead of a Grok transcription model that was 200x faster and 10x cheaper. The reason wasn't capability: Grok's documentation was hard to parse while Whisper had far more examples online. Agents reasonably infer that the most-documented option is the best one, so they perpetuate outdated defaults.

This cuts two ways and is the actionable nuance. For incumbents, abundant existing examples create a self-reinforcing moat — agents keep choosing what other agents already chose. For challengers, the fact that agents pick on docs rather than merit means a genuinely better product with superior, agent-parsable documentation can break in and displace a technically inferior default. The panel framed the still-immature state of agent tool-selection as good news: 'it means things haven't progressed to a point where you can't break in and create something better.'
