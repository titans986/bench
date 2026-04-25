# Stratloom — Freelance OS

A single-file React app that gives freelancers a browser-tab-style workspace for managing multiple clients. Each client has their own full workspace (proposals, timer, comms, rate calc, testimonials, prioritizer) that persists independently.

Built iteratively in Claude (web) then handed off to Claude Code for further development.

---

## How to run

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

---

## Critical architectural facts

**Everything lives in `src/App.jsx`.** One file, ~3700 lines. This was a deliberate constraint from the chat iteration — don't split without a reason. If you do split, keep all design tokens, all module components, and the App shell together; they're tightly coupled.

**No external CSS framework.** Styling is inline style props + a single `<style>` tag emitted by the `GlobalStyles` component. No Tailwind, no styled-components, no CSS modules. The `src/index.css` file only sets the document background — all component styling lives inside `App.jsx`.

**No external React libraries.** Only `react` and `react-dom`. All animations are CSS keyframes, all icons are emoji, the bar chart is raw SVG, the tab drag uses the native HTML5 drag API.

**One exception: jsPDF is loaded from CDN on demand.** Check `loadJsPDF()` near the top of `App.jsx`. It injects a `<script>` tag from `cdnjs.cloudflare.com` the first time the Invoice modal tries to generate a PDF. There is no npm dependency on jsPDF.

---

## State model

Everything is held in the top-level `App` component. There's no context, no reducer, no external store. Prop drilling is intentional — the tree is shallow.

```
App state:
├─ clients[]         — master list of all clients (never shrinks on tab close)
├─ openClientIds[]   — which clients are currently displayed as tabs (Mac-style: close ≠ delete)
├─ activeClientId    — which tab is focused
├─ activeModule      — 'proposals' | 'timer' | 'comms' | 'rate' | 'testimonials' | 'prioritizer'
├─ view              — 'dashboard' | 'client' (top-level route)
├─ showNewClient     — new-client modal open
├─ deleteTarget      — client object to confirm-delete, or null
├─ showPalette       — ⌘K command palette open
├─ showShortcuts     — ? help modal open
├─ closingIds (Set)  — tabs mid-close-animation
├─ notifyIds (Set)   — tabs with a pulse notification (e.g. session completed elsewhere)
├─ toasts[]          — bottom-right toast stack
└─ invoicePayload    — { client, sessions, hourlyRate, rangeLabel } when invoice modal is open
```

Each client object:

```js
{
  id: "c_<ts>_<rand>",
  name: "Acme Corp",
  hue: { bg, fg, name },      // pastel color pair from CLIENT_HUES palette
  createdAt: <ms>,
  modules: {
    proposals:    { name, rate, brief, output, streaming, error, count },
    timer:        {
      billingMode: "pomodoro" | "billable",
      mode: "focus" | "break",   // pomodoro only
      seconds,                    // pomodoro countdown
      targetSeconds,              // billable target
      elapsedSeconds,             // billable accumulator
      running,
      currentProject,
      sessions: [{ id, project, minutes, seconds, time, dateISO, billable, targetMinutes }]
    },
    comms:        { situation, context, output, streaming, error },
    rate:         { exp, profit, days, hours, skill, rates, advice, streaming, error, invoiceRange, invoiceMeta },
    testimonials: { name, project, raw, polished, streaming, error, cards: [{ id, name, project, quote, tone }] },
    prioritizer:  { energy, tasks, output, streaming, error },
  }
}
```

**`patchActiveClient(partialModules)`** is the only mutation helper — modules call it with a single module's new state (e.g. `patch({ timer: { ...s, running: true } })`). This keeps module components pure and trivially swappable.

---

## Key patterns to preserve

### 1. Global timer heartbeat
A single `setInterval` in `App` walks all clients every second and advances any timer where `running: true`. Uses refs (`clientsRef`, `activeClientIdRef`, `viewRef`, `openClientIdsRef`) to avoid stale closures. Pomodoro mode counts down and auto-completes; Billable mode just accumulates `elapsedSeconds` and never auto-stops (user presses "Stop & Log").

**If a Pomodoro session completes in a non-active tab:**
- The tab gets a notification pulse (added to `notifyIds`)
- A toast fires in the bottom-right

