# Tag: local-first

- `INS-260627-8F84` The argument isn't local vs cloud — it's local for iteration (privacy, deterministic latency, no scheduling queues) and cloud for scale, using one identical software stack across both.
- `INS-260409-B15B` MemPalace wake-up (~170 tokens/session) plus ~5 searches/session costs about $10/year; the equivalent LLM-summary approach burns ~$507/year — a 50x cost asymmetry that makes personal AI memory a near-commodity.
- `INS-260409-7C48` Local-first (data stays on user devices, syncs via cloud) and home-cooked software (built for small communities by their own members) both prize user agency and ownership, but orchestration agents for barefoot developers will make most design decisions by default — so local-first tools need to be the path of least resistance, not an opt-in.
- `INS-260626-5882` Local-first and file-over-app architectures gain new justification as the only way to expose the live browser state agents need to observe and script against.
- `INS-260627-F3B6` Don't make an agent push to version control and wait minutes for a workflow to fail — validate up front locally by calling the same APIs or wrappers, so the agent's iteration loop stays tight.
- `INS-260627-A37B` Persist tasks as markdown-with-frontmatter in the repo so you need no APIs, databases, or accounts, and get versioning, branch-sync, and sharing from git itself.
