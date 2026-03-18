<script setup>
const voiceCards = [
  {
    scene: '问候',
    title: '一开口就带着火花感',
    copy: '可莉的语气总是比页面先亮起来，轻快、直接，还带一点完全藏不住的兴奋感。',
  },
  {
    scene: '冒险',
    title: '总想往更远的地方跑',
    copy: '她的台词里永远有“出去玩”“出去冒险”的冲动，这也是角色最讨喜的驱动力之一。',
  },
  {
    scene: '嘟嘟可',
    title: '最稳定的情绪锚点',
    copy: '只要提到嘟嘟可，整个角色的童趣、依赖感和小小世界观就会立刻完整起来。',
  },
  {
    scene: '骑士团',
    title: '被照看，也被头疼',
    copy: '她和骑士团成员之间的关系，总能把“麻烦制造者”和“被宠着的小孩”这两层同时展现出来。',
  },
  {
    scene: '战斗',
    title: '可爱外表下的高热度',
    copy: '哪怕只是战斗语气，也能听出那种把爆弹当玩具、把危险当冒险的独特角色节奏。',
  },
  {
    scene: '晚安',
    title: '热闹之后仍然柔软',
    copy: '可莉的角色魅力不只在热闹时刻，也在那些能让人感到天真和安心的收束瞬间。',
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
        这版先不接真实音频文件，而是先把语音区的卡片结构、标签风格和阅读节奏建立起来。
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
