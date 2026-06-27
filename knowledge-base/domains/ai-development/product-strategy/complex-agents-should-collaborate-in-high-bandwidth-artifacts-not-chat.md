---
id: INS-260626-7F5B
domain: ai-development
topic: product-strategy
title: 'Complex agents should collaborate in high-bandwidth artifacts, not chat'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - interface-design
  - chat
  - artifacts
  - vertical-ai
  - human-agent-collaboration
sources:
  - type: youtube
    title: 'Agents need more than a chat - Jacob Lauritzen, CTO Legora'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=XNtkiQJ49Ps'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Use chat as a flexible input channel, but make the main human-agent
    collaboration happen in persistent, high-bandwidth artifacts like documents
    and review tables.
  standard: >-
    Lauritzen argues that chat is one-dimensional and low-bandwidth: it
    collapses a large tree of work into a single linear stream, so as the work
    DAG grows 10x or 100x, a chat would force the human to answer 50 questions
    with no context to answer them well. The fix is to collaborate in
    high-bandwidth, persistent artifacts that mirror how humans actually work
    together. Legora's examples: a document where you highlight clause three and
    only clause three changes, add comments, tag agents or collaborators, and
    hand off sections to specialized agents; and a 'tabular review' — a
    primitive users already understand — where the agent reviews all contracts
    and flags only the items it wants a human take on, giving high control and
    fast review. These surfaces vary by vertical and task.


    He is careful to keep chat as input ('extremely flexible, allows you to do a
    lot of stuff') while rejecting it as the main mode of collaboration. The
    deeper point: language is the universal human interface only because humans
    are limited to language — he wished he could draw an interactive org chart
    instead of describing it verbally. Agents are not humans and should not be
    constrained to human language, which opens the design space to richer,
    structured, persistent collaboration interfaces.
stance: >-
  Chat is too low-bandwidth to be the primary collaboration surface for complex
  agents; persistent domain artifacts are.
related:
  - INS-260410-5EC3
  - INS-260409-5CC6
  - INS-260605-90CF
  - INS-260605-2E27
  - INS-260625-4DE2
  - INS-260626-8723
  - INS-260626-B38C
  - INS-260327-13B3
  - INS-260327-7F56
  - INS-260605-50FB
---
Lauritzen argues that chat is one-dimensional and low-bandwidth: it collapses a large tree of work into a single linear stream, so as the work DAG grows 10x or 100x, a chat would force the human to answer 50 questions with no context to answer them well. The fix is to collaborate in high-bandwidth, persistent artifacts that mirror how humans actually work together. Legora's examples: a document where you highlight clause three and only clause three changes, add comments, tag agents or collaborators, and hand off sections to specialized agents; and a 'tabular review' — a primitive users already understand — where the agent reviews all contracts and flags only the items it wants a human take on, giving high control and fast review. These surfaces vary by vertical and task.

He is careful to keep chat as input ('extremely flexible, allows you to do a lot of stuff') while rejecting it as the main mode of collaboration. The deeper point: language is the universal human interface only because humans are limited to language — he wished he could draw an interactive org chart instead of describing it verbally. Agents are not humans and should not be constrained to human language, which opens the design space to richer, structured, persistent collaboration interfaces.
