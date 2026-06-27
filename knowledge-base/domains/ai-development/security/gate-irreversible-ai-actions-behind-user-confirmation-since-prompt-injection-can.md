---
id: INS-260627-1C20
domain: ai-development
topic: security
title: >-
  Gate irreversible AI actions behind user confirmation, since prompt injection
  can't be fully blocked
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - prompt-injection
  - lethal-trifecta
  - agent-security
  - human-in-the-loop
  - ux-design
sources:
  - type: youtube
    title: >-
      From Arc to Dia: Lessons learned building AI Browsers – Samir Mody, The
      Browser Company of New York
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=o4scJaQgnFA'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    AI browsers sit in a 'lethal trifecta' (private data + untrusted content +
    external communication); since tag-wrapping and role separation only
    mitigate prompt injection, the durable defense is a plain-text
    user-confirmation step before any irreversible action.
  standard: >-
    A prompt injection is an attack where third-party content overrides an LLM's
    instructions—e.g., a hidden instruction in a web page's HTML redirects a
    'summarize this' request into exfiltrating personal data via URL parameters.
    Browsers are especially exposed because they sit at the intersection of what
    Mody calls the lethal trifecta: access to private data, exposure to
    untrusted content, and the ability to communicate externally (opening sites,
    sending emails, scheduling events).


    Technical mitigations help but never guarantee safety. Wrapping untrusted
    content in tags is trivially escapable. Separating instructions into a
    system role and untrusted content into a user role, even with randomly
    generated wrapping tags, reduces but does not eliminate the risk. The
    conclusion: prompt injections will still happen, so security must be
    designed into the product, not bolted on.


    The Browser Company's design pattern blends technology with UX: before Dia's
    autofill writes to a form, the user reads and confirms the data in plain
    text. This doesn't prevent the injection, but it gives the user control,
    awareness, and trust at the irreversible step. The same confirmation gate is
    applied consistently to scheduling events and writing emails. The principle
    generalizes: for any agent action that is hard to reverse and touches
    sensitive data or external systems, insert a human-readable confirmation
    rather than relying on the model to resist manipulation.
stance: >-
  Because prompt injection cannot be reliably prevented by technical means
  alone, AI agents touching private data must gate irreversible actions behind
  explicit user confirmation.
related:
  - INS-260410-0A28
  - INS-260626-3492
  - INS-260627-22EC
  - INS-260625-2ED0
  - INS-260412-4233
---
A prompt injection is an attack where third-party content overrides an LLM's instructions—e.g., a hidden instruction in a web page's HTML redirects a 'summarize this' request into exfiltrating personal data via URL parameters. Browsers are especially exposed because they sit at the intersection of what Mody calls the lethal trifecta: access to private data, exposure to untrusted content, and the ability to communicate externally (opening sites, sending emails, scheduling events).

Technical mitigations help but never guarantee safety. Wrapping untrusted content in tags is trivially escapable. Separating instructions into a system role and untrusted content into a user role, even with randomly generated wrapping tags, reduces but does not eliminate the risk. The conclusion: prompt injections will still happen, so security must be designed into the product, not bolted on.

The Browser Company's design pattern blends technology with UX: before Dia's autofill writes to a form, the user reads and confirms the data in plain text. This doesn't prevent the injection, but it gives the user control, awareness, and trust at the irreversible step. The same confirmation gate is applied consistently to scheduling events and writing emails. The principle generalizes: for any agent action that is hard to reverse and touches sensitive data or external systems, insert a human-readable confirmation rather than relying on the model to resist manipulation.
