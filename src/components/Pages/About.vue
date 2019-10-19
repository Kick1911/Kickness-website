<template>
  <div id='about'>
    <Page :path="path" />
  </div>
</template>

<script>
import Page from '../Page'

export default {
  name: 'about',
  props: ['path'],
  components: {
    Page
  }
}
</script>

<style lang="less" scoped>

</style>
