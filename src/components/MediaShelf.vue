<script setup>
const mediaCards = [
  {
    title: '图集精选 · Spark Gallery',
    tag: 'Gallery',
    href: '#gallery',
    copy: '收纳可莉的角色立绘、活动插图、夏日场景和轻松冒险气氛，让整站随时都能往图集页扩展。',
    meta: ['角色立绘', '夏日活动', '暖色画面'],
  },
  {
    title: '语音精选 · Voice Capsule',
    tag: 'Audio',
    href: '#voice',
    copy: '把可莉最有代表性的台词、招呼、冒险语气和嘟嘟可相关短句放进一个更轻松的语音入口里。',
    meta: ['角色台词', '轻快语气', '播放器入口'],
  },
  {
    title: '活动记忆 · Event Relay',
    tag: 'Event',
    href: '#timeline',
    copy: '围绕可莉出现过的重要活动与节日记忆做专题卡，既能承接剧情回忆，也能维持整个页面的热闹感。',
    meta: ['海岛记忆', '活动节点', '专题延展'],
  },
]
</script>

<template>
  <section class="media panel reveal" id="media">
    <div class="panel-heading">
      <div>
        <p class="section-kicker">Gallery & Voice</p>
        <h2>把可莉最适合被反复回看的内容收进同一层入口。</h2>
      </div>
      <p class="panel-copy">
        图集、语音和活动记忆是可莉专题站最自然的三块内容，也是最适合继续扩成独立页面的部分。
      </p>
    </div>

    <div class="warehouse-grid">
      <article v-for="card in mediaCards" :key="card.title" class="warehouse-card">
        <div class="warehouse-top">
          <span class="warehouse-tag">{{ card.tag }}</span>
          <a class="warehouse-link" :href="card.href">Open</a>
        </div>
        <h3>{{ card.title }}</h3>
        <p>{{ card.copy }}</p>
        <div class="warehouse-meta">
          <span v-for="item in card.meta" :key="item">{{ item }}</span>
        </div>
      </article>
    </div>
  </section>
</template>
