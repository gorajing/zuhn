# Tag: observability

- `INS-260405-6C88` Agent memory splits into short-term (conversation state), long-term (extracted durable knowledge), and reasoning (tool/decision traces for explainability).
- `INS-260327-9D50` Chase argues that traces are to agents what source code is to software: the actual source of truth for understanding what the system does, because you literally cannot predict agent behavior by reading the code.
- `INS-260410-B3C4` When you serve one model across AWS Trainium, NVIDIA GPUs, and Google TPUs, each bug surfaces differently on each platform and masquerades as random variation rather than a coherent issue.
- `INS-260423-2B80` Annie: metrics shows what is going on — GPU utilization, current token usage, like a dashboard in your car; tracing shows why a 2.5-second request broke down as it did, the detail behind the scenes.
- `INS-260602-E2BD` Mansi More: 'Every time only AI went wrong or LLM, selection of LLM was not good — it's not the answer.' Production AI fails through a structured set of operational modes, and the reflex to swap models instead of fixing the pipeline is a misdiagnosis.
- `INS-260602-1DF1` Mansi More: in the data-sources → ingestion → sub-agents → models stack, 'when one layer, one error comes, the whole agent is confined to it' — so it is critical to know exactly which layer produced an error, which only per-layer observability provides.
- `INS-260329-05BB` HFT systems stamp every event with nanosecond-precision clocks for exact sequencing and component-level latency measurement.
- `INS-260329-33AA` HFT firms treat real-time latency monitoring as a profit driver, not just operational overhead, because microseconds of undetected degradation directly cost money.
