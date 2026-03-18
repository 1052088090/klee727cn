<script setup>
const galleryCards = [
  {
    title: '火花骑士立绘集',
    label: 'Portrait',
    copy: '以明亮、轻快的暖色构图去承接可莉最核心的角色识别度，让首页的角色感继续往下延展。',
    tags: ['角色立绘', '红橙主调', '名片感'],
    variant: 'wide',
    image:
      'https://static.wikia.nocookie.net/gensin-impact/images/a/ae/App_Store_Event_Character_Wallpaper_Klee_Version_3.8.png/revision/latest?cb=20240905192309',
    alt: '可莉官方活动角色壁纸',
  },
  {
    title: '海岛夏日画面',
    label: 'Summer',
    copy: '围绕海岛、阳光和轻松节庆感整理出来的一组活动画面，非常适合继续扩成专题图集页。',
    tags: ['夏日活动', '群像氛围'],
    image:
      'https://static.wikia.nocookie.net/gensin-impact/images/9/9f/Blossoming_Starlight_Showcase_1.png/revision/latest?cb=20230624222422',
    alt: '可莉夏日活动展示图之一',
  },
  {
    title: '嘟嘟可主题收藏',
    label: 'Dodo',
    copy: '把嘟嘟可相关的图像、色彩和小道具作为一条独立视觉线，强化可莉的日常记忆。',
    tags: ['嘟嘟可', '周边感'],
    image:
      'https://static.wikia.nocookie.net/gensin-impact/images/9/9b/Blossoming_Starlight_Showcase_2.png/revision/latest?cb=20230624222425',
    alt: '可莉与嘟嘟可相关展示图',
  },
  {
    title: '蒙德日常片段',
    label: 'Daily',
    copy: '从骑士团、禁闭室、街道和轻松日常氛围里提取出更柔软的角色印象，不只停留在战斗主题。',
    tags: ['蒙德城', '日常氛围'],
    image:
      'https://static.wikia.nocookie.net/gensin-impact/images/0/02/4th_Anniversary_Wallpaper_1.png/revision/latest?cb=20241027124611',
    alt: '可莉周年壁纸图',
  },
  {
    title: '爆弹实验手账',
    label: 'Spark',
    copy: '用更活泼的排版和更高饱和的爆点卡去承接“火花骑士”的危险可爱感。',
    tags: ['火元素', '爆点视觉'],
    image:
      'https://static.wikia.nocookie.net/gensin-impact/images/a/a6/3rd_Anniversary_Wallpaper_8.jpg/revision/latest?cb=20231026172814',
    alt: '可莉周年活动壁纸图',
  },
  {
    title: '活动封面预留位',
    label: 'Future',
    copy: '这块保留给后续继续补更多活动图和专题封面，结构已经准备好了，不需要再换版式。',
    tags: ['可继续扩写', '专题延展'],
    image:
      'https://static.wikia.nocookie.net/gensin-impact/images/a/a8/Bombonanza_Klee_Preview.png/revision/latest?cb=20251208032711',
    alt: '可莉活动预告图',
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
