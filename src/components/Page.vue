<template>
    <div id="page">
      <div v-if="this.body">
        <component :is="header.template" :text="body"></component>
      </div>
      <div v-else>
        <h1>Still a WIP</h1>
      </div>
    </div>
</template>

<script>
import Article from './Template/Article'
import YAML from 'yaml'

export default {
  name: 'Page',
  props: ['path'],
  components: {
    Article
  },
  data () {
    return {
      header: {},
      body: 'No Content Fetched'
    }
  },
  watch: {
    path: {
      immediate: true,
      handler (val) {
        console.log('Getting new Path:', val)
        this.axios.get(`/content/${val}.md`).then(res => {
          const index = res.data.indexOf('\n---')
          const header = res.data.substring(0, index)
          const body = res.data.substring(index).replace('---', '')
          const doc = YAML.parseDocument(header)

          this.header = doc.toJSON()
          this.body = body
        }).catch(function (error) {
          console.error(error)
        })
      }
    },
    header: function (val) {
      let buffer = ''
      if(!val){ return }
      const style = val.style || {}
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
  height: 100%;
  & > div {
    height: 100%;
    overflow: auto;
    padding-right: 2%;
  }
}
</style>
