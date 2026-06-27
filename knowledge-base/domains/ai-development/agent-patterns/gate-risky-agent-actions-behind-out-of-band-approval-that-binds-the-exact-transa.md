---
id: INS-260627-F756
domain: ai-development
topic: agent-patterns
title: >-
  Gate risky agent actions behind out-of-band approval that binds the exact
  transaction into the token
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - human-in-the-loop
  - ciba
  - rich-authorization-requests
  - approval
  - async-auth
sources:
  - type: youtube
    title: 'Identity for AI Agents - Patrick Riley & Carlos Galan, Auth0'
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=VSdV-AdSlis'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Built on CIBA, the agent initiates a back-channel approval that pushes the
    exact symbol/quantity/price to the user's device, and the returned access
    token carries those approved details—not a generic yes.
  standard: >-
    For actions a user wouldn't want an agent doing unsupervised—'we don't want
    a hallucinating agent buying a stock in the middle of the night'—Auth0
    implements async authorization on top of CIBA (Client Initiated Backchannel
    Authentication). The agent, possibly a long-running autonomous process,
    makes a single SDK call that materializes a push notification (or email/MFA)
    to the user containing the structured transaction details. The user approves
    out-of-band, and the approval returns to the agent as an access token that
    contains the exact details consented to, expressed via the Rich
    Authorization Requests (RAR) spec.


    Two design choices matter beyond 'add an approval step.' First, what counts
    as risky is defined by the developer, not the model—placing an order is
    flagged in code as requiring approval. Second, because RAR objects are
    free-form and hard to render safely, Auth0 defines a schema so approval
    requests display reliably and the resource server can later verify that the
    token's bound details match the action performed. The pattern is a
    deterministic interception layer: the consent is cryptographically tied to a
    specific symbol, quantity, and price, so an agent cannot get blanket
    approval and then act differently. This is the production shape of
    human-in-the-loop—interrupt on a code-defined risk boundary and bind consent
    to concrete parameters, not a vague confirmation.
stance: >-
  Risky autonomous actions should require out-of-band human approval whose
  issued token encodes the precise transaction details the user consented to.
related:
  - INS-260626-93C7
  - INS-260626-E000
  - INS-260626-35A9
  - INS-260625-DD6D
  - INS-260627-35B1
---
For actions a user wouldn't want an agent doing unsupervised—'we don't want a hallucinating agent buying a stock in the middle of the night'—Auth0 implements async authorization on top of CIBA (Client Initiated Backchannel Authentication). The agent, possibly a long-running autonomous process, makes a single SDK call that materializes a push notification (or email/MFA) to the user containing the structured transaction details. The user approves out-of-band, and the approval returns to the agent as an access token that contains the exact details consented to, expressed via the Rich Authorization Requests (RAR) spec.

Two design choices matter beyond 'add an approval step.' First, what counts as risky is defined by the developer, not the model—placing an order is flagged in code as requiring approval. Second, because RAR objects are free-form and hard to render safely, Auth0 defines a schema so approval requests display reliably and the resource server can later verify that the token's bound details match the action performed. The pattern is a deterministic interception layer: the consent is cryptographically tied to a specific symbol, quantity, and price, so an agent cannot get blanket approval and then act differently. This is the production shape of human-in-the-loop—interrupt on a code-defined risk boundary and bind consent to concrete parameters, not a vague confirmation.
