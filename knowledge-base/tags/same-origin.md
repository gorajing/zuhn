# Tag: same-origin

- `INS-260625-5CE4` srcdoc shares the host origin (scripts blocked by nonce-CSP, or if CSP is relaxed the app can read host localStorage/cookies); a sandboxed null-origin iframe loses storage APIs; adding allow-same-origin re-grants full host access — so one iframe can never both isolate and execute.
