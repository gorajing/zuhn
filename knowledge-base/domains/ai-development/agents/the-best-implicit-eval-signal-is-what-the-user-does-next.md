---
id: INS-260605-5D14
domain: ai-development
topic: agents
title: The best implicit eval signal is what the user does next
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - feedback
  - implicit-signals
  - evals
  - user-behavior
  - golden-dataset
sources:
  - type: youtube
    title: >-
      Agent Optimization with Pydantic AI: GEPA, Evals, Feedback Loops — Samuel
      Colvin, Pydantic
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=A48uhxfxbsM'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    If the user replies 'no, I meant X,' the agent failed; if they say thanks
    and leave, it worked — that beats any thumbs button.
  standard: >-
    Colvin's number-one piece of feedback on explicit user ratings is that 'no
    one clicks them,' and those who do may click maliciously. If you do collect
    explicit feedback, keep it binary thumbs up/down. But the strongest signal
    is implicit: in a chat, look at what the user did next. A follow-up like
    'you idiot, try again' (or more realistically 'no, I mean X') is strong
    evidence the agent behaved badly; a 'thanks, that's great' or simply leaving
    implies success. He draws the analogy to classic Google ranking — judging a
    page by whether the user bounced straight back to search. This reframes
    feedback collection as behavioral instrumentation rather than survey design,
    and ties back to evals: annotations and implicit signals are a practical way
    to bootstrap a golden dataset you don't yet have.
stance: >-
  Observing the user's next action is a stronger quality signal than explicit
  thumbs-up/down feedback, which almost no one clicks.
related:
  - INS-260605-2A69
  - INS-260321-2482
  - INS-260403-14E0
  - INS-260329-7F3D
  - INS-260405-A992
---
Colvin's number-one piece of feedback on explicit user ratings is that 'no one clicks them,' and those who do may click maliciously. If you do collect explicit feedback, keep it binary thumbs up/down. But the strongest signal is implicit: in a chat, look at what the user did next. A follow-up like 'you idiot, try again' (or more realistically 'no, I mean X') is strong evidence the agent behaved badly; a 'thanks, that's great' or simply leaving implies success. He draws the analogy to classic Google ranking — judging a page by whether the user bounced straight back to search. This reframes feedback collection as behavioral instrumentation rather than survey design, and ties back to evals: annotations and implicit signals are a practical way to bootstrap a golden dataset you don't yet have.
