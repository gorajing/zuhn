# Tag: harness-design

- `INS-260625-9096` Post-training results depend on the harness the agent sees during training, so harness choices are load-bearing system parameters.
- `INS-260410-3601` The quality of the test/verifier is the binding constraint on what an unsupervised agent can actually achieve.
- `INS-260410-37D5` Compaction preserves continuity but doesn't cure context anxiety; only a fresh agent with a handoff artifact does.
- `INS-260410-0FC1` Redesign the test and log UX around the agent's cognitive constraints: short outputs, greppable ERROR lines, precomputed summaries, deterministic sampling.
- `INS-260410-B0D6` Every harness workaround encodes an assumption about what the model can't do; those assumptions decay fast and need to be re-tested on each model upgrade.
- `INS-260410-AA6E` A separate evaluator agent is far more tractable to tune toward skepticism than convincing a generator to be critical of its own output.
- `INS-260410-53C2` Use a specialized first-session initializer agent to create scaffolding (feature list, progress file, init.sh, git repo), then run identical coding agents on subsequent sessions that only do incremental work.
- `INS-260605-C536` Use a separate, harshly-tuned evaluator agent rather than asking the generator to grade itself, because critiquing is tractable to tune while self-criticism is not.
- `INS-260605-E9E2` Get a feel for each model's spiky weak spots, fill those gaps with harness scaffolding, then delete that scaffolding once a later model internalizes the capability.
- `INS-260625-84D0` If the deployment harness matters, put it in the training loop before tuning rather than bolting it on afterward.
- `INS-260625-A53F` A single leaderboard score cannot separate model capability, harness knowledge, and robustness to deployment drift.
- `INS-260625-DAE9` Do not optimize the model, scaffold, and eval suite as independent tracks.
- `INS-260514-1841` Browser Harness is 600 lines. When an agent hits an edge case (sign a signature, click a native dialog), it writes its own tool extension and publishes it as a skill.
- `INS-260410-9DB0` Every piece of a harness encodes an assumption about what the model can't do; those assumptions are worth re-stress-testing each model release.
- `INS-260625-93FC` A richer harness is not free performance; it embeds environment knowledge that must be paid for and measured.
