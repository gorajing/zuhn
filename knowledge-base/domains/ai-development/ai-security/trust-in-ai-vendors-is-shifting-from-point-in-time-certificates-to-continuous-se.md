---
id: INS-260627-C750
domain: ai-development
topic: ai-security
title: >-
  Trust in AI vendors is shifting from point-in-time certificates to continuous
  security posture
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - security
  - compliance
  - continuous-monitoring
  - fedramp
  - trust
  - soc2
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
    A SOC 2 report is a snapshot; the federal direction — new FedRAMP, NIST
    800-53's 1000+ controls, SBOMs — is toward continuous monitoring and
    continuous security posture, because trusting an agent's outcomes requires
    ongoing accountability, not a certificate.
  standard: >-
    Myshatyn contrasts what vendors bring ('You have your SOC 2 report') with
    what classified-data buyers actually need (NIST 800-53, rev 4, 'over a
    thousand different security controls and enhancements'). The deeper point is
    a shift in the *form* of trust. Point-in-time attestations like SOC 2
    certify a moment; the new FedRAMP direction says that if the government is
    going to 'trust you with the outcomes of our agents, you have to start
    thinking about your continuous monitoring, your continuous security
    posture.'


    The escalation is driven by what's being trusted. When a vendor's tool
    merely stored data, a periodic audit sufficed. When an agent's *outputs*
    drive consequential decisions, the buyer needs ongoing assurance that the
    security and behavior of that system hold up continuously — plus
    supply-chain transparency (software bills of materials, dependency handling,
    patching plans) that traditional cyber processes are only now catching up to
    for AI.


    For any vendor selling AI into security-sensitive markets, the actionable
    implication is to build continuous monitoring and live posture reporting
    into the product rather than treating compliance as a once-a-year
    certification exercise. The DoD layers this even higher (Impact Levels,
    CCSRG, CNSSI 1253), but the trajectory — from snapshot to stream — is the
    durable signal across all regulated buyers.
stance: >-
  As AI agents take on consequential outcomes, buyers will demand continuous
  monitoring and live security posture rather than accepting one-time compliance
  snapshots like a SOC 2 report.
related:
  - INS-260514-7B11
  - INS-260605-683B
  - INS-260627-8431
  - PRI-260328-37D8
  - INS-260410-E590
---
Myshatyn contrasts what vendors bring ('You have your SOC 2 report') with what classified-data buyers actually need (NIST 800-53, rev 4, 'over a thousand different security controls and enhancements'). The deeper point is a shift in the *form* of trust. Point-in-time attestations like SOC 2 certify a moment; the new FedRAMP direction says that if the government is going to 'trust you with the outcomes of our agents, you have to start thinking about your continuous monitoring, your continuous security posture.'

The escalation is driven by what's being trusted. When a vendor's tool merely stored data, a periodic audit sufficed. When an agent's *outputs* drive consequential decisions, the buyer needs ongoing assurance that the security and behavior of that system hold up continuously — plus supply-chain transparency (software bills of materials, dependency handling, patching plans) that traditional cyber processes are only now catching up to for AI.

For any vendor selling AI into security-sensitive markets, the actionable implication is to build continuous monitoring and live posture reporting into the product rather than treating compliance as a once-a-year certification exercise. The DoD layers this even higher (Impact Levels, CCSRG, CNSSI 1253), but the trajectory — from snapshot to stream — is the durable signal across all regulated buyers.
