<template>
    <div id="page">
      <div v-if="this.data">
        <div>
          <h4>{{ data.title }}</h4>
          <p>{{ data.body }}</p>
        </div>
      </div>
      <div v-else>
        <h1>Still a WIP</h1>
      </div>
    </div>
</template>

<script>

export default {
  name: 'Page',
  props: ['data']
}
</script>

<style lang="less" scoped>
#page{
  & > div {
    text-align: center;
    height: 100%;
    & > * {
      margin-top: 50%;
    }
  }
}
</style>
