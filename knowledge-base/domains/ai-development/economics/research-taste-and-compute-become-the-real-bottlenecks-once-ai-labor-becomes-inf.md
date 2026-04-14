---
id: INS-260410-2383
domain: ai-development
topic: economics
title: >-
  Research taste and compute become the real bottlenecks once AI labor becomes
  infinite
actionability: reference
confidence: medium
shelf_life: evergreen
status: active
tags:
  - r-and-d
  - bottlenecks
  - parallelism
  - scaling
sources:
  - type: youtube
    title: >-
      AI 2027: month-by-month model of intelligence explosion — Scott Alexander
      & Daniel Kokotajlo
    author: Dwarkesh Patel
    url: 'https://www.youtube.com/watch?v=htOvH12T7mU'
date_extracted: '2026-04-10'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Ten Napoleons are not worth 400,000 soldiers — parallelizing AI researchers
    hits diminishing returns fast, and the binding constraints become taste and
    compute.
  standard: >-
    Kokotajlo concedes you get massive diminishing returns to having more minds
    running in parallel. Labs already have only 20-30 people on core pretraining
    teams and don't seem to be throwing every Harvard math PhD at the problem —
    if headcount were the bottleneck, they would. The intelligence explosion
    story doesn't actually rest on 'a million AI researchers in parallel' — it
    rests on serial thought speed (50-100x humans), online learning, and
    crucially research taste: the ability to pick which experiments to run
    rather than flailing.


    Once you have abundant parallel compute-labor, the question becomes: how
    good is your AI at learning from each experiment? How much compute do you
    have to run those experiments? These are the frontier constraints, and both
    are hard to parallelize past. Most human bureaucracies that 10x'd their
    headcount didn't 10x their output — moral-maze dynamics kick in.


    Application: when evaluating any 'AI will do research at N-x speed' claim,
    ask what the binding constraint actually is. If it's compute, that's
    capex-limited. If it's taste, that's a capability threshold, not a scaling
    question. Don't assume the current bottleneck (researcher count) remains the
    bottleneck after you remove it.
stance: >-
  Scaling AI researchers in parallel rapidly diminishes in value; the
  bottlenecks that matter at the frontier are research taste (which experiments
  to run) and compute for running those experiments.
related:
  - PRI-260413-A957
  - INS-260330-C31B
  - INS-260405-E4FC
  - INS-260330-2F74
  - PRI-260323-8E89
---
Kokotajlo concedes you get massive diminishing returns to having more minds running in parallel. Labs already have only 20-30 people on core pretraining teams and don't seem to be throwing every Harvard math PhD at the problem — if headcount were the bottleneck, they would. The intelligence explosion story doesn't actually rest on 'a million AI researchers in parallel' — it rests on serial thought speed (50-100x humans), online learning, and crucially research taste: the ability to pick which experiments to run rather than flailing.

Once you have abundant parallel compute-labor, the question becomes: how good is your AI at learning from each experiment? How much compute do you have to run those experiments? These are the frontier constraints, and both are hard to parallelize past. Most human bureaucracies that 10x'd their headcount didn't 10x their output — moral-maze dynamics kick in.

Application: when evaluating any 'AI will do research at N-x speed' claim, ask what the binding constraint actually is. If it's compute, that's capex-limited. If it's taste, that's a capability threshold, not a scaling question. Don't assume the current bottleneck (researcher count) remains the bottleneck after you remove it.
