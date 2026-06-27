---
id: INS-260627-6217
domain: ai-development
topic: mcp
title: Generic third-party tool descriptions are a primary cause of agent degradation
actionability: reference
confidence: high
shelf_life: evergreen
status: active
tags:
  - mcp
  - tool-descriptions
  - agent-failure
  - context-engineering
  - third-party-tools
sources:
  - type: youtube
    title: "Bending a Public MCP Server Without Breaking It —\_Nimrod Hauser, Baz"
    author: AI Engineer
    url: 'https://www.youtube.com/watch?v=U00AOI1eJUE'
date_extracted: '2026-06-27'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    A third-party MCP tool's description is integration code written by someone
    who doesn't know your use case, so vanilla descriptions like 'Press a key on
    the keyboard' give agents too little to act well.
  standard: >-
    Agentic tools are callable functions wrapped in a natural-language
    description, and that description — not the code — is what tells the agent
    when and how to invoke it. When the tool comes from a third party (an MCP
    server, a library, copy-pasted code), its description is necessarily generic
    because the author must cater to an unknown set of consumers. Playwright's
    MCP exposes 21 browser tools with descriptions like 'Resize the browser
    window' or 'Close the page' that are accurate but shallow.


    In the talk's baseline run (V0, vanilla LangChain load_mcp_tools), this
    genericness produced a cascade of failures: the agent hallucinated a
    non-existent URL, returned a false 'not implemented' verdict, and failed to
    even save its evidence screenshot correctly. The lesson is that plugging in
    a third-party tool unmodified is not a neutral default — it actively imports
    someone else's compromise between every use case, which is rarely the right
    fit for yours. Treat the description as your surface area for optimization,
    not a fixed given.
stance: >-
  Off-the-shelf MCP tools degrade agent performance because their descriptions
  are written to serve every possible use case and therefore serve none
  precisely.
related:
  - INS-260603-23B1
  - INS-260627-DF4B
  - INS-260627-A0EE
  - INS-260627-B416
  - INS-260627-F522
  - PRI-260411-64C7
  - INS-260627-1B54
---
Agentic tools are callable functions wrapped in a natural-language description, and that description — not the code — is what tells the agent when and how to invoke it. When the tool comes from a third party (an MCP server, a library, copy-pasted code), its description is necessarily generic because the author must cater to an unknown set of consumers. Playwright's MCP exposes 21 browser tools with descriptions like 'Resize the browser window' or 'Close the page' that are accurate but shallow.

In the talk's baseline run (V0, vanilla LangChain load_mcp_tools), this genericness produced a cascade of failures: the agent hallucinated a non-existent URL, returned a false 'not implemented' verdict, and failed to even save its evidence screenshot correctly. The lesson is that plugging in a third-party tool unmodified is not a neutral default — it actively imports someone else's compromise between every use case, which is rarely the right fit for yours. Treat the description as your surface area for optimization, not a fixed given.
