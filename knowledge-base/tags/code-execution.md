# Tag: code-execution

- `INS-260605-8BEA` Instruct the agent: for any repeatable task, write a script, append its description to memories.md, and reuse that script next time instead of redoing the work.
- `INS-260627-FAEC` The Los Alamos fusion-capsule agent is powerful because it executes 50–60 years of validated physics code on HPC, not because the LLM is smart — the shift is from 'what a model knows' to 'what we can let a model know.'
- `INS-260410-D250` Natural-language tool chains force every intermediate result through the context window; code orchestration keeps only the final answer.
- `INS-260410-8ECF` Expose MCP servers as a typed file tree of tool modules so agents load only the definitions they actually need.
- `INS-260626-2F2E` Record the exact code-execution tool version whenever an agent composes tools through code.
- `INS-260605-0C88` An agent given one 'execute' tool that runs arbitrary TypeScript (including shell calls and AST-based file edits) outperforms one with many narrow tools, because constraining what the model can do makes it do better.
- `INS-260627-D2EF` If a model can both write code and run that same code in a secure sandbox, it can accomplish nearly anything — which sidesteps the question of how opinionated or heavy the harness should be.
- `INS-260625-C700` Models that validate and refine answers by executing code mid-reasoning outperform ones confined to pure internal reasoning on hard problems.
- `INS-260627-1FAE` Treat code as the universal interface to the digital world so one general agent with bash and a filesystem handles tasks you'd otherwise build separate agents for.
- `INS-260626-4639` Most popular agent harnesses dangerously combine the harness environment with the environment that runs the code the agent generates, and the correct architecture separates the two.
- `INS-260626-FBB1` A flyweight model with code execution drew correct Lego-brick bounding boxes 'right out of the gate' for a fraction of a penny — faster and cheaper than the larger model that reached the same answer.
