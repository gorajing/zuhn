---
id: INS-260627-0EEE
domain: ai-development
topic: llm-training
title: Agent RFT shifts the bottleneck from data volume to reward design
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - sample-efficiency
  - rft
  - reward-design
  - data-quality
sources:
  - type: youtube
    title: 'Agent Reinforcement Fine Tuning – Will Hang & Cathy Zhou, OpenAI'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=p1CmPZ2j6Lk'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    RFT works on tiny datasets, so the hard part stops being collecting data and
    becomes specifying a good, unhackable reward.
  standard: >-
    Agent RFT is strikingly sample-efficient: OpenAI reports success from as few
    as 10 examples, and Macco trained GPT-5 to write fast GPU kernels — a domain
    with almost no training data, especially on new hardware like Nvidia B200s —
    using only about 100 PyTorch prompts. This inverts the usual ML constraint
    where you need thousands of labeled examples; here a small set of authentic,
    production-matching examples plus a well-specified reward function is
    enough. The reward is what carries most of the signal.


    Data quality and volume still scale — Cognition went from +5 points at ~100
    examples to +10 points at ~1,000 — so more high-quality, production-matching
    data helps. But the dominant difficulty migrates to reward engineering:
    Macco's unlock was 'specifying a good reward function,' which was itself
    very hard because of reward hacking. The strategic implication is that for
    niche, data-poor domains where you can define a crisp, verifiable success
    metric (kernel speedup, file-selection F1, fact recall, tests passing), RFT
    is viable where supervised fine-tuning would be starved — provided you
    invest in the reward, not the dataset. A complementary cheap trick: Macco
    ran three samples and kept the best, beating state-of-the-art by 72%.
stance: >-
  Because agent RFT improves agents with only 10-100 examples, the binding
  constraint becomes reward-function quality rather than dataset size.
related:
  - INS-260330-E982
  - INS-260410-8E1C
  - INS-260605-278E
  - INS-260605-1A91
  - INS-260626-6A9F
  - INS-260627-6A8B
  - INS-260410-684D
  - INS-260627-8A88
  - INS-260514-3A62
---
Agent RFT is strikingly sample-efficient: OpenAI reports success from as few as 10 examples, and Macco trained GPT-5 to write fast GPU kernels — a domain with almost no training data, especially on new hardware like Nvidia B200s — using only about 100 PyTorch prompts. This inverts the usual ML constraint where you need thousands of labeled examples; here a small set of authentic, production-matching examples plus a well-specified reward function is enough. The reward is what carries most of the signal.

Data quality and volume still scale — Cognition went from +5 points at ~100 examples to +10 points at ~1,000 — so more high-quality, production-matching data helps. But the dominant difficulty migrates to reward engineering: Macco's unlock was 'specifying a good reward function,' which was itself very hard because of reward hacking. The strategic implication is that for niche, data-poor domains where you can define a crisp, verifiable success metric (kernel speedup, file-selection F1, fact recall, tests passing), RFT is viable where supervised fine-tuning would be starved — provided you invest in the reward, not the dataset. A complementary cheap trick: Macco ran three samples and kept the best, beating state-of-the-art by 72%.
