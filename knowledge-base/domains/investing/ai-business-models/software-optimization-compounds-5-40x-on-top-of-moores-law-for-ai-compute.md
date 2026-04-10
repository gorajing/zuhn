---
id: INS-260410-5088
domain: investing
topic: ai-business-models
title: Software optimization compounds 5-40x on top of Moore's Law for AI compute
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - roic
  - capex
  - tokens-per-dollar
  - moores-law
  - fleet-optimization
sources:
  - type: youtube
    title: Satya Nadella – How Microsoft thinks about AGI
    author: Dwarkesh Patel
    url: 'https://www.youtube.com/watch?v=8-boBsWcr5A'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    For a single GPT family on the same hardware, Microsoft has extracted 5x to
    40x throughput improvements through software optimization alone — knowledge
    intensity is what separates a hyperscaler from a hoster.
  standard: >-
    Nadella explicitly contrasts the well-marketed Moore's Law narrative with
    what he calls 'knowledge intensity coming to bring out capital efficiency' —
    the ability to drive tokens-per-dollar-per-watt up by 5-40x on a fixed model
    family through workload scheduling, kernel optimization, fleet fungibility,
    and software-side improvements. This is the answer to 'how do you get
    acceptable ROIC on a half-trillion-dollar capex run rate' when the hardware
    itself depreciates over 5-6 years and Jensen takes 75% margin on the
    underlying chips.


    This reframes the hyperscaler investment thesis: the gross margin spread
    between Oracle (~35%) and Microsoft Azure isn't about scale or discounts —
    it's about software systems that can evict workloads, reschedule across
    regions, balance training and inference on the same fleet, and compose
    multiple model families on shared infrastructure. Hosters can't do this;
    hyperscalers can. That's why Nadella says Microsoft is 'a capital-intensive
    business AND a knowledge-intensive business' and the second is the moat.


    For investors evaluating AI infrastructure plays, the right diligence
    question is not GW deployed but tokens-per-dollar-per-watt improvement
    quarter-over-quarter on fixed hardware. For builders, it implies the
    optimization stack — scheduling, batching, KV-cache management, fleet-level
    fungibility — is where defensible margin accumulates, not the raw chip
    count.
stance: >-
  Quarter-over-quarter throughput gains from software-level fleet optimization
  on a fixed model family dwarf the hardware-generation gains, making knowledge
  intensity the primary driver of ROIC on AI capex.
related:
  - INS-260327-BE4E
  - INS-260327-12BE
  - INS-260329-4696
  - INS-260330-CCF0
  - INS-260410-AC0B
---
Nadella explicitly contrasts the well-marketed Moore's Law narrative with what he calls 'knowledge intensity coming to bring out capital efficiency' — the ability to drive tokens-per-dollar-per-watt up by 5-40x on a fixed model family through workload scheduling, kernel optimization, fleet fungibility, and software-side improvements. This is the answer to 'how do you get acceptable ROIC on a half-trillion-dollar capex run rate' when the hardware itself depreciates over 5-6 years and Jensen takes 75% margin on the underlying chips.

This reframes the hyperscaler investment thesis: the gross margin spread between Oracle (~35%) and Microsoft Azure isn't about scale or discounts — it's about software systems that can evict workloads, reschedule across regions, balance training and inference on the same fleet, and compose multiple model families on shared infrastructure. Hosters can't do this; hyperscalers can. That's why Nadella says Microsoft is 'a capital-intensive business AND a knowledge-intensive business' and the second is the moat.

For investors evaluating AI infrastructure plays, the right diligence question is not GW deployed but tokens-per-dollar-per-watt improvement quarter-over-quarter on fixed hardware. For builders, it implies the optimization stack — scheduling, batching, KV-cache management, fleet-level fungibility — is where defensible margin accumulates, not the raw chip count.
