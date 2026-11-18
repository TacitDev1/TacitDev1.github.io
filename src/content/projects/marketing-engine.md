---
order: 1
title: Marketing engine
tagline: A marketing tool that researches, drafts, edits and schedules LinkedIn posts and blog articles, run by a team of AI agents and gated by a person at every step that reaches the public.
summary: A team of AI agents researches, drafts, edits and illustrates posts and articles. A person approves each one in the team chat before anything goes out.
when: July 2026 to now, in two iterations
role: Designed it, directed the build with Claude Code, shipped it and run it
stack: [React, Vite, Node, Express, Ollama, Claude Code, Headless Chrome, GA4]
metrics:
  - { value: '5', label: 'agents on a weekly rhythm' }
  - { value: '8/10', label: 'editor score a draft needs to pass' }
  - { value: '15', label: 'screens in one dashboard' }
  - { value: '0', label: 'pieces published without a human click' }
flowTitle: The loop
flowLoops: true
flow:
  - { step: Research, note: 'A queue of questions; the Researcher files findings into a wiki' }
  - { step: Plan, note: 'A daily session picks what to write from the week plan' }
  - { step: Draft, note: 'Writers produce posts and articles from verified facts' }
  - { step: Guardrails, note: 'Rules in code drop weak, invented or duplicate drafts' }
  - { step: Edit, note: 'The Editor rewrites or rejects, then scores the result' }
  - { step: Illustrate, note: 'The server draws a poster and a branded card for each post' }
  - { step: Approve, note: 'A person approves, sends back or drops it in the team chat' }
  - { step: Publish, note: 'Approved articles go to the website on set days' }
  - { step: Measure, note: 'Traffic and search results shape next week''s plan' }
template: true
live: true
cover: /media/marketing-engine/approvals.webp
coverAlt: 'Jarvis, the control room: a person approves, sends back or drops each draft the Editor agent passed'
shotsTitle: Every screen
shots:
  - { src: /media/marketing-engine/agents.webp, alt: 'Jarvis, Agents tab: the AI agent team, their schedules and their last runs' }
  - { src: /media/marketing-engine/feedback.webp, alt: 'Feedback: notes from the leadership team about the marketing, answered and marked done' }
  - { src: /media/marketing-engine/linkedin.webp, alt: 'LinkedIn Posts: drafts on-brand posts from a post type and a service; a person copies them to LinkedIn' }
  - { src: /media/marketing-engine/blog.webp, alt: 'Blogs: drafts a search-optimised article for a chosen target keyword' }
  - { src: /media/marketing-engine/images.webp, alt: 'Images: branded image cards for a post, kept in a gallery' }
  - { src: /media/marketing-engine/poster.webp, alt: 'ASCII poster: turns a post''s opening line into an animated poster for LinkedIn' }
  - { src: /media/marketing-engine/library.webp, alt: 'Library: every draft with its Editor score and status, to read, edit and approve' }
  - { src: /media/marketing-engine/schedule.webp, alt: 'Schedule: the publishing calendar, filled with the best draft for each slot' }
  - { src: /media/marketing-engine/seo.webp, alt: 'SEO: keyword research and Search Console data turned into a ranked content plan with briefs' }
  - { src: /media/marketing-engine/website.webp, alt: 'Website: the company site''s code, a live preview, a health check and publishing of approved blogs' }
  - { src: /media/marketing-engine/analytics.webp, alt: 'Analytics: website traffic from Google Analytics and search clicks from Search Console' }
  - { src: /media/marketing-engine/wiki-graph.webp, alt: 'Second Brain: the wiki the engine keeps for itself, shown as a graph of linked notes' }
  - { src: /media/marketing-engine/competitors.webp, alt: 'Competitors: profiles of rival firms and the gaps where the company can win' }
  - { src: /media/marketing-engine/connections.webp, alt: 'Connections: which data sources are connected' }
  - { src: /media/marketing-engine/usage.webp, alt: 'Token Usage: what the local models used, and what that would cost on a paid model' }
  - { src: /media/marketing-engine/settings.webp, alt: 'Settings: model and text-generation settings for administrators' }
