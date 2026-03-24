import type { Photo } from '@/types/entities'
import { media } from '@/content/media'

export const prevencaoPhotos: Photo[] = [
  {
    id: 'p13',
    title: 'Avaliação completa',
    category: 'prevencao',
    imageUrl: media.areas.prevencao[0],
    description: 'Consulta com avaliação clínica para indicar o melhor plano de cuidado.',
    featured: true,
    order: 40,
  },
  {
    id: 'p14',
    title: 'Limpeza e prevenção',
    category: 'prevencao',
    imageUrl: media.areas.prevencao[1],
    description: 'Profilaxia e orientações para manter gengiva e dentes saudáveis.',
    featured: false,
    order: 41,
  },
  {
    id: 'p15',
    title: 'Orientações de higiene',
    category: 'prevencao',
    imageUrl: media.areas.prevencao[2],
    description: 'Cuidados diários e acompanhamento para prevenir problemas futuros.',
    featured: false,
    order: 42,
  },
]
