# Tag: non-determinism

- `INS-260626-3105` Run each eval ~5 times, track its pass rate, and give the tests you care about a small failure budget — a single green run proves nothing.
- `INS-260605-809A` Traditional observability asks 'is the system up?'; agent observability must also ask 'was the response grounded, did it use the right tools, did it match the brand voice?'
- `INS-260605-0E19` Traditional software made you a traffic controller dictating every move; agents make you a dispatcher who states the destination and trusts the agent to find the route.
- `INS-260605-DB29` The instinct to 'prompt it harder' when an agent fails is usually wrong; reliability is engineered structurally through the harness surrounding the model.
- `INS-260627-7076` A human-reviewed shared file (agents.md / micro-agent) is the practical sweet spot for inter-agent context sharing, between context-blowing full sharing and loop-prone agent-to-agent chat.
- `INS-260605-365A` Measure agent accuracy with evals because non-deterministic systems hide regressions — Nisi only discovered a skill was lowering accuracy 97%→77% by measuring.
- `INS-260410-A27C` Because agents are non-deterministic across runs, grade final outputs with an LLM judge on a rubric and start with ~20 real queries — not hundreds of rigid test cases.
- `INS-260625-9C3B` Because outputs are non-deterministic, a change you think fixed one thing can quietly break two or three others — eval coverage is the prerequisite for safe iteration.
- `INS-260605-C436` Input A no longer reliably yields output C, so you must measure how OFTEN an agent succeeds rather than asserting it always does.
- `INS-260605-0BA3` Because models are non-deterministic and agent behavior is emergent, delivery should mirror the data scientist's hypothesize-experiment-confidence loop rather than a Jira-board feature build with fixed milestones.
