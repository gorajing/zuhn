# Tag: linting

- `INS-260626-AF37` Build context tests in tiers — lint the spec, check comprehension, judge conventions with an LLM, then give the judge tools so it actually runs the result.
- `INS-260625-F62D` Models hedge against failure with getattr/hasattr guards, untyped any/tuple dumps, and backwards-compat import-export shims; these are identifiable signatures you can fail the build on.
- `INS-260605-D320` Forbid the capability that creates a bug class — e.g. ban database access from template rendering so N+1 queries can never occur — instead of repeatedly hunting for instances.
- `INS-260605-3872` When you catch an agent doing something dumb (casting with 'as', using 'any'/'unknown', skipping validation), encode a lint rule banning that exact pattern so the type/lint error forces the model to correct itself.
