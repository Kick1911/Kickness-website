<template>
    <div id="main">
        <Nav class="nav"
            :items="nav" :onclick="$getPage" />
        <div class="flex board">
          <div class="sidebar">
            <NavList :items="nav" :onclick="$getPage" />
          </div>
          <div class="content">
            <Page :data="app.page" />
          </div>
      </div>
    </div>
</template>

<script>
import Nav from './Nav'
import Page from './Page'
import NavList from './NavList'
import pages from '../data/pages'

export default {
  name: 'Main',
  props: ['app'],
  data () {
    return {
      nav: pages
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
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  .board {
    height: 100%;
    * {
      height: 100%;
    }
  }

  .nav {
    box-shadow: 0px 2px 7px -2px #ccc;
  }

  .flex {
    display: flex;
    flex-wrap: wrap;
    .sidebar {
      width: 39%;
      margin-right: 1%;
      box-shadow: 6px -5px 10px -8px #ccc;
    }
    .content {
      width: 56%;
      padding: 2%;
      box-shadow: -7px -5px 10px -8px #ccc;
    }
  }
}
</style>
