# Tag: transport

- `INS-260627-5EB3` Going from local stdio to remote HTTP MCP flips you from zero security surface to OAuth, tokens, CORS, TLS, and rate limiting all at once, with no halfway house.
- `INS-260605-E16A` Because SSE is strictly one-way, a client closing the connection is ambiguous — buffer-to-resume or cancel-the-LLM — so you cannot support both resume and a stop button.
