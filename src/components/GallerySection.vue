<script setup>
const sectionKicker = 'Spark Gallery'
const sectionTitle = '\u56fe\u96c6\u7cbe\u9009\u5148\u505a\u6210\u4e00\u9762\u80fd\u7ee7\u7eed\u5f80\u4e0b\u957f\u7684\u53ef\u8389\u89c6\u89c9\u6863\u6848\u5899\u3002'
const sectionCopy =
  '\u8fd9\u91cc\u4e0d\u53ea\u662f\u6446\u56fe\uff0c\u800c\u662f\u628a\u89d2\u8272\u58c1\u7eb8\u3001\u590f\u65e5\u6d3b\u52a8\u3001\u5468\u5e74\u7eaa\u5ff5\u548c\u7206\u5f39\u4e3b\u9898\u6574\u7406\u6210\u4e00\u4e2a\u53ef\u6269\u5c55\u7684\u56fe\u96c6\u5165\u53e3\u3002'

const galleryCards = [
  {
    title: '\u706b\u82b1\u9a91\u58eb\u7acb\u7ed8\u5899',
    label: 'Portrait',
    copy:
      '\u5148\u7528\u6700\u4eae\u773c\u7684\u89d2\u8272\u58c1\u7eb8\u628a\u53ef\u8389\u7684\u8bc6\u522b\u5ea6\u7acb\u4f4f\uff0c\u8ba9\u9996\u5c4f\u4e4b\u5916\u7684\u56fe\u96c6\u533a\u4e5f\u7ee7\u7eed\u4fdd\u7559\u90a3\u79cd\u4e00\u773c\u5c31\u80fd\u8ba4\u51fa\u6765\u7684\u6696\u8272\u51b2\u51fb\u3002',
    tags: [
      '\u89d2\u8272\u7acb\u7ed8',
      '\u7ea2\u6a59\u4e3b\u8c03',
      '\u4e3b\u9898\u6d77\u62a5',
    ],
    variant: 'wide',
    image: '/images/klee/events/version-3.8-klee-wallpaper.webp',
    alt: '\u53ef\u8389 Version 3.8 \u5b98\u65b9\u58c1\u7eb8',
  },
  {
    title: '\u590f\u65e5\u7fa4\u50cf\u753b\u9762',
    label: 'Summer',
    copy:
      '\u628a\u590f\u65e5\u6d3b\u52a8\u91cc\u6700\u8f7b\u5feb\u7684\u989c\u8272\u3001\u821e\u53f0\u611f\u548c\u8282\u5e86\u6c14\u5473\u6536\u8fdb\u540c\u4e00\u7ec4\u753b\u9762\u91cc\uff0c\u56fe\u96c6\u533a\u81ea\u7136\u5c31\u4f1a\u53d8\u6210\u6574\u7ad9\u6700\u70ed\u95f9\u7684\u4e00\u5c42\u3002',
    tags: [
      '\u590f\u65e5\u6d3b\u52a8',
      '\u7fa4\u50cf\u6c1b\u56f4',
    ],
    image: '/images/klee/gallery/blossoming-starlight-showcase-1.webp',
    alt: '\u53ef\u8389\u590f\u65e5\u6d3b\u52a8\u5c55\u793a\u56fe',
  },
  {
    title: '\u561f\u561f\u53ef\u4e3b\u9898\u6536\u85cf',
    label: 'Dodo',
    copy:
      '\u561f\u561f\u53ef\u3001\u80cc\u5305\u548c\u5c0f\u9053\u5177\u4f1a\u628a\u53ef\u8389\u7684\u65e5\u5e38\u611f\u62c9\u5f97\u66f4\u8fd1\uff0c\u8ba9\u56fe\u96c6\u4e0d\u53ea\u5269\u4e0b\u6218\u6597\u548c\u6d3b\u52a8\uff0c\u4e5f\u80fd\u4fdd\u7559\u5979\u66f4\u53ef\u7231\u7684\u90a3\u4e00\u9762\u3002',
    tags: [
      '\u561f\u561f\u53ef',
      '\u5468\u8fb9\u611f',
    ],
    image: '/images/klee/gallery/blossoming-starlight-showcase-2.webp',
    alt: '\u53ef\u8389\u4e0e\u561f\u561f\u53ef\u4e3b\u9898\u5c55\u793a\u56fe',
  },
  {
    title: '\u8499\u5fb7\u65e5\u5e38\u5207\u7247',
    label: 'Daily',
    copy:
      '\u5468\u5e74\u548c\u7eaa\u5ff5\u58c1\u7eb8\u91cc\u7684\u53ef\u8389\uff0c\u66f4\u50cf\u662f\u8499\u5fb7\u57ce\u91cc\u6700\u9192\u76ee\u7684\u4eae\u8272\uff0c\u628a\u5979\u4ece\u6d3b\u52a8\u4e3b\u89d2\u91cd\u65b0\u5e26\u56de\u5230\u719f\u6089\u7684\u65e5\u5e38\u7a7a\u6c14\u91cc\u3002',
    tags: [
      '\u8499\u5fb7\u6c14\u6c1b',
      '\u65e5\u5e38\u5370\u8c61',
    ],
    image: '/images/klee/events/anniversary-wallpaper-1.webp',
    alt: '\u53ef\u8389\u5468\u5e74\u7eaa\u5ff5\u58c1\u7eb8',
  },
  {
    title: '\u706b\u82b1\u5b9e\u9a8c\u624b\u518c',
    label: 'Spark',
    copy:
      '\u7528\u66f4\u6d3b\u6f51\u7684\u6784\u56fe\u548c\u66f4\u9ad8\u9971\u548c\u5ea6\u7684\u753b\u9762\uff0c\u628a\u201c\u706b\u82b1\u9a91\u58eb\u201d\u90a3\u79cd\u5371\u9669\u53c8\u53ef\u7231\u7684\u80fd\u91cf\u4e00\u76f4\u5ef6\u7eed\u5230\u56fe\u96c6\u533a\u5e95\u90e8\u3002',
    tags: [
      '\u706b\u5143\u7d20',
      '\u7206\u70b9\u89c6\u89c9',
    ],
    image: '/images/klee/gallery/third-anniversary-wallpaper-8.webp',
    alt: '\u53ef\u8389\u5468\u5e74\u6d3b\u52a8\u58c1\u7eb8',
  },
  {
    title: '\u6d3b\u52a8\u5c01\u9762\u5165\u53e3',
    label: 'Event',
    copy:
      '\u8fd9\u4e00\u683c\u76f4\u63a5\u627f\u63a5\u540e\u9762\u7684\u6d3b\u52a8\u8bb0\u5fc6\u6a21\u5757\uff0c\u8ba9\u56fe\u96c6\u548c\u65f6\u95f4\u7ebf\u4e4b\u95f4\u6709\u8fde\u7eed\u7684\u89c6\u89c9\u5173\u7cfb\uff0c\u800c\u4e0d\u662f\u5f7c\u6b64\u5272\u88c2\u7684\u4e24\u5757\u5185\u5bb9\u3002',
    tags: [
      '\u6d3b\u52a8\u5c01\u9762',
      '\u4e13\u9898\u5ef6\u5c55',
    ],
    image: '/images/klee/events/bombonanza-klee-preview.webp',
    alt: '\u53ef\u8389 Bombonanza \u5b98\u65b9\u9884\u544a\u56fe',
  },
]
</script>

<template>
  <section class="gallery panel reveal" id="gallery">
    <div class="panel-heading">
      <div>
        <p class="section-kicker">{{ sectionKicker }}</p>
        <h2>{{ sectionTitle }}</h2>
      </div>
      <p class="panel-copy">
        {{ sectionCopy }}
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
