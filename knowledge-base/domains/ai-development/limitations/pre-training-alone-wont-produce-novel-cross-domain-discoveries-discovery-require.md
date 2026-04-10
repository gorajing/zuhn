---
id: INS-260410-B3D7
domain: ai-development
topic: limitations
title: >-
  Pre-training alone won't produce novel cross-domain discoveries — discovery
  requires RL on research-like tasks
actionability: reference
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - llm-limitations
  - rl
  - scientific-discovery
  - pretraining
  - agents
sources:
  - type: youtube
    title: 'AMA: career advice given AGI, how I research ft. Sholto & Trenton'
    author: Dwarkesh Patel
    url: 'https://www.youtube.com/watch?v=XLaRfZ4AHn8'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    LLMs have total recall but can't synthesize across fields because
    pre-training doesn't teach the active exploration loop that PhDs learn.
  standard: >-
    Dwarkesh raises the puzzle that LLMs have memorized essentially all human
    knowledge yet have produced zero documented examples of the cross-field
    novel synthesis humans sometimes perform (e.g., noticing that magnesium
    deficiency produces brain structures matching migraines, leading to a
    treatment). Sholto's answer: the pre-training objective imbues broad
    flexible knowledge but not the skill of making novel connections — that
    skill is what humans build through PhD programs and real-world research
    loops. Trenton adds that models also lack good memory scaffolding: they
    don't decide what to compress into durable summaries the way a human learner
    does.


    The implication is that scale and thinking chains alone won't unlock
    discovery; the field needs to train models via RL on tasks that require
    actively exploring the world, forming hypotheses, and iterating — behaviors
    that are not present in the pre-training data distribution. Until this
    happens, watch for the first credible example of an LLM-produced novel
    cross-domain insight as the key signal that discovery capability is
    emerging.


    Practical takeaway: treat 'the model has all the facts memorized' as a weak
    proxy for research capability. Capability in a new scientific discovery
    setting will come from RL environments that look like science, not from
    bigger base models.
stance: >-
  LLMs fail to make novel cross-field connections because the next-token
  objective instills flexible world knowledge but not the skill of exploration
  and hypothesis-formation; closing that gap requires significant RL on tasks
  that model how researchers actually interact with the world.
related:
  - INS-260410-F985
  - INS-260410-38C9
  - PRI-260406-B9E0
  - INS-260329-E402
  - PRI-260405-6A4E
  - PRI-260407-ED1C
---
Dwarkesh raises the puzzle that LLMs have memorized essentially all human knowledge yet have produced zero documented examples of the cross-field novel synthesis humans sometimes perform (e.g., noticing that magnesium deficiency produces brain structures matching migraines, leading to a treatment). Sholto's answer: the pre-training objective imbues broad flexible knowledge but not the skill of making novel connections — that skill is what humans build through PhD programs and real-world research loops. Trenton adds that models also lack good memory scaffolding: they don't decide what to compress into durable summaries the way a human learner does.

The implication is that scale and thinking chains alone won't unlock discovery; the field needs to train models via RL on tasks that require actively exploring the world, forming hypotheses, and iterating — behaviors that are not present in the pre-training data distribution. Until this happens, watch for the first credible example of an LLM-produced novel cross-domain insight as the key signal that discovery capability is emerging.

Practical takeaway: treat 'the model has all the facts memorized' as a weak proxy for research capability. Capability in a new scientific discovery setting will come from RL environments that look like science, not from bigger base models.
