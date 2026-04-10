# Tag: multi-session

- `INS-260410-2C51` Constrain agents to one feature per session and require a git commit plus progress-file update before stopping, so the next session inherits a clean baseline.
- `INS-260410-53C2` Use a specialized first-session initializer agent to create scaffolding (feature list, progress file, init.sh, git repo), then run identical coding agents on subsequent sessions that only do incremental work.
