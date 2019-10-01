<template>
    <div id="page">
      <div v-if="this.data">
        <component :is="data.header.template">{{data.body}}</component>
      </div>
      <div v-else>
        <h1>Still a WIP</h1>
      </div>
    </div>
</template>

<script>
import Article from './Page/Article'

export default {
  name: 'Page',
  props: ['data'],
  components: {
    Article
  },
  watch: {
    data: function (val) {
      let buffer = ''
      const style = val.header.style || {}
      for (const k in style) {
        buffer += k + ':' + style[k] + ';'
      }
      this.$el.style = buffer
    }
  }
}
</script>

<style lang="less" scoped>
#page{
  overflow: auto;
  & > div {
    height: 100%;
  }
}
</style>
