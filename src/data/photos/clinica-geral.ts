import type { Photo } from '@/types/entities'
import { media } from '@/content/media'

export const clinicaGeralPhotos: Photo[] = [
  {
    id: 'p16',
    title: 'Restaurações',
    category: 'clinica-geral',
    imageUrl: media.areas.clinicaGeral[0],
    description: 'Recuperação do dente com materiais estéticos e função preservada.',
    featured: false,
    order: 50,
  },
  {
    id: 'p17',
    title: 'Canal (endodontia)',
    category: 'clinica-geral',
    imageUrl: media.areas.clinicaGeral[1],
    description: 'Alívio da dor e preservação do dente com técnica e cuidado.',
    featured: false,
    order: 51,
  },
  {
    id: 'p18',
    title: 'Urgências odontológicas',
    category: 'clinica-geral',
    imageUrl: media.areas.clinicaGeral[2],
    description: 'Atendimento para dor, fraturas e intercorrências com orientação adequada.',
    featured: false,
    order: 52,
  },
]
