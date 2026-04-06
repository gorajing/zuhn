---
id: INS-260403-27A5
domain: ai-development
topic: alignment
title: >-
  AI hallucination is a rational guessing strategy learned from pretraining
  incentives
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - hallucination
  - pretraining
  - reward-function
  - alignment
sources:
  - type: blog
    title: 'Shameless Guesses, Not Hallucinations'
    author: Scott Alexander
    url: 'https://www.astralcodexten.com/p/shameless-guesses-not-hallucinations'
date_extracted: '2026-04-03'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    During pretraining, guessing correctly is rewarded and guessing incorrectly
    carries no penalty, making hallucination the rational default strategy.
  standard: >-
    In pretraining, an AI is rewarded for predicting the next token correctly
    and receives no explicit punishment for wrong predictions. Over trillions of
    tokens, even wildly improbable guesses occasionally land correctly and get
    reinforced. This makes 'always guess' the dominant strategy — it raises your
    expected score from 0 to some small positive number with no downside.


    The implication is that hallucination isn't a bug or a mysterious failure
    mode — it's the emergent behavior of a rational agent optimizing its
    training objective. The real question isn't why AIs hallucinate, but why
    they sometimes don't. The answer is post-training interventions (RLHF,
    constitutional AI, etc.) that gradually suppress the base tendency to guess.
    Understanding this reframes how we approach the problem: it's not about
    fixing a defect but about better aligning the reward signal with
    truthfulness.
stance: >-
  AI hallucinations are not bizarre failure modes but optimal strategies under
  pretraining reward functions that reward correct guesses without punishing
  incorrect ones.
related:
  - INS-260325-ADF3
  - INS-260323-9773
  - INS-260325-3589
  - INS-260327-7DBF
  - INS-260329-6004
  - INS-260403-06D5
  - INS-260405-FE57
  - PRI-260324-2C9F
  - INS-260403-33E2
  - INS-260402-613D
---
In pretraining, an AI is rewarded for predicting the next token correctly and receives no explicit punishment for wrong predictions. Over trillions of tokens, even wildly improbable guesses occasionally land correctly and get reinforced. This makes 'always guess' the dominant strategy — it raises your expected score from 0 to some small positive number with no downside.

The implication is that hallucination isn't a bug or a mysterious failure mode — it's the emergent behavior of a rational agent optimizing its training objective. The real question isn't why AIs hallucinate, but why they sometimes don't. The answer is post-training interventions (RLHF, constitutional AI, etc.) that gradually suppress the base tendency to guess. Understanding this reframes how we approach the problem: it's not about fixing a defect but about better aligning the reward signal with truthfulness.
