---
id: INS-260514-9DCE
domain: startups
topic: operations
title: >-
  1% contributor retention forces excellence — the open-source maintenance
  principle that scales to any long-lived system
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - maintenance-discipline
  - contributor-retention
  - 1-percent-rule
  - long-lived-systems
  - ffmpeg-culture
sources:
  - type: youtube
    title: >-
      FFmpeg: The Incredible Technology Behind Video on the Internet | Lex
      Fridman Podcast #496
    author: Lex Fridman
    url: 'https://youtu.be/nepKKz-MzFM'
date_extracted: '2026-05-14'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Only 1% of open-source contributors stay long-term. They maintain everyone
    else's code. Force-rule: every contribution must be maintainable by a
    stranger 10 years later. Most teams ignore this — and pay forever.
  standard: >-
    Jean-Baptiste Kempf's articulation of the maintenance-discipline principle
    from FFmpeg/VLC: 'In the end, the core community of VLC is five people. The
    core community of FFmpeg is ten to fifteen. We are the ones who are going to
    maintain your code. Because 1,000 contributors in the timeline and just 10
    staying, it's a 1% chance that someone comes and stays. You will have change
    of jobs, change of wives, you have children, you have accidents in life.
    You're not going to come back, most likely. So we are the ones going to
    maintain your code. It needs to be maintainable. It needs to be excellent.
    Sometimes that means you need to rework your work because it was good, but
    it's not excellent, and we need excellence because we are very few to
    maintain something that is critical for the whole world.' The structural
    argument: in a 1%-retention system, by year 5 the cumulative load on the 1%
    (who maintain everything contributed by the 99% who left) becomes
    overwhelming UNLESS the contributions were structured to be maintainable
    without the author's context. The maintainability requirements: (1) Code
    must be readable by someone who has never met the author. (2) Tests must
    capture intent, not just current behavior. (3) Documentation must explain
    WHY, not just WHAT. (4) Edge cases must be handled explicitly. (5)
    Dependencies must be minimized. (6) Coupling must be loose. Any contribution
    that fails these requirements transfers operational cost to the 1%
    maintainers forever. The FFmpeg/VLC discipline of rejecting 'good but not
    excellent' code is functionally a way to enforce these requirements at
    submission time. The corollary for any long-lived system (open source,
    internal company codebases, scientific data, government databases): assume
    your retention is 1% — most current contributors won't be around when the
    maintenance bill comes due. Apply submission-time filters that enforce
    maintainability. The corollary for startups: as you grow past 50 engineers,
    your turnover rate (typically 15-25% annually) means most of your current
    codebase will be maintained by people who didn't write it within 4-5 years.
    Every shortcut that requires the original author's context is a deferred
    cost that someone else will eventually pay. The corollary for AI-generated
    code: if AI agents are now writing 50%+ of your code (per Tobi Lütke's
    Shopify data), the AI is the original 'author' that won't be around for
    maintenance in its current form (model versions change, tools evolve). The
    same 1% retention principle applies: AI-generated code must be reviewable,
    modifiable, and maintainable by humans (or different AI agents) years later,
    without the original generating context. The corollary for individual
    contributors: write code as if you'll never explain it again. The future
    maintainer is a stranger with limited context — make their life possible.
stance: >-
  The structural reality of long-lived collaborative systems is that ~99% of
  contributors don't stay long-term — they change jobs, have children, get
  distracted, lose interest — so the 1% that DO stay become responsible for
  maintaining everyone else's code over decades; this forces a single discipline
  that scales to any long-lived system: ALL code contributed must be excellent
  enough that future maintainers (who are not the original author) can maintain
  it without context, or the system collapses under its own complexity.
related:
  - INS-260402-97AF
  - INS-260514-6576
  - INS-260410-8767
  - PRI-260403-1D59
  - INS-260330-5747
  - INS-260501-801C
---
Jean-Baptiste Kempf's articulation of the maintenance-discipline principle from FFmpeg/VLC: 'In the end, the core community of VLC is five people. The core community of FFmpeg is ten to fifteen. We are the ones who are going to maintain your code. Because 1,000 contributors in the timeline and just 10 staying, it's a 1% chance that someone comes and stays. You will have change of jobs, change of wives, you have children, you have accidents in life. You're not going to come back, most likely. So we are the ones going to maintain your code. It needs to be maintainable. It needs to be excellent. Sometimes that means you need to rework your work because it was good, but it's not excellent, and we need excellence because we are very few to maintain something that is critical for the whole world.' The structural argument: in a 1%-retention system, by year 5 the cumulative load on the 1% (who maintain everything contributed by the 99% who left) becomes overwhelming UNLESS the contributions were structured to be maintainable without the author's context. The maintainability requirements: (1) Code must be readable by someone who has never met the author. (2) Tests must capture intent, not just current behavior. (3) Documentation must explain WHY, not just WHAT. (4) Edge cases must be handled explicitly. (5) Dependencies must be minimized. (6) Coupling must be loose. Any contribution that fails these requirements transfers operational cost to the 1% maintainers forever. The FFmpeg/VLC discipline of rejecting 'good but not excellent' code is functionally a way to enforce these requirements at submission time. The corollary for any long-lived system (open source, internal company codebases, scientific data, government databases): assume your retention is 1% — most current contributors won't be around when the maintenance bill comes due. Apply submission-time filters that enforce maintainability. The corollary for startups: as you grow past 50 engineers, your turnover rate (typically 15-25% annually) means most of your current codebase will be maintained by people who didn't write it within 4-5 years. Every shortcut that requires the original author's context is a deferred cost that someone else will eventually pay. The corollary for AI-generated code: if AI agents are now writing 50%+ of your code (per Tobi Lütke's Shopify data), the AI is the original 'author' that won't be around for maintenance in its current form (model versions change, tools evolve). The same 1% retention principle applies: AI-generated code must be reviewable, modifiable, and maintainable by humans (or different AI agents) years later, without the original generating context. The corollary for individual contributors: write code as if you'll never explain it again. The future maintainer is a stranger with limited context — make their life possible.
