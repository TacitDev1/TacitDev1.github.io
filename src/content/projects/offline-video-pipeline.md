---
order: 5
listed: false
parent: marketing-engine
title: Offline video pipeline
tagline: A pipeline that turns a short JSON description into a finished, narrated product video on one workstation, with no cloud service and no video editor.
summary: Turns a JSON spec into a narrated 1080p video, fully offline. Local text-to-speech, synthesised music, frames captured from headless Chrome.
when: '2026'
role: Designed the pipeline, directed the build with Claude Code and produced the videos
stack: [Node, Python, Headless Chrome, Kokoro TTS, ffmpeg]
metrics:
  - { value: '21', label: 'videos rendered in one 33-minute run' }
  - { value: '5', label: 'stages from spec to MP4' }
  - { value: '0', label: 'cloud API calls' }
  - { value: '1080p', label: 'at 30 frames per second' }
flowTitle: From spec to video
flow:
  - { step: Spec, note: 'One JSON file per video: scenes, narration and on-screen text' }
  - { step: Voice, note: 'Local text-to-speech, with a pronunciation check first' }
  - { step: Timing, note: 'Scenes are fitted to the narration and snapped to a beat grid' }
  - { step: Render, note: 'Headless Chrome draws the composition one frame at a time' }
  - { step: Mux, note: 'ffmpeg joins frames, voice and music into an MP4' }
  - { step: Queue, note: 'Runs the whole batch unattended' }
template: true
live: true
video: /media/offline-video-pipeline/sample.mp4
poster: /media/offline-video-pipeline/poster.webp
shots:
  - { src: /media/offline-video-pipeline/contact-sheet.webp, alt: 'Contact sheet of scenes from the sample video' }
repo: offline-video-pipeline
---

## The problem

We needed a set of short product videos, each aimed at a different audience. Making them by hand in a video editor is slow, and every change of wording means doing the work again. I wanted videos that could be regenerated from text, on our own hardware.

## What I built

A pipeline where a video is a text file. Each video is described in one JSON spec: its scenes, what the narrator says and what appears on screen. Everything after that is automatic.

1. **Voice.** A local text-to-speech model reads the narration. Before it does, a check runs every line against a pronunciation list, because product names and technical terms are exactly what speech models get wrong.
2. **Timing.** Each scene is sized to its narration and then snapped to a 100 beats-per-minute grid, so cuts land on the beat. The music is synthesised by the pipeline itself, so there is nothing to license.
3. **Render.** The visuals are an ordinary web page. The pipeline drives headless Chrome directly, steps the page's clock forward one frame at a time and captures each frame. The result is identical on every run.
4. **Mux.** ffmpeg joins the frames, the voice and the music into an MP4.
5. **Queue.** A runner works through every spec in a batch.

## Results

One workstation rendered 21 finished videos in 33 minutes, unattended. Changing a line of narration re-renders only the scenes that changed, not the whole video.

## Decisions that mattered

- **A video is a text file.** Specs can be reviewed, compared and versioned like code, and an AI assistant can write a first draft of one from the product's own repository.
- **Chrome's clock, not a screen recording.** Capturing frame by frame under a controlled clock means no dropped frames and no timing drift, however slow the machine is.
- **No video framework.** Driving the browser's debugging protocol directly was less code than adopting a framework, and it left nothing to keep in step with someone else's release schedule.
- **Check pronunciation before spending render time.** A wrong word caught before the voice stage costs seconds. Caught after the render it costs the whole run.

## The template

The public version carries an invented brand and two sample specs. The video at the top of this page was rendered by the template itself.
