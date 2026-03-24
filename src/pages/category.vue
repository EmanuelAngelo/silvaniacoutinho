<template>
  <div class="pt-20">
    <section class="py-20 md:py-28">
      <div class="max-w-7xl mx-auto px-6 md:px-10">
        <SectionReveal>
          <RouterLink
            class="inline-flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors text-xs tracking-[0.2em] uppercase font-body mb-8"
            to="/portfolio"
          >
            <ArrowLeft :size="14" /> {{ t('pages.category.back') }}
          </RouterLink>

          <span class="block text-gold text-xs tracking-[0.3em] uppercase font-body mb-4">{{ meta.subtitle }}</span>
          <h1 class="font-display text-4xl md:text-6xl">{{ meta.title }}</h1>
          <p class="text-muted-foreground mt-4 max-w-lg text-base leading-relaxed">
            {{ meta.description }}
          </p>
        </SectionReveal>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-6 md:px-10 pb-24">
      <GalleryGrid v-if="items.length > 0" :photos="items" />
      <div v-else class="text-center py-20">
        <p class="text-muted-foreground font-display text-xl italic">{{ t('pages.category.empty') }}</p>
        <RouterLink
          class="inline-block mt-6 text-gold text-xs tracking-[0.25em] uppercase font-body border-b border-gold/30 pb-1 hover:border-gold transition-colors"
          to="/portfolio"
        >
          {{ t('pages.category.emptyCta') }}
        </RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
  import type { PhotoCategory } from '@/types/entities'
  import { ArrowLeft } from 'lucide-vue-next'
  import { computed } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { useRoute } from 'vue-router'
  import GalleryGrid from '@/components/wolf/GalleryGrid.vue'
  import SectionReveal from '@/components/wolf/SectionReveal.vue'
  import { getAllPhotos } from '@/data/photos'

  const route = useRoute()
  const slug = computed(() => String(route.params.slug || ''))

  const { t, te } = useI18n({ useScope: 'global' })

  const meta = computed(() => {
    const key = `categories.${slug.value}`
    if (!te(`${key}.title`)) return { title: slug.value, subtitle: '', description: '' }

    return {
      title: t(`${key}.title`),
      subtitle: t(`${key}.subtitle`),
      description: t(`${key}.description`),
    }
  })

  const items = computed(() => {
    const all = getAllPhotos()
    const category = slug.value as PhotoCategory
    return all.filter(p => p.category === category)
  })
</script>
