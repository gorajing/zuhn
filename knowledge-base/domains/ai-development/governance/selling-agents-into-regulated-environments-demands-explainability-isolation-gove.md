---
id: INS-260627-BF33
domain: ai-development
topic: governance
title: >-
  Selling agents into regulated environments demands explainability, isolation,
  governance, and speed by design
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - governance
  - compliance
  - explainability
  - air-gapped
  - sbom
  - government-procurement
sources:
  - type: youtube
    title: "Government Agents: AI Agents Meet Tough Regulations —\_Mark Myshatyn, Los Alamos National Lab"
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=TnSGx36Ly0Q'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Los Alamos names four requirements for fielding agentic tools in the federal
    government — build for explainability, isolation, governance, and update
    speed — plus a portability hack: if you can deploy in a DoD Impact Level 5
    environment with limited services, you can deploy anywhere.
  standard: >-
    Myshatyn closes with the four things national-lab buyers look for in agentic
    vendors. (1) Explainability: 'we need to be able to trust our agents the
    same way we trust our staff' — when something goes wrong, the accountability
    is to US citizens, not shareholders, so decision provenance must be
    inspectable. (2) Isolation: assume no hyperscaler cloud; lean on self-hosted
    and open-source models because much of the work touches controlled or
    classified data. (3) Governance: be ready for awkward procurement
    conversations about software bills of materials, open-source dependency
    handling, and patching plans — these artifacts are legally required. (4)
    Speed: federal builds can't lag commercial releases by years, because
    export-compliance law dictates where and on what you can run.


    The sharpest practical takeaway is a least-common-denominator portability
    strategy: if you architect your product to deploy inside a constrained DoD
    Impact Level 5 environment — limited cloud services, strict isolation — you
    can deploy essentially anywhere. Building for the hardest 'hard corner'
    first makes the product maximally portable rather than maximally niche.


    For founders eyeing public-sector or other regulated markets (healthcare,
    finance, defense), the lesson is that these properties are architectural
    commitments, not features. A SOC 2 report and a commercial-cloud-only
    deployment lock you out; designing for isolation, explainability, and
    SBOM-grade supply-chain transparency from the start keeps the door open.
stance: >-
  AI tools built for high-stakes regulated buyers must be engineered from day
  one for explainability, deployment isolation, supply-chain governance, and
  continuous update speed — these cannot be bolted on later.
related:
  - INS-260326-9402
  - INS-260403-028F
  - INS-260403-80A0
  - INS-260412-2754
  - INS-260605-3285
  - INS-260605-E706
  - PRI-260406-1F5E
  - INS-260403-2115
  - INS-260626-13FB
---
Myshatyn closes with the four things national-lab buyers look for in agentic vendors. (1) Explainability: 'we need to be able to trust our agents the same way we trust our staff' — when something goes wrong, the accountability is to US citizens, not shareholders, so decision provenance must be inspectable. (2) Isolation: assume no hyperscaler cloud; lean on self-hosted and open-source models because much of the work touches controlled or classified data. (3) Governance: be ready for awkward procurement conversations about software bills of materials, open-source dependency handling, and patching plans — these artifacts are legally required. (4) Speed: federal builds can't lag commercial releases by years, because export-compliance law dictates where and on what you can run.

The sharpest practical takeaway is a least-common-denominator portability strategy: if you architect your product to deploy inside a constrained DoD Impact Level 5 environment — limited cloud services, strict isolation — you can deploy essentially anywhere. Building for the hardest 'hard corner' first makes the product maximally portable rather than maximally niche.

For founders eyeing public-sector or other regulated markets (healthcare, finance, defense), the lesson is that these properties are architectural commitments, not features. A SOC 2 report and a commercial-cloud-only deployment lock you out; designing for isolation, explainability, and SBOM-grade supply-chain transparency from the start keeps the door open.
