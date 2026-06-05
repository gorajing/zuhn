# Tag: snapshot-restore

- `INS-260605-3345` Compress snapshots seekably and decompress only the memory pages actually needed on restore, shrinking a 512MB VM snapshot to ~14MB and cutting restore to a few hundred milliseconds.
- `INS-260605-ACC9` Snapshot the agent's machine, shut it down, and restore it when the next user message arrives—giving durability across turns without paying to keep compute live.
