# Tag: static-analysis

- `INS-260625-F62D` Models hedge against failure with getattr/hasattr guards, untyped any/tuple dumps, and backwards-compat import-export shims; these are identifiable signatures you can fail the build on.
- `INS-260605-3872` When you catch an agent doing something dumb (casting with 'as', using 'any'/'unknown', skipping validation), encode a lint rule banning that exact pattern so the type/lint error forces the model to correct itself.
