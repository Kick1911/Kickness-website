<template>
    <div>
      <vue-markdown :source="text"></vue-markdown>
    </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'

export default {
  name: 'Article',
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
