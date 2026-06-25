# Knowledge Base Master Index

> Last rebuilt: 2026-06-25 | Total insights: 12159 | Sources: 2705

**NOTE:** Access counts and last_accessed are updated automatically when insights are retrieved.

## Domains

| Domain | Topics | Insights | Principles | Last Updated |
| ------ | ------ | -------- | ---------- | ------------ |
| ai-development | 40 | 2751 | 137 | 2026-06-25 |
| automation | 7 | 74 | 2 | 2026-06-24 |
| health | 6 | 494 | 44 | 2026-05-14 |
| investing | 14 | 1421 | 110 | 2026-06-05 |
| music-production | 6 | 49 | 3 | 2026-05-14 |
| pets | 1 | 2 | 0 | 2026-03-20 |
| psychology | 24 | 2531 | 185 | 2026-05-14 |
| startups | 55 | 4795 | 356 | 2026-06-19 |
| video-production | 4 | 42 | 5 | 2026-06-05 |

## Mental Models

- **The Composition Over Monolith Principle**: "Complex systems that work are invariably built from simple units with clear interfaces. Monolithic systems that try to do everything inevitably become unreliable, undebuggable, and irreplaceable."
- **The Externalization Principle**: "Anything that lives only in volatile memory — whether a context window, a person's head, or an undocumented process — will be lost. Survival requires structured externalization to a persistent, version-controlled medium."
- **The Progressive Refinement Principle**: "The optimal architecture for processing information at any scale is a pipeline of increasingly expensive stages, where each stage filters and refines input for the next."
- **The Structural Constraint Principle**: "Systems — AI, human, or hybrid — follow guidelines only when compliance is structurally enforced, not when it is documented, requested, or incentivized."

## Top Tags

fundraising(247) mental-models(218) scaling(210) venture-capital(209) decision-making(185) strategy(155) infrastructure(144) compounding(133) competitive-advantage(129) innovation(129) network-effects(127) trust(125) leadership(121) product-market-fit(120) hiring(120) organizational-design(117) leverage(115) agents(114) disruption(112) systems-thinking(112)

## Flags (for Claude)

_No flags._

## Recently Added (last 7 days)

