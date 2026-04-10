---
id: INS-260410-0EFE
domain: ai-development
topic: llm-behavior
title: LLMs need tokens to think because compute per token is fixed
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - reasoning
  - chain-of-thought
  - prompting
  - architecture
  - forward-pass
sources:
  - type: youtube
    title: Deep Dive into LLMs like ChatGPT
    author: Andrej Karpathy
    url: 'https://www.youtube.com/watch?v=7xTGNNLPyMI'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    A forward pass through ~100 transformer layers is the compute budget per
    token, so any answer that requires real work must be spread across many
    intermediate tokens or offloaded to a tool.
  standard: >-
    A transformer's forward pass has a fixed depth — roughly 100 layers in a
    modern model — and that is the entire amount of computation available to
    produce each next token. This means you cannot expect a model to solve a
    multi-step problem in one token, no matter how capable the model is overall.
    Karpathy demonstrates this by asking a model to answer 'Emily buys 23 apples
    and 177 oranges...' in a single token and watching it fail, then getting the
    correct answer when allowed to show intermediate steps.


    The training-time implication matters even more: a labeler who writes 'The
    answer is $3. Here's why...' is teaching the model to commit to an answer
    before it has done the work, training it to gamble rather than reason. Good
    training data — and good prompts — structure computation as a chain of
    small, easy-per-token steps that build toward the conclusion. Well-trained
    assistants like ChatGPT do this automatically (defining variables, working
    through substeps), but base models and weaker fine-tunes can be coaxed or
    broken by how you frame the answer.


    The same principle explains why counting and spelling fail: asking 'how many
    dots are below' forces counting into one forward pass. The reliable fix is
    to lean on tools — have the model write Python that counts or indexes
    characters — since copy-pasting tokens into a code block is a task models
    can do in one step, and the interpreter then handles the actual computation.
stance: >-
  Every generated token consumes a roughly fixed, small amount of computation,
  so models must distribute reasoning across many tokens rather than cramming it
  into a single answer token.
related:
  - INS-260325-5B28
  - INS-260410-1789
  - INS-260410-3E86
  - INS-260323-A5EC
  - INS-260321-B014
  - INS-260410-C5A4
---
A transformer's forward pass has a fixed depth — roughly 100 layers in a modern model — and that is the entire amount of computation available to produce each next token. This means you cannot expect a model to solve a multi-step problem in one token, no matter how capable the model is overall. Karpathy demonstrates this by asking a model to answer 'Emily buys 23 apples and 177 oranges...' in a single token and watching it fail, then getting the correct answer when allowed to show intermediate steps.

The training-time implication matters even more: a labeler who writes 'The answer is $3. Here's why...' is teaching the model to commit to an answer before it has done the work, training it to gamble rather than reason. Good training data — and good prompts — structure computation as a chain of small, easy-per-token steps that build toward the conclusion. Well-trained assistants like ChatGPT do this automatically (defining variables, working through substeps), but base models and weaker fine-tunes can be coaxed or broken by how you frame the answer.

The same principle explains why counting and spelling fail: asking 'how many dots are below' forces counting into one forward pass. The reliable fix is to lean on tools — have the model write Python that counts or indexes characters — since copy-pasting tokens into a code block is a task models can do in one step, and the interpreter then handles the actual computation.
