# Topic: pipelines

> 5 insights

- `INS-260514-999B` [high] The GTM engineer's real job is integrating fragmented tools with engineering discipline — applying DRY, abstraction, and modular design to workflows so they don't collapse as the org grows.
- `INS-260514-A02E` [high] Carve repeated GTM logic into 'function tables' in Clay (f.cleanFullName, f.validateEmail) — callers write a row to the function table, wait for the LLM, then look up the cleaned output, so one prompt update propagates to all callers.
- `INS-260404-3ABF` [high] Sequential pipelines need periodic energy re-injection to sustain throughput, not just extraction at each stage.
- `INS-260514-C51F` [high] One-off outbound campaigns: skip modularization, ship fast in Clay. Evergreen automations running daily for years: architect properly with sub-workflows and function tables.
- `INS-260514-2995` [high] Schedule local-AI indexing for 1-5am — 70GB+ RAM stacks can't share daytime resources without overheating, but unattended overnight processing keeps the wiki fresh and the laptop usable.
