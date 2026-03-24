<template>
  <button
    v-motion
    :aria-label="ariaLabel"
    class="fixed z-50 w-14 h-14 rounded-full flex items-center justify-center border border-gold/40 bg-background/90 backdrop-blur-md hover:bg-secondary/40 transition-colors"
    :enter="{ opacity: 1, scale: 1 }"
    :initial="{ opacity: 0, scale: 0 }"
    style="bottom: calc(1.5rem + env(safe-area-inset-bottom)); left: calc(1.5rem + env(safe-area-inset-left));"
    :transition="{ delay: 2.1, stiffness: 200, type: 'spring' }"
    type="button"
    @click="toggle"
  >
    <svg v-if="isPt" class="w-7 h-7" viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0h640v480H0z" fill="#009b3a" />
      <path d="M320 60 540 240 320 420 100 240z" fill="#ffdf00" />
      <circle cx="320" cy="240" fill="#002776" r="90" />
      <path
        d="M230 220c70-35 150-30 220 10l-6 14c-66-37-140-42-209-8z"
        fill="#fff"
        opacity="0.95"
      />
    </svg>

    <svg v-else class="w-7 h-7" viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0h640v480H0z" fill="#fff" />
      <path d="M0 0h640v36.92H0z" fill="#b22234" />
      <path d="M0 73.85h640v36.92H0z" fill="#b22234" />
      <path d="M0 147.69h640v36.92H0z" fill="#b22234" />
      <path d="M0 221.54h640v36.92H0z" fill="#b22234" />
      <path d="M0 295.38h640v36.92H0z" fill="#b22234" />
      <path d="M0 369.23h640v36.92H0z" fill="#b22234" />
      <path d="M0 443.08h640v36.92H0z" fill="#b22234" />

      <path d="M0 0h280v258.46H0z" fill="#3c3b6e" />

      <g fill="#fff" opacity="0.95">
        <circle cx="23" cy="20" r="6" />
        <circle cx="55" cy="20" r="6" />
        <circle cx="87" cy="20" r="6" />
        <circle cx="119" cy="20" r="6" />
        <circle cx="151" cy="20" r="6" />
        <circle cx="183" cy="20" r="6" />
        <circle cx="215" cy="20" r="6" />
        <circle cx="247" cy="20" r="6" />

        <circle cx="39" cy="43" r="6" />
        <circle cx="71" cy="43" r="6" />
        <circle cx="103" cy="43" r="6" />
        <circle cx="135" cy="43" r="6" />
        <circle cx="167" cy="43" r="6" />
        <circle cx="199" cy="43" r="6" />
        <circle cx="231" cy="43" r="6" />

        <circle cx="23" cy="66" r="6" />
        <circle cx="55" cy="66" r="6" />
        <circle cx="87" cy="66" r="6" />
        <circle cx="119" cy="66" r="6" />
        <circle cx="151" cy="66" r="6" />
        <circle cx="183" cy="66" r="6" />
        <circle cx="215" cy="66" r="6" />
        <circle cx="247" cy="66" r="6" />

        <circle cx="39" cy="89" r="6" />
        <circle cx="71" cy="89" r="6" />
        <circle cx="103" cy="89" r="6" />
        <circle cx="135" cy="89" r="6" />
        <circle cx="167" cy="89" r="6" />
        <circle cx="199" cy="89" r="6" />
        <circle cx="231" cy="89" r="6" />

        <circle cx="23" cy="112" r="6" />
        <circle cx="55" cy="112" r="6" />
        <circle cx="87" cy="112" r="6" />
        <circle cx="119" cy="112" r="6" />
        <circle cx="151" cy="112" r="6" />
        <circle cx="183" cy="112" r="6" />
        <circle cx="215" cy="112" r="6" />
        <circle cx="247" cy="112" r="6" />

        <circle cx="39" cy="135" r="6" />
        <circle cx="71" cy="135" r="6" />
        <circle cx="103" cy="135" r="6" />
        <circle cx="135" cy="135" r="6" />
        <circle cx="167" cy="135" r="6" />
        <circle cx="199" cy="135" r="6" />
        <circle cx="231" cy="135" r="6" />

        <circle cx="23" cy="158" r="6" />
        <circle cx="55" cy="158" r="6" />
        <circle cx="87" cy="158" r="6" />
        <circle cx="119" cy="158" r="6" />
        <circle cx="151" cy="158" r="6" />
        <circle cx="183" cy="158" r="6" />
        <circle cx="215" cy="158" r="6" />
        <circle cx="247" cy="158" r="6" />

        <circle cx="39" cy="181" r="6" />
        <circle cx="71" cy="181" r="6" />
        <circle cx="103" cy="181" r="6" />
        <circle cx="135" cy="181" r="6" />
        <circle cx="167" cy="181" r="6" />
        <circle cx="199" cy="181" r="6" />
        <circle cx="231" cy="181" r="6" />

        <circle cx="23" cy="204" r="6" />
        <circle cx="55" cy="204" r="6" />
        <circle cx="87" cy="204" r="6" />
        <circle cx="119" cy="204" r="6" />
        <circle cx="151" cy="204" r="6" />
        <circle cx="183" cy="204" r="6" />
        <circle cx="215" cy="204" r="6" />
        <circle cx="247" cy="204" r="6" />
      </g>
    </svg>
  </button>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { useI18n } from 'vue-i18n'

  const { locale, t } = useI18n({ useScope: 'global' })

  const isPt = computed(() => locale.value === 'pt-BR')

  const ariaLabel = computed(() => {
    return isPt.value ? t('language.ariaToggleToEnglish') : t('language.ariaToggleToPortuguese')
  })

  function toggle () {
    locale.value = isPt.value ? 'en-US' : 'pt-BR'
  }
</script>
