# Tag: agent-supervision

- `INS-260627-6031` Reviewing agents by scrolling through ten blocks of raw reasoning tokens does not scale; structured, model-generated artifacts (plans, task lists, diagrams, recordings) are the right primitive for supervising long-running agents.
- `INS-260605-5D5E` An agent that starts waffling, contradicting itself, or 'bullshitting' in its reasoning is signaling failure before its diff does — kill or park the session.
- `INS-260605-3872` When you catch an agent doing something dumb (casting with 'as', using 'any'/'unknown', skipping validation), encode a lint rule banning that exact pattern so the type/lint error forces the model to correct itself.