Don't refactor to per-client intervals — one global interval is fine and avoids leak risks.

### 2. Tab vs. client distinction
- **Closing a tab** (× on tab, ⌘W) only removes from `openClientIds`. Data stays.
- **Deleting a client** (× on sidebar row, requires type-to-confirm modal) removes from both `clients` and `openClientIds`.

This mirrors macOS: close ≠ quit. Don't conflate them.

### 3. Streaming API calls
`streamClaude({ system, user, onChunk, onDone, onError })` hits `https://api.anthropic.com/v1/messages` with `stream: true`. Parses SSE lines, extracts `content_block_delta.delta.text` events.

**This won't work in local dev without a proxy.** The Anthropic API blocks browser-origin requests. When running locally, you'll see CORS errors in the console on any AI button (Generate Proposal, Write Email, etc.) — everything else works. To enable AI features, run a proxy and swap the fetch URL.

### 4. All modals share behavior
- Click outside to close
- Escape key to close
- Focus trap on the primary input
- `fade-up` animation on mount

### 5. Toasts
`pushToast({ icon, title, subtitle?, hint?, duration? })` creates a bottom-right toast. Auto-dismiss after 2.6s (configurable via `duration`). Used for: new client created, session complete (cross-tab), session logged, client deleted, PDF downloaded, first-run ⌘K nudge.

### 6. Stat card animation
The `<StatCard>` component uses a `popKey` ref trick — any time `value` prop changes, it bumps a key to re-trigger the `numberPop` animation. Don't memoize this component without preserving the behavior.

---

## Design system (tokens in `const T = {}` at top of App.jsx)

**Warm cream palette.** The entire aesthetic is intentional — inspired by Clarity-style project management tools (cream backgrounds, pastel stat cards, soft rounded UI).

- `T.bg` = `#F3ECDC` (main canvas)
- `T.surface` = `#FFFAF0` (cards)
- `T.sidebar` = `#FFFCF5` (sidebar)
- `T.text` = `#1F1B16` (near-black, warm)
- `T.subtext`, `T.muted` for tiers of gray

**6 pastel accent colors**, each with a matching darker text tone:
- lilac, peach, amber, blue, mint, rose
- Pastels appear as stat card backgrounds, pill tags, and client avatars (via `CLIENT_HUES`)

**Typography:**
- Body: `Plus Jakarta Sans` (Google Fonts, loaded in GlobalStyles)
- Numbers / timer display: `JetBrains Mono`
- Testimonial quotes: `Instrument Serif` italic

**Radii:** 10 (tight), 14 (cards), 20 (large cards), 999 (pills and buttons).

**Shadows are subtle** — `0 1-8px` rgba(60,44,18, 0.06-0.08). This is a warm-brown shadow, not gray.

**Buttons are pill-shaped (999 radius), never rectangular.**

---

## Modules (what each one does)

1. **Proposals** — AI-generated client proposals (system prompt in module code)
2. **Focus Timer** — Per-client timer with Pomodoro or Billable modes. Sessions log to the client and feed the invoice generator.
3. **Client Comms** — AI-drafted emails for common situations (scope creep, late payment, etc.)
4. **Rate Calc** — Calculates hourly/day/monthly rates AND contains the invoice generator (below the AI advice section)
5. **Testimonials** — Raw feedback → polished testimonial via AI → saved as kanban cards
6. **Prioritizer** — Task dump + energy level → AI picks top 3

All AI-powered modules use streamed responses (token-by-token).

---

## What's built vs. what's not

**Built:**
- [x] All 6 modules with per-client state
- [x] Browser-style tabs with drag-reorder, close animation, rename-on-double-click
- [x] Dashboard landing page with cross-client aggregates
- [x] Command palette (⌘K)
- [x] Keyboard shortcuts (⌘T, ⌘W, ⌘D, ⌘1-9, Ctrl+Tab, ?)
- [x] Confirm-delete modal with type-to-confirm
- [x] Billable timer mode with duration targets, over-target state, stop-and-log
- [x] Invoice generator with editable fields and PDF download (jsPDF)
- [x] Toast notifications
- [x] Mac-style close-vs-delete distinction

