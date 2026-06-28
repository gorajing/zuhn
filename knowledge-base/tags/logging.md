# Tag: logging

- `INS-260320-0D43` A PostToolUse hook tracks which files were edited, which repo they belong to, and timestamps — feeding downstream hooks like the build checker.
- `INS-260628-6714` A log flush to disk froze the robot for 30 ms on a Raspberry Pi SD card, and log-on-drop can cascade into a total bus blackout — isolate logging onto its own CPU.
