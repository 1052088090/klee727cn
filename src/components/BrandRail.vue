<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'

const props = defineProps({
  navItems: {
    type: Array,
    required: true,
  },
})

const eyebrow = '\u53ef\u8389 / \u89d2\u8272\u4e13\u9898'
const brandTitlePrimary = '\u53ef\u8389'
const brandTitleSecondary = 'Klee'
const brandCopy =
  '\u897f\u98ce\u9a91\u58eb\u56e2\u7684\u706b\u82b1\u9a91\u58eb\u3002\u5979\u603b\u80fd\u628a\u5192\u9669\u3001\u7206\u5f39\u548c\u7b11\u58f0\u4e00\u8d77\u5e26\u8fdb\u8499\u5fb7\uff0c\u4e5f\u603b\u4f1a\u987a\u624b\u628a\u9ebb\u70e6\u4e00\u8d77\u5e26\u56de\u6765\u3002'
const navLabel = '\u9875\u9762\u5bfc\u822a'
const statusLabel = '\u89d2\u8272\u72b6\u6001'
const statusTag = '\u5df2\u70b9\u4eae'
const tagsLabel = '\u89d2\u8272\u6807\u7b7e'
const pyroLabel = '\u706b'
const sparkValue = ref(74)
const activeSection = ref('hero')
const railEnergy = ref(0)
const brandReady = ref(false)
const tagItems = [
  '\u897f\u98ce\u9a91\u58eb\u56e2 \u00b7 \u706b\u82b1\u9a91\u58eb',
  '\u706b\u5143\u7d20 \u00b7 \u6cd5\u5668',
  '\u561f\u561f\u53ef\u4e0e\u7206\u5f39\u65e5\u5e38',
  '\u7981\u95ed\u5ba4\u5e38\u5ba2',
]
const sectionStates = {
  hero: {
    stage: '\u9996\u5c4f',
    title: '\u9996\u5c4f\u4e3b\u89c6\u89c9\u5df2\u70b9\u4eae',
    copy:
      '\u73b0\u5728\u7684\u7126\u70b9\u662f\u89d2\u8272\u7acb\u7ed8\u548c\u7b2c\u4e00\u5370\u8c61\uff0c\u5c31\u50cf\u53ef\u8389\u4e00\u51fa\u73b0\u5c31\u628a\u9875\u9762\u6c14\u6c1b\u70b9\u4eae\u3002',
  },
  modules: {
    stage: '\u8d44\u6599',
    title: '\u89d2\u8272\u8d44\u6599\u5f00\u59cb\u5c55\u5f00',
    copy:
      '\u8fd9\u4e00\u5c42\u4f1a\u628a\u53ef\u8389\u7684\u5192\u9669\u611f\u3001\u6218\u6597\u5370\u8c61\u548c\u65e5\u5e38\u6c14\u8d28\u8fde\u6210\u66f4\u5b8c\u6574\u7684\u89d2\u8272\u8ba4\u77e5\u3002',
  },
  media: {
    stage: '\u5165\u53e3',
    title: '\u8bed\u97f3\u548c\u56fe\u96c6\u5165\u53e3\u5df2\u6253\u5f00',
    copy:
      '\u53ef\u8389\u7684\u6c14\u8d28\u4e0d\u53ea\u5728\u6587\u5b57\u91cc\uff0c\u4e5f\u5728\u8bed\u97f3\u3001\u753b\u9762\u548c\u8282\u594f\u611f\u91cc\u3002',
  },
  gallery: {
    stage: '\u56fe\u96c6',
    title: '\u56fe\u96c6\u533a\u6b63\u5728\u5347\u6e29',
    copy:
      '\u58c1\u7eb8\u3001\u590f\u65e5\u753b\u9762\u548c\u5468\u5e74\u7eaa\u5ff5\u8ba9\u53ef\u8389\u7684\u89c6\u89c9\u8bb0\u5fc6\u53d8\u5f97\u66f4\u9971\u6ee1\u3002',
  },
  voice: {
    stage: '\u8bed\u97f3',
    title: '\u8bed\u97f3\u5c42\u7684\u6d3b\u529b\u88ab\u62c9\u8fd1\u4e86',
    copy:
      '\u7b11\u58f0\u3001\u65e5\u5e38\u62db\u547c\u548c\u561f\u561f\u53ef\u76f8\u5173\u53f0\u8bcd\uff0c\u4f1a\u8ba9\u4eba\u66f4\u76f4\u63a5\u611f\u53d7\u5230\u53ef\u8389\u7684\u5b58\u5728\u611f\u3002',
  },
  timeline: {
    stage: '\u8bb0\u5fc6',
    title: '\u6d3b\u52a8\u8bb0\u5fc6\u6b63\u5728\u884c\u8fdb',
    copy:
      '\u6d77\u5c9b\u5192\u9669\u3001\u590f\u65e5\u7ae0\u8282\u548c\u7206\u5f39\u4e3b\u9898\u4e00\u8d77\u7ec4\u6210\u4e86\u53ef\u8389\u6700\u70ed\u95f9\u7684\u8bb0\u5fc6\u7ebf\u3002',
  },
  notes: {
    stage: '\u4f59\u97f5',
    title: '\u53ef\u8389\u5370\u8c61\u5728\u8fd9\u91cc\u6536\u675f',
    copy:
      '\u9875\u9762\u6700\u540e\u7559\u4e0b\u7684\uff0c\u4e0d\u53ea\u662f\u7206\u70b8\uff0c\u8fd8\u6709\u4e00\u79cd\u8f7b\u5feb\u53c8\u660e\u4eae\u7684\u89d2\u8272\u4f59\u97f5\u3002',
  },
}
let sectionObserver
let animationFrame
let energyFrame

