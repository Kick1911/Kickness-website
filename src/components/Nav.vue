<template>
    <div id="nav">
        <ul>
            <li v-for="item in this.$parent.nav"
                v-bind:key="item.id"
                v-on:click="selectTab">
                <a>{{ item.title }}</a>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
  name: 'Nav',
  methods: {
    selectTab (event) {
      this.$parent.page = this.data
    }
  }
}
</script>

<style lang="less" scoped>
#nav{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background-color: black;
    z-index: 2;
    ul{
        background-color: #333;
        overflow: hidden;
        list-style-type: none;
        li{
            float: left;
            color: #f2f2f2;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
            font-size: 17px;
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
