---
id: INS-260605-158D
domain: ai-development
topic: claude-code
title: 'More context degrades agents: 95% skill deletion raised accuracy'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - context-engineering
  - skills
  - less-is-more
  - documentation
sources:
  - type: youtube
    title: >-
      How I deleted 95% of my agent skills and got better results — Nick Nisi,
      WorkOS
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=vy7o1g2iHY8'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Replace 10,000 lines of doc-derived skills with ~550 lines of common gotchas
    — deleting 95% made it faster, cheaper, and more accurate.
  standard: >-
    Nisi auto-generated 10,000+ lines of skills from WorkOS docs with clever
    SHA-based incremental updates, assuming more tokens meant better results.
    Evals proved the opposite: one skill made a task 77% accurate when loaded
    versus 97% accurate when omitted — he was actively making the model worse.
    Rewriting by hand into 553 lines covering only the most common gotchas cut
    eval runs from 68 to 6 minutes and improved accuracy. The model already
    knows how to code; dumping comprehensive docs sends it on 'wild goose
    chases.' The job is to gently nudge it toward your product's specific
    landmines, not to re-teach it the domain. Guide, don't prescribe.
stance: >-
  Comprehensive auto-generated skills hurt agent performance; a small set of
  common gotchas outperforms exhaustive documentation.
related:
  - INS-260413-416A
  - INS-260626-05D4
  - INS-260626-0E82
  - INS-260410-34F5
  - INS-260501-428B
  - INS-260409-60C2
---
Nisi auto-generated 10,000+ lines of skills from WorkOS docs with clever SHA-based incremental updates, assuming more tokens meant better results. Evals proved the opposite: one skill made a task 77% accurate when loaded versus 97% accurate when omitted — he was actively making the model worse. Rewriting by hand into 553 lines covering only the most common gotchas cut eval runs from 68 to 6 minutes and improved accuracy. The model already knows how to code; dumping comprehensive docs sends it on 'wild goose chases.' The job is to gently nudge it toward your product's specific landmines, not to re-teach it the domain. Guide, don't prescribe.
