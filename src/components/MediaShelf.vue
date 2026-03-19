<script setup>
const sectionKicker = '\u56fe\u96c6\u4e0e\u8bed\u97f3'
const sectionTitle =
  '\u628a\u53ef\u8389\u6700\u9002\u5408\u88ab\u53cd\u590d\u56de\u770b\u7684\u5185\u5bb9\u6536\u8fdb\u540c\u4e00\u5c42\u5165\u53e3\u3002'
const sectionCopy =
  '\u56fe\u96c6\u3001\u8bed\u97f3\u548c\u6d3b\u52a8\u8bb0\u5fc6\u662f\u53ef\u8389\u4e13\u9898\u7ad9\u6700\u81ea\u7136\u7684\u4e09\u5757\u5185\u5bb9\uff0c\u4e5f\u662f\u6700\u9002\u5408\u7ee7\u7eed\u6269\u6210\u72ec\u7acb\u9875\u9762\u7684\u90e8\u5206\u3002'
const openLabel = '\u6253\u5f00'

const mediaCards = [
  {
    title: '\u56fe\u96c6\u7cbe\u9009',
    tag: '\u56fe\u96c6',
    href: '#gallery',
    copy:
      '\u6536\u7eb3\u53ef\u8389\u7684\u89d2\u8272\u7acb\u7ed8\u3001\u6d3b\u52a8\u63d2\u56fe\u3001\u590f\u65e5\u573a\u666f\u548c\u8f7b\u677e\u5192\u9669\u6c14\u6c1b\uff0c\u8ba9\u6574\u7ad9\u968f\u65f6\u90fd\u80fd\u5f80\u56fe\u96c6\u9875\u6269\u5c55\u3002',
    meta: [
      '\u89d2\u8272\u7acb\u7ed8',
      '\u590f\u65e5\u6d3b\u52a8',
      '\u6696\u8272\u753b\u9762',
    ],
  },
  {
    title: '\u8bed\u97f3\u7cbe\u9009',
    tag: '\u8bed\u97f3',
    href: '#voice',
    copy:
      '\u628a\u53ef\u8389\u6700\u6709\u4ee3\u8868\u6027\u7684\u53f0\u8bcd\u3001\u62db\u547c\u3001\u5192\u9669\u8bed\u6c14\u548c\u561f\u561f\u53ef\u76f8\u5173\u77ed\u53e5\u653e\u8fdb\u4e00\u4e2a\u66f4\u8f7b\u677e\u7684\u8bed\u97f3\u5165\u53e3\u91cc\u3002',
    meta: [
      '\u89d2\u8272\u53f0\u8bcd',
      '\u8f7b\u5feb\u8bed\u6c14',
      '\u64ad\u653e\u5668\u5165\u53e3',
    ],
  },
  {
    title: '\u6d3b\u52a8\u8bb0\u5fc6',
    tag: '\u6d3b\u52a8',
    href: '#timeline',
    copy:
      '\u56f4\u7ed5\u53ef\u8389\u51fa\u73b0\u8fc7\u7684\u91cd\u8981\u6d3b\u52a8\u4e0e\u8282\u65e5\u8bb0\u5fc6\u505a\u4e13\u9898\u5361\uff0c\u65e2\u80fd\u627f\u63a5\u5267\u60c5\u56de\u5fc6\uff0c\u4e5f\u80fd\u7ef4\u6301\u6574\u4e2a\u9875\u9762\u7684\u70ed\u95f9\u611f\u3002',
    meta: [
      '\u6d77\u5c9b\u8bb0\u5fc6',
      '\u6d3b\u52a8\u8282\u70b9',
      '\u4e13\u9898\u5ef6\u5c55',
    ],
  },
]
</script>

<template>
  <section class="media panel reveal" id="media">
    <div class="panel-heading">
      <div>
        <p class="section-kicker">{{ sectionKicker }}</p>
        <h2>{{ sectionTitle }}</h2>
      </div>
      <p class="panel-copy">
        {{ sectionCopy }}
      </p>
    </div>

    <div class="warehouse-grid">
      <article v-for="card in mediaCards" :key="card.title" class="warehouse-card">
        <div class="warehouse-top">
          <span class="warehouse-tag">{{ card.tag }}</span>
          <a class="warehouse-link" :href="card.href">{{ openLabel }}</a>
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
