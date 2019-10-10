<template>
  <div id="nav">
    <ul>
      <li v-for="item in this.$props.items"
        :key="item.id"
        v-on:click="$nav.$content(this, item.content)">
        <a>{{ item.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'Nav',
  props: ['items', 'onclick']
}
</script>

<style lang="less" scoped>
#nav{
  top: 0;
  left: 0;
  width: 100%;
  ul{
    overflow: hidden;
    list-style-type: none;
    margin: 0;
    li{
      float: left;
      text-align: center;
      padding: 0.6%;
      text-decoration: none;
      font-size: medium;
      cursor: pointer;
      &:hover {
        background-color: #ddd;
        color: black;
      }
      &.active {
        background-color: #4CAF50;
        color: white;
      }
    }
  }
}
</style>
