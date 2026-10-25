/**
 * SERVIZI (6). Dalle lavorazioni del sito attuale di Progetto Service ("CI OCCUPIAMO DI").
 * foto/correlati puntano ai lavori della galleria (src/data/progetti.ts).
 */
import type { Icona } from './icone';
import type { CategoriaId } from './progetti';

export type Servizio = {
  id: string;
  nome: string;
  breve: string;
  icona: Icona;
  paragrafi: [string, string];
  punti: string[];
  foto: string;
  correlati: string[];
  categoria: CategoriaId;
};

export const servizi: Servizio[] = [
  {
    id: 'ristrutturazioni',
    nome: 'Ristrutturazioni complete',
    breve: 'Ristrutturazioni chiavi in mano di appartamenti e case, dalla demolizione alle finiture.',
    icona: 'telaio',
    paragrafi: [
      'Ci occupiamo di ristrutturazioni complete con la formula "chiavi in mano": un unico referente responsabile segue il cantiere dall’inizio alla fine, in modo veloce, pratico e sicuro.',
      'Dalle piccole manutenzioni ordinarie e straordinarie agli ampliamenti e alla nuova costruzione di edifici residenziali, direzionali e industriali.',
    ],
    punti: [
      'Manutenzioni ordinarie e straordinarie',
      'Ristrutturazioni complete',
      'Ampliamenti',
      'Nuove costruzioni',
      'Edifici residenziali, direzionali e industriali',
    ],
    foto: 'open-space',
    correlati: ['open-space', 'cucina', 'ingresso-corridoio'],
    categoria: 'cat-1',
  },
  {
    id: 'bagni',
    nome: 'Rifacimento bagni',
    breve: 'Rifacimento completo del bagno: impianti, rivestimenti, docce a filo pavimento e sanitari.',
    icona: 'divano',
    paragrafi: [
      'Realizziamo il bagno completo, dalla demolizione agli impianti idraulici ed elettrici, fino alla posa di rivestimenti e sanitari.',
      'Rivestimenti in gres effetto pietra o marmo, docce a filo pavimento, rubinetteria e sanitari sospesi, con prodotti di alta qualità.',
    ],
    punti: [
      'Demolizione e rifacimento impianti',
      'Rivestimenti in gres e marmo',
      'Docce a filo pavimento',
      'Sanitari sospesi',
      'Illuminazione e finiture',
    ],
    foto: 'bagno-marmo',
    correlati: ['bagno-pietra', 'bagno-marmo', 'bagno-lavabo'],
    categoria: 'cat-2',
  },
  {
    id: 'tetti',
    nome: 'Rifacimento tetti',
    breve: 'Rifacimento di tetti e coperture con materiali di alta qualità.',
    icona: 'ponte',
    paragrafi: [
      'Eseguiamo il rifacimento di tetti e coperture, con attenzione all’isolamento termico e all’impermeabilizzazione.',
      'Interveniamo su edifici residenziali e condominiali, utilizzando solo prodotti di alta qualità.',
    ],
    punti: [
      'Rifacimento coperture',
      'Isolamento termico',
      'Impermeabilizzazione',
      'Lattoneria',
    ],
    foto: 'open-space',
    correlati: ['open-space', 'corridoio-led', 'cucina'],
    categoria: 'cat-1',
  },
  {
    id: 'cartongesso',
    nome: 'Cartongesso e controsoffitti',
    breve: 'Opere in cartongesso: controsoffitti, pareti e illuminazione LED integrata.',
    icona: 'treppiede',
    paragrafi: [
      'Realizziamo controsoffitti, pareti divisorie, nicchie e velette in cartongesso, con integrazione dell’illuminazione LED.',
      'Soluzioni su misura per ridisegnare gli spazi e nascondere gli impianti.',
    ],
    punti: [
      'Controsoffitti',
      'Pareti divisorie',
      'Nicchie e velette',
      'Illuminazione LED integrata',
    ],
    foto: 'corridoio-led',
    correlati: ['corridoio-led', 'ingresso-corridoio', 'open-space'],
    categoria: 'cat-1',
  },
  {
    id: 'tinteggiature',
    nome: 'Tinteggiature e decorazioni',
    breve: 'Tinteggiature con varie tecniche speciali e trattamenti antimuffa.',
    icona: 'pianta',
    paragrafi: [
      'Tinteggiature di interni ed esterni con varie tecniche speciali e decorative.',
      'Trattamenti antimuffa per ambienti sani e duraturi, con finiture di pregio.',
    ],
    punti: [
      'Tinteggiature civili',
      'Tecniche decorative speciali',
      'Trattamenti antimuffa',
      'Finiture di pregio',
    ],
    foto: 'cucina',
    correlati: ['cucina', 'open-space', 'ingresso-corridoio'],
    categoria: 'cat-1',
  },
  {
    id: 'impianti-pratiche',
    nome: 'Impianti e pratiche fiscali',
    breve: 'Opere idrauliche ed elettriche, piscine da esterno e gestione delle pratiche di detrazione.',
    icona: 'casco',
    paragrafi: [
      'Realizziamo opere idrauliche ed elettriche e piscine da esterno, utilizzando solo prodotti di alta qualità.',
      'Gestiamo le pratiche per le detrazioni fiscali e le pratiche ENEA, per farvi usufruire del recupero fiscale sulle ristrutturazioni.',
    ],
    punti: [
      'Opere idrauliche',
      'Opere elettriche',
      'Piscine da esterno',
      'Gestione pratiche detrazioni fiscali',
      'Gestione pratiche ENEA',
    ],
    foto: 'bagno-pietra',
    correlati: ['bagno-pietra', 'corridoio-led', 'open-space'],
    categoria: 'cat-2',
  },
];
