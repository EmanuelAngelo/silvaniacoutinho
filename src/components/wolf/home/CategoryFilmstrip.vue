<template>
  <section class="py-24 md:py-32 bg-background">
    <div class="max-w-7xl mx-auto px-6 md:px-10">
      <SectionReveal>
        <div class="text-center mb-16">
          <span class="text-gold text-xs tracking-[0.3em] uppercase font-body">{{ t('home.categoryFilmstrip.kicker') }}</span>
          <h2 class="font-display text-3xl md:text-5xl mt-4">
            {{ t('home.categoryFilmstrip.titlePrefix') }} <span class="italic text-gold">{{ t('home.categoryFilmstrip.titleHighlight') }}</span>
          </h2>
        </div>
      </SectionReveal>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <SectionReveal v-for="(cat, i) in categories" :key="cat.slug" :delay="i * 0.1">
          <RouterLink class="group relative block aspect-[4/5] overflow-hidden" :to="`/portfolio/${cat.slug}`">
            <img
              :alt="cat.label"
              class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
              :src="cat.image"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div class="absolute inset-0 border border-transparent group-hover:border-gold/30 transition-colors duration-500" />

            <div class="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <p class="text-gold text-xs tracking-[0.2em] uppercase font-body mb-2">{{ cat.description }}</p>
              <h3 class="font-display text-2xl md:text-3xl text-white">{{ cat.label }}</h3>
              <div class="mt-4 w-0 group-hover:w-12 h-px bg-gold transition-all duration-500" />
            </div>
          </RouterLink>
        </SectionReveal>

        <SectionReveal :delay="0.5">
          <RouterLink
            class="group relative block aspect-[4/5] overflow-hidden bg-secondary flex items-center justify-center"
            to="/portfolio/clinica-geral"
          >
            <div class="absolute inset-0 border border-border group-hover:border-gold/30 transition-colors duration-500" />
            <div class="text-center p-8">
              <span class="text-gold text-xs tracking-[0.3em] uppercase font-body">{{ t('home.categoryFilmstrip.explore') }}</span>
              <h3 class="font-display text-2xl md:text-3xl text-foreground mt-3">{{ t('home.categoryFilmstrip.otherWorks') }}</h3>
              <div class="mt-4 mx-auto w-0 group-hover:w-12 h-px bg-gold transition-all duration-500" />
            </div>
          </RouterLink>
        </SectionReveal>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { useI18n } from 'vue-i18n'
  import SectionReveal from '@/components/wolf/SectionReveal.vue'
  import { media } from '@/content/media'

  const { t } = useI18n({ useScope: 'global' })

  const categories = computed(() => {
    const slugs = ['clareamento', 'ortodontia', 'implantes', 'estetica-do-sorriso', 'prevencao'] as const

    return slugs.map(slug => ({
      slug,
      label: t(`categories.${slug}.title`),
      image: media.home.categoryCovers[slug],
      description: t(`categories.${slug}.subtitle`),
    }))
  })
</script>
