# Tag: task-decomposition

- `INS-260627-69ED` Effective agent decomposition mirrors splitting work for human engineers: independent, parallelizable, one-shot, cheaply-verifiable units with clear dependency order.
- `INS-260605-B182` Earn the right to automate by being able to do the task by hand first — otherwise you can't structure, verify, or correct the agent.
- `INS-260626-D7AE` Move a task down the verifiability spectrum with golden examples, decomposition, and guardrails so agents can run effectively against a stand-in for truth.
- `INS-260626-4A3B` AI loves to code layer-by-layer (all schema, then all API, then all frontend), which delays any integrated feedback until the last phase; force 'traceable bullet' vertical slices that each touch schema + service + a minimal UI so every slice is testable end-to-end.
- `INS-260605-0AD6` Don't pre-specify task dependencies for an agent loop — give it a flat backlog and ask it to pick the next most important item, recomputing dependencies on the fly.
- `INS-260410-7ED2` When 16 agents all hit the same bug compiling one giant artifact, decompose by using a known-good oracle to narrow the failing subset per agent.
- `INS-260625-447A` A single agent given four tasks tends to nail two and lose the rest mid-context; splitting into expert agents and adding a judge agent to combine their outputs into one coherent result avoids that silent drop.
- `INS-260411-5478` Use AgentTool to wrap a sub-agent hierarchy as a callable function, letting parent agents delegate without managing internals.
- `INS-260605-1787` You don't need GPT to zoom an image — offloading such subtasks to less intelligent models was 11x faster and 43x cheaper on those steps, driving the system's overall gains.
- `INS-260409-94D6` Don't ask 'should I hire an editor' — list the 6-10 things an editor actually does with their hands and ask which of those can become workflows.
- `INS-260404-FD88` When a goal seems impossible at scale, decomposing it to the smallest unit (one rep, one page, one call) circumvents the brain's overwhelm-triggered shutdown.
