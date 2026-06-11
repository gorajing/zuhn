# Commands Run

This file records the commands used to produce and verify the README demo.

## Claim Evidence

- `npm run health`
- `npm run search "context engineering"`
- `npm run brief -- --mode concise "should I raise VC or bootstrap for an AI startup?"`
- `npm run gate -- --audit --since 2026-06-05 --examples 5`
- `npm run verify-contracts`
- `sed -n '1,30p' knowledge-base/meta/stats.md`
- `rg -c "registerTool" scripts/mcp-server.ts`

## Render

- `node --check assets/demo-video/build-scenes.mjs`
- `node assets/demo-video/build-scenes.mjs`
- `NODE_PATH=/tmp/cinematic-video-tools/node_modules node /Users/jinchoi/.codex/skills/cinematic-explainer-videos/scripts/record_card.mjs --input assets/demo-video/scenes/operator-session.html --out assets/demo-video/clips/01-operator-session.mp4 --duration 42000 --width 1280 --height 720 --fps 30`
- `node /Users/jinchoi/.codex/skills/cinematic-explainer-videos/scripts/assemble_timeline.mjs assets/demo-video/timeline.json`
- `cp assets/demo-video/zuhn-explainer.mp4 assets/demo.mp4`
- `ffmpeg -y -i assets/demo.mp4 -vf "fps=10,scale=900:-1:flags=lanczos,palettegen=stats_mode=diff" /tmp/zuhn-demo-palette.png`
- `ffmpeg -y -i assets/demo.mp4 -i /tmp/zuhn-demo-palette.png -lavfi "fps=10,scale=900:-1:flags=lanczos[x];[x][1:v]paletteuse=dither=bayer:bayer_scale=2:diff_mode=rectangle" assets/demo.gif`

## Visual Review

- `bash /Users/jinchoi/.codex/skills/cinematic-explainer-videos/scripts/extract_review_frames.sh assets/demo-video/zuhn-explainer.mp4 assets/demo-video/review 2.2:corpus 7.4:search 14.4:brief 24.8:gate 31.2:handoff 33.6:runtime 39.2:close`
- `bash /Users/jinchoi/.codex/skills/cinematic-explainer-videos/scripts/extract_midsection_sheet.sh assets/demo-video/zuhn-explainer.mp4 assets/demo-video/review/midsection 16 18 1`
- `ffmpeg -y -ss 33.6 -i assets/demo.gif -frames:v 1 assets/demo-video/review/gif-runtime-frame.png`
- `ffmpeg -y -ss 24.8 -i assets/demo.gif -frames:v 1 assets/demo-video/review/gif-gate-frame.png`
- `bash /Users/jinchoi/.codex/skills/cinematic-explainer-videos/scripts/extract_midsection_sheet.sh assets/demo.gif assets/demo-video/review/gif-midsection 16 18 1`

Visual issues found and fixed during review:

- Bottom caption overlapped the workbench in the first render.
- Right-side panels crossfaded too long and created a ghosted mid-video transition.
- Runtime proof cards clipped inside the right panel at 720p.

## README Render Check

- `curl -sS -H 'Accept: application/vnd.github+json' https://api.github.com/markdown -d '{"mode":"gfm","context":"gorajing/zuhn","text":"![Zuhn demo](assets/demo.gif)"}'`

GitHub Markdown API rendered `![Zuhn demo](assets/demo.gif)` as an `<img>` with `data-animated-image`.

README stale-media scan found no HD-demo CTA, local mp4 CTA, video embed, or poster-to-mp4 link.

## Final Media Metadata

MP4 (`assets/demo.mp4`):

```text
width=1280
height=720
r_frame_rate=30/1
avg_frame_rate=30/1
duration=42.000000
size=3678302
```

GIF (`assets/demo.gif`):

```text
width=900
height=506
r_frame_rate=10/1
avg_frame_rate=10/1
duration=42.000000
size=13769091
```
