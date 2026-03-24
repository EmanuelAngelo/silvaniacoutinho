<template>
  <div>
    <div class="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
      <div
        v-for="(photo, i) in photos"
        :key="photo.id"
        v-motion
        class="break-inside-avoid group cursor-pointer relative overflow-hidden"
        :initial="{ opacity: 0, y: 30 }"
        :transition="{ duration: 0.6, delay: ((i % 6) * 0.08) }"
        :visibleOnce="{ opacity: 1, y: 0 }"
        @click="openAt(i)"
      >
        <div class="overflow-hidden">
          <img
            :alt="photo.title || t('common.photography')"
            class="w-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
            :src="photo.imageUrl"
          >
        </div>

        <div
          class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4"
        >
          <p v-if="photo.title" class="font-display text-white text-lg italic">{{ photo.title }}</p>
        </div>

        <div class="absolute inset-0 border border-transparent group-hover:border-gold/30 transition-colors duration-500" />
        <div class="absolute top-0 left-0 w-10 h-10 border-t border-l border-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div class="absolute bottom-0 right-0 w-10 h-10 border-b border-r border-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </div>

    <Lightbox
      :current-index="lightboxIndex"
      :images="photos"
      :open="lightboxIndex >= 0"
      @close="lightboxIndex = -1"
      @navigate="navigate"
    />
  </div>
</template>

<script setup lang="ts">
  import type { Photo } from '@/types/entities'
  import { ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  import Lightbox from './Lightbox.vue'

  type Props = {
    photos: Photo[]
  }

  const { photos } = defineProps<Props>()

  const { t } = useI18n({ useScope: 'global' })

  const lightboxIndex = ref(-1)

  function openAt (index: number) {
    lightboxIndex.value = index
  }

  function navigate (dir: 1 | -1) {
    lightboxIndex.value = (lightboxIndex.value + dir + photos.length) % photos.length
  }
</script>
