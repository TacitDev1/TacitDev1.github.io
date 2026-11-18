// Copies screenshots and the sample video from the sibling template repos into
// public/media/, resized and converted to WebP. Re-run after a template's
// screenshots change: node scripts/import-media.mjs
import { mkdirSync, copyFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const here = dirname(fileURLToPath(import.meta.url));
const repos = join(here, '..', '..');
const out = join(here, '..', 'public', 'media');

// [source repo, file in the repo, target name under public/media/<slug>/]
const images = [
  // Every screen of the marketing engine, full sidebar visible.
  ...[
    ['jarvis-agents', 'agents'],
    ['jarvis-approvals', 'approvals'],
    ['feedback', 'feedback'],
    ['linkedin', 'linkedin'],
    ['blog', 'blog'],
    ['images', 'images'],
    ['ascii-poster', 'poster'],
    ['library', 'library'],
    ['schedule', 'schedule'],
    ['seo', 'seo'],
    ['website', 'website'],
    ['analytics', 'analytics'],
    ['second-brain-graph', 'wiki-graph'],
    ['competitors', 'competitors'],
    ['connections', 'connections'],
    ['usage', 'usage'],
    ['settings', 'settings'],
  ].map(([src, name]) => ['marketing-engine', `docs/screenshots/${src}.png`, `marketing-engine/${name}`]),
  ['servicedesk-wallboard', 'docs/screenshots/board-laptop.png', 'servicedesk-wallboard/board'],
  ['servicedesk-wallboard', 'docs/screenshots/stats-laptop.png', 'servicedesk-wallboard/stats'],
  ['servicedesk-wallboard', 'docs/screenshots/board-phone.png', 'servicedesk-wallboard/phone'],
  ['sap-knowledge-hub', 'docs/screenshots/dashboard.png', 'sap-knowledge-hub/dashboard'],
  ['sap-knowledge-hub', 'docs/screenshots/wiki-graph.png', 'sap-knowledge-hub/wiki-graph'],
  ['sap-knowledge-hub', 'docs/screenshots/wiki-page.png', 'sap-knowledge-hub/wiki-page'],
  ['sap-knowledge-hub', 'docs/screenshots/search.png', 'sap-knowledge-hub/search'],
  ['offline-video-pipeline', 'docs/samples/copilot-teaser-poster.jpg', 'offline-video-pipeline/poster'],
  ['offline-video-pipeline', 'docs/samples/copilot-teaser-contact-sheet.jpg', 'offline-video-pipeline/contact-sheet'],
];
const files = [
  ['offline-video-pipeline', 'docs/samples/copilot-teaser-1920x1080.mp4', 'offline-video-pipeline/sample.mp4'],
];

for (const [repo, src, name] of images) {
  const from = join(repos, repo, src);
  if (!existsSync(from)) {
    console.warn(`missing: ${repo}/${src}`);
    continue;
  }
  const to = join(out, `${name}.webp`);
  mkdirSync(dirname(to), { recursive: true });
  const info = await sharp(from).resize({ width: 1600, withoutEnlargement: true }).webp({ quality: 82 }).toFile(to);
  console.log(`${name}.webp  ${info.width}x${info.height}  ${Math.round(info.size / 1024)} KB`);
}
for (const [repo, src, name] of files) {
  const from = join(repos, repo, src);
  if (!existsSync(from)) {
    console.warn(`missing: ${repo}/${src}`);
    continue;
  }
  const to = join(out, name);
  mkdirSync(dirname(to), { recursive: true });
  copyFileSync(from, to);
  console.log(`${name}  copied`);
}
