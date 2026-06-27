---
id: INS-260627-B7F7
domain: ai-development
topic: security
title: Separate finding generation from finding validation
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - agent-security
  - verification
  - red-teaming
  - multi-agent
  - false-positives
sources:
  - type: blog
    title: >-
      GitHub - cloudflare/security-audit-skill: A coding-agent skill for
      multi-phase security audits with independently verified, machine-readable
      findings
    url: 'https://github.com/cloudflare/security-audit-skill'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    The agent that found a vulnerability should not be the agent that validates
    or verifies it.
  standard: >-
    Cloudflare's skill structures security work as role separation:
    reconnaissance maps the system, hunters produce candidate vulnerabilities,
    validators try to disprove them, and fresh verifiers check the final
    structured claims against source code. The mechanism attacks the common
    failure mode where an agent becomes attached to its own speculative finding.


    AgentRun can generalize this beyond security. For any high-risk claim, use
    separate roles for proposal, adversarial validation, and final claim
    verification. The cost is extra agent time, so reserve it for hard-gate
    findings, security claims, data migrations, and production-risk
    recommendations rather than every minor code note.
stance: >-
  Agentic audit workflows should use different agents to generate findings,
  disprove findings, and independently verify final claims.
related:
  - INS-260624-6753
  - INS-260624-E878
  - INS-260627-A5A4
  - INS-260627-8A6A
  - INS-260627-08FA
  - INS-260625-A5E7
  - INS-260627-79FC
---
Cloudflare's skill structures security work as role separation: reconnaissance maps the system, hunters produce candidate vulnerabilities, validators try to disprove them, and fresh verifiers check the final structured claims against source code. The mechanism attacks the common failure mode where an agent becomes attached to its own speculative finding.

AgentRun can generalize this beyond security. For any high-risk claim, use separate roles for proposal, adversarial validation, and final claim verification. The cost is extra agent time, so reserve it for hard-gate findings, security claims, data migrations, and production-risk recommendations rather than every minor code note.
