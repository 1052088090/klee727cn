<script setup>
const galleryCards = [
  {
    title: '火花骑士立绘集',
    label: 'Portrait',
    copy: '以明亮、轻快的暖色构图去承接可莉最核心的角色识别度，让首页的角色感继续往下延展。',
    tags: ['角色立绘', '红橙主调', '名片感'],
    variant: 'wide',
  },
  {
    title: '海岛夏日画面',
    label: 'Summer',
    copy: '围绕海岛、阳光和轻松节庆感整理出来的一组活动画面，非常适合继续扩成专题图集页。',
    tags: ['夏日活动', '群像氛围'],
  },
  {
    title: '嘟嘟可主题收藏',
    label: 'Dodo',
    copy: '把嘟嘟可相关的图像、色彩和小道具作为一条独立视觉线，强化可莉的日常记忆。',
    tags: ['嘟嘟可', '周边感'],
  },
  {
    title: '蒙德日常片段',
    label: 'Daily',
    copy: '从骑士团、禁闭室、街道和轻松日常氛围里提取出更柔软的角色印象，不只停留在战斗主题。',
    tags: ['蒙德城', '日常氛围'],
  },
  {
    title: '爆弹实验手账',
    label: 'Spark',
    copy: '用更活泼的排版和更高饱和的爆点卡去承接“火花骑士”的危险可爱感。',
    tags: ['火元素', '爆点视觉'],
  },
  {
    title: '活动封面预留位',
    label: 'Future',
    copy: '这块保留给后续继续补更多活动图和专题封面，结构已经准备好了，不需要再换版式。',
    tags: ['可继续扩写', '专题延展'],
  },
]
</script>

<template>
  <section class="gallery panel reveal" id="gallery">
    <div class="panel-heading">
      <div>
        <p class="section-kicker">Spark Gallery</p>
        <h2>图集精选先做成可扩展的视觉档案墙。</h2>
      </div>
      <p class="panel-copy">
        这一段先不用真实图片文件，而是把未来图集页的结构、标题层级和信息卡逻辑先搭起来。
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
          <span class="gallery-label">{{ card.label }}</span>
          <div class="gallery-glow"></div>
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
