# AGENTS.md

Guidance for AI agents working in this repository.

## Product

**Design House Global** — Turkish-language marketing site for an art & design education institution. Next.js 15 App Router with Framer Motion animations and Lenis smooth scroll.

## Cursor Cloud specific instructions

### Services

| Service | Port | Command |
|---------|------|---------|
| Next.js dev server | 3000 | `npm run dev` |

Start the dev server in a **tmux** session (long-running). Example:

```bash
SESSION_NAME="next-dev-server"
tmux -f /exec-daemon/tmux.portal.conf has-session -t "=$SESSION_NAME" 2>/dev/null || \
  tmux -f /exec-daemon/tmux.portal.conf new-session -d -s "$SESSION_NAME" -c "/workspace" -- "${SHELL:-zsh}" -l
tmux -f /exec-daemon/tmux.portal.conf send-keys -t "$SESSION_NAME:0.0" 'npm run dev' C-m
```

Open http://localhost:3000 after "Ready" appears in the tmux pane.

### Lint / test / build

See `package.json` scripts:

- `npm run lint` — ESLint
- `npm run build` — production build (no separate test suite yet)

### Non-obvious notes

- Images load from `images.unsplash.com`; `next.config.ts` whitelists that host.
- Sub-pages live under `src/app/` (e.g. `/hakkimizda`, `/iletisim`).
- Turkish content is centralized in `src/lib/content.ts`.
