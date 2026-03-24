<template>
  <section class="relative w-full overflow-hidden" style="height: 100vh; height: 100svh;">
    <div class="absolute inset-0 kenburns">
      <img :alt="t('common.photo')" class="w-full h-full object-cover" :src="heroImage">
    </div>
    <div class="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/80" />

    <div class="relative h-full flex flex-col items-center justify-center px-6 text-center">
      <div v-motion :enter="{ opacity: 1, y: 0 }" :initial="{ opacity: 0, y: -20 }" :transition="{ duration: 1, delay: 0.3 }">
        <WolfLogo gold :size="50" />
      </div>

      <h1
        v-motion
        class="font-display text-4xl md:text-6xl lg:text-7xl text-white mt-8 leading-tight max-w-4xl"
        :enter="{ opacity: 1, y: 0 }"
        :initial="{ opacity: 0, y: 30 }"
        :transition="{ duration: 1, delay: 0.6 }"
      >
        {{ t('home.hero.line1') }}<br>
        <span class="italic text-gold">{{ t('home.hero.line2') }}</span>
      </h1>

      <p
        v-motion
        class="text-white/60 text-sm tracking-[0.2em] uppercase mt-6 font-body"
        :enter="{ opacity: 1 }"
        :initial="{ opacity: 0 }"
        :transition="{ duration: 1, delay: 1 }"
      >
        {{ t('home.hero.tagline') }}
      </p>

      <div
        v-motion
        class="mt-10"
        :enter="{ opacity: 1, y: 0 }"
        :initial="{ opacity: 0, y: 20 }"
        :transition="{ duration: 0.8, delay: 1.3 }"
      >
        <RouterLink
          class="inline-block px-8 py-3 border border-gold text-gold text-xs tracking-[0.25em] uppercase hover:bg-gold hover:text-black transition-all duration-500 font-body"
          to="/portfolio"
        >
          {{ t('home.hero.cta') }}
        </RouterLink>
      </div>
    </div>

    <div
      v-motion
      class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      :enter="{ opacity: 1 }"
      :initial="{ opacity: 0 }"
      :transition="{ delay: 2 }"
    >
      <span class="text-white/30 text-[10px] tracking-[0.3em] uppercase">{{ t('home.hero.scroll') }}</span>
      <div class="w-px h-8 bg-gradient-to-b from-gold/50 to-transparent animate-bounce" />
    </div>
  </section>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import WolfLogo from '@/components/wolf/WolfLogo.vue'
  import { media } from '@/content/media'

  const { t } = useI18n({ useScope: 'global' })

  const heroImage = media.home.hero
</script>
