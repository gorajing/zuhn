---
id: INS-260625-25BF
domain: ai-development
topic: agent-patterns
title: >-
  The orchestration paradox: smarter models burn tokens choosing a method
  instead of executing
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - reasoning-models
  - agent-loops
  - token-waste
  - orchestration
  - tool-use
sources:
  - type: youtube
    title: >-
      Why More Context Makes Your Agent Dumber and What to Do About It — Nupur
      Sharma, Qodo
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=EcqMYoIV57A'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    High-reasoning models like Opus tend to enter a research loop—hopping
    between methods and second-guessing themselves—so most API tokens are spent
    on finding a way to do the task rather than doing it.
  standard: >-
    As models get smarter, they reason more about *how* to solve a problem:
    which tool to use, whether a better method exists, whether to research
    further. Qodo calls this the orchestration paradox—the agent 'goes into a
    loop of trying to do something rather than doing something.' The most
    expensive models are the most prone to it precisely because their stronger
    reasoning surfaces more plausible alternative approaches to deliberate over.


    This is a direct counterweight to the intuition that you should always reach
    for the latest, greatest model. On open-ended discovery and planning, that
    reasoning power pays off. On any task with a knowable answer, it manifests
    as wasted tokens, higher latency, and unpredictable termination—the same
    unbounded-loop failure mode that makes agent reliability hard.


    The diagnostic signal is a transcript dominated by method selection and
    self-challenge ('maybe not this, another way, another way') rather than
    concrete progress. Recognizing it tells you the fix is not a better model
    but a tighter harness—hard gates, counters, or timeouts that force the agent
    to commit and execute.
stance: >-
  More capable reasoning models make agents worse at finishing tasks because
  they loop on selecting and re-challenging the best approach rather than doing
  the work.
related:
  - INS-260323-E520
  - INS-260403-B8AA
  - INS-260403-CDB0
  - INS-260403-A27F
  - INS-260409-04C8
  - INS-260410-939B
  - INS-260410-966F
  - INS-260409-6A6C
  - INS-260410-86B0
  - INS-260410-6ABA
---
As models get smarter, they reason more about *how* to solve a problem: which tool to use, whether a better method exists, whether to research further. Qodo calls this the orchestration paradox—the agent 'goes into a loop of trying to do something rather than doing something.' The most expensive models are the most prone to it precisely because their stronger reasoning surfaces more plausible alternative approaches to deliberate over.

This is a direct counterweight to the intuition that you should always reach for the latest, greatest model. On open-ended discovery and planning, that reasoning power pays off. On any task with a knowable answer, it manifests as wasted tokens, higher latency, and unpredictable termination—the same unbounded-loop failure mode that makes agent reliability hard.

The diagnostic signal is a transcript dominated by method selection and self-challenge ('maybe not this, another way, another way') rather than concrete progress. Recognizing it tells you the fix is not a better model but a tighter harness—hard gates, counters, or timeouts that force the agent to commit and execute.