repo: marketing-engine
demoPath: /marketing-engine/
---

## The problem

A consultancy with no marketing team still has to post regularly, and the posts have to be true. Generic AI writing was not good enough: it invents clients, repeats itself and reads like everyone else's. And nobody wanted a tool that publishes by itself.

## First iteration: a local engine

The first version ran entirely on our own hardware, with local models on Ollama.

- **One dashboard, fifteen screens.** A control room, a review library, a publishing schedule, SEO and competitor boards, an image studio, analytics, and a research wiki with a link graph.
- **Three background agents.** A worker that drafts, a researcher that answers queued questions, and a librarian that keeps the wiki tidy by merging overlapping pages and linking orphans.
- **Content rules written as code.** A draft that reads like generic AI writing is regenerated once and then dropped. A client story is refused unless it names a verified win. A draft that says the same thing as an existing one is dropped, compared by meaning and not by wording. Links may only point to an allowed list of sites.
- **Nothing publishes by itself.** Every output is a draft for a person to review. The drafting worker starts switched off after every restart, on purpose.

This version reached a 1.0 release. What it could not do was judge its own output or learn from results: a person still had to read every draft closely, and the tool had no view of whether last week's writing had worked.

## Second iteration: an agent team

The second version adds a team of Claude Code agents on top of the local engine. The local models still do the bulk drafting. The agents do the work that needs judgement.

- **Researcher and Editor** run every weekday. The Editor rewrites each draft or rejects it with a reason, and the writers learn from the reasons.
- **SEO** audits eight to twelve pages every Tuesday and files exact fixes.
- **Measurement** reports the week's traffic and search numbers every Friday, against the week before.
- **Strategist** reads all of that and files next week's plan: one focus, and the pieces worth writing, each with its reason.

Each agent is one entry in a register: its job, its schedule, its model and the only tools it may use. A runner starts whatever is due and reports every run back to the dashboard.

An article is cleared for publishing only when the Editor scores it 8 out of 10 or better and a set of hard checks in code finds nothing: no unsourced figure, no invented client, no repeated theme, no cut-off title. Then a person still has to approve it.

### Approval where people already are

Asking busy people to open another app did not work, so the approval goes to them. When a piece is cleared, a card appears in the team chat with three buttons: approve, send back with a note, or drop it. Only named approvers count and the first click decides. After approval a "stop it" button stays available until the piece goes out. A piece that is sent back comes back once, reworked from the note.

### Pictures without a designer

For each post the server draws its own pictures through headless Chrome: an animated ASCII poster and a branded card. Both are posted into the approval chat at full size and the approver picks one. The tool records which styles people keep choosing and starts from those next time.

## LinkedIn posts and blog articles

- **LinkedIn posts.** Short posts in the company's voice, drafted from verified facts and the week's focus, each with its pictures. The schedule proposes a post every few days, and a person posts the approved one to LinkedIn.
- **Blog articles.** Longer pieces held to the same Editor score and hard checks. An approved article goes to the company website on its set weekday.

## Videos

Product videos come from a separate pipeline built for the same job. A short JSON description becomes a narrated 1080p video, with local text-to-speech and frames drawn by headless Chrome, all on one workstation. [See the video pipeline](/projects/offline-video-pipeline/).

## Decisions that mattered

- **Rules in code, not in prompts.** A prompt asks a model to behave. A check in code stops the draft when it doesn't.
- **Plain files, no database.** State is JSON files and a Markdown wiki, so a clone of the repository brings the whole brain with it and every change shows up in a diff.
- **Least privilege per agent.** Each agent runs with only the tools on its own list.
- **Fail loudly.** If an agent run fails because its sign-in expired, the team chat gets one warning a day and the weekly summary lists it under what needs a person.

## Honest limits

- The tool never posts to LinkedIn. It marks a post as ready and a person posts it.
- Two more agents, for conversion and for sales and competitors, are registered but not built yet.
- The quality gate is only as good as the facts file it checks against, so that file needs an owner.
