# Tag: rollback

- `INS-260627-3BE0` Because each task is small and self-contained, a bad result means discarding that task's work, tweaking the spec, and restarting from the plan — not surgery on a giant diff.
- `INS-260626-E0A7` Add one capability at a time so when something breaks you can take a single step back, diagnose it, and harden against recurrence.
- `INS-260624-9A4B` Speculation only works safely when the agent treats in-flight work as cancellable until user intent and side-effect boundaries are clear.
