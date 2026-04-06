---
id: INS-260402-31D8
domain: ai-development
topic: limitations
title: AI security consulting is fundamentally unsolvable at the prompt level
actionability: immediate
confidence: high
shelf_life: time-sensitive
status: active
tags:
  - ai-security
  - jailbreaks
  - prompt-injection
  - enterprise-ai
  - permissions
sources:
  - type: blog
    title: Links For February 2026
    author: Scott Alexander
    url: 'https://www.astralcodexten.com/p/links-for-february-2026'
date_extracted: '2026-04-02'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    The AI security consulting industry sells prompt-level protections that
    cannot work because LLMs are fundamentally jailbreakable; only permission
    restriction provides real security.
  standard: >-
    The core argument is that an entire industry of 'AI security consultants'
    has emerged selling solutions to a problem that cannot be solved at the
    layer they operate on. LLMs are susceptible to jailbreaks and prompt
    injection, and no amount of system-prompt guardrails or wrapper-layer
    filtering can guarantee the model won't leak sensitive data when an
    adversary applies the right technique — or sometimes just asks nicely. This
    problem may eventually be solved by frontier labs working on the model
    architecture itself, but it fundamentally cannot be solved by an external
    consultant adding a special prompt telling the LLM to be careful. The only
    currently viable approach for secure LLM deployment is architectural: be
    extremely restrictive about what permissions and data access the LLM has,
    and separate public-facing LLMs from those with access to sensitive systems.
    This is essentially the principle of least privilege applied to AI —
    behavioral controls are unreliable, so rely on structural controls instead.
stance: >-
  No amount of prompt engineering or wrapper-layer security can prevent LLMs
  from leaking data under adversarial jailbreaks — the only viable defense is
  strict permission architecture, not behavioral guardrails.
related:
  - INS-260321-1A03
  - INS-260327-6F08
  - INS-260329-919F
  - INS-260330-4E68
  - INS-260330-AC7F
  - INS-260402-086D
  - INS-260403-FF74
  - INS-260403-1106
  - INS-260403-DF2E
  - INS-260403-2FAE
---
The core argument is that an entire industry of 'AI security consultants' has emerged selling solutions to a problem that cannot be solved at the layer they operate on. LLMs are susceptible to jailbreaks and prompt injection, and no amount of system-prompt guardrails or wrapper-layer filtering can guarantee the model won't leak sensitive data when an adversary applies the right technique — or sometimes just asks nicely. This problem may eventually be solved by frontier labs working on the model architecture itself, but it fundamentally cannot be solved by an external consultant adding a special prompt telling the LLM to be careful. The only currently viable approach for secure LLM deployment is architectural: be extremely restrictive about what permissions and data access the LLM has, and separate public-facing LLMs from those with access to sensitive systems. This is essentially the principle of least privilege applied to AI — behavioral controls are unreliable, so rely on structural controls instead.
