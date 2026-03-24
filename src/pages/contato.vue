<template>
  <div class="pt-20">
    <section class="py-20 md:py-28 text-center">
      <SectionReveal>
        <span class="text-gold text-xs tracking-[0.3em] uppercase font-body">{{ t('pages.contact.kicker') }}</span>
        <h1 class="font-display text-4xl md:text-6xl mt-4">
          {{ t('pages.contact.titlePrefix') }} <span class="italic text-gold">{{ t('pages.contact.titleHighlight') }}</span>
        </h1>
        <p class="text-muted-foreground mt-4 max-w-lg mx-auto px-6 text-base">{{ t('pages.contact.description') }}</p>
      </SectionReveal>
    </section>

    <section class="max-w-7xl mx-auto px-6 md:px-10 pb-24">
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
        <SectionReveal class="lg:col-span-3">
          <form class="space-y-6" @submit.prevent="submit">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div class="space-y-2">
                <label class="text-xs tracking-[0.15em] uppercase font-body text-muted-foreground">{{ t('pages.contact.form.name') }}</label>
                <input
                  v-model.trim="form.name"
                  class="w-full bg-transparent border-b border-border py-3 text-foreground focus:border-gold outline-none transition-colors font-body text-sm"
                  :placeholder="t('pages.contact.form.placeholderName')"
                  required
                  type="text"
                >
              </div>
              <div class="space-y-2">
                <label class="text-xs tracking-[0.15em] uppercase font-body text-muted-foreground">{{ t('pages.contact.form.email') }}</label>
                <input
                  v-model.trim="form.email"
                  class="w-full bg-transparent border-b border-border py-3 text-foreground focus:border-gold outline-none transition-colors font-body text-sm"
                  :placeholder="emailPlaceholder"
                  required
                  type="email"
                >
              </div>
            </div>

            <div class="space-y-2 relative">
              <label class="text-xs tracking-[0.15em] uppercase font-body text-muted-foreground">{{ t('pages.contact.form.eventType') }}</label>
              <select
                v-model="form.eventType"
                class="w-full bg-transparent border-b border-border py-3 pr-10 text-foreground focus:border-gold outline-none transition-colors font-body text-sm appearance-none cursor-pointer"
              >
                <option class="bg-background" value="">{{ t('pages.contact.form.eventTypePlaceholder') }}</option>
                <option v-for="opt in eventTypes" :key="opt.value" class="bg-background" :value="opt.value">
                  {{ opt.label }}
                </option>
              </select>
              <ChevronDown class="absolute right-2 top-9 text-muted-foreground" :size="16" />
            </div>

            <div class="space-y-2">
              <label class="text-xs tracking-[0.15em] uppercase font-body text-muted-foreground">{{ t('pages.contact.form.message') }}</label>
              <textarea
                v-model.trim="form.message"
                class="w-full bg-transparent border-b border-border py-3 text-foreground focus:border-gold outline-none transition-colors font-body text-sm resize-none"
                :placeholder="t('pages.contact.form.placeholderMessage')"
                required
                rows="5"
              />
            </div>

            <button
              class="group flex items-center gap-3 px-8 py-3 bg-gold text-black text-xs tracking-[0.25em] uppercase font-body hover:bg-gold-light transition-colors disabled:opacity-50"
              :disabled="sending"
              type="submit"
            >
              {{ sending ? t('pages.contact.form.sending') : t('pages.contact.form.send') }}
              <Send class="group-hover:translate-x-1 transition-transform" :size="14" />
            </button>
          </form>
        </SectionReveal>

        <SectionReveal class="lg:col-span-2" :delay="0.2">
          <div class="space-y-10">
            <div class="space-y-6">
              <h3 class="font-display text-xl">{{ t('pages.contact.otherWays') }}</h3>

              <a
                v-for="item in contactItems"
                :key="item.label"
                class="flex items-center gap-4 text-muted-foreground hover:text-gold transition-colors group"
                :href="item.href"
                rel="noopener noreferrer"
                target="_blank"
              >
                <div class="w-10 h-10 border border-border group-hover:border-gold flex items-center justify-center transition-colors">
                  <component :is="item.icon" :size="16" />
                </div>
                <div>
                  <p class="text-xs tracking-wider uppercase text-gold">{{ item.label }}</p>
                  <p class="text-sm mt-0.5">{{ item.value }}</p>
                </div>
              </a>

              <div class="flex items-center gap-4 text-muted-foreground">
                <div class="w-10 h-10 border border-border flex items-center justify-center"><MapPin :size="16" /></div>
                <div>
                  <p class="text-xs tracking-wider uppercase text-gold">{{ t('pages.contact.locationLabel') }}</p>
                  <p class="text-sm mt-0.5">{{ t('pages.contact.locationValue') }}</p>
                </div>
              </div>
            </div>

            <div class="flex justify-center pt-8 opacity-10"><WolfLogo gold :size="120" /></div>
          </div>
        </SectionReveal>
      </div>

      <v-snackbar v-model="snackbar" color="primary" timeout="3500">
        {{ snackbarText }}
      </v-snackbar>
    </section>
  </div>
