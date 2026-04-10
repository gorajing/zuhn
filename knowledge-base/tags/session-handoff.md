# Tag: session-handoff

- `INS-260410-2C51` Constrain agents to one feature per session and require a git commit plus progress-file update before stopping, so the next session inherits a clean baseline.
- `INS-260410-BBC1` Prompt every session to run the same opening sequence: pwd, read progress file, read feature list, check git log, run init.sh, run a basic end-to-end smoke test, then pick a feature.
