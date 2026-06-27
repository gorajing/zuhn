---
id: INS-260627-050C
domain: ai-development
topic: prompting
title: Field names are part of the prompt — treat LLM calls as typed functions
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - dspy
  - signatures
  - structured-output
  - prompt-engineering
  - naming
sources:
  - type: youtube
    title: 'DSPy: The End of Prompt Engineering - Kevin Madura, AlixPartners'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=-cKUW6n8hBU'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    In a signature-based framework, parameter names and field descriptions
    literally become the prompt, so naming carries real semantic weight.
  standard: >-
    A non-obvious detail Madura emphasizes: in DSPy's class-based signatures,
    the field names themselves act as mini-prompts injected into what the model
    sees. An input named 'text' or 'clinical_note' is passed through as part of
    the actual prompt, so naming parameters intuitively for the model is not
    cosmetic — it materially shapes behavior, with the description field
    carrying additional context. This reframes 'the end of prompt engineering'
    not as prompts disappearing but as prompt-craft moving into typed code: you
    declare intent, and the framework constructs the string.


    The practical workflow this unlocks is speed of experimentation. Shorthand
    signatures (e.g. 'text -> sentiment: int') let you scaffold a working LLM
    function in one line, test it, then progressively add instructions, swap to
    a class-based signature, or wrap it in a module. You get structured outputs,
    automatic caching, and built-in token-usage tracking for free, without
    writing string parsers or 'choices[0].message.content' plumbing. The mental
    shift is to stop thinking 'how do I word this prompt' and start thinking
    'what are the typed inputs and outputs of this function.'
stance: >-
  Naming typed input/output fields intuitively and treating an LLM call as a
  typed function call beats iterating on freeform prompt strings.
related:
  - INS-260325-B061
  - INS-260329-3C75
  - INS-260410-EE5C
  - INS-260605-117F
  - INS-260626-6CAE
  - INS-260625-FACB
---
A non-obvious detail Madura emphasizes: in DSPy's class-based signatures, the field names themselves act as mini-prompts injected into what the model sees. An input named 'text' or 'clinical_note' is passed through as part of the actual prompt, so naming parameters intuitively for the model is not cosmetic — it materially shapes behavior, with the description field carrying additional context. This reframes 'the end of prompt engineering' not as prompts disappearing but as prompt-craft moving into typed code: you declare intent, and the framework constructs the string.

The practical workflow this unlocks is speed of experimentation. Shorthand signatures (e.g. 'text -> sentiment: int') let you scaffold a working LLM function in one line, test it, then progressively add instructions, swap to a class-based signature, or wrap it in a module. You get structured outputs, automatic caching, and built-in token-usage tracking for free, without writing string parsers or 'choices[0].message.content' plumbing. The mental shift is to stop thinking 'how do I word this prompt' and start thinking 'what are the typed inputs and outputs of this function.'
