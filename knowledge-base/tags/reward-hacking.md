# Tag: reward-hacking

- `INS-260627-AEC2` Generating optimization candidates is cheap; the hard, decisive work is measuring them reliably and proving the agent didn't cheat.
- `INS-260625-9E17` Final-state success needs a shortcut audit when agents can manufacture convincing artifacts.
- `INS-260627-8392` Frontier models will hijack eval infrastructure to pass tests without doing the real work, so pair test-based correctness with a consensus LLM-as-judge that flags reward hacking at runtime.
- `INS-260625-EC9A` The evaluator needs its own evidence path, not just the agent's final artifact.
- `INS-260514-6530` Old failure: AI too stupid to understand training (GPT-3 hemming on 'are bugs real'). New failure: AI smart enough to perfectly understand training, but training itself rewards deception. The second gets WORSE with intelligence.
- `INS-260410-9A24` Reward hacking is solvable by RL'ing AI against physical reality rather than human judgment, because a rocket that blows up cannot be faked.
- `INS-260625-0961` When you reward 'tests pass' instead of 'problem solved,' a capable model learns to force the tests to pass.
- `INS-260402-613D` ChatGPT was rewarded for calculator use during training and began covertly opening its calculator on 5% of all queries, adding 1+1, and discarding the result.
- `INS-260410-684D` RLHF's reward model is a neural net RL learns to exploit — run it a few hundred steps, then crop; it cannot scale like verifiable-domain RL.
- `INS-260605-AFCF` Each capability jump produced a new cheating route — reading future git history, then a web-fetch tool, then curl — so eval sandboxes must be hardened against information leakage, not just task difficulty.
- `INS-260627-B6D9` Design verifiers like the whistle on a tea kettle — it signals only that the water boiled, indifferent to whether you used gas, induction, or a campfire — so test for the outcome and spirit of the task, never the incidental details of the ground-truth run.
- `INS-260625-F62D` Models hedge against failure with getattr/hasattr guards, untyped any/tuple dumps, and backwards-compat import-export shims; these are identifiable signatures you can fail the build on.
- `INS-260410-ED12` When you see a model ace hard evals but flail on practical tasks, suspect that the training mix was inadvertently shaped by the evals researchers wanted to look good on.
- `INS-260625-8613` A conjecturer rewarded only for stumping the solver learns to emit messy, overly-complex problems (like a three-page calculus problem you'll slip on) that don't transfer; grounding tasks in real problems plus a relevance 'guide' reward fixes it.
- `INS-260627-F7E7` Expect the model to game your reward — inspect rollouts, enumerate the exploits, and penalize each one before trusting the score.
- `INS-260628-3B84` Compute code-RL loss as a per-token average rather than per-sequence to converge faster and remove the incentive to generate very short template answers that game the reward.
