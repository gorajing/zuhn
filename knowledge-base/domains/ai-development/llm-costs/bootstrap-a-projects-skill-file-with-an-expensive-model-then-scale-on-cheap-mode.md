---
id: INS-260626-A08F
domain: ai-development
topic: llm-costs
title: >-
  Bootstrap a project's skill file with an expensive model, then scale on cheap
  models
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - cost-optimization
  - open-models
  - skills
  - model-routing
  - bootstrapping
sources:
  - type: youtube
    title: >-
      ⚡️Making DeepSeek v4 outperform Opus 4.7 with Taste — @AhmadAwais ,
      CommandCode.ai
    author: Latent Space
    url: 'https://www.youtube.com/watch?v=-rIAVuaRjOg'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Pay for one Opus/GPT-5.5 pass to produce a project's skill/taste file, then
    do the bulk of the building with cheap models reading that file — a pattern
    emerging organically in the user community.
  standard: >-
    A practice spreading in CommandCode's Discord: developers build one project
    with a high-quality model (Opus, GPT-5.5) specifically to generate a strong
    taste/skill file, then point cheap open models at that file to continue
    building. The expensive model's role is to encode durable, high-leverage
    guidance once; the cheap model's role is to execute against it repeatedly.
    Because the skill file is a portable markdown contract, this decouples the
    cost of producing good judgment from the cost of applying it.


    This works because Awais's repair layer first closed the tool-calling
    reliability gap that previously made open models impractical for sustained
    agentic work — without that, cheap models would burn tokens on tool-call
    failures regardless of how good the skill file was. With reliability fixed,
    the marginal quality difference between expensive and cheap models on a
    well-specified task shrinks enough that the skill file carries most of the
    load. CommandCode leaned into this with a $1/month plan offering 600M
    DeepSeek tokens to prove open models are viable, and became likely the
    most-used coding agent on DeepSeek.


    The transferable economic pattern: separate 'generate the contract' (rare,
    expensive, high-judgment) from 'execute the contract' (frequent, cheap,
    mechanical), and route models accordingly. It's the same logic as caching an
    expensive computation — spend frontier-model dollars on the artifact that
    gets reused, not on every keystroke.
stance: >-
  Using a top-tier model once to generate a high-quality taste/skill file and
  then running cheap open models against it captures most of the quality at a
  fraction of the cost.
related:
  - INS-260329-693E
  - INS-260405-227C
  - INS-260514-4436
  - INS-260626-23E7
  - INS-260626-621D
  - INS-260605-8F5E
  - INS-260627-8CFF
---
A practice spreading in CommandCode's Discord: developers build one project with a high-quality model (Opus, GPT-5.5) specifically to generate a strong taste/skill file, then point cheap open models at that file to continue building. The expensive model's role is to encode durable, high-leverage guidance once; the cheap model's role is to execute against it repeatedly. Because the skill file is a portable markdown contract, this decouples the cost of producing good judgment from the cost of applying it.

This works because Awais's repair layer first closed the tool-calling reliability gap that previously made open models impractical for sustained agentic work — without that, cheap models would burn tokens on tool-call failures regardless of how good the skill file was. With reliability fixed, the marginal quality difference between expensive and cheap models on a well-specified task shrinks enough that the skill file carries most of the load. CommandCode leaned into this with a $1/month plan offering 600M DeepSeek tokens to prove open models are viable, and became likely the most-used coding agent on DeepSeek.

The transferable economic pattern: separate 'generate the contract' (rare, expensive, high-judgment) from 'execute the contract' (frequent, cheap, mechanical), and route models accordingly. It's the same logic as caching an expensive computation — spend frontier-model dollars on the artifact that gets reused, not on every keystroke.
