---
id: INS-260323-9773
domain: ai-development
topic: limitations
title: >-
  Hallucinations are mathematically unfixable in probabilistic models — OpenAI
  admits it
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - ai-skepticism
  - zitron
  - hallucinations
  - probabilistic
  - fundamental-limitation
sources:
  - type: youtube
    title: AI is the Biggest Bubble of All Time ft. ED ZITRON
    author: The Ben and Emil Show
    url: 'https://youtu.be/L5b-P-ZN-LI'
date_extracted: '2026-03-23'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    OpenAI's own research confirms hallucinations cannot be eliminated even with
    perfect training data because they are inherent to probabilistic generation
    — and reasoning models make it worse by multiplying the dice rolls.
  standard: >-
    OpenAI published research confirming what critics have argued:
    hallucinations are an inherent property of probabilistic text generation,
    not a bug to be fixed with better data. Every output is a new generation,
    never identical, always carrying nonzero error probability.


    Reasoning models compound this problem rather than solving it. When a model
    evaluates 10 steps in a chain-of-thought process, each step carries its own
    hallucination risk. The more complex the reasoning, the more chances for
    errors to cascade. Coding LLMs illustrate this clearly: the model might
    reference a nonexistent GitHub library (enabling 'slopsquatting' attacks),
    claim it performed a task it didn't, or silently misconfigure security
    settings. The Replit Reddit is full of examples where AI agents claim to
    have fixed databases that remain unchanged. This is not a solvable problem
    within the current architecture — it's a mathematical property of the
    approach.
related:
  - INS-260323-584D
  - INS-260323-C10D
  - PRI-260323-1CF9
  - PRI-260325-45A2
  - PRI-260324-2C9F
  - INS-260326-E7BE
  - INS-260330-C9CA
  - INS-260330-52F6
  - INS-260330-52C3
  - INS-260330-3491
stance: >-
  OpenAI's own research confirms hallucinations cannot be eliminated even with
  perfect training data because they are inherent to probabilistic gener...
---
OpenAI published research confirming what critics have argued: hallucinations are an inherent property of probabilistic text generation, not a bug to be fixed with better data. Every output is a new generation, never identical, always carrying nonzero error probability.

Reasoning models compound this problem rather than solving it. When a model evaluates 10 steps in a chain-of-thought process, each step carries its own hallucination risk. The more complex the reasoning, the more chances for errors to cascade. Coding LLMs illustrate this clearly: the model might reference a nonexistent GitHub library (enabling 'slopsquatting' attacks), claim it performed a task it didn't, or silently misconfigure security settings. The Replit Reddit is full of examples where AI agents claim to have fixed databases that remain unchanged. This is not a solvable problem within the current architecture — it's a mathematical property of the approach.
