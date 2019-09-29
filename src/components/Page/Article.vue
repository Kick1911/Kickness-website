<template>
    <div>
      <VueMarkdown><slot /></VueMarkdown>
    </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
// import Prism from 'prismjs'

export default {
  name: 'Article',
  components: {
    VueMarkdown
  }
}
</script>
