<template>
  <img
    alt="Dra. Silvânia Coutinho"
    aria-label="Dra. Silvânia Coutinho"
    :class="className"
    decoding="async"
    :height="size"
    loading="eager"
    role="img"
    :src="src"
    :width="size"
  >
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { publicAsset } from '@/content/media'

  type Props = {
    size?: number
    gold?: boolean
    className?: string
  }

  withDefaults(defineProps<Props>(), {
    size: 40,
    gold: false,
    className: '',
  })

  const src = computed(() => publicAsset('odontologia.png'))
</script>
