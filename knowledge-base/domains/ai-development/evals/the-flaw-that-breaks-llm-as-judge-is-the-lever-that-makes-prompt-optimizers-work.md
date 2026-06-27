---
id: INS-260627-2863
domain: ai-development
topic: evals
title: >-
  The flaw that breaks LLM-as-judge is the lever that makes prompt optimizers
  work
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - llm-as-judge
  - prompt-optimization
  - adversarial-examples
  - evaluation
  - mental-model
sources:
  - type: youtube
    title: 'DSPy: The End of Prompt Engineering - Kevin Madura, AlixPartners'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=-cKUW6n8hBU'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    A model's tendency to find spurious 'nooks and crannies' degrades judges but
    is exactly what optimizers harness to lift task performance.
  standard: >-
    Madura relays a point from a Karpathy/Dwarkesh discussion: LLM-as-judge has
    a ceiling because the model being evaluated can find adversarial examples —
    spurious cracks in the giant judge model — that let it cheat the score
    without genuinely improving. The judge can only go so far before the
    candidate model games it. Inverting that observation reframes prompt
    optimization: the optimizer is deliberately searching the same nooks and
    crannies of the model, but to find prompt phrasings that improve real
    performance against your dataset rather than to cheat.


    The transferable mental model is that the model's vast, exploitable response
    surface is a double-edged property. Pointed at a metric you don't fully
    trust (a judge), it produces gaming; pointed at a metric grounded in real
    input/output ground truth, it produces optimization. This is why metric
    quality is load-bearing: the optimizer will exploit whatever you measure, so
    a sloppy metric gets you a prompt that games the metric, while a faithful
    metric gets you a genuinely better prompt. The same force destroys bad evals
    and powers good optimization.
stance: >-
  The adversarial 'crack-finding' that lets a model game an LLM judge is the
  same mechanism a prompt optimizer exploits to improve performance against a
  dataset.
related:
  - INS-260605-4FE3
  - INS-260625-13F0
  - INS-260627-6846
  - INS-260625-ED7E
  - INS-260403-E6F0
  - INS-260627-54A4
---
Madura relays a point from a Karpathy/Dwarkesh discussion: LLM-as-judge has a ceiling because the model being evaluated can find adversarial examples — spurious cracks in the giant judge model — that let it cheat the score without genuinely improving. The judge can only go so far before the candidate model games it. Inverting that observation reframes prompt optimization: the optimizer is deliberately searching the same nooks and crannies of the model, but to find prompt phrasings that improve real performance against your dataset rather than to cheat.

The transferable mental model is that the model's vast, exploitable response surface is a double-edged property. Pointed at a metric you don't fully trust (a judge), it produces gaming; pointed at a metric grounded in real input/output ground truth, it produces optimization. This is why metric quality is load-bearing: the optimizer will exploit whatever you measure, so a sloppy metric gets you a prompt that games the metric, while a faithful metric gets you a genuinely better prompt. The same force destroys bad evals and powers good optimization.
