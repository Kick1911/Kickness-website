<template>
    <div>
      <vue-markdown><slot /></vue-markdown>
    </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'

export default {
  name: 'Article',
  components: {
    VueMarkdown
  }
}
</script>
