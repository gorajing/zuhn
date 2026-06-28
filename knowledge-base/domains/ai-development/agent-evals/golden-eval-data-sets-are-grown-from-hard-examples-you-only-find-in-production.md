---
id: INS-260627-4072
domain: ai-development
topic: agent-evals
title: Golden eval data sets are grown from hard examples you only find in production
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - eval-data-sets
  - production-feedback
  - iteration
  - self-driving
sources:
  - type: youtube
    title: 'Shipping AI That Works: An Evaluation Framework for PMs – Aman Khan, Arize'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=2HNSG990Ew8'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Build the eval set as a loop — start with a small dev CSV, ship when the
    team is confident, then mine production for the hard cases you couldn't
    anticipate and feed them back into the data set.
  standard: >-
    Asked how many evals are 'enough,' Khan rejects a fixed number and describes
    a loop: start in development with a small, non-statistically-significant CSV
    (e.g. 10 examples), iterate on data sets and experiments until the whole
    team is confident, ship, then run the same evals on live production data and
    pull new failures back into development. The eval data set is a living asset
    that keeps changing over time.


    His self-driving analogy makes it concrete: at Cruise, the car first
    couldn't drive one block, then handled straight roads, then needed a curated
    data set of left turns, then left turns with a pedestrian on the sidewalk.
    You don't know the difficult scenarios until you encounter them. The
    corollary is to continuously sample production, compare human labels against
    the judge, and add the borderline/'hard' examples (where human and LLM
    disagree, or where the answer is genuinely subjective) into a golden data
    set. The required bar depends on domain — healthcare or legal tech demand
    far more than a travel-planner toy.
stance: >-
  You cannot pre-specify a complete eval set; you must iteratively curate
  hard/borderline examples as production surfaces them.
related:
  - INS-260327-E07C
  - INS-260501-3D33
  - INS-260530-C385
  - INS-260605-E2D9
  - INS-260605-2186
  - INS-260605-09E0
  - INS-260625-C08B
  - INS-260625-8A55
  - INS-260625-D1F9
  - INS-260626-B149
---
Asked how many evals are 'enough,' Khan rejects a fixed number and describes a loop: start in development with a small, non-statistically-significant CSV (e.g. 10 examples), iterate on data sets and experiments until the whole team is confident, ship, then run the same evals on live production data and pull new failures back into development. The eval data set is a living asset that keeps changing over time.

His self-driving analogy makes it concrete: at Cruise, the car first couldn't drive one block, then handled straight roads, then needed a curated data set of left turns, then left turns with a pedestrian on the sidewalk. You don't know the difficult scenarios until you encounter them. The corollary is to continuously sample production, compare human labels against the judge, and add the borderline/'hard' examples (where human and LLM disagree, or where the answer is genuinely subjective) into a golden data set. The required bar depends on domain — healthcare or legal tech demand far more than a travel-planner toy.
