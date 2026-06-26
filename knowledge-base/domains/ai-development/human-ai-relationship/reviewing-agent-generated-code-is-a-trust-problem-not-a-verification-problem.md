---
id: INS-260625-ACBC
domain: ai-development
topic: human-ai-relationship
title: 'Reviewing agent-generated code is a trust problem, not a verification problem'
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - trust
  - code-review
  - agents
  - social-signals
sources:
  - type: youtube
    title: >-
      GitHub’s Agent Era: 14x Commits, 200M Developers, Copilot’s Next Act —
      Kyle Daigle
    author: Latent Space
    url: 'https://www.youtube.com/watch?v=LEwlSyR0cXA'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Pull requests exist to codify trust; when an agent writes and another agent
    reviews, trust becomes diffuse and tools only solve verification, not trust.
  standard: >-
    Daigle argues that none of the proposed successors to the pull request
    (prompt requests, various PR-flow permutations) have won because they all
    attack the wrong layer. 'Ultimately we're trying to codify trust' — if Shawn
    or the senior dev reviews it, I trust it because of who they are. When an
    agent writes code and another agent reviews it and a human glances at it,
    'the trust is kind of diffuse,' and most new tools 'are talking more about
    verification flows. We have more assets to look at' — but more assets to
    inspect doesn't answer the human question of whether to trust the result.


    He draws the self-driving-car analogy: adoption tips not purely on
    verifiable proof (accident data) but on a mixture of proof and how the human
    feels in the car. Some AI tools 'imbue me with more of that feeling of trust
    even if the data says this is 100% accurate.' In regulated/enterprise
    contexts the problem compounds — you need trust not just from the team but
    from multiple governments and regulators.


    The design implication: existing trust signals on GitHub (stars, commit
    counts) are passive and gamifiable, not active social signals, and 'you may
    trust me but another open source maintainer may not.' The promising
    direction is not a single global trust score but malleable, per-project
    trust rules (account age + accepted PRs across projects + linked social
    handle age, etc.) that each maintainer can define for themselves — codifying
    the heuristic that's already in their head.
stance: >-
  As agents write and review code, the binding constraint shifts from
  verification tooling to the social problem of codifying who or what a human is
  willing to trust.
related:
  - INS-260329-919F
  - INS-260402-2D7B
  - INS-260409-6833
  - INS-260410-0A28
  - INS-260410-E233
  - INS-260605-B794
  - INS-260605-2D9B
  - PRI-260406-3EF8
  - INS-260603-D44B
  - INS-260625-A5E7
---
Daigle argues that none of the proposed successors to the pull request (prompt requests, various PR-flow permutations) have won because they all attack the wrong layer. 'Ultimately we're trying to codify trust' — if Shawn or the senior dev reviews it, I trust it because of who they are. When an agent writes code and another agent reviews it and a human glances at it, 'the trust is kind of diffuse,' and most new tools 'are talking more about verification flows. We have more assets to look at' — but more assets to inspect doesn't answer the human question of whether to trust the result.

He draws the self-driving-car analogy: adoption tips not purely on verifiable proof (accident data) but on a mixture of proof and how the human feels in the car. Some AI tools 'imbue me with more of that feeling of trust even if the data says this is 100% accurate.' In regulated/enterprise contexts the problem compounds — you need trust not just from the team but from multiple governments and regulators.

The design implication: existing trust signals on GitHub (stars, commit counts) are passive and gamifiable, not active social signals, and 'you may trust me but another open source maintainer may not.' The promising direction is not a single global trust score but malleable, per-project trust rules (account age + accepted PRs across projects + linked social handle age, etc.) that each maintainer can define for themselves — codifying the heuristic that's already in their head.
