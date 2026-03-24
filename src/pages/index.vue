<template>
  <div>
    <HeroSection />
    <CategoryFilmstrip />
    <FeaturedPhotos />
    <ServicesSection />
    <AboutPreview />
    <TestimonialsSection />
    <CTASection />
  </div>
</template>

<script lang="ts" setup>
  import AboutPreview from '@/components/wolf/home/AboutPreview.vue'
  import CategoryFilmstrip from '@/components/wolf/home/CategoryFilmstrip.vue'
  import CTASection from '@/components/wolf/home/CTASection.vue'
  import FeaturedPhotos from '@/components/wolf/home/FeaturedPhotos.vue'
  import HeroSection from '@/components/wolf/home/HeroSection.vue'
  import ServicesSection from '@/components/wolf/home/ServicesSection.vue'
  import TestimonialsSection from '@/components/wolf/home/TestimonialsSection.vue'
</script>
