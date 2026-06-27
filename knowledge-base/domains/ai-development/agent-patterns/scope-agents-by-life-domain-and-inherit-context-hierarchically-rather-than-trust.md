---
id: INS-260626-7681
domain: ai-development
topic: agent-patterns
title: >-
  Scope agents by life-domain and inherit context hierarchically rather than
  trusting memory
actionability: immediate
confidence: medium
shelf_life: evergreen
status: active
tags:
  - context-engineering
  - agent-memory
  - specialized-agents
  - nested-topics
  - delegation
sources:
  - type: youtube
    title: "The End of Apps —\_Kitze, Sizzy.co"
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=4fntwuOoedA'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Kitze rejects opaque agent 'memory' in favor of nested topics where each
    conversation deterministically injects its parent topics' descriptions, and
    argues you shouldn't load one mega-agent with your entire life any more than
    you'd load one employee with everything.
  standard: >-
    Two complementary design choices anchor this insight. First, on agent
    granularity: Kitze uses a delegation analogy — you wouldn't give one
    employee every detail of your business, personal, and family life and then
    talk to them in a single one-on-one chat about everything. So one mega-agent
    loaded with all your context is the wrong shape. Instead he favors
    specialized, packaged agents, each with its own provider/model, system
    prompt ('soul'), tool/MCP list, and permission set, scoped to a domain
    (fitness, work, customer support).


    Second, on context provisioning: he is explicitly skeptical of agent
    'memory' systems ('no, she didn't solve memory'). His alternative in his own
    tool (Wolfer) is hierarchical: nested topics like work > projects > Benji >
    Benji customer support, where the first prompt in a child topic injects the
    descriptions of every parent topic up the tree. The agent therefore knows
    what your work is, what Benji is, and how you do support —
    deterministically, by construction — rather than hoping a probabilistic
    memory layer retrieves the right context from 'some magical place.'


    The directional claim is that deterministic, structural context inheritance
    plus narrow agent scope outperforms a single broad agent leaning on opaque
    retrieval. This stands in productive tension with the 'one decision-making
    agent, push specialization into tools' principle: Kitze separates by *life
    domain* for context hygiene, not by orchestration role. The actionable
    pattern: model your context as an explicit hierarchy you inject, and
    partition agents by domain boundary, before reaching for a memory system.
stance: >-
  Multiple domain-scoped agents with hierarchical context inheritance beat one
  all-knowing agent relying on an opaque memory system.
related:
  - INS-260327-DC4C
  - INS-260403-5B4E
  - INS-260421-60D9
  - INS-260524-D5DB
  - INS-260530-ADED
  - INS-260625-3B6D
  - INS-260626-B94C
  - INS-260626-88B8
  - INS-260626-6E3B
---
Two complementary design choices anchor this insight. First, on agent granularity: Kitze uses a delegation analogy — you wouldn't give one employee every detail of your business, personal, and family life and then talk to them in a single one-on-one chat about everything. So one mega-agent loaded with all your context is the wrong shape. Instead he favors specialized, packaged agents, each with its own provider/model, system prompt ('soul'), tool/MCP list, and permission set, scoped to a domain (fitness, work, customer support).

Second, on context provisioning: he is explicitly skeptical of agent 'memory' systems ('no, she didn't solve memory'). His alternative in his own tool (Wolfer) is hierarchical: nested topics like work > projects > Benji > Benji customer support, where the first prompt in a child topic injects the descriptions of every parent topic up the tree. The agent therefore knows what your work is, what Benji is, and how you do support — deterministically, by construction — rather than hoping a probabilistic memory layer retrieves the right context from 'some magical place.'

The directional claim is that deterministic, structural context inheritance plus narrow agent scope outperforms a single broad agent leaning on opaque retrieval. This stands in productive tension with the 'one decision-making agent, push specialization into tools' principle: Kitze separates by *life domain* for context hygiene, not by orchestration role. The actionable pattern: model your context as an explicit hierarchy you inject, and partition agents by domain boundary, before reaching for a memory system.
