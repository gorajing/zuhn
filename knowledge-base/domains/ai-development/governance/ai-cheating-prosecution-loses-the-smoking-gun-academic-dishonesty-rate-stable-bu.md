---
id: INS-260514-F565
domain: ai-development
topic: governance
title: >-
  AI cheating prosecution loses the 'smoking gun' — academic dishonesty rate
  stable but enforcement harder
actionability: reference
confidence: medium
shelf_life: time-sensitive
status: active
tags:
  - academic-dishonesty
  - ai-cheating
  - evidence-of-misconduct
  - prosecution-difficulty
  - pattern-recognition
sources:
  - type: youtube
    title: >-
      Harvard Professor: CS50, What Matters More Than Programming Now, Lecturing
      Well | David J Malan
    author: Ryan Peterman
    url: 'https://youtu.be/bB2o81DnKHk'
date_extracted: '2026-05-14'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    AI cheating rates haven't risen (still 5-10%), but the 'smoking gun' is gone
    — AI code is amalgamated, not copied from a URL. Prosecution shifts from
    source-attribution to pattern recognition: 'this isn't this student's work.'
  standard: >-
    David Malan's empirical observation across two decades at CS50: 'We have
    historically administratively disciplined between 5 and 10% of CS50 student
    body every semester. We have not seen an uptick in detections of academic
    dishonesty. What has gotten harder is the PROSECUTION of those cases in the
    sense that it's harder for us to hand to the administrative board of Harvard
    or the Honor Council a smoking gun. Here is the URL from which this code was
    copied — because it's not really coming from a URL. It's coming from the
    composition of all the URLs and YouTube videos out there because the AI
    somewhat pseudo-randomly is spitting out an amalgam of these various
    training inputs.' The investigative shift: pre-AI cheating left forensic
    trails (copied code matched a specific URL, GitHub repo, or YouTube
    transcript). Post-AI cheating doesn't — the code is novel-ish, recombined
    from many sources, and no single source attribution is possible.
    Investigators now rely on indirect signals: (1) Student incongruence — 'this
    is not the work of this particular student' based on past submissions or
    sophistication mismatch. (2) Anachronistic features — 'this is not this
    year's problem set, this is last year's' (because AI trained on older course
    materials produces older specifications). (3) Pattern over time — students
    whose work suddenly improves dramatically without corresponding office-hours
    engagement or tutor sessions. The disciplinary system, however, was designed
    around forensic-trail evidence. Administrative boards expect URL
    attributions. Pattern-recognition evidence ('this doesn't look like the
    student's other work') is structurally weaker even when correct, because it
    relies on the investigator's judgment, which the accused can dispute. The
    implication for institutions: disciplinary policy needs to evolve from 'we
    proved you copied' to 'we judge you didn't produce this independently.' The
    latter standard requires institutional comfort with pattern-evidence and a
    higher tolerance for false positives, which administrative boards
    traditionally resist. Until policy evolves, the de facto reality is that AI
    cheating goes mostly unprosecuted even when detected. The corollary for
    builders: tools that watermark AI output, track edit history (Google Docs
    revision history shows whether work was typed vs pasted), or provide
    cryptographic provenance will become essential infrastructure for any
    institution that needs to enforce 'original work' standards.
stance: >-
  Academic dishonesty rates have remained stable at 5-10% in the AI era
  (consistent with pre-AI baselines), but PROSECUTION has gotten dramatically
  harder because the smoking-gun evidence is gone — AI-generated code is an
  amalgam of training data, not a copy from a specific URL or YouTube video, so
  administrators can no longer hand the disciplinary board a clear source
  attribution; investigators must rely on pattern recognition (student
  incongruence, anachronistic problem-set features) instead.
related:
  - INS-260501-FD20
  - INS-260412-C3AB
  - INS-260412-4493
  - PRI-260406-66BA
  - INS-260423-595B
---
David Malan's empirical observation across two decades at CS50: 'We have historically administratively disciplined between 5 and 10% of CS50 student body every semester. We have not seen an uptick in detections of academic dishonesty. What has gotten harder is the PROSECUTION of those cases in the sense that it's harder for us to hand to the administrative board of Harvard or the Honor Council a smoking gun. Here is the URL from which this code was copied — because it's not really coming from a URL. It's coming from the composition of all the URLs and YouTube videos out there because the AI somewhat pseudo-randomly is spitting out an amalgam of these various training inputs.' The investigative shift: pre-AI cheating left forensic trails (copied code matched a specific URL, GitHub repo, or YouTube transcript). Post-AI cheating doesn't — the code is novel-ish, recombined from many sources, and no single source attribution is possible. Investigators now rely on indirect signals: (1) Student incongruence — 'this is not the work of this particular student' based on past submissions or sophistication mismatch. (2) Anachronistic features — 'this is not this year's problem set, this is last year's' (because AI trained on older course materials produces older specifications). (3) Pattern over time — students whose work suddenly improves dramatically without corresponding office-hours engagement or tutor sessions. The disciplinary system, however, was designed around forensic-trail evidence. Administrative boards expect URL attributions. Pattern-recognition evidence ('this doesn't look like the student's other work') is structurally weaker even when correct, because it relies on the investigator's judgment, which the accused can dispute. The implication for institutions: disciplinary policy needs to evolve from 'we proved you copied' to 'we judge you didn't produce this independently.' The latter standard requires institutional comfort with pattern-evidence and a higher tolerance for false positives, which administrative boards traditionally resist. Until policy evolves, the de facto reality is that AI cheating goes mostly unprosecuted even when detected. The corollary for builders: tools that watermark AI output, track edit history (Google Docs revision history shows whether work was typed vs pasted), or provide cryptographic provenance will become essential infrastructure for any institution that needs to enforce 'original work' standards.
