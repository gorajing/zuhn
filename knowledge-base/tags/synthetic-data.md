# Tag: synthetic-data

- `INS-260626-60C2` Invest in a human-labeled dataset (pass/fail plus a short critique), generate eval outputs from your real system rather than synthesizing them, and calibrate the judge to a domain expert using train/dev/test splits and F1.
- `INS-260605-1B0B` Because no scrapeable dataset of agents-using-tools exists, an RL environment plus a reward lets you generate good trajectories by rejection sampling and bootstrap training from them.
- `INS-260627-0F8C` Environments collapse evals, synthetic-data generation, RL/distillation training, and live agent deployment into a single reusable abstraction: harness + tasks + rewards.
- `INS-260410-66C6` Ask ChatGPT for ten jokes and you'll notice it only knows three — models are silently collapsed into a narrow output manifold, which poisons any attempt to train on their own generations.
- `INS-260603-A09F` Frans/Rob (Amazon/Zoox): LLMs work because we distilled all of humanity's knowledge from the internet, but there's no equivalent corpus of 3D scene scans; people create virtual worlds to train on, but 'everything is fake at the beginning' and 'no matter how many virtual worlds you create, even infinite, it's never going to be enough.'
- `INS-260605-738E` Use a strong cloud LLM to generate low-millions-to-tens-of-millions of synthetic examples of the target behavior, then fine-tune an off-the-shelf tiny model (e.g. Gemma 270M) on that data and quantize for deployment.
- `INS-260627-DF51` SFT-era fine-tuning died on the difficulty of creating labeled examples; environments sidestep this by asking only for a way to score outcomes, so data is created on the fly during training.
- `INS-260605-D3EB` Function Gemma (270M) went from 46% to over 90% function-calling accuracy on 8 of 10 app intents by fine-tuning on synthetic data rather than describing functions in a system prompt.
- `INS-260627-C112` Don't fine-tune on your raw documents — generate a large synthetic dataset that describes them and train on that, or the model just memorizes and breaks.
- `INS-260625-8613` A conjecturer rewarded only for stumping the solver learns to emit messy, overly-complex problems (like a three-page calculus problem you'll slip on) that don't transfer; grounding tasks in real problems plus a relevance 'guide' reward fixes it.
- `INS-260323-9BAB` Whether LLM-generated synthetic data adds genuine new signal beyond its training data — or is merely empty calories by information theory — will determine trillion-dollar outcomes in AI development.
- `INS-260505-4351` If a new clinical policy takes an action your offline data never saw, off-policy evaluation can't bound its value — synthetic data fills the gap.
- `INS-260330-206C` Back-translation creates synthetic training data for rare language pairs, but too much synthetic data degrades quality
- `INS-260603-C102` Ichi (Meta): collecting real-world data is hard and limited, so the path is to generate visual worlds (3D-mesh environments via tools like a Spoke-style generator, Gaussian-splat captures from a phone walkthrough, or video-based world models) and use them as sandboxes to train robots at unlimited scale.
