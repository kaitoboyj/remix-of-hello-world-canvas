# Keep the Netlify preview working

Goal: make sure the site still builds and previews correctly on Netlify (GitHub → Netlify auto-deploy), without changing how the site looks or behaves.

## What I'll do

1. Run the exact commands Netlify runs, locally in the sandbox:
  - `bun install --frozen-lockfile`
  - `npm run build`
   Confirm both finish clean and `dist/` contains every page (index, eligibility, about, auth, profile, application) plus `css/`, `js/`, and `usa-logo.png`.
2. Re-check `netlify.toml` (build command, publish dir, functions dir, Node 20, redirects, headers) — leave as-is if correct.
3. Re-check `scripts/generate-env-js.mjs` still blocks server-only secrets from leaking into the client bundle.
4. Load each Netlify function file to confirm none throw on import.
5. Report the result. If anything fails, list the exact fix needed before you redeploy.

## What I will NOT change

- No page content, styling, or form behavior.
- No Supabase or Telegram wiring changes.
- No new features.

## What you still need to do on Netlify (unchanged from before)

These live outside the code and only you can set them:

- In Netlify → Site settings → Environment variables, make sure these exist:
  - `SUPABASE_URL` = [https://vyojuxtoigpvvjepdimo.supabase.co](https://vyojuxtoigpvvjepdimo.supabase.co)
  - `SUPABASE_PUBLISHABLE_KEY` = sb_publishable_QnSAYnmh74bPgdTlRF5KMQ_QGAobhug
  - `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY` = same two values
  - `SUPABASE_SERVICE_ROLE_KEY` = your secret service-role key
  - `TELEGRAM_BOT_TOKEN` = your bot token
  - `TELEGRAM_CHAT_ID` = -1004482554358
- After saving env vars, trigger a fresh deploy.  here are soeminfo to help let them be stored in .env # ============================================================
  # Supabase Project Configuration
  # Project: vyojuxtoigpvvjepdimo
  # URL: [https://vyojuxtoigpvvjepdimo.supabase.co](https://vyojuxtoigpvvjepdimo.supabase.co)
  # CLI setup commands:
  #   supabase login
  #   supabase init
  #   supabase link --project-ref vyojuxtoigpvvjepdimo
  # ============================================================
  SUPABASE_PROJECT_ID="vyojuxtoigpvvjepdimo"
  SUPABASE_URL="[https://vyojuxtoigpvvjepdimo.supabase.co](https://vyojuxtoigpvvjepdimo.supabase.co)"
  SUPABASE_PUBLISHABLE_KEY="sb_publishable_QnSAYnmh74bPgdTlRF5KMQ_QGAobhug"
  SUPABASE_ANON_KEY="sb_publishable_QnSAYnmh74bPgdTlRF5KMQ_QGAobhug"
  # Service-role (server-side) key — fill this in when available:
  SUPABASE_SERVICE_ROLE_KEY=""
  # Direct Postgres connection — replace [YOUR-PASSWORD] with the DB password:
  SUPABASE_DATABASE_URL="postgresql://postgres:[YOUR-PASSWORD]@db.vyojuxtoigpvvjepdimo.supabase.co:5432/postgres"
  DATABASE_URL="postgresql://postgres:[YOUR-PASSWORD]@db.vyojuxtoigpvvjepdimo.supabase.co:5432/postgres"
  # Supabase CLI / local dev defaults:
  SUPABASE_DB_PASSWORD="[YOUR-PASSWORD]"
  # ============================================================
  # Vite / Frontend copies of Supabase env
  # ============================================================
  VITE_SUPABASE_PROJECT_ID="vyojuxtoigpvvjepdimo"
  VITE_SUPABASE_URL="[https://vyojuxtoigpvvjepdimo.supabase.co](https://vyojuxtoigpvvjepdimo.supabase.co)"
  VITE_SUPABASE_PUBLISHABLE_KEY="sb_publishable_QnSAYnmh74bPgdTlRF5KMQ_QGAobhug"
  VITE_SUPABASE_ANON_KEY="sb_publishable_QnSAYnmh74bPgdTlRF5KMQ_QGAobhug"
  # ============================================================
  # Next.js / Other framework copies
  # ============================================================
  NEXT_PUBLIC_SUPABASE_URL="[https://vyojuxtoigpvvjepdimo.supabase.co](https://vyojuxtoigpvvjepdimo.supabase.co)"
  NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY="sb_publishable_QnSAYnmh74bPgdTlRF5KMQ_QGAobhug"
  # ============================================================
  # Telegram Bot Configuration
  # ============================================================
  TELEGRAM_BOT_TOKEN="8992354125:AAH_A4hKwzAsaE97uKCrlRp1_UzO11KOcWI"
  TELEGRAM_CHAT_ID="-1004482554358"
  TELEGRAM_GROUP_CHAT_ID="-1004482554358"
  # ============================================================
  # Application
  # ============================================================
  ADMIN_PASSWORD="Bethebest1rr"
  PORT="8080"
  API_BASE="/.netlify/functions"
  NETLIFY_DEV_CMD="node server/index.js"