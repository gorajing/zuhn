---
id: INS-260605-1787
domain: ai-development
topic: llm-costs
title: >-
  Offload trivial subtasks to weak models for order-of-magnitude cost and speed
  wins
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - model-routing
  - cost-optimization
  - task-decomposition
  - small-models
  - agent-patterns
sources:
  - type: youtube
    title: >-
      Scaling the Next Paradigm of Heterogeneous Intelligence — Adrian
      Bertagnoli, Callosum
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=WRBNDpUhsJQ'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    You don't need GPT to zoom an image — offloading such subtasks to less
    intelligent models was 11x faster and 43x cheaper on those steps, driving
    the system's overall gains.
  standard: >-
    In Callosum's visual web navigation work, beating state-of-the-art on Video
    Web Arena (outperforming GPT-5.2 and Gemini 2.5 by 18% and 25%) came partly
    from acknowledging the task is intrinsically heterogeneous: it decomposes
    into visual reasoning, textual reasoning, and mechanical steps, each best
    served by a different model. A key differentiator was mapping low-value
    subtasks — like zooming or generating a different visual framing for the
    agent — onto deliberately less intelligent models, because a frontier
    model's capability is wasted on a zoom operation.


    On those offloaded subtasks alone, the system was 11x faster and 43x cheaper
    than using ChatGPT, and these savings accumulated into the overall
    3x-faster, 3.7x-cheaper result. Combining models (e.g., Qwen3-VL-8B-Instruct
    with Kimi 2.5) was 1.3x faster than Kimi alone and 18x cheaper than GPT-5.2
    alone. The actionable pattern: audit a multi-step agent workflow for
    mechanical or narrow subtasks, and route those to the cheapest model that
    can do them — the savings compound and, per Bertagnoli, there is no accuracy
    downside to constructing the system heterogeneously.
stance: >-
  Routing mechanical subtasks like image-zooming to small models, rather than
  calling a frontier model, captures most of a heterogeneous system's cost and
  latency advantage.
related:
  - INS-260605-6423
  - INS-260605-B9A9
  - INS-260625-1C2B
  - INS-260412-9777
  - INS-260410-E660
  - INS-260330-4AD5
  - INS-260605-C9EB
---
In Callosum's visual web navigation work, beating state-of-the-art on Video Web Arena (outperforming GPT-5.2 and Gemini 2.5 by 18% and 25%) came partly from acknowledging the task is intrinsically heterogeneous: it decomposes into visual reasoning, textual reasoning, and mechanical steps, each best served by a different model. A key differentiator was mapping low-value subtasks — like zooming or generating a different visual framing for the agent — onto deliberately less intelligent models, because a frontier model's capability is wasted on a zoom operation.

On those offloaded subtasks alone, the system was 11x faster and 43x cheaper than using ChatGPT, and these savings accumulated into the overall 3x-faster, 3.7x-cheaper result. Combining models (e.g., Qwen3-VL-8B-Instruct with Kimi 2.5) was 1.3x faster than Kimi alone and 18x cheaper than GPT-5.2 alone. The actionable pattern: audit a multi-step agent workflow for mechanical or narrow subtasks, and route those to the cheapest model that can do them — the savings compound and, per Bertagnoli, there is no accuracy downside to constructing the system heterogeneously.
