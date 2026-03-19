<script setup>
const galleryCards = [
  {
    title: '火花骑士立绘墙',
    label: 'Portrait',
    copy:
      '先用最亮眼的角色壁纸把可莉的识别度立住，让首屏之外的图集区也继续保留那种一眼就能认出来的暖色冲击。',
    tags: ['角色立绘', '红橙主调', '主题海报'],
    variant: 'wide',
    image: '/images/klee/events/version-3.8-klee-wallpaper.webp',
    alt: '可莉 Version 3.8 官方壁纸',
  },
  {
    title: '夏日群像画面',
    label: 'Summer',
    copy:
      '把夏日活动里最轻快的颜色、舞台感和节庆气味收进同一组画面里，图集区自然就会变成整站最热闹的一层。',
    tags: ['夏日活动', '群像氛围'],
    image:
      'https://static.wikia.nocookie.net/gensin-impact/images/9/9f/Blossoming_Starlight_Showcase_1.png/revision/latest?cb=20230624222422',
    alt: '可莉夏日活动展示图',
  },
  {
    title: '嘟嘟可主题收藏',
    label: 'Dodo',
    copy:
      '嘟嘟可、背包和小道具会把可莉的日常感拉得更近，让图集不只剩下战斗和活动，也能保留她更可爱的那一面。',
    tags: ['嘟嘟可', '周边感'],
    image:
      'https://static.wikia.nocookie.net/gensin-impact/images/9/9b/Blossoming_Starlight_Showcase_2.png/revision/latest?cb=20230624222425',
    alt: '可莉与嘟嘟可主题展示图',
  },
  {
    title: '蒙德日常切片',
    label: 'Daily',
    copy:
      '周年和纪念壁纸里的可莉，更像是蒙德城里最醒目的亮色，把她从活动主角重新带回到熟悉的日常空气里。',
    tags: ['蒙德气氛', '日常印象'],
    image: '/images/klee/events/anniversary-wallpaper-1.webp',
    alt: '可莉周年纪念壁纸',
  },
  {
    title: '火花实验手册',
    label: 'Spark',
    copy:
      '用更活泼的构图和更高饱和度的画面，把“火花骑士”那种危险又可爱的能量一直延续到图集区底部。',
    tags: ['火元素', '爆点视觉'],
    image:
      'https://static.wikia.nocookie.net/gensin-impact/images/a/a6/3rd_Anniversary_Wallpaper_8.jpg/revision/latest?cb=20231026172814',
    alt: '可莉周年活动壁纸',
  },
  {
    title: '活动封面入口',
    label: 'Event',
    copy:
      '这一格直接承接后面的活动记忆模块，让图集和时间线之间有连续的视觉关系，而不是彼此割裂的两块内容。',
    tags: ['活动封面', '专题延展'],
    image: '/images/klee/events/bombonanza-klee-preview.webp',
    alt: '可莉 Bombonanza 官方预告图',
  },
]
</script>

<template>
  <section class="gallery panel reveal" id="gallery">
    <div class="panel-heading">
      <div>
        <p class="section-kicker">Spark Gallery</p>
        <h2>图集精选先做成一面能继续往下长的可莉视觉档案墙。</h2>
      </div>
      <p class="panel-copy">
        这里不只是摆图，而是把角色壁纸、夏日活动、周年纪念和爆弹主题整理成一个可扩展的图集入口。
      </p>
    </div>

    <div class="gallery-grid">
      <article
        v-for="card in galleryCards"
        :key="card.title"
        class="gallery-card"
        :class="{ 'gallery-card-wide': card.variant === 'wide' }"
      >
        <div class="gallery-frame">
          <img class="gallery-image" :src="card.image" :alt="card.alt" loading="lazy" />
          <span class="gallery-label">{{ card.label }}</span>
          <div class="gallery-shade"></div>
        </div>
        <div class="gallery-copy">
          <h3>{{ card.title }}</h3>
          <p>{{ card.copy }}</p>
          <div class="gallery-tags">
            <span v-for="tag in card.tags" :key="tag">{{ tag }}</span>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
