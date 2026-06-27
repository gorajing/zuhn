# Tag: web-security

- `INS-260627-22EC` Indirect prompt injection defense shifts part of agent safety back into web-scale detection, filtering, and content-security operations.
- `INS-260625-5CE4` srcdoc shares the host origin (scripts blocked by nonce-CSP, or if CSP is relaxed the app can read host localStorage/cookies); a sandboxed null-origin iframe loses storage APIs; adding allow-same-origin re-grants full host access — so one iframe can never both isolate and execute.
- `INS-260625-07CB` ChatGPT/MCP apps nest a srcdoc content iframe inside an outer iframe served on a host-owned proxy domain (e.g. openaiusercontent.com) so isolation scales without per-app CSP whitelisting.
