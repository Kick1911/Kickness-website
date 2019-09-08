<template>
    <div id="main">
        <Nav />
        <Cover />
        <div class="container">
          <div class="row">
            <div class="col-sm-8">
              <Page />
            </div>
            <div class="col-sm-4">
              <p>Placeholder</p>
            </div>
          </div>
      </div>
    </div>
</template>

<script>
import Cover from './Cover'
import Nav from './Nav'
import Page from './Page'
import pages from '../data/pages'

export default {
  name: 'Main',
  data () {
    return {
      page: pages[0],
      nav: pages
    }
  },
  computed: {
    centerPanel (event) {
      return import('./' + this.$data.center_panel)
    }
  },
  components: {
    Page,
    Cover,
    Nav
  }
}
</script>

<style lang="less" scoped>
#main {
  .container {
    margin-top: 4rem;
  }
}
</style>
