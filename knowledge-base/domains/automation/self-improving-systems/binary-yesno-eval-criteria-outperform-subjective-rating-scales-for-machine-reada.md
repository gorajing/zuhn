---
id: INS-260322-D6D7
domain: automation
topic: self-improving-systems
title: >-
  Binary yes/no eval criteria outperform subjective rating scales for
  machine-readable optimization
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - eval-criteria
  - autoresearch
  - content-optimization
  - binary-scoring
sources:
  - type: youtube
    title: Claude Code + Karpathy's Autoresearch = GOD MODE!
    author: AI Andy
    url: 'https://youtu.be/vjJwgXsMfjM'
date_extracted: '2026-03-22'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Replace subjective 'rate 1-10' evals with binary yes/no questions (e.g.,
    'Does the hook describe a result, not a feature?') to make optimization
    machine-readable and eliminate subjectivity.
  standard: >-
    The most common failure point in autoresearch loops is the eval. People make
    criteria like 'Is this engaging?' or 'Does it sound good?' — that's just
    vibes, and machines can't reliably optimize against vibes. The fix is binary
    yes/no questions with zero gray area.


    AI Andy's content eval uses 10 binary questions: Does the hook describe a
    result or transformation, not just a feature? Does the hook feature a person
    or story, not just a company? Is the short framed around what you can do,
    not what it is? Does the script avoid sounding like a press release? Would
    the first frame make someone stop scrolling? You feed a script into Gemini,
    ask these 10 questions, and get a score out of 10. No subjectivity. This
    makes the eval machine-readable, which is the prerequisite for automated
    self-improvement. The pattern: decompose quality into specific binary
    attributes rather than holistic subjective ratings.
related:
  - INS-260322-D1AB
  - PRI-260405-4B06
  - INS-260404-5365
  - INS-260329-2EB1
  - INS-260327-0700
  - INS-260402-D534
stance: >-
  Replace subjective 'rate 1-10' evals with binary yes/no questions (e.g., 'Does
  the hook describe a result, not a feature?') to make optimization ma...
evidence:
  - id: INS-260329-2EB1
    type: EXTENDS
    classified_at: '2026-04-02'
  - id: INS-260327-0700
    type: SUPPORTS
    classified_at: '2026-04-02'
  - id: INS-260329-92E9
    type: CONTRADICTS
    classified_at: '2026-04-02'
  - id: INS-260402-D534
    type: CONTRADICTS
    classified_at: '2026-04-02'
  - id: INS-260404-5365
    type: TRANSFERS_TO
    classified_at: '2026-04-05'
  - id: INS-260403-DD95
    type: SUPPORTS
    classified_at: '2026-04-05'
---
The most common failure point in autoresearch loops is the eval. People make criteria like 'Is this engaging?' or 'Does it sound good?' — that's just vibes, and machines can't reliably optimize against vibes. The fix is binary yes/no questions with zero gray area.

AI Andy's content eval uses 10 binary questions: Does the hook describe a result or transformation, not just a feature? Does the hook feature a person or story, not just a company? Is the short framed around what you can do, not what it is? Does the script avoid sounding like a press release? Would the first frame make someone stop scrolling? You feed a script into Gemini, ask these 10 questions, and get a score out of 10. No subjectivity. This makes the eval machine-readable, which is the prerequisite for automated self-improvement. The pattern: decompose quality into specific binary attributes rather than holistic subjective ratings.
