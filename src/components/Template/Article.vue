<template>
    <div id='article'>
      <vue-markdown :source="text"></vue-markdown>
    </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'

export default {
  name: 'article',
  props: ['text'],
  components: {
    VueMarkdown
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
