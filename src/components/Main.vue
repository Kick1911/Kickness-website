<template>
    <div id="main">
        <Nav class="nav"
            :items="pages" />
        <component :is="main_content"></component>
    </div>
</template>

<script>
import Nav from './Nav'
import Page from './Page'
import NavList from './NavList'
import NotFound from './NotFound'
import pages from '../data/pages'
import routes from '../data/routes'

export default {
  name: 'Main',
  props: ['app'],
  data () {
    return {
      page: pages[0].content,
      pages: pages
    }
  },
  computed: {
    main_content: function () {
      return routes[window.location.hash] || 'NotFound'
    }
  },
  methods: {
    navigate: function (val) {
      this.page = val
    }
  },
  components: {
    Page,
    NavList,
    Nav
  }
}
</script>

<style lang="less" scoped>
#main {
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  .nav {
    box-shadow: 0px 2px 7px -2px #ccc;
    margin-bottom: 1%;
  }

  .destination {
    height: 92%;
  }

  .flex {
    display: flex;
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
