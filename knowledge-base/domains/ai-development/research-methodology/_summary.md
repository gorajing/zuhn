# Topic: research-methodology

> 50 insights

- `INS-260410-5951` [high] On Terminal-Bench 2.0, the same Claude model scored 6 points higher with uncapped resources than with strictly enforced per-task specs (p<0.01), exceeding the margins that typically separate frontier models on leaderboards.
- `INS-260410-F167` [high] Unlike static benchmarks that score a model's output directly, agentic evals give the model a full runtime environment — so CPU, RAM, time limits, API latency, cluster health, and even egress bandwidth all become part of what gets measured.
- `INS-260413-B79B` [high] AI benchmark saturation has compressed from years to months, making sustained measurement infrastructure the binding constraint on progress tracking.
- `INS-260505-A55F` [high] Solving more problems doesn't mean solving the right problems — problem-selection stays human.
- `INS-260410-5740` [high] AI has driven the cost of idea generation to near-zero, making verification and evaluation the new bottleneck in science.
- `INS-260501-1608` [high] Pick a domain with combinatorial search + clear objective + simulator-or-data — that's where AI breakthroughs are tractable today.
- `INS-260409-004E` [high] Douglas's enzyme-trained phylogenetic model successfully detected evolutionary bursts in 13 biological systems plus Indo-European languages, demonstrating that branching-system mathematics is substrate-agnostic.
- `INS-260410-83CF` [high] Sandor Strauss's self-motivated project of ingesting, cleaning, and unifying tick data alongside 1800s-era historical pricing — years before anyone had models that could use it — is what made Medallion's later machine learning possible.
- `INS-260410-303B` [high] Setting container guarantee and hard limit to the same value creates zero headroom for transient memory spikes, silently OOM-killing tasks that would otherwise succeed — so evals should specify both parameters separately.
- `INS-260410-5036` [high] Real deep-learning development is Jupyter-notebook shape debugging plus empirical verification of flaky framework docs, not the clean math suggested by papers and tutorials.
- `INS-260410-AC0B` [high] DeepSeek's research taste is visible in how iteratively and transparently they trade off hardware constraints (memory bandwidth vs. flops) for algorithmic structure, producing simple solutions rather than ornamented ones.
- `INS-260413-C040` [high] MSAPairformer (111M params) beat prior SOTA on ProteinGym; GPN-Star (200M) beat a 40B genomics model; AlphaFold 3 (370M) still leads FoldBench despite SimpleFold's 3B challenger — data beats scale in biology.
- `INS-260408-F58E` [high] Isomorphic's pipeline screens binding + cross-target toxicity in silico, then only validates the final candidates in the wet lab.
- `INS-260412-B805` [high] Quantum mechanics and general relativity both work brilliantly in isolation but break when combined, indicating the solution isn't fixing either but finding a deeper framework that subsumes both.
- `INS-260505-1606` [high] Models on biological data quietly learn the biases of the experiments — interpretability catches that.
- `INS-260410-B30D` [high] Leonardo wrote his discoveries in coded mirror script and Brunelleschi burned his dome schematics — both wanted to be marveled at forever, and Palmer calls them saboteurs of human progress.
- `INS-260505-483B` [high] Individual labs collecting hypothesis-specific data is the equivalent of training language models on one book at a time.
- `INS-260505-2FFB` [high] EVO-1, EVO-2, all training data, all code — released openly because that's where academic labs add unique value.
- `INS-260410-BFCF` [high] Zuckerberg admits Meta tuned a Llama 4 Maverick variant that sat near the top of Chatbot Arena, but shipped the un-tuned version because arena-optimization 'led us astray' on actual product quality.
- `INS-260409-C016` [high] AI research output gets judged on interim expert assessments because peer review is too slow — treat these as preliminary, not final.
- `INS-260505-5510` [high] A model that predicts well but is uninterpretable is also a model that fails unpredictably outside its training distribution.
- `INS-260408-76F4` [high] Hassabis decided in a single meeting to fold all 200M proteins and release them free, because it took less effort than building the request server.
- `INS-260410-0923` [high] When your experiments contradict you, top-down belief based on beauty, simplicity, and brain-inspired correctness is what tells you to keep debugging instead of abandoning the direction.
- `INS-260409-C3F7` [high] Building a cell-type atlas of the avian pallium and comparing it to mammalian equivalents settled a 60-year debate about whether bird and mammal intelligence share common neural origins — a pattern other biology debates should emulate.
- `INS-260409-5E40` [high] Solving open-but-neglected problems is less impressive than it sounds: the problems are tractable, just understaffed.
- `INS-260410-9D04` [high] BrowseComp answers leaked through 20+ distinct sources, and the act of running agents on them permanently caches query trails — the benchmark degrades every time it's used.
- `INS-260410-B47A` [high] A decade ago virtually every major AI figure worked at Google — Ilya Sutskever, Hinton, Krizhevsky, Dario Amodei, Karpathy, Shazeer, Hassabis, Suleyman — yet the commercialization of their work mostly happened at OpenAI, Anthropic, and Tesla after they left.


