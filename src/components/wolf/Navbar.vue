<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
    :class="[
      scrolled ? 'bg-background/90 backdrop-blur-md border-b border-gold/20' : 'bg-transparent',
      hidden && !isOpen ? '-translate-y-full' : 'translate-y-0',
    ]"
  >
    <nav class="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-20">
      <RouterLink class="flex items-center gap-3 group" to="/">
        <WolfLogo gold :size="36" />
        <span class="font-display text-xl tracking-wider group-hover:text-gold transition-colors">
          {{ t('brand.name') }}
        </span>
      </RouterLink>

      <div class="hidden md:flex items-center gap-10">
        <RouterLink
          v-for="link in links"
          :key="link.path"
          class="text-xs font-body tracking-[0.2em] transition-colors duration-300"
          :class="route.path === link.path ? 'text-gold' : 'text-foreground/70 hover:text-gold'"
          :to="link.path"
        >
          {{ link.label }}
        </RouterLink>
      </div>

      <button
        :aria-label="isOpen ? t('nav.ariaCloseMenu') : t('nav.ariaMenu')"
        class="md:hidden text-foreground hover:text-gold transition-colors"
        type="button"
        @click="isOpen = !isOpen"
      >
        <X v-if="isOpen" :size="24" />
        <Menu v-else :size="24" />
      </button>
    </nav>

    <Transition name="wolf-fade">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-[60] bg-background/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8 px-6 py-24 overflow-y-auto"
      >
        <button
          :aria-label="t('nav.ariaCloseMenu')"
          class="absolute top-6 right-6 text-foreground hover:text-gold transition-colors"
          type="button"
          @click="isOpen = false"
        >
          <X :size="28" />
        </button>

        <WolfLogo gold :size="60" />
        <div v-for="(link, i) in links" :key="link.path">
          <RouterLink
            v-motion
            class="font-display text-3xl tracking-wider transition-colors"
            :class="route.path === link.path ? 'text-gold' : 'text-foreground/70 hover:text-gold'"
            :enter="{ opacity: 1, y: 0 }"
            :initial="{ opacity: 0, y: 20 }"
            :to="link.path"
            :transition="{ delay: i * 0.1 }"
            @click="isOpen = false"
          >
            {{ link.label }}
          </RouterLink>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
  import { Menu, X } from 'lucide-vue-next'
  import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { useRoute } from 'vue-router'
  import WolfLogo from './WolfLogo.vue'

  const { t } = useI18n({ useScope: 'global' })

  const links = computed(() => [
    { label: t('nav.home'), path: '/' },
    { label: t('nav.portfolio'), path: '/portfolio' },
    { label: t('nav.about'), path: '/sobre' },
    { label: t('nav.contact'), path: '/contato' },
  ])

  const route = useRoute()

  const isOpen = ref(false)
  const scrolled = ref(false)
  const hidden = ref(false)
  const lastScroll = ref(0)

  watch(
    () => route.fullPath,
    () => {
      isOpen.value = false
    },
  )

  function onScroll () {
    const current = window.scrollY
    scrolled.value = current > 50
    hidden.value = current > lastScroll.value && current > 100
    lastScroll.value = current
  }

  function onKeyDown (e: KeyboardEvent) {
    if (!isOpen.value) return
    if (e.key === 'Escape') isOpen.value = false
  }

  function lockScroll (lock: boolean) {
    document.body.style.overflow = lock ? 'hidden' : ''
  }

  watch(
    isOpen,
    open => lockScroll(open),
    { immediate: true },
  )

  onMounted(() => {
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('keydown', onKeyDown)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', onScroll)
    window.removeEventListener('keydown', onKeyDown)
    lockScroll(false)
  })
</script>

<style scoped>
.wolf-fade-enter-active,
.wolf-fade-leave-active {
  transition: opacity 240ms ease;
}

.wolf-fade-enter-from,
.wolf-fade-leave-to {
  opacity: 0;
}
</style>
