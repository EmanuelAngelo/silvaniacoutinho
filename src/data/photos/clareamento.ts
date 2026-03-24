import type { Photo } from '@/types/entities'
import { media } from '@/content/media'

export const clareamentoPhotos: Photo[] = [
  {
    id: 'p1',
    title: 'Clareamento com segurança',
    category: 'clareamento',
    imageUrl: media.areas.clareamento[0],
    description: 'Avaliação, planejamento e acompanhamento para um sorriso mais branco e natural.',
    featured: true,
    order: 1,
  },
  {
    id: 'p2',
    title: 'Resultado natural',
    category: 'clareamento',
    imageUrl: media.areas.clareamento[1],
    description: 'Protocolos personalizados para respeitar a saúde do esmalte e a sensibilidade.',
    featured: true,
    order: 2,
  },
  {
    id: 'p3',
    title: 'Cuidados e manutenção',
    category: 'clareamento',
    imageUrl: media.areas.clareamento[2],
    description: 'Orientações e revisão para manter o brilho do sorriso por mais tempo.',
    featured: false,
    order: 3,
  },
]
