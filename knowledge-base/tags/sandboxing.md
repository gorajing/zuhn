# Tag: sandboxing

- `INS-260619-F7E3` Agent safety is mainly a capability-boundary problem: constrain the sandbox, filesystem, runtime, and API keys before trusting model behavior.
- `INS-260605-41AE` Cloud agents run in isolated GitHub Actions sandboxes with whitelisted network access and no permission to push to main, so even a misbehaving agent is contained.
- `INS-260605-BC6F` If the agent's permissions ride on the network connection rather than an API key inside the box, there is no secret for a long-running model to leak, misuse, or route around.
- `INS-260605-4877` Define the agent's workspace as a manifest, not as an implicit container setup.
- `INS-260410-D04D` Bubblewrap on Linux and seatbelt on macOS provide subprocess-inclusive sandbox boundaries without container overhead.
- `INS-260605-AFCF` Each capability jump produced a new cheating route — reading future git history, then a web-fetch tool, then curl — so eval sandboxes must be hardened against information leakage, not just task difficulty.
- `INS-260625-DCE4` Most sandboxes start from a full VM and add security around it; the safer model starts from nothing — only JavaScript, no fetch, no env vars — and grants explicit capabilities.
- `INS-260605-1C30` If you let a model emit HTML/CSS/JS at runtime, render it inside a sandbox — the same boundary you'd impose on any untrusted third-party code.
- `INS-260625-5CE4` srcdoc shares the host origin (scripts blocked by nonce-CSP, or if CSP is relaxed the app can read host localStorage/cookies); a sandboxed null-origin iframe loses storage APIs; adding allow-same-origin re-grants full host access — so one iframe can never both isolate and execute.
- `INS-260625-3FBF` Render untrusted server-supplied HTML in a sandboxed iframe so it cannot touch the host's settings, APIs, or environment.
- `INS-260410-E233` Fewer approval prompts inside well-defined sandboxes produce safer outcomes than many prompts against a trust-nothing baseline.
- `INS-260410-CA42` Filesystem and network isolation are coupled defenses — either alone leaves an agent compromise trivially exploitable.
- `INS-260605-9976` One-agent-per-task scaling means provisioning full pods per agent — wasteful, but a full computer makes an agent far more capable than a constrained sandbox.
- `INS-260605-3206` The sandbox should be replaceable; the agent run should not be.
- `INS-260605-DF82` For agents running real development tasks, prefer VMs over containers because containers leak across the isolation boundary and create noisy-neighbor compute contention.
- `INS-260605-74CC` Containerizing an AI agent gives reproducibility, secret isolation, infra portability, volume-backed backup, and a natural host sandbox that native installs lack.
- `INS-260625-DA23` Persist a snapshot of the agent's sandbox so that when CI fails or a reviewer comments, you rehydrate and keep iterating until the PR turns green.
- `INS-260625-1826` Do not rely on policy text to keep agents away from the oracle.
