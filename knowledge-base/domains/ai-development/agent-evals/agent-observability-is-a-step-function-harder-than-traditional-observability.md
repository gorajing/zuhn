---
id: INS-260625-1830
domain: ai-development
topic: agent-evals
title: Agent observability is a step-function harder than traditional observability
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - observability
  - agentops
  - evaluation
  - llm-as-judge
  - production
sources:
  - type: youtube
    title: 'Agent development and AgentOps with BigQuery, ADK, and MCP'
    author: Google Cloud Tech
    url: 'https://www.youtube.com/watch?v=tQGalTBL1Ek'
date_extracted: '2026-06-25'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Treat agent logs as first-class as agent code: you cannot know what an agent
    did without its execution trace, and those traces feed evaluation, not just
    debugging.
  standard: >-
    The talk frames agent observability as categorically different from
    traditional observability along three axes. First, agent logs are as
    important as agent code — because the agent's behavior is non-deterministic,
    you literally don't know what it did until you read the trace of an actual
    execution, so developers need logs even during development, not just in
    production. Second, the logs are consumed for evaluation and optimization,
    not just for finding errors: you compare answers against a golden dataset,
    run LLM-as-a-judge over conversations, and categorize transcripts to find
    optimization opportunities — which means simple GROUP BYs and filters are
    insufficient and you need real analytical capability over the logs. Third,
    the logs are increasingly multimodal (images, audio transcripts, video),
    unlike traditional machine telemetry. The practical implication: pick a
    logging substrate that supports analytical SQL, LLM scoring, and multimodal
    payloads from day one, because bolting evaluation onto a metrics-only
    logging stack later is a rewrite.
stance: >-
  Production agents require analytical, evaluation-grade logging because their
  execution traces — not their code — are the only record of what they actually
  did.
related:
  - INS-260327-9D50
  - INS-260605-667B
  - INS-260605-36E9
  - INS-260625-019F
  - INS-260627-6418
  - INS-260627-02E1
  - INS-260625-6127
  - INS-260625-A281
  - INS-260626-F3AC
---
The talk frames agent observability as categorically different from traditional observability along three axes. First, agent logs are as important as agent code — because the agent's behavior is non-deterministic, you literally don't know what it did until you read the trace of an actual execution, so developers need logs even during development, not just in production. Second, the logs are consumed for evaluation and optimization, not just for finding errors: you compare answers against a golden dataset, run LLM-as-a-judge over conversations, and categorize transcripts to find optimization opportunities — which means simple GROUP BYs and filters are insufficient and you need real analytical capability over the logs. Third, the logs are increasingly multimodal (images, audio transcripts, video), unlike traditional machine telemetry. The practical implication: pick a logging substrate that supports analytical SQL, LLM scoring, and multimodal payloads from day one, because bolting evaluation onto a metrics-only logging stack later is a rewrite.
