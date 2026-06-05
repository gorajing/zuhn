# Tag: sandboxing

- `INS-260410-D04D` Bubblewrap on Linux and seatbelt on macOS provide subprocess-inclusive sandbox boundaries without container overhead.
- `INS-260605-41AE` Cloud agents run in isolated GitHub Actions sandboxes with whitelisted network access and no permission to push to main, so even a misbehaving agent is contained.
- `INS-260605-BC6F` If the agent's permissions ride on the network connection rather than an API key inside the box, there is no secret for a long-running model to leak, misuse, or route around.
- `INS-260605-1C30` If you let a model emit HTML/CSS/JS at runtime, render it inside a sandbox — the same boundary you'd impose on any untrusted third-party code.
- `INS-260605-AFCF` Each capability jump produced a new cheating route — reading future git history, then a web-fetch tool, then curl — so eval sandboxes must be hardened against information leakage, not just task difficulty.
- `INS-260410-E233` Fewer approval prompts inside well-defined sandboxes produce safer outcomes than many prompts against a trust-nothing baseline.
- `INS-260410-CA42` Filesystem and network isolation are coupled defenses — either alone leaves an agent compromise trivially exploitable.
- `INS-260605-9976` One-agent-per-task scaling means provisioning full pods per agent — wasteful, but a full computer makes an agent far more capable than a constrained sandbox.
- `INS-260605-DF82` For agents running real development tasks, prefer VMs over containers because containers leak across the isolation boundary and create noisy-neighbor compute contention.
- `INS-260605-74CC` Containerizing an AI agent gives reproducibility, secret isolation, infra portability, volume-backed backup, and a natural host sandbox that native installs lack.
