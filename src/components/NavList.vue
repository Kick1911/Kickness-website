<template>
  <div id='navlist'>
    <ul>
      <li v-for="item of items"
        :key="item.id"
        v-on:click="$emit('nav', item)">
        <a>{{ no_dash(item) }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'navlist',
  props: ['items', 'path_prefix'],
  methods: {
    no_dash: function (val) {
      return val.replace(/-/g, ' ')
    }
  }
}
</script>

<style lang="less" scoped>
#navlist {
  ul {
    padding: 0px;
    list-style-type: none;
    li {
      cursor: pointer;
      text-align: justify;
      padding: 5px;
      &:hover {
        box-shadow: 1px 3px 7px 0px #ccc;
      }
      a {
        text-transform: capitalize;
      }
    }
  }
}
</style>
