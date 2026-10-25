import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Dominio canonico di Progetto Service. Su Netlify arriva dalla variabile di build URL;
// in locale resta questo. Tenerlo allineato con `dominio` in src/data/site.ts.
export const SITE_URL = (process.env.URL || 'https://www.progettoservicesrl.it').replace(/\/$/, '');

export default defineConfig({
  site: SITE_URL,
  // 'ignore': i link restano con lo slash finale (build a cartelle), ma il dev serve anche
  // le rotte con estensione (src/pages/img/placeholder/[id].svg.ts) senza slash.
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/grazie/') && !page.includes('/404'),
    }),
  ],
});
