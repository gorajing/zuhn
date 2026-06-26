---
id: INS-260625-8BBB
domain: ai-development
topic: alignment
title: Adversarial robustness does not scale with model capability
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - adversarial-robustness
  - scaling-laws
  - ai-safety
  - red-teaming
  - jailbreaks
sources:
  - type: youtube
    title: >-
      AI Security After Codex and Claude Code — Zico Kolter & Matt Fredrikson,
      Gray Swan
    author: Latent Space
    url: 'https://www.youtube.com/watch?v=j8BAficRjEc'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Unlike most capabilities, safety and adversarial robustness do not emerge
    from scale — they require explicit, dedicated training.
  standard: >-
    Most model capabilities improve monotonically with scale, which has trained
    the field to expect bigger models to be better at everything. Kolter and
    Fredrikson argue robustness is the exception: a larger model is not
    inherently harder to jailbreak or prompt-inject. They point to an IPI
    benchmark scatter plot of capability (GPQA Diamond) against attack success
    rate that shows essentially no correlation — the most capable models are not
    the most robust.


    The corollary is that both attack and defense require specialized training
    rather than scale. Frontier models are bad at red teaming because their
    safety training makes them refuse, and they don't get robust by default.
    This is why Gray Swan trains dedicated models for breaking (Shade) and for
    defending (Cygnal) rather than relying on the base model's size. For anyone
    deploying agents, the practical lesson is that you cannot buy your way to
    safety by upgrading to a larger frontier model — robustness is a separate
    axis that must be engineered for directly.
stance: >-
  Making a model bigger and more capable does not make it more robust to
  adversarial attacks; robustness must be trained for explicitly.
related:
  - INS-260330-F3FF
  - INS-260403-AFCC
  - PRI-260406-ED43
  - INS-260505-7B61
  - PRI-260403-EA13
  - PRI-260405-FB37
  - PRI-260323-8E89
---
Most model capabilities improve monotonically with scale, which has trained the field to expect bigger models to be better at everything. Kolter and Fredrikson argue robustness is the exception: a larger model is not inherently harder to jailbreak or prompt-inject. They point to an IPI benchmark scatter plot of capability (GPQA Diamond) against attack success rate that shows essentially no correlation — the most capable models are not the most robust.

The corollary is that both attack and defense require specialized training rather than scale. Frontier models are bad at red teaming because their safety training makes them refuse, and they don't get robust by default. This is why Gray Swan trains dedicated models for breaking (Shade) and for defending (Cygnal) rather than relying on the base model's size. For anyone deploying agents, the practical lesson is that you cannot buy your way to safety by upgrading to a larger frontier model — robustness is a separate axis that must be engineered for directly.
