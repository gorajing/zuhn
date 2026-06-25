# Tag: iframe

- `INS-260605-1C30` If you let a model emit HTML/CSS/JS at runtime, render it inside a sandbox — the same boundary you'd impose on any untrusted third-party code.
- `INS-260625-5CE4` srcdoc shares the host origin (scripts blocked by nonce-CSP, or if CSP is relaxed the app can read host localStorage/cookies); a sandboxed null-origin iframe loses storage APIs; adding allow-same-origin re-grants full host access — so one iframe can never both isolate and execute.
- `INS-260625-07CB` ChatGPT/MCP apps nest a srcdoc content iframe inside an outer iframe served on a host-owned proxy domain (e.g. openaiusercontent.com) so isolation scales without per-app CSP whitelisting.
- `INS-260605-1BBF` An MCP app is a single sandboxed HTML file in an iframe with no local storage, no network access, and CSP/CORS-blocked external resources — so everything must be embedded and a shared design system becomes essential.
