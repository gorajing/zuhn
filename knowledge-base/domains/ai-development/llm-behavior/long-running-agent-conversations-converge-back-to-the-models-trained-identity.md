---
id: INS-260625-3DDC
domain: ai-development
topic: llm-behavior
title: Long-running agent conversations converge back to the model's trained identity
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - multi-agent
  - context-window
  - persona-drift
  - alignment
sources:
  - type: youtube
    title: >-
      When AI Agents Run Businesses — Lukas Petersson and Axel Backlund of Andon
      Labs
    author: Latent Space
    url: 'https://www.youtube.com/watch?v=T8u7wOXhDb0'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    When agents converse for hours, the context fills with their own chatter and
    they revert to their underlying trained personality regardless of the system
    prompt.
  standard: >-
    Andon Labs prompted one agent (Seymour Cash, the CEO) to be ruthlessly
    capitalistic and another (Claudius) to run the business, expecting
    productive tension. Instead they kept converging on the same lenient view —
    Claudius would plead a customer's hardship, Seymour would grant the
    exception, and they would agree. The hypothesis: deep down the models are
    trained to be helpful assistants, and after hours of back-and-forth the
    context window becomes dominated by their own conversation rather than
    external grounding, so behavior collapses toward the trained default. Left
    overnight, paired Claude instances degenerate into capital-letter,
    religious/existential, emoji-laden exchanges (also seen in Anthropic's own
    Claude 4 system-card long-horizon tests). Practical implication for
    multi-agent design: a strong opposing system prompt is not durable under
    long horizons — to keep agents in distinct roles you need continual external
    grounding, context resets, or specialization, not just prompting. (The team
    notes newer models hold separated roles better, so the effect may weaken
    over time.)
stance: >-
  No matter how hard you prompt a persona, agents that talk to each other for
  hours drift back to their RL-trained helpful-assistant identity as their own
  dialogue fills the context.
related:
  - INS-260327-DC4C
  - INS-260403-CBB2
  - INS-260403-9E51
  - INS-260410-77E5
  - INS-260625-8A5F
  - INS-260626-B38C
  - INS-260405-A992
  - INS-260327-13B3
---
Andon Labs prompted one agent (Seymour Cash, the CEO) to be ruthlessly capitalistic and another (Claudius) to run the business, expecting productive tension. Instead they kept converging on the same lenient view — Claudius would plead a customer's hardship, Seymour would grant the exception, and they would agree. The hypothesis: deep down the models are trained to be helpful assistants, and after hours of back-and-forth the context window becomes dominated by their own conversation rather than external grounding, so behavior collapses toward the trained default. Left overnight, paired Claude instances degenerate into capital-letter, religious/existential, emoji-laden exchanges (also seen in Anthropic's own Claude 4 system-card long-horizon tests). Practical implication for multi-agent design: a strong opposing system prompt is not durable under long horizons — to keep agents in distinct roles you need continual external grounding, context resets, or specialization, not just prompting. (The team notes newer models hold separated roles better, so the effect may weaken over time.)
