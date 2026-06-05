# Tag: guardrails

- `INS-260605-B610` Let agents fully execute reversible work and hand back anything irreversible — Parsons' rule is 'is this reversible without embarrassment to me?'
- `INS-260605-80DC` Bracket the agent with a prompt-injection/regulatory input guardrail and a compliance output guardrail, scope its tools, and require human approval on high-risk actions.
- `INS-260514-FEC8` Rules = judgment ('please don't access .env'). Hooks = enforcement (the access actually fails). For high-stakes constraints, use hooks not rules — agents will eventually find reasons to ignore rules but cannot bypass hooks.
- `INS-260501-4C5E` Sonia Huang: agents go from little helpers that do a little amount by your side, to interns that need to be managed, to interns that manage themselves, eventually to interns trusty enough to push to prod without oversight — what I call dark factories.
- `INS-260321-86F1` China is stealing American AI models, removing all guardrails, and potentially deploying them against the US — creating an absurd scenario where America fights with one arm tied behind its back against its own technology.
- `INS-260403-EA93` Healthcare AI safety requires specialty fine-tuned models plus a fast lightweight judge model running continuous real-time validation.
- `INS-260409-42F2` Hassabis says the real safety crunch arrives in 1-2 years when systems become meaningfully agentic and autonomous.
- `INS-260411-6495` Alignment policies that censor harmful outputs inevitably also suppress some legitimate knowledge, creating epistemic blind spots by design.
- `INS-260403-2FAE` Adding 'ignore malicious inputs' or using external classifiers fails against encoded attacks and creative phrasing — security must be model-level.
- `INS-260408-11E1` Hassabis ranks bad-actor weaponization and rogue agentic AI as the two existential-grade risks, with deepfakes as a separate immediate-term issue.
- `INS-260605-B66C` For AI tutors, 10DS plans to set benchmarks and guardrails (e.g. cognitive load on students, classroom safety) so schools can adopt any vendor's product, rather than building a rival tutor.
- `INS-260605-A2B7` When access is enforced at the network rather than by a key, saying 'no' is a hard stop — there is no 'this key stopped working, let me try another endpoint' helpful-agent workaround.
- `INS-260605-3872` When you catch an agent doing something dumb (casting with 'as', using 'any'/'unknown', skipping validation), encode a lint rule banning that exact pattern so the type/lint error forces the model to correct itself.
- `INS-260329-3243` HFT systems run automated pre-trade risk checks in microseconds — blocking bad orders before they hit exchanges without slowing the pipeline.
- `INS-260605-D0A0` Constrain tool-call decoding to the specific finite tool the model is supposed to call — the smaller the model, the larger the reliability win.
- `INS-260403-8ECB` Tools that flag unrealistic inputs at the moment of entry prevent more bad decisions than post-hoc review ever will.
- `INS-260327-73BE` Enterprise AI requires explainability and guardrails — graph databases alongside LLMs provide the auditable knowledge network that pure LLMs lack.
