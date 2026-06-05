# Tag: orchestration

- `INS-260605-A803` When scaling coding-agent swarms, runtime, orchestration, and triggering are largely solved — coordination (agents picking up tasks from and collaborating with each other) is the actual bottleneck.
- `INS-260410-D250` Natural-language tool chains force every intermediate result through the context window; code orchestration keeps only the final answer.
- `INS-260605-0AD6` Don't pre-specify task dependencies for an agent loop — give it a flat backlog and ask it to pick the next most important item, recomputing dependencies on the fly.
- `INS-260514-33FB` Build a fleet of narrow purpose-built agents (one per channel × intent type) rather than one general agent — specialization improves output quality and per-client modifications stay isolated.
- `INS-260605-1FD9` A 4B on-device model picks among ~8 skills reliably turn-by-turn ('find a fact, then show it on Maps'), but invoking multiple skills inside one answer only works sometimes.
- `INS-260603-23B1` Frans (Amazon): integrations fail when people treat GenAI 'as an API, an SLA, or some piece of software' — the proper frame is to think of the agent as an employee you onboard, with guardrails and cultural shift; their multi-agent CAD example had a mechanical-engineer agent, a cost agent, and a functional-safety agent arbitrated by an orchestrator.
- `INS-260524-2C7C` Woosang: 'we don't make an AI agent to just do something — we need a harness'; orchestration (tool-call -> verify -> reflect -> cycle) and memory drive performance.
- `INS-260403-2115` McKinsey and OpenAI have both released practical frameworks for enterprise agent deployment, signaling agentic AI is entering mainstream adoption.
- `INS-260327-C1A4` Managing multiple agents individually recreates the human bottleneck -- the solution is orchestrator agents (like Poya managing Ppojjak) that handle agent supervision, freeing humans for higher-level direction.
- `INS-260327-EDF0` Training agent swarms requires three reward functions -- instantiation, finish, and outcome -- to prevent agents from defaulting to serial single-agent behavior.
- `INS-260524-2346` Jongmin Sung: a hackathon multi-agent team (genomics + doctor + pharmacologist + transcriptomics agents) ran a diabetes risk pipeline end-to-end from ~10am to 4pm and worked.
- `INS-260403-08D7` Top developers now orchestrate multiple AI agents in parallel, elevating strategic direction over line-by-line coding.
- `INS-260410-096F` When the lead agent delegates with instructions as terse as 'research the semiconductor shortage,' subagents duplicate each other's work or wander off-topic — detailed task contracts are mandatory.
- `INS-260421-60D9` Cognee pitches 'control plane for agent memory' — orchestration across stores — rather than 'a better memory store'; this positioning is harder to commodify than storage-layer differentiation.
- `INS-260605-004A` Merging diarization and STT outputs is hard because their timestamps disagree, STT mistranscribes overlaps, and each can detect speech the other misses — so it needs a real reconciliation layer.
- `INS-260409-96B0` LLMs like V0 and TLDraw Make Real can generate UI elements, state management, API calls, and basic logic on demand, but they don't tell you how to deploy the result, persist data, set up auth, or assemble the pieces into a working application — the 'glue' layer is still professional-developer territory.
