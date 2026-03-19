<script setup>
const timelineItems = [
  {
    date: '1.6 夏日篇',
    title: '金苹果群岛的第一封邀请',
    copy:
      '从海风、浪花和嘟嘟可的呼唤开始，可莉最容易被记住的夏日印象，几乎都能追溯到这一段轻快又明亮的群岛冒险。',
    image: '/images/klee/events/midsummer-island-adventure.webp',
    alt: '可莉相关活动 Midsummer Island Adventure 官方封面',
    meta: ['金苹果群岛', '海岛冒险', '夏日记忆'],
  },
  {
    date: '3.8 夏日篇',
    title: '清夏！乐园？大秘境！',
    copy:
      '乐园气息、彩色装置和更饱满的节庆氛围，把可莉的冒险感从海岛延伸到更完整的夏季主题舞台里。',
    image: '/images/klee/events/version-3.8-klee-wallpaper.webp',
    alt: '可莉 Version 3.8 官方活动壁纸',
    meta: ['秘境乐园', '彩色舞台', '版本主视觉'],
  },
  {
    date: '爆弹主题',
    title: 'Bombonanza 的火花预告',
    copy:
      '这类围绕爆弹、试炼和主题挑战展开的预告图，把可莉最鲜明的危险可爱感直接推到画面正中央，专题气质也最强。',
    image: '/images/klee/events/bombonanza-klee-preview.webp',
    alt: '可莉 Bombonanza 官方预告图',
    meta: ['爆弹主题', '活动预告', '火花骑士'],
  },
  {
    date: '周年画面',
    title: '节庆合照里的可莉',
    copy:
      '到了周年庆和群像纪念图里，可莉往往会变成最先被看见的亮色之一，负责把整张画面的气氛点亮。',
    image: '/images/klee/events/anniversary-wallpaper-1.webp',
    alt: '可莉周年纪念官方壁纸',
    meta: ['周年壁纸', '群像纪念', '蒙德日常'],
  },
]

const summaryCards = [
  {
    tag: 'Activity Look',
    title: '活动区现在是真实封面档案',
    copy: '不再是开发态说明卡，而是可继续扩充的可莉活动视觉时间线。',
  },
  {
    tag: 'Summer Mood',
    title: '重点保留海岛和夏日章节',
    copy: '因为可莉最强的活动识别度，本来就集中在明亮、热闹、带有假日气味的夏季篇章。',
  },
  {
    tag: 'Klee Signal',
    title: '爆弹、嘟嘟可和节庆感并列出现',
    copy: '这一块会持续承接后面的活动图、专题封面和版本视觉，不用再改结构。',
  },
]
</script>

<template>
  <section class="story-grid reveal">
    <section class="timeline panel" id="timeline">
      <div class="panel-heading compact">
        <div>
          <p class="section-kicker">Activity Memory</p>
          <h2>可莉最热闹的记忆，通常都发生在阳光、节庆和冒险一起出现的时候。</h2>
        </div>
      </div>

      <div class="timeline-list timeline-list-rich">
        <article v-for="item in timelineItems" :key="item.title" class="timeline-item timeline-item-rich">
          <span class="timeline-dot"></span>
          <div class="timeline-content timeline-content-rich">
            <div class="timeline-cover">
              <img :src="item.image" :alt="item.alt" loading="lazy" />
            </div>
            <div class="timeline-copy">
              <p class="timeline-date">{{ item.date }}</p>
              <h3>{{ item.title }}</h3>
              <p>{{ item.copy }}</p>
              <div class="timeline-meta">
                <span v-for="entry in item.meta" :key="entry">{{ entry }}</span>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>

    <section class="launch panel">
      <div class="panel-heading compact">
        <div>
          <p class="section-kicker">Activity Board</p>
          <h2>右侧不再提示开发计划，而是把这块活动区真正当成专题展板来使用。</h2>
        </div>
      </div>

      <div class="task-list task-list-story">
        <article v-for="card in summaryCards" :key="card.title" class="task-card task-card-story">
          <div>
            <p class="task-tag">{{ card.tag }}</p>
            <h3>{{ card.title }}</h3>
            <p class="task-copy">{{ card.copy }}</p>
          </div>
        </article>
      </div>
    </section>
  </section>
</template>
