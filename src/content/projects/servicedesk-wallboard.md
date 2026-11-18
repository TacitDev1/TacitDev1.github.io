---
order: 2
title: Service desk wallboard
tagline: One screen that shows a service delivery manager which support tickets are about to miss their deadline, across every client, without clicking anything.
summary: A single-file wall board for a Jira service desk. Live deadline countdowns, a needs-attention feed and team workload, refreshed every 15 seconds.
when: '2026'
role: Designed and built it with Claude Code for our service delivery manager, then reworked it from her feedback
stack: [HTML, CSS, JavaScript, Jira REST API, Serverless function]
metrics:
  - { value: '1', label: 'HTML file, no build step' }
  - { value: '15 s', label: 'refresh interval' }
  - { value: '0', label: 'credentials in the browser' }
flowTitle: How data reaches the screen
flow:
  - { step: Jira, note: 'Tickets, deadlines and assignees for each client' }
  - { step: Proxy function, note: 'Holds the API token and exposes three small routes' }
  - { step: One HTML page, note: 'Fetches every 15 seconds and redraws in place' }
  - { step: The wall screen, note: 'Tiles, alerts, countdowns and workload at a glance' }
template: true
live: true
cover: /media/servicedesk-wallboard/board.webp
coverAlt: The live board of the template, with KPI tiles, a needs-attention feed, a panel per client and team workload
shots:
  - { src: /media/servicedesk-wallboard/stats.webp, alt: 'The all-time statistics tab' }
  - { src: /media/servicedesk-wallboard/phone.webp, alt: 'The board at phone width', tall: true }
repo: servicedesk-wallboard
demoPath: /servicedesk-wallboard/
---

## The problem

The service desk looks after several clients, each with its own response and resolution deadlines. Jira holds all of that, but answering "what is about to breach, and who has it?" meant opening filters and reading lists. The service delivery manager needed the answer on a screen she could glance at from across the room.

## What I built

A dark, high-contrast board made to be read from a distance.

- **KPI tiles** for open tickets, tickets at risk and tickets already past their deadline.
- **A needs-attention feed** that lists only what a person should act on now, worst first.
- **A panel per client** with a live countdown on every ticket's deadline.
- **Team workload**, showing who is carrying what.
- **A second tab** with all-time statistics for reviews and reporting.

## How it works

The whole interface is one HTML file with plain JavaScript and CSS. There is no framework and no build step, so there is nothing to keep up to date and it loads instantly.

The page never talks to Jira directly. A small serverless function sits in between, holds the API token and exposes three routes: who is signed in, the live board, and the statistics. The browser never sees a credential.

## Decisions that mattered

- **Started as a desktop app, moved to the web.** The first version shipped as a Windows program. Every change meant shipping a new file, so I moved it to a hosted page behind a sign-in and retired the program.
- **No framework.** For one screen that redraws a few lists, plain JavaScript is easier to read and has nothing to break.
- **Designed for the worst ticket, not the average one.** The feed sorts by urgency and the layout gives the most room to what is closest to breaching.
- **Built with its user.** Each round of feedback from the service delivery manager went straight back into the board.

## The template

The public version runs on invented tickets for two invented clients. It shifts every timestamp relative to the moment you open it, so the countdowns are always live. Connecting it to a real Jira site takes a handful of environment variables.
