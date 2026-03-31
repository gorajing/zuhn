---
id: INS-260329-8C14
domain: ai-development
topic: system-building
title: Password security fails because humans optimize for memorability over entropy
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - security
  - psychology
  - behavioral-patterns
  - system-design
  - authentication
sources:
  - type: youtube
    title: Harvard CS50 (2023) – Full Computer Science University Course
    author: freeCodeCamp.org
    url: 'https://www.youtube.com/watch?v=LfaMVlDaQ24'
date_extracted: '2026-03-29'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    The top 10 most common passwords are all sequential digits or keyboard
    patterns, proving humans systematically choose guessable passwords because
    our brains optimize for recall, not randomness.
  standard: >-
    CS50's cybersecurity lecture reveals that the most common passwords in 2021
    were variations of '123456', 'password', and 'qwerty' — all optimized for
    human memorability rather than cryptographic entropy. Malan also debunks the
    common 'clever substitution' defense (replacing 'e' with '3', 's' with '5')
    by noting that if many people independently discover the same 'clever'
    trick, adversaries will enumerate those substitutions too.


    This is a fundamental UX-security tension: the human brain is a
    pattern-recognition machine that resists true randomness. Any system that
    asks humans to generate and memorize random strings is fighting against
    cognitive architecture. The practical resolution is to remove humans from
    the entropy-generation loop entirely — password managers, passkeys,
    biometric authentication, and hardware tokens all work because they stop
    asking humans to do something humans are cognitively bad at. For system
    builders, the lesson is broader: when your security model requires users to
    behave in ways that contradict their cognitive defaults, the model will fail
    at scale regardless of how much you educate users.
stance: >-
  The most common passwords reveal that users treat security as a memorization
  problem rather than a randomness problem, making password-based authentication
  fundamentally misaligned with human cognition.
related:
  - INS-260325-A1B9
  - INS-260323-8815
  - INS-260325-BE3A
  - INS-260330-6C09
  - INS-260330-125E
---
CS50's cybersecurity lecture reveals that the most common passwords in 2021 were variations of '123456', 'password', and 'qwerty' — all optimized for human memorability rather than cryptographic entropy. Malan also debunks the common 'clever substitution' defense (replacing 'e' with '3', 's' with '5') by noting that if many people independently discover the same 'clever' trick, adversaries will enumerate those substitutions too.

This is a fundamental UX-security tension: the human brain is a pattern-recognition machine that resists true randomness. Any system that asks humans to generate and memorize random strings is fighting against cognitive architecture. The practical resolution is to remove humans from the entropy-generation loop entirely — password managers, passkeys, biometric authentication, and hardware tokens all work because they stop asking humans to do something humans are cognitively bad at. For system builders, the lesson is broader: when your security model requires users to behave in ways that contradict their cognitive defaults, the model will fail at scale regardless of how much you educate users.
