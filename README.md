# Stratloom

A browser-tab-style freelance OS. Every client gets their own workspace (proposals, timer, comms, rate calc, testimonials, priorities) — close tabs without losing data, reopen them from the sidebar, bill hours with one-click PDF invoices.

![Stratloom](https://via.placeholder.com/1200x600/F3ECDC/1F1B16?text=Stratloom)

## Quick start

```bash
npm install
npm run dev
```

Opens at [http://localhost:5173](http://localhost:5173).

## What's inside

- 6 per-client modules: Proposals, Focus Timer, Client Comms, Rate Calc, Testimonials, Prioritizer
- Browser-style tabs (drag to reorder, close vs. delete distinction)
- Cross-client Dashboard with hours chart, revenue projection, activity feed
- Keyboard shortcuts: ⌘K palette, ⌘T/⌘W tab mgmt, ⌘1-9 tab jump, ⌘D dashboard, ? help
- Billable timer mode + one-click invoice PDF (jsPDF)

## Important: AI features need a proxy

The AI-powered buttons (Generate Proposal, Write Email, etc.) fetch from `api.anthropic.com` directly. This works inside the Claude.ai artifact sandbox, but locally it'll CORS-fail.

To enable AI features in local dev you need either:
- A local proxy that adds your `x-api-key` header (Cloudflare Worker, Express, etc.)
- Or deploy to a platform that serves the same proxy

Everything else (tabs, timer, dashboard, drag, keyboard shortcuts, PDF invoices) works without the API.

## Working on it with Claude Code

Open this folder in Claude Code and it'll auto-read `CLAUDE.md` — which has the full architectural map, state model, design tokens, and suggested next tasks.

```bash
cd stratloom
claude
```

Then ask for whatever's next. Good first-task candidates:

- "Add localStorage persistence so data survives refresh"
- "Build a Cloudflare Worker proxy so the AI features work in dev"
- "Split App.jsx into smaller modules"
- "Build an onboarding empty state instead of the hardcoded Acme Corp seed"

## Tech

- React 18 + Vite (no TypeScript, no Tailwind, no styled-components)
- Inline styles + single `<style>` tag for global CSS
- jsPDF loaded from CDN on demand for invoice generation
- Everything in one `src/App.jsx` (~3700 lines, intentional)

## License

Your call.
