<template>
  <Teleport to="body">
    <div
      v-if="open"
      class="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
      @click="emit('close')"
    >
      <button
        class="absolute text-white/70 hover:text-gold transition-colors z-10"
        style="top: calc(1.5rem + env(safe-area-inset-top)); right: calc(1.5rem + env(safe-area-inset-right));"
        type="button"
        @click.stop="emit('close')"
      >
        <X :size="28" />
      </button>

      <template v-if="images.length > 1">
        <button
          class="absolute left-4 md:left-8 text-white/50 hover:text-gold transition-colors z-10"
          type="button"
          @click.stop="emit('navigate', -1)"
        >
          <ChevronLeft :size="40" />
        </button>
        <button
          class="absolute right-4 md:right-8 text-white/50 hover:text-gold transition-colors z-10"
          type="button"
          @click.stop="emit('navigate', 1)"
        >
          <ChevronRight :size="40" />
        </button>
      </template>

      <div
        v-motion
        class="max-w-[90vw] max-h-[85vh] flex flex-col items-center"
        :enter="{ opacity: 1, scale: 1 }"
        :initial="{ opacity: 0, scale: 0.95 }"
        :transition="{ duration: 0.3 }"
        @click.stop
      >
        <img
          :alt="current?.title || t('common.photo')"
          class="max-w-full max-h-[80vh] object-contain"
          :src="current?.imageUrl"
        >
        <div v-if="current?.title" class="mt-4 text-center">
          <p class="font-display text-lg text-white/90 italic">{{ current.title }}</p>
          <p v-if="current?.description" class="text-xs text-white/50 mt-1 tracking-wider">
            {{ current.description }}
          </p>
        </div>
      </div>

      <div
        class="absolute left-1/2 -translate-x-1/2 text-xs text-white/40 tracking-[0.3em]"
        style="bottom: calc(1.5rem + env(safe-area-inset-bottom));"
      >
        {{ currentIndex + 1 }} / {{ images.length }}
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
  import type { Photo } from '@/types/entities'
  import { ChevronLeft, ChevronRight, X } from 'lucide-vue-next'
  import { computed, onBeforeUnmount, onMounted, watch } from 'vue'
  import { useI18n } from 'vue-i18n'

  type Props = {
    open: boolean
    images: Photo[]
    currentIndex: number
  }

  const props = defineProps<Props>()

  const emit = defineEmits<{
    (e: 'close'): void
    (e: 'navigate', dir: 1 | -1): void
  }>()

  const current = computed(() => props.images[props.currentIndex])

  const { t } = useI18n({ useScope: 'global' })

  function onKeyDown (e: KeyboardEvent) {
    if (!props.open) return
    if (e.key === 'Escape') emit('close')
    if (e.key === 'ArrowRight') emit('navigate', 1)
    if (e.key === 'ArrowLeft') emit('navigate', -1)
  }

  function lockScroll (lock: boolean) {
    document.body.style.overflow = lock ? 'hidden' : ''
  }

  watch(
    () => props.open,
    open => lockScroll(open),
    { immediate: true },
  )

  onMounted(() => window.addEventListener('keydown', onKeyDown))
  onBeforeUnmount(() => {
    window.removeEventListener('keydown', onKeyDown)
    lockScroll(false)
  })
</script>
