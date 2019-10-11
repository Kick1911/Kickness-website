<template>
    <div id='blog'>
      <div class="flex">
          <div class="sidebar">
              <NavList :items="blogs" v-on:nav="blog = $event" />
          </div>
          <div class="content">
              <Page :path="get_path" />
          </div>
      </div>
    </div>
</template>

<script>
import NavList from './NavList'
import Page from './Page'
import blogs from '../data/blogs'

export default {
  name: 'blog',
  props: ['path'],
  data () {
    return {
      blogs,
      blog: this.$props.path.replace('/blog/', '')
    }
  },
  computed: {
    get_path: function () {
      return 'blog/' + this.blog
    }
  },
  components: {
    NavList,
    Page
  }
}
</script>

<style lang="less" scoped>
#blog {
  height: inherit;
  .flex {
    display: flex;
    height: inherit;
    flex-wrap: wrap;
    .sidebar {
      width: 35%;
      height: 90%;
      padding: 2%;
      margin-right: 1%;
      box-shadow: 6px -5px 10px -8px #ccc;
    }
    .content {
      width: 56%;
      height: 90%;
      padding: 2%;
      box-shadow: -7px -5px 10px -8px #ccc;
    }
  }
}
</style>
