<script setup>
const sectionKicker = '\u89d2\u8272\u9635\u5217'
const sectionTitle =
  '\u56f4\u7ed5\u53ef\u8389\u5c55\u5f00\u7684 4 \u4e2a\u89d2\u8272\u4e13\u9898\u5165\u53e3\u3002'
const sectionCopy =
  '\u8fd9\u56db\u5757\u4e0d\u662f\u673a\u68b0\u5206\u680f\uff0c\u800c\u662f\u628a\u53ef\u8389\u6700\u6709\u4ee3\u8868\u6027\u7684\u5185\u5bb9\u62c6\u6210\u56db\u6761\u6700\u5bb9\u6613\u88ab\u7ee7\u7eed\u6269\u5199\u7684\u4e13\u9898\u7ebf\u3002'

const moduleCards = [
  {
    index: '01',
    title: '\u89d2\u8272\u8d44\u6599',
    copy:
      '\u4ece\u8eab\u4efd\u3001\u5143\u7d20\u5230\u89d2\u8272\u6c14\u8d28\uff0c\u8fd9\u4e00\u5757\u8d1f\u8d23\u8ba9\u4eba\u5feb\u901f\u8ba4\u8bc6\u53ef\u8389\uff0c\u4e5f\u8d1f\u8d23\u7ed9\u6574\u7ad9\u5b9a\u4e0b\u6700\u6838\u5fc3\u7684\u89d2\u8272\u5370\u8c61\u3002',
    badges: ['\u706b\u82b1\u9a91\u58eb', '\u8499\u5fb7\u89d2\u8272', '\u89d2\u8272\u540d\u7247'],
    wide: true,
  },
  {
    index: '02',
    title: '\u6218\u6597\u5370\u8c61',
    copy:
      '\u53ef\u8389\u5728\u6218\u6597\u91cc\u603b\u662f\u70ed\u95f9\u53c8\u5371\u9669\uff0c\u706b\u5143\u7d20\u3001\u7206\u88c2\u611f\u548c\u8f7b\u5feb\u8282\u594f\u5171\u540c\u6784\u6210\u5979\u7684\u7b2c\u4e00\u5c42\u9b45\u529b\u3002',
  },
  {
    index: '03',
    title: '\u561f\u561f\u53ef\u4e0e\u65e5\u5e38',
    copy:
      '\u9664\u4e86\u5192\u9669\u548c\u7206\u70b8\uff0c\u53ef\u8389\u6700\u9c9c\u660e\u7684\u65e5\u5e38\u8bb0\u5fc6\u8fd8\u6765\u81ea\u561f\u561f\u53ef\u3001\u9a91\u58eb\u56e2\u7167\u770b\u548c\u7981\u95ed\u5ba4\u8fd9\u4e9b\u719f\u6089\u573a\u666f\u3002',
  },
  {
    index: '04',
    title: '\u6d3b\u52a8\u4e13\u9898',
    copy:
      '\u590f\u65e5\u6d3b\u52a8\u3001\u6d77\u5c9b\u8bb0\u5fc6\u548c\u5404\u79cd\u8f7b\u5feb\u53c8\u6e29\u6696\u7684\u5267\u60c5\u7247\u6bb5\uff0c\u8ba9\u53ef\u8389\u59cb\u7ec8\u662f\u6700\u9002\u5408\u505a\u4e13\u9898\u9875\u6c14\u6c1b\u6838\u5fc3\u7684\u89d2\u8272\u4e4b\u4e00\u3002',
    accent: true,
  },
]
</script>

<template>
  <section class="modules panel reveal" id="modules">
    <div class="panel-heading">
      <div>
        <p class="section-kicker">{{ sectionKicker }}</p>
        <h2>{{ sectionTitle }}</h2>
      </div>
      <p class="panel-copy">
        {{ sectionCopy }}
      </p>
    </div>

    <div class="module-grid">
      <article
        v-for="card in moduleCards"
        :key="card.index"
        class="module-card"
        :class="{ 'module-card-wide': card.wide, 'module-card-accent': card.accent }"
      >
        <p class="module-index">{{ card.index }}</p>
        <h3>{{ card.title }}</h3>
        <p>{{ card.copy }}</p>
        <div v-if="card.badges" class="module-badges">
          <span v-for="badge in card.badges" :key="badge">{{ badge }}</span>
        </div>
      </article>
    </div>
  </section>
</template>
