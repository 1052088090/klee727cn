<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const props = defineProps({
  navItems: {
    type: Array,
    required: true,
  },
})

const sparkValue = ref(74)
const activeSection = ref('hero')
let sectionObserver
let animationFrame

onMounted(() => {
  const target = 91
  const start = 74
  const duration = 1100
  const begin = performance.now()

  const tick = (now) => {
    const progress = Math.min((now - begin) / duration, 1)
    sparkValue.value = Math.round(start + (target - start) * progress)
    if (progress < 1) {
      animationFrame = requestAnimationFrame(tick)
    }
  }

  animationFrame = requestAnimationFrame(tick)

  const sections = props.navItems
    .map((item) => document.getElementById(item.id))
    .filter(Boolean)

  sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        activeSection.value = entry.target.id
      })
    },
    {
      rootMargin: '-35% 0px -45% 0px',
      threshold: 0.12,
    },
  )

  sections.forEach((section) => sectionObserver.observe(section))
})

onUnmounted(() => {
  if (animationFrame) {
    cancelAnimationFrame(animationFrame)
  }
  if (sectionObserver) {
    sectionObserver.disconnect()
  }
})
</script>

<template>
  <aside class="rail">
    <div class="rail-shell reveal is-visible">
      <div class="brand-mark" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <p class="eyebrow">SparkLab / Launch Deck</p>
      <div class="brand-title">AWEN<br />SparkLab</div>
      <p class="brand-copy">
        把主题站的热度、实验室的结构和专题页的节奏，组装成一个更适合持续扩展的原创首页。
      </p>
    </div>

    <nav class="nav reveal is-visible" aria-label="页面导航">
      <a
        v-for="item in navItems"
        :key="item.id"
        :href="`#${item.id}`"
        :class="{ 'is-active': activeSection === item.id }"
      >
        {{ item.label }}
      </a>
    </nav>

    <div class="rail-card rail-card-primary reveal is-visible">
      <div class="rail-card-head">
        <p class="rail-label">今日燃点</p>
        <span class="status-pill">Live</span>
      </div>
      <strong>{{ sparkValue }}%</strong>
      <p class="rail-text">
        当前版本已经具备首页叙事、模块入口和时间轴骨架，适合继续接入图集、语音或活动专题。
      </p>
    </div>

    <div class="rail-card reveal is-visible">
      <div class="rail-card-head">
        <p class="rail-label">运行模式</p>
        <span class="mini-chip">C + A</span>
      </div>
      <ul class="rail-list">
        <li>实验室结构</li>
        <li>专题站首屏</li>
        <li>暖色爆点系统</li>
        <li>移动端优先重排</li>
      </ul>
    </div>
  </aside>
</template>
