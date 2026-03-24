export type PhotoCategory
  = | 'clareamento'
    | 'ortodontia'
    | 'implantes'
    | 'estetica-do-sorriso'
    | 'prevencao'
    | 'clinica-geral'

export interface Photo {
  id: string
  title: string
  category: PhotoCategory
  imageUrl: string
  description?: string
  featured?: boolean
  order?: number
}

export interface Testimonial {
  id: string
  clientName: string
  eventType?: string
  message: string
  rating?: number
}

export type ContactRequestStatus = 'novo' | 'lido' | 'respondido' | 'arquivado'

export interface ContactRequest {
  id: string
  name: string
  email: string
  eventType: string
  message: string
  status: ContactRequestStatus
  createdAt: string
}
