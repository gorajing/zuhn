# Tag: content-security-policy

- `INS-260625-5CE4` srcdoc shares the host origin (scripts blocked by nonce-CSP, or if CSP is relaxed the app can read host localStorage/cookies); a sandboxed null-origin iframe loses storage APIs; adding allow-same-origin re-grants full host access — so one iframe can never both isolate and execute.
- `INS-260625-4559` Because the host rewrites the nested iframe's CSP from your declared metadata, any external API, script, image, or frame domain you forget to list is blocked — a leading cause of ChatGPT app-store rejections and production failures.
