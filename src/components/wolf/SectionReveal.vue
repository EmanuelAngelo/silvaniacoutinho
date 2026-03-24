<template>
  <div
    v-motion
    :initial="{ opacity: 0, y: 40 }"
    :transition="{ duration: 0.8, delay, easing: [0.25, 0.46, 0.45, 0.94] }"
    :visibleOnce="{ opacity: 1, y: 0 }"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
  type Props = {
    delay?: number
  }

  withDefaults(defineProps<Props>(), {
    delay: 0,
  })
</script>
