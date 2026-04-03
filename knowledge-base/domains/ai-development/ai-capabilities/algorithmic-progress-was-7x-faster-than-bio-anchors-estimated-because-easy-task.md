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
    author:
      - '@type': Person
        name: Scott Alexander
        url: 'https://substack.com/@astralcodexten'
        description: null
        identifier: 'user:12009663'
        image:
          '@type': ImageObject
          contentUrl: >-
            https://substackcdn.com/image/fetch/$s_!HTBd!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F7b500d22-1176-42ad-afaa-5d72bc36a809_44x44.png
          thumbnailUrl: >-
            https://substackcdn.com/image/fetch/$s_!HTBd!,w_128,h_128,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F7b500d22-1176-42ad-afaa-5d72bc36a809_44x44.png
    url: 'https://www.astralcodexten.com/p/what-happened-with-bio-anchors'
date_extracted: '2026-04-03'
last_accessed: null
access_count: 0
indexed: false
embedded: false
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
---
Ajeya Cotra's Bio Anchors report based its algorithmic progress estimate primarily on Hernandez & Brown 2020, which measured how much cheaper it became to match AlexNet's 2012 performance. But later research showed that apparent algorithmic progress speed varies by an order of magnitude depending on task difficulty — easy tasks where low-hanging fruit is already picked show slower progress than hard frontier tasks with room to improve.

This single parameter error (30% vs 200% per year) compounded exponentially and was responsible for most of the ~20-year overshoot in AGI timelines. The lesson generalizes: when measuring rates of improvement, the choice of benchmark difficulty level is load-bearing. Easy benchmarks that the field has optimized for years will show diminishing returns, while frontier capabilities that researchers are actively pushing will show faster progress. Any forecasting model that anchors on historical progress rates must account for this difficulty-dependent asymmetry.
