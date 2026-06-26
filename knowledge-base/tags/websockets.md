# Tag: websockets

- `INS-260605-E16A` Because SSE is strictly one-way, a client closing the connection is ambiguous — buffer-to-resume or cancel-the-LLM — so you cannot support both resume and a stop button.
- `INS-260626-E5E5` A thin backend mints short-lived tokens from the real API key and hands them to the browser, which opens the WebSocket directly — removing a proxy hop while limiting blast radius if a token leaks.
