---
id: INS-260605-C009
domain: ai-development
topic: agents
title: Prefer deterministic golden-set evaluators over LLM-as-judge
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - evals
  - llm-as-judge
  - golden-dataset
  - determinism
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
    LLM-as-judge is 'the lunatics running the asylum' — write your own
    deterministic eval against a golden set when you can.
  standard: >-
    Colvin is blunt that while platforms ship prebuilt LLM-as-a-judge
    evaluators, 'defining your own is far better than LLM as a judge,' which he
    likens to 'the lunatics running the asylum' — using the same fallible model
    class to grade itself introduces correlated errors. Where you have a golden
    reference (their case: a JSON of correct ancestral relations per MP,
    generated with Opus 4.6 and hand-checked), a deterministic comparison gives
    clean per-case accuracy scores you can trust. He's candid that this is the
    hard part: 'working out what your judge is is always the hard bit of evals,'
    and it gets harder as models get smarter, because knowing what 'right' looks
    like becomes subtler. When no golden set exists, fall back to executable
    proxies — for a coding agent, run the code and check it compiles or avoids
    unavailable libraries; the smoking-cessation example reduces an impossible
    40-year outcome eval to cheap text checks ('does the output not contain the
    word cigar'). Crude string assertions, he notes, are what 'an awful lot of
    evals end up being.'
stance: >-
  A deterministic evaluator comparing output to a golden dataset is far more
  trustworthy than an LLM-as-a-judge.
related:
  - INS-260627-9981
  - INS-260605-EC51
  - INS-260627-21FF
  - INS-260404-E185
  - INS-260627-D28C
---
Colvin is blunt that while platforms ship prebuilt LLM-as-a-judge evaluators, 'defining your own is far better than LLM as a judge,' which he likens to 'the lunatics running the asylum' — using the same fallible model class to grade itself introduces correlated errors. Where you have a golden reference (their case: a JSON of correct ancestral relations per MP, generated with Opus 4.6 and hand-checked), a deterministic comparison gives clean per-case accuracy scores you can trust. He's candid that this is the hard part: 'working out what your judge is is always the hard bit of evals,' and it gets harder as models get smarter, because knowing what 'right' looks like becomes subtler. When no golden set exists, fall back to executable proxies — for a coding agent, run the code and check it compiles or avoids unavailable libraries; the smoking-cessation example reduces an impossible 40-year outcome eval to cheap text checks ('does the output not contain the word cigar'). Crude string assertions, he notes, are what 'an awful lot of evals end up being.'
