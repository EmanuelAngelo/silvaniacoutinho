<template>
  <div class="pt-20">
    <section class="py-20 md:py-28">
      <div class="max-w-7xl mx-auto px-6 md:px-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <SectionReveal>
            <div class="relative aspect-[3/4] max-w-lg mx-auto lg:mx-0 overflow-hidden">
              <img :alt="t('pages.about.photoAlt')" class="w-full h-full object-cover" :src="image">
              <div class="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-gold" />
              <div class="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-gold" />
            </div>
          </SectionReveal>

          <SectionReveal :delay="0.2">
            <div class="space-y-6">
              <span class="text-gold text-xs tracking-[0.3em] uppercase font-body">{{ t('pages.about.name') }}</span>
              <h1 class="font-display text-4xl md:text-5xl leading-snug">
                {{ t('pages.about.titleLine1') }}<br><span class="italic text-gold">{{ t('pages.about.titleHighlight') }}</span>
              </h1>
              <p class="text-muted-foreground leading-relaxed">
                {{ t('pages.about.p1') }}
              </p>
              <p class="text-muted-foreground leading-relaxed">
                {{ t('pages.about.p2') }}
              </p>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>

    <section class="py-24 bg-secondary/30">
      <div class="max-w-7xl mx-auto px-6 md:px-10">
        <SectionReveal>
          <div class="text-center mb-16">
            <WolfLogo class="mx-auto" gold :size="40" />
            <h2 class="font-display text-3xl md:text-4xl mt-6">
              {{ t('pages.about.pillarsTitlePrefix') }} <span class="italic text-gold">{{ t('pages.about.pillarsTitleHighlight') }}</span>
            </h2>
          </div>
        </SectionReveal>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          <SectionReveal v-for="(v, i) in values" :key="v.title" :delay="i * 0.1">
            <div class="bg-background p-8 md:p-10 text-center space-y-4">
              <component :is="v.icon" class="text-gold mx-auto" :size="28" :stroke-width="1" />
              <h3 class="font-display text-xl">{{ v.title }}</h3>
              <p class="text-muted-foreground text-sm leading-relaxed">{{ v.description }}</p>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>

    <section class="py-24 md:py-32 text-center">
      <SectionReveal>
        <h2 class="font-display text-3xl md:text-5xl">
          {{ t('pages.about.bottomTitlePrefix') }} <span class="italic text-gold">{{ t('pages.about.bottomTitleHighlight') }}</span>
        </h2>
        <RouterLink
          class="inline-block mt-8 px-8 py-3 bg-gold text-black text-xs tracking-[0.25em] uppercase font-body hover:bg-gold-light transition-colors"
          to="/contato"
        >
          {{ t('pages.about.bottomCta') }}
        </RouterLink>
      </SectionReveal>
    </section>
  </div>
</template>

<script setup lang="ts">
  import type { Component } from 'vue'
  import { Award, Camera, Eye, Heart } from 'lucide-vue-next'
  import { computed } from 'vue'
  import { useI18n } from 'vue-i18n'
  import SectionReveal from '@/components/wolf/SectionReveal.vue'
  import WolfLogo from '@/components/wolf/WolfLogo.vue'
  import { media } from '@/content/media'

  const image = media.portraits.gabrielVaz

  type ValueItem = {
    key: string
    title: string
    description: string
  }

  const iconByKey: Record<string, Component> = {
    vision: Eye,
    emotion: Heart,
    precision: Camera,
    excellence: Award,
  }

  const { t, tm } = useI18n({ useScope: 'global' })

  const values = computed(() => {
    const items = tm('pages.about.values') as unknown as ValueItem[]
    return items.map(item => ({
      ...item,
      icon: iconByKey[item.key],
    }))
  })
</script>
