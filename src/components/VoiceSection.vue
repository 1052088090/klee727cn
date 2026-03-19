<script setup>
const sectionKicker = '\u8bed\u97f3\u80f6\u56ca'
const sectionTitle =
  '\u628a\u53ef\u8389\u7684\u8bed\u6c14\u3001\u60c5\u7eea\u548c\u65e5\u5e38\u8282\u594f\u6536\u8fdb\u4e00\u7ec4\u53ef\u76f4\u63a5\u8bd5\u542c\u7684\u8bed\u97f3\u5361\u91cc\u3002'
const sectionCopy =
  '\u8fd9\u4e00\u533a\u5df2\u7ecf\u63a5\u4e0a\u672c\u5730\u97f3\u9891\uff0c\u73b0\u5728\u4e0d\u53ea\u80fd\u770b\u5230\u53ef\u8389\u7684\u8bed\u97f3\u5206\u7c7b\uff0c\u4e5f\u80fd\u76f4\u63a5\u542c\u5230\u5979\u7684\u62db\u547c\u3001\u5192\u9669\u6c14\u53e3\u548c\u563f\u563f\u53ef\u65e5\u5e38\u3002'
const voiceBadge = '\u8bed\u97f3'
const audioFallback = '\u4f60\u7684\u6d4f\u89c8\u5668\u6682\u4e0d\u652f\u6301\u97f3\u9891\u64ad\u653e\u3002'

const voiceCards = [
  {
    scene: '\u95ee\u5019',
    title: '\u4e00\u5f00\u53e3\u5c31\u5e26\u7740\u706b\u82b1\u611f',
    copy:
      '\u89d2\u8272\u62a5\u5230\u65f6\u7684\u62db\u547c\u8bed\u6c14\uff0c\u6700\u80fd\u76f4\u63a5\u542c\u51fa\u53ef\u8389\u90a3\u79cd\u8f7b\u5feb\u3001\u76f4\u63a5\u3001\u5b8c\u5168\u85cf\u4e0d\u4f4f\u5174\u594b\u7684\u72b6\u6001\u3002',
    audio: '/audio/klee/hello.ogg',
  },
  {
    scene: '\u5192\u9669',
    title: '\u603b\u60f3\u5f80\u66f4\u8fdc\u7684\u5730\u65b9\u8dd1',
    copy:
      '\u8fd9\u4e00\u6761\u6700\u9002\u5408\u653e\u5728\u5192\u9669\u5370\u8c61\u91cc\uff0c\u6574\u53e5\u90fd\u5e26\u7740\u201c\u9a6c\u4e0a\u51fa\u95e8\u201d\u201c\u9a6c\u4e0a\u53bb\u73a9\u201d\u7684\u51b2\u52a8\u611f\u3002',
    audio: '/audio/klee/adventures.ogg',
  },
  {
    scene: '\u561f\u561f\u53ef',
    title: '\u6700\u7a33\u5b9a\u7684\u60c5\u7eea\u951a\u70b9',
    copy:
      '\u53ea\u8981\u63d0\u5230\u561f\u561f\u53ef\uff0c\u6574\u4e2a\u89d2\u8272\u7684\u7ae5\u8da3\u3001\u4f9d\u8d56\u611f\u548c\u5c0f\u5c0f\u4e16\u754c\u89c2\u5c31\u4f1a\u7acb\u523b\u5b8c\u6574\u8d77\u6765\u3002',
    audio: '/audio/klee/dodoco.ogg',
  },
  {
    scene: '\u9a91\u58eb\u56e2',
    title: '\u88ab\u7167\u770b\uff0c\u4e5f\u88ab\u5934\u75bc',
    copy:
      '\u548c\u7434\u76f8\u5173\u7684\u8bed\u97f3\u6700\u80fd\u628a\u201c\u6709\u70b9\u5bb3\u6015\uff0c\u4f46\u53c8\u5f88\u4f9d\u8d56\u201d\u7684\u90a3\u5c42\u5173\u7cfb\u6e05\u6670\u5730\u8868\u73b0\u51fa\u6765\u3002',
    audio: '/audio/klee/about-jean.ogg',
  },
  {
    scene: '\u65e9\u5b89',
    title: '\u4e00\u9192\u6765\u5c31\u60f3\u53bb\u73a9',
    copy:
      '\u8fd9\u6761\u975e\u5e38\u9002\u5408\u653e\u5728\u9996\u9875\u8bd5\u542c\uff0c\u8f7b\u677e\u3001\u660e\u4eae\uff0c\u800c\u4e14\u51e0\u4e4e\u662f\u53ef\u8389\u65e5\u5e38\u72b6\u6001\u7684\u6d53\u7f29\u7248\u3002',
    audio: '/audio/klee/good-morning.ogg',
  },
  {
    scene: '\u665a\u5b89',
    title: '\u70ed\u95f9\u4e4b\u540e\u4ecd\u7136\u67d4\u8f6f',
    copy:
      '\u591c\u665a\u8bed\u97f3\u80fd\u628a\u70ed\u95f9\u6536\u4f4f\uff0c\u7559\u4e0b\u90a3\u79cd\u5f88\u5c0f\u5f88\u8f7b\u3001\u9700\u8981\u88ab\u5e26\u56de\u5bb6\u7684\u89d2\u8272\u5c3e\u97f3\u3002',
    audio: '/audio/klee/good-night.ogg',
  },
]
</script>

<template>
  <section class="voice panel reveal" id="voice">
    <div class="panel-heading">
      <div>
        <p class="section-kicker">{{ sectionKicker }}</p>
        <h2>{{ sectionTitle }}</h2>
      </div>
      <p class="panel-copy">
        {{ sectionCopy }}
      </p>
    </div>

    <div class="voice-grid">
      <article v-for="card in voiceCards" :key="card.title" class="voice-card">
        <div class="voice-head">
          <span class="voice-scene">{{ card.scene }}</span>
          <span class="voice-badge">{{ voiceBadge }}</span>
        </div>
        <h3>{{ card.title }}</h3>
        <p>{{ card.copy }}</p>
        <audio class="voice-audio" :src="card.audio" controls preload="none">
          {{ audioFallback }}
        </audio>
        <div class="voice-wave" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </article>
    </div>
  </section>
</template>
