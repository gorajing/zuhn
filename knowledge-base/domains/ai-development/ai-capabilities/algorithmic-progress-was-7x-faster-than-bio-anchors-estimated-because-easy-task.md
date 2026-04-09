---
id: INS-260403-1EFF
domain: ai-development
topic: ai-capabilities
title: >-
  Algorithmic progress was 7x faster than Bio Anchors estimated because
  easy-task benchmarks undercount hard-task improvement rates
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - algorithmic-progress
  - benchmarks
  - forecasting
  - scaling
  - bio-anchors
sources:
  - type: blog
    title: What Happened With Bio Anchors?
    author: Scott Alexander
    url: 'https://www.astralcodexten.com/p/what-happened-with-bio-anchors'
date_extracted: '2026-04-03'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Bio Anchors estimated 30% yearly algorithmic progress from easy-task
    benchmarks, but frontier AI saw 200% yearly gains because harder tasks have
    more room for improvement.
  standard: >-
    Ajeya Cotra's Bio Anchors report based its algorithmic progress estimate
    primarily on Hernandez & Brown 2020, which measured how much cheaper it
    became to match AlexNet's 2012 performance. But later research showed that
    apparent algorithmic progress speed varies by an order of magnitude
    depending on task difficulty — easy tasks where low-hanging fruit is already
    picked show slower progress than hard frontier tasks with room to improve.


    This single parameter error (30% vs 200% per year) compounded exponentially
    and was responsible for most of the ~20-year overshoot in AGI timelines. The
    lesson generalizes: when measuring rates of improvement, the choice of
    benchmark difficulty level is load-bearing. Easy benchmarks that the field
    has optimized for years will show diminishing returns, while frontier
    capabilities that researchers are actively pushing will show faster
    progress. Any forecasting model that anchors on historical progress rates
    must account for this difficulty-dependent asymmetry.
stance: >-
  Measuring algorithmic progress on solved benchmarks like ImageNet
  systematically underestimates the rate of progress on frontier tasks where
  more room for improvement exists.
related:
  - INS-260323-3F39
  - INS-260327-40DA
  - INS-260328-5431
  - INS-260409-DD69
  - INS-260409-E776
  - INS-260405-82F3
  - INS-260403-F0DC
  - INS-260403-36E6
  - INS-260409-B367
---
Ajeya Cotra's Bio Anchors report based its algorithmic progress estimate primarily on Hernandez & Brown 2020, which measured how much cheaper it became to match AlexNet's 2012 performance. But later research showed that apparent algorithmic progress speed varies by an order of magnitude depending on task difficulty — easy tasks where low-hanging fruit is already picked show slower progress than hard frontier tasks with room to improve.

This single parameter error (30% vs 200% per year) compounded exponentially and was responsible for most of the ~20-year overshoot in AGI timelines. The lesson generalizes: when measuring rates of improvement, the choice of benchmark difficulty level is load-bearing. Easy benchmarks that the field has optimized for years will show diminishing returns, while frontier capabilities that researchers are actively pushing will show faster progress. Any forecasting model that anchors on historical progress rates must account for this difficulty-dependent asymmetry.
