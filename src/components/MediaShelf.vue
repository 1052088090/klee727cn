<script setup>
const mediaCards = [
  {
    title: '图集仓 · Spark Gallery',
    tag: 'Gallery',
    copy: '把角色图、活动图、截图和视觉素材装进统一卡片系统，后面可以继续接筛选和大图查看。',
    meta: ['12 组画面', '暖色封面', '专题封装'],
  },
  {
    title: '语音仓 · Voice Capsule',
    tag: 'Audio',
    copy: '音频模块将来可以直接接播放器、语音列表和短语标签，不需要再重做首页结构。',
    meta: ['播放器入口', '角色短语', '状态标签'],
  },
  {
    title: '活动仓 · Event Relay',
    tag: 'Event',
    copy: '适合把限时活动、专题企划或联动入口做成高饱和爆点卡，和常规内容层级分开。',
    meta: ['爆点入口', '短期专题', '时间节点'],
  },
]
</script>

<template>
  <section class="media panel reveal" id="media">
    <div class="panel-heading">
      <div>
        <p class="section-kicker">Content Warehouse</p>
        <h2>先补一个真实模块区，让这个首页不只是概念稿。</h2>
      </div>
      <p class="panel-copy">
        这三个模块是后续最适合先落地的内容方向，也已经按照 Vue 组件结构准备好了扩展位。
      </p>
    </div>

    <div class="warehouse-grid">
      <article v-for="card in mediaCards" :key="card.title" class="warehouse-card">
        <div class="warehouse-top">
          <span class="warehouse-tag">{{ card.tag }}</span>
          <button class="warehouse-link" type="button">Open</button>
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