const activeState = computed(() => sectionStates[activeSection.value] ?? sectionStates.hero)
const sparkBars = computed(() =>
  [0.38, 0.72, 0.48, 0.84, 0.58].map((base, index) => ({
    key: index,
    height: `${(base + railEnergy.value * 0.22) * 100}%`,
  })),
)

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

  const energyTick = (now) => {
    railEnergy.value = (Math.sin(now / 420) + 1) / 2
    energyFrame = requestAnimationFrame(energyTick)
  }

  animationFrame = requestAnimationFrame(tick)
  energyFrame = requestAnimationFrame(energyTick)
  brandReady.value = true

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
  if (energyFrame) {
    cancelAnimationFrame(energyFrame)
  }
  if (sectionObserver) {
    sectionObserver.disconnect()
  }
})
</script>

<template>
  <aside class="rail">
    <div class="rail-shell rail-shell-brand reveal is-visible" :class="{ 'brand-ready': brandReady }">
      <div class="brand-mark" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <p class="eyebrow">{{ eyebrow }}</p>
      <div class="brand-title">{{ brandTitlePrimary }}<br />{{ brandTitleSecondary }}</div>
      <p class="brand-copy">
        {{ brandCopy }}
      </p>

      <div class="brand-status-line">
        <span class="brand-status-dot"></span>
        <span>{{ activeState.stage }}</span>
      </div>
    </div>

    <nav class="nav reveal is-visible" :aria-label="navLabel">
      <a
        v-for="item in navItems"
        :key="item.id"
        :href="`#${item.id}`"
        :class="{ 'is-active': activeSection === item.id }"
      >
        {{ item.label }}
      </a>
    </nav>

    <div class="rail-card rail-card-primary rail-card-status reveal is-visible">
      <div class="rail-card-head">
        <p class="rail-label">{{ statusLabel }}</p>
        <span class="status-pill">{{ statusTag }}</span>
      </div>
      <strong>{{ sparkValue }}%</strong>
      <div class="spark-meter" aria-hidden="true">
        <span v-for="bar in sparkBars" :key="bar.key" :style="{ height: bar.height }"></span>
      </div>
      <p class="rail-text rail-text-strong">
        {{ activeState.title }}
      </p>
      <p class="rail-text">
        {{ activeState.copy }}
      </p>
    </div>

    <div class="rail-card rail-card-tags reveal is-visible">
      <div class="rail-card-head">
        <p class="rail-label">{{ tagsLabel }}</p>
        <span class="mini-chip">{{ pyroLabel }}</span>
      </div>
      <ul class="rail-list">
        <li v-for="item in tagItems" :key="item">{{ item }}</li>
      </ul>
      <div class="rail-pulse-track" aria-hidden="true">
        <span
          v-for="item in navItems"
          :key="item.id"
          class="rail-pulse-node"
          :class="{ 'is-current': activeSection === item.id }"
        ></span>
      </div>
    </div>
  </aside>
</template>
