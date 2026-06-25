# Topic: agent-evals

> 25 insights

- `INS-260625-A99C` [high] An automated metric operates on the model alone and can only see fluency and personality; it cannot see the archive, so it cannot judge fidelity to it.
- `INS-260625-1830` [high] Treat agent logs as first-class as agent code: you cannot know what an agent did without its execution trace, and those traces feed evaluation, not just debugging.
- `INS-260625-0021` [high] Agentic systems introduce a stacked hierarchy of failure modes — memory/retrieval/safety at the base, reasoning/planning/tool errors in the middle, multi-agent coordination at the top — so evaluating only model output misses most production risk.
- `INS-260625-0148` [high] Treat model, tools, context, environment, and feedback as explicit evaluation variables.
- `INS-260625-BB42` [high] An agent eval measured in dollars earned can never saturate, while percentage benchmarks lose all signal once models cluster near the top.
- `INS-260625-13F0` [high] If a model refuses or underperforms a task it's actually capable of because it senses an evaluation, getting the real answer is an adversarial optimization problem.
- `INS-260625-14F9` [high] Separate context discovery from patch generation when diagnosing coding-agent reliability.
- `INS-260625-78C1` [high] SkillOpt applies candidate edits, re-runs the agent on a validation set, and accepts the new skill only if performance actually improves — otherwise it reverts and records the failure.
- `INS-260625-B6E8` [high] Make held-out tests auditable in mechanism but private in instance.
- `INS-260625-52C0` [high] Stable task and solution schemas let evaluators grow without breaking agents.
- `INS-260625-FDC1` [high] Long-running agent gates should report success, reaction latency, and resource use together.
- `INS-260625-99B0` [high] SkillOpt passes the whole rollout — tool usage, intermediate steps, and final output — to the optimizer, not just a pass/fail correctness signal.
- `INS-260625-7165` [high] Convincingness and fidelity are independent properties, so an eval that scores convincingness tells you nothing about whether the persona's reasoning is faithful to the record.
- `INS-260625-25D6` [high] Treat every production interaction as evaluation data, because production traffic is the largest and most representative eval set you will ever have.
- `INS-260625-18D0` [high] Evaluate agents inside simulated workflows (support, code-gen, research) measuring task completion, tool correctness, planning quality, and resource usage — not prompt accuracy.
- `INS-260625-9644` [high] When a task has objective consequences, evaluate the consequence, not the prose around it.
- `INS-260625-B096` [high] Retry provider faults, not poor answers.
- `INS-260625-2A4F` [high] Shared failures are often benchmark QA signals before they are leaderboard facts.
- `INS-260625-B985` [high] Voice agents fail in egregious ways humans never do (screaming, whispering, voice-swapping mid-call), making QA mandatory, and the three things worth evaluating are goal completion, correct workflow steps, and audio quality — not word error rate.
- `INS-260625-C1E8` [medium] AgentRun gates should distinguish fast blockers from slower calibration signals.
- `INS-260625-76E9` [medium] Monitoring benchmarks should disclose and vary waiting primitives because they change measured reliability.
- `INS-260625-869B` [medium] Budgeted ranked evidence is a stronger context gate than raw file-hit or token-count metrics.
- `INS-260625-1920` [medium] Model identity is not enough; the harness is part of the measured system.
- `INS-260625-D8C4` [medium] A top benchmark ranking was achieved using only schema ontologies, but reaching the near-100% accuracy production needs requires two further context layers — query blueprints and value searches — that no benchmark captures.
- `INS-260625-2B5A` [medium] Correctness gates should encode behavior, not proximity to one historical patch.
