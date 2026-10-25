/** llms.txt generato dai dati: nessun testo da tenere allineato a mano. */
import type { APIRoute } from 'astro';
import { site, abs, indirizzoRiga } from '../data/site';
import { servizi } from '../data/servizi';
import { team } from '../data/team';
import { categorie, inCategoria, progetti } from '../data/progetti';

export const GET: APIRoute = () => {
  const righe = [
    `# ${site.nome}`,
    '',
    `> ${site.descrizione}`,
    '',
    '## Informazioni',
    '',
    `- Nome: ${site.ragioneSociale || site.nome}`,
    `- Sito: ${abs('/')}`,
    `- Sede: ${indirizzoRiga} (${site.indirizzo.provincia}), Italia`,
    ...(site.telefono ? [`- Telefono / WhatsApp: ${site.telefono}`] : []),
    `- Email: ${site.email}`,
    ...(site.pec ? [`- PEC: ${site.pec}`] : []),
    ...(site.piva ? [`- P.IVA: ${site.piva}`] : []),
    ...site.social.map((s) => `- ${s.nome}: ${s.url}`),
    `- Aree servite: ${site.areeServite.map((a) => a.nome).join(', ')}`,
    `- Orari: ${site.ricevimento}`,
    `- Titolare: ${team.map((m) => `${m.nome} (${m.ruolo})`).join(', ')}`,
    '',
    '## Pagine principali',
    '',
    `- [Home](${abs('/')}): presentazione, servizi, valori, lavori in evidenza e contatti.`,
    `- [Chi siamo](${abs('/studio/')}): l'azienda, il titolare, la squadra e i valori.`,
    `- [Servizi](${abs('/servizi/')}): tutte le lavorazioni dell'impresa.`,
    `- [Valori](${abs('/metodo/')}): professionalità, serietà, celerità e l'elenco delle lavorazioni.`,
    `- [Lavori](${abs('/progetti/')}): la galleria dei lavori, per categoria.`,
    `- [Contatti](${abs('/contatti/')}): email, telefono, mappa e modulo di contatto.`,
    '',
    '## Servizi',
    '',
    ...servizi.map((s) => `- [${s.nome}](${abs(`/servizi/#${s.id}`)}): ${s.breve}`),
    ...categorie.flatMap((c) => ['', `## Lavori — ${c.nome}`, '', ...inCategoria(c.id).map((p) => `- [${p.titolo}](${abs(`/progetti/${p.slug}/`)}): ${p.intervento}. ${p.luogo}.`)]),
    '',
  ];
  return new Response(righe.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
