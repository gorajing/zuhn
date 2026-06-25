---
id: INS-260625-E9A9
domain: ai-development
topic: agent-patterns
title: >-
  When an agent fails at tool use, fix the behavior — don't reach for a bigger
  model
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - tool-use
  - agents
  - model-selection
  - debugging
  - rl
sources:
  - type: youtube
    title: 'Stop Making Models Bigger, Make Them Behave — Kobie Crawford, Snorkel'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=TNwJ1LMiENk'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    A 235B reasoning model failed a financial tool-use task by guessing at
    non-existent tables and hallucinating an answer, while a 4B model trained
    for tool discipline first discovered the tables, inspected the schema, and
    self-corrected — the bottleneck was behavior, not brains.
  standard: >-
    The default reflex when an LLM application underperforms is to swap in a
    larger model and expect better reasoning to carry the task. Snorkel's FinQA
    study shows why this often misdiagnoses the problem. Asked for the
    year-over-year growth of YouTube ad revenue, a 235B-parameter reasoning
    model issued a query against a non-existent table, never inspected the
    environment to see what tables actually existed, retried blindly, and
    finally hallucinated an answer. The model had every reasoning advantage and
    still failed — because the failure mode was tool-use discipline, not
    cognition.


    A 4B model fine-tuned for the same environment exhibited the missing
    behaviors: it first called get_table_names to discover what was available,
    then inspected the schema, ran a query, hit a bad-column error, and
    self-corrected to the right column. Those two behaviors — discovering the
    environment before acting, and correcting on observed errors — were the real
    keys to success, and a model 60x smaller had them where the giant did not.


    The actionable rule: before escalating model size (and inference cost),
    diagnose whether the failure is a reasoning gap or a behavioral one. If your
    agent guesses instead of inspecting, ignores tool outputs, or can't recover
    from errors, a smarter model is a sledgehammer for a walnut — it adds
    capability that doesn't touch the actual failure. Identify the specific
    failing behavior first. Connects to
    [[give-agents-verification-criteria-and-self-verification-tools-so-they-return-a-c]]
    and the broader case for
    [[own-the-model-when-sovereignty-beats-peak-intelligence]].
stance: >-
  Most agentic task failures stem from poor tool-use discipline rather than
  insufficient reasoning capacity, so scaling up the model does not fix them.
related:
  - INS-260323-E520
  - INS-260325-6FA7
  - INS-260402-8E46
  - INS-260405-2DCC
  - INS-260403-CDB0
  - INS-260403-BA81
  - INS-260403-06E7
  - INS-260409-17E9
  - INS-260409-04C8
  - INS-260410-939B
---
The default reflex when an LLM application underperforms is to swap in a larger model and expect better reasoning to carry the task. Snorkel's FinQA study shows why this often misdiagnoses the problem. Asked for the year-over-year growth of YouTube ad revenue, a 235B-parameter reasoning model issued a query against a non-existent table, never inspected the environment to see what tables actually existed, retried blindly, and finally hallucinated an answer. The model had every reasoning advantage and still failed — because the failure mode was tool-use discipline, not cognition.

A 4B model fine-tuned for the same environment exhibited the missing behaviors: it first called get_table_names to discover what was available, then inspected the schema, ran a query, hit a bad-column error, and self-corrected to the right column. Those two behaviors — discovering the environment before acting, and correcting on observed errors — were the real keys to success, and a model 60x smaller had them where the giant did not.

The actionable rule: before escalating model size (and inference cost), diagnose whether the failure is a reasoning gap or a behavioral one. If your agent guesses instead of inspecting, ignores tool outputs, or can't recover from errors, a smarter model is a sledgehammer for a walnut — it adds capability that doesn't touch the actual failure. Identify the specific failing behavior first. Connects to [[give-agents-verification-criteria-and-self-verification-tools-so-they-return-a-c]] and the broader case for [[own-the-model-when-sovereignty-beats-peak-intelligence]].
