<template>
    <div id="main">
        <Nav class="nav" v-on:nav="navigate"
            :items="pages" />
        <component class="page" :path="page.path"
                  :is="page.component"></component>
    </div>
</template>

<script>
import Nav from './Nav'
import Page from './Page'
import Home from './Home'
import Blog from './Blog'
import About from './About'
import NavList from './NavList'
import NotFound from './NotFound'
import pages from '../data/pages'
import routes from '../data/routes'

export default {
  name: 'Main',
  props: ['app'],
  data () {
    return {
      page: pages[routes[window.location.pathname]],
      pages: pages
    }
  },
  methods: {
    navigate: function (page) {
      console.log('Path has changed')
      history.pushState({ id: page.component }, page.title, page.path)
      this.page = page
    }
  },
  components: {
    Page,
    NavList,
    Nav,
    Home,
    Blog,
    About,
    NotFound
  }
}
</script>

<style lang="less">
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

  .page {
    height: inherit;
  }
}
</style>
