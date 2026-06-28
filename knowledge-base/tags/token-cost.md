# Tag: token-cost

- `INS-260625-86CF` Replace the brittle parse-DOM, read-a11y-tree, screenshot, measure-and-click loop with declared tools the agent can call directly.
- `INS-260628-5BC9` Cisco's network knowledge graph is layered (raw config → data plane → control plane) so an agent runs a config-drift test by hitting only the raw-config layer, while a reachability test pulls multiple layers.
- `INS-260625-A996` One change propagating through UI → module1 → module2 → platform → production became seven separate re-explanations because each agent session was a blank slate.
- `INS-260628-DD9D` Cisco's team replaced RAG-based knowledge-graph querying with a fine-tuned query agent and saw a drastic drop in tokens burned and time-to-result.
- `INS-260603-915A` Navish (Salesforce): 'nobody is trying to monitor how much token you are using' — they measure how performant you are, how fast you ship, because the company makes money from what it sells; cutting a month-long build to a week is the success metric.
- `INS-260625-E1CB` Don't run 10,000 pages through an LLM to extract fields—have the LLM write a parser once, then execute the script, cutting roughly 99% of tokens while gaining determinism.
- `INS-260605-9F7A` Provider-supplied tools like web search are a line of code to add but blow up token cost and surrender control over a core part of your UX.
