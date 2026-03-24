export function publicAsset (path: string) {
  const baseUrl = import.meta.env.BASE_URL || '/'
  const normalizedPath = path.replace(/^\/+/, '')

  if (baseUrl.endsWith('/')) {
    return `${baseUrl}${normalizedPath}`
  }

  return `${baseUrl}/${normalizedPath}`
}

const portraitImage = 'silvania/silvania.jpeg'

const heroImages = [
  'odontowallpaper.jpg',
]

const areaImages = {
  clareamento: [
    'data/areas/clareamento/1.jpeg',
    'data/areas/clareamento/2.jpeg',
    'data/areas/clareamento/3.jpeg',
  ],
  ortodontia: [
    'data/areas/ortodontia/1.jpeg',
    'data/areas/ortodontia/2.jpeg',
    'data/areas/ortodontia/3.jpeg',
  ],
  implantes: [
    'data/areas/implantes/1.jpeg',
    'data/areas/implantes/2.jpeg',
    'data/areas/implantes/3.jpeg',
  ],
  esteticaDoSorriso: [
    'data/areas/estetica-do-sorriso/1.jpeg',
    'data/areas/estetica-do-sorriso/2.jpeg',
    'data/areas/estetica-do-sorriso/3.jpeg',
  ],
  prevencao: [
    'data/areas/prevencao/1.jpeg',
    'data/areas/prevencao/2.jpeg',
    'data/areas/prevencao/3.jpeg',
  ],
  clinicaGeral: [
    'data/areas/clinica-geral/1.jpeg',
    'data/areas/clinica-geral/2.jpeg',
    'data/areas/clinica-geral/3.jpeg',
  ],
} as const

function hashToIndex (seed: string, length: number) {
  let hash = 2_166_136_261
  for (let i = 0; i < seed.length; i++) {
    hash ^= seed.codePointAt(i) ?? 0
    hash = Math.imul(hash, 16_777_619)
  }

  const idx = Math.abs(hash) % Math.max(1, length)
  return idx
}

function pickFromPool (pool: readonly string[], seed: string) {
  return pool[hashToIndex(seed, pool.length)]
}

export const media = {
  portraits: {
    gabrielVaz: publicAsset(portraitImage),
  },
  home: {
    hero: publicAsset(pickFromPool(heroImages, 'home-hero')),
    categoryCovers: {
      'clareamento': publicAsset(pickFromPool(areaImages.clareamento, 'cover-clareamento')),
      'ortodontia': publicAsset(pickFromPool(areaImages.ortodontia, 'cover-ortodontia')),
      'implantes': publicAsset(pickFromPool(areaImages.implantes, 'cover-implantes')),
      'estetica-do-sorriso': publicAsset(pickFromPool(areaImages.esteticaDoSorriso, 'cover-estetica')),
      'prevencao': publicAsset(pickFromPool(areaImages.prevencao, 'cover-prevencao')),
    },
  },
  pages: {
    about: {
      hero: publicAsset(pickFromPool(heroImages, 'about-hero')),
    },
  },
  areas: {
    clareamento: areaImages.clareamento.map(p => publicAsset(p)),
    ortodontia: areaImages.ortodontia.map(p => publicAsset(p)),
    implantes: areaImages.implantes.map(p => publicAsset(p)),
    esteticaDoSorriso: areaImages.esteticaDoSorriso.map(p => publicAsset(p)),
    prevencao: areaImages.prevencao.map(p => publicAsset(p)),
    clinicaGeral: areaImages.clinicaGeral.map(p => publicAsset(p)),
  },
  photos: {
    bySeed: (seed: string, _w?: number, _h?: number) => `${publicAsset(portraitImage)}?img=${encodeURIComponent(seed)}`,
  },
} as const

export function photoUrl (seed: string, w?: number, h?: number) {
  if (typeof w === 'number' && typeof h === 'number') {
    return media.photos.bySeed(seed, w, h)
  }

  return media.photos.bySeed(seed)
}
