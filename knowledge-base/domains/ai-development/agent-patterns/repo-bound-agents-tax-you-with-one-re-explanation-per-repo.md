---
id: INS-260625-A996
domain: ai-development
topic: agent-patterns
title: Repo-bound agents tax you with one re-explanation per repo
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - agents
  - multi-repo
  - developer-experience
  - token-cost
  - context-engineering
sources:
  - type: youtube
    title: 'A Genius With Amnesia - Victor Savkin, Nx'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=jVjt-2g8NMY'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    One change propagating through UI → module1 → module2 → platform →
    production became seven separate re-explanations because each agent session
    was a blank slate.
  standard: >-
    Savkin traces one button change through four repos and counts seven distinct
    re-explanations: express the intent in UI, re-explain it in module one to
    consume the package, go back to UI to re-explain the original change plus a
    newly discovered incompatibility, re-explain again after the fix, repeat for
    module two, integrate in platform, and finally re-explain the week-old
    change again when a production bug appears. Each box can be a different
    person, but the explanations still occur. The cost is linear in repos
    touched: changing something across 20 repos means re-explaining 20 times —
    'a lot of developer time spent, but also a lot of tokens burned.' Two
    failure modes compound it. Because the agent can't align a change with the
    rest of the system, a bad version ships (module one's CI *should* have
    failed on the UI change but didn't, because the agent couldn't validate
    downstream). And because the agent writes one repo at a time, it can't
    update consumers simultaneously even though, at the moment of the change, it
    has perfect information to do so. The practical takeaway: the human is
    silently functioning as the integration layer and the system's memory, and
    that labor is invisible until you count it.
stance: >-
  Without cross-repo context, a single logical change forces the developer to
  re-explain the same intent once per consuming repo, burning both human time
  and tokens.
related:
  - INS-260627-3963
  - INS-260410-71B9
  - INS-260501-E377
  - INS-260327-FE24
  - PRI-260405-AF79
---
Savkin traces one button change through four repos and counts seven distinct re-explanations: express the intent in UI, re-explain it in module one to consume the package, go back to UI to re-explain the original change plus a newly discovered incompatibility, re-explain again after the fix, repeat for module two, integrate in platform, and finally re-explain the week-old change again when a production bug appears. Each box can be a different person, but the explanations still occur. The cost is linear in repos touched: changing something across 20 repos means re-explaining 20 times — 'a lot of developer time spent, but also a lot of tokens burned.' Two failure modes compound it. Because the agent can't align a change with the rest of the system, a bad version ships (module one's CI *should* have failed on the UI change but didn't, because the agent couldn't validate downstream). And because the agent writes one repo at a time, it can't update consumers simultaneously even though, at the moment of the change, it has perfect information to do so. The practical takeaway: the human is silently functioning as the integration layer and the system's memory, and that labor is invisible until you count it.