**Not built yet (likely next steps):**
- [ ] **Persistence** — everything is in-memory. Refresh = wipe. Should use localStorage. This is the biggest missing piece for real use.
- [ ] **Onboarding empty state** — app boots with a seed "Acme Corp" client. Replace with "Add your first client" CTA.
- [ ] **API proxy for local dev** — needed for AI features outside Claude's sandbox.
- [ ] **Custom font in PDF** — jsPDF uses Helvetica (default). Embedding Plus Jakarta Sans requires base64 font blob.
- [ ] **Dark mode** — not currently supported.
- [ ] **Export/import** — for backing up client data or migrating between devices.

---

## Known quirks / constraints

- **Emoji-based icons throughout.** Replacing them with SVG icons is fine but keep them monochrome if so — the aesthetic relies on the emoji's warmth.
- **No error boundary.** A bad render will crash the whole app. Consider adding one before shipping publicly.
- **Large `App.jsx` file.** Intentional for chat iteration. Splitting is fine but keep the tokens + core components + App in a shared module to avoid prop-type soup.
- **The seed client is hard-coded.** `useState(() => [newClient("Acme Corp", 0)])` at the top of App. Remove when adding persistence.
- **No keyboard shortcut conflicts with Chrome** — we use ⌘T/⌘W but most users won't notice they're being intercepted because the behavior is analogous (new tab, close tab). If this ever becomes confusing, pick different combos.

---

## Where to look for things

| Concern | Location in App.jsx |
|---|---|
| Design tokens | `const T = {}` at top, around line 10 |
| Client hues palette | `const CLIENT_HUES` just below T |
| Global CSS (animations, hover states) | `<GlobalStyles>` component |
| Streaming API helper | `streamClaude()` near top |
| Invoice helpers (date ranges, formatters) | `getRangeBounds`, `filterSessionsInRange`, `fmtMoney`, etc. |
| jsPDF loader | `loadJsPDF()` |
| State factory for new clients | `emptyModuleState()`, `newClient()` |
| Shared UI primitives | `Label`, `Field`, `TextInput`, `TextArea`, `PrimaryBtn`, `GhostBtn`, `Card`, `Pill`, `IconBadge`, `StatCard`, `ModuleHeader`, `AIBox`, `ErrorBanner` |
| Module components | `ProposalsModule`, `TimerModule`, `CommsModule`, `RateModule`, `TestimonialsModule`, `PrioritizerModule` |
| Dashboard | `Dashboard`, `HoursChart`, `buildActivity` |
| Navigation | `Sidebar`, `TabBar` |
| Modals | `NewClientModal`, `ConfirmDeleteModal`, `InvoiceModal`, `CommandPalette`, `ShortcutsHelp` |
| Toast system | `ToastStack` component + `pushToast`/`dismissToast` in App |
| App shell + routing | `App` component at the bottom |

---

## Suggested next tasks (in rough priority order)

1. **Add localStorage persistence.** One `useEffect` to serialize `clients` on every change, one to hydrate on mount. Critical for real use.
2. **Build a local dev proxy** so AI features work in the Vite dev server. Either a Cloudflare Worker or a tiny Node/Express server. Swap `streamClaude`'s fetch URL to hit the proxy.
3. **Onboarding empty state.** If `clients.length === 0` on first launch, show a hero "Create your first client" card instead of the dashboard.
4. **Split `App.jsx`** into logical modules if maintenance becomes painful. Suggested split: `tokens.js`, `primitives.jsx`, `modules/*.jsx`, `modals/*.jsx`, `Dashboard.jsx`, `Sidebar.jsx`, `TabBar.jsx`, `App.jsx`.
5. **Invoice templates.** Multiple PDF styles (minimal, detailed, branded) the user can pick.
6. **Data export/import.** JSON dump and restore.

---

## Aesthetic north star

Warm, calm, professional. Not playful or toy-like. Not cold or enterprise-y. Think: a freelancer's Moleskine notebook next to a MacBook on a sun-washed desk.

Avoid: bright primary colors, heavy drop shadows, gradient meshes, glass morphism, neon, dark mode on launch. The cream-and-pastel language is the product's visual identity; don't dilute it.
