# AGENTS.md

## Repository layout
- Git root is `PERFIL PROFESIONAL/`. The entire app lives under `AQPortfolio/`; run every command from `AQPortfolio/` (the OpenCode working directory is already there).
- OpenCode entry: `src/main.jsx`. Root-level `app.js` is dead legacy code (uses `ReactDOM` without importing it) — ignore it.
- Remote: `felixstiven/Perfil_Profesional` on GitHub, branch `main`, deployed to Railway.

## Developer commands (run in `AQPortfolio/`)
- `npm run dev` — Vite dev server
- `npm run build` — production build
- `npm run preview` — serves the built app (matches the Dockerfile entrypoint)
- `npm run lint` — ESLint (flat config); **there is no test or typecheck script** (plain JS/JSX)

## Architecture
- One folder per page section under `src/components/<sectionName>/` (e.g. `heroSection`, `experienceSection`, `contactMeSection`, `projectsSection`, `skillsSection`, `hackathon`, `navbar`, `footer`). A `<section>Main.jsx` composes each section.
- Portfolio content (projects, experience, skills, hackathon images) is **hardcoded inline** in the section components — there is no central data file. Edit content there.
- State: Redux Toolkit with a single `menu` slice (`src/state/store.js`) used only for the mobile-menu toggle.
- Animation: `framer-motion`; shared variants live in `src/framerMotion/variantsSwipe.js`.
- AI chat widget: `src/components/agenteIa/`. It calls an external FastAPI backend. The URL is **hardcoded** in `src/services/api.js` (and again in `chatWindow.jsx`) as `https://gemini-chat-backend-bhjk.onrender.com`. The backend is often cold-started (slow first response) and requests time out after 30s (`REQUEST_TIMEOUT` in `api.js`).

## Tailwind gotcha (verified)
`tailwind.config.js` defines `theme.colors` at top level, which **replaces** the default Tailwind palette (it is not under `extend`). The custom names only (brown, lightBrown, darkBrown, black, white, cyan, magenta, orange, grey, and `light*`/`dark*` variants).
- Confirmed against the built `dist/assets/*.css`: utilities like `bg-gray-900`, `bg-gray-800`, `bg-red-500`, `border-red-500` are **not generated**.
- `src/components/agenteIa/chatWindow.jsx` uses `bg-gray-900/95`, `bg-gray-800/50`, `bg-red-500/20`, etc., so those classes silently produce no styles. When touching that file, use custom palette names or arbitrary values instead.
- daisyui and bootstrap are installed but styling is almost entirely raw Tailwind.

## Conventions
- UI strings and in-code comments are predominantly Spanish — keep new UI text in Spanish.
- `dist/` is a local build artifact (untracked, gitignored). Do not edit it.

## Gotchas
- `.gitignore` contains **unresolved merge-conflict markers** (`<<<<<<< HEAD` / `>>>>>>> b7f899f`). Fix/clean those lines before relying on it.
- `.env` exists locally with `SERVICE_ID`/`TEMPLETE_ID`, but it is **not wired into the code**: the EmailJS service/template IDs and `publicKey` (`sR6WVtXv2corXYgo3`) are hardcoded in `src/components/contactMeSection/ContactForm.jsx`; the env-based variants are commented out. Do not expect `.env` changes to take effect. If you want to rotate those secrets, update the source directly.
- Deploy: `Dockerfile` builds then serves via `npx vite preview --host 0.0.0.0 --port 3000`. `vite.config.js` `preview.allowedHosts` whitelists `perfilprofesional-production-2e21.up.railway.app`; add a new host there if previewing from another domain.
