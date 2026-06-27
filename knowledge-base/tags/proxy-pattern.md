# Tag: proxy-pattern

- `INS-260410-992A` Keep real credentials outside the sandbox and hand the agent short-lived scoped tokens the proxy translates into the real auth at the boundary.
- `INS-260627-9478` Don't pass API keys into the sandbox as env vars; have the sandbox call a proxy endpoint in your own code that injects the real key, so the secret never enters the untrusted environment.
