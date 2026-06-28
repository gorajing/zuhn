# Tag: load-balancing

- `INS-260627-A954` Cursor's three ML scaling challenges — train/inference parity, bursty heterogeneous rollouts, and tool-format consistency — all turned out to have infrastructure solutions, and they note the same correlation held for framework 'magic moments' back at Vercel.
- `INS-260605-4AF8` Splitting LLM inference onto its own scalable tier saves resources because a node of chatty users and a node of silent users consume wildly different LLM compute.
- `INS-260410-ED34` When LLM routing is sticky, a 0.8% misroute rate becomes a 100% bad experience for the unlucky users rather than a rare glitch for everyone.
- `INS-260329-F887` Load balancers distribute traffic but become single points of failure — always deploy in redundant pairs with automatic failover.
- `INS-260329-2612` Consistent hashing maps both nodes and data onto a ring, so adding or removing a node only redistributes a fraction of data rather than reshuffling everything.
