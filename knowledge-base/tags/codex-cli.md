# Tag: codex-cli

- `INS-260628-34CF` Implement a subagent as a small wrapper script that launches a fresh child instance of the same agent, captures its file output, and prints it to stdout.
- `INS-260628-1610` Write the agent name and query to files and run a constant command, rather than passing them as CLI arguments, so the permission system sees the same command every time.
- `INS-260628-8C7D` Expect the bulk of the effort in sandboxed subagents to be discovering the minimum permissions, since the sandbox blocks child processes from credentials, file writes, and logging outside the workspace.
