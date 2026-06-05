---
id: INS-260514-EA9E
domain: ai-development
topic: agent-patterns
title: >-
  Five-agent job-search pipeline: chain discrete narrow agents, each with one
  job
actionability: immediate
confidence: high
shelf_life: time-sensitive
status: active
tags:
  - agent-chaining
  - multi-agent-systems
  - narrow-agents
  - job-search-automation
  - composability
sources:
  - type: youtube
    title: >-
      AI Agents vs Skills vs Automations: What Every Bench Scientist Needs to
      Know
    author: The Biotech Career Coach
    url: 'https://youtu.be/fHr44hzbVxY'
date_extracted: '2026-05-14'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    A 5-narrow-agent chain (news → researcher → career-page poller → scorer →
    resume writer) is more reliable than one general agent — narrow agents with
    single jobs chain better and are easier to debug.
  standard: >-
    Concrete pattern from Stu's biotech career coaching practice: students build
    a five-agent job-search system as a capstone project. The user defines their
    persona once (company-size preferences, geography, disease area, education,
    years experience). Then five agents run on schedule: (1) News monitor scours
    the internet daily for company news — IND filings, funding announcements,
    press releases — and adds matches to a company-news database. (2) Company
    researcher polls that DB for newly-mentioned companies, adds them to a
    company-master DB, and creates a dossier per company. (3) Career-page
    checker polls each company's careers page daily; if new postings, adds them
    to a job-posting DB. (4) Match scorer reviews each new posting against the
    user's resume and assigns a 1-10 match score; only postings scoring ≥6
    advance. (5) Resume/cover-letter writer tailors materials for advancing
    postings. Output: every morning, a curated list of tailored applications
    ready for the user to glance at and submit. The architecture is the lesson —
    not 'one job-search agent' but 'a chain of agents each doing one job.' This
    composability is why it's reliable enough for non-coders to maintain, and
    why it mirrors Lopopolo's persona-reviewer pattern and Wojinski's
    per-channel specialized agents. Narrow + chained > general + monolithic.
stance: >-
  A reliable agentic system for non-coders is a chain of 5 narrow agents each
  doing exactly one task (news monitor → company researcher → career-page poller
  → resume scorer → resume-and-cover-letter writer) — not one general-purpose
  agent trying to do everything; the chain composition is what makes it reliable
  for someone without a CS background.
related:
  - INS-260514-33FB
  - INS-260501-91C2
  - INS-260605-C2A3
  - PRI-260406-2BC0
  - INS-260605-9976
---
Concrete pattern from Stu's biotech career coaching practice: students build a five-agent job-search system as a capstone project. The user defines their persona once (company-size preferences, geography, disease area, education, years experience). Then five agents run on schedule: (1) News monitor scours the internet daily for company news — IND filings, funding announcements, press releases — and adds matches to a company-news database. (2) Company researcher polls that DB for newly-mentioned companies, adds them to a company-master DB, and creates a dossier per company. (3) Career-page checker polls each company's careers page daily; if new postings, adds them to a job-posting DB. (4) Match scorer reviews each new posting against the user's resume and assigns a 1-10 match score; only postings scoring ≥6 advance. (5) Resume/cover-letter writer tailors materials for advancing postings. Output: every morning, a curated list of tailored applications ready for the user to glance at and submit. The architecture is the lesson — not 'one job-search agent' but 'a chain of agents each doing one job.' This composability is why it's reliable enough for non-coders to maintain, and why it mirrors Lopopolo's persona-reviewer pattern and Wojinski's per-channel specialized agents. Narrow + chained > general + monolithic.
