# Tag: long-horizon-agents

- `INS-260327-FDC1` Chase argues that file system access is a non-negotiable primitive for long-horizon agents because it enables critical context management strategies: storing summarized context for later retrieval, handling large tool results, and maintaining state across compaction boundaries.
- `INS-260410-EE37` Keep the full session durable outside the context window and let the harness re-hydrate slices via getEvents(), instead of compacting or trimming in place and losing tokens you can't recover.
