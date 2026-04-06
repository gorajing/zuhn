---
id: INS-260403-22EE
domain: startups
topic: product
title: Stupid comments are contagious in a way that stupid submissions are not
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - comments
  - community
  - content-quality
  - network-effects
sources:
  - type: blog
    title: What I've Learned from Hacker News
    url: 'https://paulgraham.com/hackernews.html'
date_extracted: '2026-04-03'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Bad comments set the tone for entire threads and attract more bad comments,
    while bad submissions exist in isolation — requiring different moderation
    strategies.
  standard: >-
    Graham identifies an asymmetry that most platform builders miss: a lame
    submitted article doesn't make other submissions lame, but a stupid comment
    on a thread sets the tone for the entire region around it. People reply to
    dumb jokes with dumb jokes, creating a cascade. Comments are like kudzu —
    they take over rapidly.


    This asymmetry explains why many platforms have decent front pages but
    terrible comment sections. It also suggests that comment moderation needs to
    be faster and more aggressive than submission moderation, because the damage
    compounds in real-time. Graham's proposed solution — adding response delays
    inversely proportional to predicted comment quality — is elegant because it
    slows the growth of bad threads without censoring them. For product
    builders, this means investing disproportionately in comment quality systems
    relative to submission curation, because that's where contagion lives.
stance: >-
  Bad comments have a multiplicative effect on surrounding comment quality while
  bad submissions have near-zero effect on other submissions — comment quality
  requires fundamentally different intervention than submission quality.
related:
  - INS-260403-1A08
  - INS-260405-3E73
  - INS-260326-C692
  - INS-260404-78E6
  - INS-260322-F65F
  - INS-260404-F6ED
evidence:
  - id: INS-260322-F65F
    type: TRANSFERS_TO
    classified_at: '2026-04-06'
---
Graham identifies an asymmetry that most platform builders miss: a lame submitted article doesn't make other submissions lame, but a stupid comment on a thread sets the tone for the entire region around it. People reply to dumb jokes with dumb jokes, creating a cascade. Comments are like kudzu — they take over rapidly.

This asymmetry explains why many platforms have decent front pages but terrible comment sections. It also suggests that comment moderation needs to be faster and more aggressive than submission moderation, because the damage compounds in real-time. Graham's proposed solution — adding response delays inversely proportional to predicted comment quality — is elegant because it slows the growth of bad threads without censoring them. For product builders, this means investing disproportionately in comment quality systems relative to submission curation, because that's where contagion lives.
