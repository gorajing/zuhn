# Tag: maintainability

- `INS-260627-0C43` On brownfield codebases, agents do well exactly where humans do — high cohesion and clear module separation let the agent avoid holding 18 things in context — and tech debt that slows a human dev slows the agent identically.
- `INS-260626-DD33` Skills should carry high-level orientation plus a link to markdown docs the agent web-fetches, so capabilities update centrally instead of forcing every user to redistribute the skill.
- `INS-260605-9276` Provide agents skills as plain version-controlled files containing examples of how to do a task, and let the project maintainers own those skills, so the agent goes from zero-shot to robust few-shot.
- `INS-260627-6ACC` Stop building hundred-node classifier DAGs; use a master loop with tool calls, and push the steps that must be deterministic into rigorous tools you can eval and version.
- `INS-260514-999B` The GTM engineer's real job is integrating fragmented tools with engineering discipline — applying DRY, abstraction, and modular design to workflows so they don't collapse as the org grows.
- `INS-260514-6A62` For evergreen GTM workflows, pick n8n or AirOps over Make.com — modular sub-workflows let you apply single-responsibility-principle so debugging and updates touch one node instead of ten.
