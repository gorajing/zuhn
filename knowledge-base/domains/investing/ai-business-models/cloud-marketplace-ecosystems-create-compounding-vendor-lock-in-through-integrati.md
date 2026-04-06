---
id: INS-260329-3AE5
domain: investing
topic: ai-business-models
title: >-
  Cloud marketplace ecosystems create compounding vendor lock-in through
  integration gravity
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - vendor-lock-in
  - platform-strategy
  - switching-costs
  - ecosystem
  - marketplace
sources:
  - type: youtube
    title: AWS Certified Cloud Practitioner Training 2020 - Full Course
    author: freeCodeCamp.org
    url: 'https://www.youtube.com/watch?v=3hLmDS179YE'
date_extracted: '2026-03-29'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    AWS's 200+ services create lock-in through integration complexity —
    migrating one service is easy, but migrating an ecosystem of interconnected
    services is practically impossible.
  standard: >-
    The AWS course reveals that AWS offers 200+ services across compute,
    storage, databases, security, monitoring, networking, and machine learning.
    Many of these services integrate deeply with each other: CloudWatch monitors
    Lambda functions, which are triggered by S3 events, which store data
    accessed by CloudFront CDN, which is protected by WAF firewall rules. Each
    individual service has open-source alternatives, but the integration fabric
    between services is proprietary.


    This creates what might be called 'integration gravity' — the more services
    you use, the harder it becomes to leave. A company using just EC2 can
    migrate to any other cloud. A company using EC2 + RDS + Lambda + S3 +
    CloudFront + CloudWatch + IAM + VPC + Route53 would need to simultaneously
    replace and re-integrate all of these services. This is the real business
    model insight of cloud platforms: the revenue isn't primarily from any
    single service's margin — it's from the compounding switching costs that
    make customers increasingly captive. This pattern applies to any platform
    ecosystem (Vercel, Shopify, Salesforce) and is a key factor in evaluating
    platform investments.
stance: >-
  AWS's marketplace and service integration strategy creates lock-in not through
  any single service but through the aggregate cost of migrating dozens of
  interconnected services simultaneously
related:
  - INS-260404-D6EC
  - INS-260404-8947
  - INS-260330-5C64
  - INS-260325-A54F
  - INS-260322-642F
evidence:
  - id: INS-260322-642F
    type: CHALLENGES
    classified_at: '2026-04-02'
  - id: INS-260330-5C64
    type: SUPPORTS
    classified_at: '2026-04-02'
  - id: INS-260325-A54F
    type: TRANSFERS_TO
    classified_at: '2026-04-02'
  - id: INS-260330-C870
    type: CHALLENGES
    classified_at: '2026-04-02'
  - id: INS-260404-D6EC
    type: EXTENDS
    classified_at: '2026-04-05'
  - id: INS-260404-C25C
    type: SUPPORTS
    classified_at: '2026-04-05'
  - id: INS-260404-8947
    type: EXTENDS
    classified_at: '2026-04-05'
---
The AWS course reveals that AWS offers 200+ services across compute, storage, databases, security, monitoring, networking, and machine learning. Many of these services integrate deeply with each other: CloudWatch monitors Lambda functions, which are triggered by S3 events, which store data accessed by CloudFront CDN, which is protected by WAF firewall rules. Each individual service has open-source alternatives, but the integration fabric between services is proprietary.

This creates what might be called 'integration gravity' — the more services you use, the harder it becomes to leave. A company using just EC2 can migrate to any other cloud. A company using EC2 + RDS + Lambda + S3 + CloudFront + CloudWatch + IAM + VPC + Route53 would need to simultaneously replace and re-integrate all of these services. This is the real business model insight of cloud platforms: the revenue isn't primarily from any single service's margin — it's from the compounding switching costs that make customers increasingly captive. This pattern applies to any platform ecosystem (Vercel, Shopify, Salesforce) and is a key factor in evaluating platform investments.
