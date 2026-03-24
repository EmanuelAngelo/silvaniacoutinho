import type { Photo } from '@/types/entities'
import { media } from '@/content/media'

export const implantesPhotos: Photo[] = [
  {
    id: 'p7',
    title: 'Implantes dentários',
    category: 'implantes',
    imageUrl: media.areas.implantes[0],
    description: 'Reabilitação com segurança para devolver função e estética ao sorriso.',
    featured: true,
    order: 20,
  },
  {
    id: 'p8',
    title: 'Reabilitação oral',
    category: 'implantes',
    imageUrl: media.areas.implantes[1],
    description: 'Planejamento completo para conforto ao falar, sorrir e mastigar.',
    featured: false,
    order: 21,
  },
  {
    id: 'p9',
    title: 'Acompanhamento pós-procedimento',
    category: 'implantes',
    imageUrl: media.areas.implantes[2],
    description: 'Cuidados e revisões para uma recuperação tranquila e duradoura.',
    featured: false,
    order: 22,
  },
]
