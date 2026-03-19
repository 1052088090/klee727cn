<script setup>
const sectionKicker = 'Activity Memory'
const sectionTitle =
  '\u53ef\u8389\u6700\u70ed\u95f9\u7684\u8bb0\u5fc6\uff0c\u901a\u5e38\u90fd\u53d1\u751f\u5728\u9633\u5149\u3001\u8282\u5e86\u548c\u5192\u9669\u4e00\u8d77\u51fa\u73b0\u7684\u65f6\u5019\u3002'
const boardKicker = 'Activity Board'
const boardTitle =
  '\u53f3\u4fa7\u4e0d\u518d\u63d0\u793a\u5f00\u53d1\u8ba1\u5212\uff0c\u800c\u662f\u628a\u8fd9\u5757\u6d3b\u52a8\u533a\u771f\u6b63\u5f53\u6210\u4e13\u9898\u5c55\u677f\u6765\u4f7f\u7528\u3002'

const timelineItems = [
  {
    date: '1.6 \u590f\u65e5\u7bc7',
    title: '\u91d1\u82f9\u679c\u7fa4\u5c9b\u7684\u7b2c\u4e00\u5c01\u9080\u8bf7',
    copy:
      '\u4ece\u6d77\u98ce\u3001\u6d6a\u82b1\u548c\u561f\u561f\u53ef\u7684\u547c\u5524\u5f00\u59cb\uff0c\u53ef\u8389\u6700\u5bb9\u6613\u88ab\u8bb0\u4f4f\u7684\u590f\u65e5\u5370\u8c61\uff0c\u51e0\u4e4e\u90fd\u80fd\u8ffd\u6eaf\u5230\u8fd9\u4e00\u6bb5\u8f7b\u5feb\u53c8\u660e\u4eae\u7684\u7fa4\u5c9b\u5192\u9669\u3002',
    image: '/images/klee/events/midsummer-island-adventure.webp',
    alt: '\u53ef\u8389\u76f8\u5173\u6d3b\u52a8 Midsummer Island Adventure \u5b98\u65b9\u5c01\u9762',
    meta: [
      '\u91d1\u82f9\u679c\u7fa4\u5c9b',
      '\u6d77\u5c9b\u5192\u9669',
      '\u590f\u65e5\u8bb0\u5fc6',
    ],
  },
  {
    date: '3.8 \u590f\u65e5\u7bc7',
    title: '\u6e05\u590f\uff01\u4e50\u56ed\uff1f\u5927\u79d8\u5883\uff01',
    copy:
      '\u4e50\u56ed\u6c14\u606f\u3001\u5f69\u8272\u88c5\u7f6e\u548c\u66f4\u9971\u6ee1\u7684\u8282\u5e86\u6c1b\u56f4\uff0c\u628a\u53ef\u8389\u7684\u5192\u9669\u611f\u4ece\u6d77\u5c9b\u5ef6\u4f38\u5230\u66f4\u5b8c\u6574\u7684\u590f\u5b63\u4e3b\u9898\u821e\u53f0\u91cc\u3002',
    image: '/images/klee/events/version-3.8-klee-wallpaper.webp',
    alt: '\u53ef\u8389 Version 3.8 \u5b98\u65b9\u6d3b\u52a8\u58c1\u7eb8',
    meta: [
      '\u79d8\u5883\u4e50\u56ed',
      '\u5f69\u8272\u821e\u53f0',
      '\u7248\u672c\u4e3b\u89c6\u89c9',
    ],
  },
  {
    date: '\u7206\u5f39\u4e3b\u9898',
    title: 'Bombonanza \u7684\u706b\u82b1\u9884\u544a',
    copy:
      '\u8fd9\u7c7b\u56f4\u7ed5\u7206\u5f39\u3001\u8bd5\u70bc\u548c\u4e3b\u9898\u6311\u6218\u5c55\u5f00\u7684\u9884\u544a\u56fe\uff0c\u628a\u53ef\u8389\u6700\u9c9c\u660e\u7684\u5371\u9669\u53ef\u7231\u611f\u76f4\u63a5\u63a8\u5230\u753b\u9762\u6b63\u4e2d\u592e\uff0c\u4e13\u9898\u6c14\u8d28\u4e5f\u6700\u5f3a\u3002',
    image: '/images/klee/events/bombonanza-klee-preview.webp',
    alt: '\u53ef\u8389 Bombonanza \u5b98\u65b9\u9884\u544a\u56fe',
    meta: [
      '\u7206\u5f39\u4e3b\u9898',
      '\u6d3b\u52a8\u9884\u544a',
      '\u706b\u82b1\u9a91\u58eb',
    ],
  },
  {
    date: '\u5468\u5e74\u753b\u9762',
    title: '\u8282\u5e86\u5408\u7167\u91cc\u7684\u53ef\u8389',
    copy:
      '\u5230\u4e86\u5468\u5e74\u5e86\u548c\u7fa4\u50cf\u7eaa\u5ff5\u56fe\u91cc\uff0c\u53ef\u8389\u5f80\u5f80\u4f1a\u53d8\u6210\u6700\u5148\u88ab\u770b\u89c1\u7684\u4eae\u8272\u4e4b\u4e00\uff0c\u8d1f\u8d23\u628a\u6574\u5f20\u753b\u9762\u7684\u6c14\u6c1b\u70b9\u4eae\u3002',
    image: '/images/klee/events/anniversary-wallpaper-1.webp',
    alt: '\u53ef\u8389\u5468\u5e74\u7eaa\u5ff5\u5b98\u65b9\u58c1\u7eb8',
    meta: [
      '\u5468\u5e74\u58c1\u7eb8',
      '\u7fa4\u50cf\u7eaa\u5ff5',
      '\u8499\u5fb7\u65e5\u5e38',
    ],
  },
]

