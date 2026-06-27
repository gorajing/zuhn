# Tag: token-efficiency

- `INS-260626-4BC2` Structure knowledge so the agent reads an index, then an executive summary, then derivatives, and only falls through to the full raw source when nothing above answers the query.
- `INS-260625-FE3E` Don't run the LLM over 10,000 pages — have the agent inspect the structure once and generate a deterministic parser to run instead.
- `INS-260625-2D05` Exposing 2,600 API endpoints to an agent as generated-and-executed code costs ~1,000 tokens; exposing them as individual MCP tool definitions would be vastly more.
- `INS-260626-181F` Give the model a tool-loading tool and let it pull tools on demand — progressive discovery cut tool context usage dramatically in Claude Code.
- `INS-260626-35A9` Hand the agent a token-cheap fake app that is auth-shaped and login-shaped so it learns where the right events belong, without dragging a whole production codebase into context.
- `INS-260605-2AAF` Track fuel efficiency (tokens per successful outcome) per user journey — but never optimize it at the expense of whether the agent actually finishes.
- `INS-260605-DC50` Point the agent at the right sentence instead of forcing it to read the entire book.
- `INS-260605-6591` Show the agent only one-line skill descriptions and let it request full instructions on demand, rather than loading every tool's details up front.
- `INS-260605-D710` WebMCP turns every HTML page into a mini MCP tool server, so agents call existing JS functions and links directly rather than burning compute on screenshots or XML DOM traversal.
- `INS-260320-B210` Keep SKILL.md files under 500 lines and use progressive disclosure via resource files for 40-60% token efficiency improvement.
- `INS-260605-6F98` Move from undirected 'Ralph looping' that burns 8-9 hours of tokens hoping something happens to opinionated loops with reward mechanisms and a human watching.
- `INS-260625-7935` Feed the model the leanest representation that still answers the question — text not HTML, structured JSON not markdown.
- `INS-260626-411D` Everyone optimizes input tokens, but experiments show output tokens drag down performance — so it pays to spend extra time supplying tight, correct context that shortens the agent's output loop.
- `INS-260410-AA93` Karpathy matches GPT-2 124M HellaSwag on 10B tokens of FineWeb-Edu and nearly matches GPT-3 124M on 40B — versus 100B and 300B for the originals respectively.
- `INS-260327-BE4E` Token efficiency gains like the Muon optimizer effectively multiply finite high-quality data, pushing intelligence ceilings higher rather than merely reducing infrastructure cost.
- `INS-260626-A5CB` Cloudflare turned 2,600 API endpoints (1.2M tokens if exposed as tools) into two tools — search and execute, both taking code as input — for a ~99.9% token reduction to ~1,000 tokens.
