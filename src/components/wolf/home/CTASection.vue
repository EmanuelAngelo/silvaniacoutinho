<template>
  <section class="py-24 md:py-32 bg-background relative overflow-hidden">
    <div class="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02]">
      <WolfLogo :size="520" />
    </div>

    <div class="relative max-w-3xl mx-auto px-6 md:px-10 text-center">
      <SectionReveal>
        <span class="text-gold text-xs tracking-[0.3em] uppercase font-body">{{ t('home.cta.kicker') }}</span>
        <h2 class="font-display text-3xl md:text-5xl lg:text-6xl mt-6 leading-tight">
          {{ t('home.cta.titleLine1') }}<br>
          <span class="italic text-gold">{{ t('home.cta.titleHighlight') }}</span>
        </h2>
        <p class="text-muted-foreground mt-6 text-base leading-relaxed max-w-xl mx-auto">
          {{ t('home.cta.text') }}
        </p>

        <div class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <RouterLink
            class="px-8 py-3 bg-gold text-black text-xs tracking-[0.25em] uppercase font-body hover:bg-gold-light transition-colors"
            to="/contato"
          >
            {{ t('home.cta.primary') }}
          </RouterLink>
          <a
            class="px-8 py-3 border border-gold/30 text-gold text-xs tracking-[0.25em] uppercase font-body hover:border-gold transition-colors"
            href="https://wa.me/559891162402"
            rel="noopener noreferrer"
            target="_blank"
          >
            {{ t('home.cta.whatsapp') }}
          </a>
        </div>
      </SectionReveal>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import SectionReveal from '@/components/wolf/SectionReveal.vue'
  import WolfLogo from '@/components/wolf/WolfLogo.vue'

  const { t } = useI18n({ useScope: 'global' })
</script>
