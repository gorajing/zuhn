# Topic: llm-training

> 33 insights

- `INS-260326-8201` [very_high] At 3.5 bits per channel (4.5x compression), TurboQuant matches full-precision Llama 3.1 8B on LongBench with zero quality loss; at 2.5 bits (6.4x), quality degradation is marginal.
- `INS-260320-7682` [high] Run systematic ablation experiments on architecture, data mixtures, and hyperparameters at small scale before committing to a full training run -- this consumes ~37% of total compute but prevents costly mistakes.
- `INS-260321-53E2` [high] All AI computation is matrix multiplication (word relationships scored as points in matrices) — Hinton discovered GPUs excelled at this by accident in 2012, winning ImageNet overwhelmingly.
- `INS-260328-4717` [high] Higher-quality world models require exponentially less search to achieve the same or better outcomes.
- `INS-260320-5818` [high] Main pretraining consumes 63% of total compute; plan for 37% additional budget for ablation studies, debugging, and restarts due to infrastructure failures.
- `INS-260329-A2D0` [high] Models trained on imbalanced data learn to ignore the minority class - explicit rebalancing through oversampling, undersampling, or weighted loss functions is required to fix this.
- `INS-260328-B19D` [high] Zuckerberg revealed that coding was deprioritized in Llama 2 but became central to Llama 3 after discovering code training makes models more rigorous across all question types.
- `INS-260327-1B9A` [high] Kimi K2.5's early fusion of vision and text from pre-training day one produced emergent vision-to-code capabilities and mutual enhancement between modalities.
- `INS-260329-D8BC` [high] Distance-based algorithms like KNN and SVM produce garbage results without feature scaling because large-range features dominate the distance calculation.
- `INS-260323-4E12` [high] The jump from GPT-3.5 to GPT-4 came from hundreds of small improvements multiplied together across data, training, architecture, and optimization.
- `INS-260325-8F49` [high] Hugging Face hosts roughly as many private models as their 1 million public models, created by 350,000 organizations doing custom fine-tuning, evaluation, and reinforcement learning.
- `INS-260320-C65B` [high] The Smol Training Playbook is a 200+ page open guide covering the full LLM pipeline from strategic planning through post-training, based on training SmolLM3 (3B params, 11T tokens).
- `INS-260327-1631` [high] KimiLinear's fine-grained diagonal decay matrix enables different channels to independently retain long-range context or rapidly refresh, outperforming both full attention and prior linear attention variants.
- `INS-260321-1F9F` [high] Scary stories about LLMs trying to deceive or resist shutdown are reflections of training data patterns, not emergent architectural properties — the objective function is purely next-token prediction.
- `INS-260321-8567` [high] LLMs learn and navigate the manifold created by human-written training data but cannot create new manifolds — the representation breakthroughs that define scientific revolutions.
- `INS-260321-B014` [high] Bayesian wind tunnel experiments prove transformers perform exact Bayesian posterior updating to 10^-3 bits accuracy, but this mechanism is purely correlational — not causal.
- `INS-260330-3ADD` [high] Networks achieve 96%+ accuracy with hidden layers that look nearly random rather than detecting edges and patterns as designed.
- `INS-260330-AE16` [high] Neural network layers learn progressively abstract representations — pixels to edges to shapes to concepts — which is why depth matters more than width for complex tasks.
- `INS-260323-23B9` [high] Zuckerberg argues open source AI models become safer through increased scrutiny, faster bug discovery, and rapid version rollouts -- the same dynamic that made open source software more secure than proprietary alternatives.
- `INS-260323-6C6F` [high] Scaling laws hold across 13 orders of magnitude and won't stop, but inference-time scaling currently offers better ROI than making models bigger.
- `INS-260329-3D3E` [high] On imbalanced datasets, accuracy masks total failure on the minority class - precision and recall reveal whether the model actually learned the pattern you care about.
- `INS-260322-3616` [high] Supervised fine-tuning only changed tone and instruction-following; reinforcement fine-tuning lets companies train models to domain-expert level on their proprietary data, creating the first real moat from model customization.
- `INS-260321-8C35` [high] AGI requires weight plasticity (continual learning without catastrophic forgetting) and causal modeling (simulation over correlation) — neither solvable by making models bigger.
- `INS-260329-7F02` [high] On the course's heart disease dataset, KNN achieved ~82% accuracy comparable to neural networks, proving that simpler models deserve first consideration.
- `INS-260329-5F96` [high] Three-way data splitting (train/validate/test) prevents the subtle overfitting that occurs when you repeatedly evaluate and tune against the same held-out data.
- `INS-260320-922A` [high] Only pretrain your own LLM for three reasons: advancing research with novel questions, meeting specific production requirements, or filling gaps in the open-source ecosystem.
- `INS-260327-BE4E` [high] Token efficiency gains like the Muon optimizer effectively multiply finite high-quality data, pushing intelligence ceilings higher rather than merely reducing infrastructure cost.
- `INS-260323-3F39` [high] Modern frontier models are essentially GPT-2 with minor tweaks; the real advances are in training methodology, data curation, and post-training.
- `INS-260325-5B28` [medium] Kimi's attention residuals let transformer layers selectively choose what to optimize from prior layers.
- `INS-260323-2651` [medium] Hotz argues that maximizing compression (cross-entropy) can never reach AGI because it produces 'mid' outputs — competent but never brilliant — and lacks the embodied feedback loops of human learning.
- `INS-260403-F4C7` [medium] Fine-tuning Mixtral-class models costs ~$1,200 on rented A100s, putting custom AI within individual budgets.
- `INS-260402-5034` [medium] Graham's 'degeneration' technique falls back from specific tokens (Subject*FREE!!!) through progressively general versions (FREE, free) when exact matches lack data.
- `INS-260323-9BAB` [medium] Whether LLM-generated synthetic data adds genuine new signal beyond its training data — or is merely empty calories by information theory — will determine trillion-dollar outcomes in AI development.
