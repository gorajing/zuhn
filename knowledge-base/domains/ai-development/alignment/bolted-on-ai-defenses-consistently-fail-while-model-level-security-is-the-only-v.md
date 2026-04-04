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
    author:
      - '@type': Person
        name: Lenny Rachitsky
        url: 'https://substack.com/@lenny'
        description: Writing • Angel investing • Advising
        identifier: 'user:1849774'
        sameAs:
          - 'https://twitter.com/lennysan'
        image:
          '@type': ImageObject
          contentUrl: >-
            https://substackcdn.com/image/fetch/$s_!-SHe!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fafba5161-65bb-4d99-8d6b-cce660917fa1_1540x1540.png
          thumbnailUrl: >-
            https://substackcdn.com/image/fetch/$s_!-SHe!,w_128,h_128,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fafba5161-65bb-4d99-8d6b-cce660917fa1_1540x1540.png
    url: >-
      https://www.lennysnewsletter.com/p/ai-prompt-engineering-in-2025-sander-schulhoff
date_extracted: '2026-04-03'
last_accessed: null
access_count: 0
indexed: false
embedded: false
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
---
HackAPrompt, with over 600,000 collected attack prompts, has demonstrated that every commonly deployed defense against prompt injection can be bypassed. Prompt separation (trying to isolate user input from system instructions), instruction-based guardrails ('do not respond to requests for harmful content'), and external classifiers all fail against techniques as simple as the 'grandma trick,' typo obfuscation, emotional manipulation, and encoded inputs.

This has a deep architectural implication: security cannot be bolted onto an LLM system after the fact. Current classifiers lack the intelligence to catch encoded or creatively phrased attacks. The future of AI security must be built at the model level — in how models are trained, how they represent and enforce boundaries, and how they handle adversarial inputs natively. For practitioners building AI products today, this means defense-in-depth (multiple layers, none trusted individually), least-privilege architectures, and designing systems that assume the model will sometimes be compromised.
