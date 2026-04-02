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
    author:
      - '@type': Person
        name: Scott Alexander
        url: 'https://substack.com/@astralcodexten'
        description: null
        identifier: 'user:12009663'
        image:
          '@type': ImageObject
          contentUrl: >-
            https://substackcdn.com/image/fetch/$s_!HTBd!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F7b500d22-1176-42ad-afaa-5d72bc36a809_44x44.png
          thumbnailUrl: >-
            https://substackcdn.com/image/fetch/$s_!HTBd!,w_128,h_128,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F7b500d22-1176-42ad-afaa-5d72bc36a809_44x44.png
    url: 'https://www.astralcodexten.com/p/links-for-february-2026'
date_extracted: '2026-04-02'
last_accessed: null
access_count: 0
indexed: false
embedded: false
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
---
The core argument is that an entire industry of 'AI security consultants' has emerged selling solutions to a problem that cannot be solved at the layer they operate on. LLMs are susceptible to jailbreaks and prompt injection, and no amount of system-prompt guardrails or wrapper-layer filtering can guarantee the model won't leak sensitive data when an adversary applies the right technique — or sometimes just asks nicely. This problem may eventually be solved by frontier labs working on the model architecture itself, but it fundamentally cannot be solved by an external consultant adding a special prompt telling the LLM to be careful. The only currently viable approach for secure LLM deployment is architectural: be extremely restrictive about what permissions and data access the LLM has, and separate public-facing LLMs from those with access to sensitive systems. This is essentially the principle of least privilege applied to AI — behavioral controls are unreliable, so rely on structural controls instead.
