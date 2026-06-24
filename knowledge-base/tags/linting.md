# Tag: linting

- `INS-260605-3872` When you catch an agent doing something dumb (casting with 'as', using 'any'/'unknown', skipping validation), encode a lint rule banning that exact pattern so the type/lint error forces the model to correct itself.
- `INS-260605-D320` Forbid the capability that creates a bug class — e.g. ban database access from template rendering so N+1 queries can never occur — instead of repeatedly hunting for instances.
