<template>
  <section class="py-24 md:py-32 bg-secondary/30">
    <div class="max-w-7xl mx-auto px-6 md:px-10">
      <SectionReveal>
        <div class="text-center mb-16">
          <span class="text-gold text-xs tracking-[0.3em] uppercase font-body">{{ t('home.featured.kicker') }}</span>
          <h2 class="font-display text-3xl md:text-5xl mt-4">
            {{ t('home.featured.titlePrefix') }} <span class="italic text-gold">{{ t('home.featured.titleHighlight') }}</span>
          </h2>
        </div>
      </SectionReveal>

      <GalleryGrid :photos="featured" />
    </div>
  </section>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { useI18n } from 'vue-i18n'
  import GalleryGrid from '@/components/wolf/GalleryGrid.vue'
  import SectionReveal from '@/components/wolf/SectionReveal.vue'
  import { getFeaturedPhotos } from '@/data/photos'

  const { t } = useI18n({ useScope: 'global' })

  const featured = computed(() => getFeaturedPhotos(9))
</script>
