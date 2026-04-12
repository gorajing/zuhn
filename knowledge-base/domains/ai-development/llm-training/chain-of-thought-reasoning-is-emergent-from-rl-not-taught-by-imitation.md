---
id: INS-260410-966F
domain: ai-development
topic: llm-training
title: 'Chain-of-thought reasoning is emergent from RL, not taught by imitation'
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - reasoning
  - chain-of-thought
  - reinforcement-learning
  - deepseek-r1
  - emergence
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
    Human labelers cannot write ideal chains of thought for an LLM because LLM
    cognition differs from human cognition — only RL can discover token
    sequences that reliably work for the model itself.
  standard: >-
    The DeepSeek R1 paper publicly demonstrated what internal labs had been
    seeing: when you run RL on math and code problems with verifiable answers,
    models spontaneously learn to write much longer responses that include
    phrases like 'wait, let me reconsider,' 'let me try a different approach,'
    and explicit self-checking. Response length climbs alongside accuracy. No
    labeler wrote these patterns — they emerged because they empirically helped
    the model reach correct answers.


    Karpathy's deeper point: we could not hardcode these traces even if we
    wanted to, because we do not know what reasoning sequence works for an LLM.
    Human cognitions and LLM cognitions differ. A step that is trivial for a
    human labeler ('30 − 4 = 9 ÷ 3') compresses multiple mental operations into
    one token and may be too much compute per token for the model, while a step
    that feels verbose to a human might be exactly right. SFT can only get the
    model into the vicinity of correct solutions; RL is required to dial in the
    specific token distributions that match the model's own computational shape.


    This parallels AlphaGo's move 37 — a move no human would play, discovered
    only because RL wasn't constrained to imitate human games. The implication
    for the field: as RL on verifiable domains scales, models may drift off the
    distribution of human-written reasoning entirely, potentially developing
    cognitive strategies (or even private symbolic languages) that are optimized
    for their architecture rather than for human legibility.
stance: >-
  The 'wait, let me reconsider' backtracking behavior in reasoning models is
  discovered by RL on verifiable problems, not hardcoded by labelers, because
  humans don't know which token sequences work best for an LLM's cognition.
related:
  - INS-260329-E208
  - INS-260330-BEAD
  - INS-260402-3095
  - INS-260403-5086
  - INS-260403-B8AA
  - INS-260410-F24A
  - INS-260410-F5C5
  - PRI-260411-ACEF
  - INS-260403-141E
  - PRI-260328-D893
---
The DeepSeek R1 paper publicly demonstrated what internal labs had been seeing: when you run RL on math and code problems with verifiable answers, models spontaneously learn to write much longer responses that include phrases like 'wait, let me reconsider,' 'let me try a different approach,' and explicit self-checking. Response length climbs alongside accuracy. No labeler wrote these patterns — they emerged because they empirically helped the model reach correct answers.

Karpathy's deeper point: we could not hardcode these traces even if we wanted to, because we do not know what reasoning sequence works for an LLM. Human cognitions and LLM cognitions differ. A step that is trivial for a human labeler ('30 − 4 = 9 ÷ 3') compresses multiple mental operations into one token and may be too much compute per token for the model, while a step that feels verbose to a human might be exactly right. SFT can only get the model into the vicinity of correct solutions; RL is required to dial in the specific token distributions that match the model's own computational shape.

This parallels AlphaGo's move 37 — a move no human would play, discovered only because RL wasn't constrained to imitate human games. The implication for the field: as RL on verifiable domains scales, models may drift off the distribution of human-written reasoning entirely, potentially developing cognitive strategies (or even private symbolic languages) that are optimized for their architecture rather than for human legibility.
