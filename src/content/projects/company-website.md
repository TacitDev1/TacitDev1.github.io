---
order: 4
title: ETZ Global website
tagline: The company website, rebuilt from WordPress as a fast static site in five languages, with interactive demos of the company's AI platform.
summary: Rebuilt the ETZ Global website from WordPress as a static Astro site in five languages, with scripted AI demos and mobile Lighthouse scores of 98 to 100 on inner pages.
when: '2026'
role: Led the rebuild with Claude Code from a component kit, migrated the content, approved every release
stack: [Astro, TypeScript, Tailwind CSS, GSAP, Netlify]
metrics:
  - { value: '98 to 100', label: 'mobile Lighthouse score on inner pages' }
  - { value: '67 of 67', label: 'sitemap pages indexed by Google' }
  - { value: '5', label: 'languages' }
  - { value: '184', label: 'scripted AI demo conversations' }
flowTitle: From the old site to the new one
flow:
  - { step: WordPress site, note: 'Slow pages, content locked in a database' }
  - { step: Content collections, note: 'Service pages, industry pages and news moved into typed files' }
  - { step: Static build, note: 'Astro renders every page ahead of time' }
  - { step: Checks, note: 'Performance, security and visual audits run from scripts' }
  - { step: Release, note: 'Production builds from the main branch, with a rollback script' }
siteUrl: https://www.etzglobal.com
cover: /media/company-website/home.webp
coverAlt: The homepage of the ETZ Global website, with its headline and an animated globe
---

## The problem

The old WordPress site was due a rebuild, and it did not show what the company had started building with AI. The new one had to be fast on a phone, easy to keep correct, available in several languages and able to demonstrate a product instead of only describing it.

## What I built

A fully static site on Astro. Nothing comes from a theme.

- **Content moved into typed collections.** Twelve SAP service pages, industry pages on one fixed template and more than two dozen news posts. Old addresses redirect to their new homes, and Google has indexed all 67 pages in the sitemap.
- **Five languages** using Astro's built-in routing. A setting keeps half-translated languages out of the sitemap until they are ready.
- **Interactive AI demos.** 184 scripted conversations across 23 pages show what the company's AI platform does: the question, the tools it calls, the evidence it returns and the approval step. They pause when off screen and respect reduced-motion settings.
- **SEO in one place.** A single component produces titles, structured data and language alternates for every page.
- **Security headers** including an enforced content security policy.

## Results

- Mobile Lighthouse scores of 98 to 100 on inner pages and 100 across the board on desktop. Accessibility scores 95 to 100 and SEO 100.
- A performance pass on the homepage raised its mobile score from 73 to 85 and cut blocking time from about 1.5 seconds to about 0.55 seconds.
- On a throttled phone, the homepage's longest task dropped from 27.5 seconds to 164 milliseconds.

## Decisions that mattered

- **Static first.** Every page is built ahead of time, so there is no server to attack and nothing to slow down under load.
- **Audits as scripts.** Performance, runtime, security and visual checks are commands in the repository, so they are run the same way every time.
- **Checks at build time.** The hand-drawn ASCII scenes are validated before every build, so a broken one cannot ship.
- **A way back.** Production has a rollback script, so a bad release can be undone in one command.

## Why there is no template

The site itself is public, so the link above is the demonstration. The source belongs to the company and stays private.
