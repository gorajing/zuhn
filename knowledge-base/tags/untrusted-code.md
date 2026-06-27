# Tag: untrusted-code

- `INS-260625-DCE4` Most sandboxes start from a full VM and add security around it; the safer model starts from nothing — only JavaScript, no fetch, no env vars — and grants explicit capabilities.
- `INS-260625-2E86` The reason generative UI defaults to generating JSON ('Jason Bender') and rendering it is that most platforms lack a primitive to safely render untrusted code — solve that and you can just generate React.
- `INS-260626-5671` Code mode only ships once you can run model-generated code in a lightweight isolate whose secret, filesystem, and network access are programmable guardrails you flip per call.
- `INS-260627-89F2` Strip away the AI framing and you are running untrusted code from the internet with your own credentials, file system, and network access.
