# Tag: long-running-agents

- `INS-260627-AA19` Persisting each step's output means a workflow can sleep indefinitely and resume by replaying the deterministic loop over cached state — no process stays alive.
- `INS-260325-F981` Month-long agents will need entirely new inference systems — current serving stacks cannot handle persistent execution.
- `INS-260424-4111` Logan Kilpatrick (citing Jeff Dean): the frontier of autonomous agent runtime today is on the order of hours; in the next 12 months it's truly going to be on the order of days or weeks.
- `INS-260627-8BD6` Write agents against a logical process that the runtime maps onto physical processes — so a human-in-the-loop wait of days costs nothing and resumes intact.
- `INS-260327-E016` Long-running AI development workflows require periodic context pruning -- not just accumulation -- because bloated memory files reduce recall accuracy and waste context window tokens.
- `INS-260605-2627` When HTTP calls were cheap you just retried the whole request; when an agent step costs 15 minutes of compute and context, you must treat the error as an input and recover forward.
- `INS-260605-4877` Define the agent's workspace as a manifest, not as an implicit container setup.
- `INS-260627-7674` Because the framework is a compiler plugin, it emits a manifest of step signatures per deployment, letting it check whether a running workflow can be upgraded in place or must be cancelled and rerun.
