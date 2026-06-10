# Commands Run

This file records the commands used to produce and verify the README demo.

- `npm run health`
- `npm run brief -- --mode concise "should I raise VC or bootstrap for an AI startup?"`
- `npm run search "context engineering"`
- `npm run gate -- --audit --since 2026-06-05 --examples 5`
- `npm run verify-contracts`
- `rg -c "registerTool" scripts/mcp-server.ts`
- `sed -n '1,12p' scripts/mcp-server.ts`
- `sed -n '1,25p' knowledge-base/meta/stats.md`
- `node assets/demo-video/build-scenes.mjs`
- `npm --prefix /tmp/cinematic-video-tools install playwright`
- `npx --prefix /tmp/cinematic-video-tools playwright install chromium`
- `NODE_PATH=/tmp/cinematic-video-tools/node_modules node /Users/jinchoi/.codex/skills/cinematic-explainer-videos/scripts/record_card.mjs --input assets/demo-video/scenes/... --out assets/demo-video/clips/... --duration 6100`
- `node /Users/jinchoi/.codex/skills/cinematic-explainer-videos/scripts/assemble_timeline.mjs assets/demo-video/timeline.json`
- `cp assets/demo-video/zuhn-explainer.mp4 assets/demo.mp4`
- `ffmpeg -y -i assets/demo.mp4 -vf "fps=10,scale=800:-1:flags=lanczos,palettegen=stats_mode=diff" /tmp/zuhn-demo-palette.png`
- `ffmpeg -y -i assets/demo.mp4 -i /tmp/zuhn-demo-palette.png -lavfi "fps=10,scale=800:-1:flags=lanczos[x];[x][1:v]paletteuse=dither=bayer:bayer_scale=2:diff_mode=rectangle" assets/demo.gif`
- `bash /Users/jinchoi/.codex/skills/cinematic-explainer-videos/scripts/extract_review_frames.sh assets/demo.mp4 assets/demo-video/review ...`
- `ffmpeg -y -ss 29.6 -i assets/demo.gif -frames:v 1 assets/demo-video/review/gif-runtime-frame.png`
- `ffmpeg -y -ss 24.8 -i assets/demo.gif -frames:v 1 assets/demo-video/review/gif-gate-frame.png`
- `ffprobe -v error -select_streams v:0 -show_entries stream=width,height,r_frame_rate -show_entries format=duration,size -of default=nw=1 assets/demo.mp4`
- `ffprobe -v error -select_streams v:0 -show_entries stream=width,height,r_frame_rate -show_entries format=duration,size -of default=nw=1 assets/demo.gif`
- `curl -sS -H 'Accept: application/vnd.github+json' https://api.github.com/markdown -d '{"mode":"gfm","context":"gorajing/zuhn","text":"![Zuhn demo](assets/demo.gif)"}'`
- Stale first-draft claim scan across `assets/demo-video` returned no matches.
- README stale-media scan found no HD-demo CTA, local mp4 CTA, video embed, or poster-to-mp4 link.

## Final Media Metadata

MP4 (`assets/demo.mp4`):

```text
width=1280
height=720
r_frame_rate=30/1
avg_frame_rate=30/1
duration=41.566667
size=3825856
```

GIF (`assets/demo.gif`):

```text
width=800
height=450
r_frame_rate=10/1
avg_frame_rate=10/1
duration=41.600000
size=12525729
```

GitHub Markdown API rendered `![Zuhn demo](assets/demo.gif)` as an `<img>` with `data-animated-image`.
