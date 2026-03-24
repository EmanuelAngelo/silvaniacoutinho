<template>
  <section class="py-24 md:py-32 bg-background">
    <div class="max-w-7xl mx-auto px-6 md:px-10">
      <SectionReveal>
        <div class="text-center mb-16">
          <span class="text-gold text-xs tracking-[0.3em] uppercase font-body">{{ t('home.services.kicker') }}</span>
          <h2 class="font-display text-3xl md:text-5xl mt-4">
            {{ t('home.services.titlePrefix') }} <span class="italic text-gold">{{ t('home.services.titleHighlight') }}</span>
          </h2>
        </div>
      </SectionReveal>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
        <SectionReveal v-for="(service, i) in services" :key="service.slug" :delay="i * 0.08">
          <RouterLink
            class="group block bg-background p-8 md:p-10 hover:bg-secondary/50 transition-all duration-500"
            :to="`/portfolio/${service.slug}`"
          >
            <component
              :is="service.icon"
              class="text-gold mb-6 group-hover:scale-110 transition-transform duration-300"
              :size="28"
              :stroke-width="1"
            />
            <h3 class="font-display text-xl mb-3">{{ service.title }}</h3>
            <p class="text-muted-foreground text-sm leading-relaxed">{{ service.description }}</p>
            <div class="mt-6 w-0 group-hover:w-8 h-px bg-gold transition-all duration-500" />
          </RouterLink>
        </SectionReveal>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import type { Component } from 'vue'
  import { Building, Camera, Heart, Image, Sparkles, Users } from 'lucide-vue-next'
  import { computed } from 'vue'
  import { useI18n } from 'vue-i18n'
  import SectionReveal from '@/components/wolf/SectionReveal.vue'

  type ServiceItem = {
    slug: string
    title: string
    description: string
  }

  const iconBySlug: Record<string, Component> = {
    'clareamento': Sparkles,
    'ortodontia': Users,
    'implantes': Building,
    'estetica-do-sorriso': Heart,
    'prevencao': Camera,
    'clinica-geral': Image,
  }

  const { t, tm } = useI18n({ useScope: 'global' })

  const services = computed(() => {
    const items = tm('home.services.items') as unknown as ServiceItem[]
    return items.map(item => ({
      ...item,
      icon: iconBySlug[item.slug],
    }))
  })
</script>
