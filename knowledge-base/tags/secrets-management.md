# Tag: secrets-management

- `INS-260627-9478` Don't pass API keys into the sandbox as env vars; have the sandbox call a proxy endpoint in your own code that injects the real key, so the secret never enters the untrusted environment.
- `INS-260626-E5E5` A thin backend mints short-lived tokens from the real API key and hands them to the browser, which opens the WebSocket directly — removing a proxy hop while limiting blast radius if a token leaks.
