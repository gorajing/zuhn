---
id: INS-260605-A9B4
domain: ai-development
topic: human-ai-relationship
title: 'Humans should review intent-vs-result at a pre-merge queue, not diffs'
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - human-in-the-loop
  - pre-merge-queue
  - code-review
  - governance
  - serializability
sources:
  - type: youtube
    title: >-
      CI/CD Is Dead, Agents Need Continuous Compute and Computers — Hugo Santos
      and Madison Faulkner
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=VktrqzQgytY'
date_extracted: '2026-06-05'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    A pre-merge queue reconciles parallel changes for serializability and
    surfaces grouped intent-and-result bundles (a demo video, a security-LLM
    report) for human approval instead of raw diffs.
  standard: >-
    When many agents work in parallel on overlapping parts of the codebase,
    completed changes can't go straight into the ledger — you need a pre-merge
    queue that reconciles them to preserve serializability, the same
    back-to-back commit guarantee a database enforces. At that gate the human
    provides external approval, but crucially does not look at code. They look
    at the intent ('this is what we wanted') versus the result ('here's a video
    of the feature working' or 'here's the security LLM's output'), and that
    approval may span multiple commits or features semantically grouped into a
    reviewable unit. This is forced by volume: Namespace already sees
    PR-equivalent volume 4x what it was, making per-PR human review impossible.
    The actionable reframe for engineering leaders is to redesign the human
    checkpoint around verifiable outcomes and intent-matching, and to invest in
    tooling that produces the evidence (demos, eval outputs) a human needs to
    approve without reading the diff.
stance: >-
  At agent scale, humans should approve semantically grouped changes by checking
  intent against result rather than reading individual commits or PRs.
related:
  - INS-260627-D3C7
  - PRI-260323-49F8
  - INS-260322-B09B
  - INS-260402-C301
  - INS-260404-1A34
---
When many agents work in parallel on overlapping parts of the codebase, completed changes can't go straight into the ledger — you need a pre-merge queue that reconciles them to preserve serializability, the same back-to-back commit guarantee a database enforces. At that gate the human provides external approval, but crucially does not look at code. They look at the intent ('this is what we wanted') versus the result ('here's a video of the feature working' or 'here's the security LLM's output'), and that approval may span multiple commits or features semantically grouped into a reviewable unit. This is forced by volume: Namespace already sees PR-equivalent volume 4x what it was, making per-PR human review impossible. The actionable reframe for engineering leaders is to redesign the human checkpoint around verifiable outcomes and intent-matching, and to invest in tooling that produces the evidence (demos, eval outputs) a human needs to approve without reading the diff.
