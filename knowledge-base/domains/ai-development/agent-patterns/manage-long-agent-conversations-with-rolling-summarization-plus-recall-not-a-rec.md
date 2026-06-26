---
id: INS-260626-88B8
domain: ai-development
topic: agent-patterns
title: >-
  Manage long agent conversations with rolling summarization plus recall, not a
  recency window
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - long-context
  - memory
  - summarization
  - recall
  - context-management
sources:
  - type: youtube
    title: >-
      Agents in Production: How OpenGov Built and Scaled OG Assist - Gabe De
      Mesa, OpenGov
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=4uFVSLgD2Q4'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Instead of always keeping the most recent N messages, OpenGov maintains a
    rolling summary every N messages and lets the agent do recall over that
    summary.
  standard: >-
    Hitting token limits and context overload on long OG Assist conversations,
    OpenGov found that 'rolling summarization was more effective than always
    stuffing in the latest and most recent messages.' They keep a running
    summary that refreshes after N messages, retain only the N-minus-5 or
    N-minus-10 most recent raw messages, and add a memory component so the agent
    can recall details from far earlier in the thread (e.g. '100 messages
    above') by querying the summary rather than the raw transcript.


    The insight is that a naive recency window throws away exactly the
    long-range references users expect an assistant to remember. Compressing old
    turns into a summary and making that summary recallable preserves the gist
    of the whole conversation at a fraction of the token cost, while the small
    raw-message tail preserves recent verbatim fidelity. This is the
    layered-memory pattern — hot recent context plus warm summarized history
    plus on-demand recall — and it is a more durable answer to context limits
    than simply truncating, because it degrades gracefully as conversations grow
    unboundedly long.
stance: >-
  Rolling summarization with recall over the summary manages long agent
  conversations better than always stuffing the most recent messages.
related:
  - INS-260409-5CF4
  - INS-260501-EA32
  - INS-260524-D5DB
  - INS-260404-D242
  - INS-260403-BFF3
  - INS-260605-8BEA
---
Hitting token limits and context overload on long OG Assist conversations, OpenGov found that 'rolling summarization was more effective than always stuffing in the latest and most recent messages.' They keep a running summary that refreshes after N messages, retain only the N-minus-5 or N-minus-10 most recent raw messages, and add a memory component so the agent can recall details from far earlier in the thread (e.g. '100 messages above') by querying the summary rather than the raw transcript.

The insight is that a naive recency window throws away exactly the long-range references users expect an assistant to remember. Compressing old turns into a summary and making that summary recallable preserves the gist of the whole conversation at a fraction of the token cost, while the small raw-message tail preserves recent verbatim fidelity. This is the layered-memory pattern — hot recent context plus warm summarized history plus on-demand recall — and it is a more durable answer to context limits than simply truncating, because it degrades gracefully as conversations grow unboundedly long.
