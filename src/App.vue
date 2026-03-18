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

useReveal()
</script>

<template>
  <div class="page-orb orb-left" aria-hidden="true"></div>
  <div class="page-orb orb-right" aria-hidden="true"></div>

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
