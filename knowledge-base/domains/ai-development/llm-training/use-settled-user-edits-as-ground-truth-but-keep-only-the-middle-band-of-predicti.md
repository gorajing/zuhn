---
id: INS-260605-83A7
domain: ai-development
topic: llm-training
title: >-
  Use 'settled' user edits as ground truth, but keep only the middle band of
  prediction distance
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - ground-truth
  - data-selection
  - levenshtein
  - label-noise
  - training-data
sources:
  - type: youtube
    title: >-
      How We Built Zeta2: Training an Edit Prediction Model in Production — Ben
      Kunkle, Zed
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=phchDt63qAA'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Wait for the user to finish editing to get a real label, then keep examples
    in the middle distance band — too close is trivial, too far is noise.
  standard: >-
    Because Zed is the editor, it can wait until the user stops editing a region
    (a ~10-second pause heuristic) and snapshot the 'settled' state — the answer
    the user actually wanted. This is a free ground-truth signal, but it is
    noisy: the user may change their mind or an agent may rewrite the region
    entirely. To filter, they generate ~10 predictions for the same input and
    measure Levenshtein distance to the settled state. Examples that land very
    close are trivially predictable ('function add a plus' → 'b'); examples very
    far away are noise; the valuable training examples sit in the middle band —
    almost-but-not-quite, including new functions past the student's training
    cutoff. They train on the closest prediction to the settled state rather
    than the raw settled state itself, since the settled state is still noisy.
    The principle: real outcomes make great labels, but you must measure and
    select by distance, and the learning signal lives in the medium-difficulty
    middle.
stance: >-
  The user's eventual final edit is a free ground-truth label, and the most
  valuable training examples are the ones at medium distance from it — neither
  obvious nor noise.
related:
  - INS-260330-E4AD
  - INS-260329-D8BC
  - INS-260409-8908
  - INS-260330-B539
  - INS-260409-BE39
---
Because Zed is the editor, it can wait until the user stops editing a region (a ~10-second pause heuristic) and snapshot the 'settled' state — the answer the user actually wanted. This is a free ground-truth signal, but it is noisy: the user may change their mind or an agent may rewrite the region entirely. To filter, they generate ~10 predictions for the same input and measure Levenshtein distance to the settled state. Examples that land very close are trivially predictable ('function add a plus' → 'b'); examples very far away are noise; the valuable training examples sit in the middle band — almost-but-not-quite, including new functions past the student's training cutoff. They train on the closest prediction to the settled state rather than the raw settled state itself, since the settled state is still noisy. The principle: real outcomes make great labels, but you must measure and select by distance, and the learning signal lives in the medium-difficulty middle.
