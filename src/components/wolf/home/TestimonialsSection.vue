<template>
  <section class="py-24 md:py-32 bg-secondary/30">
    <div class="max-w-7xl mx-auto px-6 md:px-10">
      <SectionReveal>
        <div class="text-center mb-16">
          <span class="text-gold text-xs tracking-[0.3em] uppercase font-body">{{ t('home.testimonials.kicker') }}</span>
          <h2 class="font-display text-3xl md:text-5xl mt-4">
            {{ t('home.testimonials.titlePrefix') }} <span class="italic text-gold">{{ t('home.testimonials.titleHighlight') }}</span>
          </h2>
        </div>
      </SectionReveal>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <SectionReveal v-for="(item, i) in testimonials" :key="item.id" :delay="i * 0.1">
          <div class="p-8 border border-border hover:border-gold/30 transition-colors duration-500 space-y-4">
            <div v-if="item.rating" class="flex gap-1">
              <Star
                v-for="j in 5"
                :key="j"
                :class="j <= (item.rating || 0) ? 'fill-gold text-gold' : 'text-border'"
                :size="14"
              />
            </div>
            <p class="font-display text-lg italic text-foreground/90 leading-relaxed">"{{ item.message }}"</p>
            <div class="pt-4 border-t border-border">
              <p class="text-sm font-body text-foreground">{{ item.clientName }}</p>
              <p v-if="item.eventType" class="text-xs text-muted-foreground mt-1 tracking-wider uppercase">{{ item.eventType }}</p>
            </div>
          </div>
        </SectionReveal>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import type { Testimonial } from '@/types/entities'
  import { Star } from 'lucide-vue-next'
  import { computed } from 'vue'
  import { useI18n } from 'vue-i18n'
  import SectionReveal from '@/components/wolf/SectionReveal.vue'

  const { t, tm } = useI18n({ useScope: 'global' })

  const testimonials = computed(() => tm('home.testimonials.items') as unknown as Testimonial[])
</script>
