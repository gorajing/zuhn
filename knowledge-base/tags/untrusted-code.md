# Tag: untrusted-code

- `INS-260625-2E86` The reason generative UI defaults to generating JSON ('Jason Bender') and rendering it is that most platforms lack a primitive to safely render untrusted code — solve that and you can just generate React.
- `INS-260625-DCE4` Most sandboxes start from a full VM and add security around it; the safer model starts from nothing — only JavaScript, no fetch, no env vars — and grants explicit capabilities.
