---
id: INS-260627-340A
domain: ai-development
topic: software-engineering
title: >-
  Generate high-level modular code for LLMs for the same reason it helped
  humans: context is scarce
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - modularity
  - abstraction
  - structured-programming
  - context-window
  - local-reasoning
sources:
  - type: youtube
    title: 'Vision: Zero Bugs — Johann Schleier-Smith, Temporal'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=qLqttdO33UM'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    The 1950s-1980s abstractions — high-level languages, structured programming,
    modularity — exist to manage scarce working memory, and an LLM's context
    window is the same scarce resource, so the same disciplines pay off
    identically.
  standard: >-
    It is reasonable to ask why LLMs don't just emit machine code directly,
    given they're fast and cheap. The answer is the same one that drove humans
    away from assembly: abstraction preserves essential complexity (the parts
    relevant to the problem) and strips away implementation/machine detail, and
    that mattered because human working memory is limited. An LLM's context
    window is large but still a scarce resource — the analogy holds, so the same
    disciplines pay off.


    Modularity is the highest-leverage of these. Parnas's argument is that
    chaining well-defined modules turns exponential verification scaling into
    sub-exponential or even linear scaling, because you apply local reasoning at
    every level instead of reasoning about the whole system at once. Whether the
    verifier is a human, an LLM, or a formal tool, modular structure is what
    makes complexity manageable regardless of system size. Structured
    programming (sequence, selection, iteration; no go-tos) enables the same
    compositional reasoning.


    Practically: feed agents detailed specs, use typed languages, write modular
    code, and keep individual files small. Outsource what you can to reliable,
    separately-tested libraries so the agent's code doesn't have to worry about
    it — the argument for trusted components is as strong for LLMs as it ever
    was for human teams.
stance: >-
  LLMs should generate high-level, modular code rather than machine code because
  the complexity-management advantages that benefited human programmers apply
  identically to LLMs.
related:
  - INS-260329-422F
  - INS-260329-393C
  - INS-260329-E015
  - INS-260329-E839
  - INS-260329-A461
  - INS-260330-E5F7
  - PRI-260403-ABDE
  - INS-260404-B1BC
  - INS-260329-CC79
  - INS-260329-8D19
---
It is reasonable to ask why LLMs don't just emit machine code directly, given they're fast and cheap. The answer is the same one that drove humans away from assembly: abstraction preserves essential complexity (the parts relevant to the problem) and strips away implementation/machine detail, and that mattered because human working memory is limited. An LLM's context window is large but still a scarce resource — the analogy holds, so the same disciplines pay off.

Modularity is the highest-leverage of these. Parnas's argument is that chaining well-defined modules turns exponential verification scaling into sub-exponential or even linear scaling, because you apply local reasoning at every level instead of reasoning about the whole system at once. Whether the verifier is a human, an LLM, or a formal tool, modular structure is what makes complexity manageable regardless of system size. Structured programming (sequence, selection, iteration; no go-tos) enables the same compositional reasoning.

Practically: feed agents detailed specs, use typed languages, write modular code, and keep individual files small. Outsource what you can to reliable, separately-tested libraries so the agent's code doesn't have to worry about it — the argument for trusted components is as strong for LLMs as it ever was for human teams.
