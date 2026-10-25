/**
 * Contenuti ripetuti o in lista (home, chi siamo, valori). I testi delle pagine sono nei .astro.
 * La rotta /metodo/ ospita "I nostri valori" (P.S.C.) e l'elenco delle lavorazioni.
 */
import type { Img } from '../lib/media';
import { progetto } from './progetti';

const img = (src: string, width: number, height: number, alt: string): Img => ({ src, width, height, alt });

/** Carosello hero della home: 5 slide */
export const heroSlides = [
  { href: '/progetti/', titolo: 'Ristrutturazioni chiavi in mano', luogo: 'Crema · Lodi · Milano', img: img('/img/home/hero.jpg', 1600, 900, 'Interni ristrutturati da Progetto Service') },
  { href: '/progetti/open-space/', titolo: progetto('open-space').titolo, luogo: progetto('open-space').luogo, img: progetto('open-space').immagini[0] },
  { href: '/progetti/bagno-marmo/', titolo: progetto('bagno-marmo').titolo, luogo: progetto('bagno-marmo').luogo, img: progetto('bagno-marmo').immagini[0] },
  { href: '/progetti/cucina/', titolo: progetto('cucina').titolo, luogo: progetto('cucina').luogo, img: progetto('cucina').immagini[0] },
  { href: '/progetti/corridoio-led/', titolo: progetto('corridoio-led').titolo, luogo: progetto('corridoio-led').luogo, img: progetto('corridoio-led').immagini[0] },
];

/** Lavori nella griglia della home (6) */
export const progettiHome = ['open-space', 'bagno-marmo', 'cucina', 'ingresso-corridoio', 'bagno-pietra', 'corridoio-led'];

/** Numeri (home: 4 card sotto "Chi siamo") */
export const numeriHome = [
  { n: '2013', label: 'Anno di fondazione' },
  { n: '30+', label: 'Anni di esperienza' },
  { n: '100%', label: 'Chiavi in mano' },
  { n: 'P.S.C.', label: 'I nostri valori' },
];

/** Numeri (pagina Chi siamo) */
export const numeriStudio = [
  { n: '2013', label: 'Dalla fondazione' },
  { n: '30+', label: 'Anni di esperienza' },
  { n: '1', label: 'Referente responsabile' },
  { n: '360°', label: 'Servizi a privati e aziende' },
];

/** Card con foto (home + /metodo/): i valori P.S.C. e la formula chiavi in mano */
export const tappe = [
  {
    titolo: 'Professionalità',
    testo: 'Interveniamo con serietà e professionalità, garantendo affidabilità su tutte le lavorazioni, i prodotti e i servizi.',
    img: progetto('ingresso-corridoio').immagini[0],
  },
  {
    titolo: 'Serietà',
    testo: 'Un unico referente responsabile segue il cliente dall’inizio alla fine del lavoro, in modo veloce, pratico e sicuro.',
    img: progetto('open-space').immagini[0],
  },
  {
    titolo: 'Celerità',
    testo: 'Rispettiamo tempi e impegni, con una squadra dall’esperienza ventennale pronta a soddisfare ogni esigenza.',
    img: progetto('cucina').immagini[0],
  },
  {
    titolo: 'Chiavi in mano',
    testo: 'Lavoriamo con la formula "chiavi in mano" e vi facciamo usufruire del recupero fiscale sulle ristrutturazioni.',
    img: progetto('bagno-marmo').immagini[0],
  },
];

/** Elenco delle lavorazioni (/metodo/) */
export const fasi = [
  { titolo: 'Ristrutturazioni complete', testo: 'Interventi completi chiavi in mano su appartamenti e case.' },
  { titolo: 'Rifacimento bagni', testo: 'Bagni completi: impianti, rivestimenti, docce e sanitari.' },
  { titolo: 'Tinteggiature speciali', testo: 'Tinteggiature con varie tecniche decorative.' },
  { titolo: 'Tinteggiature antimuffa', testo: 'Trattamenti antimuffa per ambienti sani.' },
  { titolo: 'Rifacimento tetti', testo: 'Coperture, isolamento termico e impermeabilizzazione.' },
  { titolo: 'Opere in cartongesso', testo: 'Controsoffitti, pareti e illuminazione LED.' },
  { titolo: 'Opere idrauliche ed elettriche', testo: 'Impianti realizzati con prodotti di alta qualità.' },
  { titolo: 'Piscine da esterno', testo: 'Progettazione e realizzazione di piscine da esterno.' },
  { titolo: 'Pratiche fiscali ed ENEA', testo: 'Gestione delle detrazioni fiscali e delle pratiche ENEA.' },
];

/** Dove lavoriamo (home, fondo scuro) */
export const aree = [
  { conteggio: 'Sede', nome: 'Crema', comuni: 'Via IV Novembre 10 — Crema (CR) e provincia di Cremona' },
  { conteggio: 'Zona', nome: 'Lodi', comuni: 'Lodi e provincia' },
  { conteggio: 'Zona', nome: 'Milano', comuni: 'Milano e hinterland' },
];

/** Approccio: 3 punti (pagina Chi siamo) — P.S.C. */
export const approccio = [
  { titolo: 'Professionalità', testo: 'Interveniamo con serietà e professionalità, garantendo affidabilità su tutte le lavorazioni, i prodotti e i servizi.' },
  { titolo: 'Serietà', testo: 'Un solo interlocutore responsabile segue il cliente in modo veloce, pratico e sicuro.' },
  { titolo: 'Celerità', testo: 'Rispettiamo tempi e impegni, con competenza di alto livello e prezzi sempre competitivi.' },
];

/** Elenco competenze (pagina Chi siamo) */
export const competenzeStudio = [
  'Ristrutturazioni complete chiavi in mano',
  'Rifacimento bagni',
  'Rifacimento tetti e coperture',
  'Opere in cartongesso e controsoffitti',
  'Tinteggiature e trattamenti antimuffa',
  'Opere idrauliche ed elettriche',
  'Piscine da esterno',
  'Gestione pratiche fiscali ed ENEA',
];

/** FAQ: nessuna. */
export const faq: { d: string; r: string }[] = [];
export const FAQ_COL1 = 5;

/** CTA in fondo alle pagine */
export const cta = {
  eyebrow: 'Contatti',
  titolo: 'Contattaci per un preventivo gratuito',
  testo: 'Siamo a disposizione per qualsiasi esigenza edilizia. Contattaci senza impegno per un sopralluogo e un preventivo gratuito.',
};
