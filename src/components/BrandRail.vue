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
      <p class="eyebrow">Klee / Character Special</p>
      <div class="brand-title">可莉<br />Klee</div>
      <p class="brand-copy">
        西风骑士团的火花骑士。她总能把冒险、爆弹和笑声一起带进蒙德，也总会顺手把麻烦一起带回来。
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
        <p class="rail-label">角色状态</p>
        <span class="status-pill">Live</span>
      </div>
      <strong>{{ sparkValue }}%</strong>
      <p class="rail-text">
        活泼、冒失、热情、危险又可爱。可莉的角色魅力从来不只在战斗表现，更在她那种一开口就能点亮页面的存在感。
      </p>
    </div>

    <div class="rail-card reveal is-visible">
      <div class="rail-card-head">
        <p class="rail-label">角色标签</p>
        <span class="mini-chip">Pyro</span>
      </div>
      <ul class="rail-list">
        <li>西风骑士团 · 火花骑士</li>
        <li>火元素 · 法器</li>
        <li>嘟嘟可与爆弹日常</li>
        <li>禁闭室常客</li>
      </ul>
    </div>
  </aside>
</template>
