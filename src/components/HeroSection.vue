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
      <p class="section-kicker">Mondstadt Character Special</p>
      <h1>可莉的世界里，冒险和爆炸总是一起发生。</h1>
      <p class="hero-text">
        她是西风骑士团的火花骑士，是蒙德城里最让人头疼也最让人喜欢的小小麻烦制造者。这里不是冷冰冰的资料页，而是一张围绕可莉展开的角色专题首页：先认识她，再走进她的语音、图集和活动记忆。
      </p>

      <div class="hero-actions">
        <a class="btn btn-primary" href="#modules">查看角色资料</a>
        <a class="btn btn-secondary" href="#timeline">打开活动记忆</a>
      </div>

      <div class="hero-tags" aria-label="主题关键词">
        <span>火花骑士</span>
        <span>蒙德日常</span>
        <span>嘟嘟可</span>
        <span>爆弹冒险</span>
      </div>
    </div>

    <div class="hero-stage">
      <article class="feature-card feature-card-main">
        <p class="feature-kicker">Character Snapshot</p>
        <h2>她不是安静站在背景里的角色，而是会主动把整个页面点燃的小太阳。</h2>
        <div class="progress-cluster">
          <div>
            <div class="progress-label-row">
              <span>角色辨识度</span>
              <strong>88%</strong>
            </div>
            <div class="progress-track">
              <span :style="{ width: `${progressWidths[0]}%` }"></span>
            </div>
          </div>
          <div>
            <div class="progress-label-row">
              <span>专题感染力</span>
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
          <h3>火花骑士</h3>
          <p>可莉的存在感来自她的笑声、爆弹、禁闭室和永远停不下来的冒险冲动。</p>
        </article>
        <article class="feature-card burst-card">
          <span class="burst-word">BOOM</span>
          <p>Pyro / Spark / Dodo</p>
        </article>
        <article class="metric-card">
          <p class="metric-label">Element</p>
          <strong>火</strong>
          <span>高热度角色印象</span>
        </article>
        <article class="metric-card metric-card-accent">
          <p class="metric-label">Weapon</p>
          <strong>法器</strong>
          <span>轻快又危险</span>
        </article>
      </div>
    </div>
  </section>
</template>
