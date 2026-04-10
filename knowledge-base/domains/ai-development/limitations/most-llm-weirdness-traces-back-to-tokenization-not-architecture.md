---
id: INS-260410-FD24
domain: ai-development
topic: limitations
title: 'Most LLM weirdness traces back to tokenization, not architecture'
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - tokenization
  - debugging
  - llm-failures
  - karpathy
sources:
  - type: youtube
    title: Let's build the GPT Tokenizer
    author: Andrej Karpathy
    url: 'https://www.youtube.com/watch?v=zduSFxRajkE'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Tokenization is the hidden root cause of most LLM failure modes that look
    like model or architecture problems.
  standard: >-
    Karpathy's strong claim after building tokenizers from scratch: when LLMs
    fail at simple tasks, the failure usually traces to how text was chunked
    into tokens, not to the neural network. Spelling failures happen because
    models see opaque token IDs, not characters. Arithmetic fails because
    four-digit numbers are split arbitrarily into 1-, 2-, or 3-digit pieces
    depending on what merged during BPE training. Non-English performance is
    degraded partly because foreign-language strings get tokenized into many
    more tokens, eating context length. Python performance in GPT-2 was bad
    largely because every leading space was its own token, bloating sequences.


    This matters because the natural debugging instinct — 'the model needs more
    parameters' or 'the architecture is wrong' — sends researchers chasing the
    wrong layer. The actual fix is often a tokenizer redesign, which is what
    OpenAI did between GPT-2 and GPT-4 (collapsing runs of whitespace into
    single tokens dramatically improved code performance).


    The broader principle: when a system shows weird emergent behavior, suspect
    the data interface before suspecting the core algorithm. The 'unsexy'
    preprocessing layer is often where reality leaks in.
stance: >-
  When an LLM fails at spelling, arithmetic, non-English text, or Python
  indentation, the bug usually lives in the tokenizer rather than the model
  architecture or training.
related:
  - INS-260321-E2FC
  - INS-260323-AB5F
  - INS-260327-77A0
  - INS-260329-EAFD
  - INS-260329-D8F2
  - INS-260329-4D24
  - INS-260330-2154
  - INS-260403-5808
  - INS-260403-0E11
  - INS-260404-89DA
---
Karpathy's strong claim after building tokenizers from scratch: when LLMs fail at simple tasks, the failure usually traces to how text was chunked into tokens, not to the neural network. Spelling failures happen because models see opaque token IDs, not characters. Arithmetic fails because four-digit numbers are split arbitrarily into 1-, 2-, or 3-digit pieces depending on what merged during BPE training. Non-English performance is degraded partly because foreign-language strings get tokenized into many more tokens, eating context length. Python performance in GPT-2 was bad largely because every leading space was its own token, bloating sequences.

This matters because the natural debugging instinct — 'the model needs more parameters' or 'the architecture is wrong' — sends researchers chasing the wrong layer. The actual fix is often a tokenizer redesign, which is what OpenAI did between GPT-2 and GPT-4 (collapsing runs of whitespace into single tokens dramatically improved code performance).

The broader principle: when a system shows weird emergent behavior, suspect the data interface before suspecting the core algorithm. The 'unsexy' preprocessing layer is often where reality leaks in.
