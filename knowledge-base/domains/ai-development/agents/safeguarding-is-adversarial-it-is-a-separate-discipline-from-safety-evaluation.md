---
id: INS-260605-310E
domain: ai-development
topic: agents
title: >-
  Safeguarding is adversarial; it is a separate discipline from safety
  evaluation
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - red-teaming
  - safety
  - security
  - adversarial
  - agents
sources:
  - type: youtube
    title: >-
      Mind the Gap (In your Agent Observability) — Amy Boyd & Nitya Narasimhan,
      Microsoft
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=iOXM3zE-2dk'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Safety evals assume well-behaved users; red teaming assumes a malicious one
    and uses a second AI to find prompt manipulations that slip past guardrails.
  standard: >-
    The talk draws a sharp line: a safety evaluation is like a building
    inspector checking you're up to code for normal use; red teaming is hiring
    someone to break into your house and report every way they got in.
    Mechanically, a second AI attacks the first with manipulated prompts —
    string flips, leetspeak, crescendo attacks (escalating slowly 'like a frog
    in boiling water'), or 'my grandmother used to tell a story' framings — that
    defeat guardrails which evaluate the surface prompt as harmless while the
    model still executes the hidden intent. Agentic red teaming raises the
    stakes beyond model-level harm: 'prohibited actions' attacks try to
    manipulate the agent into doing things it shouldn't (leak data, fill
    passwords), so you supply a taxonomy of forbidden actions and the red-team
    agent generates prompts to circumvent it. The principle: defining what an
    agent should do (a guardrail) is necessary but not sufficient — you must
    adversarially test whether that guardrail actually holds.
stance: >-
  Testing an agent against normal users is not safeguarding — you must
  proactively attack it with a second AI to find what guardrails miss.
related:
  - INS-260627-8392
  - INS-260627-79E3
  - PRI-260406-0109
  - INS-260409-45C3
  - INS-260605-80DC
---
The talk draws a sharp line: a safety evaluation is like a building inspector checking you're up to code for normal use; red teaming is hiring someone to break into your house and report every way they got in. Mechanically, a second AI attacks the first with manipulated prompts — string flips, leetspeak, crescendo attacks (escalating slowly 'like a frog in boiling water'), or 'my grandmother used to tell a story' framings — that defeat guardrails which evaluate the surface prompt as harmless while the model still executes the hidden intent. Agentic red teaming raises the stakes beyond model-level harm: 'prohibited actions' attacks try to manipulate the agent into doing things it shouldn't (leak data, fill passwords), so you supply a taxonomy of forbidden actions and the red-team agent generates prompts to circumvent it. The principle: defining what an agent should do (a guardrail) is necessary but not sufficient — you must adversarially test whether that guardrail actually holds.
