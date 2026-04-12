---
id: INS-260410-AC0B
domain: ai-development
topic: research-methodology
title: >-
  DeepSeek's research taste comes from tight hardware-algorithm co-design under
  visible constraints
actionability: inspiration
confidence: high
shelf_life: evergreen
status: active
tags:
  - deepseek
  - research-taste
  - hardware-software-codesign
  - simplicity
  - ml-research
sources:
  - type: youtube
    title: Is RL + LLMs enough for AGI? — Sholto Douglas & Trenton Bricken
    author: Dwarkesh Patel
    url: 'https://www.youtube.com/watch?v=64lXQP6cs5M'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    DeepSeek's research taste is visible in how iteratively and transparently
    they trade off hardware constraints (memory bandwidth vs. flops) for
    algorithmic structure, producing simple solutions rather than ornamented
    ones.
  standard: >-
    Sholto explicitly praises DeepSeek's research taste and compares it
    favorably to Noam Shazeer's. You can read their v2/v3 papers and 'clearly
    see what constraints they're thinking about.' MLA (multi-head latent
    attention) trades flops for memory bandwidth because they had H800s with
    abundant flops. When export controls cut their chip access, they switched to
    NSA (native sparse attention) which more selectively loads memory bandwidth.
    Their MoE load-balancing evolved from auxiliary losses (which require tuning
    coefficients and force the model to trade off objectives) to a simpler
    bias-term approach that avoids the coefficient tuning problem entirely.


    The broader failure mode Sholto names for ML researchers is 'doing these
    overly complicated things that don't think hard enough about the hardware
    systems.' DeepSeek's pattern is the opposite: identify the exact hardware
    constraint, ask 'what do we wish we could express algorithmically under this
    constraint,' solve it simply, then back it with strong engineering. This is
    a counter to the common misconception that DeepSeek is 'above and beyond the
    frontier' — Dario's essay points out they were nine months behind Claude 3
    Sonnet and on the same cost curve as everyone else. What's impressive isn't
    being ahead, it's getting from far behind to the frontier through
    disciplined hardware-aware iteration. For ML practitioners: research taste
    here means starting from the physical machine and working backward to the
    math, not the reverse.
stance: >-
  DeepSeek's breakthroughs come from simple, elegant solutions driven by
  hardware-aware constraint satisfaction rather than from overcomplicated novel
  architectures.
related:
  - INS-260323-6761
  - INS-260325-FD14
  - INS-260327-DE27
  - INS-260327-6E86
  - INS-260329-7255
  - INS-260330-CCF0
  - INS-260403-F0DC
  - INS-260404-CC8B
  - PRI-260406-8B75
  - PRI-260407-5465
---
Sholto explicitly praises DeepSeek's research taste and compares it favorably to Noam Shazeer's. You can read their v2/v3 papers and 'clearly see what constraints they're thinking about.' MLA (multi-head latent attention) trades flops for memory bandwidth because they had H800s with abundant flops. When export controls cut their chip access, they switched to NSA (native sparse attention) which more selectively loads memory bandwidth. Their MoE load-balancing evolved from auxiliary losses (which require tuning coefficients and force the model to trade off objectives) to a simpler bias-term approach that avoids the coefficient tuning problem entirely.

The broader failure mode Sholto names for ML researchers is 'doing these overly complicated things that don't think hard enough about the hardware systems.' DeepSeek's pattern is the opposite: identify the exact hardware constraint, ask 'what do we wish we could express algorithmically under this constraint,' solve it simply, then back it with strong engineering. This is a counter to the common misconception that DeepSeek is 'above and beyond the frontier' — Dario's essay points out they were nine months behind Claude 3 Sonnet and on the same cost curve as everyone else. What's impressive isn't being ahead, it's getting from far behind to the frontier through disciplined hardware-aware iteration. For ML practitioners: research taste here means starting from the physical machine and working backward to the math, not the reverse.
