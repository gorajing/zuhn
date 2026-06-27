# Tag: agent-safety

- `INS-260625-029F` A reliable agent must be scored on knowing when not to continue.
- `INS-260605-AE67` The right agent runs on a model good enough to perform the task but not capable of arbitrary harm — bigger is not automatically better or safer.
- `INS-260605-2D9B` In a world of delegated agent work, some friction is by design — don't compromise trust for convenience.
- `INS-260330-D5CD` When agents write 1,300 PRs per week, CI and test infrastructure become the primary trust mechanism replacing the confidence that comes from knowing a human wrote the code.
- `INS-260605-5CF8` An agent's spec doubles as an attack map: it is most willing to act — and most powerful — in precisely the domains it was designed for.
- `INS-260605-41AE` Cloud agents run in isolated GitHub Actions sandboxes with whitelisted network access and no permission to push to main, so even a misbehaving agent is contained.
- `INS-260626-8C66` Expose individual tool fields to the agent (e.g. only the 'to' field) so a mistake is structurally bounded instead of as wide as the underlying API.
- `INS-260626-A645` Put the human-review step in the execution path as a brick wall the agent cannot route around, instead of trusting the model to ask first.
- `INS-260626-A499` Tell the agent 'this won't send automatically — there is a human in the loop' so a cautious model will actually call the gated tool.
- `INS-260626-ACD0` For local, file-based tools, you can unlock far more agent capability by giving users sharp tools and owning the risk rather than sandboxing the agent.
- `INS-260627-08E7` Intercept the tool call before it executes, validate the sensitive arguments with deterministic logic, and refuse invocation if they violate your constraints.
- `INS-260626-7F55` Cursor's old worktree code made escaping the checkout physically impossible; the markdown skill only asks the model to stay put, so models sometimes wander into the primary checkout.
- `INS-260626-656C` Instead of manually approving every privileged action (fatigue) or granting unfettered access (unsafe), spawn a verifier agent that adjudicates each request and interrupts the human only when warranted.
- `INS-260626-E255` The paper finds that post-update behavior depends primarily on whether the memory pipeline preserves temporally valid evidence before generation.
