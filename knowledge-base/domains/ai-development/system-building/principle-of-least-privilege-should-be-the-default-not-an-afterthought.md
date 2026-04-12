---
id: INS-260330-4E68
domain: ai-development
topic: system-building
title: 'Principle of least privilege should be the default, not an afterthought'
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - security
  - permissions
  - least-privilege
  - chmod
  - defaults
sources:
  - type: youtube
    title: 100+ Linux Things you Need to Know
    author: Fireship
    url: 'https://www.youtube.com/watch?v=LKCVKw9CzFo'
date_extracted: '2026-03-30'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Default to restrictive permissions and explicitly grant access only when
    needed — chmod 777 is a red flag in any system.
  standard: >-
    The video highlights that chmod 777 (granting read, write, and execute to
    all users) might seem convenient but violates the principle of least
    privilege: grant access only when necessary and trust no one. This principle
    extends far beyond Linux file permissions into every system design decision.


    In AI agent systems, this means tools should have minimal default
    permissions — an agent shouldn't have write access to production databases
    unless a specific task requires it. In API design, tokens should be scoped
    to the narrowest set of operations needed. In infrastructure, IAM roles
    should follow deny-by-default. The recurring pattern across security
    failures is that someone set the equivalent of chmod 777 for convenience
    during development and never tightened it. Making restrictive defaults the
    path of least resistance prevents entire categories of security incidents.
stance: >-
  Setting chmod 777 (full access to everyone) is always wrong in production
  because security defaults should restrict access and require explicit grants.
related:
  - INS-260402-31D8
  - INS-260411-27AA
  - INS-260403-5137
  - INS-260403-FF74
  - PRI-260403-9E80
evidence:
  - id: INS-260330-14CA
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
  - id: INS-260403-FF74
    type: CHALLENGES
    classified_at: '2026-04-05'
  - id: INS-260403-35CB
    type: SUPPORTS
    classified_at: '2026-04-05'
---
The video highlights that chmod 777 (granting read, write, and execute to all users) might seem convenient but violates the principle of least privilege: grant access only when necessary and trust no one. This principle extends far beyond Linux file permissions into every system design decision.

In AI agent systems, this means tools should have minimal default permissions — an agent shouldn't have write access to production databases unless a specific task requires it. In API design, tokens should be scoped to the narrowest set of operations needed. In infrastructure, IAM roles should follow deny-by-default. The recurring pattern across security failures is that someone set the equivalent of chmod 777 for convenience during development and never tightened it. Making restrictive defaults the path of least resistance prevents entire categories of security incidents.
