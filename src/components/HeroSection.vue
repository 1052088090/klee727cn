<script setup>
import { onMounted, ref } from 'vue'

const progressValues = [88, 94]
const progressWidths = ref([0, 0])

onMounted(() => {
  requestAnimationFrame(() => {
    progressWidths.value = progressValues
  })
})
</script>

<template>
  <section class="hero panel reveal" id="hero">
    <div class="hero-copy">
      <p class="section-kicker">Original Theme Transfer</p>
      <h1>把暖米色与红橙爆点，重构成一个真正能继续长大的 SparkLab 首页。</h1>
      <p class="hero-text">
        这不是单纯把参考站翻版过来，而是把它的情绪保留下来，再用更清晰的实验室结构重新组织：首页负责打动人，模块负责承接内容，时间线负责展开故事。
      </p>

      <div class="hero-actions">
        <a class="btn btn-primary" href="#modules">查看模块入口</a>
        <a class="btn btn-secondary" href="#timeline">打开实验记录</a>
      </div>

      <div class="hero-tags" aria-label="主题关键词">
        <span>Warm Interface</span>
        <span>Story Entry</span>
        <span>Launch Metrics</span>
        <span>Playable Blocks</span>
      </div>
    </div>

    <div class="hero-stage">
      <article class="feature-card feature-card-main">
        <p class="feature-kicker">Lab Snapshot</p>
        <h2>首屏不再只是说明，而是一个能直接带人进入主题的入口面板。</h2>
        <div class="progress-cluster">
          <div>
            <div class="progress-label-row">
              <span>视觉完成度</span>
              <strong>88%</strong>
            </div>
            <div class="progress-track">
              <span :style="{ width: `${progressWidths[0]}%` }"></span>
            </div>
          </div>
          <div>
            <div class="progress-label-row">
              <span>模块可扩展性</span>
              <strong>94%</strong>
            </div>
            <div class="progress-track">
              <span :style="{ width: `${progressWidths[1]}%` }"></span>
            </div>
          </div>
        </div>
      </article>

      <div class="hero-side-grid">
        <article class="feature-card feature-card-soft">
          <p class="feature-kicker">Primary Scene</p>
          <h3>专题感首屏</h3>
          <p>保留角色站式的情绪入口，但内容表达更原创，不再像角色资料页。</p>
        </article>
        <article class="feature-card burst-card">
          <span class="burst-word">BOOM</span>
          <p>Red / Orange / Beige</p>
        </article>
        <article class="metric-card">
          <p class="metric-label">Launch Cards</p>
          <strong>04</strong>
          <span>关键内容入口</span>
        </article>
        <article class="metric-card metric-card-accent">
          <p class="metric-label">Story Rail</p>
          <strong>02</strong>
          <span>叙事层级</span>
        </article>
      </div>
    </div>
  </section>
</template>
