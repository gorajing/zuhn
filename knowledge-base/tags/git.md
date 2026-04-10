# Tag: git

- `INS-260410-2C51` Constrain agents to one feature per session and require a git commit plus progress-file update before stopping, so the next session inherits a clean baseline.
- `INS-260410-62E8` Each agent claims a task by writing a lockfile to current_tasks/ and pushes via git; git's atomicity handles races and Claude handles merge conflicts.
- `INS-260320-4A82` Commit output specs to git so future agents and engineers see what was done, what failed, and what decisions were made.
