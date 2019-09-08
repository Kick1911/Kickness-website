<template>
    <div id="page">
        <div class="card">
            <h4 class="card-title">{{ page.title }}</h4>
            <p class="card-text">{{ get_content }}</p>
        </div>
    </div>
</template>

<script>
import YAML from 'yaml'

export default {
  name: 'Page',
  data () {
    return {
      page: this.$parent.page
    }
  },
  computed: {
    get_content () {
      this.axios.get('/assets/home.yaml').then(res => {
        return res.data
      })
    }
  }
}
</script>
