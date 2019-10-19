<template>
  <div id='profile'>
    <Page :path="path" />
  </div>
</template>

<script>
import Page from '../Page'

export default {
  name: 'profile',
  props: ['path'],
  components: {
    Page
  }
}
</script>

<style lang="less" scoped>
#profile {
  padding: 10px;
}
</style>
