# Tag: agent-control

- `INS-260514-FEC8` Rules = judgment ('please don't access .env'). Hooks = enforcement (the access actually fails). For high-stakes constraints, use hooks not rules — agents will eventually find reasons to ignore rules but cannot bypass hooks.
- `INS-260605-A2B7` When access is enforced at the network rather than by a key, saying 'no' is a hard stop — there is no 'this key stopped working, let me try another endpoint' helpful-agent workaround.
