---
id: INS-260329-5F19
domain: ai-development
topic: system-building
title: >-
  The shared responsibility model — a framework for dividing ownership in any
  platform abstraction
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - shared-responsibility
  - platform-design
  - security
  - mental-model
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
    AWS's shared responsibility model — customer owns security IN the cloud, AWS
    owns security OF the cloud — is a transferable framework for any platform
    abstraction layer.
  standard: >-
    AWS's shared responsibility model cleanly divides ownership: the customer is
    responsible for data, configuration, and application-level security
    (security IN the cloud), while AWS handles hardware, global infrastructure,
    and managed service internals (security OF the cloud). This mental model
    transfers directly to any platform abstraction — whether you're building on
    Vercel, using an AI SDK, or designing internal platforms. The key insight is
    that misconfigurations are always the customer's fault, not the platform's.
    Most cloud security breaches stem from misconfigured S3 buckets, open
    security groups, or unencrypted data — all customer-side responsibilities.
    When adopting any abstraction layer, the first question should be: 'Where
    exactly is the responsibility boundary, and what am I now responsible for
    that wasn't obvious?' This prevents the dangerous assumption that 'the
    platform handles security.'
stance: >-
  Every platform abstraction creates a shared responsibility boundary, and most
  production failures happen because teams misunderstand which side of the
  boundary they own
related:
  - INS-260329-3383
  - INS-260322-A367
  - INS-260404-2F57
  - INS-260327-7D53
  - INS-260325-2BDB
evidence:
  - id: INS-260327-7D53
    type: EXTENDS
    classified_at: '2026-04-02'
---
AWS's shared responsibility model cleanly divides ownership: the customer is responsible for data, configuration, and application-level security (security IN the cloud), while AWS handles hardware, global infrastructure, and managed service internals (security OF the cloud). This mental model transfers directly to any platform abstraction — whether you're building on Vercel, using an AI SDK, or designing internal platforms. The key insight is that misconfigurations are always the customer's fault, not the platform's. Most cloud security breaches stem from misconfigured S3 buckets, open security groups, or unencrypted data — all customer-side responsibilities. When adopting any abstraction layer, the first question should be: 'Where exactly is the responsibility boundary, and what am I now responsible for that wasn't obvious?' This prevents the dangerous assumption that 'the platform handles security.'
