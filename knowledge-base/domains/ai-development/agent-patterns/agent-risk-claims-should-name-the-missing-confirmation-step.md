---
id: INS-260627-69F9
domain: ai-development
topic: agent-patterns
title: Agent-risk claims should name the missing confirmation step
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agent-safety
  - human-approval
  - blast-radius
  - prompt-injection
sources:
  - type: blog
    title: >-
      Fooling AI Agents: Web-Based Indirect Prompt Injection Observed in the
      Wild
    author: Beliz Kaleli
    url: 'https://unit42.paloaltonetworks.com/ai-agent-prompt-injection/'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    A prompt-injection incident is much stronger evidence when it includes a
    confirmed agent action, not only a payload that could have caused one.
  standard: >-
    The ad-review bypass case is the source's most concrete high-severity
    example, but Unit 42 says it is not aware of confirmed real-world instances
    where that attack successfully compromised deployed ad-checking agents. That
    caveat is exactly the tension Zuhn should preserve: the attack pattern is
    real and adversarially optimized, but the strongest evidence still stops
    short of confirmed production action. For future scouts, the evidentiary bar
    should be: malicious prompt found, vulnerable agent exposed, tool permission
    available, action executed, and harm observed.
  deep: >-
    Belief challenged: the present-tense claim that agent action capability has
    already crossed into actual weapon. Why the counterevidence is strong: it
    comes from the same source making the alarm case, so the caveat is not
    motivated by skepticism. Confidence movement: retain urgency, but mark
    current confidence in realized harm as lower than confidence in
    attack-surface expansion.
subtopic: sandboxing
stance: >-
  The Unit 42 ad-review case is a strong warning but a weak falsification
  because the authors do not know of confirmed successful exploitation against
  deployed ad-checking agents.
related:
  - INS-260410-0A28
  - INS-260410-9B0E
  - INS-260605-C37E
  - INS-260626-3492
  - INS-260627-8A6A
  - INS-260627-08FA
  - INS-260627-22EC
  - INS-260625-2ED0
---
The ad-review bypass case is the source's most concrete high-severity example, but Unit 42 says it is not aware of confirmed real-world instances where that attack successfully compromised deployed ad-checking agents. That caveat is exactly the tension Zuhn should preserve: the attack pattern is real and adversarially optimized, but the strongest evidence still stops short of confirmed production action. For future scouts, the evidentiary bar should be: malicious prompt found, vulnerable agent exposed, tool permission available, action executed, and harm observed.
