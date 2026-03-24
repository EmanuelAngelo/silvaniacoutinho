<template>
  <div class="pt-20">
    <section class="py-20 md:py-28 text-center">
      <SectionReveal>
        <span class="text-gold text-xs tracking-[0.3em] uppercase font-body">{{ t('pages.portfolio.kicker') }}</span>
        <h1 class="font-display text-4xl md:text-6xl mt-4">{{ t('pages.portfolio.title') }}</h1>
        <p class="text-muted-foreground mt-4 max-w-lg mx-auto text-base">
          {{ t('pages.portfolio.description') }}
        </p>
      </SectionReveal>

      <SectionReveal :delay="0.2">
        <div class="flex flex-wrap justify-center gap-3 mt-12 px-6">
          <button
            v-for="cat in categories"
            :key="cat.value"
            class="px-5 py-2 text-xs tracking-[0.15em] uppercase font-body transition-all duration-300 border"
            :class="
              activeFilter === cat.value
                ? 'border-gold bg-gold text-black'
                : 'border-border text-muted-foreground hover:border-gold/50 hover:text-gold'
            "
            type="button"
            @click="activeFilter = cat.value"
          >
            {{ cat.label }}
          </button>
        </div>
      </SectionReveal>
    </section>

    <section class="max-w-7xl mx-auto px-6 md:px-10 pb-24">
      <div
        :key="activeFilter"
        v-motion
        :enter="{ opacity: 1 }"
        :initial="{ opacity: 0 }"
        :transition="{ duration: 0.5 }"
      >
        <GalleryGrid v-if="filtered.length > 0" :photos="filtered" />

        <div v-else class="text-center py-20">
          <p class="text-muted-foreground font-display text-xl italic">{{ t('pages.portfolio.empty') }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
  import type { PhotoCategory } from '@/types/entities'
  import { computed, ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  import GalleryGrid from '@/components/wolf/GalleryGrid.vue'
  import SectionReveal from '@/components/wolf/SectionReveal.vue'
  import { getAllPhotos } from '@/data/photos'

  const { t } = useI18n({ useScope: 'global' })

  const categories = computed<Array<{ value: 'all' | PhotoCategory, label: string }>>(() => [
    { value: 'all', label: t('categories.all') },
    { value: 'clareamento', label: t('categories.clareamento.title') },
    { value: 'ortodontia', label: t('categories.ortodontia.title') },
    { value: 'implantes', label: t('categories.implantes.title') },
    { value: 'estetica-do-sorriso', label: t('categories.estetica-do-sorriso.title') },
    { value: 'prevencao', label: t('categories.prevencao.title') },
    { value: 'clinica-geral', label: t('categories.clinica-geral.title') },
  ])

  const activeFilter = ref<'all' | PhotoCategory>('all')

  const filtered = computed(() => {
    const all = getAllPhotos()
    if (activeFilter.value === 'all') return all
    return all.filter(p => p.category === activeFilter.value)
  })
</script>
