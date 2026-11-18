---
order: 3
notice: No customer data is saved in this SAP Knowledge Hub. Nothing is stored, and everything is always expunged.
title: SAP knowledge hub
tagline: An offline second brain for SAP work. Reference notes, code snippets, tickets, timesheets and a linked wiki in one page that opens from a folder and needs no server.
summary: An offline knowledge base for day-to-day SAP work. Eleven views, a wiki with a link graph, full-text search, and no dependencies at all.
when: '2026'
role: Designed and built it with Claude Code for my own daily use
stack: [HTML, CSS, JavaScript, Markdown]
metrics:
  - { value: '11', label: 'views in one page' }
  - { value: '0', label: 'dependencies and network requests' }
  - { value: '100+', label: 'wiki pages in my own copy' }
flowTitle: How content gets in
flow:
  - { step: Work happens, note: 'A ticket is solved, a function module is looked up, a note is taken' }
  - { step: Claude writes it up, note: 'As Markdown wiki pages and plain data files' }
  - { step: Build step, note: 'One script turns the wiki folder into a single data file' }
  - { step: The page reads it, note: 'Search, cross-links and the graph are built in the browser' }
template: true
live: true
cover: /media/sap-knowledge-hub/dashboard.webp
coverAlt: The dashboard of the template, with counts, workspaces and recent activity
shots:
  - { src: /media/sap-knowledge-hub/wiki-graph.webp, alt: 'The wiki shown as a graph of linked pages' }
  - { src: /media/sap-knowledge-hub/wiki-page.webp, alt: 'A wiki page with links to related pages' }
  - { src: /media/sap-knowledge-hub/search.webp, alt: 'Search across references, snippets, tickets and wiki pages' }
repo: sap-knowledge-hub
demoPath: /sap-knowledge-hub/
---

## The problem

SAP work produces a lot of small, hard-won knowledge: which function module does what, how a transaction behaves, how last month's incident was really fixed. It ends up scattered across tickets, chats and memory. I wanted one place for it that works anywhere, with no connection and nothing to install.

## What I built

A single page that opens straight from a folder.

- **Reference** for function modules, BAPIs and enhancement points, with my own notes on each.
- **Snippets, transaction codes and a cheat sheet** for the things I look up every week.
- **Tickets and a timesheet**, so what was done and how long it took sit next to the notes on how.
- **A wiki** of concept pages, object pages and ticket write-ups that link to each other, with a graph view that shows how they connect.
- **Search** across everything.
- **An inbox** for quick notes that get filed properly later.

## How it works

There is no server and no framework. Content lives in plain data files that the page loads with ordinary script tags, which is what lets it work when opened from disk. Nothing typed into the page is stored: it is held in memory only and is gone when the tab is closed or reloaded. The page sets no cookies, keeps nothing in the browser's storage and makes no requests to any other site.

Most of the content is written by Claude as I work. When a ticket is solved, it writes the page, links it to the concepts it touches and updates the reference entries. One small script rebuilds the wiki data from a folder of Markdown files.

## Decisions that mattered

- **Offline first, to the point of opening from a file.** That one constraint decided the architecture: no fetch calls, no build tooling, no external fonts or libraries.
- **Content as files.** Markdown and plain data files can be read, compared and backed up without the app.
- **Let the assistant do the filing.** A knowledge base dies when filing is a chore. Here the filing happens as a side effect of the work.
- **Links over folders.** Pages link to each other and the graph shows clusters, which is how I find the page I only half remember.

## The template

The public version keeps the application and replaces every piece of content. The entries are written fresh from publicly known SAP examples for an invented company, with no client material and no course content.
