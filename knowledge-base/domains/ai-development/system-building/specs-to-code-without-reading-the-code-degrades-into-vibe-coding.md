---
id: INS-260626-EAC7
domain: ai-development
topic: system-building
title: Specs-to-code without reading the code degrades into vibe coding
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - specs-to-code
  - vibe-coding
  - software-entropy
  - code-quality
  - ai-coding
sources:
  - type: youtube
    title: '"Software Fundamentals Matter More Than Ever" — Matt Pocock'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=v4F1gFy-hqg'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Treating generated code as a disposable artifact you never inspect causes
    software entropy — each compiler pass makes the codebase worse, not better.
  standard: >-
    The specs-to-code thesis holds that code is cheap: write a spec, let AI
    generate code, and when something breaks you edit the spec and re-run rather
    than touch the code. Pocock tried it and watched the output degrade with
    each pass — run it, get code; run again, get worse code; keep running, end
    up with garbage. The mechanism is software entropy (from The Pragmatic
    Programmer): if every change considers only the local change and not the
    design of the whole system, the codebase drifts toward collapse. Ignoring
    the code and letting it 'manage itself' is just vibe coding renamed. The
    practical takeaway is that a human (or a design-aware process) must stay
    accountable for the structure of the system; you cannot delegate the design
    integrity to a loop that never reads its own output.
stance: >-
  Re-running an AI compiler on a spec while refusing to read the generated code
  produces progressively worse code, not convergence.
related:
  - INS-260330-23CD
  - INS-260405-1CAA
  - INS-260514-0226
  - INS-260605-89B0
  - INS-260625-868D
  - INS-260627-11C1
  - INS-260626-287B
---
The specs-to-code thesis holds that code is cheap: write a spec, let AI generate code, and when something breaks you edit the spec and re-run rather than touch the code. Pocock tried it and watched the output degrade with each pass — run it, get code; run again, get worse code; keep running, end up with garbage. The mechanism is software entropy (from The Pragmatic Programmer): if every change considers only the local change and not the design of the whole system, the codebase drifts toward collapse. Ignoring the code and letting it 'manage itself' is just vibe coding renamed. The practical takeaway is that a human (or a design-aware process) must stay accountable for the structure of the system; you cannot delegate the design integrity to a loop that never reads its own output.
