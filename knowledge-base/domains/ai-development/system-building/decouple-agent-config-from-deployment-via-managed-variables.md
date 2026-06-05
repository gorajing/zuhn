---
id: INS-260605-7125
domain: ai-development
topic: system-building
title: Decouple agent config from deployment via managed variables
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - managed-variables
  - deployment
  - ab-testing
  - openfeature
  - agent-config
sources:
  - type: youtube
    title: >-
      Agent Optimization with Pydantic AI: GEPA, Evals, Feedback Loops — Samuel
      Colvin, Pydantic
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=A48uhxfxbsM'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Push prompt/model/temperature as typed managed variables so you can change
    agent behavior in prod without a redeploy.
  standard: >-
    Logfire's managed variables generalize prompt management: instead of editing
    only text prompts in a platform, you store an entire typed config object (a
    Pydantic model holding instructions, model name, and max tokens) that the
    agent pulls at call time. The payoff is operational — where production CI/CD
    takes hours, being able to change a model or prompt instantly in staging or
    prod is 'extremely valuable,' and Colvin demonstrated live switching an
    agent's reply language and even its provider (Anthropic Sonnet to OpenAI
    GPT-4.1) without redeploying. Because the system is built on the OpenFeature
    open standard, the variables also support percentage-based targeting — true
    A/B testing of prompts and models against live traffic, with any OpenFeature
    client able to read them. The endgame he's building toward: wire managed
    variables to evals so the system 'hill climbs' toward better config
    autonomously ('self-driving for managed variables'), closing the loop
    between optimization and deployment.
stance: >-
  Storing an agent's prompt, model, and parameters as managed variables editable
  in production — not baked into code — is essential when redeploys are slow.
related:
  - PRI-260320-6847
  - INS-260423-85B3
  - INS-260605-287A
  - INS-260514-AC43
  - INS-260501-E377
---
Logfire's managed variables generalize prompt management: instead of editing only text prompts in a platform, you store an entire typed config object (a Pydantic model holding instructions, model name, and max tokens) that the agent pulls at call time. The payoff is operational — where production CI/CD takes hours, being able to change a model or prompt instantly in staging or prod is 'extremely valuable,' and Colvin demonstrated live switching an agent's reply language and even its provider (Anthropic Sonnet to OpenAI GPT-4.1) without redeploying. Because the system is built on the OpenFeature open standard, the variables also support percentage-based targeting — true A/B testing of prompts and models against live traffic, with any OpenFeature client able to read them. The endgame he's building toward: wire managed variables to evals so the system 'hill climbs' toward better config autonomously ('self-driving for managed variables'), closing the loop between optimization and deployment.
