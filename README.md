# Codex Fähigkeitsübersicht

Statisch gerenderte Next.js-App, die beantwortet, was der Codex-Entwickleragent leisten kann.

## 🚀 Quickstart

```bash
npm install
npm run dev
```

Öffne `http://localhost:3000`, um die Seite lokal zu sehen.

## 🧱 Tech Stack

- Next.js 14 (App Router, statische Auslieferung)
- TypeScript & React 18
- CSS-Modules via globale Styles

## 📂 Wichtige Verzeichnisse

- `app/` – App Router Seiten (`layout.tsx`, `page.tsx`)
- `app/globals.css` – Styling samt responsive Layout
- `public/` – Platz für Assets (falls benötigt)

## 🧪 Nützliche Scripts

- `npm run dev` – Entwicklungsserver mit HMR
- `npm run build` – Produktionsbuild (inkl. Lint & Type-Check)
- `npm run start` – Startet den Production-Server
- `npm run lint` – Führt ESLint mit Next.js Preset aus

## 🌐 Deployment

Das Projekt wird auf Vercel mit `vercel deploy --prod` ausgeliefert. Die Live-Instanz ist unter `https://agentic-c6e6c6ec.vercel.app` erreichbar.
