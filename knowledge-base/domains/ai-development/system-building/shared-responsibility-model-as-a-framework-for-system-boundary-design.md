---
id: INS-260329-3383
domain: ai-development
topic: system-building
title: Shared responsibility model as a framework for system boundary design
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - shared-responsibility
  - security-model
  - system-design
  - cloud-security
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
    AWS's shared responsibility model — where AWS secures infrastructure 'of'
    the cloud and customers secure everything 'in' the cloud — is a transferable
    framework for any platform-builder relationship.
  standard: >-
    AWS's shared responsibility model draws a clear line: AWS is responsible for
    security 'of' the cloud (physical data centers, hardware, networking,
    hypervisor), while customers are responsible for security 'in' the cloud (OS
    patching, application code, data encryption, IAM policies, network
    configuration). This division shifts depending on the service model — with
    EC2, the customer manages the OS; with Lambda, AWS manages everything except
    the code and IAM.


    This is a powerful mental model beyond just AWS. Any platform relationship
    (SaaS tools, AI APIs, deployment platforms) has an implicit shared
    responsibility boundary. The most dangerous security gaps occur at this
    boundary — where each party assumes the other handles something. When
    building systems on any platform, explicitly mapping 'what does the platform
    guarantee?' versus 'what must I guarantee?' prevents the category of
    failures where both sides assume the other party owns the security control.
    This applies directly to AI system design: when using an LLM API, the
    provider handles model security, but input validation, output sanitization,
    and access control are entirely the builder's responsibility.
stance: >-
  The most common security failures in cloud systems stem from misunderstanding
  which security responsibilities belong to the platform versus the application
  builder
related:
  - INS-260322-A367
  - INS-260329-5F19
  - INS-260325-2BDB
  - INS-260327-FDF4
  - INS-260330-CA88
---
AWS's shared responsibility model draws a clear line: AWS is responsible for security 'of' the cloud (physical data centers, hardware, networking, hypervisor), while customers are responsible for security 'in' the cloud (OS patching, application code, data encryption, IAM policies, network configuration). This division shifts depending on the service model — with EC2, the customer manages the OS; with Lambda, AWS manages everything except the code and IAM.

This is a powerful mental model beyond just AWS. Any platform relationship (SaaS tools, AI APIs, deployment platforms) has an implicit shared responsibility boundary. The most dangerous security gaps occur at this boundary — where each party assumes the other handles something. When building systems on any platform, explicitly mapping 'what does the platform guarantee?' versus 'what must I guarantee?' prevents the category of failures where both sides assume the other party owns the security control. This applies directly to AI system design: when using an LLM API, the provider handles model security, but input validation, output sanitization, and access control are entirely the builder's responsibility.
