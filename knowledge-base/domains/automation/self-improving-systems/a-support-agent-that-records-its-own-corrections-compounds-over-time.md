---
id: INS-260625-8A5F
domain: automation
topic: self-improving-systems
title: A support agent that records its own corrections compounds over time
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - self-improving
  - rag
  - knowledge-management
  - support-automation
  - flywheel
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
    Make the agent's corrected conversation history part of its own retrieval
    source, so each human fix becomes future training context and the agent gets
    better day after day.
  standard: >-
    Carrefour's internal support problem was repetitive: 150 ingestion pipelines
    and 600+ data consumers with team turnover meant new members kept asking the
    same questions, and the platform team kept re-answering them —
    time-consuming and demoralizing. Their agent grounds answers in both the
    documentation and the chat history. The compounding mechanism: when the
    agent gives an inaccurate answer, the team adds detail in the chat reply,
    and because that correction now lives in the chat history that the agent
    retrieves over, 'the agent will become better and better day after day.'
    This is a self-improving loop built almost for free — the correction channel
    and the training corpus are the same artifact, so improving the answer and
    improving the system are a single action with no separate labeling step. The
    transferable pattern: when you automate a human-answered queue, make the
    human's corrections write back into the agent's retrieval source rather than
    into a side channel, so the cost of fixing a wrong answer is paid once and
    the fix is permanent. The medium confidence reflects that this depends on
    retrieval quality keeping pace as the corpus grows and on corrections being
    clean enough not to poison future retrieval.
stance: >-
  Routing both an agent's answers and its human corrections back into the same
  retrieval corpus creates a flywheel where accuracy improves with every
  conversation.
related:
  - INS-260322-96D1
  - INS-260327-5E40
  - INS-260423-D900
  - INS-260501-EA32
  - INS-260524-D5DB
  - INS-260625-3DDC
  - INS-260327-DC4C
  - INS-260405-2BB0
---
Carrefour's internal support problem was repetitive: 150 ingestion pipelines and 600+ data consumers with team turnover meant new members kept asking the same questions, and the platform team kept re-answering them — time-consuming and demoralizing. Their agent grounds answers in both the documentation and the chat history. The compounding mechanism: when the agent gives an inaccurate answer, the team adds detail in the chat reply, and because that correction now lives in the chat history that the agent retrieves over, 'the agent will become better and better day after day.' This is a self-improving loop built almost for free — the correction channel and the training corpus are the same artifact, so improving the answer and improving the system are a single action with no separate labeling step. The transferable pattern: when you automate a human-answered queue, make the human's corrections write back into the agent's retrieval source rather than into a side channel, so the cost of fixing a wrong answer is paid once and the fix is permanent. The medium confidence reflects that this depends on retrieval quality keeping pace as the corpus grows and on corrections being clean enough not to poison future retrieval.
