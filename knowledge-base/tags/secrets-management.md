# Tag: secrets-management

- `INS-260626-E5E5` A thin backend mints short-lived tokens from the real API key and hands them to the browser, which opens the WebSocket directly — removing a proxy hop while limiting blast radius if a token leaks.
