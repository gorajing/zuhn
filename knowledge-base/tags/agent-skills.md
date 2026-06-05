# Tag: agent-skills

- `INS-260605-2032` Google's on-device skill harness exposes only skill descriptions in the system prompt and uses a load-skill tool call to selectively pull in a skill's functions only when the model decides to use it.
- `INS-260605-1FD9` A 4B on-device model picks among ~8 skills reliably turn-by-turn ('find a fact, then show it on Maps'), but invoking multiple skills inside one answer only works sometimes.
- `INS-260605-6591` Show the agent only one-line skill descriptions and let it request full instructions on demand, rather than loading every tool's details up front.
