<template>
  <div class="min-h-screen bg-background text-foreground relative overflow-x-hidden">
    <div class="fixed inset-0 flex items-center justify-center pointer-events-none opacity-[0.02]">
      <WolfLogo :size="640" />
    </div>

    <Navbar />

    <main>
      <RouterView />
    </main>

    <Footer />
    <LanguageToggleButton />
    <WhatsAppButton />
  </div>
</template>

<script setup lang="ts">
  import Footer from '@/components/wolf/Footer.vue'
  import LanguageToggleButton from '@/components/wolf/LanguageToggleButton.vue'
  import Navbar from '@/components/wolf/Navbar.vue'
  import WhatsAppButton from '@/components/wolf/WhatsAppButton.vue'
  import WolfLogo from '@/components/wolf/WolfLogo.vue'
</script>
