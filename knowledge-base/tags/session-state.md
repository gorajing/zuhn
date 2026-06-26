# Tag: session-state

- `INS-260625-F3B0` Like a Star Trek transporter for sessions: the full state — repos, SHAs, agent history, decisions — materializes on a coworker's machine, so they resume your Claude session with Codex and zero setup.
- `INS-260411-D060` Use session.state with descriptive output_key names as the shared whiteboard for agent coordination — it's simpler and more debuggable than message passing.
- `INS-260410-EE37` Keep the full session durable outside the context window and let the harness re-hydrate slices via getEvents(), instead of compacting or trimming in place and losing tokens you can't recover.
