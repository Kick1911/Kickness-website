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
import NavList from '../NavList'
import Page from '../Page'
import blogs from '../../assets/maps/blog'

export default {
  name: 'blog',
  props: ['path'],
  data () {
    return {
      blogs,
      blog: this.$props.path.replace('/blog/', '')
    }
  },
  watch: {
    blog: function (val) {
      const page = {
        title: val,
        component: 'Blog',
        path: '/blog/' + val
      }
      this.$emit('nav', page)
    }
  },
  computed: {
    get_path: function () {
      return '/blog/' + this.blog || 'index'
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
      height: inherit;
      margin-right: 1%;
      box-shadow: 6px -5px 10px -8px #ccc;
      & > * {
        margin: 2%;
      }
    }
    .content {
      width: 64%;
      height: inherit;
      box-shadow: -7px -5px 10px -8px #ccc;
      & > * {
        margin-right: 2%;
        margin-left: 2%;
      }
    }
  }
}
</style>
