<template>
    <div id="main">
        <Nav class="nav"
            :items="nav" :onclick="$getPage" />
        <div class="flex board">
          <div class="sidebar">
            <Page :data="app.page" />
          </div>
          <div class="content">
            <p>Placeholder</p>
          </div>
      </div>
    </div>
</template>

<script>
import Nav from './Nav'
import Page from './Page'
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
    box-shadow: 0px 3px 6px -2px #ccc;
  }

  .flex {
    display: flex;
    flex-wrap: wrap;
    .sidebar {
      width:40%;
      box-shadow: 3px 3px 6px -2px #ccc;
    }
    .content {
      width: 60%;
    }
  }
}
</style>
