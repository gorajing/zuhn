---
id: INS-260325-ED75
domain: ai-development
topic: limitations
title: Some problems may be undecidable — provably impossible to prove or disprove
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - undecidability
  - halting-problem
  - turing-completeness
  - fundamental-limits
sources:
  - type: youtube
    title: The Simplest Math Problem No One Can Solve - Collatz Conjecture
    author: Veritasium
    url: 'https://youtu.be/094y1Z2wpJg'
date_extracted: '2026-03-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Conway's FRACTRAN — a generalization of 3x+1 — is Turing-complete and
    subject to the halting problem, raising the possibility that Collatz itself
    is undecidable.
  standard: >-
    John Conway created FRACTRAN, a generalization of the 3x+1 operation, and
    proved it Turing-complete — meaning it can simulate any computation.
    Turing-completeness brings the halting problem: you cannot build a general
    algorithm to determine whether a FRACTRAN program halts. While this doesn't
    directly prove Collatz is undecidable, it establishes that problems in this
    family can be.


    The implications extend to any field dealing with complex systems: some
    questions about AI behavior, software correctness, or economic dynamics may
    be genuinely unanswerable — not because we lack cleverness, but because the
    mathematical universe contains provably unreachable truths. Knowing that
    undecidability is possible should influence how we allocate research effort:
    sometimes building robust heuristics is more productive than seeking
    impossible proofs.
stance: >-
  The existence of undecidable problems means there are true statements in
  mathematics (and potentially in AI alignment and software verification) that
  no proof can ever establish.
related:
  - INS-260330-1FE9
  - INS-260329-C2E5
  - INS-260329-5DB9
  - INS-260330-47E0
  - INS-260323-6944
---
John Conway created FRACTRAN, a generalization of the 3x+1 operation, and proved it Turing-complete — meaning it can simulate any computation. Turing-completeness brings the halting problem: you cannot build a general algorithm to determine whether a FRACTRAN program halts. While this doesn't directly prove Collatz is undecidable, it establishes that problems in this family can be.

The implications extend to any field dealing with complex systems: some questions about AI behavior, software correctness, or economic dynamics may be genuinely unanswerable — not because we lack cleverness, but because the mathematical universe contains provably unreachable truths. Knowing that undecidability is possible should influence how we allocate research effort: sometimes building robust heuristics is more productive than seeking impossible proofs.
