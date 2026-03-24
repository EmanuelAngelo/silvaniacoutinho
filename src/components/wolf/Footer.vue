<template>
  <footer class="relative bg-background border-t border-border overflow-hidden">
    <div class="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
      <WolfLogo :size="420" />
    </div>

    <div class="relative max-w-7xl mx-auto px-6 md:px-10 py-16">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div class="space-y-4">
          <div class="flex items-center gap-3">
            <WolfLogo gold :size="30" />
            <span class="font-display text-lg tracking-wider">{{ t('brand.name') }}</span>
          </div>
          <p class="text-muted-foreground text-sm leading-relaxed max-w-xs">
            {{ t('footer.description') }}
          </p>
        </div>

        <div class="space-y-4">
          <h4 class="text-xs font-body tracking-[0.2em] text-gold uppercase">{{ t('footer.navigation') }}</h4>
          <div class="flex flex-col gap-3">
            <RouterLink
              v-for="link in nav"
              :key="link.path"
              class="text-sm text-muted-foreground hover:text-gold transition-colors"
              :to="link.path"
            >
              {{ link.label }}
            </RouterLink>
          </div>
        </div>

        <div class="space-y-4">
          <h4 class="text-xs font-body tracking-[0.2em] text-gold uppercase">{{ t('footer.contact') }}</h4>
          <div class="flex flex-col gap-3">
            <a
              v-for="item in contacts"
              :key="item.label"
              class="flex items-center gap-2 text-sm text-muted-foreground hover:text-gold transition-colors"
              :href="item.href"
              rel="noopener noreferrer"
              target="_blank"
            >
              <component :is="item.icon" :size="16" />
              {{ item.text }}
            </a>
          </div>
        </div>
      </div>

      <div class="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-xs text-muted-foreground tracking-wider">
          © {{ year }} {{ t('brand.name') }}. {{ t('footer.rights') }}
        </p>
        <div class="flex items-center gap-1 text-xs text-muted-foreground">
          <span class="text-gold">◆</span>
          <span class="tracking-widest">{{ t('footer.tagline') }}</span>
          <span class="text-gold">◆</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
  import { Instagram, Mail, Phone } from 'lucide-vue-next'
  import { computed } from 'vue'
  import { useI18n } from 'vue-i18n'
  import WolfLogo from './WolfLogo.vue'

  const { t } = useI18n({ useScope: 'global' })

  const year = computed(() => new Date().getFullYear())

  const nav = computed(() => [
    { label: t('footer.links.home'), path: '/' },
    { label: t('footer.links.portfolio'), path: '/portfolio' },
    { label: t('footer.links.about'), path: '/sobre' },
    { label: t('footer.links.contact'), path: '/contato' },
  ])

  const contacts = [
    { label: 'Instagram', href: 'https://instagram.com/drasilvaniacoutinho', icon: Instagram, text: '@drasilvaniacoutinho' },
    { label: 'Email', href: 'mailto:contato@drasilvaniacoutinho.com', icon: Mail, text: 'contato@drasilvaniacoutinho.com' },
    { label: 'WhatsApp', href: 'https://wa.me/5511999999999', icon: Phone, text: '+55 (11) 99999-9999' },
  ]
</script>
