<template>
    <div id='article'>
      <div v-html="compiledMarkdown"></div>
    </div>
</template>

<script>
import marked from 'marked'

export default {
  name: 'article',
  props: ['text'],
  computed: {
    compiledMarkdown () {
      return marked(this.text)
    }
  },
  watch: {
    text: function () {
      this.$nextTick(function () {
        window.Prism.highlightAll()
      })
    }
  }
}
</script>

<style lang="less" scoped>
#article {
  margin-right: 1%;
}
</style>
