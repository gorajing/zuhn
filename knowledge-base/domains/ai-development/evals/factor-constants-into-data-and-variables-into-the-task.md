---
id: INS-260628-6F97
domain: ai-development
topic: evals
title: Factor constants into data and variables into the task
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - evals
  - architecture
  - system-prompt
  - reusability
  - ai-sdk
sources:
  - type: youtube
    title: 'Evals Are Not Unit Tests — Ido Pesok, Vercel v0'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=L8OoYeDI_ls'
date_extracted: '2026-06-28'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Put unchanging user queries in 'data' and the things you're experimenting on
    — prompts, RAG, preprocessing, models — in the 'task', so you can swap
    variables without redoing your dataset.
  standard: >-
    Borrowing the math/programming habit of factoring out constants, Pesok
    argues the user queries are constants that belong in the data layer ('how
    many Rs in strawberry' never changes), while the system prompt,
    preprocessing, RAG configuration, and model choice are the variables you're
    actually testing and belong in the task layer. Mixing them means every
    prompt change forces a full dataset rebuild; separating them lets the suite
    scale and lets you cleanly A/B a new prompt or 'switch players' (models)
    against the same fixed court.


    The second half of the principle is that practice must mirror the game: the
    eval task should share as close to the exact production code path as
    possible. He recommends AI SDK middleware as the abstraction that holds
    preprocessing, RAG, and system-prompt logic so the same code runs in both
    the live API route and the eval harness. If your eval runs different code
    than production, you're practicing a sport you'll never play.
stance: >-
  Separating fixed inputs (data) from the components under test (task) is what
  lets an eval suite survive prompt and model changes without being rebuilt.
related:
  - INS-260625-355D
  - INS-260409-A0B4
  - INS-260628-26C6
  - INS-260628-E55B
  - PRI-260406-1AC6
---
Borrowing the math/programming habit of factoring out constants, Pesok argues the user queries are constants that belong in the data layer ('how many Rs in strawberry' never changes), while the system prompt, preprocessing, RAG configuration, and model choice are the variables you're actually testing and belong in the task layer. Mixing them means every prompt change forces a full dataset rebuild; separating them lets the suite scale and lets you cleanly A/B a new prompt or 'switch players' (models) against the same fixed court.

The second half of the principle is that practice must mirror the game: the eval task should share as close to the exact production code path as possible. He recommends AI SDK middleware as the abstraction that holds preprocessing, RAG, and system-prompt logic so the same code runs in both the live API route and the eval harness. If your eval runs different code than production, you're practicing a sport you'll never play.
