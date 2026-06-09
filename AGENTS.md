# AGENTS.md

Guidance for AI agents working in this repository.

## Repository status

This repository (`SAT`) is a **greenfield stub**. As of the initial commit, the only tracked file is `README.md` (title: "SAT"). There is:

- No application source code
- No package manifests (`package.json`, `pyproject.toml`, etc.)
- No Docker or CI configuration
- No lint, test, or build scripts

Until application code is added, there is nothing to install, lint, test, build, or run beyond verifying the repo and VM tooling.

## Cursor Cloud specific instructions

### Services

| Service | Required? | Notes |
|---------|-----------|-------|
| *(none)* | — | No runnable services are defined in this repo yet |

When code is added, update this section with how to start required services (ports, env vars, and non-obvious startup caveats).

### Dependency refresh (VM startup)

No dependency installation is needed. The VM update script is a no-op (`true`).

### Lint / test / build / run

Not applicable until a stack and project structure are introduced. After code lands, document the canonical commands here or link to `README.md` / package scripts rather than duplicating them.

### VM tooling (available for future development)

The Cloud Agent VM includes common tooling that can be used once a stack is chosen:

- **Node.js** via nvm (v22.x) with `npm`, `pnpm`, and `yarn`
- **Python 3.12** with `pip`

Do not assume a specific stack until manifests and docs exist in the repo.
