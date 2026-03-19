<script setup>
import { useReveal } from './useReveal'
import BrandRail from './components/BrandRail.vue'
import HeroSection from './components/HeroSection.vue'
import ModuleArray from './components/ModuleArray.vue'
import MediaShelf from './components/MediaShelf.vue'
import GallerySection from './components/GallerySection.vue'
import VoiceSection from './components/VoiceSection.vue'
import TimelineSection from './components/TimelineSection.vue'
import FieldRules from './components/FieldRules.vue'

const navItems = [
  { id: 'hero', label: '角色首页' },
  { id: 'modules', label: '角色资料' },
  { id: 'media', label: '图集语音' },
  { id: 'gallery', label: '图集精选' },
  { id: 'voice', label: '语音精选' },
  { id: 'timeline', label: '活动记忆' },
  { id: 'notes', label: '可莉印象' },
]

const sparkNodes = [
  { top: '9%', left: '24%', size: '10px', delay: '0s', duration: '5.8s' },
  { top: '18%', left: '78%', size: '8px', delay: '0.9s', duration: '6.6s' },
  { top: '31%', left: '56%', size: '12px', delay: '1.5s', duration: '7.2s' },
  { top: '47%', left: '88%', size: '9px', delay: '0.4s', duration: '6s' },
  { top: '58%', left: '18%', size: '11px', delay: '1.1s', duration: '7.8s' },
  { top: '66%', left: '72%', size: '7px', delay: '2.1s', duration: '5.6s' },
  { top: '79%', left: '36%', size: '10px', delay: '0.7s', duration: '6.8s' },
  { top: '86%', left: '84%', size: '8px', delay: '1.8s', duration: '7.4s' },
]

useReveal()
</script>

<template>
  <div class="page-orb orb-left" aria-hidden="true"></div>
  <div class="page-orb orb-right" aria-hidden="true"></div>
  <div class="page-wash" aria-hidden="true"></div>
  <div class="page-sparks" aria-hidden="true">
    <span
      v-for="spark in sparkNodes"
      :key="`${spark.top}-${spark.left}`"
      class="page-spark"
      :style="{
        top: spark.top,
        left: spark.left,
        width: spark.size,
        height: spark.size,
        animationDelay: spark.delay,
        animationDuration: spark.duration,
      }"
    ></span>
  </div>

  <div class="app-layout">
    <BrandRail :nav-items="navItems" />

    <main class="canvas">
      <HeroSection />
      <ModuleArray />
      <MediaShelf />
      <GallerySection />
      <VoiceSection />
      <TimelineSection />
      <FieldRules />
    </main>
  </div>
</template>
