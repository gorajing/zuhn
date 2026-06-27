# Tag: code-smells

- `INS-260625-131D` The giant prompt is the agentic version of the god class — decompose the distinct jobs hiding inside it and put each responsibility where it belongs.
- `INS-260514-268F` Code churn in one area predicts future complexity — intervene architecturally when you first notice the pattern, not when the mess is already unmaintainable.
- `INS-260625-F62D` Models hedge against failure with getattr/hasattr guards, untyped any/tuple dumps, and backwards-compat import-export shims; these are identifiable signatures you can fail the build on.
