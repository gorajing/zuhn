---
id: INS-260605-A175
domain: ai-development
topic: agent-patterns
title: Scale agent deliberation to reversibility and cost-of-being-wrong
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - risk-analysis
  - agent-decisions
  - decision-frameworks
  - reversibility
sources:
  - type: youtube
    title: >-
      Context Graphs for Explainable, Decision-Aware AI Agents — Andreas
      Kollegger & Zaid Zaim, Neo4j
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=abvQEhvRI_c'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Classify each decision by reversibility and cost of error, and let serious,
    irreversible, high-cost decisions consume far more of the agent's analysis
    budget.
  standard: >-
    The risk-value analysis stage of the workflow makes risk assessment
    proportional to stakes. Two explicit dimensions drive how much effort an
    agent should invest: is the decision reversible (can it be backed off
    cheaply), and what is the cost of being wrong (a life at stake versus an
    empty Red Bull shelf). A reversible, low-cost mistake warrants a fast call;
    an irreversible, high-cost one warrants spending most of the agent's time on
    the risk side.


    This mirrors how thoughtful humans triage decisions and is directly
    implementable as a routing or budgeting heuristic in an agentic workflow. It
    pairs with 'reference class validation' — refusing to default to
    statistically-average behavior when the specific case might be the dangerous
    1% (e.g., a drug that is right 99% of the time but fatal for a small
    subpopulation). The particulars of the case, not the base rate, should
    govern high-stakes action.
stance: >-
  An agent should spend deliberation effort in proportion to a decision's
  irreversibility and the cost of being wrong, not treat all choices uniformly.
related:
  - INS-260329-59A5
  - PRI-260406-0E02
  - PRI-260406-6A1C
  - INS-260329-2AB9
  - INS-260404-7604
---
The risk-value analysis stage of the workflow makes risk assessment proportional to stakes. Two explicit dimensions drive how much effort an agent should invest: is the decision reversible (can it be backed off cheaply), and what is the cost of being wrong (a life at stake versus an empty Red Bull shelf). A reversible, low-cost mistake warrants a fast call; an irreversible, high-cost one warrants spending most of the agent's time on the risk side.

This mirrors how thoughtful humans triage decisions and is directly implementable as a routing or budgeting heuristic in an agentic workflow. It pairs with 'reference class validation' — refusing to default to statistically-average behavior when the specific case might be the dangerous 1% (e.g., a drug that is right 99% of the time but fatal for a small subpopulation). The particulars of the case, not the base rate, should govern high-stakes action.
