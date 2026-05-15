---
id: INS-260514-A295
domain: ai-development
topic: prompting
title: >-
  Deep Interview skill: when specs are vague, have AI ask YOU the questions
  instead of building blindly
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - deep-interview
  - spec-discovery
  - ai-asks-questions
  - vague-spec-workflow
  - manu-codex
sources:
  - type: youtube
    title: Codex 마스터 클래스 라이브 | 하네스 설계부터 서비스 배포까지 (라이브 마지막에는 작은 이벤트도 준비했습니다)
    author: 개발동생
    url: 'https://www.youtube.com/live/F5pr-hfyuEE'
date_extracted: '2026-05-14'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Before planning, run a 'Deep Interview' skill where AI asks YOU the
    questions. Turns 'I don't fully know what I want' into structured discovery.
    Live walk-through: vague Codex prompt → 8 targeted questions → coherent spec
    in 10 minutes.
  standard: >-
    Manu's most repeated workflow lesson: 'It is an incredibly difficult task to
    clearly draft a plan from the very beginning when you are doing any
    development. Since there are incredibly many instances where even I don't
    know what I want, I always go through this interview stage at the beginning,
    which conversely allows the AI to ask me the questions I need.' Live
    demonstration in the masterclass: he typed a vague prompt ('I want to create
    a web service called Commit Hero, an ironic tool for developers that
    analyzes GitHub history and generates fun RPG-style character cards. Let's
    conduct an interview before building.'). The Deep Interview skill then drove
    the discovery: (1) 'Which side should the primary goal be on — creating fun
    cards vs analyzing developers vs going viral?' (2) 'Card tone — serious RPG
    fantasy vs developer humor vs collectible cards?' (3) 'MVP data input method
    — username only vs OAuth-included option?' (4) 'Card elements — character
    class/level/stats/skills/weaknesses + report?' (5) 'MVP sharing method — URL
    only vs URL + image?' (6) 'Card generation — rule-based vs AI-generated?'
    (7) 'Deployment structure — static client + serverless function API on
    Vercel?' (8) 'Frontend framework — Next.js vs Astro? Package manager — Bun
    vs npm?' After ~10 minutes of answering, the implicit spec in Manu's head
    had become an explicit spec, and the next step (plan generation) had
    something concrete to work from. Why this beats jumping to implementation:
    when humans don't fully specify, AI fills the gaps with the centroid of its
    training data — which is generic. The Deep Interview surfaces the specific
    decisions you implicitly hold but haven't articulated. The general
    principle: when you find yourself unable to clearly specify a task, the
    right response isn't to push through with vague guidance. It's to have the
    AI surface the latent decisions via structured questioning. This pattern
    generalizes far beyond development: (a) Strategy work (have AI interview you
    about goals, constraints, success metrics before drafting). (b) Writing
    (have AI interview you about audience, takeaway, tone before drafting). (c)
    Decision-making (have AI interview you about options, criteria, tradeoffs
    before deciding). Build a 'Deep Interview' skill in your own harness and use
    it as the FIRST step for any task where you don't have a clear written
    brief. The discovery work is what makes the rest possible.
stance: >-
  The most underrated step in AI-assisted development is the INTERVIEW stage —
  before any planning or implementation, run a 'Deep Interview' skill that has
  the AI ask you clarifying questions one by one (tone? data input method?
  sharing method? card generation rule-based or AI? deployment target?) until
  the implicit spec in your head becomes an explicit spec; this turns the
  typical 'I don't fully know what I want' failure into structured discovery.
related:
  - INS-260320-47FA
  - INS-260403-06E7
  - INS-260501-E3C7
  - INS-260501-3F01
  - INS-260409-2A51
  - INS-260403-FFF0
---
Manu's most repeated workflow lesson: 'It is an incredibly difficult task to clearly draft a plan from the very beginning when you are doing any development. Since there are incredibly many instances where even I don't know what I want, I always go through this interview stage at the beginning, which conversely allows the AI to ask me the questions I need.' Live demonstration in the masterclass: he typed a vague prompt ('I want to create a web service called Commit Hero, an ironic tool for developers that analyzes GitHub history and generates fun RPG-style character cards. Let's conduct an interview before building.'). The Deep Interview skill then drove the discovery: (1) 'Which side should the primary goal be on — creating fun cards vs analyzing developers vs going viral?' (2) 'Card tone — serious RPG fantasy vs developer humor vs collectible cards?' (3) 'MVP data input method — username only vs OAuth-included option?' (4) 'Card elements — character class/level/stats/skills/weaknesses + report?' (5) 'MVP sharing method — URL only vs URL + image?' (6) 'Card generation — rule-based vs AI-generated?' (7) 'Deployment structure — static client + serverless function API on Vercel?' (8) 'Frontend framework — Next.js vs Astro? Package manager — Bun vs npm?' After ~10 minutes of answering, the implicit spec in Manu's head had become an explicit spec, and the next step (plan generation) had something concrete to work from. Why this beats jumping to implementation: when humans don't fully specify, AI fills the gaps with the centroid of its training data — which is generic. The Deep Interview surfaces the specific decisions you implicitly hold but haven't articulated. The general principle: when you find yourself unable to clearly specify a task, the right response isn't to push through with vague guidance. It's to have the AI surface the latent decisions via structured questioning. This pattern generalizes far beyond development: (a) Strategy work (have AI interview you about goals, constraints, success metrics before drafting). (b) Writing (have AI interview you about audience, takeaway, tone before drafting). (c) Decision-making (have AI interview you about options, criteria, tradeoffs before deciding). Build a 'Deep Interview' skill in your own harness and use it as the FIRST step for any task where you don't have a clear written brief. The discovery work is what makes the rest possible.
