import type { Photo } from '@/types/entities'
import { media } from '@/content/media'

export const ortodontiaPhotos: Photo[] = [
  {
    id: 'p4',
    title: 'Ortodontia: alinhamento do sorriso',
    category: 'ortodontia',
    imageUrl: media.areas.ortodontia[0],
    description: 'Correção do alinhamento e da mordida com acompanhamento cuidadoso.',
    featured: true,
    order: 10,
  },
  {
    id: 'p5',
    title: 'Planejamento individual',
    category: 'ortodontia',
    imageUrl: media.areas.ortodontia[1],
    description: 'Avaliação e indicação do tratamento ideal para cada fase do sorriso.',
    featured: false,
    order: 11,
  },
  {
    id: 'p6',
    title: 'Acompanhamento e ajustes',
    category: 'ortodontia',
    imageUrl: media.areas.ortodontia[2],
    description: 'Revisões periódicas para evoluir com conforto e previsibilidade.',
    featured: false,
    order: 12,
  },
]
