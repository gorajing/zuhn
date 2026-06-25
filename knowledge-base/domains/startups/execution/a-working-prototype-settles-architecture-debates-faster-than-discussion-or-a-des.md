---
id: INS-260625-BBE4
domain: startups
topic: execution
title: >-
  A working prototype settles architecture debates faster than discussion or a
  design doc
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - execution
  - prototyping
  - decision-making
  - engineering-culture
  - bias-to-action
sources:
  - type: youtube
    title: >-
      The Agent Cloud: Databricks’ Bet on the Future of AI — Matei Zaharia and
      Reynold Xin
    author: Latent Space
    url: 'https://www.youtube.com/watch?v=Yp_u1NpbkJg'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Databricks debated for many meetings whether they could write Postgres pages
    as columnar Parquet; the debate ended when an engineer simply prototyped it
    overnight and reported 'it works' — no kickoff, no design doc.
  standard: >-
    One of Databricks' most strategic recent moves — the LTAP storage change
    that transcodes row-oriented database pages into columnar Parquet — was
    deadlocked in repeated meetings arguing from first principles about whether
    it was even possible. Xin notes there was no kickoff, no design doc, nothing
    formal: an engineer 'just did it,' observed that the storage fleet had idle
    CPUs to do the transcoding and that columnar data actually compressed
    smaller (so writes got faster, not slower), and the debate was over. Zaharia
    generalizes the pattern: a doc invites endless 'what about this?'
    objections, but a prototype that real users or real workloads can bash
    against produces evidence that ends the argument.


    The transferable principle is that a working artifact is a higher-bandwidth
    decision tool than analysis, especially now that AI makes prototyping cheap.
    The cultural prerequisite is setting up the org so people can 'just do it'
    without asking permission — Databricks attributes this to hiring very strong
    people, keeping leaders in the trenches, and giving teams precedent and
    cover to settle debates by building. For founders and eng leaders: when a
    debate stalls on feasibility, the cheapest path to truth is usually to spend
    a day building the thing, not another meeting refining the argument.
stance: >-
  Strategic technical debates are resolved faster and more reliably by someone
  quickly building a prototype than by extended first-principles argument or a
  formal design process.
related:
  - INS-260327-A8B6
  - INS-260409-60C2
  - INS-260409-A8A3
  - INS-260501-0662
  - PRI-260406-9780
---
One of Databricks' most strategic recent moves — the LTAP storage change that transcodes row-oriented database pages into columnar Parquet — was deadlocked in repeated meetings arguing from first principles about whether it was even possible. Xin notes there was no kickoff, no design doc, nothing formal: an engineer 'just did it,' observed that the storage fleet had idle CPUs to do the transcoding and that columnar data actually compressed smaller (so writes got faster, not slower), and the debate was over. Zaharia generalizes the pattern: a doc invites endless 'what about this?' objections, but a prototype that real users or real workloads can bash against produces evidence that ends the argument.

The transferable principle is that a working artifact is a higher-bandwidth decision tool than analysis, especially now that AI makes prototyping cheap. The cultural prerequisite is setting up the org so people can 'just do it' without asking permission — Databricks attributes this to hiring very strong people, keeping leaders in the trenches, and giving teams precedent and cover to settle debates by building. For founders and eng leaders: when a debate stalls on feasibility, the cheapest path to truth is usually to spend a day building the thing, not another meeting refining the argument.
