---
id: INS-260403-2FAE
domain: ai-development
topic: alignment
title: >-
  Bolted-on AI defenses consistently fail while model-level security is the only
  viable path
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - ai-security
  - prompt-injection
  - guardrails
  - defense-in-depth
  - alignment
sources:
  - type: blog
    title: >-
      AI prompt engineering in 2025: What works and what doesn’t | Sander
      Schulhoff (Learn Prompting, HackAPrompt)
    author: Lenny Rachitsky
    url: >-
      https://www.lennysnewsletter.com/p/ai-prompt-engineering-in-2025-sander-schulhoff
date_extracted: '2026-04-03'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Adding 'ignore malicious inputs' or using external classifiers fails against
    encoded attacks and creative phrasing — security must be model-level.
  standard: >-
    HackAPrompt, with over 600,000 collected attack prompts, has demonstrated
    that every commonly deployed defense against prompt injection can be
    bypassed. Prompt separation (trying to isolate user input from system
    instructions), instruction-based guardrails ('do not respond to requests for
    harmful content'), and external classifiers all fail against techniques as
    simple as the 'grandma trick,' typo obfuscation, emotional manipulation, and
    encoded inputs.


    This has a deep architectural implication: security cannot be bolted onto an
    LLM system after the fact. Current classifiers lack the intelligence to
    catch encoded or creatively phrased attacks. The future of AI security must
    be built at the model level — in how models are trained, how they represent
    and enforce boundaries, and how they handle adversarial inputs natively. For
    practitioners building AI products today, this means defense-in-depth
    (multiple layers, none trusted individually), least-privilege architectures,
    and designing systems that assume the model will sometimes be compromised.
stance: >-
  External guardrails, prompt separation, and instruction-based defenses against
  prompt injection are fundamentally broken, and real security must be built
  into the model architecture itself.
related:
  - INS-260329-919F
  - INS-260329-D6AA
  - INS-260404-95D0
  - INS-260402-31D8
  - PRI-260403-9E80
  - PRI-260405-0676
  - INS-260321-D01E
  - INS-260327-FC68
---
HackAPrompt, with over 600,000 collected attack prompts, has demonstrated that every commonly deployed defense against prompt injection can be bypassed. Prompt separation (trying to isolate user input from system instructions), instruction-based guardrails ('do not respond to requests for harmful content'), and external classifiers all fail against techniques as simple as the 'grandma trick,' typo obfuscation, emotional manipulation, and encoded inputs.

This has a deep architectural implication: security cannot be bolted onto an LLM system after the fact. Current classifiers lack the intelligence to catch encoded or creatively phrased attacks. The future of AI security must be built at the model level — in how models are trained, how they represent and enforce boundaries, and how they handle adversarial inputs natively. For practitioners building AI products today, this means defense-in-depth (multiple layers, none trusted individually), least-privilege architectures, and designing systems that assume the model will sometimes be compromised.
