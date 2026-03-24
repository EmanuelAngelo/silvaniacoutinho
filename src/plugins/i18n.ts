import { watch } from 'vue'
import { createI18n } from 'vue-i18n'

export type AppLocale = 'pt-BR' | 'en-US'

export const I18N_STORAGE_KEY = 'wolfStudio.locale'

function detectLocale (): AppLocale {
  if (typeof window === 'undefined') {
    return 'pt-BR'
  }

  const saved = window.localStorage.getItem(I18N_STORAGE_KEY)
  if (saved === 'pt-BR' || saved === 'en-US') {
    return saved
  }

  const lang = window.navigator.language?.toLowerCase() || ''
  return lang.startsWith('en') ? 'en-US' : 'pt-BR'
}

const messages = {
  'pt-BR': {
    brand: {
      name: 'DRA. SILVÂNIA COUTINHO',
    },
    common: {
      photo: 'Foto',
      photography: 'Odontologia',
    },
    nav: {
      home: 'HOME',
      portfolio: 'TRATAMENTOS',
      about: 'SOBRE',
      contact: 'CONTATO',
      ariaMenu: 'Menu',
      ariaCloseMenu: 'Fechar menu',
    },
    footer: {
      description: 'Cuidado odontológico com foco em saúde, estética e bem-estar. Atendimento humanizado e planejamento individual.',
      navigation: 'Navegação',
      contact: 'Contato',
      rights: 'Todos os direitos reservados.',
      tagline: 'ODONTOLOGIA',
      links: {
        home: 'Home',
        portfolio: 'Tratamentos',
        about: 'Sobre',
        contact: 'Contato',
      },
    },
    categories: {
      'clareamento': {
        title: 'Clareamento',
        subtitle: 'Mais brilho com segurança',
        description: 'Protocolos personalizados para um sorriso mais branco, preservando a saúde do esmalte.',
      },
      'ortodontia': {
        title: 'Ortodontia',
        subtitle: 'Alinhamento e harmonia',
        description: 'Tratamentos para alinhamento e correção da mordida com acompanhamento cuidadoso.',
      },
      'implantes': {
        title: 'Implantes',
        subtitle: 'Função e estética',
        description: 'Reabilitação oral para devolver conforto ao mastigar, falar e sorrir.',
      },
      'estetica-do-sorriso': {
        title: 'Estética do sorriso',
        subtitle: 'Naturalidade e proporção',
        description: 'Planejamento estético (como lentes) para um sorriso equilibrado e natural.',
      },
      'prevencao': {
        title: 'Prevenção',
        subtitle: 'Saúde em primeiro lugar',
        description: 'Avaliação, limpeza e orientações para manter dentes e gengiva saudáveis.',
      },
      'clinica-geral': {
        title: 'Clínica geral',
        subtitle: 'Cuidados do dia a dia',
        description: 'Restaurações, canal, urgências e outras necessidades com atenção e técnica.',
      },
      'all': 'Todos',
    },
    home: {
      hero: {
        line1: 'Seu sorriso merece cuidado.',
        line2: 'Odontologia com acolhimento.',
        tagline: 'Saúde bucal, estética e bem-estar',
        cta: 'Ver Tratamentos',
        scroll: 'Scroll',
      },
      categoryFilmstrip: {
        kicker: 'Tratamentos',
        titlePrefix: 'Cada sorriso merece ser',
        titleHighlight: 'cuidado',
        explore: 'Explorar',
        otherWorks: 'Clínica geral',
      },
      featured: {
        kicker: 'Destaques',
        titlePrefix: 'Atendimentos',
        titleHighlight: 'em destaque',
      },
      services: {
        kicker: 'Serviços',
        titlePrefix: 'Como posso',
        titleHighlight: 'te ajudar',
        items: [
          { slug: 'clareamento', title: 'Clareamento', description: 'Avaliação e protocolos seguros para um sorriso mais branco.' },
          { slug: 'ortodontia', title: 'Ortodontia', description: 'Alinhamento e correção da mordida com acompanhamento.' },
          { slug: 'implantes', title: 'Implantes', description: 'Reabilitação oral para devolver função e estética.' },
          { slug: 'estetica-do-sorriso', title: 'Estética do sorriso', description: 'Planejamento estético para naturalidade e harmonia.' },
          { slug: 'prevencao', title: 'Prevenção', description: 'Avaliação, limpeza e orientações para saúde bucal.' },
          { slug: 'clinica-geral', title: 'Clínica geral', description: 'Restaurações, canal, urgências e cuidados do dia a dia.' },
        ],
      },
      aboutPreview: {
        name: 'Dra. Silvânia Coutinho',
        titleLine1: 'Cuidado e técnica por trás',
        titleHighlight: 'do seu sorriso',
        p1: 'Atendimento odontológico focado em escuta, diagnóstico e planejamento. Cada detalhe importa para um resultado saudável e natural.',
        p2: 'Meu compromisso é unir ciência, precisão e acolhimento para que você se sinta seguro(a) em cada etapa do tratamento.',
        cta: 'Conheça a Dra. Silvânia →',
        photoAlt: 'Dentista',
      },
      testimonials: {
        kicker: 'Depoimentos',
        titlePrefix: 'O que dizem nossos',
        titleHighlight: 'clientes',
        items: [
          { id: 't1', clientName: 'Marina S.', eventType: 'Clareamento', message: 'Fui muito bem atendida e o resultado ficou super natural. Atendimento impecável.', rating: 5 },
          { id: 't2', clientName: 'Bruno A.', eventType: 'Ortodontia', message: 'Acompanhamento atencioso e explicações claras. Evolução do tratamento muito tranquila.', rating: 5 },
          { id: 't3', clientName: 'Clara P.', eventType: 'Prevenção', message: 'Consulta completa, sem pressa e com muita orientação. Recomendo demais.', rating: 5 },
        ],
      },
      cta: {
        kicker: 'Vamos cuidar do seu sorriso',
        titleLine1: 'Pronto(a) para dar o próximo passo',
        titleHighlight: 'com segurança?',
        text: 'Conte o que você precisa e vamos montar um plano de cuidado personalizado.',
        primary: 'Agendar avaliação',
        whatsapp: 'WhatsApp',
      },
    },
    pages: {
      portfolio: {
        kicker: 'Tratamentos',
        title: 'Tratamentos',
        description: 'Conheça as principais áreas de atuação e como posso ajudar no seu caso.',
        empty: 'Nenhuma foto encontrada nesta categoria.',
      },
      category: {
        back: 'Tratamentos',
        empty: 'Em breve novas fotos serão adicionadas.',
        emptyCta: 'Ver todos os tratamentos →',
      },
      about: {
        name: 'Dra. Silvânia Coutinho',
        titleLine1: 'Odontologia com foco em',
        titleHighlight: 'saúde e confiança',
        p1: 'Acredito em um atendimento humano, com diagnóstico claro e planejamento individual. O objetivo é cuidar do sorriso com responsabilidade e previsibilidade.',
        p2: 'Cada paciente tem uma história e necessidades únicas. Por isso, cada conduta é explicada com transparência e alinhada ao que faz sentido para você.',
        pillarsTitlePrefix: 'Meus',
        pillarsTitleHighlight: 'pilares',
        values: [
          { key: 'vision', title: 'Diagnóstico', description: 'Avaliação cuidadosa para entender a causa e indicar o melhor caminho.' },
          { key: 'emotion', title: 'Acolhimento', description: 'Atendimento com empatia para que você se sinta confortável e seguro(a).' },
          { key: 'precision', title: 'Técnica', description: 'Execução precisa e planejamento para resultados naturais e funcionais.' },
          { key: 'excellence', title: 'Excelência', description: 'Compromisso com qualidade, biossegurança e acompanhamento.' },
        ],
        bottomTitlePrefix: 'Vamos cuidar do seu',
        bottomTitleHighlight: 'sorriso?',
        bottomCta: 'Entre em contato',
        photoAlt: 'Dentista',
      },
      contact: {
        kicker: 'Contato',
        titlePrefix: 'Vamos',
        titleHighlight: 'conversar',
        description: 'Conte-me como posso ajudar no seu sorriso. Respondo o mais rápido possível.',
        form: {
          name: 'Nome',
          email: 'Email',
          eventType: 'Procedimento',
          message: 'Mensagem',
          placeholderName: 'Seu nome',
          placeholderEmail: 'seu email',
          placeholderMessage: 'Conte-me o que você gostaria de tratar...',
          eventTypePlaceholder: 'Selecione uma opção',
          sending: 'Enviando…',
          send: 'Enviar mensagem',
          success: 'Mensagem enviada com sucesso!',
        },
        otherWays: 'Outras formas de contato',
        locationLabel: 'Localização',
        locationValue: 'São Paulo, SP - Brasil',
        eventTypes: {
          casamento: 'Avaliação / Consulta',
          festa: 'Clareamento',
          aniversario: 'Ortodontia',
          ensaio: 'Implantes',
          corporativo: 'Prevenção / Limpeza',
          outro: 'Outro',
        },
      },
    },
    language: {
      ariaToggleToEnglish: 'Mudar para inglês',
      ariaToggleToPortuguese: 'Mudar para português',
    },
  },
  'en-US': {
    brand: {
      name: 'DR. SILVÂNIA COUTINHO',
    },
    common: {
      photo: 'Photo',
      photography: 'Dentistry',
    },
    nav: {
      home: 'HOME',
      portfolio: 'TREATMENTS',
      about: 'ABOUT',
      contact: 'CONTACT',
      ariaMenu: 'Menu',
      ariaCloseMenu: 'Close menu',
    },
    footer: {
      description: 'Dental care focused on health, aesthetics, and well-being. Human-centered appointments and personalized planning.',
      navigation: 'Navigation',
      contact: 'Contact',
      rights: 'All rights reserved.',
      tagline: 'DENTISTRY',
      links: {
        home: 'Home',
        portfolio: 'Treatments',
        about: 'About',
        contact: 'Contact',
      },
    },
    categories: {
      'clareamento': {
        title: 'Teeth whitening',
        subtitle: 'Brighter, safely',
        description: 'Personalized protocols for a whiter smile while preserving enamel health.',
      },
      'ortodontia': {
        title: 'Orthodontics',
        subtitle: 'Alignment and harmony',
        description: 'Bite and alignment treatments with careful follow-up.',
      },
      'implantes': {
        title: 'Implants',
        subtitle: 'Function and aesthetics',
        description: 'Oral rehabilitation to restore comfort when chewing, speaking, and smiling.',
      },
      'estetica-do-sorriso': {
        title: 'Smile aesthetics',
        subtitle: 'Natural and balanced',
        description: 'Aesthetic planning (such as veneers) for a natural-looking smile.',
      },
      'prevencao': {
        title: 'Prevention',
        subtitle: 'Health first',
        description: 'Check-ups, cleaning, and guidance to keep teeth and gums healthy.',
      },
      'clinica-geral': {
        title: 'General dentistry',
        subtitle: 'Everyday care',
        description: 'Fillings, root canals, urgencies, and day-to-day dental care.',
      },
      'all': 'All',
    },
    home: {
      hero: {
        line1: 'Your smile deserves care.',
        line2: 'Dentistry with empathy.',
        tagline: 'Oral health, aesthetics, and well-being',
        cta: 'View Treatments',
        scroll: 'Scroll',
      },
      categoryFilmstrip: {
        kicker: 'Treatments',
        titlePrefix: 'Every smile deserves to be',
        titleHighlight: 'cared for',
        explore: 'Explore',
        otherWorks: 'General dentistry',
      },
      featured: {
        kicker: 'Featured',
        titlePrefix: 'Featured',
        titleHighlight: 'appointments',
      },
      services: {
        kicker: 'Services',
        titlePrefix: 'How I can',
        titleHighlight: 'help you',
        items: [
          { slug: 'clareamento', title: 'Whitening', description: 'Evaluation and safe protocols for a brighter smile.' },
          { slug: 'ortodontia', title: 'Orthodontics', description: 'Alignment and bite correction with follow-up.' },
          { slug: 'implantes', title: 'Implants', description: 'Oral rehabilitation to restore function and aesthetics.' },
          { slug: 'estetica-do-sorriso', title: 'Smile aesthetics', description: 'Aesthetic planning for natural and harmonious results.' },
          { slug: 'prevencao', title: 'Prevention', description: 'Check-ups, cleaning, and guidance for oral health.' },
          { slug: 'clinica-geral', title: 'General dentistry', description: 'Fillings, root canals, urgencies, and everyday care.' },
        ],
      },
      aboutPreview: {
        name: 'Dr. Silvânia Coutinho',
        titleLine1: 'Care and technique behind',
        titleHighlight: 'your smile',
        p1: 'Appointments focused on listening, diagnosis, and planning. Every detail matters for a healthy, natural result.',
        p2: 'My commitment is to combine science, precision, and empathy so you feel safe at every step.',
        cta: 'Meet Dr. Silvânia →',
        photoAlt: 'Dentist',
      },
      testimonials: {
        kicker: 'Testimonials',
        titlePrefix: 'What our',
        titleHighlight: 'clients say',
        items: [
          { id: 't1', clientName: 'Marina S.', eventType: 'Whitening', message: 'Great care and a very natural result. Truly excellent appointment.', rating: 5 },
          { id: 't2', clientName: 'Bruno A.', eventType: 'Orthodontics', message: 'Attentive follow-up and clear explanations. The treatment feels very smooth.', rating: 5 },
          { id: 't3', clientName: 'Clara P.', eventType: 'Prevention', message: 'A thorough appointment with lots of guidance. Highly recommend.', rating: 5 },
        ],
      },
      cta: {
        kicker: 'Let\'s take care of your smile',
        titleLine1: 'Ready to take the next step',
        titleHighlight: 'with confidence?',
        text: 'Tell me what you need and we\'ll build a personalized care plan.',
        primary: 'Book an evaluation',
        whatsapp: 'WhatsApp',
      },
    },
    pages: {
      portfolio: {
        kicker: 'Treatments',
        title: 'Treatments',
        description: 'Explore the main areas of practice and how I can help you.',
        empty: 'No items found in this category.',
      },
      category: {
        back: 'Treatments',
        empty: 'New photos will be added soon.',
        emptyCta: 'View all treatments →',
      },
      about: {
        name: 'Dr. Silvânia Coutinho',
        titleLine1: 'Dentistry focused on',
        titleHighlight: 'health and trust',
        p1: 'I believe in human-centered care, with clear diagnosis and personalized planning. The goal is to care for your smile responsibly and predictably.',
        p2: 'Every patient has unique needs. That\'s why each decision is explained transparently and aligned with what makes sense for you.',
        pillarsTitlePrefix: 'My',
        pillarsTitleHighlight: 'pillars',
        values: [
          { key: 'vision', title: 'Diagnosis', description: 'Careful evaluation to understand the cause and recommend the best path.' },
          { key: 'emotion', title: 'Empathy', description: 'Appointments with care so you feel comfortable and safe.' },
          { key: 'precision', title: 'Technique', description: 'Precise execution and planning for natural and functional results.' },
          { key: 'excellence', title: 'Excellence', description: 'Commitment to quality, safety, and follow-up.' },
        ],
        bottomTitlePrefix: 'Let\'s take care of your',
        bottomTitleHighlight: 'smile?',
        bottomCta: 'Get in touch',
        photoAlt: 'Dentist',
      },
      contact: {
        kicker: 'Contact',
        titlePrefix: 'Let\'s',
        titleHighlight: 'talk',
        description: 'Tell me how I can help with your smile. I\'ll reply as soon as possible.',
        form: {
          name: 'Name',
          email: 'Email',
          eventType: 'Procedure',
          message: 'Message',
          placeholderName: 'Your name',
          placeholderEmail: 'your email',
          placeholderMessage: 'Tell me what you\'d like to treat...',
          eventTypePlaceholder: 'Select an option',
          sending: 'Sending…',
          send: 'Send message',
          success: 'Message sent successfully!',
        },
        otherWays: 'Other ways to reach me',
        locationLabel: 'Location',
        locationValue: 'São Paulo, SP - Brazil',
        eventTypes: {
          casamento: 'Evaluation / Consultation',
          festa: 'Whitening',
          aniversario: 'Orthodontics',
          ensaio: 'Implants',
          corporativo: 'Prevention / Cleaning',
          outro: 'Other',
        },
      },
    },
    language: {
      ariaToggleToEnglish: 'Switch to English',
      ariaToggleToPortuguese: 'Switch to Portuguese',
    },
  },
}

const i18n = createI18n({
  legacy: false,
  locale: detectLocale(),
  fallbackLocale: 'pt-BR',
  messages,
})

if (typeof window !== 'undefined') {
  watch(
    i18n.global.locale,
    locale => {
      window.localStorage.setItem(I18N_STORAGE_KEY, locale)
      document.documentElement.lang = locale
    },
    { immediate: true },
  )
}

export default i18n
