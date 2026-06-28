# Tag: tool-calls

- `INS-260627-44FD` Durable execution works by splitting code into a deterministic workflow and non-deterministic activities, recording each activity's inputs and outputs so a re-run can replay instantly up to the failure point.
- `INS-260627-D03E` RFT tightens the distribution of tool-call counts, killing the slow, erratic long-tail runs that dominate production pain.
- `INS-260605-3553` Building control at the MCP layer captures a shrinking slice of agent behavior; building it at the LLM/network layer captures everything, including the bash commands that actually dominate real workloads.
- `INS-260605-98BD` The first thing organizations want from an agent gateway is not enforcement but an answer to 'what are people even doing?' — a guaranteed, complete record of every tool call, bash command, and request.
- `INS-260605-A2AD` When agents call CRUD/context tools, evaluate the whole trace and cram external system state into the trace itself rather than rebuilding test infrastructure.
- `INS-260627-6ACC` Stop building hundred-node classifier DAGs; use a master loop with tool calls, and push the steps that must be deterministic into rigorous tools you can eval and version.
