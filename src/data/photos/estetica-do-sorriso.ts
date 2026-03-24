import type { Photo } from '@/types/entities'
import { media } from '@/content/media'

export const esteticaDoSorrisoPhotos: Photo[] = [
  {
    id: 'p10',
    title: 'Lentes de contato dental',
    category: 'estetica-do-sorriso',
    imageUrl: media.areas.esteticaDoSorriso[0],
    description: 'Estética do sorriso com planejamento para naturalidade e harmonia.',
    featured: true,
    order: 30,
  },
  {
    id: 'p11',
    title: 'Harmonia do sorriso',
    category: 'estetica-do-sorriso',
    imageUrl: media.areas.esteticaDoSorriso[1],
    description: 'Avaliação do formato, cor e proporção para um resultado equilibrado.',
    featured: false,
    order: 31,
  },
  {
    id: 'p12',
    title: 'Planejamento estético',
    category: 'estetica-do-sorriso',
    imageUrl: media.areas.esteticaDoSorriso[2],
    description: 'Abordagem conservadora com foco em saúde, função e beleza.',
    featured: false,
    order: 32,
  },
]
