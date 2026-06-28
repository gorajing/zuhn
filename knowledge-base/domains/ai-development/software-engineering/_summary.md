# Topic: software-engineering

> 15 insights

- `INS-260627-CC85` [high] AI coding tools shift leverage from writing code to governing generated code.
- `INS-260627-9D9A` [high] Across ~140,000 engineers, AI's annualized time savings were eclipsed by context switching, interruptions, and meeting-heavy days — because writing code was never the bottleneck.
- `INS-260627-7122` [high] Automate the context-gathering phase of debugging first — it dominates the time and is where an LLM adds the most value.
- `INS-260627-340A` [high] The 1950s-1980s abstractions — high-level languages, structured programming, modularity — exist to manage scarce working memory, and an LLM's context window is the same scarce resource, so the same disciplines pay off identically.
- `INS-260627-0EFC` [high] AI-generated code needs provenance and ownership, not just good prompts.
- `INS-260628-29DF` [high] Premature optimization is happening if and only if you hard-code at a lower level of abstraction than you can justify; ask for a square root, don't write the bit-shift hack.
- `INS-260628-08FB` [high] Break AI coding into research (compress truth from the code), plan (compress intent into explicit steps with file names and code snippets), and implement — staying in the smart zone at every phase.
- `INS-260627-A7F4` [high] Shifting decision-making left empowered developers to make architectural choices, but the expertise and review capacity to guide those choices never scaled with the empowerment.
- `INS-260627-3F18` [high] The largest agent speedups came not from new kernels but from rewriting the problem to call faster existing operations.
- `INS-260627-8674` [high] The authorization refactor only became automatable after the team did one migration entirely by hand — reading code, breaking things, surfacing hidden invariants — then fed that pull request to the agent as a seed.
- `INS-260627-36AB` [medium] Cheap generated code can make review capacity the scarce resource.
- `INS-260627-3B20` [medium] Fully AI-adopted teams push PRs ~18% larger in net lines added — concentrated in the same files (more verbose, not more spread out) — with no statistically significant relationship between AI adoption and bug tickets or PR reverts.
- `INS-260627-E284` [medium] An 'environment cleanliness index' (tests, types, docs, modularity, code quality) shows ~0.40 R² with AI productivity gains — clean code amplifies AI, and unchecked AI use accelerates the entropy that degrades it.
- `INS-260627-8431` [medium] Developers report their cursor/copilot rules are 'mostly' followed but never rigorously, so quality has to be a closed loop that catches violations at the PR, records what you accepted, and adapts the standard.
- `INS-260627-90A8` [low] Skip stack standardization and let developers use whatever language they like, since AI can read any repo and translate a feature's approach into another framework on demand.
