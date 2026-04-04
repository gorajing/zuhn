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
    author:
      - '@type': Person
        name: Scott Alexander
        url: 'https://substack.com/@astralcodexten'
        description: null
        identifier: 'user:12009663'
        image:
          '@type': ImageObject
          contentUrl: >-
            https://substackcdn.com/image/fetch/$s_!HTBd!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F7b500d22-1176-42ad-afaa-5d72bc36a809_44x44.png
          thumbnailUrl: >-
            https://substackcdn.com/image/fetch/$s_!HTBd!,w_128,h_128,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F7b500d22-1176-42ad-afaa-5d72bc36a809_44x44.png
    url: 'https://www.astralcodexten.com/p/shameless-guesses-not-hallucinations'
date_extracted: '2026-04-03'
last_accessed: null
access_count: 0
indexed: false
embedded: false
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
---
In pretraining, an AI is rewarded for predicting the next token correctly and receives no explicit punishment for wrong predictions. Over trillions of tokens, even wildly improbable guesses occasionally land correctly and get reinforced. This makes 'always guess' the dominant strategy — it raises your expected score from 0 to some small positive number with no downside.

The implication is that hallucination isn't a bug or a mysterious failure mode — it's the emergent behavior of a rational agent optimizing its training objective. The real question isn't why AIs hallucinate, but why they sometimes don't. The answer is post-training interventions (RLHF, constitutional AI, etc.) that gradually suppress the base tendency to guess. Understanding this reframes how we approach the problem: it's not about fixing a defect but about better aligning the reward signal with truthfulness.
