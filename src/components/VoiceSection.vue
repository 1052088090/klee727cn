<script setup>
const voiceCards = [
  {
    scene: '问候',
    title: '一开口就带着火花感',
    copy: '角色报到时的招呼语气，最能直接听出可莉那种轻快、直接、完全藏不住兴奋的状态。',
    audio: '/audio/klee/hello.ogg',
  },
  {
    scene: '冒险',
    title: '总想往更远的地方跑',
    copy: '这一条最适合放在冒险印象里，整句都带着“马上出门”“马上去玩”的冲动感。',
    audio: '/audio/klee/adventures.ogg',
  },
  {
    scene: '嘟嘟可',
    title: '最稳定的情绪锚点',
    copy: '只要提到嘟嘟可，整个角色的童趣、依赖感和小小世界观就会立刻完整起来。',
    audio: '/audio/klee/dodoco.ogg',
  },
  {
    scene: '骑士团',
    title: '被照看，也被头疼',
    copy: '和琴相关的语音最能把“有点害怕、但又很依赖”的那层关系清楚地表现出来。',
    audio: '/audio/klee/about-jean.ogg',
  },
  {
    scene: '早安',
    title: '一醒来就想去玩',
    copy: '这条非常适合放在首页试听，轻松、明亮，而且几乎是可莉日常状态的浓缩版。',
    audio: '/audio/klee/good-morning.ogg',
  },
  {
    scene: '晚安',
    title: '热闹之后仍然柔软',
    copy: '夜晚语音能把热闹收住，留下那种很小很软、需要被带回家的角色尾音。',
    audio: '/audio/klee/good-night.ogg',
  },
]
</script>

<template>
  <section class="voice panel reveal" id="voice">
    <div class="panel-heading">
      <div>
        <p class="section-kicker">Voice Capsule</p>
        <h2>语音精选先用角色语气和场景标签搭起入口页。</h2>
      </div>
      <p class="panel-copy">
        这一版先不接真实音频文件，而是先把语音区的卡片结构、场景标签和阅读节奏稳定下来，后面随时可以继续接播放器。
      </p>
    </div>

    <div class="voice-grid">
      <article v-for="card in voiceCards" :key="card.title" class="voice-card">
        <div class="voice-head">
          <span class="voice-scene">{{ card.scene }}</span>
          <span class="voice-badge">Voice</span>
        </div>
        <h3>{{ card.title }}</h3>
        <p>{{ card.copy }}</p>
        <audio class="voice-audio" :src="card.audio" controls preload="none">
          你的浏览器暂不支持音频播放。
        </audio>
        <div class="voice-wave" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </article>
    </div>
  </section>
</template>
