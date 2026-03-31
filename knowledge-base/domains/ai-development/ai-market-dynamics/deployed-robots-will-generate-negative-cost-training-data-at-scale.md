---
id: INS-260327-CFDC
domain: ai-development
topic: ai-market-dynamics
title: Deployed robots will generate negative-cost training data at scale
actionability: inspiration
confidence: medium
shelf_life: evergreen
status: active
tags:
  - robotics-data
  - deployment-flywheel
  - data-collection
  - scaling
sources:
  - type: youtube
    title: >-
      Training General Robots for Any Task: Physical Intelligence’s Karol
      Hausman and Tobi Springenberg
    author: Sequoia Capital
    url: 'https://www.youtube.com/watch?v=OJCT-HGxPjk'
date_extracted: '2026-03-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Robots performing economically useful tasks in the real world will produce
    training data as a byproduct, creating a data flywheel unavailable from
    internet scraping.
  standard: >-
    Unlike language models which benefited from massive internet text corpora,
    there is no internet-scale dataset of robot actions. Physical Intelligence
    frames deployment as the solution: robots performing valuable tasks in
    commercial settings generate training data as a byproduct. The cost of this
    data collection is effectively negative because the robots are already doing
    economically useful work.


    This creates a powerful flywheel: better models enable deployment,
    deployment generates diverse real-world data, diverse data improves models,
    improved models enable broader deployment. The founders note this will
    eventually be a much bigger data source than curated teleoperator
    demonstrations, and the diversity will be natural rather than engineered.
stance: >-
  The most scalable path to robotics training data is deploying robots in
  economically valuable tasks where the cost of data collection is effectively
  negative because the robots are already generating value.
related:
  - INS-260323-F2BD
  - INS-260322-0CE3
  - INS-260323-9BAB
  - PRI-260328-7007
  - INS-260329-D1F2
---
Unlike language models which benefited from massive internet text corpora, there is no internet-scale dataset of robot actions. Physical Intelligence frames deployment as the solution: robots performing valuable tasks in commercial settings generate training data as a byproduct. The cost of this data collection is effectively negative because the robots are already doing economically useful work.

This creates a powerful flywheel: better models enable deployment, deployment generates diverse real-world data, diverse data improves models, improved models enable broader deployment. The founders note this will eventually be a much bigger data source than curated teleoperator demonstrations, and the diversity will be natural rather than engineered.
