# Tag: limitations

- `INS-260321-80A9` Models simultaneously feel like a brilliant PhD and a 10-year-old — they're superhuman in RL-trained domains and mediocre outside them. This jaggedness doesn't improve with scale.
- `INS-260323-E161` Quantum computers can perform computations across superpositions but measuring collapses to one random result — only a few problems with special mathematical structure (like factoring) allow extracting useful answers.
- `INS-260605-1FD9` A 4B on-device model picks among ~8 skills reliably turn-by-turn ('find a fact, then show it on Maps'), but invoking multiple skills inside one answer only works sometimes.
- `INS-260605-CA2B` Replay-based durable execution suits bounded start-to-end workflows, but an agent is a long-lived session whose ever-growing replay journal eventually exceeds the system's entry-count or entry-size limits.
- `INS-260410-7292` Reasoning models solve hard problems by brute-forcing a vast internal library, not by creative recombination—and this distinction predicts where they'll break.
- `INS-260625-3B6D` An agent is a genius with amnesia: brilliant in the small slice it sees, but repo-bound (space) and blank-slate every session (time).
- `INS-260628-BEC2` Because training images are compressed and human-labeled, models absorb both lossy-compression artifacts and the perceptual limits of the humans who made the data.
- `INS-260409-2B5F` Hassabis identifies continual learning as an unsolved bottleneck; brains solve it via sleep-driven memory consolidation that AI labs have not yet replicated.
- `INS-260625-ECB6` Because SWE-RL scores patches against the one merged PR, it may penalize correct fixes that differ from how the human originally solved it.
