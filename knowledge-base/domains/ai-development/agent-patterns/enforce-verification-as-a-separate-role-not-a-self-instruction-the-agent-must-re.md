---
id: INS-260627-35B1
domain: ai-development
topic: agent-patterns
title: >-
  Enforce verification as a separate role, not a self-instruction the agent must
  remember
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - verification
  - agent-orchestration
  - qa
  - reliability
  - workflows
sources:
  - type: youtube
    title: "Paperclip: Open Source Human Control Plane for AI Labor —\_Dotta Bippa"
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=h403btjldDQ'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Asking a coding agent to 'test this in the browser before sending it back'
    reliably fails; a separate enforced QA-then-approver gate does not.
  standard: >-
    The demo names the failure mode directly: you tell your coding agent 'please
    test this in the browser before you send it back to me,' and 'what happens?
    It doesn't do it.' The agent treats self-verification as optional because it
    is just one more instruction competing for attention inside its loop. People
    respond by building 'complicated hooks and harnesses,' but hooks behave
    differently across Claude and Codex, so the fix doesn't generalize.


    Paperclip's answer is to lift verification out of the agent and into the
    orchestration layer as distinct, enforced roles: when an assignee finishes,
    a QA agent must boot and review, and separately an approver must sign off.
    QA and approval are deliberately split — QA iterates with the coder on
    correctness, while the manager approves that the result is fit for the
    brand. Because the gate is structural, the working agent cannot skip it.


    The transferable principle is that judgment-free-but-mandatory steps (test
    it, lint it, get a second set of eyes) should be pulled out of the
    probabilistic agent loop and made deterministic features of the harness.
    This mirrors the broader pattern that autonomous agents go only as far as
    their verifier is good, and that agents lie about success unless a
    deterministic step catches them — so own the verifier outside the agent.
stance: >-
  Reliable agentic QA comes from a structurally mandated reviewer/approver step
  in the workflow, never from telling the working agent to check its own output.
related:
  - INS-260329-92E9
  - INS-260625-A5E7
  - INS-260625-D842
  - INS-260626-A499
  - INS-260625-814D
  - INS-260627-F457
  - INS-260605-25B2
  - INS-260626-287B
  - INS-260627-79E3
  - INS-260627-F756
---
The demo names the failure mode directly: you tell your coding agent 'please test this in the browser before you send it back to me,' and 'what happens? It doesn't do it.' The agent treats self-verification as optional because it is just one more instruction competing for attention inside its loop. People respond by building 'complicated hooks and harnesses,' but hooks behave differently across Claude and Codex, so the fix doesn't generalize.

Paperclip's answer is to lift verification out of the agent and into the orchestration layer as distinct, enforced roles: when an assignee finishes, a QA agent must boot and review, and separately an approver must sign off. QA and approval are deliberately split — QA iterates with the coder on correctness, while the manager approves that the result is fit for the brand. Because the gate is structural, the working agent cannot skip it.

The transferable principle is that judgment-free-but-mandatory steps (test it, lint it, get a second set of eyes) should be pulled out of the probabilistic agent loop and made deterministic features of the harness. This mirrors the broader pattern that autonomous agents go only as far as their verifier is good, and that agents lie about success unless a deterministic step catches them — so own the verifier outside the agent.
