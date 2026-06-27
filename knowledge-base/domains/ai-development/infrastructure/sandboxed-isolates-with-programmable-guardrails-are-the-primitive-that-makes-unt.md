---
id: INS-260626-5671
domain: ai-development
topic: infrastructure
title: >-
  Sandboxed isolates with programmable guardrails are the primitive that makes
  untrusted agent code safe to run
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - sandboxing
  - isolates
  - untrusted-code
  - security
  - workerd
  - deno
  - guardrails
sources:
  - type: youtube
    title: MCP = Mega Context Problem - Matt Carey
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=YBYUvGOuotE'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Code mode only ships once you can run model-generated code in a lightweight
    isolate whose secret, filesystem, and network access are programmable
    guardrails you flip per call.
  standard: >-
    Carey notes that even though code mode is technically superior, MCP clients
    didn't adopt it — because executing unread, untrusted LLM-generated code
    with potential secret access is a textbook CVE: it could exfiltrate secrets
    over the network, read the filesystem, spin infinite loops, or run a crypto
    miner. Historically this fear drove DSLs, JSON 'code specs', heavyweight
    VMs, and mandatory code review. The unlock is a lightweight isolate
    (V8/WorkerD running code from a string, plus Deno and Pydantic's Monty for
    Python) rather than a full sandbox VM. Crucially the guardrails are
    programmable: with node-compat off there is no process.env to leak; internet
    access is a boolean (or a domain-allowlist function) flipped server-side per
    execution. The takeaway for system design: don't gate agent code execution
    on human review — gate it on an isolate where capabilities are
    default-denied and explicitly granted. Expect a proliferation of such
    isolation primitives as agent-written code becomes the default interaction
    mode.
stance: >-
  Lightweight isolates with toggleable network and secret access are what
  unblocks running model-generated code, which is why code mode stalled until
  they arrived.
related:
  - INS-260605-CFB7
  - INS-260626-E7C4
  - INS-260626-AC8E
  - INS-260627-05AD
  - INS-260627-1970
  - INS-260605-1C30
---
Carey notes that even though code mode is technically superior, MCP clients didn't adopt it — because executing unread, untrusted LLM-generated code with potential secret access is a textbook CVE: it could exfiltrate secrets over the network, read the filesystem, spin infinite loops, or run a crypto miner. Historically this fear drove DSLs, JSON 'code specs', heavyweight VMs, and mandatory code review. The unlock is a lightweight isolate (V8/WorkerD running code from a string, plus Deno and Pydantic's Monty for Python) rather than a full sandbox VM. Crucially the guardrails are programmable: with node-compat off there is no process.env to leak; internet access is a boolean (or a domain-allowlist function) flipped server-side per execution. The takeaway for system design: don't gate agent code execution on human review — gate it on an isolate where capabilities are default-denied and explicitly granted. Expect a proliferation of such isolation primitives as agent-written code becomes the default interaction mode.
