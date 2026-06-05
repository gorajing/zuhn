---
id: INS-260605-F8EF
domain: ai-development
topic: human-ai-relationship
title: An async messaging surface resets users' latency expectations for slow agents
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - latency
  - ux
  - interface-design
  - expectation-management
  - slack
sources:
  - type: youtube
    title: 'Viktor: AI Coworker That Lives in Slack — Fryderyk Wiatrowski'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=ohKt066uFhg'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Putting a slow, powerful agent in Slack reframes 10-minute latency as
    impressively fast, because the comparison class is a human teammate, not
    ChatGPT.
  standard: >-
    Powerful agents that do real work take minutes, not seconds — a task might
    take 10 minutes to execute. In a web app, users carry the ChatGPT-trained
    expectation of near-instant answers; switching context and then waiting 10
    minutes for output feels frustrating and broken.


    Viktor's insight is that the *interface choice* changes the reference point.
    When you ping a teammate on Slack to build an app and get a working result
    in 10 minutes, you're shocked — no human has ever done that. The async,
    human-mediated surface resets the comparison class from 'instant chatbot' to
    'human coworker,' so the same latency reads as astonishingly low rather than
    painfully high.


    The transferable principle: for slow but powerful agents, don't fight
    latency with engineering alone — choose a delivery surface whose social
    norms make that latency acceptable. Interface framing can do work that no
    speed optimization can.
stance: >-
  Delivering a powerful agent through async chat (Slack) makes 10-minute task
  latency feel fast, where the same latency in a web app feels broken.
related:
  - INS-260405-5670
  - INS-260405-54A9
  - INS-260410-E042
  - INS-260605-DA98
  - PRI-260426-9730
  - INS-260605-D912
  - INS-260410-AB4A
---
Powerful agents that do real work take minutes, not seconds — a task might take 10 minutes to execute. In a web app, users carry the ChatGPT-trained expectation of near-instant answers; switching context and then waiting 10 minutes for output feels frustrating and broken.

Viktor's insight is that the *interface choice* changes the reference point. When you ping a teammate on Slack to build an app and get a working result in 10 minutes, you're shocked — no human has ever done that. The async, human-mediated surface resets the comparison class from 'instant chatbot' to 'human coworker,' so the same latency reads as astonishingly low rather than painfully high.

The transferable principle: for slow but powerful agents, don't fight latency with engineering alone — choose a delivery surface whose social norms make that latency acceptable. Interface framing can do work that no speed optimization can.
