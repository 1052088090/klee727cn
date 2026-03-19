<script setup>
import { computed, onMounted, ref } from 'vue'

const sectionKicker = 'Mondstadt Character Special'
const heroTitle =
  '\u53ef\u8389\u7684\u4e16\u754c\u91cc\uff0c\u5192\u9669\u548c\u7206\u70b8\u603b\u662f\u4e00\u8d77\u53d1\u751f\u3002'
const heroCopy =
  '\u5979\u662f\u897f\u98ce\u9a91\u58eb\u56e2\u7684\u706b\u82b1\u9a91\u58eb\uff0c\u662f\u8499\u5fb7\u57ce\u91cc\u6700\u8ba9\u4eba\u5934\u75bc\u4e5f\u6700\u8ba9\u4eba\u559c\u6b22\u7684\u5c0f\u5c0f\u9ebb\u70e6\u5236\u9020\u8005\u3002\u8fd9\u91cc\u4e0d\u662f\u51b7\u51b0\u51b0\u7684\u8d44\u6599\u9875\uff0c\u800c\u662f\u4e00\u5f20\u56f4\u7ed5\u53ef\u8389\u5c55\u5f00\u7684\u89d2\u8272\u4e13\u9898\u9996\u9875\uff1a\u5148\u8ba4\u8bc6\u5979\uff0c\u518d\u8d70\u8fdb\u5979\u7684\u8bed\u97f3\u3001\u56fe\u96c6\u548c\u6d3b\u52a8\u8bb0\u5fc6\u3002'
const primaryAction = '\u67e5\u770b\u89d2\u8272\u8d44\u6599'
const secondaryAction = '\u6253\u5f00\u6d3b\u52a8\u8bb0\u5fc6'
const tagLabel = '\u4e3b\u9898\u5173\u952e\u8bcd'
const heroTags = [
  '\u706b\u82b1\u9a91\u58eb',
  '\u8499\u5fb7\u65e5\u5e38',
  '\u561f\u561f\u53ef',
  '\u7206\u5f39\u5192\u9669',
]
const snapshotTitle =
  '\u53ef\u8389\u4e0d\u662f\u7ad9\u5728\u80cc\u666f\u91cc\u7684\u89d2\u8272\uff0c\u800c\u662f\u4f1a\u628a\u6574\u4e2a\u9875\u9762\u70b9\u4eae\u7684\u5c0f\u592a\u9633\u3002'
const snapshotCopy =
  '\u628a\u89d2\u8272\u7acb\u7ed8\u653e\u5230\u9996\u5c4f\u4e4b\u540e\uff0c\u9996\u9875\u4f1a\u66f4\u50cf\u771f\u6b63\u7684\u53ef\u8389\u4e13\u9898\u7ad9\uff1a\u5148\u770b\u89c1\u5979\uff0c\u518d\u7ee7\u7eed\u8bfb\u5979\u7684\u5192\u9669\u611f\u3001\u65e5\u5e38\u611f\u548c\u6d3b\u52a8\u8bb0\u5fc6\u3002'
const portraitBadges = [
  '\u897f\u98ce\u9a91\u58eb\u56e2',
  '\u706b\u5143\u7d20',
  '\u70c2\u6f2b\u5371\u9669',
]
const portraitAlt = '\u53ef\u8389\u89d2\u8272\u7acb\u7ed8'
const primarySceneTitle = '\u706b\u82b1\u9a91\u58eb'
const primarySceneCopy =
  '\u53ef\u8389\u7684\u5b58\u5728\u611f\u6765\u81ea\u5979\u7684\u7b11\u58f0\u3001\u7206\u5f39\u3001\u7981\u95ed\u5ba4\u548c\u6c38\u8fdc\u505c\u4e0d\u4e0b\u6765\u7684\u5192\u9669\u51b2\u52a8\u3002'
