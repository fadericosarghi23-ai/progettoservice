/**
 * IDENTITÀ DEL CLIENTE — unico punto da cui header, footer, contatti, JSON-LD,
 * meta, privacy, cookie, robots e llms.txt leggono i dati dell'azienda.
 *
 * Progetto Service S.r.l.: dati dal sito attuale www.progettoservicesrl.it.
 * Impresa edile con un'unica sede a Crema (CR) — la base aveva due sedi (site.sede2): rimossa.
 */

export const site = {
  /** Nome breve usato ovunque (title, header, footer, JSON-LD) */
  nome: 'Progetto Service',
  /** Denominazione completa/ragione sociale (JSON-LD legalName, privacy). Vuota = non resa. */
  ragioneSociale: 'Progetto Service S.r.l.',
  /** Varianti del nome (JSON-LD alternateName) */
  nomiAlternativi: ['Progetto Service Srl', 'Progetto Service impresa edile'],
  /** Alt del logo: nome + attività */
  logoAlt: 'Progetto Service — impresa edile a Crema',
  /** Tipo di attività in 2-4 parole, usato in eyebrow e meta */
  attivita: 'Impresa edile',
  /** Slogan breve (JSON-LD slogan, footer) */
  slogan: 'Ristrutturazioni chiavi in mano',
  /** Descrizione dell'azienda in 1 frase (meta description di default, JSON-LD, llms.txt) */
  descrizione:
    'Progetto Service è un’impresa edile di Crema (CR): ristrutturazioni complete, bagni, tetti, cartongesso e manutenzioni chiavi in mano a Crema, Lodi, Milano e provincia.',
  /** Frase del footer sotto il logo */
  footerClaim: 'Professionalità, serietà e celerità, con la formula chiavi in mano.',

  // ── Dominio e tecnici ───────────────────────────────────────────────
  /** Dominio canonico SENZA slash finale. Tenere allineato con SITE_URL in astro.config.mjs */
  dominio: 'https://www.progettoservicesrl.it',
  /** Colore della barra del browser: deve coincidere con --accent in global.css */
  themeColor: '#17564c',
  /** Codice ISO regione/provincia per meta geo.region */
  geoRegion: 'IT-CR',

  // ── Contatti ────────────────────────────────────────────────────────
  email: 'info@progettoservicesrl.com',
  /** Telefono come si legge a schermo (è anche il numero WhatsApp). Vuoto = righe telefono non rese. */
  telefono: '345 227 7117',
  /** Telefono per i link tel:/wa.me in formato E.164 senza spazi */
  telefonoE164: '+393452277117',
  /** PEC e P.IVA: vuote = non rese. */
  pec: 'srlprogettoservice@legalmail.it',
  piva: '01584290199',

  indirizzo: {
    via: 'Via IV Novembre 10',
    cap: '26013',
    citta: 'Crema',
    provincia: 'CR',
    paese: 'IT',
  },
  /** Zona/quartiere in cui si trova l'azienda (testo libero per "Dove siamo") */
  zona: 'Crema e provincia',
  /** Coordinate per la mappa OpenStreetMap (Crema, Via IV Novembre) */
  geo: { lat: 45.3626, lng: 9.6836 } as null | { lat: number; lng: number },
  /** Link "Apri in Google Maps / Indicazioni stradali" */
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Via%20IV%20Novembre%2010%2C%2026013%20Crema%20CR',
  /** Modalità di ricevimento (pagina contatti) */
  ricevimento: 'Dal lunedì al sabato, 8:00–18:30',

  /** Social: array vuoto per nascondere il blocco. icona: 'facebook' | 'instagram' | 'linkedin' */
  social: [
    { nome: 'Facebook', url: 'https://www.facebook.com/progettoservicesrldiGiovanniCairelli', icona: 'facebook' },
    { nome: 'Instagram', url: 'https://www.instagram.com/progettoservicesrlimpresaedile/', icona: 'instagram' },
  ] as { nome: string; url: string; icona: 'facebook' | 'instagram' | 'linkedin' }[],

  /** Aree servite (JSON-LD areaServed, llms.txt) */
  areeServite: [
    { tipo: 'City', nome: 'Crema' },
    { tipo: 'City', nome: 'Lodi' },
    { tipo: 'City', nome: 'Milano' },
    { tipo: 'AdministrativeArea', nome: 'Provincia di Cremona' },
  ],
  /** Competenze (JSON-LD knowsAbout) */
  competenze: [
    'Ristrutturazioni complete',
    'Rifacimento bagni',
    'Rifacimento tetti',
    'Opere in cartongesso',
    'Tinteggiature e trattamenti antimuffa',
    'Opere idrauliche ed elettriche',
    'Piscine da esterno',
    'Pratiche fiscali ed ENEA',
  ],

  /** Form contatti. endpoint vuoto + mailto: il form apre il programma di posta verso l'email.
   *  [[DA COMPILARE: collegamento del form (Netlify Forms o endpoint) da concordare col cliente]] */
  form: {
    netlify: false,
    endpoint: '',
    mailto: 'info@progettoservicesrl.com',
  },

  /** Analytics/pixel: nessuno */
  analytics: null as null | string,

  /** Anno per il copyright */
  anno: new Date().getFullYear(),
};

export const indirizzoRiga = `${site.indirizzo.via}, ${site.indirizzo.cap} ${site.indirizzo.citta}`;
export const abs = (p: string) => site.dominio + p;
