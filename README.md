# Progetto Service — sito web

Sito dell'impresa edile **Progetto Service S.r.l.** (Crema, CR): ristrutturazioni chiavi in mano.
Costruito con [Astro](https://astro.build) 5, statico e senza framework CSS. Deploy su Netlify.

## Sviluppo

```bash
npm install
npm run dev      # http://localhost:4720
npm run build    # genera dist/
npm run preview  # anteprima della build
```

## Struttura

- `src/data/` — contenuti e identità (`site.ts`, `servizi.ts`, `progetti.ts`, `team.ts`, `contenuti.ts`, `nav.ts`)
- `src/pages/` — pagine (home, chi siamo, servizi, valori, lavori, contatti, privacy, cookie)
- `src/components/` e `src/layouts/` — componenti e layout
- `src/styles/global.css` — design system e palette (token verdi del marchio)
- `public/img/` — logo e foto dei lavori

## Deploy (Netlify)

Configurato in `netlify.toml`: build `npm run build`, pubblicazione della cartella `dist`, Node 20.
Il dominio canonico arriva dalla variabile `URL` di Netlify (in locale è il segnaposto in
`astro.config.mjs` e `src/data/site.ts`).

## Da collegare

- **Modulo contatti**: oggi apre il programma di posta (`mailto`). Per riceverlo via web, imposta
  `site.form` in `src/data/site.ts` (Netlify Forms oppure Formspree).
