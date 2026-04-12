# Topic: infrastructure

> 20 insights

- `INS-260405-3B54` [high] Multi-turn agent workloads flip the inference bottleneck from decode to prefill, requiring new optimization strategies for KV cache reuse and context processing.
- `INS-260405-567D` [high] NVIDIA's Vera Rubin platform delivers 10x inference efficiency gains, signaling the industry's pivot from training to inference as the dominant workload.
- `INS-260410-1159` [high] A gigawatt of Rubin-class compute takes ~3.5 EUV tools of annual output, and ASML can only make ~70 now, scaling to ~100 by 2030 — mathematically capping total AI capacity at ~200 GW/year.
- `INS-260410-0DA5` [high] Anthropic's existing benchmarks didn't flag the degradation users were reporting because benchmarks test isolated prompts and Claude often recovers from single mistakes even when the underlying quality has dropped.
- `INS-260410-B1A9` [high] Microsoft paused leases not because demand was weak, but to avoid 4-5 years of depreciation stuck on one chip generation in one location for one workload type.
- `INS-260410-B3C4` [high] When you serve one model across AWS Trainium, NVIDIA GPUs, and Google TPUs, each bug surfaces differently on each platform and masquerades as random variation rather than a coherent issue.
- `INS-260405-A4DB` [high] AI workloads depend on HBM as the data conduit to GPUs, but HBM is harder to manufacture, lower yield, and supply is concentrated in three players.
- `INS-260410-C602` [high] AI data center buildouts are bottlenecked on power availability and speed-to-deploy, not on power cost, because tokens generate 1000x more value than the electricity they consume.
- `INS-260405-F1A1` [high] The US data center pipeline hit 241 GW but only a third is under active development, with utilities unable to supply power fast enough despite $650B in planned 2026 CapEx.
- `INS-260410-A1CA` [high] Anthropic's privacy controls prevented engineers from examining unreported problematic interactions, which lengthened the time needed to identify and reproduce the three infrastructure bugs.
- `INS-260410-13C8` [high] Solar has a 43% Wright's Law coefficient — every doubling of cumulative production drops cost 43% — and since demand elasticity exceeds the learning rate, the cycle doesn't saturate.
- `INS-260410-ED34` [high] When LLM routing is sticky, a 0.8% misroute rate becomes a 100% bad experience for the unlucky users rather than a rare glitch for everyone.
- `INS-260405-131B` [high] C powers the interpreters, OS kernels, and databases that higher-level developers use daily, making it the most influential language most programmers never consciously think about.
- `INS-260410-8092` [high] Anthropic's December 2024 workaround for a dropped-token bug was inadvertently masking a much worse approximate top-k bug that only became visible when they removed the workaround in August.
- `INS-260409-AEF3` [medium] Hassabis claims grid optimization alone could unlock 30-40% efficiency on national grids, and AI will more than pay for its own energy footprint medium-to-long term.
- `INS-260405-95A6` [medium] U.S. productivity growth near its post-WWII peak is attributable to data center investment, not white-collar AI tool use.
- `INS-260405-844D` [medium] A 43-day shutdown forcing unpaid essential workers illustrates the brittleness of government services reliant on continuous human labor.
- `INS-260405-D638` [medium] Starcloud's orbital GPU clusters use solar power and vacuum cooling to eliminate the cost structure of terrestrial AI infrastructure.
- `INS-260412-3252` [medium] The visible light spectrum has 10,000x the frequency range of radio waves, enabling vastly higher data throughput for Li-Fi.
- `INS-260410-0ECA` [low] Musk predicts that in under 36 months, space will be the cheapest place to run AI because solar panels get 5x more power without atmosphere or day-night cycles, and no batteries are needed.
