<script setup>
import { useReveal } from './useReveal'
import BrandRail from './components/BrandRail.vue'
import HeroSection from './components/HeroSection.vue'
import ModuleArray from './components/ModuleArray.vue'
import MediaShelf from './components/MediaShelf.vue'
import TimelineSection from './components/TimelineSection.vue'
import FieldRules from './components/FieldRules.vue'

const navItems = [
  { id: 'hero', label: '启动页' },
  { id: 'modules', label: '模块区' },
  { id: 'media', label: '内容仓' },
  { id: 'timeline', label: '时间线' },
  { id: 'notes', label: '设计规则' },
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
      <TimelineSection />
      <FieldRules />
    </main>
  </div>
</template>
