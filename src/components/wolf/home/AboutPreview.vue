<template>
  <section class="py-24 md:py-32 bg-background">
    <div class="max-w-7xl mx-auto px-6 md:px-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <SectionReveal>
          <div class="relative aspect-[3/4] max-w-md mx-auto lg:mx-0 overflow-hidden">
            <img :alt="t('home.aboutPreview.photoAlt')" class="w-full h-full object-cover" loading="lazy" :src="image">
            <div class="absolute inset-0 border border-gold/20" />
            <div class="absolute top-0 left-0 w-12 h-12 border-t border-l border-gold" />
            <div class="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-gold" />
          </div>
        </SectionReveal>

        <SectionReveal :delay="0.2">
          <div class="space-y-6">
            <span class="text-gold text-xs tracking-[0.3em] uppercase font-body">{{ t('home.aboutPreview.name') }}</span>
            <h2 class="font-display text-3xl md:text-4xl leading-snug">
              {{ t('home.aboutPreview.titleLine1') }}<br><span class="italic text-gold">{{ t('home.aboutPreview.titleHighlight') }}</span>
            </h2>
            <p class="text-muted-foreground leading-relaxed">
              {{ t('home.aboutPreview.p1') }}
            </p>
            <p class="text-muted-foreground leading-relaxed">
              {{ t('home.aboutPreview.p2') }}
            </p>
            <RouterLink
              class="inline-block mt-4 text-gold text-xs tracking-[0.25em] uppercase font-body border-b border-gold/30 pb-1 hover:border-gold transition-colors"
              to="/sobre"
            >
              {{ t('home.aboutPreview.cta') }}
            </RouterLink>
          </div>
        </SectionReveal>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import SectionReveal from '@/components/wolf/SectionReveal.vue'
  import { media } from '@/content/media'

  const { t } = useI18n({ useScope: 'global' })

  const image = media.portraits.gabrielVaz
</script>
