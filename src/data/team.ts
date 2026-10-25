/**
 * Team. Progetto Service è guidata dal titolare Giovanni, con una squadra dall'esperienza
 * ventennale. Il sito attuale non pubblica i nomi dei singoli collaboratori.
 */
import type { Img } from '../lib/media';

export type Membro = { id: string; nome: string; ruolo: string; foto: Img; bio?: string };

export const team: Membro[] = [
  {
    id: 'giovanni',
    nome: 'Giovanni',
    ruolo: 'Titolare',
    foto: { src: '/img/lavori/lavoro-03.jpg', width: 750, height: 1334, alt: 'Progetto Service — il titolare Giovanni' },
    bio: 'Titolare di Progetto Service, con un’esperienza trentennale nel settore edile delle costruzioni. Guida una squadra dall’esperienza ventennale, così da seguire ogni cliente con un unico referente responsabile, in modo veloce, pratico e sicuro.',
  },
];

export const membro = (id: string) => team.find((m) => m.id === id);
