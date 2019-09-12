<template>
    <div id="page">
        <div class="card">
          <div v-if="this.data">
            <h4 class="card-title">{{ data.title }}</h4>
            <p class="card-text">{{ data.body }}</p>
          </div>
          <div v-else>
            <h1>Still a WIP</h1>
          </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Page',
  props: ['data']
}
</script>
