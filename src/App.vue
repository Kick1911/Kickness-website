<template>
  <div id="app">
    <Main :app="app" v-on:updateAppData="updateAppData" />
  </div>
</template>

<script>
import Main from './components/Main.vue'

export default {
  name: 'app',
  components: {
    Main
  },
  data () {
    return {
      app: {}
    }
  },
  methods: {
    updateAppData (obj) {
      console.log('Update app data')
      var temp = {}
      for (const k in this.app) {
        temp[k] = this.app[k]
      }
      for (const k in obj) {
        temp[k] = obj[k]
      }
      this.app = temp
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Ubuntu&display=swap');
#app {
  font-family: 'Ubuntu', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