const metricCards = [
  {
    label: 'Element',
    value: '\u706b',
    copy: '\u9ad8\u70ed\u5ea6\u89d2\u8272\u5370\u8c61',
  },
  {
    label: 'Weapon',
    value: '\u6cd5\u5668',
    copy: '\u8f7b\u5feb\u53c8\u5371\u9669',
    accent: true,
  },
]
const progressItems = [
  {
    label: '\u89d2\u8272\u8fa8\u8bc6\u5ea6',
    value: 88,
  },
  {
    label: '\u4e13\u9898\u611f\u67d3\u529b',
    value: 94,
  },
]
const progressWidths = ref(progressItems.map(() => 0))
const motionReady = ref(false)
const motionEnabled = ref(true)
const portraitShiftX = ref(0)
const portraitShiftY = ref(0)
const portraitCardStyle = computed(() => ({
  '--portrait-shift-x': `${portraitShiftX.value}px`,
  '--portrait-shift-y': `${portraitShiftY.value}px`,
}))

function handlePointerMove(event) {
  if (!motionEnabled.value || event.pointerType === 'touch') return

  const bounds = event.currentTarget.getBoundingClientRect()
  const ratioX = (event.clientX - bounds.left) / bounds.width - 0.5
  const ratioY = (event.clientY - bounds.top) / bounds.height - 0.5

  portraitShiftX.value = ratioX * 18
  portraitShiftY.value = ratioY * 14
}

function resetPointerShift() {
  portraitShiftX.value = 0
  portraitShiftY.value = 0
}

onMounted(() => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const coarsePointer = window.matchMedia('(pointer: coarse)').matches
  motionEnabled.value = !reducedMotion && !coarsePointer

  requestAnimationFrame(() => {
    progressWidths.value = progressItems.map((item) => item.value)
    motionReady.value = true
  })
})
</script>

<template>
  <section class="hero panel reveal" id="hero">
    <div class="hero-copy">
      <p class="section-kicker">{{ sectionKicker }}</p>
      <h1>{{ heroTitle }}</h1>
      <p class="hero-text">
        {{ heroCopy }}
      </p>

      <div class="hero-actions">
        <a class="btn btn-primary" href="#modules">{{ primaryAction }}</a>
        <a class="btn btn-secondary" href="#timeline">{{ secondaryAction }}</a>
      </div>

      <div class="hero-tags" :aria-label="tagLabel">
        <span v-for="tag in heroTags" :key="tag">{{ tag }}</span>
      </div>
    </div>

    <div class="hero-stage">
      <article
        class="feature-card feature-card-main hero-portrait-card"
        :class="{ 'hero-portrait-ready': motionReady, 'hero-portrait-static': !motionEnabled }"
        :style="portraitCardStyle"
        @pointermove="handlePointerMove"
        @pointerleave="resetPointerShift"
      >
        <div class="hero-portrait-copy">
          <p class="feature-kicker">Character Snapshot</p>
          <h2>{{ snapshotTitle }}</h2>
          <p>{{ snapshotCopy }}</p>
          <div class="hero-portrait-badges">
            <span v-for="badge in portraitBadges" :key="badge">{{ badge }}</span>
          </div>

          <div class="progress-cluster">
            <div v-for="(item, index) in progressItems" :key="item.label">
              <div class="progress-label-row">
                <span>{{ item.label }}</span>
                <strong>{{ item.value }}%</strong>
              </div>
              <div class="progress-track">
                <span :style="{ width: `${progressWidths[index]}%` }"></span>
              </div>
            </div>
          </div>
        </div>

        <div class="hero-portrait-stage" aria-hidden="true">
          <div class="hero-portrait-halo"></div>
          <div class="hero-portrait-ring hero-portrait-ring-a"></div>
          <div class="hero-portrait-ring hero-portrait-ring-b"></div>
          <img
            class="hero-portrait-image"
            src="/images/klee/hero/klee-portrait.png"
            :alt="portraitAlt"
            loading="eager"
          />
        </div>
      </article>

      <div class="hero-side-grid">
        <article class="feature-card feature-card-soft">
          <p class="feature-kicker">Primary Scene</p>
          <h3>{{ primarySceneTitle }}</h3>
          <p>{{ primarySceneCopy }}</p>
        </article>
        <article class="feature-card burst-card">
          <span class="burst-word">BOOM</span>
          <p>Pyro / Spark / Dodo</p>
        </article>
        <article
          v-for="card in metricCards"
          :key="card.label"
          class="metric-card"
          :class="{ 'metric-card-accent': card.accent }"
        >
          <p class="metric-label">{{ card.label }}</p>
          <strong>{{ card.value }}</strong>
          <span>{{ card.copy }}</span>
        </article>
      </div>
    </div>
  </section>
</template>