const summaryCards = [
  {
    tag: 'Activity Look',
    title: '\u6d3b\u52a8\u533a\u73b0\u5728\u662f\u771f\u5b9e\u5c01\u9762\u6863\u6848',
    copy:
      '\u4e0d\u518d\u662f\u5f00\u53d1\u6001\u8bf4\u660e\u5361\uff0c\u800c\u662f\u53ef\u7ee7\u7eed\u6269\u5145\u7684\u53ef\u8389\u6d3b\u52a8\u89c6\u89c9\u65f6\u95f4\u7ebf\u3002',
  },
  {
    tag: 'Summer Mood',
    title: '\u91cd\u70b9\u4fdd\u7559\u6d77\u5c9b\u548c\u590f\u65e5\u7ae0\u8282',
    copy:
      '\u56e0\u4e3a\u53ef\u8389\u6700\u5f3a\u7684\u6d3b\u52a8\u8bc6\u522b\u5ea6\uff0c\u672c\u6765\u5c31\u96c6\u4e2d\u5728\u660e\u4eae\u3001\u70ed\u95f9\u3001\u5e26\u6709\u5047\u65e5\u6c14\u5473\u7684\u590f\u5b63\u7bc7\u7ae0\u3002',
  },
  {
    tag: 'Klee Signal',
    title: '\u7206\u5f39\u3001\u561f\u561f\u53ef\u548c\u8282\u5e86\u611f\u5e76\u5217\u51fa\u73b0',
    copy:
      '\u8fd9\u4e00\u5757\u4f1a\u6301\u7eed\u627f\u63a5\u540e\u9762\u7684\u6d3b\u52a8\u56fe\u3001\u4e13\u9898\u5c01\u9762\u548c\u7248\u672c\u89c6\u89c9\uff0c\u4e0d\u7528\u518d\u6539\u7ed3\u6784\u3002',
  },
]
</script>

<template>
  <section class="story-grid reveal">
    <section class="timeline panel" id="timeline">
      <div class="panel-heading compact">
        <div>
          <p class="section-kicker">{{ sectionKicker }}</p>
          <h2>{{ sectionTitle }}</h2>
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
          <p class="section-kicker">{{ boardKicker }}</p>
          <h2>{{ boardTitle }}</h2>
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
