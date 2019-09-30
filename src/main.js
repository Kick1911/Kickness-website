import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VuePrism from 'vue-prism'
import controllers from './controllers'
import 'prismjs/themes/prism.css'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(controllers)
Vue.use(VuePrism)

new Vue({
  render: h => h(App)
}).$mount('#app')
