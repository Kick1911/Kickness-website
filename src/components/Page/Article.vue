<template>
    <div>
      <vue-markdown :source="$slots.default[0].text" />
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
