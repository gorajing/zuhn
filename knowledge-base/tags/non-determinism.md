# Tag: non-determinism

- `INS-260605-809A` Traditional observability asks 'is the system up?'; agent observability must also ask 'was the response grounded, did it use the right tools, did it match the brand voice?'
- `INS-260605-DB29` The instinct to 'prompt it harder' when an agent fails is usually wrong; reliability is engineered structurally through the harness surrounding the model.
- `INS-260410-A27C` Because agents are non-deterministic across runs, grade final outputs with an LLM judge on a rubric and start with ~20 real queries — not hundreds of rigid test cases.
- `INS-260605-365A` Measure agent accuracy with evals because non-deterministic systems hide regressions — Nisi only discovered a skill was lowering accuracy 97%→77% by measuring.
