# Solace — Daily Journal (UI Prototype)

A React + Vite front-end prototype of a sage-green daily journaling app: home screen with a mood tracker and quote of the day, a "write freely / guided reflection" journal composer with a voice-note mock, quick-action cards, an insights screen, and a pill-shaped bottom nav bar. All data is fake/local — nothing is persisted or sent anywhere.

## Run it locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview   # optional local check of the production build
```

## Deploy to Vercel via GitHub

1. Create a new GitHub repo and push this folder to it:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Solace journal UI"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```
2. Go to [vercel.com/new](https://vercel.com/new) and import that GitHub repo.
3. Vercel auto-detects Vite. Keep the defaults:
   - **Build command:** `vite build`
   - **Output directory:** `dist`
4. Click **Deploy**. You'll get a live URL in about a minute.

## What's included

- `src/components/Home.jsx` — greeting header, quote card, mood tracker, quick actions, recent entries
- `src/components/MoodTracker.jsx` — weekly mood strip with a tap-to-log picker (5 moods, animated)
- `src/components/JournalEntry.jsx` — the write/guided composer sheet with a voice-note recording mock
- `src/components/NavBar.jsx` — the pill-shaped bottom nav with a sliding active indicator
- `src/components/Insights.jsx`, `Desires.jsx`, `JournalList.jsx` — the other three nav tabs
- `src/data/fakeData.js` — all the placeholder content (quotes, entries, prompts)

## Notes

- Built with React 18, Vite, [Framer Motion](https://www.framer.com/motion/) for the micro-interactions, and [Lucide](https://lucide.dev/) for icons.
- The layout is wrapped in a phone-frame mockup for desktop viewing; on narrow screens it fills the viewport.
- No backend — swap `src/data/fakeData.js` and the `App.jsx` state handlers for real API calls when you're ready.
