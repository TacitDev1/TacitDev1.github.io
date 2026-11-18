// Draws public/og.png (the picture shown when the site link is shared).
// Run after changing the name or kicker in site.config.mjs: npm run og
import sharp from 'sharp';
import site from '../site.config.mjs';

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#fbfbfa"/>
  <text x="80" y="300" font-family="'Segoe UI', Helvetica, Arial, sans-serif" font-weight="600" font-size="76" fill="#1d1d1b">${esc(site.name)}</text>
  <text x="82" y="380" font-family="'Segoe UI', Helvetica, Arial, sans-serif" font-size="40" fill="#6b6a66">${esc(site.kicker)}</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(new URL('../public/og.png', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1'));
console.log('Wrote public/og.png');
