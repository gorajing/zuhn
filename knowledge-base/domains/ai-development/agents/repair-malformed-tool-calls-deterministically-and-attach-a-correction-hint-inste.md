---
id: INS-260626-9AEB
domain: ai-development
topic: agents
title: >-
  Repair malformed tool calls deterministically and attach a correction hint
  instead of returning the error
actionability: immediate
confidence: high
shelf_life: evergreen
status: active
tags:
  - tool-calling
  - agent-harness
  - open-models
  - error-recovery
  - deepseek
sources:
  - type: youtube
    title: >-
      ⚡️Making DeepSeek v4 outperform Opus 4.7 with Taste — @AhmadAwais ,
      CommandCode.ai
    author: Latent Space
    url: 'https://www.youtube.com/watch?v=-rIAVuaRjOg'
date_extracted: '2026-06-26'
last_accessed: null
access_count: 0
indexed: true
embedded: true
embedding_model: nomic-embed-text
resolutions:
  one_line: >-
    Don't bounce a Zod/schema error back to an open model that ignores it for
    50+ turns; deterministically repair the malformed call and append a hint,
    and the model self-corrects within a couple of tool calls.
  standard: >-
    Awais found that open models (DeepSeek V4 Pro, Kimi, MiniMax) frequently
    emit malformed tool-call arguments — an empty object or null where an
    optional field belongs, a JSON string where an array is expected, a markdown
    link wrapped around a file path — and then, when handed back a strict schema
    error, repeat the exact same wrong call up to ~56 times on average per
    billion tokens. His hypothesis: these models are trained to trust their own
    outputs ('whatever I'm telling you is correct'), so they don't treat error
    feedback as a signal to change.


    The fix is a deterministic 'repair layer', structured like database
    migrations (one repair per file, ~16,000 repair variations across hundreds
    of billions of tokens). When a known-malformed pattern arrives, the harness
    coerces it into the valid shape, executes the tool, returns the real result,
    AND attaches a repair hint explaining what the correct schema was. The
    analogy he uses: teaching someone to drive — first you stop them from
    crashing, then you explain what they should have done. The behavioral effect
    is dramatic: the very next tool call is typically correct, and the model
    'suddenly becomes smart', exploring further and running far longer sessions
    (one user ran 70B tokens in 12-hour sessions).


    The practical lesson generalizes beyond CommandCode: this logic is
    harness-level and portable to any coding agent. The key reframe is that
    error-as-feedback assumes the model will act on the error; for self-trusting
    open models, repair-plus-hint is strictly better than error-plus-retry.
    Closed models (Claude) are lenient enough to recover from a bad error on
    their own, which is exactly why the problem is invisible until you point an
    open model at the same harness.
stance: >-
  Silently repairing an open model's malformed tool call and sending back a 'you
  should have done X, here's the result anyway' hint makes it self-correct,
  where returning a raw schema error does not.
related:
  - INS-260605-0312
  - INS-260625-5EEE
  - INS-260627-277A
  - INS-260626-485E
  - INS-260625-3768
  - INS-260605-77EB
  - INS-260626-AC8E
  - INS-260627-9EBD
  - INS-260627-8DF1
  - INS-260627-F2AE
---
Awais found that open models (DeepSeek V4 Pro, Kimi, MiniMax) frequently emit malformed tool-call arguments — an empty object or null where an optional field belongs, a JSON string where an array is expected, a markdown link wrapped around a file path — and then, when handed back a strict schema error, repeat the exact same wrong call up to ~56 times on average per billion tokens. His hypothesis: these models are trained to trust their own outputs ('whatever I'm telling you is correct'), so they don't treat error feedback as a signal to change.

The fix is a deterministic 'repair layer', structured like database migrations (one repair per file, ~16,000 repair variations across hundreds of billions of tokens). When a known-malformed pattern arrives, the harness coerces it into the valid shape, executes the tool, returns the real result, AND attaches a repair hint explaining what the correct schema was. The analogy he uses: teaching someone to drive — first you stop them from crashing, then you explain what they should have done. The behavioral effect is dramatic: the very next tool call is typically correct, and the model 'suddenly becomes smart', exploring further and running far longer sessions (one user ran 70B tokens in 12-hour sessions).

The practical lesson generalizes beyond CommandCode: this logic is harness-level and portable to any coding agent. The key reframe is that error-as-feedback assumes the model will act on the error; for self-trusting open models, repair-plus-hint is strictly better than error-plus-retry. Closed models (Claude) are lenient enough to recover from a bad error on their own, which is exactly why the problem is invisible until you point an open model at the same harness.