- `INS-260625-9096` Post-training results depend on the harness the agent sees during training, so harness choices are load-bearing system parameters. _(2026-06-25)_
- `INS-260625-CBC7` A higher in-distribution agent score can hide learned dependence on obsolete tool syntax. _(2026-06-25)_
- `INS-260625-FACB` Changing tool names, parameters, or grouping can be as consequential as changing task inputs. _(2026-06-25)_
- `INS-260625-84D0` If the deployment harness matters, put it in the training loop before tuning rather than bolting it on afterward. _(2026-06-25)_
- `INS-260625-A53F` A single leaderboard score cannot separate model capability, harness knowledge, and robustness to deployment drift. _(2026-06-25)_
- `INS-260625-DAE9` Do not optimize the model, scaffold, and eval suite as independent tracks. _(2026-06-25)_
- `INS-260625-93FC` A richer harness is not free performance; it embeds environment knowledge that must be paid for and measured. _(2026-06-25)_
- `INS-260624-B6EA` Independent agent tool calls should run concurrently even if the model emits them sequentially. _(2026-06-24)_
- `INS-260624-6753` High-stakes agent findings should be checked by heterogeneous reviewers. _(2026-06-24)_
- `INS-260624-223D` The model is one component; the enterprise action layer is a DAG runtime for task decomposition, planning, parallel execution, and recovery. _(2026-06-24)_
- `INS-260624-F048` A million-token window is not a substitute for a context manager. _(2026-06-24)_
- `INS-260624-E89C` Subagents are safest when they broaden search and context, not when every worker can mutate the codebase. _(2026-06-24)_
- `INS-260624-595D` Security automation benefits from specialist agents that pursue different attack surfaces in parallel. _(2026-06-24)_
- `INS-260624-A338` Security agents need executable proof paths, not just plausible reports. _(2026-06-24)_
- `INS-260624-EA6B` A useful CRS owns the whole vulnerability lifecycle from project understanding through proof, patch, and validation. _(2026-06-24)_
- `INS-260624-E878` Security agents need curated vulnerability knowledge and code-analysis tools in context. _(2026-06-24)_
- `INS-260624-A740` LLMs can help fuzzing at low, medium, and high usage levels, and the right level depends on the bottleneck. _(2026-06-24)_
- `INS-260624-D8C3` Speculation helps latency, but side-effectful actions need commit barriers. _(2026-06-24)_
- `INS-260624-9A4B` Speculation only works safely when the agent treats in-flight work as cancellable until user intent and side-effect boundaries are clear. _(2026-06-24)_
- `INS-260624-C9A8` AI-speed offense forces AI-speed defense. _(2026-06-24)_
- `INS-260624-4205` Async RL systems improve utilization but make model-version mismatch part of the algorithm. _(2026-06-24)_
- `INS-260624-02AB` Deterministic kernels are a stability tool, not merely a reproducibility preference. _(2026-06-24)_
- `INS-260624-6B2C` Numerical mismatch between serving and training kernels can destabilize large RL loops. _(2026-06-24)_
- `INS-260624-5865` A production agent is not ready until model behavior, runtime reliability, safety boundary, and business value all hold at once. _(2026-06-24)_
- `INS-260624-37C3` Long agent rollouts make inference speed a core training-system constraint. _(2026-06-24)_
- `INS-260624-93AC` Train/inference mismatch is not one bug class; it decomposes into temporal, precision, and kernel mismatch. _(2026-06-24)_
- `INS-260624-A121` Cybersecurity agents improve from both stronger models and better scaffolding. _(2026-06-24)_
- `INS-260624-5ACA` Cache reusable sub-workflows as code instead of repeatedly asking the model to click through them. _(2026-06-24)_
- `INS-260624-911B` Security self-improvement loops need realistic evals and reliable novelty verification. _(2026-06-24)_
- `INS-260619-B1A8` An agent loop becomes a harness when it exposes the controls humans need to supervise long-running work. _(2026-06-19)_
- `INS-260619-F7E3` Agent safety is mainly a capability-boundary problem: constrain the sandbox, filesystem, runtime, and API keys before trusting model behavior. _(2026-06-19)_
- `INS-260619-6E08` Once a harness is useful, pressure builds to make it persistent, event-driven, reachable across channels, and scarce enough to compete for user attention. _(2026-06-19)_
- `INS-260619-8D68` PDFs and slide decks are not just text containers; document AI must recover structure before retrieval or reasoning is trustworthy. _(2026-06-19)_
- `INS-260619-0770` The durable layer for video AI is a corpus memory with grounded primitives and citations back to source footage. _(2026-06-19)_
- `INS-260619-D4F6` For voice agents, compare the low-latency live transcript to a richer offline transcript, then use the mismatch as evidence in failure triage. _(2026-06-19)_
- `INS-260619-BF47` Human-sounding voice agents are full lifecycle systems: model selection is only the first layer. _(2026-06-19)_
- `INS-260619-4962` Do not turn off the coding autopilot, but make engineers keep enough manual skill and system understanding to recover when it hands control back. _(2026-06-19)_
- `INS-260619-90F6` The production agent stack is becoming a set of durable primitives around the model: routing, persistence, execution, tools, and workflow state. _(2026-06-19)_
- `INS-260619-C9B1` AI app infrastructure cannot assume a fixed deployment shape; the application itself increasingly decides what compute it needs per request. _(2026-06-19)_
- `INS-260619-AD94` At agent scale, model choice is a unit-economics decision: reserve frontier calls for hard reasoning and route routine steps to cheaper models and deterministic modules. _(2026-06-19)_
- `INS-260619-4ADA` The durable artifact of AI-assisted engineering is not just the shipped feature; it is the captured learning that makes the next feature easier. _(2026-06-19)_
- `INS-260619-CBFA` Do not make the agent responsible for remembering every operational step; put stable steps in the workflow and reserve model calls for judgment. _(2026-06-19)_
- `INS-260619-16EF` The promise of managed workflows is collapsing queue-plus-worker architecture into observable, retryable task runs with preserved state. _(2026-06-19)_
- `INS-260619-F1E3` Give agents a first-class path to report bugs and feature gaps, then rank those reports across users to drive product improvement. _(2026-06-19)_
- `INS-260619-675F` Self-improving software may be real while still being hard to productize as its own startup. _(2026-06-19)_
- `INS-260619-DABA` AI-native services can win narrow workflows, but incumbents survive where the customer is buying a credible accountable party. _(2026-06-19)_
- `INS-260619-1512` The build loop is incomplete without an observe-verify-optimize loop that watches what happens after AI-generated changes reach users. _(2026-06-19)_
- `INS-260619-8660` The frontier is moving fast enough that credible AI investing requires personal tool use, not just portfolio updates. _(2026-06-19)_
- `INS-260619-3AED` In AI, thematic conviction has to be re-underwritten repeatedly because product-market windows are narrower and move faster. _(2026-06-19)_
