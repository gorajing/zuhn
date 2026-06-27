---
id: INS-260627-1970
domain: ai-development
topic: security
title: 'Hallucination alone justifies sandboxing, even with zero bad actors'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - threat-modeling
  - ai-security
  - hallucination
  - sandboxing
  - reliability
sources:
  - type: youtube
    title: >-
      Why, and how you need to sandbox AI-Generated Code? — Harshil Agrawal,
      Cloudflare
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=AHtGAgQ0Q_Q'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Wrong code from an honest model — infinite loops, nonexistent imports,
    missing base cases — can take down production, so the baseline threat
    requires protection before you even consider attackers.
  standard: >-
    The threat model has three tiers, and the most overlooked is the benign one.
    A model doing its best can still import a package that does not exist, write
    a recursive function with no base case, or emit a while-true loop because it
    misread the termination condition. None of this is adversarial, but an
    infinite loop eats compute, a bad import crashes processes, and runaway
    recursion blows the stack. This is the baseline threat that exists even in a
    world with no bad actors.


    The second tier is the over-helpful model that reads your environment
    variables and credentials to configure something properly; it is dangerous
    precisely because the behavior looks reasonable. The third is the
    compromised prompt, especially indirect injection where the model ingests a
    web page or document carrying hidden instructions and becomes the attack
    vector while behaving exactly as designed. The lesson is that you cannot
    defer sandboxing until you have adversaries to worry about: resource limits,
    timeouts, and isolation are required from day one because correctness
    failures alone are enough to cause an outage.
stance: >-
  AI code must be sandboxed even in a threat model with no malicious actors,
  because benign hallucination is already disastrous in production.
related:
  - INS-260403-2FAE
  - INS-260625-F62D
  - INS-260626-5671
  - INS-260605-3AB7
  - INS-260627-1EF5
  - INS-260605-1C30
---
The threat model has three tiers, and the most overlooked is the benign one. A model doing its best can still import a package that does not exist, write a recursive function with no base case, or emit a while-true loop because it misread the termination condition. None of this is adversarial, but an infinite loop eats compute, a bad import crashes processes, and runaway recursion blows the stack. This is the baseline threat that exists even in a world with no bad actors.

The second tier is the over-helpful model that reads your environment variables and credentials to configure something properly; it is dangerous precisely because the behavior looks reasonable. The third is the compromised prompt, especially indirect injection where the model ingests a web page or document carrying hidden instructions and becomes the attack vector while behaving exactly as designed. The lesson is that you cannot defer sandboxing until you have adversaries to worry about: resource limits, timeouts, and isolation are required from day one because correctness failures alone are enough to cause an outage.
