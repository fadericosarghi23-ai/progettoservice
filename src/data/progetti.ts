/**
 * LAVORI (galleria). 2 categorie e 7 lavori reali di Progetto Service, con le foto del sito attuale
 * (progettoservicesrl.it/gallery). Niente dati inventati: luogo generico "Crema e provincia",
 * nessun anno. I testi descrivono ciò che si vede nella foto.
 */
import type { Img } from '../lib/media';

export type CategoriaId = 'cat-1' | 'cat-2';

export type Categoria = {
  id: CategoriaId;
  slug: string;
  nome: string;
  etichetta: string;
  intro: string;
  title: string;
  description: string;
};

export const categorie: Categoria[] = [
  {
    id: 'cat-1',
    slug: 'interni',
    nome: 'Ristrutturazioni e interni',
    etichetta: 'Interni',
    intro: 'Ristrutturazioni complete di appartamenti e case: pavimenti, cucine, open space, corridoi, cartongesso e illuminazione.',
    title: 'Ristrutturazioni e interni | Progetto Service',
    description: 'Ristrutturazioni complete di interni a Crema e provincia: pavimenti, cucine, open space, cartongesso e illuminazione.',
  },
  {
    id: 'cat-2',
    slug: 'bagni',
    nome: 'Bagni',
    etichetta: 'Bagni',
    intro: 'Rifacimento completo di bagni: rivestimenti in gres effetto pietra e marmo, docce a filo pavimento e sanitari sospesi.',
    title: 'Rifacimento bagni | Progetto Service',
    description: 'Rifacimento completo di bagni a Crema e provincia: rivestimenti, docce a filo pavimento e sanitari sospesi.',
  },
];

export const categoria = (id: CategoriaId) => categorie.find((c) => c.id === id)!;

export type Progetto = {
  slug: string;
  titolo: string;
  luogo: string;
  categoria: CategoriaId;
  categorie: CategoriaId[];
  intervento: string;
  progettisti?: string[];
  importo?: string;
  temi: string[];
  referente: string;
  paragrafi: string[];
  immagini: Img[];
};

const img = (src: string, width: number, height: number, alt: string): Img => ({ src, width, height, alt });

type Riga = [slug: string, cat: CategoriaId, titolo: string, tipologia: string, file: string, w: number, h: number, paragrafo: string];

const R: Riga[] = [
  ['ingresso-corridoio', 'cat-1', 'Ingresso e corridoio', 'Interni', 'lavoro-01', 1200, 1600,
    'Corridoio e ingresso con pavimento in parquet, faretti a incasso e porte filomuro.'],
  ['cucina', 'cat-1', 'Cucina e zona giorno', 'Interni', 'lavoro-02', 1536, 2048,
    'Cucina con pavimento in gres effetto legno e parete decorativa, affacciata sulla zona giorno con vetrata scorrevole.'],
  ['open-space', 'cat-1', 'Open space', 'Interni', 'lavoro-06', 1600, 1600,
    'Zona giorno open space con pavimento in rovere, pareti chiare e parete vetrata.'],
  ['corridoio-led', 'cat-1', 'Corridoio con illuminazione LED', 'Interni', 'lavoro-07', 1200, 1600,
    'Corridoio con controsoffitto in cartongesso, cornici e illuminazione LED a soffitto.'],
  ['bagno-pietra', 'cat-2', 'Bagno effetto pietra', 'Bagni', 'lavoro-04', 1200, 1600,
    'Bagno con rivestimento in gres effetto pietra, doccia a filo pavimento, rubinetteria e sanitari sospesi neri.'],
  ['bagno-marmo', 'cat-2', 'Bagno in marmo', 'Bagni', 'lavoro-05', 1200, 1600,
    'Bagno con rivestimento effetto marmo e doccia a filo pavimento con piatto a mosaico.'],
  ['bagno-lavabo', 'cat-2', 'Bagno con lavabo d’appoggio', 'Bagni', 'lavoro-08', 1200, 1600,
    'Bagno con rivestimento effetto pietra, lavabo d’appoggio, specchio tondo e illuminazione LED.'],
];

export const progetti: Progetto[] = R.map(([slug, cat, titolo, tipologia, file, w, h, par]) => ({
  slug,
  titolo,
  luogo: 'Crema e provincia',
  categoria: cat,
  categorie: [cat],
  intervento: tipologia,
  temi: [tipologia],
  referente: '',
  paragrafi: [par],
  immagini: [img(`/img/lavori/${file}.jpg`, w, h, `${titolo} — Progetto Service, Crema`)],
}));

export const progetto = (slug: string) => progetti.find((p) => p.slug === slug)!;
export const copertina = (p: Progetto) => p.immagini[0];
export const inCategoria = (id: CategoriaId) => progetti.filter((p) => p.categorie.includes(id));