</template>

<script setup lang="ts">
  import type { ContactRequest } from '@/types/entities'
  import { ChevronDown, Instagram, Mail, MapPin, Phone, Send } from 'lucide-vue-next'
  import { computed, reactive, ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  import SectionReveal from '@/components/wolf/SectionReveal.vue'
  import WolfLogo from '@/components/wolf/WolfLogo.vue'

  const { locale, t } = useI18n({ useScope: 'global' })

  const emailPlaceholder = computed(() => {
    return locale.value === 'pt-BR' ? 'seu@email.com' : 'you@email.com'
  })

  const eventTypes = computed(() => [
    { value: 'casamento', label: t('pages.contact.eventTypes.casamento') },
    { value: 'festa', label: t('pages.contact.eventTypes.festa') },
    { value: 'aniversario', label: t('pages.contact.eventTypes.aniversario') },
    { value: 'ensaio', label: t('pages.contact.eventTypes.ensaio') },
    { value: 'corporativo', label: t('pages.contact.eventTypes.corporativo') },
    { value: 'outro', label: t('pages.contact.eventTypes.outro') },
  ])

  const contactItems = [
    { href: 'https://wa.me/5511999999999', icon: Phone, label: 'WhatsApp', value: '+55 (11) 99999-9999' },
    { href: 'https://instagram.com/drasilvaniacoutinho', icon: Instagram, label: 'Instagram', value: '@drasilvaniacoutinho' },
    { href: 'mailto:contato@drasilvaniacoutinho.com', icon: Mail, label: 'Email', value: 'contato@drasilvaniacoutinho.com' },
  ]

  const form = reactive({
    name: '',
    email: '',
    eventType: '',
    message: '',
  })

  const sending = ref(false)
  const snackbar = ref(false)
  const snackbarText = ref('')

  function readRequests (): ContactRequest[] {
    try {
      const raw = localStorage.getItem('wolfStudio.contactRequests')
      if (!raw) return []
      return JSON.parse(raw) as ContactRequest[]
    } catch {
      return []
    }
  }

  function writeRequests (items: ContactRequest[]) {
    localStorage.setItem('wolfStudio.contactRequests', JSON.stringify(items))
  }

  async function submit () {
    sending.value = true

    const req: ContactRequest = {
      id: crypto.randomUUID(),
      name: form.name,
      email: form.email,
      eventType: form.eventType,
      message: form.message,
      status: 'novo',
      createdAt: new Date().toISOString(),
    }

    const items = readRequests()
    items.unshift(req)
    writeRequests(items)

    await new Promise(r => setTimeout(r, 650))

    snackbarText.value = t('pages.contact.form.success')
    snackbar.value = true

    form.name = ''
    form.email = ''
    form.eventType = ''
    form.message = ''

    sending.value = false
  }
</script>
