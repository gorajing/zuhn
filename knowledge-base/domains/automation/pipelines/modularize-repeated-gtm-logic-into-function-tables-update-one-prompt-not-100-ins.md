---
id: INS-260514-A02E
domain: automation
topic: pipelines
title: >-
  Modularize repeated GTM logic into 'function tables' — update one prompt, not
  100 instances
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - clay
  - dry-principle
  - modularization
  - function-tables
  - maintenance
sources:
  - type: youtube
    title: >-
      GTM Engineering secrets | Clay.com, Make.com vs. n8n, CRMs, and scalable
      systems
    author: Nathan Lippi — Clay Bootcamp + GTM Engineering
    url: 'https://youtu.be/y8oFBx1MaCA'
date_extracted: '2026-05-14'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Carve repeated GTM logic into 'function tables' in Clay (f.cleanFullName,
    f.validateEmail) — callers write a row to the function table, wait for the
    LLM, then look up the cleaned output, so one prompt update propagates to all
    callers.
  standard: >-
    Concrete design pattern from Joe's agency: he maintains a 'functions' table
    in Clay containing reusable logic — f.cleanFullName, f.cleanCompanyName,
    f.cleanFirstName, f.searchSerper, f.lookupEmailHost, f.findCompanyLinkedIn,
    f.validateEmailBounceBan, etc. Naming convention: prefix every function with
    'f.' so autocomplete surfaces them when building new tables. Each function
    takes typed inputs (i = required, o = optional) — full_name (i), email (o),
    linkedin_url (o) — runs an LLM call with a meticulously crafted prompt (his
    clean_full_name prompt is 1337 tokens accumulating edge cases for maiden
    names, PhD prefixes, emoji, all-caps, multi-part names, preferred names in
    parens), and returns a JSON output with confidence level + cleaned fields.
    Other Clay tables call the function via Write-to-Table → wait (Postman delay
    endpoint, since Clay has no native delay) → look up the row. The payoff:
    when you discover a new edge case (say a maiden name in parentheses), you
    update ONE prompt and all callers benefit. Without this pattern, you
    copy-paste the prompt across 100 tables and have to hunt them down each time
    you find a new edge case — and you WILL miss some. The tradeoff: setup is
    more complex per table (write-to-table + delay + lookup), so for rapid
    one-off campaigns this overhead isn't worth it. The pattern earns its keep
    when the logic runs continuously across many clients/campaigns.
stance: >-
  When the same enrichment logic (clean a full name, validate an email, extract
  a company's LinkedIn URL) repeats across many Clay tables, the right move is
  to extract it into a dedicated 'function table' that other tables write to and
  look up — updating one prompt fixes all 100 callers, instead of hunting them
  down individually.
related:
  - INS-260329-6286
  - INS-260329-CF16
  - INS-260605-E1E2
  - INS-260329-C7BF
  - INS-260605-D3EB
---
Concrete design pattern from Joe's agency: he maintains a 'functions' table in Clay containing reusable logic — f.cleanFullName, f.cleanCompanyName, f.cleanFirstName, f.searchSerper, f.lookupEmailHost, f.findCompanyLinkedIn, f.validateEmailBounceBan, etc. Naming convention: prefix every function with 'f.' so autocomplete surfaces them when building new tables. Each function takes typed inputs (i = required, o = optional) — full_name (i), email (o), linkedin_url (o) — runs an LLM call with a meticulously crafted prompt (his clean_full_name prompt is 1337 tokens accumulating edge cases for maiden names, PhD prefixes, emoji, all-caps, multi-part names, preferred names in parens), and returns a JSON output with confidence level + cleaned fields. Other Clay tables call the function via Write-to-Table → wait (Postman delay endpoint, since Clay has no native delay) → look up the row. The payoff: when you discover a new edge case (say a maiden name in parentheses), you update ONE prompt and all callers benefit. Without this pattern, you copy-paste the prompt across 100 tables and have to hunt them down each time you find a new edge case — and you WILL miss some. The tradeoff: setup is more complex per table (write-to-table + delay + lookup), so for rapid one-off campaigns this overhead isn't worth it. The pattern earns its keep when the logic runs continuously across many clients/campaigns.
