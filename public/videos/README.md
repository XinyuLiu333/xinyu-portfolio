# /public/videos

Private/unlisted video assets hosted by the portfolio site.

Files dropped here are served at `/videos/<filename>` (no project page,
not linked from anywhere — only accessible if you know the URL).

## Usage

Drop the file:

```
public/videos/marvin-demo.mp4
```

Reference it from any project page (e.g. the marvin case study):

```tsx
<video src="/videos/marvin-demo.mp4" controls playsInline />
```

## Always convert to MP4 / H.264 before committing

Browsers (especially Chrome and Firefox) will not play HEVC (H.265),
ProRes, or other QuickTime-native codecs — they show a download
prompt instead of a video player. macOS screen recorders (RecordIt,
Screenshot.app, QuickTime) default to HEVC, so any `.mov` straight off
the recorder will fail in browsers.

Convert to H.264 + AAC inside an `.mp4` container with `ffmpeg`:

```bash
ffmpeg -i input.mov \
  -c:v libx264 -preset slow -crf 23 \
  -c:a aac -b:a 128k \
  -movflags +faststart \
  -pix_fmt yuv420p \
  -y output.mp4
```

`+faststart` moves the metadata to the front of the file so the video
starts playing while it downloads instead of buffering the whole thing
first. `-pix_fmt yuv420p` ensures Safari compatibility.

Verify after converting: `ffprobe -v error -select_streams v:0 \
-show_entries stream=codec_name output.mp4` should print `h264`.

## Heads-up on file size

Anything in `/public` is committed to git and shipped with the Next.js
build. Keep videos under ~50 MB if possible. For larger files, host on
a CDN (Cloudflare R2, Vercel Blob, S3, Mux, Cloudflare Stream) and
reference the external URL instead.
