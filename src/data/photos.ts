import type { Photo, PhotoCategory } from '@/types/entities'
import { clareamentoPhotos } from '@/data/photos/clareamento'
import { clinicaGeralPhotos } from '@/data/photos/clinica-geral'
import { esteticaDoSorrisoPhotos } from '@/data/photos/estetica-do-sorriso'
import { implantesPhotos } from '@/data/photos/implantes'
import { ortodontiaPhotos } from '@/data/photos/ortodontia'
import { prevencaoPhotos } from '@/data/photos/prevencao'

export const photos: Photo[] = [
  ...clinicaGeralPhotos,
  ...clareamentoPhotos,
  ...esteticaDoSorrisoPhotos,
  ...implantesPhotos,
  ...ortodontiaPhotos,
  ...prevencaoPhotos,
]

export function getAllPhotos () {
  return photos.toSorted((a, b) => (a.order ?? 0) - (b.order ?? 0))
}

export function getFeaturedPhotos (limit = 6) {
  return getAllPhotos()
    .filter(p => p.featured)
    .slice(0, limit)
}

export function getPhotosByCategory (category: PhotoCategory) {
  return getAllPhotos().filter(p => p.category === category)
}
