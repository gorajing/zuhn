# Tag: dependency-graph

- `INS-260625-EF29` Polygraph analyzes every repo a user can reach (owned + open source), extracts what each produces and consumes, and feeds that graph to a harness so an agent reads/writes 'one big codebase.'
- `INS-260627-D190` Batch files into PR-sized chunks via the dependency graph, run a verifier to flag problems, spin up fixer agents that emit reviewable PRs, and process leaf-first until the whole graph turns green.
