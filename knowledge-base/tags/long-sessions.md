# Tag: long-sessions

- `INS-260605-A3F4` Because users stay in one long chat, load 10 turns and test the 11th so context-management failures surface in evals instead of in user reports.
- `INS-260530-ADED` PayPal's explicit feedback to the Google ADK team is that long-session support and shared cross-agent memory are missing — they've been bolting these on themselves, and other production teams hit the same gap.
- `INS-260605-DF08` When the important rules live in documents the agent always re-fetches, a multi-hour session can survive 20-50 context compactions because what matters is reconstructed on demand.
