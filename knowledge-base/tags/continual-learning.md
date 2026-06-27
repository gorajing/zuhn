# Tag: continual-learning

- `INS-260626-4075` Unlike coding, where a technical user steers a mistake-tolerant agent, expert domains treat 80%-right as 0%-useful — so the human's last-20% correction is the real training data.
- `INS-260501-06B1` Agents handle pieces of tasks today; they can't yet learn about your specific context to do the whole thing autonomously — that's the missing capability.
- `INS-260321-E59A` Donald Knuth's viral LLM math result was achieved by making the LLM update its memory after each solution — a hack simulating plasticity — but Knuth himself still had to create the final proof manifold.
- `INS-260501-8186` We're hacking continual learning by having agents write skill files. Real continual learning — agents that get better at your specific org over time — is research-blocked.
- `INS-260410-91A1` Imagine a superintelligent 15-year-old that's very eager to learn — you deploy it as a programmer, doctor, etc., and the deployment itself is a learning process, not a finished product release.
- `INS-260501-9C3F` Hassabis pegs ~50/50 odds AGI needs 1-2 more big breakthroughs beyond what we already have — primarily in continual learning, long-term reasoning, and consistency.
- `INS-260410-38C9` No amount of pre-training can encode the idiosyncrasies of a specific job, client, or environment — the world is too big, so on-the-job learning into the weights is unavoidable.
- `INS-260410-7AF5` Unlike humans, AI copies can pool their on-the-job learning — so one AI effectively learns every job in the economy simultaneously once online learning works.
- `INS-260410-410E` Dwarkesh still hires a human editor to clean transcripts even though Claude 4 Opus can technically do the task, because he can't train the model to learn his preferences over time.
- `INS-260626-F160` Continuous learning kills the start-stop training job; you run concurrent pools for sampling and training and optimize aggregate wall-clock, accepting slower individual jobs.
- `INS-260409-2B5F` Hassabis identifies continual learning as an unsolved bottleneck; brains solve it via sleep-driven memory consolidation that AI labs have not yet replicated.
- `INS-260410-1197` LLMs can't build context, interrogate their own failures, or pick up small efficiencies over time — which is what actually makes human employees valuable, not raw intellect.
- `INS-260410-D49F` Continual learning is LLMs' most obvious gap, but SFT-as-tool-call and meta-learned across-window memory may replicate it without a paradigm shift.
- `INS-260410-988F` AI problem-solving is trial-and-error at scale, not cumulative — it can jump and fail repeatedly, but it can't reach a handhold, stay there, and climb from it.
- `INS-260410-9FE6` Without a goal and without ground truth from the world responding to your actions, you cannot have prior knowledge or continual learning — only imitation of people who do.
- `INS-260626-408A` The valuable training signal is what users change after the agent acts, not the binary ratings they almost never give.
- `INS-260321-8C35` AGI requires weight plasticity (continual learning without catastrophic forgetting) and causal modeling (simulation over correlation) — neither solvable by making models bigger.
- `INS-260605-6B24` Cloud's cost advantage rests on batching identical model weights across millions of users; if continual learning gives each user their own evolving weights, batching collapses and local inference becomes ~10x more competitive.
- `INS-260410-3271` Jeff Dean envisions a single 'organic blob' model where 100 teams independently train specialized modules (Southeast Asian languages, Haskell reasoning, medical imaging) that attach to a base, with continuous distillation cycling between big exploration and small efficient serving.

- `INS-260501-D360` LLMs have anterograde amnesia: they can use what they learned in pretraining and what's in context, but cannot consolidate new learning into persistent memory.
- `INS-260626-80F1` Static models make the same mistakes tomorrow they made today; products that learn from user signal compound a flywheel competitors can't replicate.
- `INS-260625-16EC` Frontier models are already smart enough; the gating factor is baking each user's new and evolving context deeply into weights the way pre-training bakes in general knowledge.
- `INS-260626-BA05` RL crushes a whole trajectory of real-world correction into one reward scalar; SDPO instead gives a teacher privileged hints and matches the student to it, training on actual text guidance.
- `INS-260626-B38C` Mine your own chat transcripts for repetitive tasks and copy-paste loops, then codify them into skills, automations, and emergent rules — storing context for agents matters more than doing the work yourself.
