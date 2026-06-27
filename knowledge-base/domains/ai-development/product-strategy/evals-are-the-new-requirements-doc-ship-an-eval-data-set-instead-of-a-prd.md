---
id: INS-260627-D21B
domain: ai-development
topic: product-strategy
title: Evals are the new requirements doc; ship an eval data set instead of a PRD
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - product-management
  - requirements
  - acceptance-criteria
  - ai-pm
sources:
  - type: youtube
    title: 'Shipping AI That Works: An Evaluation Framework for PMs – Aman Khan, Arize'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=2HNSG990Ew8'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Replace the PRD with 'here is the eval data set and here is the eval we want
    the system to pass' — evals become the executable requirement and acceptance
    test for an AI feature.
  standard: >-
    Khan frames eval as 'the new type of requirement doc.' Instead of giving
    engineers a Google Doc of requirements, the AI PM delivers an eval data set
    and the eval(s) the system must satisfy, which function as acceptance
    criteria. This shifts the PM's deliverable from describing desired behavior
    in prose to specifying it as testable data, and gives the whole team a
    shared check-and-balance.


    The deeper claim is that the PM 'controls the end outcome of the product,'
    so owning the data — making sure evals exist and that subject-matter-expert
    human labels are in place — is a high-leverage place for a product manager
    to focus. It also reframes prompt ownership: if the PM is accountable for
    the final product, the prompt and its variables may belong more to the PM
    than to the engineer, blurring the traditional handoff boundary.
stance: >-
  AI PMs should hand engineers an eval data set plus eval criteria as acceptance
  criteria rather than a prose PRD.
related:
  - INS-260410-4EB9
  - INS-260605-DCE5
  - INS-260605-E2D9
  - INS-260605-EF23
  - INS-260605-3B8B
  - INS-260625-8EC6
  - INS-260626-1673
  - INS-260626-60C2
  - INS-260627-4072
  - INS-260625-8A55
---
Khan frames eval as 'the new type of requirement doc.' Instead of giving engineers a Google Doc of requirements, the AI PM delivers an eval data set and the eval(s) the system must satisfy, which function as acceptance criteria. This shifts the PM's deliverable from describing desired behavior in prose to specifying it as testable data, and gives the whole team a shared check-and-balance.

The deeper claim is that the PM 'controls the end outcome of the product,' so owning the data — making sure evals exist and that subject-matter-expert human labels are in place — is a high-leverage place for a product manager to focus. It also reframes prompt ownership: if the PM is accountable for the final product, the prompt and its variables may belong more to the PM than to the engineer, blurring the traditional handoff boundary.
