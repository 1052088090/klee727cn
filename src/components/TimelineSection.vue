<script setup>
const timelineItems = [
  {
    date: '蒙德日常',
    title: '火花骑士与禁闭室',
    copy: '可莉最经典的角色印象之一，就是总能把整个骑士团弄得又无奈又宠着她的那种日常混乱感。',
  },
  {
    date: '节庆记忆',
    title: '被认真照看的小小麻烦',
    copy: '无论是琴、阿贝多还是凯亚、丽莎，围绕可莉展开的互动总会让她显得既被照看，又带着一点让人头疼的可爱。',
  },
  {
    date: '夏日活动',
    title: '海岛与冒险记忆',
    copy: '一提到可莉，很多人都会立刻想到那些明亮、轻快、充满夏天气息的活动场景和节庆氛围。',
  },
  {
    date: '角色印象',
    title: '嘟嘟可、笑声与火花',
    copy: '无论是台词、动作还是活动剧情，可莉始终都带着一种把页面气氛瞬间点亮的角色能量。',
  },
  {
    date: '专题延展',
    title: '从角色页长成完整主题站',
    copy: '正因为她的记忆点足够鲜明，所以图集、语音、活动与周边感内容都很适合继续围绕她往下扩写。',
  },
]

const summaryCards = [
  {
    tag: 'Now',
    title: '活动记忆已扩展',
    copy: '这一块已经从概览说明升级成可继续扩展的时间线专题区。',
    state: '已完成',
    accent: true,
  },
  {
    tag: 'Next',
    title: '补真实活动图与标题封面',
    copy: '下一步最自然的是给夏日活动和节庆记忆接更多真实图像与专题视觉。',
    state: '待开始',
  },
  {
    tag: 'Later',
    title: '把活动区拆成独立专题页',
    copy: '如果你后面想做更完整的可莉活动站，这一块已经具备继续拆页的基础。',
    state: '可扩展',
  },
]
</script>

<template>
  <section class="story-grid reveal">
    <section class="timeline panel" id="timeline">
      <div class="panel-heading compact">
        <div>
          <p class="section-kicker">Activity Memory</p>
          <h2>可莉最让人记住的，从来不只是爆炸，还有那些轻快又温暖的活动记忆。</h2>
        </div>
      </div>

      <div class="timeline-list">
        <article v-for="item in timelineItems" :key="item.title" class="timeline-item">
          <span class="timeline-dot"></span>
          <div class="timeline-content">
            <p class="timeline-date">{{ item.date }}</p>
            <h3>{{ item.title }}</h3>
            <p>{{ item.copy }}</p>
          </div>
        </article>
      </div>
    </section>

    <section class="launch panel">
      <div class="panel-heading compact">
        <div>
          <p class="section-kicker">Activity Board</p>
          <h2>这一段现在已经变成可继续长内容的活动摘要板。</h2>
        </div>
      </div>

      <div class="task-list">
        <article
          v-for="card in summaryCards"
          :key="card.title"
          class="task-card"
          :class="{ 'active-task': card.accent }"
        >
          <div>
            <p class="task-tag">{{ card.tag }}</p>
            <h3>{{ card.title }}</h3>
            <p class="task-copy">{{ card.copy }}</p>
          </div>
          <span>{{ card.state }}</span>
        </article>
      </div>
    </section>
  </section>
</template>
