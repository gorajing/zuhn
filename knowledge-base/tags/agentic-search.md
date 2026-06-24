# Tag: agentic-search

- `INS-260605-F5FB` On analytical queries the database tool wins and on quick lookups file/shell search wins, but a bash+database agent that queries then verifies with the shell scores highest.
- `INS-260605-2C70` Pair low-floor specialized tools (simple params, cheap model, few mistakes) with high-ceiling general-purpose tools (shell/query-execution) that handle the long tail.
- `INS-260605-35B4` Catch tool exceptions and return the error text to the agent as the tool response so it can self-correct, rather than letting the system crash.
- `INS-260605-5013` Embeddings front-load the cost of understanding a codebase once, replacing the repeated grep-read-grep compute that every agent session otherwise pays.
- `INS-260605-0819` Begin general-purpose, log every tool call, and treat 4-5 tool calls per question as a signal the agent needs a more specialized tool for that pattern.
- `INS-260605-59FE` The under-credited lever in context engineering is the search tool deciding what enters the window, not the curation arrow afterward.