- `INS-260410-DD35` [high] From 2012-2020 was research, 2020-2025 was scaling, and now we're back to research with big computers because 100x more scale would not transform outcomes.
- `INS-260408-C572` [high] Foundation models are world models without the search/reasoning layer AlphaZero had; combining them is the next breakthrough, not bigger pretraining.
- `INS-260410-10C9` [high] Google Brain's bottom-up 'one credit per researcher, pool them as you like' chip allocation rewarded dropping failed ideas; Gemini's top-down allocation leads every group to report 'my thing is working, give me more chips.'

- `INS-260410-D03C` [high] Benchmark scores increasingly drive deployment decisions, but the rigor applied to running and reporting them hasn't caught up — making resource configuration a first-class variable is the minimum bar for trustworthy agentic evals.
- `INS-260505-3CA0` [high] Frontier labs are going closed; universities differentiate by being radically open with everything they produce.
- `INS-260405-F72B` [medium] LLM grokking, like penicillin, was discovered by accident—and this accidental-discovery pattern is more characteristic of deep learning progress than theory-driven research.
- `INS-260505-9723` [medium] Train the model, see what it doesn't know, do targeted experiments to fill those holes.
- `INS-260501-5F37` [medium] Once we can accurately simulate emergent systems, economics and biology become real sciences in the way physics has been — controlled experiments without controlled experiments.
- `INS-260505-5D69` [medium] Nature is constantly producing pandemic-grade viruses; what we lack is the ability to detect, respond, and cure them — that's where AI's marginal benefit goes.
- `INS-260410-3075` [medium] A concrete scenario forces you to confront implementation details and surface crux disagreements that vague probability estimates let you skate past.
- `INS-260410-EF9E` [medium] Expecting a connectome to explain cognition is like expecting trained LLM weights to — what you need is the architecture, learning rule, and loss function.
- `INS-260410-F436` [medium] Gradient descent makes you solve the training problem, not generalize well — catastrophic forgetting is the natural default and good transfer happens only when researchers iterate until they find a representation that transfers.
- `INS-260409-E080` [medium] Generator-verifier loops are easy to describe and almost impossible to execute because the verifier must be protected from the generator's influence.
- `INS-260501-428B` [medium] Six years after Kaplan's language scaling law, the dexterity equivalent appeared: clean log-linear pretraining-hours to validation-loss curve.
- `INS-260501-2BF8` [medium] Applied has completely rewritten their stack every ~2 years — 4 times in 10 years. That's the realistic AI engineering cadence.
- `INS-260409-6833` [medium] Formal proof verification (Lean, Coq) doesn't generalize to real research — agents need natural-language verification that resists self-agreement.
- `INS-260501-0C6C` [medium] Teleop = 24 hr/day cap per robot. Wearables = better. Egocentric video = 10M hours/year, ambient like FSD.
- `INS-260505-D35A` [medium] AI for science demands precision (13 decimal places in physics) that consumer AI can ignore, forcing better fundamental research.
- `INS-260501-E5AC` [medium] Scaling works AND recursion works AND specialized architectures work — they're alternative paths, not competing claims.
- `INS-260505-1E61` [medium] Foundation-model-scale science needs team-science-scale resources, which existing academic structures don't provide.
- `INS-260410-0741` [medium] Nadella says the first thing a working quantum computer lets you do is design the next one, because simulating atom-level gate construction is exactly the workload classical hardware cannot handle.
- `INS-260410-6BBC` [medium] The tech tree branches so widely that different civilizations would discover entirely different subsets of it, producing enormous potential gains from trade between any two.
- `INS-260501-BC7C` [low] If information is more fundamental than matter or energy, AI is operating on the substrate of reality — and is qualitatively different from prior revolutions.
