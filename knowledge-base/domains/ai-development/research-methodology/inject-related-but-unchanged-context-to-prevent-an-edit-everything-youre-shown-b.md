---
id: INS-260625-3E47
domain: ai-development
topic: research-methodology
title: >-
  Inject related-but-unchanged context to prevent an 'edit everything you're
  shown' bias
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - data-curation
  - context-design
  - negative-examples
  - training-data
  - bias
sources:
  - type: youtube
    title: SWE-RL by Meta — Reinforcement Learning for Software Engineering LLMs
    author: AI Papers Academy
    url: 'https://www.youtube.com/watch?v=DimD-eX0DW8'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    SWE-RL adds related files that aren't changed by the PR so the model learns
    that relevance does not imply a required edit.
  standard: >-
    The researchers found that feeding the model only the files actually edited
    in a pull request induced a damaging bias: the model learned to generate
    edits to all of its input files. In practice many files are relevant context
    for a change yet require no modification. The fix was to deliberately add
    related-but-unchanged files to each training sample (predicted by
    Llama-3.1-70B from the PR description), so the model sees in-context
    examples of files it should leave alone. This is a general context-design
    lesson with cross-domain reach: a training distribution that only ever shows
    'inputs that get acted on' teaches the model to act on everything; you must
    include negative context — relevant inputs that warrant no action — to teach
    restraint and discrimination.
stance: >-
  Training a code model only on the files that were edited teaches it to edit
  every file it sees, so the input must include relevant files that should be
  left unchanged.
related:
  - INS-260320-69CD
  - INS-260626-15F3
  - INS-260605-5BAD
  - INS-260627-C258
  - INS-260605-FE8E
---
The researchers found that feeding the model only the files actually edited in a pull request induced a damaging bias: the model learned to generate edits to all of its input files. In practice many files are relevant context for a change yet require no modification. The fix was to deliberately add related-but-unchanged files to each training sample (predicted by Llama-3.1-70B from the PR description), so the model sees in-context examples of files it should leave alone. This is a general context-design lesson with cross-domain reach: a training distribution that only ever shows 'inputs that get acted on' teaches the model to act on everything; you must include negative context — relevant inputs that warrant no action — to teach restraint and discrimination.
