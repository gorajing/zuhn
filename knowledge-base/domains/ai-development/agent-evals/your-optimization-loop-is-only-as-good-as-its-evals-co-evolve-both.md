---
id: INS-260627-A4DD
domain: ai-development
topic: agent-evals
title: Your optimization loop is only as good as its evals — co-evolve both
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agent-evals
  - llm-as-judge
  - eval-reliability
  - feedback-loops
  - evaluating-evaluators
sources:
  - type: youtube
    title: 'Build a Prompt Learning Loop - SallyAnn DeLucia & Fuad Ali, Arize'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=SbcQYbrvAfI'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Run two co-evolving loops — one optimizing the agent, one optimizing the
    evaluators — because the agent loop only works as well as the eval feeding
    it.
  standard: >-
    Because prompt learning uses eval output as its training signal, the quality
    of that signal caps the quality of the result. The presenters stress a point
    teams routinely skip: people grab an off-the-shelf evaluator or write one
    once and forget it, but if you do not trust your eval you cannot trust any
    optimization built on it. Their benchmark advantage over GEPA was attributed
    partly to eval engineering — making the judge itself high quality.


    The proposed structure is two co-evolving loops. The agent loop collects the
    agent's failures and optimizes its prompt. The eval loop collects the
    *eval's* failures — cases where the judge was wrong — using signals like
    log-probs as confidence scores or a jury-of-judges to find low-confidence
    verdicts, then has a human annotate where the eval went wrong and optimizes
    the eval prompt by the same process. Same mechanism, different data.


    The actionable discipline: apply the same rigor (rules, explanations,
    train/test discipline) to your evaluator prompts that you apply to your
    agent prompts, and keep optimizing the evaluator over time rather than
    treating it as fixed infrastructure. An eval you do not actively maintain
    silently degrades every decision it informs.
stance: >-
  Eval prompts must be optimized as rigorously and continuously as agent
  prompts, because an unreliable eval poisons every downstream
  prompt-optimization decision.
related:
  - INS-260409-0DB0
  - INS-260627-2925
  - INS-260627-41C2
  - INS-260410-F40F
  - INS-260605-6444
---
Because prompt learning uses eval output as its training signal, the quality of that signal caps the quality of the result. The presenters stress a point teams routinely skip: people grab an off-the-shelf evaluator or write one once and forget it, but if you do not trust your eval you cannot trust any optimization built on it. Their benchmark advantage over GEPA was attributed partly to eval engineering — making the judge itself high quality.

The proposed structure is two co-evolving loops. The agent loop collects the agent's failures and optimizes its prompt. The eval loop collects the *eval's* failures — cases where the judge was wrong — using signals like log-probs as confidence scores or a jury-of-judges to find low-confidence verdicts, then has a human annotate where the eval went wrong and optimizes the eval prompt by the same process. Same mechanism, different data.

The actionable discipline: apply the same rigor (rules, explanations, train/test discipline) to your evaluator prompts that you apply to your agent prompts, and keep optimizing the evaluator over time rather than treating it as fixed infrastructure. An eval you do not actively maintain silently degrades every decision it informs.
