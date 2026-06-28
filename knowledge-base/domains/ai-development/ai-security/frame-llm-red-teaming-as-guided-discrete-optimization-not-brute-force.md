---
id: INS-260628-516E
domain: ai-development
topic: ai-security
title: 'Frame LLM red-teaming as guided discrete optimization, not brute force'
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - red-teaming
  - adversarial-testing
  - jailbreak
  - discrete-optimization
  - prompt-injection
sources:
  - type: youtube
    title: 'Fuzzing in the GenAI Era — Leonard Tang, Haize Labs'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=OMGPvW8TBHc'
date_extracted: '2026-06-28'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    You can't scan a 128k-token-vocabulary input space by brute force, so treat
    finding jailbreaks as an optimization that drives the judge score down.
  standard: >-
    Classical fuzzing brute-forces an input space; that is hopeless for natural
    language, where even a single input over a 128k-token vocabulary explodes
    combinatorially. So AI fuzzing must be guided and pruned. The reframe is to
    make it a discrete-optimization problem: the search space is natural
    language, and the objective to minimize is the judge that scores the app's
    output — you are hunting for inputs that drive the judge score low, i.e.,
    that break the application.


    This unlocks 60–70 years of discrete-optimization literature, adapted to the
    LLM domain: gradient-based methods that backprop the judge loss to the input
    to decide which tokens to flip, tree search and MCTS, latent-space search
    over an embedding model mapped back to text, and tools like DSPy. The
    approach splits naturally into in-distribution fuzzing (perturbing
    happy-path inputs to test robustness) and aggressive adversarial emulation
    (prompt injection, jailbreaks). The case studies (haizing a Hungarian bank's
    loan-calculation app against an 18-line code of conduct; emulating
    adversaries against a Fortune 500 voice debt-collection agent in 5 minutes
    versus 3 months of internal ops) show this scales adversary emulation
    dramatically — and extends to non-text spaces by perturbing audio signal
    (background noise, static, frequency shifts) under the same optimization
    framing.
stance: >-
  Adversarial testing of LLMs should be posed as guided discrete optimization
  that minimizes a judge objective, because the natural-language input space is
  far too large to brute-force.
related:
  - INS-260325-9C89
  - INS-260410-B282
  - INS-260605-C859
  - INS-260626-A5CB
  - INS-260627-D28C
---
Classical fuzzing brute-forces an input space; that is hopeless for natural language, where even a single input over a 128k-token vocabulary explodes combinatorially. So AI fuzzing must be guided and pruned. The reframe is to make it a discrete-optimization problem: the search space is natural language, and the objective to minimize is the judge that scores the app's output — you are hunting for inputs that drive the judge score low, i.e., that break the application.

This unlocks 60–70 years of discrete-optimization literature, adapted to the LLM domain: gradient-based methods that backprop the judge loss to the input to decide which tokens to flip, tree search and MCTS, latent-space search over an embedding model mapped back to text, and tools like DSPy. The approach splits naturally into in-distribution fuzzing (perturbing happy-path inputs to test robustness) and aggressive adversarial emulation (prompt injection, jailbreaks). The case studies (haizing a Hungarian bank's loan-calculation app against an 18-line code of conduct; emulating adversaries against a Fortune 500 voice debt-collection agent in 5 minutes versus 3 months of internal ops) show this scales adversary emulation dramatically — and extends to non-text spaces by perturbing audio signal (background noise, static, frequency shifts) under the same optimization framing.
