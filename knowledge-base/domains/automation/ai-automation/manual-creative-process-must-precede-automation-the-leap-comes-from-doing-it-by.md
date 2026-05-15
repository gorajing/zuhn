---
id: INS-260514-618D
domain: automation
topic: ai-automation
title: >-
  Manual creative process must precede automation — the leap comes from doing it
  by hand first
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - creativity
  - manual-first
  - data-engineering
  - gtm-engineering
sources:
  - type: youtube
    title: GTM Engineering with Clay’s First GTM Engineer with Yash Tekriwal
    author: focal podcast
    url: 'https://youtu.be/CdeMa9mZTLI'
date_extracted: '2026-05-14'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Wild automations come from someone first doing it manually — the creative
    leap precedes the automation, and trying to start with the automation kills
    the creativity.
  standard: >-
    Yash's favorite recent example: a warehouse-shipment company wanted to know
    each warehouse's frontline-worker capacity, but no such dataset exists. The
    solution: scrape Google Maps satellite imagery of each warehouse during
    midday, use AI to count trucks parked at the location, estimate worker
    capacity from truck count, then use that number in personalized outbound
    ('looks like you could still hire 30% more people'). The crucial insight:
    this didn't come from someone thinking 'I'll automate warehouse-capacity
    estimation.' It came from someone first asking 'how the heck do I get this
    information?' Then they tried Googling, then they thought to look at
    satellite imagery, then they thought to count trucks — a manual-creative
    process that produced an insight, and only THEN did the automation become
    the obvious next step. Same pattern with hospital capacity (floor plans +
    NIH data) and district education budgets (manually scraping state county
    databases). The implication for GTM engineers: don't start by listing 'what
    can we automate?' Start with 'what manual investigation would help us right
    now?' — then automate it after the creative insight lands.
stance: >-
  The wild creative GTM automations (counting trucks in Google Maps satellite
  imagery to estimate warehouse capacity; estimating hospital bed throughput
  from floor plans + NIH data) only emerge AFTER someone first does the
  data-gathering manually — automation amplifies a creative insight that
  originated in a manual workflow, not the other way around.
related:
  - INS-260321-B85C
  - INS-260320-76E7
  - INS-260327-4EDE
  - INS-260329-206D
  - INS-260329-4751
  - INS-260330-BE23
  - INS-260402-F62B
  - INS-260514-7C33
  - PRI-260328-D401
  - INS-260404-29AF
---
Yash's favorite recent example: a warehouse-shipment company wanted to know each warehouse's frontline-worker capacity, but no such dataset exists. The solution: scrape Google Maps satellite imagery of each warehouse during midday, use AI to count trucks parked at the location, estimate worker capacity from truck count, then use that number in personalized outbound ('looks like you could still hire 30% more people'). The crucial insight: this didn't come from someone thinking 'I'll automate warehouse-capacity estimation.' It came from someone first asking 'how the heck do I get this information?' Then they tried Googling, then they thought to look at satellite imagery, then they thought to count trucks — a manual-creative process that produced an insight, and only THEN did the automation become the obvious next step. Same pattern with hospital capacity (floor plans + NIH data) and district education budgets (manually scraping state county databases). The implication for GTM engineers: don't start by listing 'what can we automate?' Start with 'what manual investigation would help us right now?' — then automate it after the creative insight lands.
