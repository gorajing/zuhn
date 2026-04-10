---
id: INS-260410-4CE7
domain: ai-development
topic: productivity
title: 'Two-step image workflow: transcribe first, then reason'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - multimodal
  - vision
  - ocr
  - verification-pattern
sources:
  - type: youtube
    title: How I use LLMs
    author: Andrej Karpathy
    url: 'https://www.youtube.com/watch?v=EWvNQjAaOHw'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    For nutrition labels, blood tests, ingredient lists — first ask the model to
    transcribe the image to text so you can verify it saw correctly, then ask
    your real question.
  standard: >-
    Multimodal LLMs can misread images in subtle ways — dropping a digit,
    misgrouping values, missing fine print — and if you go straight from image
    to interpretation, those misreads silently propagate into the answer.
    Karpathy's workflow for blood tests, supplement labels, and toothpaste
    ingredients is deliberately two-step: (1) 'transcribe this into a table,'
    scan the output to confirm every value is right, (2) ask 'which of these are
    safest / what's missing / interpret this panel.'


    The insight generalizes beyond vision: whenever an LLM is doing both
    perception and reasoning in one shot, you lose the ability to audit where
    errors come from. Splitting the task creates a checkpoint where you can
    catch transcription errors before they corrupt downstream reasoning. This is
    a lightweight manual version of the same 'show your work' pattern that
    thinking models do automatically, and it's particularly important for
    high-stakes domains like medical data where a misread decimal changes the
    interpretation entirely.
stance: >-
  Asking an LLM to transcribe an image into verifiable text before asking
  substantive questions about its contents produces more reliable answers than
  one-shot vision queries.
related:
  - INS-260409-AC30
  - PRI-260325-1C61
  - INS-260326-A7CB
  - PRI-260328-DD93
  - INS-260409-BE39
  - INS-260410-DABE
---
Multimodal LLMs can misread images in subtle ways — dropping a digit, misgrouping values, missing fine print — and if you go straight from image to interpretation, those misreads silently propagate into the answer. Karpathy's workflow for blood tests, supplement labels, and toothpaste ingredients is deliberately two-step: (1) 'transcribe this into a table,' scan the output to confirm every value is right, (2) ask 'which of these are safest / what's missing / interpret this panel.'

The insight generalizes beyond vision: whenever an LLM is doing both perception and reasoning in one shot, you lose the ability to audit where errors come from. Splitting the task creates a checkpoint where you can catch transcription errors before they corrupt downstream reasoning. This is a lightweight manual version of the same 'show your work' pattern that thinking models do automatically, and it's particularly important for high-stakes domains like medical data where a misread decimal changes the interpretation entirely.
